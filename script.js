//Valore do array Hexadecimal
const cores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const geradorBtn = document.getElementById("colorGenerateBtn");
const colorBox = document.querySelector(".color_box");
const colorBox_ultimo = document.querySelector(".cor_caixa");
const colorBox_penultimo = document.querySelector(".cor_caixa_penultima");
const colorBox_antipenultimo = document.querySelector(".cor_caixa_antipenultima");
const valores = document.getElementById("colorHexValue");
const valor_ultimo = document.getElementById("corHex");
const valor_penultimo = document.getElementById("corHex_2");
const valor_antipenultimo = document.getElementById("corHex_3");
const backg = document.body;
let hexadecimal = [];

// Gerar cor aletória
geradorBtn.addEventListener("click", () => {
    let cor = "#";
    for (let i = 0; i < 6; i++) {
        cor += cores[generateRandomNuber()];
    }
    //Mudar a cor do bg da caixa
    colorBox.style.backgroundColor = cor;
    //valor da cor no display
    valores.textContent = cor;
    //Guardando os hexadecimal 
    hexadecimal.push(cor);
    //contador do array
    let ultimoDado = hexadecimal[hexadecimal.length - 2];
    let penultimoDado = hexadecimal[hexadecimal.length - 3];
    let antipenultimodado = hexadecimal[hexadecimal.length - 4];
    let back = hexadecimal[hexadecimal.length - 5];
    //Mudar a cor do bg da caixa
    colorBox_ultimo.style.backgroundColor = ultimoDado;
    colorBox_penultimo.style.backgroundColor = penultimoDado;
    colorBox_antipenultimo.style.backgroundColor = antipenultimodado;
    backg.style.backgroundColor = back;
    //valor da cor no display
    valor_ultimo.textContent = ultimoDado;
    valor_penultimo.textContent = penultimoDado;
    valor_antipenultimo.textContent = antipenultimodado;
});

//Mudar número do gerador
generateRandomNuber = () => {
    return Math.floor(Math.random() * cores.length);
}