//var res = fetch("http://localhost:3000/users"); //trả về 1 promise

fetch("http://localhost:3000/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //data = JSON.parse(data);
    data.forEach(function (user) {
      console.log(user);
    });

    console.log("Bước tiếp theo");
  });

/*
Khi call api => Chờ server phản hồi => Xảy ra tình trạng bất đồng bộ
fetch() Trả về response và data
Nếu muốn lấy data => gọi đến hàm response.json() hoặc response.text()

Xử lý bất đồng bộ: async await
*/

async function getUsers() {
  const response = await fetch(`http://localhost:3000/users`);
  const users = await response.json();
  console.log(users);
  console.log("Bước tiếp theo lần 2");
}

getUsers();
