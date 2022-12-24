var app = angular.module("app", ['ngSanitize']);
app.controller("appController", function($scope, $http, $timeout) {
    $scope.dayUpSellImage = ''; //To hold day up image.
    $scope.orderData = []; // Holds complete order details
    $scope.orderMetaData = {}; // Holds current order metadata
    $scope.totalPrice = 0;
    $scope.totalTaxValue = 0;
    $scope.subItemNames = '';
    $scope.maxItems = 10;
    $scope.testToggle = false;
    
    $http({
        method: 'GET',        
        url: 'jackintheboxdata.json'        
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
                    if (count == 0) {
                        count++;
                        if (subItem.Itemquantity) {
                            subItemNames += '<span>' + subItem.Itemquantity + ' ' + subItem.description + '</span>';
                        } else {
                            subItemNames += '<span>' + subItem.description + '</span>';
                        }
                    } else {
                        count++;
                        if (subItem.Itemquantity) {
                            subItemNames += ', ' + '<span>'+  subItem.Itemquantity + ' ' + subItem.description + '</span>';
                        } else {
                            subItemNames += ', ' + '<span>' + subItem.description + '</span>';
                        }
                    }
                }
            });
            $scope.orderData[mainIndex].subItemNamesList = subItemNames;
        });
        
        // Getting container height
        $timeout(() => {
            var containerHeight = document.querySelector('.dataContainer').offsetHeight;
            if ($scope.orderData.length <= $scope.maxItems) {
                if (containerHeight >= 300) {
                    if (containerHeight > 400) { // no image
                        $scope.dayUpSellImage = "";
                    } else {
                        $scope.dayUpSellImage = $scope.orderMetaData.dayUpSell_img_small;
                    }
                } else {
                    $scope.dayUpSellImage = $scope.orderMetaData.dayUpSell_img;
                }
            }
        }, 100);
    }

    $scope.getSubArray = function (start, end) {
        console.log(start + ' -' + end);
        return $scope.orderData.slice(start, end);
    }

    $scope.toggle = () => {
        $scope.testToggle = !$scope.testToggle;
    }
});

