// π modal.js
// λͺ¨λ¬ κ΄λ ¨ ν¨μλ€μ μ μνκ³  λ΄λ³΄λΈλ€.

const $ = (selector) => document.querySelector(selector);
const body = $("body");
const modal = $(".modal-container");
const modal_2 = $(".modal-container_2");


const openModal = () => {
    modal.classList.add("open");
    body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.remove("open");
    body.style.overflow = "auto";
};

const openModalTwo = () => {
    modal_2.classList.add("open");
    body.style.overflow = "hidden";
};

const closeModalTwo = () => {
    modal_2.classList.remove("open");
    body.style.overflow = "auto";
};

export { openModal, closeModal, openModalTwo, closeModalTwo };
