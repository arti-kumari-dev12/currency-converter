async function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  let res = await fetch(`http://localhost:5000/convert?from=${from}&to=${to}&amount=${amount}`);
  let data = await res.json();

  let text = `${amount} ${from} = ${data.result} ${to}`;

  document.getElementById("result").innerText = text;

  // 💾 SAVE HISTORY
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(text);
  localStorage.setItem("history", JSON.stringify(history));
}

function swap(){
  let from=document.getElementById("from");
  let to=document.getElementById("to");

  [from.value,to.value]=[to.value,from.value];
}