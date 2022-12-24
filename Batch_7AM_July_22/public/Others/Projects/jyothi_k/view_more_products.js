var pDetails = [
    {
        p1Code : 'IHD301',
        p1Qty:'1.34gms',
        p1Price: 'Rs.7345',
        p1Img:"https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/thumbnail/433x/0dc2d03fe217f8c83829496872af24a0/f/r/frdzl22301.jpg"
    },
    {
        p1Code : 'IHD302',
        p1Qty: '1.14gms',
        p1Price: 'Rs.7045',
        p1Img:"https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/thumbnail/433x/0dc2d03fe217f8c83829496872af24a0/f/r/frdzl22298.jpg"
    },
    {
        p1Code : 'IHD303',
        p1Qty: '1.41gms',
        p1Price: 'Rs.7735',
        p1Img:"https://static.malabargoldanddiamonds.com/media/catalog/product/cache/1/thumbnail/433x/0dc2d03fe217f8c83829496872af24a0/f/r/frdzl22301.jpg"
    },
]
var loadProductData = (pDetails) => {
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class","pDetails");
    var li1 = document.createElement("li");
    li1.innerText = 'Product Code: ' + pDetails.p1Code;
    ulTag.append(li1)

    var li2 = document.createElement("li");
    li2.innerText = 'Quantity: ' + pDetails.p1Qty;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Price: ' + pDetails.p1Price;
    ulTag.append(li3)

    var li4 = document.createElement("li");
    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", pDetails.p1Img);
    li4.append(imgTag);
    ulTag.append(li4);
    
    
    document.querySelector(".mainContainer").append(ulTag);
}
for(var i = 0; i < pDetails.length; i++){
    loadProductData(pDetails[i]);
}
