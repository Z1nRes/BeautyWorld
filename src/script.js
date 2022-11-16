
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

function openTab(tabId){
    let tabContent = document.querySelector('tabs__content');

    for (let i=0; i < tabContent.lenght; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "grid";

}

//https://codepen.io/nickfazzpdx/pen/MRWrjJ