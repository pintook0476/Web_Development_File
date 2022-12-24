var getRatingStars = (rating) => {
    var ratingContainer = document.createElement("span");
    ratingContainer.setAttribute("class", 'ratingStars')
    // adding full star
    for (var i = 0; i < rating; i++) {
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", 'images/fullStar.png');
        ratingContainer.append(imgTag);
    }
    // Adding grey star
    for ( var i = rating; i < 5; i++) {
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", 'images/grayStar.png');
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
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'pdetails');
    
    var li1 = document.createElement("li");
    li1.innerText = 'Product Name: ' + pdetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Product Price:';

    var span1 = document.createElement("span");
    span1.setAttribute("class", 'actualPrice');
    span1.innerText = pdetails.price;
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class", 'discountedPrice');
    span2.innerText = pdetails.price - (pdetails.price * pdetails.discountPercent) / 100;
    li2.append(span2);

    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Manufacturer : ' + pdetails.manufacturer;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = 'Rating : ';
    var ratingStar = getRatingStars(pdetails.rating);
    li4.append(ratingStar);
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.setAttribute("class", 'pImage')
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", pdetails.image);
    li5.append(imgTag);
    ulTag.append(li5);
    
    document.querySelector(".pDetailsContainer").append(ulTag);
    console.log(ulTag)
}

for (var i = 0 ; i < pdetailsList.length; i++) {
    loadProductData(pdetailsList[i]);
}

