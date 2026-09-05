// Definición de los datos extraídos de la Sesión 4 de Sistemas de Información Empresarial

const nodeData = [
    // Nodo central
    { id: 1, label: "Sistemas de\nInformación\nEmpresarial", group: "center", value: 35, title: "Tema principal", desc: "La sesión 4 aborda el Análisis, modelado y diseño avanzado de información empresarial, enfocándose en procesos de negocio y metodologías como BPMN." },
    
    // Rama 1: BPM
    { id: 2, label: "BPM", group: "bpm", value: 25, title: "Administración de Procesos de Negocio", desc: "Disciplina de gestión centrada en identificar, modelar, analizar, mejorar y automatizar procesos de negocio para aumentar eficiencia y adaptabilidad." },
    { id: 21, label: "Beneficios", group: "bpm", value: 15, title: "Beneficios del BPM", desc: "- Mayor eficiencia y reducción de costos.<br>- Mejor control y transparencia.<br>- Flexibilidad para adaptarse a cambios.<br>- Mejora en satisfacción del cliente." },
    { id: 22, label: "Fases del Ciclo", group: "bpm", value: 20, title: "Fases del Ciclo BPM", desc: "Consta de 5 etapas continuas que buscan optimizar los procesos organizacionales mediante la vida del BPM." },
    { id: 221, label: "1. Diseño", group: "bpm_fase", value: 12, title: "Diseño", desc: "Identificar procesos y definir mejoras potenciales en el sistema actual." },
    { id: 222, label: "2. Modelado", group: "bpm_fase", value: 12, title: "Modelado", desc: "Representar los procesos mediante diagramas estructurados y claros." },
    { id: 223, label: "3. Ejecución", group: "bpm_fase", value: 12, title: "Ejecución", desc: "Implementar el proceso en la organización, con o sin apoyo de automatización de software." },
    { id: 224, label: "4. Monitoreo", group: "bpm_fase", value: 12, title: "Monitoreo", desc: "Medir el desempeño continuo del proceso empleando indicadores (KPIs)." },
    { id: 225, label: "5. Optimización", group: "bpm_fase", value: 12, title: "Optimización", desc: "Mejorar continuamente con base en los resultados y eliminar cuellos de botella detectados." },

    // Rama 2: BPMN
    { id: 3, label: "Metodología\nBPMN", group: "bpmn", value: 25, title: "Metodología BPMN", desc: "Business Process Model and Notation. Estándar global de modelado de procesos que permite una comprensión común entre todas las partes interesadas del negocio." },
    { id: 31, label: "Elementos", group: "bpmn", value: 18, title: "Simbología y Estándares BPMN", desc: "Objetos fundamentales utilizados para representar de forma gráfica flujos y acciones." },
    { id: 311, label: "Eventos", group: "bpmn_elem", value: 12, title: "Eventos", desc: "Representan algo que ocurre (Inicio, Intermedio, Fin). Se grafican como círculos." },
    { id: 312, label: "Actividades", group: "bpmn_elem", value: 12, title: "Actividades", desc: "Tareas, trabajos o subprocesos (Acciones atómicas). Se grafican como rectángulos con esquinas redondeadas." },
    { id: 313, label: "Compuertas", group: "bpmn_elem", value: 12, title: "Compuertas", desc: "Controlan la divergencia y convergencia del flujo (Exclusiva, Paralela). Se grafican como diamantes." },
    { id: 314, label: "Conectores", group: "bpmn_elem", value: 12, title: "Conectores y Flujos", desc: "Flujos de secuencia (línea continua) y mensajes (línea discontinua). Se grafican como flechas." },
    { id: 32, label: "Herramientas de\nSoftware", group: "software", value: 18, title: "Software BPMN", desc: "Plataformas tecnológicas que permiten aplicar la metodología, dibujar el flujo y automatizar los procesos." },
    { id: 321, label: "Bonitasoft", group: "software", value: 12, title: "Bonitasoft", desc: "Plataforma de automatización de procesos digitales ampliamente usada en la industria." },
    { id: 322, label: "Bizagi", group: "software", value: 12, title: "Bizagi", desc: "Software líder e intuitivo para el modelado y automatización de procesos ágiles." },
    { id: 323, label: "Visual Paradigm", group: "software", value: 12, title: "Visual Paradigm", desc: "Herramienta completa de diseño UML, SysML y modelado BPMN." },
    { id: 324, label: "Appian / AuraPortal", group: "software", value: 12, title: "AuraPortal y Appian", desc: "Plataformas empresariales avanzadas (suites) de gestión empresarial." },

    // Rama 3: Tipos de Procesos
    { id: 4, label: "Tipos de\nProcesos", group: "tipos", value: 25, title: "Clasificación de Procesos", desc: "Los procesos organizacionales se dividen en diferentes categorías según su impacto, función y valor aportado." },
    { id: 41, label: "Estratégicos", group: "tipos_detalle", value: 14, title: "Procesos Estratégicos", desc: "Definen los objetivos, la misión y la visión de la organización; marcan la dirección a largo plazo." },
    { id: 42, label: "Claves / Operativos", group: "tipos_detalle", value: 14, title: "Procesos Claves u Operativos", desc: "Generan directamente el valor al cliente; son el núcleo principal del negocio (ej. producción, ventas, atención)." },
    { id: 43, label: "De Apoyo", group: "tipos_detalle", value: 14, title: "Procesos de Apoyo", desc: "Respaldan a los procesos claves, aportando recursos, pero no generan valor directo al cliente (ej. RR.HH., contabilidad, TI)." },
    { id: 44, label: "De Gestión", group: "tipos_detalle", value: 14, title: "Procesos de Gestión", desc: "Coordinan, supervisan y controlan todos los demás procesos para asegurar su eficacia y alineación con las metas." },
    { id: 45, label: "De Innovación", group: "tipos_detalle", value: 14, title: "Procesos de Innovación", desc: "Se centran en la mejora, investigación y desarrollo (I+D) continuos para mantener e incrementar la competitividad corporativa." },
    { id: 46, label: "De Control", group: "tipos_detalle", value: 14, title: "Procesos de Control", desc: "Evalúan, miden y aseguran la calidad, el estricto cumplimiento de normas y el desempeño organizacional." },

    // Rama 4: Arquetipos para Planificación
    { id: 5, label: "Arquetipos de\nPlanificación", group: "arq", value: 25, title: "Arquetipos de Planificación de Proyectos", desc: "Modelos y diagramas usados comúnmente para estructurar ideas, estrategias y proyectos de sistemas." },
    { id: 51, label: "Lean Canvas", group: "arq_detalle", value: 12, title: "Arquetipo Lean Canvas", desc: "Modelo visual para diseñar modelos de negocio de manera rápida y ágil (incluye: Problema, Solución, Propuesta de valor única, etc.)." },
    { id: 52, label: "FODA", group: "arq_detalle", value: 12, title: "Arquetipo FODA", desc: "Análisis estratégico enfocado en reconocer Fortalezas (internas), Oportunidades (externas), Debilidades (internas) y Amenazas (externas)." },
    { id: 53, label: "Mapa Mental", group: "arq_detalle", value: 12, title: "Arquetipo Mapa Mental", desc: "Organización visual de ideas y conceptos estructurados jerárquicamente alrededor de un tema central (¡Como esta misma web!)." },
    { id: 54, label: "RACI", group: "arq_detalle", value: 12, title: "Arquetipo Matriz RACI", desc: "Matriz de asignación de responsabilidades: Responsible (Responsable), Accountable (Aprobador), Consulted (Consultado), Informed (Informado)." },
    { id: 55, label: "Ishikawa", group: "arq_detalle", value: 12, title: "Arquetipo Ishikawa", desc: "Diagrama de espina de pescado para el análisis profundo de causa-efecto (Categorías comunes: Método, Maquinaria, Material, etc.)." },
    { id: 56, label: "EDT / WBS", group: "arq_detalle", value: 12, title: "Estructura de Desglose del Trabajo (EDT)", desc: "Descomposición estructurada, gráfica y jerárquica del trabajo para lograr los objetivos de un proyecto y crear sus entregables." }
];

