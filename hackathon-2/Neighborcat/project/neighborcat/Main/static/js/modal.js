// 📁 modal.js
// 모달 관련 함수들을 정의하고 내보낸다.

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
