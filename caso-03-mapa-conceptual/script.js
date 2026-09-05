// Inicialización de tsParticles para el fondo deslumbrante (efecto constelación/red)
tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ["#00d2ff", "#3a7bd5", "#8b5cf6"] },
        links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.15, width: 1 },
        move: { enable: true, speed: 1, direction: "none", random: false, straight: false, outModes: { default: "bounce" } },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: { min: 0.1, max: 0.5 } }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
            push: { quantity: 3 }
        }
    },
    detectRetina: true,
    background: { color: "transparent" }
});

// Sintetizador de sonido muy sutil para clicks (Web Audio API)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

function playClickSound() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime); // Tono agradable
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.05);
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); // Volumen muy bajo
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
}

// Datos de la sesión 4 (mantenemos la estructura pero mejoramos iconos en title)
const nodeData = [
    { id: 1, label: "Sistemas de\nInformación", group: "center", value: 40, title: "<i class='fa-solid fa-server'></i> Tema Principal", desc: "La sesión 4 aborda el Análisis, modelado y diseño avanzado de información empresarial, enfocándose en procesos de negocio." },
    
    // BPM
    { id: 2, label: "BPM", group: "bpm", value: 28, title: "<i class='fa-solid fa-gears'></i> Admin. de Procesos", desc: "Disciplina centrada en identificar, modelar, analizar, mejorar y automatizar procesos de negocio." },
    { id: 21, label: "Beneficios", group: "bpm", value: 18, title: "Beneficios BPM", desc: "<ul><li>Eficiencia y reducción de costos</li><li>Control y transparencia</li><li>Flexibilidad</li><li>Satisfacción del cliente</li></ul>" },
    { id: 22, label: "Fases del Ciclo", group: "bpm", value: 22, title: "Ciclo de Vida BPM", desc: "Las 5 etapas continuas que buscan optimizar la organización." },
    { id: 221, label: "1. Diseño", group: "bpm_fase", value: 15, title: "1. Diseño", desc: "Identificar procesos y definir mejoras potenciales." },
    { id: 222, label: "2. Modelado", group: "bpm_fase", value: 15, title: "2. Modelado", desc: "Representar los procesos mediante diagramas." },
    { id: 223, label: "3. Ejecución", group: "bpm_fase", value: 15, title: "3. Ejecución", desc: "Implementar el proceso (automatizado o no)." },
    { id: 224, label: "4. Monitoreo", group: "bpm_fase", value: 15, title: "4. Monitoreo", desc: "Medir el desempeño con KPIs." },
    { id: 225, label: "5. Optimización", group: "bpm_fase", value: 15, title: "5. Optimización", desc: "Mejorar continuamente." },

    // BPMN
    { id: 3, label: "BPMN", group: "bpmn", value: 28, title: "<i class='fa-solid fa-bezier-curve'></i> Metodología BPMN", desc: "Business Process Model and Notation. Estándar global de modelado de procesos." },
    { id: 31, label: "Elementos", group: "bpmn", value: 20, title: "Simbología BPMN", desc: "Objetos utilizados para representar gráficamente acciones." },
    { id: 311, label: "Eventos", group: "bpmn_elem", value: 15, title: "<i class='fa-regular fa-circle'></i> Eventos", desc: "Representan algo que ocurre (Inicio, Intermedio, Fin). Círculos." },
    { id: 312, label: "Actividades", group: "bpmn_elem", value: 15, title: "<i class='fa-solid fa-square'></i> Actividades", desc: "Tareas o subprocesos. Rectángulos redondeados." },
    { id: 313, label: "Compuertas", group: "bpmn_elem", value: 15, title: "<i class='fa-solid fa-diamond'></i> Compuertas", desc: "Controlan el flujo (Exclusiva, Paralela). Diamantes." },
    { id: 314, label: "Conectores", group: "bpmn_elem", value: 15, title: "<i class='fa-solid fa-arrow-right'></i> Conectores", desc: "Flujos de secuencia y mensajes." },
    { id: 32, label: "Software", group: "software", value: 20, title: "<i class='fa-solid fa-laptop-code'></i> Herramientas Software", desc: "Plataformas tecnológicas para modelar y automatizar (BPMS)." },
    { id: 321, label: "Bonitasoft", group: "software", value: 15, title: "Bonitasoft", desc: "Plataforma de automatización digital." },
    { id: 322, label: "Bizagi", group: "software", value: 15, title: "Bizagi", desc: "Software intuitivo líder en la industria." },
    { id: 323, label: "Visual Paradigm", group: "software", value: 15, title: "Visual Paradigm", desc: "Diseño UML, SysML y BPMN." },
    { id: 324, label: "Appian", group: "software", value: 15, title: "Appian / AuraPortal", desc: "Suites empresariales avanzadas." },

    // Tipos de Procesos
    { id: 4, label: "Tipos de\nProcesos", group: "tipos", value: 28, title: "<i class='fa-solid fa-layer-group'></i> Tipos de Procesos", desc: "Clasificación según impacto y valor aportado." },
    { id: 41, label: "Estratégicos", group: "tipos_detalle", value: 15, title: "Estratégicos", desc: "Definen objetivos, misión y visión a largo plazo." },
    { id: 42, label: "Claves", group: "tipos_detalle", value: 15, title: "Claves u Operativos", desc: "Generan el valor directo al cliente (el núcleo del negocio)." },
    { id: 43, label: "De Apoyo", group: "tipos_detalle", value: 15, title: "De Apoyo", desc: "Respaldan a los claves (RRHH, TI, contabilidad)." },
    { id: 44, label: "De Gestión", group: "tipos_detalle", value: 15, title: "De Gestión", desc: "Coordinan y supervisan todos los procesos." },
    { id: 45, label: "De Innovación", group: "tipos_detalle", value: 15, title: "De Innovación", desc: "Investigación y desarrollo (I+D)." },
    { id: 46, label: "De Control", group: "tipos_detalle", value: 15, title: "De Control", desc: "Aseguran calidad y cumplimiento de normas." },

    // Arquetipos
    { id: 5, label: "Arquetipos", group: "arq", value: 28, title: "<i class='fa-solid fa-sitemap'></i> Planificación", desc: "Modelos y diagramas usados para estructurar ideas y estrategias." },
    { id: 51, label: "Lean Canvas", group: "arq_detalle", value: 15, title: "Lean Canvas", desc: "Diseño de modelos de negocio de manera rápida." },
    { id: 52, label: "FODA", group: "arq_detalle", value: 15, title: "FODA", desc: "Fortalezas, Oportunidades, Debilidades, Amenazas." },
    { id: 53, label: "Mapa Mental", group: "arq_detalle", value: 15, title: "Mapa Mental", desc: "Organización visual de conceptos (¡como este!)." },
    { id: 54, label: "RACI", group: "arq_detalle", value: 15, title: "Matriz RACI", desc: "Asignación de responsabilidades." },
    { id: 55, label: "Ishikawa", group: "arq_detalle", value: 15, title: "Ishikawa", desc: "Diagrama causa-efecto (espina de pescado)." },
    { id: 56, label: "WBS", group: "arq_detalle", value: 15, title: "EDT / WBS", desc: "Estructura de Desglose del Trabajo." }
];

