import { UiBase } from "./ui.js";

export class UiMobile extends UiBase {
    #btnOpen = document.getElementById('openApp');
    
    showInstructions() {
        this._setInstructionContent('Continue to Flowave app to finish sign-in process.');
    }

    // Redirect directly to the app link with supported manual button
    showLink(url) {
        if (this.#btnOpen) {
            this.#btnOpen.style.display = 'block';
            this.#btnOpen.onclick = () => window.location.href = url;
        }
        
        let countdown = 3; // in seconds
        this.setStatusText(`Opening Flowave app in ${countdown}...`);

        const interval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                this.setStatusText(`Opening Flowave app in ${countdown}...`);
            } else {
                clearInterval(interval);
                this.setStatusText('Opening Flowave app...');
                window.location.href = url;
            }
        }, 1000);
    }
}