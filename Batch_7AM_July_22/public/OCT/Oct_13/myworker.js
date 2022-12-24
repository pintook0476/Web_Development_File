console.log("frm worker");

var getDateTime = () => {
    var date = new Date();
    var formattedDateTime = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    postMessage(formattedDateTime);
}

setInterval(() => {
    getDateTime();
}, 1000);
