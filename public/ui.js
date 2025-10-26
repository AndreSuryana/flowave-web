export class UiBase {
    
    #instructionText = document.getElementById('instruction');
    #statusText = document.getElementById('status');

    _setInstructionContent(html) {
        if (this.#instructionText) {
            this.#instructionText.innerHTML = '';
            this.#instructionText.innerHTML = html;
        }
    }

    setStatusText(msg, isError = false) {
        if (this.#statusText) {
            this.#statusText.textContent = msg;
            this.#statusText.style.color = isError ? '#ef4444' : '';
        }
    }

    showInstructions() {
        throw new Error("Not implemented");
    }

    showLink(url) {
        throw new Error("Not implemented");
    }
}