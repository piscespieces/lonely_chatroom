const form = document.querySelector('#inputForm')
const input = document.querySelector('#inputChat')
const inputValue = document.querySelector('#inputValue')
const button = document.querySelector('#submitButton')
const chatbox = document.querySelector('.chatbox')
const lonelyButton = document.querySelector('#lonely')
const time = new Date()
const url = 'https://api.icndb.com/jokes/random'

let index = 0

const userName = () => {
    let userName = ['Me', 'Myself', 'I']
    return userName[Math.floor(Math.random() * userName.length)]
}

const handleSubmitForm = (event) => {
    event.preventDefault()
    index++
    const message =
        `<div class="message" id="${index}">
        <div class="date">
        ${time.getMonth()}/${time.getDate()}/${time.getFullYear()}
        </div>
        <div class="contentMessage">
            <span>
                ${time.getHours()}:${time.getMinutes()} 
            <span id="from">
                ${userName()}:</span>
            </span>
            <span id="inputValue">
                ${input.value}
            </span>
            <span id="deleteIcon">
                <i class="fas fa-minus-circle" onclick="deleteMsg(${index})"></i>
            </span>
        </div>
    </div>`
    chatbox.innerHTML = message + chatbox.innerHTML
    form.reset()
}

const deleteMsg = (id) => {
    let msg = document.getElementById(id)
    msg.remove()
}

async function iFeelLonely() {
    const joke = await jokes()
    index++
    const lonelyMessage =
        `<div class="message" id="${index}">
        <div class="date">
        ${time.getMonth()}/${time.getDate()}/${time.getFullYear()}
        </div>
        <div class="contentMessage">
            <span>
                ${time.getHours()}:${time.getMinutes()} 
            <span id="from">
                ${apiUser()}:</span>
            </span>
            <span id="inputValue">
            ${joke}
            </span>
            <span id="deleteIcon">
                <i class="fas fa-minus-circle" onclick="deleteMsg(${index})"></i>
            </span>
        </div>
    </div>`
    chatbox.innerHTML = lonelyMessage + chatbox.innerHTML
}

//FETCH
async function jokes() {
    const data = await fetch(url)
    const { value } = await data.json()
    const getJoke = await value.joke
    return getJoke
}

//FROM FACT
const apiUser = () => {
    const apiUser = ['Fact']
    return apiUser
}

//GET API RANDOM JOKE PRINTED


lonelyButton.addEventListener('click', iFeelLonely)
addEventListener('submit', handleSubmitForm)

