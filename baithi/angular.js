var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
    console.log("my controller......");

    $scope.users = [
        {name: " ", Name:"Product One", fullname:""},
        {name: " ", email:"Product Tow", fullname:""},
        {name: " ", email:"Product four", fullname:""},
        {name: " ", email:"Product Five", fullname:""},
        
    ];
    $scope.addUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message ="new User Added successfully";
    };
    $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user;
    };
    $scope.sditUser = function(){
        $scope.clickedUser = user;
    };
    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indrxOf($scope.clickedUser));
        $scope.message = "User Deleted successfully";
    };
    $scope.clearMessage = function() {
         $scope.message = "";
    }
});