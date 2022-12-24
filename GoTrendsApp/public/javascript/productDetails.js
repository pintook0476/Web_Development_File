var productTemplate, pdetailsList;
var loadProductTemplate = () => {
    $.ajax({
        url: 'templates/productDetails_tmplt.htm',
        method: 'GET',
        success: (responseTemplate) => {
            productTemplate = responseTemplate;
        },
        error: () => {
            console.log("Error while reading template");
        }
    });
}

var getRatingStars = (rating) => {
    var ratingContainer = $("<span class='ratingStars'></span>");
    // adding full star
    for (var i = 0; i < rating; i++) {
        var imgTag = $("<img />");
        imgTag.attr("src", 'images/fullStar.png');
        ratingContainer.append(imgTag);
    }
    // Adding grey star
    for ( var i = rating; i < 5; i++) {
        var imgTag = $("<img />").attr("src", 'images/grayStar.png');
        ratingContainer.append(imgTag);
    }
    return ratingContainer;
}

loadProductTemplate();

var loadProductDetailsData = () => {
    $.ajax({
        url: '/get/productDetails',
        method: 'POST',
        dataType: 'JSON',
        data: {},
        success: (response) => {
            pdetailsList = response.productDetails;
            for (var i = 0 ; i < pdetailsList.length; i++) {
                loadProductData(pdetailsList[i], i);
            }
        }
    })
}

var loadProductData = (pdetails, index) => {
   pdetails.discountPrice = pdetails.price - (pdetails.price * pdetails.discountPercent) / 100
    pdetails.ratingImages = getRatingStars(pdetails.rating);
   var handleBarTemplate = Handlebars.compile(productTemplate);
    pdetails.ratingContainerId = 'rating_' + index;
    
    var productTemplateWithData = handleBarTemplate(pdetails);

   $("#pDetailsContainer").append(productTemplateWithData);
    var id = '#' + pdetails.ratingContainerId;
   $(id).html(pdetails.ratingImages);
}