// script.js - Lógica completa (Seleção + Movimento + Download)

const pitch = document.getElementById('pitch');
const formationSelect = document.getElementById('formationSelect');
const modalOverlay = document.getElementById('playerModal');
const modalList = document.getElementById('modalList');
const modalTitle = document.getElementById('modalTitle');

let activeSlot = null; // Qual slot estamos editando

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadFormation('4-3-3');
});

// Mudança de Formação
formationSelect.addEventListener('change', (e) => {
    // Se já tiver jogadores, pergunta antes de limpar
    if (document.querySelectorAll('.player-token').length > 0) {
        if(!confirm("Mudar a formação vai limpar o campo. Continuar?")) {
            // Se cancelar, volta a seleção para o anterior (lógica simplificada)
            return; 
        }
    }
    loadFormation(e.target.value);
});

// 1. Carregar Formação (Slots Vazios)
function loadFormation(formationName) {
    const layout = FORMACOES[formationName];
    
    // Limpa slots antigos
    const oldSlots = document.querySelectorAll('.slot');
    oldSlots.forEach(s => s.remove());

    layout.forEach((pos, index) => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.style.top = pos.top + '%';
        slot.style.left = pos.left + '%';
        slot.dataset.types = JSON.stringify(pos.type);
        slot.dataset.index = index;

        // Botão +
        slot.innerHTML = `<div class="slot-empty" onclick="openPicker(this)">+</div>`;

        // Ativa Drag & Drop
        makeDraggable(slot);

        pitch.appendChild(slot);
    });
}

// 2. Abrir Modal
window.openPicker = function(element) {
    const slot = element.closest('.slot');
    activeSlot = slot;
    
    const allowedTypes = JSON.parse(slot.dataset.types);
    modalTitle.innerText = `Escolher: ${translatePos(allowedTypes)}`;
    
    const validPlayers = JOGADORES.filter(p => allowedTypes.includes(p.pos));
    validPlayers.sort((a, b) => a.nome.localeCompare(b.nome));

    modalList.innerHTML = '';
    
    if(validPlayers.length === 0) {
        modalList.innerHTML = '<div style="padding:20px; text-align:center; color:#888">Nenhum jogador encontrado.</div>';
    }

    validPlayers.forEach(player => {
        const item = document.createElement('div');
        item.className = 'player-option';
        
        const imgUrl = player.img && player.img.length > 5 
            ? player.img 
            : `https://ui-avatars.com/api/?name=${player.nome}&background=333&color=fff&size=128`;
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
        item.onclick = () => selectPlayer(player);
        modalList.appendChild(item);
    });

    modalOverlay.classList.add('active');
}

// 3. Selecionar Jogador
function selectPlayer(player) {
    if(!activeSlot) return;

    const imgUrl = player.img && player.img.length > 5 
        ? player.img 
        : `https://ui-avatars.com/api/?name=${player.nome}&background=202024&color=fff&size=128`;
    const escudoUrl = ESCUDOS[player.time];

    activeSlot.innerHTML = `
        <div class="player-token" onclick="openPicker(this)">
            <img src="${imgUrl}" draggable="false">
            <div class="player-badge"><img src="${escudoUrl}"></div>
            <div class="player-label">${player.nome}</div>
        </div>
    `;
    closeModal();
}

window.closeModal = function() {
    modalOverlay.classList.remove('active');
    activeSlot = null;
}

window.resetField = function() {
    if(confirm("Limpar todo o time?")) {
        loadFormation(formationSelect.value);
    }
}

// 4. SALVAR IMAGEM (CORRIGIDO)
window.saveTeam = function() {
    const btn = document.querySelector('.btn-save');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<span class="material-icons">downloading</span> Gerando...`;
    
    // Tira print do elemento #pitch
    html2canvas(document.getElementById('pitch'), {
        backgroundColor: null, // Fundo transparente (respeita o verde)
        scale: 2, // Alta qualidade
        logging: false,
        useCORS: true // Permite carregar imagens externas
    }).then(canvas => {
        // Cria link de download
        const link = document.createElement('a');
        link.download = 'meu-dream-team.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        btn.innerHTML = originalText;
    }).catch(err => {
        console.error(err);
        alert("Erro ao gerar imagem. Tente novamente.");
        btn.innerHTML = originalText;
    });
}

// Utilitários
function translatePos(types) {
    const dict = { 'GOL': 'Goleiro', 'ZAG': 'Zagueiro', 'LAT': 'Lateral', 'VOL': 'Volante', 'MEI': 'Meia', 'ATA': 'Atacante' };
    return types.map(t => dict[t] || t).join(' ou ');
}

function formatTeamName(slug) {
    const names = { 'palmeiras': 'Palmeiras', 'corinthians': 'Corinthians', 'saopaulo': 'São Paulo', 'flamengo': 'Flamengo' };
    return names[slug] || slug.toUpperCase();
}

// Drag & Drop (Mouse + Touch)
function makeDraggable(el) {
    let isDragging = false;
    let startX, startY, startTop, startLeft;
    let moved = false;

    const startDrag = (e) => {
        if(e.target.closest('.modal-overlay')) return;
        if(e.type === 'mousedown' && e.button !== 0) return;

        isDragging = true;
        moved = false;

        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        
        startX = clientX;
        startY = clientY;
        startTop = el.offsetTop;
        startLeft = el.offsetLeft;
        
        el.style.zIndex = 1000;
        el.style.cursor = 'grabbing';
    };

    const doDrag = (e) => {
        if (!isDragging) return;
        if(e.type === 'touchmove') e.preventDefault(); 

        const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

        const deltaX = clientX - startX;
        const deltaY = clientY - startY;

        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) moved = true;

        const parentRect = pitch.getBoundingClientRect();
        let newTop = ((startTop + deltaY) / parentRect.height) * 100;
        let newLeft = ((startLeft + deltaX) / parentRect.width) * 100;

        // Limites (0 a 90%)
        el.style.top = Math.max(0, Math.min(newTop, 90)) + '%';
        el.style.left = Math.max(0, Math.min(newLeft, 90)) + '%';
    };

    const stopDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        el.style.zIndex = '';
        el.style.cursor = 'grab';
    };

    el.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
    el.addEventListener('touchstart', startDrag, {passive: false});
    document.addEventListener('touchmove', doDrag, {passive: false});
    document.addEventListener('touchend', stopDrag);
}
