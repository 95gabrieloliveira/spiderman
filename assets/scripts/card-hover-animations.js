function handleMouseEnter(){
   this.classList.add('s-card--hovered')
/* Função para reconhecer ao passar o mouse e abrir a imagem */
document.body.id = `${this.id}-hovered`; 
/* Trocar o fundo do background ao passar o mouse*/
}

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    /* Função para sair ao passar o mouse e desfazer a ação acima */
    document.body.id ='';
    /* Mudar o ID ao sair do mouse */
}

function addEventListenersToCards () {
    const cardElements = document.getElementsByClassName('s-card');
    /* for criado para o carElements ser menor que o index e ++ utilizado para ser utilizado para cada iteração de 1 em 1*/
    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        /* Criado para quando o usuário clicar no card fazer uma iteração */
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded",addEventListenersToCards, false);