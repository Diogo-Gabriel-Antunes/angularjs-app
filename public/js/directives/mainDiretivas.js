angular
  .module("diretivas", [])
  .directive("appNavbar", function () {
    return {
      restrict: "AE",
      templateUrl: "public/js/directives/appNavbar.html",
    };
  })
  .directive("appFooter", function () {
    return {
      restrict: "AE",
      templateUrl: "public/js/directives/appFooter.html",
    };
  });
