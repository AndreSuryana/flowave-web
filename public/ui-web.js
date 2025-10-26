import { UiBase } from './ui.js';

export class UiWeb extends UiBase {

    #qrContainer = document.getElementById('qrContainer');
    
    showInstructions() {
        this._setInstructionContent('Open the Flowave app on your phone, go to <strong>Sign in with QR</strong>, and scan the code below to continue.')
    }

    showLink(url) {
        if (!this.#qrContainer) {
            console.error('Canvas not found.');
            return;
        }

        // Show the container
        this.#qrContainer.classList.remove('hidden');
    
        // Clear previous QR if re-rendered
        this.#qrContainer.innerHTML = '';
    
        new QRCode(this.#qrContainer, {
            text: url,
            width: 260,
            height: 260,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}