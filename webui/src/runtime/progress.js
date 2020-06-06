define(function (require, exports, module) {

    function ProgressRuntime() {
        var minder = this.minder;
        var hotbox = this.hotbox;
        var lang = this.lang.t;

        var main = hotbox.state('main');

        main.button({
            position: 'top',
            label: lang('main', 'runtime/progress'),
            key: 'G',
            next: 'progress',
            enable: function () {
                return minder.queryCommandState('progress') != -1;
            }
        });

        var progress = hotbox.state('progress');
        '012345678'.replace(/./g, function (p) {
            progress.button({
                position: 'ring',
                label: 'G' + p,
                key: p,
                action: function () {
                    minder.execCommand('Progress', parseInt(p) + 1);
                }
            });
        });

        progress.button({
            position: 'center',
            label: lang('remove', 'runtime/progress'),
            key: 'Del',
            action: function () {
                minder.execCommand('Progress', 0);
            }
        });

        progress.button({
            position: 'top',
            label: lang('esc', 'runtime/progress'),
            key: 'esc',
            next: 'back'
        });


    }

    return module.exports = ProgressRuntime;

});