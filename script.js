


// enum for project type 
const projectType = {
    WEB: "web",
    GAME_DEVELOPMENT: "game development",
    ALL: "all",
    MACHINE_LEARNING: "machine learning"
}

//project constructor
function Project(title,url,img, description, type) {
    this.title = title;
    this.img = img;
    this.url = url;
    this.description = description;
    this.type = type;

}


var full_project_list = []
//book review app
full_project_list.push(new Project(
    "Book Review APP",
    "https://book-review112.herokuapp.com/",
    "img/book_review_app.png",
    "A book review app built using flask and bootstrap4. A user can login or regitor into their account and search for books. There are 5000 books in the databsae. User can post review, check the rating score from other user.",
    projectType.WEB

));
//GalleryDisplay
full_project_list.push(new Project(
    "Art Gallery",
    "https://lamonkey.github.io/cs50/",
    "img/art_gallery.png",
    "Art peice presenting website. A static web page used flexbox, grid and media query to accomplished the responsive design",
    projectType.WEB

));

//Bezerk
full_project_list.push(new Project(
    "Bezerk Video Game",
    "https://lamonkey.github.io/Bezerk/",
    "img/bezerk.png",
    "A 3D version of Bezerk, User can use ASWD to move and aim, and use space to fire. Player will die either got hit or collide with enemy or the wall. This game is built using WebGL",
    projectType.WEB

));

//game Engine
full_project_list.push(new Project(
    "Game Engine",
    "https://github.com/Lamonkey/gameEngine",
    "img/game_engine.jpg",
    "It can support the development of multiply 2-D games. The structure of this game engine is very simple. First when an event is raised, can be triggered by user input, or been programmed to be raised at certain scenarios.  Event Handler will handle events according to their priority in parellel fashion. Then the server part will send infomation need to be rendered to client part. ",
    projectType.GAME_DEVELOPMENT

));

//salary prediction
full_project_list.push(new Project(
    "NBA Player's Salary Prediction",
    "https://github.com/Lamonkey/PredictSalary",
    "img/salary_prediction.png",
    "This is a model built to predict the NBA player's salary based on their stats. I used the data from the 2015-2016 season,322 basketball players in total. Then did data cleaning and used linear regression to select 8 features out of 25. Finally, I trained then hyper tuned KNN, Decision Tree, and ANN using the test set and produced three models using three different machine learning methods to predict NBA players' salary.",
    projectType.MACHINE_LEARNING

));

//An enemy of People
full_project_list.push(new Project(
    "An Enemy of People",
    "https://lamonkey.github.io/An_enemy_of_people/",
    "img/an_enemy_of_people.png",
    "This is an interactive text-based game I and my friend made using Twine. The historical setting is at the Soviet Union. The player plays as a Soviet commander. During the play through player have to solve the puzzle , making choices between good and evil. we added multi-ending, artwork, and music to this game. Some of the artworks are drawn by us, some are mosaiced noncopy right image.",
    projectType.GAME_DEVELOPMENT

));




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
