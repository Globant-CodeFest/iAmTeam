(function(app) {

    app.config(['$urlRouterProvider', '$httpProvider', '$locationProvider', '$controllerProvider',  function ($urlRouterProvider, $httpProvider, $locationProvider, $controllerProvider) {
        $urlRouterProvider.otherwise('/home');
    }]);

    app.run(['$rootScope', '$state', '$location', function($rootScope, $state, $location) {
        $rootScope.blockServer = false;
        $rootScope.warningMessage = '';
        var path = $location.path();


        //validation to redirect login if user is not logged in and
        //to redirect to main dashboard if it's opposite case
        $rootScope.$on("$stateChangeStart", function(e, toState, fromState) {
        });
    }]);


    app.controller('AppController', ['$scope', '$rootScope', '$state',  '$timeout',  '$log',
        function ($scope, $rootScope, $state, $timeout, $log) {
            var model = this;
            $log.debug('App controller');

            $rootScope.title = 'iAmCopasstBot';

            /////////////////////////// Functions Definition ///////////////////////////
            ////////////////////////////////////////////////////////////////////////////
            
            /* A definitive place to put everything that needs to run when the controller starts. Avoid */
            /* writing any code outside of this function that executes immediately. */
            function init() {
                // A definitive place to put everything that needs to run when the controller starts. Avoid
                //  writing any code outside of this function that executes immediately.
                $log.debug('App js');
            }//End init function

            init();

            $rootScope.logout = model.logout;
        }]);

}(angular.module("SlackBot", [
    'smart-table',
    'ui.router.state',
    'ui.router',
    'SlackBot.home',
])));
