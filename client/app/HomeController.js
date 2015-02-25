(function() {
   'use strict';

    function HomeController() {
        this.message = 'Hello, World';
    }

    angular.module('home').controller('HomeController', HomeController);
})();


