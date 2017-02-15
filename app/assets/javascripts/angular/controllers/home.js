angular.module('routerApp')
    .controller( 'HomeCtrl',[
        '$scope',
        function($scope){
            $scope.message = 'HelloWorld from the HomeCtrl!';
            $scope.cover_photo = "/images/main.jpg";
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
            $scope.project_cards = [
                {
                    'image':"/images/graphics/ray-trace/six.png",
                    'headline':"Computer Graphics",
                    'body': "Projects ranging from a simple Particle System to a more complicated Ray Tracing Engine.",
                    'buttons' : [ "Explore Projects", "View on Github" ]
                },
                {
                    'image':"/images/ai/search/ai.jpg",
                    'headline':"Artificial Intelligence",
                    'body': "Implementations of Breadth First, Depth First, and A-Star search algorithms, as well as a Learning Algorithm that detects sarcasm.",
                    'buttons' : [ "Explore Projects", "View on Github" ]
                },
                {
                    'image':"/images/shaders/image-manipulation/zoomIn.png",
                    'headline':"GLSL Shaders",
                    'body': "Examples of tessellation, displacement mapping, surface noise and image modification using OpenGL shaders.",
                    'buttons' : [ "Explore Projects", "View on Github" ]
                },
                {
                    'image':"/images/parallel/cover.jpg",
                    'headline':"Parallel Computing",
                    'body': "Parallelization using OpenMP and Graphics related parallelization using OpenCL.",
                    'buttons' : [ "Explore Projects", "View on Github" ]
                }


            ]
        }]);
