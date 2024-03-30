//ABRIR MENU DO LADO//
let btnMenu = document.getElementById('btnMenu')
let menu = document.getElementById('menumobile')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
//FIM DA CLASSE MENU//

//INDICAR ONDE VAI AS CLASSE REFERENTES//
document.querySelectorAll('a[href^="#especialidades"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#sobre"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#contato"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#inicio"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//FIM DA CLASSE REFERENTE//

//IMAGEM ABRIR E FECHAR//
function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
//FIM DA CLASSE//
function openModal(imageSrc) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImg');
    modal.classList.add('show'); // Adiciona a classe 'show' ao modal

    // Timeout necessário para aguardar a aplicação da classe antes de mostrar a imagem
    setTimeout(function() {
        modalImg.src = imageSrc;
    }, 200);
}
function closeModal() {
    var modal = document.getElementById('modal');
    modal.classList.remove('show'); // Remove a classe 'show' do modal
}