//Arrow function (Hàm mũi tên)

//Arrow function không tham số
const funcA = () => {
  console.log("A");
};

funcA();

//Arrow function có 1 tham số (không cần cặp ngoặc tròn)
const funcB = (name) => {
  console.log(name);
};

funcB("Hoàng An");

//Arrow function có nhiều tham số

const funcC = (name, age) => {
  console.log(name, age);
};

funcC("Hoàng An", 30);

//Arrow function có return
const funcD = (a, b) => a + b;

console.log(funcD(5, 10));

//Arrow function có return);

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  console.log(this);
});

const getData = ({ name: userName, age }) => {
  console.log(userName);
  console.log(age);
};

getData({ name: "Hoàng An", age: 30 });

//Destructuring
