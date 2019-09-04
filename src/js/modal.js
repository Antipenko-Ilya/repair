$(document).ready(() => {
    let button = $('.navbar__button');
    let modal = $('.modal');
    let cardLink = $('.card__link');
    console.log('*****cardLink*****', cardLink );

    button.on('click', () =>{
        modal.addClass('modal_active');
        $(document).mouseup(function (e) {
            let container = $(".modal");
            if (container.has(e.target).length === 0){
                container.removeClass('modal_active');
            }
        });
    });
    cardLink.on('click', event => {
        event.preventDefault();
        modal.addClass('modal_active');
        let target = event.target.attributes["1"].nodeValue;
        console.log('*****target*****', target+'.html');
        let content =  document.querySelector('#modal-content');
        content.innerHTML = `<iframe src="${target+'.html'}" style="border: none; width: 100%; height: 600px;">
        Ваш браузер не поддерживает плавающие фреймы!
     </iframe>`;
        console.log('**********', content );
        $(document).mouseup(function (e) {
            let container = $(".modal");
            if (container.has(e.target).length === 0){
                container.removeClass('modal_active');
            }
        });
    });
    $(window).scroll(() => $(this).scrollTop() > 50 ?  $('.btn_up').fadeIn() : $('.btn_up').fadeOut());
    
    $('.btn_up').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