const edgeData = [
    { from: 1, to: 2 }, { from: 1, to: 3 }, { from: 1, to: 4 }, { from: 1, to: 5 },
    { from: 2, to: 21 }, { from: 2, to: 22 },
    { from: 22, to: 221 }, { from: 22, to: 222 }, { from: 22, to: 223 }, { from: 22, to: 224 }, { from: 22, to: 225 },
    // Ciclo
    { from: 221, to: 222, arrows: "to", color: 'rgba(255,255,255,0.3)', dashes: true },
    { from: 222, to: 223, arrows: "to", color: 'rgba(255,255,255,0.3)', dashes: true },
    { from: 223, to: 224, arrows: "to", color: 'rgba(255,255,255,0.3)', dashes: true },
    { from: 224, to: 225, arrows: "to", color: 'rgba(255,255,255,0.3)', dashes: true },
    { from: 225, to: 221, arrows: "to", color: 'rgba(255,255,255,0.3)', dashes: true }, 

    { from: 3, to: 31 }, { from: 3, to: 32 },
    { from: 31, to: 311 }, { from: 31, to: 312 }, { from: 31, to: 313 }, { from: 31, to: 314 },
    { from: 32, to: 321 }, { from: 32, to: 322 }, { from: 32, to: 323 }, { from: 32, to: 324 },

    { from: 4, to: 41 }, { from: 4, to: 42 }, { from: 4, to: 43 }, { from: 4, to: 44 }, { from: 4, to: 45 }, { from: 4, to: 46 },
    { from: 5, to: 51 }, { from: 5, to: 52 }, { from: 5, to: 53 }, { from: 5, to: 54 }, { from: 5, to: 55 }, { from: 5, to: 56 }
];

