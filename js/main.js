const TextAreaOne = document.querySelector('textarea[name="inputText"');
const TextAreaTwo = document.querySelector('textarea[name="outputText"');
const button = document.querySelector('button');
const counter = document.querySelector('.counter');
//Adding event listener to button 
button.addEventListener('click', getEmails);

function getEmails() {
    let temp = TextAreaOne.value;
    let expression = /([A-Za-z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi; //regular expression for extracting emails
    let mails = temp.match(expression);
    let holder = [];
    //checking for duplicate mails
    for (let i = 0; i < mails.length; i++) {
        if (holder.indexOf(mails[i]) == -1) {
            holder.push(mails[i]);
        }
    }

    counter.innerText = holder.length + " emails found";
    TextAreaTwo.innerText = holder; //outputting emails
}