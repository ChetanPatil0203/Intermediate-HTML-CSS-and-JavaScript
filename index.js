document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault(); // stop page refresh

    alert("Form Submitted Successfully! "); // alert popup

    this.reset(); // clear all input fields
});
