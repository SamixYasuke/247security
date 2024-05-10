let getCurrentLocation;

function submitForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const clientName = document.getElementById("client-name").value;
  const getCurrentDate = new Date().toLocaleString();
  const formData = {
    email: email,
    password: password,
    client_name: clientName,
    time_stamp: getCurrentDate,
    location: getCurrentLocation,
  };
  console.log(formData);

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("client-name").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    console.log("Geolocation is not supported by this browser.");
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const currentPosition = `Latitude ${latitude}, Longitude ${longitude}`;
  console.log(currentPosition);
  getCurrentLocation = currentPosition;
}

function showError(error) {
  console.log(error.message);
  alert("Error occurred while retrieving location.");
}
