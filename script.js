//Valore do array Hexadecimal
const cores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const geradorBtn = document.getElementById("colorGenerateBtn");
const colorBox = document.querySelector(".color_box");
const valores = document.getElementById("colorHexValue");
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
    console.log(hexadecimal);
});

//Mudar número do gerador
generateRandomNuber = () => {
    return Math.floor(Math.random() * cores.length);
}