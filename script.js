// 1. Eco Quiz: Captura a resposta corretamente e renderiza o feedback
function verificarQuiz() {
    const opcoes = document.getElementsByName('quiz');
    let resposta = null;
    
    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            resposta = opcoes[i].value;
            break;
        }
    }

    const resDiv = document.getElementById('quiz-resultado');
    if (resposta === null) {
        resDiv.innerHTML = "⚠️ Escolha uma opção primeiro!";
        resDiv.style.color = "#ef4444";
        return;
    }

    if (resposta === "certo") {
        resDiv.innerHTML = "🎉 Mandou bem! O ILPF recupera o solo, protege o ecossistema e gera renda! 🚀";
        resDiv.style.color = "var(--verde-musgo)";
    } else {
        resDiv.innerHTML = "❌ Errado! Tente a opção que integra tudo de forma sustentável.";
        resDiv.style.color = "#ef4444";
    }
}

// 2. Mural de Notas: Cria e adiciona os stickers dinâmicos na tela
function adicionarNota() {
    const input = document.getElementById('ideia-input');
    const texto = input.value.trim();
    
    if (texto === "") {
        alert("Escreva alguma ideia para colar!");
        return;
    }

    const cores = ['var(--amarelo-manteiga)', 'var(--azul-ceu)', 'var(--verde-pop)'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    
    const rotacoes = ['-4deg', '3deg', '-2deg', '5deg'];
    const rotacaoAleatoria = rotacoes[Math.floor(Math.random() * rotacoes.length)];

    // Criando o elemento HTML da nota dinamicamente
    const novaNota = document.createElement('div');
    novaNota.className = 'post-it';
    novaNota.style.backgroundColor = corAleatoria;
    novaNota.style.transform = `rotate(${rotacaoAleatoria})`;
    novaNota.innerText = texto;

    // Inserindo no mural
    document.getElementById('mural').appendChild(novaNota);
    
    // Limpando o campo de texto
    input.value = "";
}

// 3. Simulador de Campo: Atualiza dinamicamente as cores e textos com base no slider
function calcularImpacto() {
    const valor = document.getElementById('tech-range').value;
    const status = document.getElementById('impacto-status');
    const box = document.getElementById('impacto-box');

    if (valor === "1") {
        status.innerText = "🚨 Baixa tecnologia: Desperdício de água elevado e baixa produtividade por hectare.";
        box.style.backgroundColor = "#fecdd3"; // Vermelho claro
    } else if (valor === "2") {
        status.innerText = "🌾 Manejo Moderado: Uso correto de adubação e rotação básica de culturas. Já ajuda muito!";
        box.style.backgroundColor = "var(--amarelo-manteiga)"; // Amarelo
    } else if (valor === "3") {
        status.innerText = "🌱 Agro Tech Máximo: Uso de drones, bioinsumos substituindo químicos e emissão zero de carbono. Incrível!";
        box.style.backgroundColor = "#bbf7d0"; // Verde claro
    }
}