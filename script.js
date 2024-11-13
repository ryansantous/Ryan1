/* código omitido */

body {
    background-color: #1D4221;
    color: white;
    font-family: "Bai Jamjuree", sans-serif;
}
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})