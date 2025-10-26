export const buildAppLinkUrl = () => {
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

export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}