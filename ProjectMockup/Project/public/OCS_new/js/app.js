
console.log("am loading");
var app = angular.module("app", ['ngSanitize']);

app.controller("appController", function ($scope, $http, $timeout) {
    wsUri = "ws://127.0.0.1:7606/";
    var connectionInterval;
    var websocket;
    //var wsUri = "ws://123.0.0.1:7607/";
    // Hitting websocket every 2sec, so that once connection gets available, to get connected 
    var connectionInterval = setInterval(() => {
        console.log("about to hit")
        websocket = new WebSocket(wsUri);

        websocket.addEventListener('open', () => { // Send a message to the WebSocket server
            console.log("connect open");
            clearInterval(connectionInterval); // stop  interval.
            setInterval(() => {
                websocket.send("Send Data");
            }, 2000);
        });
        websocket.addEventListener('message', e => { // The `event` object is a typical DOM event object, and the message data sent // by the server is stored in the `data` property 
            var orderData = JSON.parse(e.data);
            console.log(orderData)
            if (orderData.orderDetails.length) {
                $scope.loadData(orderData);
            }
        });
    }, 2000);
    

    /*websocket.onopen = function (e) {
        console.log("CONNECTED2SSSSS");        
        setInterval(() => {
            websocket.send("Send Data");
        }, 2000);
    };

    websocket.onclose = function (e) {
        console.log("socket on close");
        // Creating a new connection every time its closed.        
        
    };

    websocket.onmessage = (e) => {        
        console.log('from on message');
        var orderData = JSON.parse(e.data);
        console.log(orderData)
        if (orderData.orderDetails.length) {
            $scope.loadData(orderData);
        }
    }

    websocket.onerror = function (e) {
        console.log("socket error");
        // Creating a new connection every time got error
        // = new WebSocket(wsUri);
              
    }; */

    $scope.dayUpSellImage = ''; //To hold day up image.
    $scope.orderData = []; // Holds complete order details
    $scope.orderMetaData = {}; // Holds current order metadata
    $scope.totalPrice = 0;
    $scope.totalTaxValue = 0;
    $scope.subItemNames = '';
    $scope.maxItems = 10;
    $scope.testToggle = false;

    $scope.loadData = (response) => {
        $scope.orderData = response.orderDetails;
        $scope.orderMetaData = response.metaInfo;
        $scope.totalTaxValue = $scope.getFormatedPrice(response.metaInfo.Ordertax);
        $scope.totalPrice = $scope.getFormatedPrice(response.metaInfo.Ordertotal);
        $scope.getSubItemsList();
        $scope.showOrHideThanksBlock();
    }

    /*$http({
        method: 'GET',        
        url: 'jackintheboxdata.json'        
        }).then(function success(response) {  
            $scope.orderData = response.data.orderDetails;
            $scope.orderMetaData = response.data.metaInfo;
            $scope.totalTaxValue = $scope.getFormatedPrice(response.data.metaInfo.Ordertax);
            $scope.totalPrice = $scope.getFormatedPrice(response.data.metaInfo.Ordertotal);
            $scope.getSubItemsList();
        }, function error(response) {        
            //Error handling        
        }); */

    /**
     * To get the list of all subitems with out price, to be displayed with comma seperated
     */
    $scope.getSubItemsList = () => {
        var count = 0;
        var subItemNames;
        $scope.orderData.forEach((element, mainIndex) => {
            console.log(element.Price)
            element.Price = $scope.getFormatedPrice(element.Price);
            subItemNames = '';
            count = 0;
            element.items.forEach((subItem, index) => {
                subItem.Price = subItem.Price.replace(/ /g, ''); //To remove extra space in between price.                
                if (subItem.Price == null || subItem.Price == '' || subItem.Price == 0.0 || subItem.Price == 0) {
                    if (count == 0) {
                        count++;
                        if (subItem.items.length) {
                            subItem.items.forEach((subSubItem, index) => {
                                subSubItem.Price = subSubItem.Price.replace(/ /g, ''); //To remove extra space in between price.                
                                if (subSubItem.Price == null || subSubItem.Price == '' || subSubItem.Price == 0.0 || subSubItem.Price == 0) {
                                    subItem.description += ' (' + subSubItem.description + ')';
                                } else {
                                    element.items.push({ description: subSubItem.description, Price: subSubItem.Price })
                                }
                            });
                        }
                        if (subItem.Itemquantity) {
                            subItemNames += '<span>' + subItem.Itemquantity + ' ' + subItem.description + '</span>';
                        } else {
                            subItemNames += '<span>' + subItem.description + '</span>';
                        }
                    } else {
                        count++;
                        if (subItem.items.length) {
                            subItem.items.forEach((subSubItem, index) => {
                                subSubItem.Price = subSubItem.Price.replace(/ /g, ''); //To remove extra space in between price.                
                                if (subSubItem.Price == null || subSubItem.Price == '' || subSubItem.Price == 0.0 || subSubItem.Price == 0) {
                                    subItem.description += ' (' + subSubItem.description + ')';
                                } else {
                                    element.items.push({ description: subSubItem.description, Price: subSubItem.Price })
                                }
                            });
                        }
                        if (subItem.Itemquantity) {
                            subItemNames += ', ' + '<span>' + subItem.Itemquantity + ' ' + subItem.description + '</span>';
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
                        // Converting to base 64
                        $scope.orderMetaData.dayUpSell_img_small = 'data:image/png;base64, ' + $scope.orderMetaData.dayUpSell_img_small;
                        $scope.dayUpSellImage = $scope.orderMetaData.dayUpSell_img_small;
                    }
                } else {
                    $scope.orderMetaData.dayUpSell_img = 'data:image/png;base64, ' + $scope.orderMetaData.dayUpSellImage;
                    $scope.dayUpSellImage = $scope.orderMetaData.dayUpSell_img;
                }
            }
        }, 100);
    }

    /**
     * To format price, trim spaces, if price starts with ., make it 0.
     * @param {*} price 
     * @returns 
     */
    $scope.getFormatedPrice = (price) => {
        price = price.replace(/ /g, '');
        console.log(price.match('^\.')[0] == '.');
        if (price.match('^\.')[0] == '.') {
            price = '0' + price;
        }
        return price;
    }

    $scope.getSubArray = function (start, end) {
        return $scope.orderData.slice(start, end);
    }

    $scope.showOrHideThanksBlock = () => {
       console.log("Status is -> " + $scope.orderMetaData.Orderstatus)
       if (!$scope.orderMetaData.Orderstatus) { // show thanks block based on status flag
           $timeout(() => {
               $scope.testToggle = true;
           }, 2000);
            
            // To show thanks block after given time.
            /*$timeout(() => {
                $scope.testToggle = !$scope.testToggle;
                $timeout(() => {
                    $scope.testToggle = !$scope.testToggle;
                }, 5000);
            }, 10000);*/
        }
    }   
});

/**
 * Filter to convert normal price to decimal price.
 */
app.filter('tostring', function () {
    return function (price) {
        if (!price.toString().includes('.')) { // Its a decimal number
            return price + '.00'; // For just numbers, adding decimal '.00
        } else {
            return price;
        }
    };
});