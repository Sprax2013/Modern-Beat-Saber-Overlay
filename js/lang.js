const lang = function () {
    const SUPPORTED_LANG = {
        en: {
            combo: 'Combo',
            points: 'Points',
            thousandsSeparator: ','
        },

        de: {
            combo: 'Combo',
            points: 'Punkte',
            thousandsSeparator: '.'
        }
    };

    let langCode = query.get('lang') || 'en';

    document.documentElement.lang = langCode;
    return SUPPORTED_LANG[langCode] || SUPPORTED_LANG['en'];
}();