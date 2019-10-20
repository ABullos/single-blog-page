function appendMailTo(){
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value; 
    console.log(subject);
    console.log(message);

    let mailToAttr = documentgetElementById("sendMail");
    mailToAttr.setAttribute("href", "mailto:andreabullos99@gmail.com?subject ="+subject + "&body=" + message);
}
let date =new Date();
    let yearPos = document.getElementById("getYear");
    let currYear = date.getFullYear();
    yearPos.innerHTML = currYear;