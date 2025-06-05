function validateForm() {
  let isValid = true;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi nama
  if (name.trim() === "") {
    document.getElementById("nameError").textContent = "Nama harus diisi.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Validasi email (sederhana)
  if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent = "Email tidak valid.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Validasi password (minimal 6 karakter)
  if (password.trim().length < 6) {
    document.getElementById("passwordError").textContent = "Password minimal 6 karakter.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  return isValid;
}
