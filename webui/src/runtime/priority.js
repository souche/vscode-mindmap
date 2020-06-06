define(function (require, exports, module) {

    function PriorityRuntime() {
        var minder = this.minder;
        var hotbox = this.hotbox;
        var lang = this.lang.t;

        var main = hotbox.state('main');

        main.button({
            position: 'top',
            label: lang('main', 'runtime/priority'),
            key: 'P',
            next: 'priority',
            enable: function () {
                return minder.queryCommandState('priority') != -1;
            }
        });

        var priority = hotbox.state('priority');
        '123456789'.replace(/./g, function (p) {
            priority.button({
                position: 'ring',
                label: 'P' + p,
                key: p,
                action: function () {
                    minder.execCommand('Priority', p);
                }
            });
        });

        priority.button({
            position: 'center',
            label: lang('remove', 'runtime/priority'),
            key: 'Del',
            action: function () {
                minder.execCommand('Priority', 0);
            }
        });

        priority.button({
            position: 'top',
            label: lang('esc', 'runtime/priority'),
            key: 'esc',
            next: 'back'
        });

    }

    return module.exports = PriorityRuntime;

});