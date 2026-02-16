// script.js - A Lógica do Dream Team

// Referências aos elementos da tela
const pitch = document.getElementById('pitch');
const formationSelect = document.getElementById('formationSelect');
const modalOverlay = document.getElementById('playerModal');
const modalList = document.getElementById('modalList');
const modalTitle = document.getElementById('modalTitle');

// Variável para saber qual bolinha (slot) estamos editando
let activeSlot = null;

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // Carrega a formação padrão ao abrir o site
    loadFormation('4-3-3');
});

// Evento: Quando mudar a formação no menu
formationSelect.addEventListener('change', (e) => {
    // Confirmação simples para não perder o time sem querer
    if (document.querySelectorAll('.player-token').length > 0) {
        if(!confirm("Mudar a formação vai limpar o campo. Deseja continuar?")) {
            e.target.value = getCurrentFormationName(); // Volta para a anterior
            return;
        }
    }
    loadFormation(e.target.value);
});

// --- FUNÇÕES PRINCIPAIS ---

// 1. Desenha as bolinhas vazias no campo
function loadFormation(formationName) {
    const layout = FORMACOES[formationName];
    
    // Limpa o campo (remove slots antigos)
    // Mantém apenas as linhas do campo (classes que não são .slot)
    const oldSlots = document.querySelectorAll('.slot');
    oldSlots.forEach(s => s.remove());

    layout.forEach((pos, index) => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        
        // Posiciona usando porcentagem (para ser responsivo)
        slot.style.top = pos.top + '%';
        slot.style.left = pos.left + '%';
        
        // Guarda quais posições esse slot aceita (ex: ['ZAG', 'LAT'])
        slot.dataset.types = JSON.stringify(pos.type); 
        slot.dataset.index = index;

        // Cria o botão "+"
        slot.innerHTML = `<div class="slot-empty" onclick="openPicker(this)">+</div>`;

        // Ativa a função de arrastar (Drag & Drop)
        makeDraggable(slot);

        pitch.appendChild(slot);
    });
}

// 2. Abre a lista de jogadores (Modal)
window.openPicker = function(element) {
    // Identifica o slot pai do elemento clicado
    const slot = element.closest('.slot');
    activeSlot = slot;
    
    // Lê quais tipos de jogador esse slot aceita
    const allowedTypes = JSON.parse(slot.dataset.types);
    
    // Atualiza o título do modal
    modalTitle.innerText = `Escolher: ${translatePos(allowedTypes)}`;
    
    // Filtra os jogadores do arquivo dados.js
    // Mostra apenas se a posição do jogador estiver na lista de permitidos
    const validPlayers = JOGADORES.filter(p => allowedTypes.includes(p.pos));
    
    // Ordena por nome
    validPlayers.sort((a, b) => a.nome.localeCompare(b.nome));

    // Renderiza a lista visual
    modalList.innerHTML = '';
    
    if(validPlayers.length === 0) {
        modalList.innerHTML = '<div style="padding:20px; text-align:center; color:#888">Nenhum jogador encontrado para esta posição.</div>';
    }

    validPlayers.forEach(player => {
        const item = document.createElement('div');
        item.className = 'player-option';
        
        // Lógica da Imagem: Se não tiver link no dados.js, cria um avatar com as iniciais
        const imgUrl = player.img && player.img.length > 5 
            ? player.img 
            : `https://ui-avatars.com/api/?name=${player.nome}&background=333&color=fff&size=128`;
            
        // Pega o escudo do time
        const escudoUrl = ESCUDOS[player.time];

        item.innerHTML = `
            <div style="position:relative">
                <img src="${imgUrl}" alt="${player.nome}">
                <img src="${escudoUrl}" class="mini-badge">
            </div>
            <div class="opt-info">
                <span class="opt-name">${player.nome}</span>
                <span class="opt-team">${formatTeamName(player.time)}</span>
            </div>
        `;
        
        // Ao clicar no jogador da lista
        item.onclick = () => selectPlayer(player);
        
        modalList.appendChild(item);
    });

    // Mostra o modal
    modalOverlay.classList.add('active');
}

// 3. Coloca o jogador escolhido no campo
function selectPlayer(player) {
    if(!activeSlot) return;

    const imgUrl = player.img && player.img.length > 5 
        ? player.img 
        : `https://ui-avatars.com/api/?name=${player.nome}&background=202024&color=fff&size=128`;
    
    const escudoUrl = ESCUDOS[player.time];

    // Substitui o "+" pelo card do jogador
    // Mantemos o onclick para poder trocar o jogador depois
    activeSlot.innerHTML = `
        <div class="player-token" onclick="openPicker(this)">
            <img src="${imgUrl}" draggable="false">
            <div class="player-badge"><img src="${escudoUrl}"></div>
            <div class="player-label">${player.nome}</div>
        </div>
    `;

    closeModal();
}

