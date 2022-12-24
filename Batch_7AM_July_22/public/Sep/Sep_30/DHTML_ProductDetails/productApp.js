var productTemplate;
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

var pdetailsList = [];

var loadProductData = (pdetails) => {

     // take the satic template - Done
    // fill the dynamic data(pdetails) withing static template
    // show the template with data on the page

    pdetails.discountPrice = pdetails.price - (pdetails.price * pdetails.discountPercent) / 100


    var handleBarTemplate = Handlebars.compile(productTemplate);

   var productTemplateWithData = handleBarTemplate(pdetails);

    $(".pDetailsContainer").append(productTemplateWithData);
}


var getProductDetails = () => {
    $(".loadingGif").show(200);
    $.ajax({
        url: 'http://localhost:8081/data/productDetails/info',
        method: 'GET',
        dataType: 'JSON',
        success: (res) => {
            $(".loadingGif").hide(100);
            console.log("Success");
            console.log(res);
            pdetailsList = res.productDetails;
            for (var i = 0 ; i < pdetailsList.length; i++) {
                loadProductData(pdetailsList[i]);
            }
        },
        error: (error) => {
            $(".loadingGif").hide(100);
            //document.querySelector(".errorBlock").style.display = 'block';
            $(".errorBlock").show(1000);
            console.log("Error`");
            console.log(error);
        }
    });

    /**/
}


loadProductTemplate();