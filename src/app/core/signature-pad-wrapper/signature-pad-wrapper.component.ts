/* eslint-disable */

import { Options, Vue } from 'vue-class-component';
import SignaturePad from 'signature_pad';
import mergeImages from 'merge-images';
import {
  DEFAULT_OPTIONS,
  TRANSPARENT_PNG,
  IMAGE_TYPES,
  checkSaveType,
  convertToNonReactive
} from './signature-pad-wrapper.config';

@Options({
  props: {
    refName: { type: String },
    width: { type: String },
    height: { type: String },
    customStyle: { type: Object },
    options: { type: Object },
    images: { type: Array }
  },
  watch: {
    options: function (nextOptions) {
      Object.keys(nextOptions).forEach(option => {
        if (this.signaturePad[option]) {
          this.signaturePad[option] = nextOptions[option];
        }
      });
    }
  }
})
export default class SignaturePadWrapper extends Vue {
  refName = '';
  width = '100%';
  height = '100%';
  customStyle = () => ({});
  options = () => ({});
  images = []

  signaturePad!: any;
  cacheImages!: any;
  signatureData = TRANSPARENT_PNG;
  onResizeHandler!: any;
  canvas: any | null = null;

  get propsImagesAndCustomImages() {
    const nonReactiveProrpImages = convertToNonReactive(this.images);
    const nonReactiveCachImages = convertToNonReactive(this.cacheImages);
    return [...nonReactiveProrpImages, ...nonReactiveCachImages];
  }

  get canvasRef() {
    return `${this.refName}Canvas`;
  }

  mounted() {
    const { options } = this;
    this.canvas = this.$refs[this.canvasRef];
    const signaturePad = new SignaturePad(this.canvas, {
      ...DEFAULT_OPTIONS,
      ...options
    });
    this.signaturePad = signaturePad;
    this.onResizeHandler = this.resizeCanvas.bind(this);
    window.addEventListener('resize', this.onResizeHandler, false);
    this.resizeCanvas();
  }

  resizeCanvas() {
    const data = this.signaturePad.toData();
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvas.getContext('2d').scale(ratio, ratio);
    this.signaturePad.clear();
    this.signatureData = TRANSPARENT_PNG;
    this.signaturePad.fromData(data);
  }

  saveSignature(type = IMAGE_TYPES[0], encoderOptions: any) {
    const { signaturePad } = this;
    const status = { isEmpty: false, data: undefined };
    if (!checkSaveType(type)) {
      const imageTypesString = IMAGE_TYPES.join(', ');
      throw new Error(
        `The Image type is incorrect! We only support ${imageTypesString} types.`
      );
    }
    if (signaturePad.isEmpty()) {
      return {
        ...status,
        isEmpty: true
      };
    } else {
      this.signatureData = signaturePad.toDataURL(type, encoderOptions);
      return {
        ...status,
        data: this.signatureData
      };
    }
  }

  undoSignature() {
    const { signaturePad } = this;
    const record = signaturePad.toData();
    if (record) {
      return signaturePad.fromData(record.slice(0, -1));
    }
  }

  mergeImageAndSignature(customSignature: any) {
    this.signatureData = customSignature;
    return mergeImages([
      ...this.images,
      ...this.cacheImages,
      this.signatureData
    ]);
  }

  addImages(images = []) {
    this.cacheImages = [...this.cacheImages, ...images];
    return mergeImages([
      ...this.images,
      ...this.cacheImages,
      this.signatureData
    ]);
  }

  fromDataURL(data: any, options = {}, callback: any) {
    return this.signaturePad.fromDataURL(data, options, callback);
  }

  fromData(data: any) {
    return this.signaturePad.fromData(data);
  }

  toData() {
    return this.signaturePad.toData();
  }

  lockSignaturePad() {
    return this.signaturePad.off();
  }

  openSignaturePad() {
    return this.signaturePad.on();
  }

  isEmpty() {
    return this.signaturePad.isEmpty();
  }

  getPropImagesAndCacheImages() {
    return this.propsImagesAndCustomImages;
  }

  clearCacheImages() {
    this.cacheImages = [];
    return this.cacheImages;
  }

  clearSignature() {
    return this.signaturePad.clear();
  }

  beforeDestroy() {
    if (this.onResizeHandler) {
      window.removeEventListener('resize', this.onResizeHandler, false);
    }
  }
}
