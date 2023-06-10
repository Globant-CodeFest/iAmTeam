(function(module) {

    module.controller('HomeController', ['$state', '$scope', '$rootScope', '$log',
    function ($state, $scope, $rootScope, $log) {

        // Set the API key
        require([
            "esri/config"
        ], function(esriConfig) {
            esriConfig.apiKey = 'AAPK48334d5601c04fe3aafa7b01d273eecfzQ20E8Nb49h8K8lD3VnzSax7pzGza7exq_YO_DhCp-zUbY9V7NYWpk1sQnb8d79r';
        });

        require([
            "esri/config",
            "esri/Map",
            "esri/views/MapView",
            "esri/layers/FeatureLayer",
            "esri/renderers/SimpleRenderer",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/widgets/TimeSlider",
            "esri/TimeExtent",
            "esri/tasks/support/Query",
            "esri/tasks/QueryTask",
        ], function(esriConfig, Map, MapView, FeatureLayer, SimpleRenderer, SimpleMarkerSymbol, TimeSlider, TimeExtent, Query, QueryTask) {
            esriConfig.apiKey = 'AAPK48334d5601c04fe3aafa7b01d273eecfzQ20E8Nb49h8K8lD3VnzSax7pzGza7exq_YO_DhCp-zUbY9V7NYWpk1sQnb8d79r';

            var map = new Map({
                basemap: "arcgis-topographic"
            });
    
            var view = new MapView({
                container: "viewDiv", // ID of the element to bind the map
                map: map,
                zoom: 4,
                center: [15, 65] // Longitude, latitude
            });

            // Create the FeatureLayer
            layerUrl = "https://services1.arcgis.com/eYE5yq92FVIUv9Pn/arcgis/rest/services/1900_2021_disasters_mod/FeatureServer/0"

            // Create a SimpleRenderer
            var renderer = new SimpleRenderer({
                symbol: new SimpleMarkerSymbol({
                    size: 10,
                    color: "red"
                })
            });

            // Create the FeatureLayer with your dataset
            var featureLayer = new FeatureLayer({
                url: layerUrl,
                renderer: renderer,
                definitionExpression: "Year > 1970" // SQL expression to filter data
            });
    
            var queryTask = new QueryTask({
                url: layerUrl
            });
        
            var query = new Query();
            query.returnGeometry = false;
            query.outStatistics = [
                {
                    statisticType: "min",
                    onStatisticField: "Year",
                    outStatisticFieldName: "minDate"
                },
                {
                    statisticType: "max",
                    onStatisticField: "Year",
                    outStatisticFieldName: "maxDate"
                }
            ];
        
            queryTask.execute(query).then(function(result) {
                var statistics = result.features[0].attributes;
                var minDate = new Date(statistics.minDate);
                var maxDate = new Date(statistics.maxDate);
        
                var fullTimeExtent = new TimeExtent({
                    start: minDate,
                    end: maxDate
                });
        
                var timeSlider = new TimeSlider({
                    container: "timeSliderDiv",
                    fullTimeExtent: fullTimeExtent
                });
        
            });

            /*view.when(function() {
                // Create the TimeSlider
                var timeSlider = new TimeSlider({
                    container: "timeSliderDiv",
                    view: view,
                    fullTimeExtent: customTimeExtent,
                    stops: {
                        interval: {
                            value: 1,
                            unit: "years"
                        }
                    }
                });
            
                // Add the TimeSlider to the view's UI
                view.ui.add(timeSlider, "bottom-right");
            });*/

            // Add the layer to the map
            map.add(featureLayer);

            var timeField = featureLayer.timeInfo.timeField;

            // Error handling for layer creation
            view.on("layerview-create-error", function(event) {
                console.error("LayerView creation failed: ", event.error);
                alert("Failed to load layer: " + event.error.message);
            });
        });
        
        var model = this;
        $rootScope.title = 'Home';

        /////////////////////////// Functions Definition ///////////////////////////


        /* A definitive place to put everything that needs to run when the controller starts. Avoid */
        /* writing any code outside of this function that executes immediately. */
        function init() {
            $log.debug('Home page');
        }

        /////////////////////////// Functions Calls ////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////

        init();

    }]);

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("SlackBot.home")));