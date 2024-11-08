let myApp = angular.module("myApp",["ngRoute"]);



myApp.config(function ($routeProvider){

    $routeProvider.when(
        "/trang-chu",
        {
            templateUrl: "view/trangchu.html",
            controller: listKHController
        }
    )
    .when(
        "/datPhong",
        {
            templateUrl: "view/datPhong.html",
            controller: datPhongController
        }
    )
    .when(
        "/lienhe",
        {
            templateUrl: "view/lienhe.html",
            controller: lienheController
        }
    )
    .when(
        "/phong",
        {
            templateUrl: "view/phong.html",
            controller: phongController
        }
    )
    .when(
        "/dsKH",
        {
            templateUrl: "view/quanlyDatPhong.html",
            controller: listKHController
        }
    )
    .when(
        '/detailUser/:id',
        {
            templateUrl: "view/detailUser.html",
            controller: detailController
        }
    )
    .when(

        '/editUser/:id',
        {
            templateUrl: 'view/editUser.html',
            controller: editUserController
        }
    )
    .otherwise({
        redirectTo: "/trang-chu"
    }
        
    )
});