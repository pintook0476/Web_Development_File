var pdetailsList = [
    {
        name: 'Mercedes AMD',
        price: '₹ 2.5CR',
        manufacturer: 'MERCEDES',
        image: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Free-Mercedes-Amg-Background.jpg'
    },
    {
        name: 'Audi R8',
        price: '₹ 1.5CR',
        manufacturer: 'AUDI',
        image: 'https://c4.wallpaperflare.com/wallpaper/676/94/358/audi-r8-v10-rws-4k-high-definition-widescreen-wallpaper-preview.jpg'
    },
    {
        name: 'Mustang',
        price: '₹ 75LAKHS',
        manufacturer: 'MUSTANG',
        image: 'https://images.unsplash.com/photo-1567284575269-d4be568f1072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c3RhbmclMjBndHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Challenger SRT',
        price: '₹ 1.5CR',
        manufacturer: 'DODGE',
        image: 'https://wallpaperaccess.com/full/810313.jpg'
    },
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
        ulTag.append(li2);
        var li3 = document.createElement("li");
        li3.innerText = 'Manufacturer : ' + pdetails.manufacturer;
        ulTag.append(li3);
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