const error = document.getElementById("error");
const email= document.getElementById("email_input");
const form= document.querySelector("form");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



form.addEventListener("submit",function (event){
    event.preventDefault()

    if(email.value.match(validRegex)){
        alert('Thank you for applying');
        email.style.borderColor= 'green';
    }else if(email.value === ''){

        error.style.display= 'block'
        email.style.borderColor= 'red';
       
        
    }
    else{
        error.style.display= 'block'
        email.style.borderColor= 'red';
    }


})