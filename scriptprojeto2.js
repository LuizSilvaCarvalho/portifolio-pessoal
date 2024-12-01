//function rolarParaOfertas() {
    // Encontre o elemento com o ID 'ofertas' e role até ele
    //const ofertasSection = document.getElementById('ofertas');
    
    // Rolagem suave até a seção de ofertas
    //ofertasSection.scrollIntoView({
        //behavior: 'smooth'
    //});
//}

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada. Responderemos para ${email} em breve.`);});