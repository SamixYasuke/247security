function handleWorkPhotoUpload(event) {
  const file = event.target.files[0];
  const maxSize = 50 * 1024 * 1024; // 50MB
  if (file.size > maxSize) {
    document.getElementById("work-photo-error-message").style.display = "block";
    document.getElementById("work-photo-file-name").innerText =
      "Upload a picture of you in a suit";
    event.target.value = "";
    console.log("File Size of 50mb exceeded");
  } else {
    document.getElementById("work-photo-error-message").style.display = "none";
    document.getElementById("work-photo-file-name").innerText = file.name;
  }
}

function handleLicenseUpload(event) {
  const file = event.target.files[0];
  const maxSize = 50 * 1024 * 1024;
  if (file.size > maxSize) {
    document.getElementById("license-error-message").style.display = "block";
    document.getElementById("license-file-name").innerText =
      "Upload all relevant licenses";
    event.target.value = "";
    console.log("File Size of 50mb exceeded");
  } else {
    document.getElementById("license-error-message").style.display = "none";
    document.getElementById("license-file-name").innerText = file.name;
  }
}

function submitForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const workPhoto = document.getElementById("work-photo").files[0].name;
  const license = document.getElementById("license").files[0].name;
  const formData = {
    email: email,
    password: password,
    confirm_password: confirmPassword,
    work_photo: workPhoto,
    license: license,
  };
  console.log(formData);

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm-password").value = "";
  document.getElementById("work-photo").value = null;
  document.getElementById("license").value = null;
  document.getElementById("work-photo-file-name").innerText =
    "Upload a picture of you in a suit";
  document.getElementById("license-file-name").innerText =
    "Upload all relevant licenses";
}
