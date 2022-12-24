var userName;

var taskList = [
    "Review the project",
    "Do the development of Input module",
    "Create Change Request for the current Release",
    "Implement the design and arichitechture of new project",
    "Do the code review of new module",
    "Provide KT for the current development",
    "Work with Sr team mates to get new ideas on new requriments"
];

var createTaskContainer = () => {
    var divTag = document.createElement("div");
    divTag.setAttribute("id", "taskContainer");
    divTag.setAttribute("class", "taskContainer");

    document.querySelector(".tBlock").append(divTag);
}

var getTodayTask = () => {
    var randomIndex = Math.floor(Math.random() * taskList.length);
    
    var task = taskList[randomIndex];
    try {
        document.querySelector(".taskContainer").innerText = "Mr. " + userName + ' Task for today is  :' + task;
    } catch(err) {
        alert("You have to create a containter,,,then for for task assignment")
    } finally {
        
    }


    showThanksMsg();
    
}   

var showThanksMsg = () => {
    //randomIndex = Math.floor(randomIndex);
    setTimeout(() => {
        document.querySelector(".thxBlock").style.display = 'block';
        document.querySelector(".thxBlock").innerText = 'Thanks for using our page';
    }, 5000);
}

var saveUserName = () => {
    userName = document.querySelector("#uname").value;
    document.querySelector(".thxBlock").style.display = 'none';
}