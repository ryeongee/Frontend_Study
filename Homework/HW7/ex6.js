let num = document.getElementById(e.target.id);

if (num.id === "1") {
  let num2 = document.getElementById(2);
  let num3 = document.getElementById(3);
  let num4 = document.getElementById(4);
  num.style.backgroundColor = "red";
  num2.style.backgroundColor = "yellow";
  num3.style.backgroundColor = "yellow";
  num4.style.backgroundColor = "yellow";
} else if (num.id === "2") {
  let num2 = document.getElementById(1);
  let num3 = document.getElementById(3);
  let num4 = document.getElementById(4);
  num.style.backgroundColor = "red";
  num2.style.backgroundColor = "yellow";
  num3.style.backgroundColor = "yellow";
  num4.style.backgroundColor = "yellow";
} else if (num.id === "3") {
  let num2 = document.getElementById(1);
  let num3 = document.getElementById(2);
  let num4 = document.getElementById(4);
  num.style.backgroundColor = "red";
  num2.style.backgroundColor = "yellow";
  num3.style.backgroundColor = "yellow";
  num4.style.backgroundColor = "yellow";
} else if (num.id === "4") {
  let num2 = document.getElementById(1);
  let num3 = document.getElementById(2);
  let num4 = document.getElementById(3);
  num.style.backgroundColor = "red";
  num2.style.backgroundColor = "yellow";
  num3.style.backgroundColor = "yellow";
  num4.style.backgroundColor = "yellow";
}