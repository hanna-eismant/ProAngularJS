var app = angular.module("controllerInheritanceApp", []);

app.controller("topLevelCtrl", function ($scope) {
    $scope.data = {
        dataValue: "Hello, Hanna"
    };

    $scope.reverseText = function () {
        $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
    };

    $scope.changeCase = function () {
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function (char, index) {
            result.push(index % 2 == 1 ? char.tiString().toUpperCase() : char.toString().toLowerCase());
        });
        $scope.data.dataValue = result.join("");
    };
});

app.controller("firstChildCtrl", function ($scope) {
    $scope.changeCase = function () {
        $scope.data.dataValue = $scope.data.dataValue.toUpperCase();
    };
});

app.controller("secondChildCtrl", function ($scope) {
    $scope.changeCase = function () {
        $scope.data.dataValue = $scope.data.dataValue.toLowerCase();
    };

    $scope.shiftFour = function () {
        var result = [];
        angular.forEach($scope.data.dataValue.split(""), function (char, index) {
            result.push(index < 4 ? char.toUpperCase() : char);
        });
        $scope.data.dataValue = result.join("");
    };
});