const options = {
    nodes: {
        shape: 'dot',
        font: { color: '#ffffff', size: 14, face: 'Poppins', strokeWidth: 2, strokeColor: '#080c16' },
        borderWidth: 3,
        shadow: { enabled: true, color: 'rgba(0,0,0,0.8)', size: 20, x: 0, y: 0 } // Glow brillante
    },
    edges: {
        width: 2,
        color: { color: '#475569', highlight: '#ffffff', hover: '#94a3b8' },
        smooth: { type: 'continuous' }
    },
    groups: {
        center: { color: { background: '#3b82f6', border: '#93c5fd', highlight: { background: '#60a5fa', border: '#ffffff' } }, font: { size: 20, bold: true } },
        bpm: { color: { background: '#10b981', border: '#6ee7b7', highlight: { background: '#34d399', border: '#ffffff' } }, font: { size: 18 } },
        bpm_fase: { color: { background: '#059669', border: '#10b981' } },
        bpmn: { color: { background: '#f59e0b', border: '#fcd34d', highlight: { background: '#fbbf24', border: '#ffffff' } }, font: { size: 18 } },
        bpmn_elem: { color: { background: '#d97706', border: '#f59e0b' } },
        software: { color: { background: '#f43f5e', border: '#fda4af' } },
        tipos: { color: { background: '#8b5cf6', border: '#c4b5fd', highlight: { background: '#a78bfa', border: '#ffffff' } }, font: { size: 18 } },
        tipos_detalle: { color: { background: '#7c3aed', border: '#8b5cf6' } },
        arq: { color: { background: '#0ea5e9', border: '#7dd3fc', highlight: { background: '#38bdf8', border: '#ffffff' } }, font: { size: 18 } },
        arq_detalle: { color: { background: '#0284c7', border: '#0ea5e9' } }
    },
    physics: {
        forceAtlas2Based: { gravitationalConstant: -200, centralGravity: 0.015, springLength: 130, springConstant: 0.08 },
        maxVelocity: 50,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: { iterations: 150 }
    },
    interaction: { hover: true, tooltipDelay: 100, zoomView: true, dragView: true }
};

const network = new vis.Network(document.getElementById('mynetwork'), {
    nodes: new vis.DataSet(nodeData),
    edges: new vis.DataSet(edgeData)
}, options);

const infoPanel = document.getElementById('info-panel');
const infoTitle = document.getElementById('info-title');
const infoDesc = document.getElementById('info-desc');

network.on("selectNode", function (params) {
    playClickSound(); // Emitir sonido sutil
    const node = nodeData.find(n => n.id === params.nodes[0]);
    if (node) {
        infoTitle.innerHTML = node.title || node.label.replace(/\n/g, ' ');
        infoDesc.innerHTML = node.desc || "";
        
        network.focus(node.id, { scale: 1.2, animation: { duration: 600, easingFunction: 'easeInOutCubic' } });
        infoPanel.classList.remove('hidden');
    }
});

network.on("deselectNode", function () {
    infoPanel.classList.add('hidden');
});

document.getElementById('close-btn').addEventListener('click', () => {
    infoPanel.classList.add('hidden');
    network.unselectAll();
    network.fit({ animation: { duration: 800, easingFunction: "easeOutCubic" } });
});

network.once("stabilizationIterationsDone", function () {
    network.fit({ animation: { duration: 2000, easingFunction: "easeOutQuint" } });
});

// Función para la botonera inferior
function focusArea(group) {
    playClickSound();
    let targetNodeId;
    if (group === 'center') {
        network.unselectAll();
        infoPanel.classList.add('hidden');
        network.fit({ animation: { duration: 1000, easingFunction: "easeInOutCubic" } });
        return;
    } else if (group === 'bpm') targetNodeId = 2;
    else if (group === 'bpmn') targetNodeId = 3;
    else if (group === 'tipos') targetNodeId = 4;
    else if (group === 'arq') targetNodeId = 5;

    if (targetNodeId) {
        network.selectNodes([targetNodeId]);
        network.emit("selectNode", { nodes: [targetNodeId] });
    }
}
