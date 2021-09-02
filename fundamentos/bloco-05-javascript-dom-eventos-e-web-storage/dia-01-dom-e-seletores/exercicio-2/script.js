const h1 = document.querySelector("h1");
h1.style.backgroundColor = "green";
h1.style.padding = "20px";

const h3 = document.querySelectorAll("h3");
for (let element of h3) {
    element.style.color = "white";
}

const emergencyTasksTitle = document.querySelectorAll(".emergency-tasks h3");
for (let element of emergencyTasksTitle) {
    element.style.backgroundColor = "darkorchid";
}

const emergencyTasksDiv = document.querySelector(".emergency-tasks");
emergencyTasksDiv.style.backgroundColor = "salmon";

const noEmergencyTasksTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let element of noEmergencyTasksTitle) {
    element.style.backgroundColor = "black";
}

const noEmergencyTasksDiv = document.querySelector(".no-emergency-tasks");
noEmergencyTasksDiv.style.backgroundColor = "yellow";

const footer = document.querySelector("footer");
footer.style.backgroundColor = "darkslategray";