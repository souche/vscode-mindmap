/**
 * initial kityminder-editor
 */
angular
  .module('kityminderDemo', ['kityminderEditor'])
  .config(function(configProvider) {
    configProvider.set('imageUpload', '../server/imageUpload.php');
  })
  .controller('MainController', function($scope) {
    $scope.initEditor = function(editor, minder) {
      window.editor = editor;
      window.minder = minder;

      /**
       * receive message event from extension
       */
      window.addEventListener('message', function(event) {
        window.message = event.data;
        const { command } = window.message;

        switch (command) {
          case 'import':
            try {
              const importData = JSON.parse(window.message.importData);
              window.minder.importJson(importData);
            } catch (ex) {
              console.error(ex);
            }
            break;
        }
      });

      window.addEventListener('keydown', e => {
        const keyCode = e.keyCode || e.which || e.charCode;
        const ctrlKey = e.ctrlKey || e.metaKey;
        if (ctrlKey && keyCode === 83) {
          const btnSave = document.querySelector('.km-export-save');
          btnSave.click();
        }
      });

      window.vscode.postMessage({
        command: 'loaded',
      });
    };
  });
