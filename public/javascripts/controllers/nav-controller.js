(function() {
'use strict';

  angular
    .module('app')
    .controller('NavController', NavController);

  NavController.$inject = ['$http', '$state', 'UserService'];

  function NavController($http, $state, UserService) {
    var vm = this;

    vm.logout = function() {
      UserService.logout();
      $state.go('welcome');
    };

    vm.getUser = UserService.getUser;
    vm.isLoggedIn = UserService.isLoggedIn;

    $http.get('/api/users/me').then(function(res) {
      vm.user = res.data;
    });
  }

})();
