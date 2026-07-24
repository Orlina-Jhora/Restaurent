
const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("mName").textContent =
        document.getElementById("name").value;

    document.getElementById("mEmail").textContent =
        document.getElementById("email").value;

    document.getElementById("mPhone").textContent =
        document.getElementById("phone").value;

    document.getElementById("mGuests").textContent =
        document.getElementById("guests").value;

    document.getElementById("mDate").textContent =
        document.getElementById("date").value;

    document.getElementById("mTime").textContent =
        document.getElementById("time").value;

    document.getElementById("mRequest").textContent =
        document.getElementById("request").value || "None";

    const modal = new bootstrap.Modal(
        document.getElementById("reservationModal")
    );

    modal.show();

    form.reset();

});

const form = document.getElementById("signupForm");

form.addEventListener("submit", function(event){

event.preventDefault();
event.stopPropagation();

if(form.checkValidity()){

let modal = new bootstrap.Modal(
document.getElementById("successModal")
);

modal.show();

form.reset();
form.classList.remove("was-validated");

}
else{
form.classList.add("was-validated");
}

});
function updateDateTime() {
    const now = new Date();

    // Current Year
    document.getElementById("year").textContent = now.getFullYear();

    // Format Date & Time
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    };

    document.getElementById("datetime").textContent =
        now.toLocaleString("en-US", options);
}

// Initial call
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);


