// Lista de carros com suas informações
let listaCarros = [
    {
        "nome": "Drako GTE",
        "img": "img/drako-gte.jpg",
        "descricao": "O Drako GTE é um carro esportivo elétrico de alto desempenho, com uma potência impressionante e um design futurista. Ele é conhecido por sua velocidade e tecnologia avançada.",
    },
    {
        "nome": "Mercedes-Benz EQS 580 4MATIC",
        "img": "img/mercedes-benz-eqs-580-4matic.jpg",
        "descricao": "O Mercedes-Benz EQS 580 4MATIC é um sedã elétrico de luxo, oferecendo conforto excepcional e tecnologia de ponta. Ele combina desempenho com uma experiência de condução sofisticada.",
    },
    {
        "nome": "BMW iX xDrive50",
        "img": "img/bmw-ix-xdrive50.jpg",
        "descricao": "O BMW iX xDrive50 é um SUV elétrico que combina estilo moderno com desempenho impressionante. Ele oferece uma experiência de condução dinâmica e tecnologia inovadora.",
    },
    {
        "nome": "Porsche Taycan Turbo S",
        "img": "img/porsche-taycan-turbo-s.jpg",
        "descricao": "O Porsche Taycan Turbo S é um carro esportivo elétrico de alto desempenho, conhecido por sua aceleração rápida e manuseio preciso. Ele combina luxo com uma experiência de condução emocionante.",
    },
    {
        "nome": "Tesla Model S Plaid",
        "img": "img/tesla-model-s-plaid.jpg",
        "descricao": "O Tesla Model S Plaid é um sedã elétrico de alto desempenho, com uma aceleração impressionante e tecnologia avançada. Ele é conhecido por sua autonomia e recursos de direção autônoma.",
    },
    {
        "nome": "Lucid Air Dream Edition",
        "img": "img/lucid-air-dream-edition.jpg",
        "descricao": "O Lucid Air Dream Edition é um sedã elétrico de luxo, oferecendo uma combinação de desempenho excepcional e conforto. Ele é conhecido por sua autonomia impressionante e tecnologia inovadora.",
    }
];

// Criar os cards dos carros dinamicamente
listaCarros.forEach((carro, posicao) => {
    let cardCarro = document.querySelector('#cards');
    cardCarro.innerHTML += `
        <div class="col-md-4">
            <div class="card m-2">
                <img src="${carro.img}" class="card-img-top" alt="${carro.nome}">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onclick="zoomImg(${posicao})">
                        <i class="bi bi-zoom-in"></i>
                    </a>
                </div>
            </div>
        </div>`;
});

// Função para mostrar os detalhes do carro no modal
function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];
    document.querySelector('#nomeCarro').textContent = carroSelecionado.nome;
    document.querySelector('#descricaoCarro').textContent = carroSelecionado.descricao;
    document.querySelector('#imgModal').src = carroSelecionado.img;
    document.querySelector('#imgModal').alt = carroSelecionado.nome;

    // Mostrar o modal
    let modal = new bootstrap.Modal(document.getElementById('modalZoom'));
    modal.show();
}