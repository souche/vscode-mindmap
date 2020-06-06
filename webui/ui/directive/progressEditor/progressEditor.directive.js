angular.module('kityminderEditor').directive('progressEditor', [
  'commandBinder',
  function (commandBinder) {
    return {
      restrict: 'E',
      templateUrl: 'ui/directive/progressEditor/progressEditor.html',
      scope: {
        minder: '=',
      },
      replace: true,
      link: function ($scope) {
        var minder = $scope.minder;
        var lang = editor.lang.t;
        var progresses = [];

        for (var i = 0; i < 10; i++) {
          progresses.push(i);
        }

        commandBinder.bind(minder, 'progress', $scope);

        $scope.progresses = progresses;

        $scope.getProgressTitle = function (p) {
          return lang('p' + p, 'ui/progress');
        };
      },
    };
  },
]);
