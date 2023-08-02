const senderInput = document.querySelector("#sender");
const receiverInput = document.querySelector("#receiver");
const subjectInput = document.querySelector("#subject");
const textareaInput = document.querySelector("#textarea");

const sender = prompt("The Message is from");
const receiver = prompt("The Message is to");
const subject = prompt("Enter the subject");
const message = prompt("Enter message");

class Email {
  constructor(_sender, _receiver, _subject, _message) {
    this.sender = _sender;
    this.receiver = _receiver;
    this.subject = _subject;
    this.message = _message;
  }
  alertMessage() {
    alert(
      `The message is from : ${this.sender} , the message is to : ${this.receiver} , the subject is : ${this.subject} and the message is : ${this.message}`
    );
  }
  enterValue() {
    senderInput.value = this.sender;
    receiverInput.value = this.receiver;
    subjectInput.value = this.subject;
    textareaInput.value = this.message;
  }
}
let newEmail = new Email(sender, receiver, subject, message);
newEmail.alertMessage();
newEmail.enterValue();
