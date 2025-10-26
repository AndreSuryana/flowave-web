import { UiMobile } from './ui-mobile.js';
import { UiWeb } from './ui-web.js';
import { isMobileDevice, buildAppLinkUrl } from './utils.js';

// Initialize ui handler
const ui = isMobileDevice() ? new UiMobile() : new UiWeb();

// Retrieve the app link
const url = buildAppLinkUrl()
if (url) {
    ui.showInstructions()
    ui.showLink(url)
} else {
    ui.setStatusText('No valid sign-in link detected.', true)
    console.warn('Could not construct url.');
}