


// enum for project type 
const projectType = {
    WEB: "web",
    GAME_DEVELOPMENT: "game development",
    ALL: "all",
    MACHINE_LEARNING: "machine learning"
}

//project constructor
function Project(title,img, description, type) {
    this.title = title;
    this.img = img;
    this.description = description;
    this.type = type;

}
// var full_project_list = new Object();
// full_project_list[new Project("img","web project1",projectType.WEB)] = projectType.WEB;
// full_project_list[new Project("img","web project2",projectType.WEB)] = projectType.WEB;
// full_project_list[new Project("img","game 1",projectType.GAME_DEVELOPMENT)] = projectType.GAME_DEVELOPMENT;
// full_project_list[new Project("img","machine learning",projectType.MACHINE_LEARNING)] = projectType.MACHINE_LEARNING;

//get project by type

var full_project_list = []
full_project_list.push(new Project("webapp1","/img/Firefox_wallpaper.png", "web project1", projectType.WEB));
full_project_list.push(new Project("webapp2","/img/Firefox_wallpaper.png", "web project2", projectType.WEB));
full_project_list.push(new Project("game 1","/img/Firefox_wallpaper.png", "game 1", projectType.GAME_DEVELOPMENT));
full_project_list.push(new Project("machine learning","/img/Firefox_wallpaper.png", "machine learning", projectType.MACHINE_LEARNING));


function getProjectByType(type) {
    switch (type) {
        case projectType.ALL:
            return full_project_list;
        case projectType.GAME_DEVELOPMENT:
            tmp_list = [];
            for (var p in full_project_list) {
                if (full_project_list[p].type == projectType.GAME_DEVELOPMENT){
                    tmp_list.push(full_project_list[p]);
                }

            }
            return tmp_list;
        case projectType.WEB:
            tmp_list = [];
            for (var p in full_project_list) {
                if (full_project_list[p].type == projectType.WEB){
                    tmp_list.push(full_project_list[p]);
                }

            }
            return tmp_list;
        case projectType.MACHINE_LEARNING:
            tmp_list = [];
            for (var p in full_project_list) {
                if (full_project_list[p].type == projectType.MACHINE_LEARNING){
                    tmp_list.push(full_project_list[p]);
                }

            }
            return tmp_list;

    }
}




var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {

    $scope.projects = getProjectByType(projectType.ALL);

    $scope.showAll = function () {
        $scope.projects = getProjectByType(projectType.ALL);
    };

    $scope.showGame = function () {
        $scope.projects = getProjectByType(projectType.GAME_DEVELOPMENT);
    }
    $scope.showWeb = function () {
        $scope.projects = getProjectByType(projectType.WEB);
    }
    $scope.showMachineLearning = function () {
        $scope.projects = getProjectByType(projectType.MACHINE_LEARNING);
    }

});
