const commandLine = document.getElementsByClassName('text')[0]
const matrixMessage = " welcome to maycontrix"

let pc = '[maycon@root]:#'

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let letter = ''
let text = ''
const log = async (string, delay) => {
    for (const letter of string){
        text += letter
        commandLine.innerHTML = pc + text
        await sleep(delay)
        commandLine.innerHTML += '_'
        await sleep(delay)
        commandLine.innerHTML = pc + text
    }
    let i = 0
    setTimeout(async () => {
        while(i<5) {
        commandLine.innerHTML = pc + text
            await sleep(delay+300)
            commandLine.innerHTML += '_'
            await sleep(delay+300)
            i++
        }
    }, 0)
}

log(matrixMessage, 120)
