let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

sendMsgBtn.onclick = function() {
    let userInputVal = userInput.value;

    let msgToChatbotContainer = document.createElement("div");
    msgToChatbotContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(msgToChatbotContainer);

    let inputMsg = document.createElement("span");
    inputMsg.textContent = userInputVal;
    inputMsg.classList.add("msg-to-chatbot");
    msgToChatbotContainer.appendChild(inputMsg);

    let msgFromChatbotContainer = document.createElement("div");
    msgFromChatbotContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(msgFromChatbotContainer);

    let ChatbotMsg = document.createElement("span");
    let length = chatbotMsgList.length;
    let randomNum = Math.ceil(Math.random() * length);
    ChatbotMsg.textContent = chatbotMsgList[randomNum - 1];
    ChatbotMsg.classList.add("msg-from-chatbot");
    msgFromChatbotContainer.appendChild(ChatbotMsg);

    userInput.value = "";
}