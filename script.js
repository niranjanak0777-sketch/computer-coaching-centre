function showMessage() {
    document.getElementById("message").innerHTML =
        "Welcome! You can explore our courses below.";
}

document.getElementById("contactForm").addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;

        document.getElementById("result").innerHTML =
            "Thank you, " + name +
            "! Your selected course is " + course + ".";
        
        this.reset();
    }
);