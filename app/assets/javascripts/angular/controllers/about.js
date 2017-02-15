angular.module('routerApp')
    .controller( 'AboutCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the AboutCtrl!';
            $scope.languages = [
                {"name":"C & C++",
                    "rank":"1"
                },
                {"name":"Python & Django",
                    "rank":"2"
                },
                {"name":"OpenGL & WebGL",
                    "rank":"3"
                },
                {"name":"GLSL",
                    "rank":"4"
                },
                {"name":"Javascript",
                    "rank":"5"
                },
                {"name":"Node & AngularJs",
                    "rank":"6"
                },
                {"name":"Ruby & Rails",
                    "rank":"7"
                },
                {"name":"OpenMP & OpenCL",
                    "rank":"8"
                }];
        }]);
