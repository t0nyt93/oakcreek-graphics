angular.module('routerApp')
    .controller( 'WebGlCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the WebglCtrl!';
        }]);
