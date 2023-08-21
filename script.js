var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "harshsharma9810@gmail.com",
    Password : "33FE499BBDE9FB6C0FEE5166C2E40E689F0C",
    To : 'harshsharma9810@gmail.com',
    From : "harshsharma9810@gmail.com",
    // ReplyTo: document.getElementById("email").value,
    // From : document.getElementById("email").value,
    Subject : document.getElementById("sub").value,
    Body : document.getElementById("msg").value,

}).then(
  message => alert(message)
);
}
