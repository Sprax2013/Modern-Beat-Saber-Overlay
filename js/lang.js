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

    return SUPPORTED_LANG[query.get('lang')] || SUPPORTED_LANG['en'];
}();