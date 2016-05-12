angular.module('app', ['ngCookies'])
    .controller('mainController', ['$scope','$cookies', function($scope, $cookies) {
      
    $scope.list = [];
    $scope.form = {
        key : "categoria_cliente",
        value : ""
    };
    
    $scope.add = function (formSet) {
        $cookies.put(formSet.key, formSet.value);
        $scope.form = {};
        list();
    }
    
    $scope.delete = function (c) {
        $cookies.remove(c.key);
        list();
    }
    
    console.log($cookies);
    
    function list(){
        $scope.list = [];
        var all = $cookies.getAll();
        var keys = Object.keys(all);
        for (i = 0; i < keys.length; i++) {
            $scope.list.push({
                key : keys[i],
                value : all[keys[i]]
            });
        }
        console.log($scope.list);
    }
    
    list();   
      
   }]);
