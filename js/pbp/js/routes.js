// ROUTES
pbpApp.config(["$routeProvider", function ($routeProvider, $log) {
    $routeProvider
    
    .when('/', {
        templateUrl: function() {
            var baseUrl = angular.element(document.querySelector("#mst_base_url")).val();
            var defaultUrl = "/";
            if (baseUrl !== "") {
                defaultUrl = baseUrl + 'productbuilderpro/index/index';
            }
            return defaultUrl;
        },
        controller: 'pbpController'
    })
    .when('/add-group', {
        templateUrl: function() {
            var baseUrl = angular.element(document.querySelector("#mst_base_url")).val();
            var defaultUrl = "/";
            if (baseUrl !== "") {
                defaultUrl = baseUrl + 'productbuilderpro/index/addgroup';
            }
            return defaultUrl;
        },
        controller: 'addGroupController'
    })
    .when('/add-layer', {
        templateUrl: function() {
            var baseUrl = angular.element(document.querySelector("#mst_base_url")).val();
            var defaultUrl = "/";
            if (baseUrl !== "") {
                defaultUrl = baseUrl + 'productbuilderpro/index/addlayer';
            }
            return defaultUrl;
        },
        controller: 'pbpAddLayerController'
    })
    .when('/edit-option', {
        templateUrl: function() {
            var baseUrl = angular.element(document.querySelector("#mst_base_url")).val();
            var defaultUrl = "/";
            if (baseUrl !== "") {
                defaultUrl = baseUrl + 'productbuilderpro/index/editoption';
            }
            return defaultUrl;
        },
        controller: 'pbpEditController'
    })
    .otherwise({
        redirectTo: '/'
    });
    
}]);