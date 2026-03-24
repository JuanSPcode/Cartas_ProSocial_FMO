const docs = {
        doc1: {
            title: "Eliminación de Proyecto",
            subtitle: "Cancelación del proyecto actual",
            download: "document/1_Carta_Eliminación_Proyecto.docx",
            icon: `<i class="fa-regular fa-trash-can text-base"></i>`,
            cuando: [
                "Usa esta carta cuando necesitas <strong class='text-gray-900 font-bold'>cancelar por completo</strong> tu proyecto de Servicio Social ya inscrito en el sistema PROMETEO.",
                "Aplica cuando el proyecto ya no puede desarrollarse, ya sea por cierre de la institución, cambio de circunstancias personales u otros motivos justificados.",
                "Esta carta es <strong class='text-gray-900 font-bold'>individual</strong>: cada estudiante presenta la suya."
            ],
            datos: [
                { icon: "fa-regular fa-calendar", text: "Fecha del día en que la escribes (día, mes en texto, año)" },
                { icon: "fa-regular fa-user", text: "Tu nombre completo y número de DUE" },
                { icon: "fa-solid fa-graduation-cap", text: "Nombre completo de tu carrera" },
                { icon: "fa-solid fa-hashtag", text: "Número de proyecto asignado en PROMETEO" },
                { icon: "fa-regular fa-calendar-days", text: "Fecha de inicio y fecha de finalización del proyecto" },
                { icon: "fa-regular fa-file-lines", text: "Nombre exacto del proyecto tal como aparece en PROMETEO" },
                { icon: "fa-regular fa-building", text: "Nombre completo de la empresa o institución" },
                { icon: "fa-solid fa-chalkboard-user", text: "Nombre completo de tu tutor" },
                { icon: "fa-regular fa-pen-to-square", text: "Motivos claros y detallados por los que solicitas la eliminación" },
                { icon: "fa-solid fa-user-tie", text: "Nombre del/la coordinador/a de tu sub-unidad" }
            ],
            pasos: [
                "Descarga la plantilla y ábrela en Microsoft Word.",
                "Reemplaza todos los textos en rojo con tus datos reales.",
                "Redacta claramente los motivos de eliminación (sé específico).",
                "Cambia todo el texto rojo a color negro antes de imprimir.",
                "Lleva el documento a tu tutor para revisión y firma.",
                "Llévala al/la coordinador/a de tu sub-unidad para firma y sello.",
                "Entrega el documento al/la sub-coordinador/a, quien lo escaneará y lo enviará al correo de la UPS."
            ],
            advertencias: [
                "<strong class='text-red-500 font-semibold'>No dejes campos en rojo</strong> al momento de imprimir. Todos deben estar en negro.",
                "Los <strong class='text-red-500 font-semibold'>motivos deben ser claros y justificados</strong>. Una razón vaga puede retrasar o rechazar tu solicitud.",
                "Asegúrate de tener el <strong class='text-red-500 font-semibold'>número de proyecto correcto</strong> tal como aparece en PROMETEO.",
                "Esta carta <strong class='text-red-500 font-semibold'>no aplica para grupos</strong>. Si trabajas en equipo y solo quieres retirar a un integrante, usa la carta de Retiro de Estudiante."
            ]
        },
        doc2: {
            title: "Retiro de Estudiante (Grupo)",
            subtitle: "Baja de integrante del equipo",
            download: "document/2_Carta_retiro_estudiante(Grupo).docx",
            icon: `<i class="fa-solid fa-user-minus text-base"></i>`,
            cuando: [
                "Usa esta carta cuando un integrante del grupo <strong class='text-gray-900 font-bold'>no puede continuar</strong> con el proyecto de Servicio Social y el resto del equipo desea seguir.",
                "La presentan <strong class='text-gray-900 font-bold'>los estudiantes que se quedan</strong>, no el que se retira.",
                "El proyecto continúa activo; solo se da de baja a ese integrante específico."
            ],
            datos: [
                { icon: "fa-regular fa-calendar", text: "Fecha del día en que la escribes" },
                { icon: "fa-solid fa-users", text: "Nombre completo y DUE de cada uno de los estudiantes que firman (los que se quedan)" },
                { icon: "fa-solid fa-graduation-cap", text: "Nombre completo de la carrera" },
                { icon: "fa-regular fa-user", text: "Nombre completo y DUE del estudiante que se retira" },
                { icon: "fa-solid fa-hashtag", text: "Número de proyecto en PROMETEO" },
                { icon: "fa-regular fa-calendar-days", text: "Fecha de inicio y finalización del proyecto" },
                { icon: "fa-regular fa-file-lines", text: "Nombre exacto del proyecto en PROMETEO" },
                { icon: "fa-regular fa-building", text: "Nombre completo de la empresa o institución" },
                { icon: "fa-solid fa-chalkboard-user", text: "Nombre completo del tutor" },
                { icon: "fa-regular fa-pen-to-square", text: "Motivos por los cuales el estudiante no puede continuar" },
                { icon: "fa-solid fa-user-tie", text: "Nombre del/la coordinador/a de tu sub-unidad" }
            ],
            pasos: [
                "Descarga la plantilla y ábrela en Microsoft Word.",
                "Coloca los nombres y DUE de todos los integrantes que continúan en el proyecto.",
                "Coloca el nombre y DUE del estudiante que se retira.",
                "Redacta los motivos del retiro de forma clara.",
                "Agrega una línea de firma por cada integrante que continúa en el grupo.",
                "Cambia todo el texto rojo a negro antes de imprimir.",
                "Reúne las firmas del tutor, coordinador/a y todos los estudiantes que quedan.",
                "Entrega el documento al/la sub-coordinador/a, quien lo escaneará y lo enviará al correo de la UPS."
            ],
            advertencias: [
                "<strong class='text-red-500 font-semibold'>Deben firmar todos los integrantes que continúan</strong>, no solo el representante.",
                "Si el grupo tiene más de 2 integrantes restantes, <strong class='text-red-500 font-semibold'>agrega líneas de firma adicionales</strong> en el documento.",
                "Esta carta <strong class='text-red-500 font-semibold'>no cancela el proyecto</strong>, solo da de baja a ese estudiante. Si deseas cancelar el proyecto completo, usa la Carta de Eliminación.",
                "Los motivos deben estar bien redactados; razones vagas pueden retrasar la aprobación."
            ]
        },
        doc3: {
            title: "Carta de Ampliación",
            subtitle: "Más tiempo para ejecutar el proyecto",
            download: "document/3_Carta_de_Ampliación.docx",
            icon: `<i class="fa-solid fa-arrows-left-right text-base"></i>`,
            cuando: [
                "Usa esta carta cuando tu proyecto <strong class='text-gray-900 font-bold'>todavía está en ejecución</strong> y necesitas más tiempo para terminarlo antes de que venza la fecha oficial.",
                "<strong class='text-gray-900 font-bold'>No la confundas con las Prórrogas</strong>: la Ampliación es para extender el tiempo de ejecución activa del proyecto. Las Prórrogas son para cuando ya finalizaste y necesitas más tiempo para entregar documentos.",
                "Aplica tanto para proyectos individuales como grupales."
            ],
            datos: [
                { icon: "fa-regular fa-calendar", text: "Fecha del día en que la escribes" },
                { icon: "fa-regular fa-user", text: "Tu nombre completo y número de DUE" },
                { icon: "fa-solid fa-graduation-cap", text: "Nombre completo de tu carrera" },
                { icon: "fa-solid fa-hashtag", text: "Número de proyecto en PROMETEO" },
                { icon: "fa-regular fa-calendar-days", text: "Fecha de inicio y fecha de finalización actual del proyecto" },
                { icon: "fa-regular fa-file-lines", text: "Nombre exacto del proyecto en PROMETEO" },
                { icon: "fa-regular fa-building", text: "Nombre completo de la empresa o institución" },
                { icon: "fa-solid fa-chalkboard-user", text: "Nombre completo del tutor" },
                { icon: "fa-regular fa-pen-to-square", text: "Motivos por los cuales necesitas más tiempo" },
                { icon: "fa-solid fa-user-tie", text: "Nombre del/la coordinador/a de tu sub-unidad" }
            ],
            pasos: [
                "Descarga la plantilla y ábrela en Microsoft Word.",
                "Completa todos tus datos personales y del proyecto.",
                "Redacta los motivos por los que necesitas más tiempo.",
                "Si el proyecto es grupal, agrega las firmas de todos los integrantes.",
                "Cambia todo el texto rojo a negro antes de imprimir.",
                "Lleva la carta a tu tutor para revisión y firma.",
                "Obtén firma y sello del/la coordinador/a de tu sub-unidad.",
                "Entrega el documento al/la sub-coordinador/a, quien lo escaneará y lo enviará al correo de la UPS."
            ],
            advertencias: [
                "Si el proyecto es grupal, <strong class='text-red-500 font-semibold'>agrega firmas de todos los integrantes</strong> al final del documento.",
                "Esta carta es para <strong class='text-red-500 font-semibold'>proyectos que aún están activos</strong>. Si ya terminaste la ejecución y necesitas más tiempo para entregar la memoria, usa las cartas de Prórroga.",
                "Presenta la carta <strong class='text-red-500 font-semibold'>antes de que venza</strong> tu fecha oficial de finalización."
            ]
        },
        doc4: {
            title: "Prórroga de 15 Días",
            subtitle: "Entrega tardía del proyecto",
            download: "document/4_Prorroga_15_dias.docx",
            icon: `<i class="fa-regular fa-clock text-base"></i>`,
            cuando: [
                "Usa esta carta cuando ya <strong class='text-gray-900 font-bold'>pasaron más de 15 días</strong> desde que inscribiste el proyecto y aún no lo has entregado al Jefe de la UPS.",
                "Se dirige directamente al <strong class='text-gray-900 font-bold'>Jefe de la Unidad de Proyección Social</strong>.",
                "Aplica para la entrega del <strong class='text-gray-900 font-bold'>proyecto</strong>, no de la memoria."
            ],
            datos: [
                { icon: "fa-regular fa-calendar", text: "Fecha del día en que la escribes" },
                { icon: "fa-regular fa-user", text: "Tu nombre completo y número de DUE" },
                { icon: "fa-solid fa-graduation-cap", text: "Nombre completo de tu carrera" },
                { icon: "fa-solid fa-hashtag", text: "Número de proyecto en PROMETEO" },
                { icon: "fa-regular fa-calendar-days", text: "Fecha de inicio y fecha de finalización del proyecto" },
                { icon: "fa-regular fa-file-lines", text: "Nombre exacto del proyecto en PROMETEO" },
                { icon: "fa-regular fa-building", text: "Nombre completo de la empresa o institución" },
                { icon: "fa-solid fa-chalkboard-user", text: "Nombre completo del tutor" },
                { icon: "fa-regular fa-pen-to-square", text: "Motivos por los cuales no entregaste a tiempo" },
                { icon: "fa-solid fa-user-tie", text: "Nombre del/la coordinador/a de tu sub-unidad" }
            ],
            pasos: [
                "Descarga la plantilla y ábrela en Microsoft Word.",
                "Completa todos tus datos personales y del proyecto.",
                "Explica con claridad los motivos del retraso.",
                "Cambia todo el texto rojo a negro antes de imprimir.",
                "Lleva la carta a tu tutor para revisión y firma.",
                "Obtén firma y sello del/la coordinador/a de tu sub-unidad.",
                "Entrega el documento al/la sub-coordinador/a, quien lo escaneará y lo enviará al correo de la UPS."
            ],
            advertencias: [
                "<strong class='text-red-500 font-semibold'>No esperes más tiempo</strong>. Entre más tarde presentes esta carta, más complicado se vuelve el proceso.",
                "Esta carta es para la entrega del <strong class='text-red-500 font-semibold'>proyecto</strong>. Si ya entregaste el proyecto y tienes problemas para entregar la memoria, usa las cartas de Prórroga de 3 o 6 meses.",
                "Los motivos deben ser concretos y justificados."
            ]
        },
        doc5: {
            title: "Prórroga de 3 Meses",
            subtitle: "Entrega tardía de la memoria",
            download: "document/5_Prorroga_3_meses.docx",
            icon: `<i class="fa-regular fa-calendar text-base"></i>`,
            cuando: [
                "Usa esta carta cuando ya <strong class='text-gray-900 font-bold'>finalizaste la ejecución del proyecto</strong> pero han pasado más de 3 meses y todavía no has entregado la memoria.",
                "Se dirige al <strong class='text-gray-900 font-bold'>Jefe de la Unidad de Proyección Social</strong>.",
                "Si ya pasaron más de 6 meses desde que terminaste, debes usar la <strong class='text-gray-900 font-bold'>Prórroga de 6 Meses</strong> en su lugar."
            ],
            datos: [
                { icon: "fa-regular fa-calendar", text: "Fecha del día en que la escribes" },
                { icon: "fa-regular fa-user", text: "Tu nombre completo y número de DUE" },
                { icon: "fa-solid fa-graduation-cap", text: "Nombre completo de tu carrera" },
                { icon: "fa-solid fa-hashtag", text: "Número de proyecto en PROMETEO" },
                { icon: "fa-regular fa-calendar-days", text: "Fecha de inicio y fecha de finalización del proyecto" },
                { icon: "fa-regular fa-file-lines", text: "Nombre exacto del proyecto en PROMETEO" },
                { icon: "fa-regular fa-building", text: "Nombre completo de la empresa o institución" },
                { icon: "fa-solid fa-chalkboard-user", text: "Nombre completo del tutor" },
                { icon: "fa-regular fa-pen-to-square", text: "Motivos por los cuales no entregaste la memoria a tiempo" },
                { icon: "fa-solid fa-user-tie", text: "Nombre del/la coordinador/a de tu sub-unidad" }
            ],
            pasos: [
                "Descarga la plantilla y ábrela en Microsoft Word.",
                "Completa todos tus datos personales y del proyecto.",
                "Explica con claridad los motivos del retraso.",
                "Cambia todo el texto rojo a negro antes de imprimir.",
                "Lleva la carta a tu tutor para revisión y firma.",
                "Obtén firma y sello del/la coordinador/a de tu sub-unidad.",
                "Entrega el documento al/la sub-coordinador/a, quien lo escaneará y lo enviará al correo de la UPS."
            ],
            advertencias: [
                "Usa esta carta <strong class='text-red-500 font-semibold'>solo si llevas entre 3 y 6 meses</strong> sin entregar la memoria. Si ya pasaron más de 6 meses, debes usar la Prórroga de 6 Meses.",
                "Esta carta es para la entrega de la <strong class='text-red-500 font-semibold'>memoria</strong>, no del proyecto en ejecución.",
                "Presentarla lo antes posible mejora tus probabilidades de aprobación."
            ]
        },
        doc6: {
            title: "Prórroga de 6 Meses",
            subtitle: "Solicitud ante Junta Directiva",
            download: "document/6_prorroga_6_meses.docx",
            icon: `<i class="fa-regular fa-building text-base"></i>`,
            cuando: [
                "Usa esta carta cuando ya <strong class='text-gray-900 font-bold'>pasaron más de 6 meses</strong> desde que finalizaste la ejecución del proyecto y aún no has entregado la memoria.",
                "Por la gravedad del caso, esta carta se eleva a <strong class='text-gray-900 font-bold'>Junta Directiva</strong>, no solo al Jefe de UPS.",
                "Es el <strong class='text-gray-900 font-bold'>último recurso</strong> antes de enfrentar consecuencias académicas más graves. Actúa cuanto antes."
            ],
            datos: [
                { icon: "fa-regular fa-calendar", text: "Fecha del día en que la escribes" },
                { icon: "fa-regular fa-user", text: "Tu nombre completo y número de DUE" },
                { icon: "fa-solid fa-graduation-cap", text: "Nombre completo de tu carrera" },
                { icon: "fa-solid fa-hashtag", text: "Número de proyecto en PROMETEO" },
                { icon: "fa-regular fa-calendar-days", text: "Fecha de inicio y fecha de finalización del proyecto" },
                { icon: "fa-regular fa-file-lines", text: "Nombre exacto del proyecto en PROMETEO" },
                { icon: "fa-regular fa-building", text: "Nombre completo de la empresa o institución donde se desarrolló" },
                { icon: "fa-solid fa-chalkboard-user", text: "Nombre completo del tutor" },
                { icon: "fa-regular fa-pen-to-square", text: "Motivos sólidos y detallados por los cuales no has entregado" },
                { icon: "fa-solid fa-user-tie", text: "Nombre del/la coordinador/a de tu sub-unidad" }
            ],
            pasos: [
                "Descarga la plantilla y ábrela en Microsoft Word.",
                "Completa todos tus datos personales y del proyecto con precisión.",
                "Redacta los motivos de forma detallada y seria — esta carta va a Junta Directiva.",
                "Cambia todo el texto rojo a negro antes de imprimir.",
                "Lleva la carta a tu tutor para revisión y firma.",
                "Obtén firma y sello del/la coordinador/a de tu sub-unidad.",
                "Entrega el documento al/la sub-coordinador/a, quien lo escaneará y lo enviará al correo de la UPS."
            ],
            advertencias: [
                "Esta es la carta más <strong class='text-red-500 font-semibold'>grave y urgente</strong>. Si llegas a este punto, actúa de inmediato.",
                "Los motivos deben estar <strong class='text-red-500 font-semibold'>muy bien redactados y justificados</strong>. La Junta Directiva evaluará tu caso con mayor rigurosidad.",
                "Esta carta <strong class='text-red-500 font-semibold'>no garantiza aprobación automática</strong>. La decisión final la toma la Junta Directiva."
            ]
        }
    };

    function openModal(id) {
        const doc = docs[id];
        document.getElementById('modal-title').textContent = doc.title;
        document.getElementById('modal-subtitle').textContent = doc.subtitle;
        document.getElementById('modal-icon').innerHTML = doc.icon;
        document.getElementById('modal-download').href = doc.download;

        document.getElementById('content-cuando').innerHTML = doc.cuando.map(item =>
            `<p class="text-xs text-gray-600 py-1.5 border-b border-gray-200 last:border-0">${item}</p>`
        ).join('');

        document.getElementById('content-pasos').innerHTML = doc.pasos.map((item, i) =>
            `<div class="flex gap-3 py-1.5 border-b border-gray-200 last:border-0">
                <span class="text-red-600 font-semibold text-xs shrink-0 w-4">${i+1}.</span>
                <span class="text-xs text-gray-600">${item}</span>
            </div>`
        ).join('');

        document.getElementById('content-advertencias').innerHTML = doc.advertencias.map(item =>
            `<div class="flex items-start gap-2.5 py-1.5 border-b border-gray-200 last:border-0">
                <i class="fa-solid fa-triangle-exclamation text-red-500 font-semibold text-xs mt-0.5 shrink-0"></i>
                <span class="text-xs text-gray-600">${item}</span>
            </div>`
        ).join('');

        switchTab('cuando');
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    function handleBackdropClick(e) {
        if (e.target === document.getElementById('modal')) closeModal();
    }

    function switchTab(name) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById('tab-' + name).classList.add('active');
        document.getElementById('content-' + name).classList.add('active');
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });