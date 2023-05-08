const toggle =document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})

const myForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('#first-name');
const lastInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const subInput = document.querySelector('#subject');
const messInput = document.querySelector('#message');
const checkInput = document.querySelector('#checkbox');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
   

    if(nameInput.value === '' || lastInput.value === '' || emailInput.value === '' || subInput.value === '' || messInput.value === '' ) {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all feild'


        setTimeout(() => msg.remove(), 3000)
    }else {
        msg.classList.add('done')
        msg.innerHTML = 'Successfully Sent'

        setTimeout(() => msg.remove(), 3000)
    }
   
}
