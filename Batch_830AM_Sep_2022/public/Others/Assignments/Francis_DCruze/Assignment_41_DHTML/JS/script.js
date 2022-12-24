var employeeData = [
    {
    'name' : 'Employee 1',
    'Age' : '25',
    'Gender' : 'Male',
    'Basic Salary' : 22000,
    'Total Salary' : 27000
    },
    {
        'name' : 'Employee 2',
        'Age' : '28',
        'Gender' : 'Female',
        'Basic Salary' : 22000,
        'Total Salary' : 28000
    },
    {
        'name' : 'Employee 3',
        'Age' : '29',
        'Gender' : 'Female',
        'Basic Salary' : 25000,
        'Total Salary' : 30000
    },
    {
        'name' : 'Employee 4',
        'Age' : '45',
        'Gender' : 'Male',
        'Basic Salary' : 50000,
        'Total Salary' : 78000
    },
    {
        'name' : 'Employee 5',
        'Age' : '28',
        'Gender' : 'Female',
        'Basic Salary' : 46000,
        'Total Salary' : 58000
    }
]

var employeeDetails = () => {

var container = document.createElement('div');
container.setAttribute('class', 'container');
document.querySelector('body').append(container);

var left_div = document.createElement("div");
left_div.setAttribute("class", "left-block");
var imgTag = document.createElement("img");
left_div.append(imgTag);

/////male or female pic/////
if (employeeData[i].Gender == 'Male')
{
    imgTag.setAttribute("src", "Images/profilepic.jpg");
}
else
{
    imgTag.setAttribute("src", "Images/profilepic2.jpg");
}
container.append(left_div);

var right_div = document.createElement('div');
right_div.setAttribute('class', 'right-block');
container.append(right_div);

var ulTag = document.createElement('ul');
right_div.append(ulTag);

var liTag1 = document.createElement('li');
ulTag.append(liTag1);

var spanTag1 = document.createElement('span');
spanTag1.setAttribute('class', 'spanDetails');
spanTag1.innerHTML = 'Name';
var spanTag2 = document.createElement('span');
spanTag2.setAttribute('class', 'spanValue');
spanTag2.innerHTML = ': ' + employeeData[i].name;

liTag1.append(spanTag1);
liTag1.append(spanTag2);

var liTag2 = document.createElement('li');
ulTag.append(liTag2);

var spanTag1 = document.createElement('span');
spanTag1.setAttribute('class', 'spanDetails');
spanTag1.innerHTML = 'Age';
var spanTag2 = document.createElement('span');
spanTag2.setAttribute('class', 'spanValue');
spanTag2.innerHTML = ': ' + employeeData[i].Age;

liTag2.append(spanTag1);
liTag2.append(spanTag2);

var liTag3 = document.createElement('li');
ulTag.append(liTag3);

var spanTag1 = document.createElement('span');
spanTag1.setAttribute('class', 'spanDetails');
spanTag1.innerHTML = 'Gender';
var spanTag2 = document.createElement('span');
spanTag2.setAttribute('class', 'spanValue');
spanTag2.innerHTML = ': ' + employeeData[i].Gender;

liTag3.append(spanTag1);
liTag3.append(spanTag2);

var liTag4 = document.createElement('li');
ulTag.append(liTag4);

var spanTag1 = document.createElement('span');
spanTag1.setAttribute('class', 'spanDetails');
spanTag1.innerHTML = 'Basic Salary';
var spanTag2 = document.createElement('span');
spanTag2.setAttribute('class', 'spanValue');
spanTag2.innerHTML = ': ₹ ' + employeeData[i]["Basic Salary"];

liTag4.append(spanTag1);
liTag4.append(spanTag2);

var liTag5 = document.createElement('li');
ulTag.append(liTag5);

var spanTag1 = document.createElement('span');
spanTag1.setAttribute('class', 'spanDetails');
spanTag1.innerHTML = 'Total Salary';
var spanTag2 = document.createElement('span');
spanTag2.setAttribute('class', 'spanValue');
spanTag2.innerHTML = ': ₹ ' + employeeData[i]["Total Salary"];

liTag5.append(spanTag1);
liTag5.append(spanTag2);
}

for(var i = 0; i < employeeData.length; i++)
{   
        employeeDetails();
}