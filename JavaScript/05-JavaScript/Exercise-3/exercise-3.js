class Message {
  constructor(_from, _to, _subject, _message) {
    this.from = _from;
    this.to = _to;
    this.subject = _subject;
    this.message = _message;
  }

  mailSent() {
    let messageFrom = document.createElement("p");
    let messageTo = document.createElement("p");
    let messageSubject = document.createElement("p");
    let message = document.createElement("p");
    let messageDiv = document.querySelector("#message-context");
    messageFrom.innerHTML = `Message from: ${this.from}`;
    messageTo.innerHTML = `Message to: ${this.to}`;
    messageSubject.innerHTML = `Subject: ${this.subject}`;
    message.innerHTML = `Message: <br/> ${this.message}`;
    messageDiv.append(messageFrom);
    messageDiv.append(messageTo);
    messageDiv.append(messageSubject);
    messageDiv.append(message);
  }
}

let sendBtn = document.querySelector("#send");

const sendMessage = (e) => {
  e.preventDefault();
  let from = document.querySelector("#from").value;
  let to = document.querySelector("#to").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  let newMessage = new Message(from, to, subject, message);
  newMessage.mailSent();
  document.querySelector("#from").value = "";
  document.querySelector("#to").value = "";
  document.querySelector("#subject").value = "";
  document.querySelector("#message").value = "";
};

sendBtn.addEventListener("click", sendMessage);
