angular.module('protractorInstall', ['protractorInstall.controllers']);

angular.module('protractorInstall.controllers', [])
    .controller('protractorInstallController', function ($scope) {
        $scope.showNodeInstall = false;
        $scope.showJdkInstall = false;
        $scope.platform = "windows";
    });