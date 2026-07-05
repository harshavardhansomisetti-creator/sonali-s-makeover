window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {
        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }, 200);
});

document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;

    let message =
`Hello Sonali's Makeover,

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}`;

    let url =
`https://wa.me/917396538909?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

});