const talkBtn = document.getElementById('talk-btn')
const chatInput = document.getElementById('chat-input')
const chatMessages = document.getElementById('chat-messages')

function sendMessage() {
    const message = chatInput.value

    if (!message.trim()) return

    const messageDiv = document.createElement('div')
    messageDiv.classList.add('message')
    messageDiv.textContent = message

    chatMessages.appendChild(messageDiv)

    chatInput.value = ''

    // auto-scroll to bottom (ChatGPT feel)
    chatMessages.scrollTop = chatMessages.scrollHeight
}

talkBtn.addEventListener('click', sendMessage)

// optional: press Enter to send
chatInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        sendMessage()
    }
})