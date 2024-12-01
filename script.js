const tabs = document.querySelectorAll('.interface'); //Inicio do código que pega todos os botões de menu criados.

tabs.foreach(tab => tab.addEventListener('click', () => tabClicked(tab))); //Função que percorre todos os botões de menu e faz um clique no botão criado.

const tabClicked = (tab) => {
    const interfaces = document.querySelectorAll('.interface'); //Aqui pega cada conteúdo do menu criado

    interfaces.foreach(interface => interface.classlist.remove('show')); //Remoção do conteúdo show
    
    const content = (tab.getAttribute('interface')); 

    console.log(content);
}
