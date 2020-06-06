define(function(require, exports, module) {
    var langList = {
        'en': require('../l10n/en'),
        'de': require('../l10n/de'),
        'es': require('../l10n/es'),
        'fr': require('../l10n/fr'),
        'it': require('../l10n/it'),
        'zh_CN': require('../l10n/zh_CN'),
        'zh_TW': require('../l10n/zh_TW')
    };
    var defaultLang = 'en';
    function lang(text, block, lang) {
        if (lang === undefined) {
            lang = defaultLang;
        }
        var dict = langList[lang];
        if (dict === undefined) {
            dict = langList['en'];
        }
        block.split('/').forEach(function(ele, idx) {
            dict = dict[ele];
        });

        if (dict === undefined || dict === null) {
            return text;
        }

        return dict[text] || text;

    }

    return module.exports = {
        setDefaultLang : function(lang) {
            if (langList[lang] !== undefined) {
                defaultLang = lang;
                return true;
            }
            return false;
        },
        t: lang
    };
});
