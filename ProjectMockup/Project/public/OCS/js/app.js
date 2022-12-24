var app = angular.module("app", []);
app.controller("appController", function($scope, $http, $timeout) {
    $scope.dayUpSellImage = ''; //To hold day up image.
    $scope.orderData = []; // Holds complete order details
    $scope.orderMetaData = {}; // Holds current order metadata
    $scope.totalPrice = 0;
    $scope.totalTaxValue = 0;
    $scope.subItemNames = '';
    
    $http({
        method: 'GET',        
        url: '/jackintheboxdata.json'        
        }).then(function success(response) {  
            $scope.orderData = response.data.orderDetails;
            $scope.orderMetaData = response.data.metaInfo;
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
            count = 0;
            element.items.forEach((subItem, index) => {
                if (subItem.Price == null || subItem.Price == '') {                
                    if (count == 0) { // for first record without comma
                        count++;
                        if (subItem.Itemquantity) {
                            subItemNames += subItem.Itemquantity + ' ' + subItem.description;
                        } else {
                            subItemNames += subItem.description;
                        }
                        
                    } else {
                        count++;                        
                        if (subItem.Itemquantity) {
                            subItemNames += ', ' + subItem.Itemquantity + ' ' + subItem.description;
                        } else {
                            subItemNames += ', ' + subItem.description;
                        }
                    }
                }
            });
            $scope.orderData[mainIndex].subItemNamesList = subItemNames;
        });
        
        // Getting container height
        $timeout(() => {
            var containerHeight = document.getElementById('bodyBlock').offsetHeight;
            
            if (containerHeight >= 300) {
                if (containerHeight > 400) { // no image
                    $scope.dayUpSellImage = "";
                } else {
                    $scope.dayUpSellImage = $scope.orderMetaData.dayUpSell_img_small;
                }
            } else {
                $scope.dayUpSellImage = $scope.orderMetaData.dayUpSell_img;
            }
        }, 100);
    }
});

