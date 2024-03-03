const myp1 = document.getElementById("p1");
//alert(myp1.innerText);
myp1.style.color="red";
myp1.innerText = "In over the mood";

const myb1 = document.getElementById("b1");
myb1.innerText = "hello";

function sayHello(){
    alert("hello I am sayHello fuction");
}
myb1.onclick = sayHello;
// A button which is disapatcheed onClick