document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (!username || !password) {
    errorMsg.textContent = "Both fields are required!";
    errorMsg.classList.add("shake");
    setTimeout(() => errorMsg.classList.remove("shake"), 400);
    return;
  }

  if (username === "admin" && password === "1234") {
    alert("Login successful ✨");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Invalid username or password.";
    errorMsg.classList.add("shake");
    setTimeout(() => errorMsg.classList.remove("shake"), 400);
  }
});
