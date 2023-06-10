(function (module) {

    module.service('ServerCommunicator', ['$http', '$rootScope', '$log', function ($http, $rootScope, $log) {
        var model = this;
    

        /////////////////////////// General Services ///////////////////////////////
        ////////////////////////////////////////////////////////////////////////////


        /* model.requestAccessToken = function (code) {
            return $http({
                method: 'POST',
                data: {
                    code: code,
                },
                url: '/slack/generate_token'
            });
        };

        model.getVideos = function () {
            return $http({
                method: 'GET',
                headers: model.getHeader(),
                url: '/get_videos'
            });
        }; */
    }]);

}(angular.module("SlackBot")));