// 4. Fecha o modal
window.closeModal = function() {
    modalOverlay.classList.remove('active');
    activeSlot = null;
}

// 5. Limpa o campo (Reset)
window.resetField = function() {
    if(confirm("Tem certeza que deseja limpar todo o time?")) {
        loadFormation(formationSelect.value);
    }
}

// 6. Salvar (Simulação)
window.saveTeam = function() {
    // Aqui você poderia salvar no LocalStorage ou gerar uma imagem
    alert("Time salvo com sucesso! (Funcionalidade demonstrativa)");
}

// --- UTILITÁRIOS ---

// Traduz códigos para nomes legíveis
function translatePos(types) {
    const dict = {
        'GOL': 'Goleiro',
        'ZAG': 'Zagueiro',
        'LAT': 'Lateral',
        'VOL': 'Volante',
        'MEI': 'Meia',
        'ATA': 'Atacante'
    };
    return types.map(t => dict[t] || t).join(' ou ');
}

// Formata nome do time
function formatTeamName(slug) {
    const names = {
        'palmeiras': 'Palmeiras',
        'corinthians': 'Corinthians',
        'saopaulo': 'São Paulo',
        'flamengo': 'Flamengo'
    };
    return names[slug] || slug.toUpperCase();
}

function getCurrentFormationName() {
    // Retorna o valor atual do select caso precise reverter
    return formationSelect.options[formationSelect.selectedIndex].text;
}

// --- LÓGICA DE ARRASTAR (DRAG AND DROP LIVRE) ---
// Funciona tanto para Mouse (PC) quanto Touch (Celular)

function makeDraggable(el) {
    let isDragging = false;
    let startX, startY, startTop, startLeft;
    let moved = false; // Para diferenciar clique de arrasto

    const startDrag = (e) => {
        // Se clicar no botão de fechar ou dentro do modal, ignora
        if(e.target.closest('.modal-overlay')) return;
        
        // Apenas botão esquerdo do mouse
        if(e.type === 'mousedown' && e.button !== 0) return;

        isDragging = true;
        moved = false; // Reset

        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        startX = clientX;
        startY = clientY;
        
        // Pega a posição atual em pixels
        startTop = el.offsetTop;
        startLeft = el.offsetLeft;
        
        el.style.zIndex = 1000; // Traz para frente de tudo
        el.style.cursor = 'grabbing';
    };

    const doDrag = (e) => {
        if (!isDragging) return;
        
        // Previne scroll da tela no celular enquanto arrasta jogador
        if(e.type === 'touchmove') e.preventDefault(); 

        const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        // Se moveu mais que 5 pixels, considera arrasto (e não clique)
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
            moved = true;
        }

        // Calcula nova posição em % para manter responsividade
        const parentRect = pitch.getBoundingClientRect();
        
        let newTopPx = startTop + deltaY;
        let newLeftPx = startLeft + deltaX;

        // Converte para porcentagem
        let newTopPerc = (newTopPx / parentRect.height) * 100;
        let newLeftPerc = (newLeftPx / parentRect.width) * 100;

        // Limites (não deixar sair do campo)
        newTopPerc = Math.max(0, Math.min(newTopPerc, 92)); // 92 considera o tamanho da bolinha
        newLeftPerc = Math.max(0, Math.min(newLeftPerc, 92));

        el.style.top = newTopPerc + '%';
        el.style.left = newLeftPerc + '%';
    };

    const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        el.style.zIndex = '';
        el.style.cursor = 'grab';

        // Se não moveu quase nada, foi um clique! Abre o modal.
        if (!moved) {
            // Pequeno hack para garantir que o click event dispare
            // Se já tiver a função openPicker no onclick do HTML interno, ela vai rodar.
            // Se for necessário forçar:
            // openPicker(el.querySelector('.slot-empty') || el.querySelector('.player-token'));
        }
    };

    // Event Listeners Desktop
    el.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
    
    // Event Listeners Mobile (Passive false para permitir preventDefault)
    el.addEventListener('touchstart', startDrag, {passive: false});
    document.addEventListener('touchmove', doDrag, {passive: false});
    document.addEventListener('touchend', stopDrag);
}
