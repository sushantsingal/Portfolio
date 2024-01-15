const grid = document.querySelector(".grid");
const list = document.querySelector(".list");
const btn = document.getElementById("btn");
const tbtn = document.getElementById("tbtn");
const tlogo = document.getElementById("tlogo");

grid.addEventListener("click", () => {
    grid.classList.toggle("active");
    list.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    grid.classList.toggle("active");
    list.classList.toggle("active");
}))

let isFirstImage = true;

btn.addEventListener("click",function(){
    if(isFirstImage){
        tbtn.src = "Light/Light Button.png";
        tlogo.src = "Light/Light Logo.png";
    } else{
        tbtn.src = "Dark/Dark Button.png";
        tlogo.src = "Dark/Dark Logo.png";
    }
    isFirstImage = !isFirstImage;
});

btn.onclick = function(){
    document.body.classList.toggle("light-theme");
}

function sendEmail(){
    sendEmail.send({
        Host : "smtp.gmail.com",
        Username : "sushantsingal42@gmail.com",
        Password : "whitedevil@1234",
        To : 'sushantsingal18@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Enquiry Form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}