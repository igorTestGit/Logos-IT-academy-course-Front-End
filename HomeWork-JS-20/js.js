let usersArr = []

// let usersArr = [{
//     log: "101",
//     pas: "101",
//     em: "101"
// }, {
//     log: "sfhshdf",
//     pas: "fgbgv1",
//     em: "eewree"
// }]


let numberOfUsers = usersArr.length
let trString;

let getId = x => document.getElementById(x);
let getSel = x => document.querySelector(x);

let login
let password
let email

let currentIndexUser = 0;

let userIndex;

// let loginInput = getId('loginInput')
// let paswInput = getId('paswordInput').innerText

getId('addUserBtn').onclick = function (event) {
    addUser()
}

function addUser() {
    login = f1.loginInput.value
    password = f1.paswordInput.value
    email = f1.emailInput.value
    if (login != '' & password != '' & email != '') {
        let userObj = {
            log: login,
            pas: password,
            em: email
        }
        usersArr.push(userObj)
        render()
        f1.reset()
    } else {
        alert('ЗАПОВНІТЬ ВСІ ПОЛЯ ФОРМИ !')
    }
}

function render() {

    trString = ''
    getId('tboby').innerHTML = ''

    for (let i = 0; i < usersArr.length; i++) {

        console.log('ЦИКЛ ПРАЦЮЄ')
        console.log(usersArr.length)

        // let tagTr = document.createElement('tr');

        trString = `
    <tr class="table_user">
                    <td>${i+1}</td>
                     <td>${usersArr[i].log}</td>
                     <td>${usersArr[i].pas}</td>
                   <td>${usersArr[i].em}</td>
                    <td>
                        <button type="button" value="${i+1}" class="editUserBtn btn btn-warning butMySize">Edit</button>
                    </td>
                    <td>
                        <button type="button" value="${i+1}" class="deleteUserBtn btn btn-danger butMySize" >Delete</button>
                    </td>
                </tr>
    
    `
        console.log(trString)
        // getId('tboby').appendChild(trString)
        getId('tboby').innerHTML += trString
        getSel('.deleteUserBtn').addEventListener("click", function (ev) {
            console.log('КЛІК ПО КНОПЦІ DELETE')
            console.log('ev.value ---- ' + this.value)
            deleteUser(this.value - 1)
            render()
        })


        getSel('.editUserBtn').addEventListener("click", function (ed) {
            console.log('КЛІК ПО КНОПЦІ EDIT')
            console.log('this.value ---- ' + this.value)
            editUser(this.value)

        })


    }
}

function deleteUser(e) {
    console.log(usersArr)
    usersArr.splice(e, 1)
    console.log(usersArr)

}

function editUser(ed) {
    console.log(ed)
    let editUsArr = usersArr[ed - 1]
    console.log(editUsArr.log, editUsArr.pas, editUsArr.em)
    f1.loginInput.value = editUsArr.log
    f1.paswordInput.value = editUsArr.pas
    f1.emailInput.value = editUsArr.em
    userIndex = ed - 1;
    console.log('userIndex--', userIndex)

    getId('addUserBtn').style.display = 'none'
    getId('editUserBtn').style.display = 'block'

    getId('editUserBtn').addEventListener('click', function (ed) {
        
        console.log("КЛІК по кнопці EDIT USER")

        editUsArr.log = f1.loginInput.value
        editUsArr.pas = f1.paswordInput.value
        editUsArr.em = f1.emailInput.value

        usersArr.splice(userIndex, 1, editUsArr)
        console.log(usersArr)
        render()
        getId('editUserBtn').style.display = 'none'
        getId('addUserBtn').style.display = 'block'
        f1.reset()
    })

}

