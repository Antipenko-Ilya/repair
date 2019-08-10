let callMe = document.querySelector('.navbar__button');
let modalDialog = document.querySelector('.modal');
let modalDialogClose = document.querySelector('.modal-dialog__close');
let check = false;

console.log(callMe, modalDialog);

function closeModal(){
    if(check){
        modalDialog.classList.remove('modal_active');
    }
}

callMe.addEventListener('click', () => {
    
    check = true;
    modalDialog.classList.add('modal_active'); 
    setTimeout(closeModal, 1000);

});
modalDialogClose.addEventListener('click', () => closeModal());



