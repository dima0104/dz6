const URL     = 'https://api.github.com/users';
let conteiner = document.getElementById('contain');
let Get    = document.getElementById('search');
let input     = document.getElementById('inp');
let user;

let divlogin = document.createElement('div');
let divname = document.createElement('div');
let divid = document.createElement('div');
let img = document.createElement('img');

Get.addEventListener('click', function(e){
    
    e.preventDefault()
    let req = fetch(`${URL}/${input.value}`);
    req     
    .then((response) => {
        if(response.ok === false){
            alert('This account does not exist!');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data.message)
        if(data.message === 'Not Found'){}
        else{
            user = data ;
        Avatar(user);
        Login(user);
        Id(user);
        Name(user)
        }
    }); 
});

function Login(user) {
    divlogin.textContent ='Login :' + user.login;
    conteiner.append(divlogin);
};
function Name(user) {
    divname.textContent ='Name :' + user.name;
    conteiner.append(divname);
};
function Id(user) {
    divid.textContent = 'ID :' + user.id;
    conteiner.append(divid);
};
function Avatar(user) {
    img.src = user.avatar_url;
    conteiner.append(img);
};