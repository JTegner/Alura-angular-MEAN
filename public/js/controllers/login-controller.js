angular.module('alurapic')
.controller('LoginController', function($scope, $http, $location) {

    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.autenticar = function() {
        var usuario = $scope.usuario;
        $http.post('/autenticar', 
            {login: usuario.login, senha: usuario.senha})
            .then(function () {
                $location.path('/'); //vai para endereco principal da aplicacao
            }, function(error) {
                console.log(error);
                $scope.usuario = {};
                $scope.mensagem = 'Login ou senha inválidos';
            });
    }

});