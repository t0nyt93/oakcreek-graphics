var pt = [ 'Computer-Graphics','Artificial-Intelligence', 'OpenGL-Shaders'];  //project types

angular.module('routerApp').controller( 'projectCtrl',[
    '$scope', '$stateParams',
    function($scope, $stateParams){
        $scope.project_name = $stateParams.projectType
        $scope.message = 'HelloWorld from the projects controller!';
        $scope.projects= [
            {
                'name': pt[0],
                'description': 'Projects involving OpenGL and basic Computer Graphics concepts.',
                'projects':
                [{
                    "name":"Ray Trace Engine",
                    "github" : "https://github.com/t0nyt93/RayTraceEngine",
                    "desc" : "C++ based Ray Trace Engine including shadows as well as OpenMP parallelization. \n REQUIRES: Visual Studio, OpenGL, and OpenMP. ",
                    "image_root" : "images/graphics/ray-trace/",
                    "images" : ["five.png","four.png","six.png"]
                }]
            },
            {
                'name': pt[2],
                'description': 'Projects involving Vertex, Tessellation, Geometry, and Fragment shaders...',
                'projects':
                [{
                    "name":"Image Processing",
                    "project_type":pt[2],
                    "github" : "https://github.com/t0nyt93/Image-Modification",
                    "desc" : " Bitmap Manipulation using GLSL. A circular or Rectangular \"Magic Lens\" provides the ability to rotate, magnify, and sharpen a subsection of the image. \n REQUIRES: OpenGL, GlMan ( See the About Page ), Windows.",
                    "image_root" : "images/shaders/image-manipulation/",
                    "images" : ["base.png","baseRotation.png","circleLens.png","circlerot.png","justZoom.png","zoomIn.png"]
                },
                {
                    "name":"Bump Mapping",
                    "project_type":pt[2],
                    "github" : "TBA",
                    "desc" : "Basic texture mapping using Displacement and Bump mapping techniques",
                    "image_root" : "images/shaders/mapping/",
                    "images" : ["one.png","two.bmp","three.png","four.png"]
                },
                {
                    "name":"Geometric Displacement Shader",
                    "project_type":pt[2],
                    "github" : "https://github.com/t0nyt93/Displacement-and-Noise",
                    "desc" : "Sends Cosine waves along the X and Y coordinates of a flat surface\. Their is also control over lighting allowing for the use of Bump Mapping.",
                    "image_root" : "images/shaders/sin-sheet/",
                    "images" : ["one.png","two.bmp","three.png","four.png","five.png","six.png"]
                }
            ]},
            {
                'name': pt[1],
                'description': 'Python scripts focused on basic Artificial Intelligence topics such as Search Algorithms and Learning Algorithms.',
                'projects':
                [{
                    "name":"Basic Search Algorithms",
                    "project_type":pt[1],
                    "github" : "https://github.com/t0nyt93/MissionairiesAndCannibals",
                    "desc" : "Python script comparing the runtime of Breadth-First, Depth-First, Iterative Deepening, and A-Star search Algorithms. These Algorithms are implemented in a game of Missionaries and Cannibals, the scripts usage is available in the Github README.",
                    "image_root" : "images/ai/search/",
                    "images" : ["one.jpg","two.jpg","three.jpg"]
                },
                {
                    "name":"Sarcasm Detection Learning Algorithm",
                    "project_type":pt[1],
                    "github" : "https://github.com/t0nyt93/SarcasmDetector",
                    "desc" : "Python based Learning Algorithm designed to detect sarcastic tweets based on training data. ",
                    "image_root" : "images/ai/learning/",
                    "images" : ["cover.jpg"]

                }]
            }];

                $scope.getProjects = function( project_type ){
                    var return_list = [];
                    for( var i = 0; i < $scope.projects.length; i++)
                    {
                        if ($scope.projects[i].name == project_type )
                        {
                            return $scope.projects[i].projects;
                        }
                    }
                };

            }]);


