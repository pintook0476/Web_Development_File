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
    var ulTag = $("<ul />").addClass('pdetails');    
    var li1 = jQuery("<li/>").text('Product Name: ' + pdetails.name);
    ulTag.append(li1);

    var li2 = $("<li/>").text('Product Price:');

    var span1 = $("<span />").addClass('actualPrice').text(pdetails.price);
    li2.append(span1);

    var span2 = $("<span />").attr("class", 'discountedPrice').text(pdetails.price - (pdetails.price * pdetails.discountPercent) / 100);
    li2.append(span2);

    ulTag.append(li2);

    var li3 = $("<li />").text('Manufacturer : ' + pdetails.manufacturer);
    ulTag.append(li3);

    var li4 = $("<li />").text('Rating : ');
    var ratingStar = getRatingStars(pdetails.rating);
    li4.append(ratingStar);
    ulTag.append(li4);

    var li5 = $("<li />").addClass('pImage')
    var imgTag = $("<img />").attr("src", pdetails.image);
    li5.append(imgTag);
    ulTag.append(li5);
    
    $(".pDetailsContainer").append(ulTag);
}

var getProductDetails = () => {

    $.ajax({
        url: 'http://localhost:8081/Sep/Sep_28/DHTML_ProductDetails/data/pdetails.json',
        method: 'GET',
        dataType: 'JSON',
        success: (res) => {
            console.log("Success");
            console.log(res);
            pdetailsList = res.productDetails;
            for (var i = 0 ; i < pdetailsList.length; i++) {
                loadProductData(pdetailsList[i]);
            }
        },
        error: (error) => {
            console.log("Error`");
            console.log(error);
        }
    });

    /**/
}

