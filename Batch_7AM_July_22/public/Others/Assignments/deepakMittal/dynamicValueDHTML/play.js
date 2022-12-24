var getProductDetails = [
    {
        name: prompt("Enter Product Name"),
        price : 50000,
        discount : 15,
        manufecturer : "Sony",
        rating : "4.5 / 5",
        image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },

    {
        name: prompt("Enter Product Name"),
        price : 30000,
        discount : 10,
        manufecturer : "Samsung",
        rating : "4.3 / 5",
        image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    }

];

var productDetailsList = (getDetails) => {
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", 'pdetails');

    var li1 = document.createElement("li");
    li1.innerText = 'Product Name: ' + getDetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Price : ';
    ulTag.append(li2);

    var spanTag1 = document.createElement("span");
    spanTag1.setAttribute("class", 'originalP');
    spanTag1.innerText = getDetails.price;
    li2.append(spanTag1);

    var spanTag2 = document.createElement("span");
    spanTag2.setAttribute("class", 'DiscountP');
    spanTag2.innerText = getDetails.price - (getDetails.price * getDetails.discount / 100);
    li2.append(spanTag2);


    var li3 = document.createElement("li");
    li3.innerText = 'Manufecturer : ' + getDetails.manufecturer;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = 'Rating : ' + getDetails.rating;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    li5.setAttribute("class", 'pImage');
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", getDetails.image);
    li5.append(imgTag);
    ulTag.append(li5);

    document.querySelector(".productDetails").append(ulTag);



    console.log(ulTag);
    
}


    
for(var i = 0; i < getProductDetails.length; i++){
    productDetailsList(getProductDetails[i]);
}