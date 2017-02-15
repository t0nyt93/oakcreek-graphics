angular.module('routerApp', ['ui.router', 'templates']).
    config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider){
            $stateProvider
                .state('projects', {
                    url: '/projects/:projectType',
                    views: {
                        '': {templateUrl:'projects/project_base.html'},
                        'nav@projects': {templateUrl:'partials/navbar.html'},
                        'content@projects': {
                            templateUrl:'projects/projects.html',
                            controller: 'projectCtrl'
                        },
                    }
                })
                .state('projects.detail', {
                    url: '/projects/:project_type/:project_id',
                    templateUrl: 'project_detail.html',
                    controller: 'ProjectDetailCtrl'
                })
                .state('home', {
                    url: '/home',
                    views: {
                        '': {templateUrl : 'home/home_base.html' },
                        'nav@home':{ templateUrl : 'partials/navbar.html'},
                        'body@home':{
                            templateUrl : 'home/home_content.html',
                            controller: 'HomeCtrl'
                        },
                        'about@home':{ templateUrl : 'about.html',
                                       controller: 'HomeCtrl'
                        },
                        'contact@home':{ templateUrl : 'contact.html'}
                    }
                })
                .state('about', {
                    url: '/about',
                    views: {
                        '': {templateUrl : 'about/about_base.html' },
                        'nav@about':{ templateUrl : 'partials/navbar.html'},
                        'body@about':{
                            templateUrl : 'about/about_content.html',
                            controller: 'AboutCtrl'
                        },
                    }
                })
                .state('contact', {
                    url: '/contact',
                    views: {
                        '': {templateUrl : 'contact/contact_base.html' },
                        'nav@contact':{ templateUrl : 'partials/navbar.html'},
                        'body@contact':{
                            templateUrl : 'contact/contact_content.html',
                            controller: 'ContactCtrl'
                        },
                    }
                })
                .state('webgl', {
                    url: '/webgl',
                    views: {
                        '': {templateUrl : 'webgl/webgl_base.html' },
                        'nav@webgl':{ templateUrl : 'partials/navbar.html'},
                        'body@webgl':{
                            templateUrl : 'webgl/webgl_canvas.html',
                            controller: 'WebGlCtrl'
                            }
                    }
                });

            $urlRouterProvider.otherwise('home');

            $locationProvider.html5Mode({
                enabled:true,
                requireBase: false
            });
        }]);
