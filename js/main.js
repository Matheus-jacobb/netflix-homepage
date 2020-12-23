function inicialModal (modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
    if(e.target.id == modalID || e.target.className == 'fechar')
        modal.classList.remove('mostrar');
    });
}


const logo = document.querySelector ('#botao-info');
logo.addEventListener('click' , () => inicialModal('modal-popup'));

//https://www.youtube.com/watch?v=fu-enUG2VEE

 
function redirecionarTrailer(){
    window.location.href = "https://www.youtube.com/watch?v=2-W6_6gJda0";
}