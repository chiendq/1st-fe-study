const buyBtns = document.getElementsByClassName('js-buy-tickets')
const modal = document.querySelector('.modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.modal-close')

function showBuyTickets(){
    modal.classList.add('open')
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

for (const btn of buyBtns) {
    btn.addEventListener('click',showBuyTickets)
}

modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',(event)=>{
    event.stopPropagation(modalContainer)
})