import "@fancyapps/ui";
import "slick-carousel/slick/slick";
import $ from "jquery";

$('.carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".slick-prev",
    nextArrow: ".slick-next",
    responsive: [{
        breakpoint: 1500,
        settings: {
            infinite: true,
        },
    },]
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick(){
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

// hamb ^^^

function serializeForm(formNode){
    const data = new FormData(formNode);
    console.log(Array.from(data.entries()))
}

function formSend(){
    alert('Ваша форма успешно отправлена!')
}

function handleFormSubmit(e){
    e.preventDefault();
    serializeForm(applicantForm);
    document.querySelector('form').reset();
    formSend();
}

const applicantForm = document.querySelector("form");
applicantForm.addEventListener('submit', handleFormSubmit);

// form value^^^

//tabs

function openTab(tabId, linkId){
    let tabContent = document.getElementsByClassName('tabs__content');

    for (let i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "grid";
}

function setActiveLink(linkId){
    let links = document.getElementsByClassName('tabs__caption');

    for (let i=0; i < links.length; i++) {
        links[i].classList.remove('tabs__caption-active');
    }

    document.getElementById(linkId).classList.add('tabs__caption-active');
}

let haircutLink = document.getElementById('haircutLink');
let cosmetologyLink = document.getElementById('cosmetologyLink');
let manicureLink = document.getElementById('manicureLink');
let makeupLink = document.getElementById('makeupLink');
let browsLink = document.getElementById('browsLink');
let massageLink = document.getElementById('massageLink');

haircutLink.addEventListener("click", function(){openTab("haircut"); setActiveLink('haircutLink')}, false);
cosmetologyLink.addEventListener("click", function(){openTab("cosmetology"); setActiveLink('cosmetologyLink')}, false);
manicureLink.addEventListener("click", function(){openTab("manicure"); setActiveLink('manicureLink')}, false);
makeupLink.addEventListener("click", function(){openTab("makeup"); setActiveLink('makeupLink')}, false);
browsLink.addEventListener("click", function(){openTab("brows"); setActiveLink('browsLink')}, false);
massageLink.addEventListener("click", function(){openTab("massage"); setActiveLink('massageLink')}, false);