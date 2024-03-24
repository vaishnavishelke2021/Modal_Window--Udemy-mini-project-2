const btns = document.querySelectorAll('.btns');
const close = document.getElementById('close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

btns.forEach(btn =>{
    btn.addEventListener('click', openModal);
    console.log('clicked');
})

close.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// handling key event
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    };
});
