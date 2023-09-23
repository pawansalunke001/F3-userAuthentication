const str = localStorage.getItem('User');
const data = JSON.parse(str);

const userName = document.getElementById('head');
const nam = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const logOut = document.getElementById('log-out');
const signUpBtn = document.getElementById('signup');
const profileBtn = document.getElementById('profile');
const message = document.querySelector('.message');
const dark = document.getElementById('dark');

userName.innerText = data.fullName;
nam.innerText = data.fullName;
email.innerText = data.email;
pass.innerText = data.pass;


const div = document.createElement('div');

profileBtn.addEventListener('click',()=>{
    div.innerText = 'You are already in profile section.'
    div.style.color = 'rgb(255, 188, 5)';
    div.style.fontWeight = '600';
    div.style.fontSize = '15px';
    message.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },1500);
})
signUpBtn.addEventListener('click',()=>{
    div.innerText = 'You have already signed up...'
    div.style.color = 'rgb(255, 188, 5)';
    div.style.fontWeight = '600';
    div.style.fontSize = '15px';
    message.appendChild(div);
    setTimeout(()=>{
        div.remove();
    },1500);
})

logOut.addEventListener('click',()=>{
    localStorage.clear();
    window.location.href = "index.html";
})

const items = document.querySelectorAll(".items");
const nav = document.getElementById('nav');
document.body.style.backgroundColor = '#f2f2f2';

dark.addEventListener('click',()=>{

    if(document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor = '#f2f2f2';
        document.body.style.color = 'black';
        items.forEach((e)=>{
            // e.style.borderBottom = '2px solid black'
        })
        nav.style.backgroundColor = '#ea649eec';
        signUp.style.backgroundColor = '#463EEA';
    }else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        items.forEach((e)=>{
            // e.style.borderBottom = '2px solid white'
            
        })
        nav.style.backgroundColor = '#ea649eec';
        signUp.style.backgroundColor = '#463EEA';
    }

})