angular.module('kityminderEditor').directive('progressEditor', [
  'commandBinder',
  function(commandBinder) {
    return {
      restrict: 'E',
      templateUrl: 'ui/directive/progressEditor/progressEditor.html',
      scope: {
        minder: '=',
      },
      replace: true,
      link: function($scope) {
        var minder = $scope.minder;
        var progresses = [];

        for (var i = 0; i < 10; i++) {
          progresses.push(i);
        }

        commandBinder.bind(minder, 'progress', $scope);

        $scope.progresses = progresses;

        $scope.getProgressTitle = function(p) {
          switch (p) {
            case 0:
              return 'clear';
            case 1:
              return 'undone';
            case 9:
              return 'done';
            default:
              return 'done' + (p - 1) + '/8';
          }
        };
      },
    };
  },
]);
