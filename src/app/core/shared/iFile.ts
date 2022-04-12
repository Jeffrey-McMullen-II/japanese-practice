export default interface iFile {
    fileId: number,
    fileName: string,
    fileType: string,
    fileContents: string | ArrayBuffer
}