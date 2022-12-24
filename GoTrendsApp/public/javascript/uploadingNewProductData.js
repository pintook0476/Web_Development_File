var productImageUrl = ''
var addNewProductDetails = () => {
    var productDetails = {};
    // var productDetails = new Object();
    productDetails.name = $("#pname").val();
    productDetails.price = $("#pprice").val();
    productDetails.discountPercent = $("#discount").val();
    productDetails.rating = 3;
    productDetails.manufacturer = $("#manufacturere").val();
    productDetails.image = productImageUrl;

    
    $.ajax({
        url: '/upload/productDetails',
        data: productDetails,
        dataType: 'JSON',
        method: 'POST',
        success: (response) => {
            $(".succssBlock").show(100);
            $(".succssBlock").html("Details got added Successfly");
        },
        error: (err) => {

        }
    });
}

var filesSuppportedType = ['image/png', 'image/gif', 'application/pdf']

var uploadProductImage = () => {
    let uploadfile = $("input[name=prodImage]")[0].files[0] // file from input

    let formData = new FormData();    
    formData.append("prodImage", uploadfile);
    
    var imageUploadReq = $.ajax({
        url: '/upload/resourece',
        type: 'POST',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        dataType: 'JSON'
    });
    imageUploadReq.done((response) => {
        productImageUrl = response.file_path;
    });

}