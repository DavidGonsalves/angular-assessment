angular.module('assessment').controller('shopCtrl', function($scope, shopService){

    $scope.getProducts = function(){
        shopService.getProducts().then(function(response){
            console.log(response.data)
            $scope.products = response.data;
        })
    }

    $scope.getProducts();

    });

