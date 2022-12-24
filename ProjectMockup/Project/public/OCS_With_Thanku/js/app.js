var app = angular.module("app", []);
app.controller("appController", function($scope, $http) {
    $scope.dayUpSellImage = ''; //To hold day up image.
    $scope.orderData = []; // Holds complete order details
    $scope.orderMetaData = {}; // Holds current order metadata
    $scope.totalPrice = 0;
    $scope.totalTaxValue = 0;
    $scope.subItemNames = '';
    var taxPercent = 4;
    $scope.testToggle = true;
    
    $http({
        method: 'GET',        
        url: '/jackintheboxdata.json'        
        }).then(function success(response) {  
            $scope.orderData = response.data.orderDetails;
            $scope.orderMetaData = response.data.metaInfo;
            $scope.dayUpSellImage = response.data.metaInfo.dayUpSell_img;
            $scope.totalTaxValue = response.data.metaInfo.Ordertax;
            $scope.totalPrice = response.data.metaInfo.Ordertotal;
            $scope.getSubItemsList();
        }, function error(response) {        
            //Error handling        
        });
    /**
     * To get the list of all subitems with out price, to be displayed with comma seperated
     */
    $scope.getSubItemsList = () => {
        var count = 0;
        var subItemNames;
        $scope.orderData.forEach((element, mainIndex) => {
            subItemNames = '';
            element.items.forEach((subItem, index) => {
                if (subItem.Price == null) {                    
                    if (count == 0) {
                        count++;
                        subItemNames += subItem.description;
                    } else {
                        count++;
                        subItemNames += ', ' + subItem.description;
                    }
                }
            });
            $scope.orderData[mainIndex].subItemNamesList = subItemNames;
        });
        if ($scope.orderData.length >= 5) {
            document.querySelector('tbody').style['font-size'] = '12px';
        } else {
            document.querySelector('tbody').style['font-size'] = '15px';
        }        
    }

    $scope.toggle = () => {
        $scope.testToggle = !$scope.testToggle;
    }
});

