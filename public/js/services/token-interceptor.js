//este interceptador tem a funcao de incluir o token no header da requisicao
//senao em todas as requisicoes get, post, etc, espalhadas pela aplicacao teriam que 
//inserir o token
//foi injetado no main o $httpprovider

angular.module('alurapic')
    .factory('tokenInterceptor', function($window, $q, $location) {

        var interceptor = {};

        interceptor.response = function(response) {
            //essa funccao vai ser chamada toda vez que houver uma resposta do servidor
            console.log('Recebi resposta');
            var token = response.headers('x-access-token');
            if(token) {
                $window.sessionStorage.token = token;
                console.log('Armazenando token recebido no navegador');
            }
            return response;
        };

        interceptor.request = function(config) {
            //recebe ele mesmo senao um objeto em branco
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers['x-access-token'] = $window.sessionStorage.token;
                console.log('Adicionando token no header da requisicao para ser enviada para o servidor');
            }
            return config;           
        };

        interceptor.responseError = function(rejection) {
            if(rejection != null && rejection.status == 401) {
                delete $window.sessionStorage.token;
                $location.path('/login');
            }

            return $q.rejection(rejection);
        };

        return interceptor;

    });
