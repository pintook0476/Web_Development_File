var productDetails = [
    {
        name: 'Laptop123',
        price: 480,
        discountPercent: 5,
        sellerName: 'Indian Electronics',
        manu: 'Sony',
        image: 'https://m.media-amazon.com/images/I/71Ff0Ap49HS._SX425_.jpg'
    },
    {
        name: 'Mobile',
        price: 480,
        discountPercent: 5,
        sellerName: 'Indian Electronics',
        manu: 'Sony',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_XrXTkUiL8er1498uh0xYDK1ifVHVvE8Og&usqp=CAU'
    },
    {
        name: 'TV',
        price: 480,
        discountPercent: 5,
        sellerName: 'Indian Electronics',
        manu: 'Sony',
        image: 'images/tv.webp'
    },
    {
        name: 'Book',
        price: 480,
        discountPercent: 5,
        sellerName: 'Indian Electronics',
        manu: 'Sony',
        image: 'https://m.media-amazon.com/images/I/71Ff0Ap49HS._SX425_.jpg'
    },
    {
        name: 'Keys',
        price: 480,
        discountPercent: 5,
        sellerName: 'Indian Electronics',
        manu: 'Sony',
        image: 'https://m.media-amazon.com/images/I/71Ff0Ap49HS._SX425_.jpg'
    }
]
var loadProductData = (pDeails) => {
    var liTag = document.createElement('li');
    liTag.setAttribute("class", "productDetails");

    var ulTag = document.createElement("ul");

    var li1 = document.createElement("li");
    li1.innerHTML = 'Product Name : ' + pDeails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerHTML = 'Prodcut MAnufacturer : ' + pDeails.manu;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerHTML = "Product Price : ";
        var span1 = document.createElement("span");
        span1.setAttribute("class", 'actualPrice');
        span1.innerHTML = '$' + pDeails.price;
        li3.append(span1);

        var span2 = document.createElement("span");
        span2.setAttribute("class", 'discountedPrice');
        span2.innerHTML = '$' + (pDeails.price - (pDeails.price * pDeails.discountPercent ) / 100);
        li3.append(span2);
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = 'Seller Name : ' + pDeails.sellerName;
    ulTag.append(li4);

    var li5 = document.createElement('li');
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", pDeails.image);
    li5.append(imgTag);
    ulTag.append(li5);

    liTag.append(ulTag);
    console.log(ulTag);

    document.querySelector(".productDetailsContainer").append(liTag);

}
for (var i = 0 ; i < productDetails.length; i++) {
    loadProductData(productDetails[i]);
}