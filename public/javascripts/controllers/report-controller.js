(function() {
'use strict';

  angular
    .module('app')
    .controller('ReportController', ReportController);

  ReportController.$inject = ['$scope', '$state', 'Upload', 'PostService', '$timeout'];

  function ReportController($scope, $state, Upload, PostService, $timeout) {
    let vm = this;

    vm.createPost = function(subject, category, description, name, phone, email) {
      PostService.save({
        subject,
        category,
        description,
        name,
        phone,
        email
      }, data => $state.go('thankyou'));
    }

    $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        console.log(file);
        if (file) {
            file.upload = Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                method: 'POST',
                data: {file: file}
            });
            console.log(file, errFiles);

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                                         evt.loaded / evt.total));
            });
        }
    }

  }

})();