const edgeData = [
    // Conexiones desde el centro
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },

    // Conexiones BPM
    { from: 2, to: 21 },
    { from: 2, to: 22 },
    { from: 22, to: 221 },
    { from: 22, to: 222 },
    { from: 22, to: 223 },
    { from: 22, to: 224 },
    { from: 22, to: 225 },

    // Secuencia de fases BPM
    { from: 221, to: 222, arrows: "to", color: { color: 'rgba(255,255,255,0.2)' }, dashes: true },
    { from: 222, to: 223, arrows: "to", color: { color: 'rgba(255,255,255,0.2)' }, dashes: true },
    { from: 223, to: 224, arrows: "to", color: { color: 'rgba(255,255,255,0.2)' }, dashes: true },
    { from: 224, to: 225, arrows: "to", color: { color: 'rgba(255,255,255,0.2)' }, dashes: true },
    { from: 225, to: 221, arrows: "to", color: { color: 'rgba(255,255,255,0.2)' }, dashes: true }, // Representa un ciclo

    // Conexiones BPMN
    { from: 3, to: 31 },
    { from: 3, to: 32 },
    { from: 31, to: 311 },
    { from: 31, to: 312 },
    { from: 31, to: 313 },
    { from: 31, to: 314 },
    { from: 32, to: 321 },
    { from: 32, to: 322 },
    { from: 32, to: 323 },
    { from: 32, to: 324 },

    // Conexiones Tipos
    { from: 4, to: 41 },
    { from: 4, to: 42 },
    { from: 4, to: 43 },
    { from: 4, to: 44 },
    { from: 4, to: 45 },
    { from: 4, to: 46 },

    // Conexiones Arquetipos
    { from: 5, to: 51 },
    { from: 5, to: 52 },
    { from: 5, to: 53 },
    { from: 5, to: 54 },
    { from: 5, to: 55 },
    { from: 5, to: 56 }
];

