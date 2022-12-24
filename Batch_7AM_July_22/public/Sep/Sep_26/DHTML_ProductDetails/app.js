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

var pdetailsList = [
    {
        name: 'Laptop',
        price: 47000,
        discountPercent: 15,
        rating: 4,
        manufacturer: 'Sony',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkjrrElDw7nTv5H0JpeAJp-KWrGfNHiaGkEA&usqp=CAU'
    },
    {
        name: 'Pendrive',
        price: 2000,
        discountPercent: 7,
        rating: 3,
        manufacturer: 'MGB',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BHkStj17-9Xn5dZWZT7rYnoSHdDUNSzapw&usqp=CAU'
    },
    {
        name: 'Book - Thriller drives',
        price: 900,
        discountPercent: 5,
        rating: 2,
        manufacturer: 'ABC - Publications',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVQ-OWyJzjU8w_2-jFsO8ez9uhyWAFxjbJg&usqp=CAU'
    }
];

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

for (var i = 0 ; i < pdetailsList.length; i++) {
    loadProductData(pdetailsList[i]);
}

