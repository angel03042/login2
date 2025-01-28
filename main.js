//VERIFICAR USUARIO
document.querySelector('#username').addEventListener('input', (event) => {
    let nombre = event.target.value;
    let usuario = document.querySelector('#verificar_usuario');
    let inputs = document.querySelector('#username');
    if (nombre.length <= 5){
        usuario.style.display = 'block';
        inputs.style.borderColor = 'red';
    }else {
        usuario.style.display = 'none'
        inputs.style.borderColor = '';
    }
})

//VERIFICAR EMAIL
document.querySelector('#email').addEventListener('input',(event)=> {
    let email = event.target.value;
    let errorEmail = document.querySelector('#verificar_email');
    let inputs = document.querySelector('#email');
    let verificar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(verificar.test(email)){
        errorEmail.style.display = 'none';
        inputs.style.borderColor = '';
    }else{
        errorEmail.style.display = 'block';
        inputs.style.borderColor = 'red';
    }
})

//VERIFICAR PASSWORD
document.querySelector('#password').addEventListener('input',(event)=>{
    let password = event.target.value;
    let errorPassword = document.querySelector('#verificar_password');
    let inputs = document.querySelector('#password');

    if(password.length < 6){
        errorPassword.style.display = 'block';
        inputs.style.borderColor = 'red';
    }else{
        errorPassword.style.display = 'none';
        inputs.style.borderColor = '';
    }
})

//BUTTON ('VERIFICAR CORREO')
document.querySelector('#sudmit').addEventListener('submit',(event)=>{
    let email = document.querySelector('#email').value;
    let verificar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!verificar.test(email)){
        event.preventDefault();
        alert('hola')
    }
})


