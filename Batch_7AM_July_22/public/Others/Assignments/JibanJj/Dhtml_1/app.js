var getRatingStars = (rating) => {
    var ratingContainer = document.createElement("span"); 
    ratingContainer.setAttribute("class", 'ratingStar')
    for (var i = 0; i < rating; i++){
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", 'Images/fullstar.png');
        ratingContainer.append(imgTag)
    }
    for ( var i = rating; i < 5; i++){
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", 'Images/greystar.png');
        ratingContainer.append(imgTag)
    }
    return ratingContainer;
} 


var productDetails = [
{
    name: 'Mobiles',
    price: 15000,
    discountPercent: 10,
    battery: "5000mAh",
    manufacture: 'Oneplus',
    rating: 2.5,
    image: 'Images/oneplus.webp',
},
{
    name: 'Earphone',
    price: 3000,
    discountPercent: 10,
    battery: "1000mAh",
    manufacture: 'Boat',
    rating: 2,
    image: 'Images/boat.webp',
},
{
    name: 'Laptop',
    price: 42000,
    discountPercent: 10,
    battery: "6000mAh",
    manufacture: 'HP',
    rating: 3,
    image: 'Images/hplap.jpg',
},
{
    name: 'Power Bank',
    price: 800,
    discountPercent: 10,
    battery: "6000mAh",
    manufacture: 'Ambrane',
    rating: 4,
    image: 'Images/powerbank.webp',
},
];
var loadProductData = (productDetails) => {

var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'pDetails');

var li1 = document.createElement("li");
    li1.innerText = 'Product Name - ' + productDetails.name;
    ulTag.append(li1);

var li2 = document.createElement("li");
    li2.innerText = 'Price - ';

var span1 = document.createElement("span");
    span1.setAttribute("class", 'actualPrice');
    span1.innerText = productDetails.price;
    li2.append(span1);
    

var span2 = document.createElement("span");
    span2.setAttribute("class", 'discountPrice');
    span2.innerText =productDetails.price - ( productDetails.price * productDetails.discountPercent ) / 100;
    li2.append(span2);

    ulTag.append(li2);

var li3 = document.createElement("li");
    li3.innerText = 'Battery - ' + productDetails.battery;
    ulTag.append(li3);

var li4 = document.createElement("li");
    li4.innerText = 'Manufacture - ' + productDetails.manufacture;
    ulTag.append(li4);

var li5 = document.createElement("li");
    li5.innerHTML = 'Rating - ';
    var ratingStar = getRatingStars(productDetails.rating);
    li5.append(ratingStar);
    ulTag.append(li5);

var li6 = document.createElement("li");
    li6.setAttribute("class", 'pImage');
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src",  productDetails.image);

    li6.append(imgTag);
    ulTag.append(li6);

document.querySelector(".mainContainer").append(ulTag);

}
for(var i = 0; i<productDetails.length; i++ ){
    loadProductData(productDetails[i]);
}