// Configuración de los colores y grupos para un look neón/oscuro moderno
const options = {
    nodes: {
        shape: 'dot',
        font: {
            color: '#ffffff',
            size: 14,
            face: 'Poppins',
            strokeWidth: 2,
            strokeColor: '#0f172a'
        },
        borderWidth: 2,
        shadow: {
            enabled: true,
            color: 'rgba(0,0,0,0.6)',
            size: 15,
            x: 0,
            y: 0
        }
    },
    edges: {
        width: 2,
        color: {
            color: '#475569',
            highlight: '#ffffff',
            hover: '#94a3b8'
        },
        smooth: {
            type: 'continuous' // Curvatura elegante
        }
    },
    groups: {
        center: {
            color: { background: '#3b82f6', border: '#60a5fa', highlight: { background: '#2563eb', border: '#93c5fd' } },
            font: { size: 22, bold: true }
        },
        bpm: {
            color: { background: '#10b981', border: '#34d399', highlight: { background: '#059669', border: '#6ee7b7' } },
            font: { size: 18 }
        },
        bpm_fase: {
            color: { background: '#059669', border: '#10b981', highlight: { background: '#047857', border: '#34d399' } }
        },
        bpmn: {
            color: { background: '#f59e0b', border: '#fbbf24', highlight: { background: '#d97706', border: '#fcd34d' } },
            font: { size: 18 }
        },
        bpmn_elem: {
            color: { background: '#d97706', border: '#f59e0b', highlight: { background: '#b45309', border: '#fbbf24' } }
        },
        software: {
            color: { background: '#f43f5e', border: '#fb7185', highlight: { background: '#e11d48', border: '#fda4af' } }
        },
        tipos: {
            color: { background: '#8b5cf6', border: '#a78bfa', highlight: { background: '#7c3aed', border: '#c4b5fd' } },
            font: { size: 18 }
        },
        tipos_detalle: {
            color: { background: '#7c3aed', border: '#8b5cf6', highlight: { background: '#6d28d9', border: '#a78bfa' } }
        },
        arq: {
            color: { background: '#0ea5e9', border: '#38bdf8', highlight: { background: '#0284c7', border: '#7dd3fc' } },
            font: { size: 18 }
        },
        arq_detalle: {
            color: { background: '#0284c7', border: '#0ea5e9', highlight: { background: '#0369a1', border: '#38bdf8' } }
        }
    },
    physics: {
        forceAtlas2Based: {
            gravitationalConstant: -180,
            centralGravity: 0.015,
            springLength: 120,
            springConstant: 0.08
        },
        maxVelocity: 50,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: { iterations: 150 }
    },
    interaction: {
        hover: true,
        tooltipDelay: 200,
        zoomView: true,
        dragView: true
    }
};

const container = document.getElementById('mynetwork');
const data = {
    nodes: new vis.DataSet(nodeData),
    edges: new vis.DataSet(edgeData)
};

const network = new vis.Network(container, data, options);

// Interacción: Mostrar panel al hacer clic
const infoPanel = document.getElementById('info-panel');
const infoTitle = document.getElementById('info-title');
const infoDesc = document.getElementById('info-desc');
const closeBtn = document.getElementById('close-btn');

network.on("selectNode", function (params) {
    const nodeId = params.nodes[0];
    const node = data.nodes.get(nodeId);
    
    if (node) {
        infoTitle.innerText = node.title || node.label.replace(/\n/g, ' ');
        infoDesc.innerHTML = node.desc || "Sin descripción adicional.";
        
        // Efecto de enfoque suave en el nodo (zoom-in)
        network.focus(nodeId, {
            scale: 1.1,
            animation: {
                duration: 800,
                easingFunction: 'easeInOutQuad'
            }
        });

        // Mostrar panel deslizable
        infoPanel.classList.remove('hidden');
    }
});

network.on("deselectNode", function (params) {
    infoPanel.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
    network.unselectAll();
    // Volver a encuadrar la red al cerrar
    network.fit({
        animation: {
            duration: 800,
            easingFunction: "easeOutQuint"
        }
    });
});

// Animación inicial: alejar un poco y centrar suavemente tras calcular la física
network.once("stabilizationIterationsDone", function () {
    network.fit({
        animation: {
            duration: 2000,
            easingFunction: "easeOutQuint"
        }
    });
});
