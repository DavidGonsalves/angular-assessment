angular.module('assessment').service('shopService', function ($http) {

    this.getProducts = function() {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/products'
        })
    }

  
    this.idFinder = function (id) {
        
        var newUrl = 'https://practiceapi.devmountain.com/products' + '/' + id
        
        return $http({
            method: 'GET',
            url: newUrl
        }).then(function(res){
            this.selectedProduct = res.data;
            console.log(selectedProduct)
        })
    }

})