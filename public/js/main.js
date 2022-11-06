angular
  .module("appVagas", ["ngRoute", "diretivas"])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when("/public/", {
      templateUrl: "public/partials/Home.html",
    });
  });
