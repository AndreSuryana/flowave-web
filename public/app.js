const qrContainer = document.getElementById('qrContainer');
const statusText = document.getElementById('status');

function setStatus(msg, isError = false) {
  if (statusText) {
    statusText.textContent = msg;
    statusText.style.color = isError ? '#ef4444' : '';
  }
}

function buildAppLinkUrl() {
    try {
        const current = new URL(window.location.href);
        const params = current.searchParams;

        const continueUrl = decodeURIComponent(params.get('continueUrl'));
        
        const apiKey = params.get('apiKey');
        const mode = params.get('mode');
        const oobCode = params.get('oobCode');
        const lang = params.get('lang');

        if (!apiKey || !mode || !oobCode) {
            return null;
        }

        const url = new URL(continueUrl);

        url.searchParams.set('apiKey', apiKey);
        url.searchParams.set('mode', mode);
        url.searchParams.set('oobCode', oobCode);
        url.searchParams.set('lang', lang ? lang : 'en');

        return url.href;
    } catch (err) {
        console.error('Error building app link', err);
        return null;
    }
}

function showQr(content) {
    if (!qrContainer) {
        console.error('Canvas not found.');
        return;
    }

    // Clear previous QR if re-rendered
    qrContainer.innerHTML = '';

    new QRCode(qrContainer, {
        text: content,
        width: 260,
        height: 260,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Main
const url = buildAppLinkUrl()
if (url) {
    showQr(url);
} else {
    setStatus('No valid sign-in link detected.', true);
    console.warn('Could not construct url.');
}