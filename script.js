const imagens = document.querySelectorAll(".projeto img");

imagens.forEach(function(imagem) {
    imagem.addEventListener("click", function() {
        imagem.classList.toggle("ampliada");
    });
});