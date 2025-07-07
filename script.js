console.log("JS carregado com sucesso!");
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("verMensagem")
    const texto = document.getElementById("mensagem")

    botao.addEventListener("click", () => {
        texto.textContent = "Nunca deixe para amanhã o que pode ser feito hoje!!"
        texto.style.display = "block"
    })
})