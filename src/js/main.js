// let callMe = document.querySelector('.navbar__button');
// let modalDialog = document.querySelector('.modal');
// let modalDialogClose = document.querySelector('.modal-dialog__close');
// let check = false;

// console.log(callMe, modalDialog);

// function closeModal(){
//     if(check){
//         modalDialog.classList.remove('modal_active');
//     }
// }

// callMe.addEventListener('click', () => {
    
//     check = true;
//     modalDialog.classList.add('modal_active'); 
//     setTimeout(closeModal, 1000);

// });
// modalDialogClose.addEventListener('click', () => closeModal());

$(document).ready(() => {
    let button = $('.button');
    let modal = $('.modal');
    let close = $('.modal-dialog__close');

    button.on('click', () =>{
        modal.addClass('modal_active');
    });
    close.on('click', () =>{
        modal.removeClass('modal_active');
    });
    $(window).scroll(() => $(this).scrollTop() > 50 ?  $('.btn_up').fadeIn() : $('.btn_up').fadeOut());
    
    $('.btn_up').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

