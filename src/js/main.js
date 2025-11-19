//Area_de_chamada_do_DOM_das_listas_ul
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]')

    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            escondeTodasAbas();//chama a função para esconder todas as abas
            aba.classList.add('shows__list--is-active');

            removeBotaoAtivo(); // chama a função para remover o botão ativo
            botao.target.classList.add('shows__tabs__button--is-active');

        })
    }

})

// AREA DAS FUNÇÕES


//Area_de_remoção do botão ativo
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i< buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }

}
//Area de ocultar todas as abas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

//Area de botão ativo