angular.module('kityminderEditor')
  .filter('lang', ['config', function (config) {
    return function (text, block) {
      var lang = config.get('lang');
      return window.editor.lang.t(text, block, lang);
    };
  }]);