const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'God is the Greatest',
    'Pray and read the Bible Daily',
    'I Love my Family',
    'Thank you Jesus',
]

const types = ['info', 'success', 'error']


button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())


    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)
    ]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)
    ]
}