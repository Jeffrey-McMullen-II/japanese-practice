import { Component } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';

export const primeVueComponents = new Map<string, Component>([
    ['p-button', Button],
    ['p-card', Card]
]);
