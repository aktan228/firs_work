let number = document.querySelector('#number') 
let mm = document.querySelector('#mm') 
let gg = document.querySelector('#gg') 
let name = document.querySelector('#name') 
let btn = document.querySelector('#btn') 
 
let users = {} 
 
function User(number , mm , gg , name){ 
    this.number = number ; 
    this.mm = mm ; 
    this.gg = gg ; 
    this.name = name ; 
} 
 
function createId(users){ 
    return Object.keys(users).length 
} 
btn.addEventListener('click', () =>{ 
    const numberUser = number.value ; 
    const mmUser = mm.value ; 
    const ggUser = gg.value ; 
    const nameUser = name.value ; 
 
    const user = new User(numberUser , mmUser , ggUser , nameUser) ; 
 
    const userId = 'User' + createId(users) ; 
    users[userId] = user ; 
 
    console.log(users) 
})
