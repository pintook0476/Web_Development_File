var getProductDetails = [
    {
        name : "T-Shirt",
        details : "Women's Yellow Savage Kitty Printed",
        rate : "₹299",
        image : 'images/women-s-black-all-over-printed.webp',
        linkOfProduct : '#'
    },
    {
        name : "Shorts",
        details : "Women's Yellow Savage Kitty Printed",
        rate : "₹359",
        image : 'images/women-s-black-tropical.webp',
        linkOfProduct : '#'
    },
    {
        name : "Kurti",
        details : "Women's Yellow Savage Kitty Printed",
        rate : "₹450",
        image : 'images/women-s-black-hakuna.webp',
        linkOfProduct : '#'
    }


];

var defineProductDetails = function (productGet){
    var divTag = document.createElement("div");
    divTag.setAttribute("id", 'womenPd');

    var pImage = document.createElement("img");
    pImage.setAttribute("src", productGet.image);
    pImage.setAttribute("id", 'productImages');
    divTag.append(pImage);

    var div1 = document.createElement("div");
    div1.setAttribute("class", 'container');
    divTag.append(div1);

    var div2 = document.createElement("div");
    div1.append(div2);

    var anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", productGet.linkOfProduct);
    anchorTag.innerText = productGet.name;
    div2.append(anchorTag);

    var spanTag = document.createElement("div");
    spanTag.innerText = productGet.details;
    div2.append(spanTag);

    var div3 = document.createElement("div");
    div3.setAttribute("id", 'rateOfProduct');
    div2.append(div3);

    var boldTag = document.createElement("b");
    boldTag.innerText = productGet.rate;
    div3.append(boldTag);



    document.querySelector("#womenClothoes").append(divTag);
};

for(var i = 0; i < getProductDetails.length; i++){
    defineProductDetails(getProductDetails[i]);
}

