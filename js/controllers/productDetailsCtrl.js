angular.module('assessment').controller('productDetailsCtrl', function($scope, shopService, $stateParams){
    
        $scope.selectedProduct = shopService.idFinder($stateParams.id).then(function(){
                $scope.selectedProduct = this.selectedProduct
        })

        });