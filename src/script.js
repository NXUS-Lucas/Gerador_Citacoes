const quotes = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "A persistência é o caminho do êxito.",
  "Se você não lutar pelo que quer, não chore pelo que perdeu.",
  "Grandes coisas nunca vêm de zonas de conforto.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
];

document.getElementById("new-quote").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
});
