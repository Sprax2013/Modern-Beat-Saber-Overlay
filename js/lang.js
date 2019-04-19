const lang = function () {
    const SUPPORTED_LANG = {
        en: {
            combo: 'Combo',
            points: 'Points',
            thousandsSeparator: ',',

            error: 'Installation instructions: <a href="https://github.com/Sprax2013/Modern-Beat-Saber-Overlay#installation-obs">https://github.com/Sprax2013/Modern-Beat-Saber-Overlay#installation-obs</a><br><hr><br>Looks like you are visiting the page outside of OBS (Your browser blocked the request to Beat Saber).<br><br>If you use the page outside of OBS and see this message, I ask you to report the error at <a href="https://github.com/Sprax2013/Modern-Beat-Saber-Overlay/issues">https://github.com/Sprax2013/Modern-Beat-Saber-Overlay/issues</a>.'
        },

        de: {
            combo: 'Combo',
            points: 'Punkte',
            thousandsSeparator: '.',

            error: 'Installationsanweisungen: <a href="https://github.com/Sprax2013/Modern-Beat-Saber-Overlay#installation-obs">https://github.com/Sprax2013/Modern-Beat-Saber-Overlay#installation-obs</a><br><hr><br>Anscheinend besuchen Sie die Seite außerhalb von OBS (Ihr Browser hat die Anfrage an Beat Saber blockiert).<br><br>Wenn Sie die Seite außerhalb von OBS verwenden und diese Meldung sehen, bitte ich Sie, den Fehler unter <a href="https://github.com/Sprax2013/Modern-Beat-Saber-Overlay/issues">https://github.com/Sprax2013/Modern-Beat-Saber-Overlay/issues</a> zu melden.'
        }
    };

    let langCode = query.get('lang') || 'en';

    document.documentElement.lang = langCode;
    return SUPPORTED_LANG[langCode] || SUPPORTED_LANG['en'];
}();