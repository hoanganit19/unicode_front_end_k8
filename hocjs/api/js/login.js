//Check login
if (localStorage.getItem("token")) {
  window.location.href = "index.html";
}

var loginForm = document.querySelector(".login");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var email = this.querySelector('[name="email"]').value;
  var password = this.querySelector('[name="password"]').value;

  if (email && password) {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (!response.error) {
          localStorage.setItem("token", response.token);
          //reload trang
          window.location.reload();
        } else {
          alert("Thông tin đăng nhập không hợp lệ");
        }
      });
  }
});
