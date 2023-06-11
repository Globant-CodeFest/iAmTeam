(function(module) {

    module.controller('HomeController', ['$state', '$scope', '$rootScope', '$log',
    function ($state, $scope, $rootScope, $log) {
        $scope.countryFilter = '';
        $scope.disasterTypeFilter = '';
        $scope.disasterTypes = [
            'Drought',
            'Ground movement',
            'Ash fall',
            'Rockfall',
            'Tropical cyclone',
            'Bacterial disease',
            'Landslide',
            'Avalanche',
            'Forest fire',
            'Riverine flood',
            'Convective storm',
            'Viral disease',
            'Mudslide',
            'Tsunami',
            'Heat wave',
            'Land fire (Brush, Bush, Pasture)',
            'Coastal flood',
            'Cold wave',
            'Flash flood',
            'Parasitic disease',
            'Locust',
            'Severe winter conditions',
            'Grasshopper',
            'Subsidence',
            'Extra-tropical storm',
            'Lava flow',
            'Pyroclastic flow'
        ];
        $scope.countries = [
            'Cabo Verde',
            'India',
            'Guatemala',
            'Canada',
            'Comoros (the)',
            'Bangladesh',
            'Chile',
            'Colombia',
            'Belgium',
            'Hong Kong',
            'China',
            'France',
            'Haiti',
            'Indonesia',
            'Burkina Faso',
            'Costa Rica',
            'Algeria',
            'Gambia (the)',
            'Guinea-Bissau',
            'Anguilla',
            'Germany Fed Rep',
            'Ecuador',
            'Bahamas (the)',
            'Cuba',
            'Egypt',
            'Bulgaria',
            'Guadeloupe',
            'Greece',
            'Dominica',
            'Dominican Republic (the)',
            'Belize',
            'Fiji',
            'Honduras',
            'Ghana',
            'Australia',
            'Cook Islands (the)',
            'Argentina',
            'Azores Islands',
            'Bermuda',
            'Brazil',
            'Antigua and Barbuda',
            'Switzerland',
            'Austria',
            'United Kingdom of Great Britain and Northern Ireland (the)',
            'Cyprus',
            'Spain',
            'Afghanistan',
            'Netherlands Antilles',
            'Barbados',
            'Ethiopia',
            'Albania',
            'Guam',
            'Grenada',
            'Bolivia (Plurinational State of)',
            'Botswana',
            'American Samoa',
            'Congo (the)',
            'Benin',
            'Côte d’Ivoire',
            'Hungary',
            'Cameroon',
            'Guyana',
            'Central African Republic',
            'Czechoslovakia',
            'Denmark',
            'Djibouti',
            'Burundi',
            'Bahrain',
            'United States of America (the)',
            'Jamaica',
            'Japan',
            'Uganda',
            'Myanmar',
            'Martinique',
            'Soviet Union',
            'Niger (the)',
            'Turkey',
            'Italy',
            'Philippines (the)',
            'Taiwan (Province of China)',
            'Romania',
            'Iran (Islamic Republic of)',
            'Morocco',
            'Mali',
            'Mauritania',
            'Senegal',
            'Chad',
            'Peru',
            'Tokelau',
            'Puerto Rico',
            'New Zealand',
            'Pakistan',
            'Jordan',
            'Saint Kitts and Nevis',
            'Montserrat',
            'Poland',
            'Mexico',
            'Nicaragua',
            'Solomon Islands',
            'Trinidad and Tobago',
            'El Salvador',
            'Korea (the Republic of)',
            'Norway',
            'Papua New Guinea',
            'New Caledonia',
            'Sudan (the)',
            'Libya',
            'Tonga',
            'Réunion',
            'Netherlands (the)',
            'Iraq',
            'Nepal',
            'Lebanon',
            'Mozambique',
            'Sri Lanka',
            'Mongolia',
            'Canary Is',
            'Tunisia',
            'French Polynesia',
            'Niue',
            'Saint Lucia',
            'Mauritius',
            'Somalia',
            'Thailand',
            'Paraguay',
            'Kenya',
            'Panama',
            'Saudi Arabia',
            'Tanzania, United Republic of',
            'Malaysia',
            'Lao People\'s Democratic Republic (the)',
            'Togo',
            'Malawi',
            'Portugal',
            'Syrian Arab Republic',
            'Uruguay',
            'Lesotho',
            'Madagascar',
            'Nigeria',
            'Suriname',
            'Israel',
            'Kiribati',
            'Tuvalu',
            'Iceland',
            'Rwanda',
            'Sierra Leone',
            'Sweden',
            'Oman',
            'Maldives',
            'Saint Vincent and the Grenadines',
            'Vanuatu',
            'Yemen Arab Rep',
            'Venezuela (Bolivarian Republic of)',
            'South Africa',
            'Viet Nam',
            'Yugoslavia',
            'Samoa',
            'Wallis and Futuna',
            'Congo (the Democratic Republic of the)',
            'Yemen P Dem Rep',
            'Zimbabwe',
            'Zambia',
            'Guinea',
            'Angola',
            'Germany Dem Rep',
            'Bhutan',
            'Micronesia (Federated States of)',
            'Gabon',
            'Liberia',
            'Namibia',
            'Ireland',
            'Luxembourg',
            'Palestine, State of',
            'Cambodia',
            'Korea (the Democratic People\'s Republic of)',
            'Swaziland',
            'Sao Tome and Principe',
            'Turks and Caicos Islands (the)',
            'Germany',
            'Belarus',
            'Finland',
            'Georgia',
            'Marshall Islands (the)',
            'Kyrgyzstan',
            'Lithuania',
            'Russian Federation (the)',
            'Eritrea',
            'Macedonia (the former Yugoslav Republic of)',
            'Kazakhstan',
            'Macao',
            'Virgin Island (U.S.)',
            'Tajikistan',
            'Yemen',
            'Uzbekistan',
            'Serbia Montenegro',
            'Ukraine',
            'Turkmenistan',
            'Azerbaijan',
            'Armenia',
            'Brunei Darussalam',
            'Moldova (the Republic of)',
            'Czech Republic (the)',
            'French Guiana',
            'Croatia',
            'Kuwait',
            'Virgin Island (British)',
            'Slovakia',
            'Seychelles',
            'Slovenia',
            'Bosnia and Herzegovina',
            'Latvia',
            'Singapore',
            'Cayman Islands (the)',
            'Saint Helena, Ascension and Tristan da Cunha',
            'Timor-Leste',
            'Northern Mariana Islands (the)',
            'Equatorial Guinea',
            'Estonia',
            'Montenegro',
            'Serbia',
            'South Sudan',
            'Palau',
            'United Arab Emirates (the)',
            'Qatar',
            'Saint Barthélemy',
            'Saint Martin (French Part)',
            'Sint Maarten (Dutch part)',
            'Isle of Man'
        ];

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
            "esri/TimeInterval"
        ], function(esriConfig, Map, MapView, FeatureLayer, SimpleRenderer, SimpleMarkerSymbol, TimeSlider, TimeExtent, Query, QueryTask, TimeInterval) {
            esriConfig.apiKey = 'AAPK48334d5601c04fe3aafa7b01d273eecfzQ20E8Nb49h8K8lD3VnzSax7pzGza7exq_YO_DhCp-zUbY9V7NYWpk1sQnb8d79r';

            var map = new Map({
                basemap: "arcgis-topographic"
            });
    
            var view = new MapView({
                container: "viewDiv", // ID of the element to bind the map
                map: map,
                zoom: 3,
                center: [-74.07, 4.7] // Longitude, latitude
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
                //definitionExpression: "Year > 1970" // SQL expression to filter data
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
                var minDate = new Date(statistics.minDate, 0, 1);
                var maxDate = new Date(statistics.maxDate, 11, 31);
        
                var fullTimeExtent = new TimeExtent({
                    start: minDate,
                    end: maxDate
                });

                var timeSlider = new TimeSlider({
                    container: "timeSliderDiv",
                    fullTimeExtent: fullTimeExtent,
                });

                var featureLayerView;

                view.whenLayerView(featureLayer).then(function(layerView) {
                    featureLayerView = layerView;

                    // Watch for changes in the timeSlider's timeExtent property
                    timeSlider.watch("timeExtent", function(newTimeExtent) {
                        var startYear = newTimeExtent.start.getFullYear();
                        var endYear = newTimeExtent.end.getFullYear();

                        // Filter the features based on the selected time extent
                        var filters = [];
                        if ($scope.countryFilter) {
                            filters.push("Country = '" + $scope.countryFilter + "'");
                        }
                        if ($scope.disasterTypeFilter) {
                            filters.push("DisasterType = '" + $scope.disasterTypeFilter + "'");
                        }

                        if (filters.length > 0) {
                            featureLayerView.filter = {
                                where: "Year >= " + startYear + " AND Year <= " + endYear + " AND " + filters.join(" AND ")
                            };
                        } else {
                            featureLayerView.filter = {
                                where: "Year >= " + startYear + " AND Year <= " + endYear
                            };
                        }                   
                    });
                });

                // Add the TimeSlider widget to the view
                view.ui.add(timeSlider, "bottom");

                // Add the layer to the map
                map.add(featureLayer);
            });

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