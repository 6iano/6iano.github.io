
// ===== STATE MANAGEMENT =====
const state = {
    windows: {},
    zIndex: 1000,
    isPlaying: true,
    currentTrackIndex: 0,
    gameActive: false,
    draggedWindow: null,
    dragOffset: { x: 0, y: 0 }
};

const translations = {
    en: {
        about: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/about.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">About'
            //role: '🎨 GRAPHIC DESIGNER & WEB DEVELOPER', 
            //intro: 'Specializing in UI/UX Design, 3D Modeling, and Interactive Web Experiences. Based in Santa Maria Capua Vetere, Italy.', 
            //exp: '💼 EXPERIENCES', 
            //form: '🎓 FORMATION', 
            //skills: '⚡ SKILLS', 
            //download: '📥 DOWNLOAD CV' 
        },
        projects: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/projects.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Projects',
            description: 'Modern design system with responsive components and accessibility features.',
            tools: 'Ciao'
        },
        contact: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/contact.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Contact',
            getInTouch: 'GET IN TOUCH',
            location: '📍 Location: Santa Maria Capua Vetere, Campania, Italy',
            email: '✉️ Email:',
            linkedin: '💼 LinkedIn:',
            github: '🐙 GitHub:',
            website: '🌐 Website:',
            sendMessage: '✉️ SEND MESSAGE',
            yourName: 'Your Name:',
            yourEmail: 'Your Email:',
            subject: 'Subject:',
            message: 'Message:',
            sendBtn: '📤 SEND EMAIL'
        },
        game: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/game.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Snake'
        },
        info: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/readme.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">README.txt'
            //role: '🎨 GRAPHIC DESIGNER & WEB DEVELOPER', 
            //intro: 'Specializing in UI/UX Design, 3D Modeling, and Interactive Web Experiences. Based in Santa Maria Capua Vetere, Italy.', 
            //exp: '💼 EXPERIENCES', 
            //form: '🎓 FORMATION', 
            //skills: '⚡ SKILLS', 
            //download: '📥 DOWNLOAD CV' 
        },
        icons: {
            about: 'ABOUT ME',
            projects: 'PROJECTS',
            contact: 'CONTACTS',
            game: 'GAME',
            info: 'README.txt'
        }
    },
    it: {
        about: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/about.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Chi Sono'
            //role: '🎨 GRAPHIC DESIGNER & WEB DEVELOPER', 
            //intro: 'Specializzato in UI/UX Design, Modellazione 3D ed Esperienze Web Interattive. Basato a Santa Maria Capua Vetere, Italia.', 
            //exp: '💼 ESPERIENZE', 
            //form: '🎓 FORMAZIONE', 
            //skills: '⚡ COMPETENZE', 
            //download: '📥 SCARICA CV' 
        },
        projects: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/projects.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Progetti',
            description: 'Sistema di design moderno con componenti responsive e funzioni di accessibilità.',
            tools: 'Groda'
        },
        contact: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/contact.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Contatti',
            getInTouch: 'CONTATTAMI',
            location: '📍 Ubicazione: Santa Maria Capua Vetere, Campania, Italia',
            email: '✉️ Email:',
            linkedin: '💼 LinkedIn:',
            github: '🐙 GitHub:',
            website: '🌐 Sito:',
            sendMessage: '✉️ INVIA MESSAGGIO',
            yourName: 'Il Tuo Nome:',
            yourEmail: 'La Tua Email:',
            subject: 'Oggetto:',
            message: 'Messaggio:',
            sendBtn: '📤 INVIA EMAIL'
        },
        game: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/game.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Snake'
        },
        info: {
            title: '<img src="/Users/gennarogrieco/Documents/GitHub/Portfolio/Icons/readme.png" style="width: 16px; height: 16px; margin-right: 5px; vertical-align: middle;">Leggimi.txt',
            role: '🎨 GRAPHIC DESIGNER & WEB DEVELOPER',
            intro: 'Specializing in UI/UX Design, 3D Modeling, and Interactive Web Experiences. Based in Santa Maria Capua Vetere, Italy.',
            exp: '💼 EXPERIENCES',
            form: '🎓 FORMATION',
            skills: '⚡ SKILLS',
            download: '📥 DOWNLOAD CV'
        },
        icons: {
            about: 'ABOUT ME',
            projects: 'PROGETTI',
            contact: 'CONTATTI',
            game: 'GAME',
            info: 'LEGGIMI.txt'
        }
    }
};

const tracks = [
    { name: 'Synthwave Dreams', artist: 'RetroWave' },
    { name: 'Neon Nights', artist: 'CyberArtist' },
    { name: 'Digital Paradise', artist: 'SynthMaster' },
    { name: 'Vaporwave Vibes', artist: 'VaporKing' }
];

//Per poter cambiare nome nella Taskbar, cambiare sia nome qui che in ogni 'case' sotto
const projectData = {
    'AGRIVOLT': {
        style: {
            color: "#269980",
        },
        title: 'AGRIVOLT',
        //category: 'Web Development',
        date: 'N.A.',
        location: 'N.A.',
        brief: 'Agrivolt è una realtà innovativa specializzata in sistemi agrivoltaici che armonizzano produzione energetica e agricoltura sostenibile. Attraverso l’impiego di strutture sopraelevate, l’azienda ottimizza l’uso del suolo garantendo la perfetta coesistenza tra tecnologia e colture.',
        role: 'Sviluppare un’identità visiva distintiva che posizioni Agrivolt come leader nell’innovazione agrivoltaica.',
        tools: 'Adobe Illustrator',
        //link: 'https://design-system-demo.com',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/1.jpg', // Immagine 1
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/2.jpg', // Immagine 2
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/3.jpg', // Immagine 3
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/5.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/6.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/7.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/8.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/9.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_01/10.jpg'
        ]
    },
    'BACK2BACK': {
        style: {
            color: "#b8b8b8"
        },
        title: 'BACK 2 BACK',
        //category: 'Web Development',
        date: 'N.A.',
        location: 'N.A.',
        brief: 'Il marchio si rivolge a chi vede nella moda una forma d’arte e uno strumento di espressione personale nel contesto urbano. Il brand si distacca dalle logiche di massa per concentrarsi sullo sviluppo di collezioni d’avanguardia, capaci di coniugare innovazione tecnica e sostenibilità ambientale. Garantendo standard qualitativi elevati e un impatto sociale positivo.',
        role: 'L’obiettivo è stato tradurre i valori del brand in un’identità visiva distintiva e in una presenza digitale strategica. Attraverso il design della brand identity e lo sviluppo di una landing page dedicata.',
        tools: 'Figma - Adobe Illustrator - Blender',
        //link: 'https://ecommerce-platform-demo.com',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_02/1.jpg', // Immagine 1
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_02/2.jpg', // Immagine 2
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_02/3.jpg', // Immagine 3
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_02/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_02/5.png',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_02/6.jpg'
        ]
    },
    'OIKA': {
        style: {
            color: "#c45959"
        },
        title: 'OIKA',
        //category: '3D & Interactive',
        date: 'Marzo 2025 - Giugno 2025',
        location: 'San Giovanni Barra, NA',
        brief: 'Oika è un ausilio alla navigazione progettato per consentire alle persone non vedenti e ipovedenti di muoversi in sicurezza in ambienti aperti e non strutturati, dove gli strumenti di navigazione tradizionali risultano insufficienti.',
        role: 'Aiuta le persone con disabilità visive che desiderano sentirsi più indipendenti guidandole verso una posizione salvata in spazi aperti.',
        tools: 'Procreate, Adobe Illustrator, Figma',
        //link: 'https://3d-experience-demo.com',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_03/1.png', // Immagine 1
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_03/5.jpg', // Immagine 2
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_03/2.jpg', // Immagine 3
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_03/3.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_03/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_03/6.jpg'
        ]
    },
    'PanAfGeo+': {
        style: {
            color: "#e9d158"
        },
        title: 'PanAfGeo+',
        //category: 'AI Integration',
        date: 'Agosto 2025 - Dicembre 2025',
        location: 'Bruxelles, BE',
        brief: 'PanAfGeo+ è un’iniziativa strategica di cooperazione internazionale che vede la collaborazione tra l’Unione Europea e l’Unione Africana. Il progetto mira al rafforzamento delle competenze tecniche dei servizi geologici africani, focalizzandosi sulla valorizzazione sostenibile delle risorse naturali e sulla gestione consapevole del suolo.',
        role: 'L’obiettivo è stato quello di armonizzare i rigorosi standard comunicativi della Commissione Europea con la necessità di una narrazione visiva moderna e autorevole, funzionale alla promozione della ricerca e della formazione sul campo.',
        tools: 'Figma, Adobe Illustrator, AI',
        //link: 'Vecchio sito: https://panafgeo.eurogeosurveys.org/',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/1.png',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/2.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/3.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/5.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/6.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/7.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/8.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/9.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/10.png',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/11.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/12.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_04/13.jpg'
        ]
    },
    'FERMA Forum 2026': {
        style: {
            color: "#659bdd"
        },
        title: 'FERMA Forum 2026',
        //category: 'AI Integration',
        date: 'Agosto 2025 - Dicembre 2025',
        location: 'Bruxelles, BE',
        brief: 'Evoluzione dell’immagine coordinata per il FERMA Forum, l’hub europeo della cultura del rischio.',
        role: 'L’attività si è concentrata sulla creazione di un linguaggio visivo moderno e professionale, applicato sia alla presenza digitale che all’allestimento dell’evento.',
        tools: 'Adobe Illustrator, AI',
        //link: 'Vecchio sito: https://panafgeo.eurogeosurveys.org/',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/1.png',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/2.png',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/3.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/5.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/7.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_05/6.jpg'
        ]
    },
    'FERMA ESG Toolbox': {
        style: {
            color: "#5d9660"
        },
        title: 'FERMA ESG Toolbox',
        //category: 'AI Integration',
        date: 'Agosto 2025 - Dicembre 2025',
        location: 'Bruxelles, BE',
        brief: 'Evoluzione dell’identità visiva e sviluppo editoriale per lo strumento europeo di gestione dei rischi ESG.',
        role: 'Realizzare l’intera produzione della brochure tecnica, gestendo l’impaginazione dei contenuti e lo studio grafico dei piatti di copertina (1ª e 4ª). Il risultato è un’immagine istituzionale solida che armonizza la presenza online e offline, posizionando il Toolbox come una risorsa indispensabile per la rendicontazione non finanziaria e la cultura della sostenibilità nel panorama corporate.',
        tools: 'Adobe Illustrator, Adobe Photoshop, AI',
        //link: 'Vecchio sito: https://panafgeo.eurogeosurveys.org/',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_06/1.png',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_06/2.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_06/3.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_06/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_06/5.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_06/6.jpg'
        ]
    },
    'URBAN KONG': {
        style: {
            color: "#d58324"
        },
        title: 'URBAN KONG',
        //category: 'AI Integration',
        date: 'Agosto 2025 - Dicembre 2025',
        location: 'Bruxelles, BE',
        brief: 'Sviluppo dell’identità visiva e ottimizzazione dei sistemi di vendita per il brand Urban Kong.',
        role: 'L’attività ha coniugato design creativo e gestione tecnica dei processi di vendita. Progettazione del nuovo logo e creazione grafiche per i vari prodotti, inoltre il lavoro si è concentrato sulla massimizzazione delle potenzialità della piattaforma Shopify. Attraverso l’implementazione di flussi avanzati su Klaviyo, è stata potenziata la gestione della comunicazione con i clienti.',
        tools: 'Adobe Illustrator, Adobe Photoshop, AI, Figma',
        link: 'https://urban-kong.com/',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/1.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/2.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/3.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/5.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/6.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_07/7.jpg'
        ]
    },
    'PLAYLIST COVERS': {
        style: {
            color: "#466dba"
        },
        title: 'PLAYLIST COVERS',
        //category: 'AI Integration',
        date: 'N.A.',
        location: 'N.A.',
        brief: 'Esigenza di rendere uniche le copertine delle varie playlist di Spotify.',
        role: 'Dare un identià ad ogni playlist, mantenendo una coerenza grafica.',
        tools: 'Adobe Illustrator',
        link: 'https://open.spotify.com/user/11145090949?si=e25acfe5bf314534',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_08/3.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_08/4.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_08/5.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_08/6.jpg'
        ]
    },
    'SONGS COVERS': {
        style: {
            color: "#9a7777"
        },
        title: 'SONGS COVERS',
        //category: 'AI Integration',
        date: 'N.A.',
        location: 'N.A.',
        brief: 'Il progetto prevedeva la realizzazione di due cover per due brani dell’artista napoletano "NOID"',
        role: 'Rappresentare i sentimenti dei due brani, in un artefatto visivo.',
        tools: 'Adobe Photoshop',
        link: '',
        gallery: [
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_09/1.jpg',
            '/Users/gennarogrieco/Documents/GitHub/Portfolio/Imgs/Prjct_09/2.jpg'
        ]
    }
};
// ===== WINDOW MANAGEMENT =====
function createWindow(type) {
    const id = `${type}-${Date.now()}`;
    const existingWindow = document.querySelector(`[data-window-id="${type}"]`);

    if (existingWindow) {
        existingWindow.style.zIndex = ++state.zIndex;
        return;
    }

    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.setAttribute('data-window-id', type);
    windowEl.style.left = `${50 + Math.random() * 100}px`;
    windowEl.style.top = `${50 + Math.random() * 100}px`;
    windowEl.style.width = type === 'game' ? '350px' : '400px';
    windowEl.style.zIndex = ++state.zIndex;

    let content = '';
    switch (type) {
        case 'AGRIVOLT':
        case 'BACK2BACK':
        case 'OIKA':
        case 'PanAfGeo+':
        case 'FERMA Forum 2026':
        case 'FERMA ESG Toolbox':
        case 'URBAN KONG':
        case 'PLAYLIST COVERS':
        case 'SONGS COVERS':

            // Project window with full structure
            const project = projectData[type];
            content = `
                <div class="window-header">
                    <span class="window-title">📁 ${project.title}</span>
                    <div class="window-controls">
                        <button class="window-btn">_</button>
                        <button class="window-btn">□</button>
                        <button class="window-btn close" data-close="${type}">✕</button>
                    </div>
                </div>
                <div class="window-content">
                    <div style="border-bottom: 1px solid #718096; padding-bottom: 10px; margin-bottom: 15px;">
                        <!-- <h3 style="color: #cbd5e0; margin-bottom: 8px; font-size: 14px;">${project.title}</h3> -->
                        <div style="font-size: 10px; color: #a0aec0; margin-top: 5px; display: flex; gap: 40px;">
                            <span><strong>LUOGO:</strong> ${project.location}</span>
                            <span><strong>DATA:</strong> ${project.date}</span>
                        </div>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <h4 style="color: #718096; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">BRIEF</h4>
                        <p style="font-size: 11px; color: #cbd5e0; line-height: 1.5;">${project.brief}</p>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <h4 style="color: #718096; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">OBIETTIVO</h4>
                        <p style="font-size: 11px; color: #cbd5e0;">${project.role}</p>
                    </div>

                    <div style="margin-bottom: 15px;">
                        <h4 style="color: #718096; font-size: 11px; margin-bottom: 6px; text-transform: uppercase;">SOFTWARE</h4>
                        <p style="font-size: 11px; color: #cbd5e0;">${project.tools}</p>
                    </div>

                    <div style="padding-top: 10px; border-top: 1px solid #718096;">
                        <a href="${project.link}" target="_blank" style="display: inline-block; padding: 6px 12px; background: #4a5568; color: #f7fafc; text-decoration: none; font-size: 10px; border-radius: 3px; transition: all 0.2s; cursor: pointer;" onmouseover="this.style.background='#718096'; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'" onmouseout="this.style.background='#4a5568'; this.style.boxShadow='none'">
                            VISITA IL SITO
                        </a>
                    </div>

                    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #718096;">
                        <h4 style="color: #718096; font-size: 11px; margin-bottom: 8px; text-transform: uppercase;">GALLERY</h4>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            ${project.gallery ? project.gallery.map((img, idx) => `
                            <div style="flex: 1; min-width: 100px; height: 120px; border: 1px solid #718096; border-radius: 3px; overflow: hidden; cursor: pointer; transition: all 0.2s;" 
                        onmouseover="this.style.opacity=0.8; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'" 
                        onmouseout="this.style.opacity=1; this.style.boxShadow='none'"
                        onclick="openImageLightbox('${img}', '${project.title}')">
                    <img src="${img}" style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
                </div>
            `).join('') : ''}
        </div>
    </div>
                    </div>
                </div>
            `;
            break;
        case 'about':
            content = `
                <div class="window-header">
                    <span class="window-title">${translations[state.currentLanguage].about.title}</span>
                    <div class="window-controls">
                        <button class="window-btn">_</button>
                        <button class="window-btn">□</button>
                        <button class="window-btn close" data-close="${type}">✕</button>
                    </div>
                </div>
                <div class="window-content">
                    <p><strong style="color: #F08000;">COSE DA SAPERE SU DI ME</strong></p>
                    <p style="margin-top: 10px;">
                        Mi chiamo Gennaro, in arte Giano, ho 26 anni e vengo da Napoli, cosa che, dal nome, si intuisce abbastanza facilmente. 
                        </br>
                        </br>
                        Sono cresciuto come programmatore, ma nel tempo ho capito che il Design era lo spazio in cui riuscivo davvero a esprimermi al meglio.
                        </br>
                        </br>
                        Elemento fondamentale che non può mai mancare è la musica: le mie playlist e le mie CMF diventano parte integrante del mio processo creativo.
                        Nel tempo libero videogioco, seguo con passione lo streetwear e tutto ciò che ruota attorno alla cultura visiva, ma non solo.
                        </br>
                        </br>
                        Questo è solo un breve riassunto di chi sono. Qui sotto è possibile visualizzare il mio CV, mentre nella sezione Contatti trovi tutti i riferimenti per scrivermi anche solo per scambiare due parole. </br>
                    </p>

                    <div style="font-size: 13px; margin-top: 15px; padding-top: 10px; border-top: 1px solid #718096;">
                        <button onclick="openPDFViewer('CV Grieco Gennaro.pdf', 'CV Grieco Gennaro.pdf')" 
                        style="display: inline-block; padding: 8px 16px; background: #4a5568; color: #f7fafc; 
                        text-decoration: none; font-size: 11px; border: 2px solid #718096; border-radius: 3px; 
                        transition: all 0.2s; cursor: pointer; font-family: Courier New, monospace; font-weight: bold;"
                        onmouseover="this.style.background='#718096'; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'" 
                        onmouseout="this.style.background='#4a5568'; this.style.boxShadow='none'">
                            <strong>QUI TROVI IL MIO CV</strong>
                        </button>
                    </div>
                </div>
            `;
            break;

        case 'projects':
            const projectsHTML = Object.entries(projectData)
                .map(([projectId, project]) => `
                    <div class="project-folder"
                        data-project="${projectId}"
                        style="
                        display: flex; 
                        flex-direction: column; 
                        align-items: 
                        center; gap: 8px; 
                        cursor: pointer; 
                        padding: 12px; margin-bottom: 15px;
                        background: transparent;
                        border: none;
                        border-radius: 4px;
                        transition: all 0.3s;
                        user-select: none;"
                        onmouseover="this.style.background='rgba(113, 128, 150, 0.2)'; 
                        this.style.transform='scale(1.05)'"
                        onmouseout="this.style.background='transparent'; 
                        this.style.transform='scale(1)'"
                        onclick="openProjectDetails('${projectId}')">
                        
                        <!-- CARTELLA VISIVA -->
                        <div style="
                        width: 75px; 
                        height: 55px;
                        background: linear-gradient(135deg, ${project.style.color}, ${project.style.color}80); 
                        border: 2px solid ${project.style.color}; 
                        border-radius: 3px; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        position: relative; 
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">

                        <!-- TAB DELLA CARTELLA -->
                        <div style="position: absolute; top: -12px; left: 8px; width: 40px; height: 12px; 
                            background: linear-gradient(135deg, ${project.style.color}, ${project.style.color}80); 
                            border: 2px solid ${project.style.color}; border-bottom: none; border-radius: 3px 3px 0 0;"></div>
                        </div>
                        
                        <!-- NOME PROGETTO -->
                        <strong style="color: ${project.style.color}; font-size: 11px; text-align: center; max-width: 100px; word-wrap: break-word;">
                            ${project.title}
                        </strong>
                        
                        <!-- CATEGORIA -->
                        <span style="font-size: 9px; color: #a0aec0; text-align: center;">
                            ${project.category ?? ""}
                        </span>
                    </div>
                `)
                .join("");
            content = `
                <div class="window-header">
                    <span class="window-title">${translations[state.currentLanguage].projects.title}</span>
                    <div class="window-controls">
                        <button class="window-btn">_</button>
                        <button class="window-btn">□</button>
                        <button class="window-btn close" data-close="${type}">✕</button>
                    </div>
                </div>
                <div class="window-content" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; padding: 20px;">
                    ${projectsHTML}
                </div>
            `;
            break;

        case 'contact':
            content = `
                <div class="window-header">
                    <span class="window-title">${translations[state.currentLanguage].contact.title}</span>
                    <div class="window-controls">
                        <button class="window-btn">_</button>
                        <button class="window-btn">□</button>
                        <button class="window-btn close" data-close="${type}">✕</button>
                    </div>
                </div>
                <div class="window-content">
                    <p><strong style="color: #ff00ff;">GET IN TOUCH</strong></p>
                    <p style="margin-top: 10px;">📍 Location: Santa Maria Capua Vetere, Campania, Italy</p>
                    <p>✉️ <strong>Email:</strong> <span style="color: #00ffff;">designer@retroportfolio.dev</span></p>
                    <p>💼 <strong>LinkedIn:</strong> <span style="color: #ffff00;">/in/your-profile</span></p>
                    <p>🐙 <strong>GitHub:</strong> <span style="color: #39ff14;">/your-username</span></p>
                    <p>🌐 <strong>Website:</strong> <span style="color: #ff006e;">retroportfolio.dev</span></p>
                    
                    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #718096;">
                        <p><strong style="color: #00ffff;">✉️ SEND MESSAGE</strong></p>
                        <form id="contactForm" style="margin-top: 10px;">
                            <div style="margin-bottom: 10px;">
                                <label style="display: block; font-size: 10px; color: #a0aec0; margin-bottom: 5px;">Your Name:</label>
                                <input type="text" id="senderName" placeholder="Your name..." required style="width: 100%; padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid #00ffff; color: #00ffff; font-family: 'Courier New', monospace; font-size: 11px; border-radius: 2px;" />
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label style="display: block; font-size: 10px; color: #a0aec0; margin-bottom: 5px;">Your Email:</label>
                                <input type="email" id="senderEmail" placeholder="your.email@example.com" required style="width: 100%; padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid #00ffff; color: #00ffff; font-family: 'Courier New', monospace; font-size: 11px; border-radius: 2px;" />
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label style="display: block; font-size: 10px; color: #a0aec0; margin-bottom: 5px;">Subject:</label>
                                <input type="text" id="messageSubject" placeholder="Message subject..." required style="width: 100%; padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid #00ffff; color: #00ffff; font-family: 'Courier New', monospace; font-size: 11px; border-radius: 2px;" />
                            </div>
                            <div style="margin-bottom: 10px;">
                                <label style="display: block; font-size: 10px; color: #a0aec0; margin-bottom: 5px;">Message:</label>
                                <textarea id="messageContent" placeholder="Write your message here..." required style="width: 100%; padding: 6px; height: 80px; background: rgba(0,0,0,0.3); border: 1px solid #00ffff; color: #00ffff; font-family: 'Courier New', monospace; font-size: 11px; border-radius: 2px; resize: none;" ></textarea>
                            </div>
                            <button type="submit" style="width: 100%; padding: 8px; background: #4a5568; color: #f7fafc; border: 1px solid #718096; font-family: 'Courier New', monospace; font-weight: bold; cursor: pointer; border-radius: 2px; transition: all 0.2s; font-size: 11px;" onmouseover="this.style.background='#718096'; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'" onmouseout="this.style.background='#4a5568'; this.style.boxShadow='none'">
                                📤 SEND EMAIL
                            </button>
                        </form>
                    </div>
                </div>
            `;
            break;
        case 'game':
            content = `
                <div class="window-header">
                    <span class="window-title">${translations[state.currentLanguage].game.title}</span>
                    <div class="window-controls">
                        <button class="window-btn">_</button>
                        <button class="window-btn">□</button>
                        <button class="window-btn close" data-close="${type}">✕</button>
                    </div>
                </div>
                <div class="window-content">
                    <canvas id="snakeCanvas" class="game-canvas" width="300" height="250"></canvas>
                    <div class="game-info">
                        <span>Score: <span id="gameScore" style="color: #ffff00;">0</span></span>
                        <span>Level: <span id="gameLevel" style="color: #00ffff;">1</span></span>
                    </div>
                    <div class="game-controls">
                        <button class="game-btn" id="gameStartBtn">START</button>
                        <button class="game-btn" id="gamePauseBtn">PAUSE</button>
                        <button class="game-btn" id="gameResetBtn">RESET</button>
                    </div>
                </div>
            `;
            break;
        case 'info':
            content = `
        <div class="window-header">
            <span class="window-title">${translations[state.currentLanguage].info.title}</span>
            <div class="window-controls">
                <button class="window-btn">_</button>
                <button class="window-btn">□</button>
                <button class="window-btn close" data-close="${type}">×</button>
            </div>
        </div>
        <div class="window-content">
            <h2 style="color: #F08000; margin-bottom: 15px;">👋 BENVENUTO!</h2>
            <p style="font-size: 14px; line-height: 1.6; color: #cbd5e0; letter-spacing: 0px;">
                Grazie per aver visitato il mio portfolio.<br>
                Il sito simula un sistema operativo un po' retrò.<br><br>
                <strong>Clicca sulle icone</strong> per esplorare i miei progetti,<br>
                ascoltare musica o giocare a Snake!<br><br>
                Il sito è attualmente non e' completo al 100%.<br>
                Questo significa che potresti incontrare funzionalità incomplete, o comportamenti imprevisti.
                Se dovessi riscontrare errori o malfunzionamenti, ti sarei grato se potessi segnalarmeli.<br>
                Puoi inviare una mail con i dettagli del problema alla mail che trovi in "Contatti"<br><br>
                <strong>DISCLAMER</strong>
                I brani musicali presenti in questo progetto sono utilizzati esclusivamente a scopo dimostrativo e non commerciale.
                Tutti i diritti appartengono ai rispettivi autori e detentori dei diritti.
                I contenuti verranno rimossi su richiesta dei legittimi proprietari.<br><br>
                <strong>CREDITS:</strong><br>
                Icone: https://www.flaticon.com/search?style_id=1236&author_id=6926&word=pixel&type=standard
            </p>
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #718096;">
                <p style="font-size: 11px; color: #a0aec0;">v1.0 - Made with love and a lot of coffee</p>
            </div>
        </div>
    `;
            break;

    }

    windowEl.innerHTML = content;
    document.body.appendChild(windowEl);

    // Add to taskbar
    addToTaskbar(type);

    // Close button functionality
    const closeBtn = windowEl.querySelector('[data-close]');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeWindow(type));
    }

    // Make window draggable
    makeWindowDraggable(windowEl);

    // Make window resizable exepted for the Game
    if (type !== 'game') {
        makeWindowResizable(windowEl);
    }

    // Initialize game if needed
    if (type === 'game') {
        initSnakeGame();
    }

    state.windows[type] = windowEl;
}

function closeWindow(type) {
    const windowEl = document.querySelector(`[data-window-id="${type}"]`);
    if (windowEl) {
        windowEl.classList.add('closing');
        setTimeout(() => {
            windowEl.remove();
            delete state.windows[type];
            removeFromTaskbar(type);
        }, 300);
    }
}

function makeWindowDraggable(windowEl) {
    const header = windowEl.querySelector('.window-header');
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    header.addEventListener('mousedown', dragMouseDown);

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.addEventListener('mousemove', elementDrag);
        document.addEventListener('mouseup', closeDragElement);
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        windowEl.style.top = (windowEl.offsetTop - pos2) + 'px';
        windowEl.style.left = (windowEl.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.removeEventListener('mousemove', elementDrag);
        document.removeEventListener('mouseup', closeDragElement);
    }
}

function makeWindowResizable(windowEl) {
    const handle = document.createElement('div');
    handle.className = 'resize-handle';
    windowEl.appendChild(handle);

    let startX = 0, startY = 0, startW = 0, startH = 0;

    handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const rect = windowEl.getBoundingClientRect();

        // Forza dimensioni esplicite (se era "auto")
        windowEl.style.width = rect.width + 'px';
        windowEl.style.height = rect.height + 'px';

        startX = e.clientX;
        startY = e.clientY;
        startW = rect.width;
        startH = rect.height;

        document.addEventListener('mousemove', doResize);
        document.addEventListener('mouseup', stopResize);
    });

    function doResize(e) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        const minW = 300;  // coerente col tuo CSS
        const minH = 180;

        const maxW = window.innerWidth * 0.9;
        const maxH = window.innerHeight * 0.9;

        const newW = Math.min(Math.max(startW + dx, minW), maxW);
        const newH = Math.min(Math.max(startH + dy, minH), maxH);

        windowEl.style.width = newW + 'px';
        windowEl.style.height = newH + 'px';
    }

    function stopResize() {
        document.removeEventListener('mousemove', doResize);
        document.removeEventListener('mouseup', stopResize);
    }
}


function addToTaskbar(type) {
    const taskbarWindows = document.getElementById('taskbarWindows');
    const item = document.createElement('div');
    item.className = 'taskbar-item';
    item.setAttribute('data-taskbar-item', type);
    item.textContent = `${type.toUpperCase()}.exe`;
    item.addEventListener('click', () => {
        const windowEl = state.windows[type];
        if (windowEl) {
            windowEl.style.zIndex = ++state.zIndex;
        }
    });
    taskbarWindows.appendChild(item);
}

function removeFromTaskbar(type) {
    const item = document.querySelector(`[data-taskbar-item="${type}"]`);
    if (item) item.remove();
}

// ===== IMAGE LIGHTBOX =====
function openImageLightbox(imageUrl, projectTitle) {
    const lightboxId = 'lightbox-' + Date.now();
    const windowContent = `
<div class="window-header">
    <span class="window-title"> ${projectTitle} - Image Viewer</span>
    <div class="window-controls">
        <button class="window-btn">_</button>
        <button class="window-btn">□</button>
        <button class="window-btn close" data-close="${lightboxId}">×</button>
    </div>
</div>
<div class="window-content" style="padding: 0; overflow: auto; max-height: 600px;">
    <img src="${imageUrl}" style="width: 100%; height: auto; display: block; border-radius: 3px;">
</div>
`;

    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.id = lightboxId;
    windowEl.innerHTML = windowContent;
    windowEl.style.width = '600px';
    windowEl.style.height = 'auto';
    windowEl.style.left = `calc(50% - 300px)`;
    windowEl.style.top = `calc(50% - 250px)`;
    windowEl.style.zIndex = state.zIndex++;

    document.body.appendChild(windowEl);
    state.windows[lightboxId] = windowEl;

    // Rendi trascinabile
    makeWindowDraggable(windowEl);

    // Chiudi al click sul bottone X
    windowEl.querySelector('.window-btn.close').addEventListener('click', () => {
        windowEl.classList.add('closing');
        setTimeout(() => {
            windowEl.remove();
            delete state.windows[lightboxId];
        }, 300);
    });
}

// ===== PDF VIEWER =====
function openPDFViewer(pdfUrl, title) {
    const pdfId = 'pdf-' + Date.now();
    const windowContent = `
        <div class="window-header">
            <span class="window-title">📄 ${title}</span>
            <div class="window-controls">
                <button class="window-btn">_</button>
                <button class="window-btn">□</button>
                <button class="window-btn close" data-close="${pdfId}">×</button>
            </div>
        </div>
        <div class="window-content" style="max-height: fit-content; padding: 0px; overflow: auto; display: flex; flex-direction: column; align-items: center;">
            <div style="display: flex; gap: 10px;"></div>
            <iframe src="${pdfUrl}" style="width: 500px; height: 800px; solid #718096; border-radius: 3px;"></iframe>
        </div>
    `;

    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.id = pdfId;
    windowEl.innerHTML = windowContent;
    windowEl.style.width = 'flex';
    windowEl.style.height = 'flex';
    windowEl.style.left = `calc(50% - 350px)`;
    windowEl.style.top = `0px`;
    windowEl.style.zIndex = state.zIndex++;

    document.body.appendChild(windowEl);
    state.windows[pdfId] = windowEl;

    // Rendi trascinabile
    makeWindowDraggable(windowEl);

    // Chiudi al click sul bottone X
    windowEl.querySelector('.window-btn.close').addEventListener('click', () => {
        windowEl.classList.add('closing');
        setTimeout(() => {
            windowEl.remove();
            delete state.windows[pdfId];
        }, 300);
    });
}

// ===== PROJECT DETAILS VIEWER =====
function openProjectDetails(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    const detailsId = 'project-details-' + projectId;
    const galleryHTML = project.gallery ? project.gallery.map((img, idx) => `
        <div class="gallery-item" data-image="${img}" data-title="${project.title}" 
             style="flex: 1; min-width: 80px; height: 80px; border: 1px solid #718096; border-radius: 3px; overflow: hidden; cursor: pointer; transition: all 0.2s;" 
             onmouseover="this.style.opacity=0.8; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'" 
             onmouseout="this.style.opacity=1; this.style.boxShadow='none'"
             onclick="openImageLightbox('${img}', '${project.title}')">
            <img src="${img}" style="width: 100%; height: 100%; object-fit: cover; pointer-events: none;">
        </div>
    `).join('') : '';

    /* Questo blocco di codice, apre un altra schermata quando si clicca su un progetto
    const windowContent = `
        <div class="window-header">
            <span class="window-title">📁 ${project.title}</span>
            <div class="window-controls">
                <button class="window-btn">_</button>
                <button class="window-btn">□</button>
                <button class="window-btn close" data-close="${detailsId}">✕</button>
            </div>
        </div>
        <div class="window-content" style="max-height: 500px; overflow-y: auto;">
            <div style="margin-bottom: 15px;">
                <p style="color: #a0aec0; font-size: 10px; margin: 0;"><strong>CATEGORY:</strong> ${project.category}</p>
                <p style="color: #a0aec0; font-size: 10px; margin: 5px 0 0 0;"><strong>DATE:</strong> ${project.date}</p>
                <p style="color: #a0aec0; font-size: 10px; margin: 5px 0 0 0;"><strong>LOCATION:</strong> ${project.location}</p>
            </div>

            <div style="border-top: 1px solid #718096; padding-top: 10px; margin-bottom: 15px;">
                <p style="color: #cbd5e0; font-size: 11px; line-height: 1.5; margin: 0;">
                    <strong style="color: #38bdf8;">BRIEF:</strong><br>
                    ${project.brief}
                </p>
            </div>

            <div style="border-top: 1px solid #718096; padding-top: 10px; margin-bottom: 15px;">
                <p style="color: #a0aec0; font-size: 10px; margin: 0;"><strong>ROLE:</strong> ${project.role}</p>
                <p style="color: #a0aec0; font-size: 10px; margin: 5px 0 0 0;"><strong>TOOLS:</strong> ${project.tools}</p>
            </div>

            ${galleryHTML ? `
                <div style="border-top: 1px solid #718096; padding-top: 10px; margin-bottom: 15px;">
                    <p style="color: #718096; font-size: 11px; margin: 0 0 10px 0; text-transform: uppercase;"><strong>GALLERY</strong></p>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        ${galleryHTML}
                    </div>
                </div>
            ` : ''}

           <div style="border-top: 1px solid #718096; padding-top: 10px;">
                <a href="${project.link}" target="_blank" 
                   style="display: inline-block; padding: 8px 16px; background: #48bb78; color: #1a202c; 
                   text-decoration: none; font-size: 11px; border-radius: 3px; transition: all 0.2s; 
                   cursor: pointer; font-weight: bold;"
                   onmouseover="this.style.boxShadow='0 0 12px rgba(72, 187, 120, 0.6)'" 
                   onmouseout="this.style.boxShadow='none'">
                    🔗 VIEW PROJECT
                </a>
            </div>
        </div>
    `; */

    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.id = detailsId;
    windowEl.innerHTML = windowContent;
    windowEl.style.width = '500px';
    windowEl.style.height = 'auto';
    windowEl.style.left = `calc(50% - 250px)`;
    windowEl.style.top = `calc(50% - 200px)`;
    windowEl.style.zIndex = state.zIndex++;

    document.body.appendChild(windowEl);
    state.windows[detailsId] = windowEl;

    // Rendi trascinabile
    makeWindowDraggable(windowEl);

    // Chiudi al click sul bottone X
    windowEl.querySelector('.window-btn.close').addEventListener('click', () => {
        windowEl.classList.add('closing');
        setTimeout(() => {
            windowEl.remove();
            delete state.windows[detailsId];
        }, 300);
    });
}


// ===== MUSIC PLAYER =====
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackNameEl = document.getElementById('trackName');
const trackArtistEl = document.getElementById('trackArtist');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// Playlist - Your Music Taste
let playlist = [
    {
        name: 'Moon River',
        url: '/Users/gennarogrieco/Documents/GitHub/Portfolio/Musics/Frank Ocean Moon River.mp3',
        artist: 'Frank Ocean'
    },
    {
        name: 'Selfless',
        url: '/Users/gennarogrieco/Documents/GitHub/Portfolio/Musics/The Strokes Selfless Official Audio.mp3',
        artist: 'The Strokes'
    },
    {
        name: 'G.O.A.T. - Il Cuore',
        url: '/Users/gennarogrieco/Documents/GitHub/Portfolio/Musics/Marracash G.O.A.T. Il Cuore.mp3',
        artist: 'Marracash'
    },
    {
        name: 'Feel Good Inc',
        url: '/Users/gennarogrieco/Documents/GitHub/Portfolio/Musics/Gorillaz Feel Good Inc Official Video.mp3',
        artist: 'Gorillaz'
    }
];

let currentTrackIndex = 0;
let isPlaying = false;

// Format time helper
function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Load track
function loadTrack(index) {
    if (index < 0 || index >= playlist.length) return;
    currentTrackIndex = index;
    const track = playlist[index];
    audioPlayer.src = track.url;
    trackNameEl.textContent = track.name;
    trackArtistEl.textContent = track.artist;
    updatePlayButton();
}

// Play/Pause toggle
function togglePlay() {
    if (!audioPlayer.src) {
        console.log('No track loaded');
        return;
    }

    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play().catch(err => {
            console.log('Playback error:', err);
        });
        isPlaying = true;
    }
    updatePlayButton();
}

// Update play button display
function updatePlayButton() {
    playBtn.textContent = isPlaying ? '⏸' : '▶';
}

// Audio event listeners
audioPlayer.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButton();
});

audioPlayer.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButton();
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;

    if (duration) {
        const percent = (currentTime / duration) * 100;
        progressBar.style.width = percent + '%';
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    }
});

audioPlayer.addEventListener('ended', () => {
    // Auto play next track when current ends
    nextTrack();
});

// Progress bar click to seek
progressBar.parentElement.addEventListener('click', (e) => {
    const barWidth = e.currentTarget.offsetWidth;
    const clickX = e.offsetX;
    const percent = clickX / barWidth;
    audioPlayer.currentTime = percent * audioPlayer.duration;
});

// Button controls
playBtn.addEventListener('click', togglePlay);

prevBtn.addEventListener('click', () => {
    loadTrack(currentTrackIndex - 1);
    if (isPlaying) {
        audioPlayer.play();
    }
});

nextBtn.addEventListener('click', () => {
    nextTrack();
});

function nextTrack() {
    loadTrack((currentTrackIndex + 1) % playlist.length);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// Initialize first track
loadTrack(0);


// ===== SNAKE GAME =====
let gameState = {
    snake: [{ x: 150, y: 125 }],
    food: {
        x: Math.floor(Math.random() * 30) * 10,  // 0-300px
        y: Math.floor(Math.random() * 25) * 10   // 0-250px (Altezza canvas)
    },
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    score: 0,
    level: 1,
    gameRunning: false,
    gamePaused: false,
    gameSpeed: 100
};

function initSnakeGame() {
    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gridSize = 10;

    function drawGame() {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw snake
        ctx.fillStyle = '#00ff00';
        gameState.snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, gridSize - 2, gridSize - 2);
        });

        // Draw food
        ctx.fillStyle = '#ff00ff';
        ctx.fillRect(gameState.food.x, gameState.food.y, gridSize - 2, gridSize - 2);
    }

    function updateGame() {
        if (!gameState.gameRunning || gameState.gamePaused) return;

        gameState.direction = gameState.nextDirection;
        const head = { ...gameState.snake[0] };
        head.x += gameState.direction.x * gridSize;
        head.y += gameState.direction.y * gridSize;

        // Wrap around edges
        if (head.x < 0) head.x = canvas.width - gridSize;
        if (head.x >= canvas.width) head.x = 0;
        if (head.y < 0) head.y = canvas.height - gridSize;
        if (head.y >= canvas.height) head.y = 0;

        // Check collision with self
        for (let segment of gameState.snake) {
            if (head.x === segment.x && head.y === segment.y) {
                gameState.gameRunning = false;
                alert(`Game Over! Final Score: ${gameState.score}`);
                return;
            }
        }

        gameState.snake.unshift(head);

        // Check food collision
        if (head.x === gameState.food.x && head.y === gameState.food.y) {
            gameState.score += 10;
            gameState.level = Math.floor(gameState.score / 50) + 1;
            gameState.gameSpeed = Math.max(50, 100 - gameState.level * 5);
            document.getElementById('gameScore').textContent = gameState.score;
            document.getElementById('gameLevel').textContent = gameState.level;
            gameState.food = {
                x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
                y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize
            };
        } else {
            gameState.snake.pop();
        }
    }

    let gameInterval;

    function startGameLoop() {
        gameInterval = setInterval(() => {
            updateGame();
            drawGame();
        }, gameState.gameSpeed);
    }

    document.getElementById('gameStartBtn').addEventListener('click', () => {
        gameState.gameRunning = true;
        gameState.gamePaused = false;
        startGameLoop();
    });

    document.getElementById('gamePauseBtn').addEventListener('click', () => {
        gameState.gamePaused = !gameState.gamePaused;
    });

    document.getElementById('gameResetBtn').addEventListener('click', function () {
        gameState = {
            snake: [{ x: 150, y: 125 }],
            food: generateValidFood(),
            direction: { x: 1, y: 0 },
            nextDirection: { x: 1, y: 0 },
            score: 0,
            level: 1,
            gameRunning: false,
            gamePaused: false,
            gameSpeed: 100
        };
        document.getElementById('gameScore').textContent = '0';
        document.getElementById('gameLevel').textContent = '1';
        clearInterval(gameInterval);
        drawGame();
    });

    // Funzione per generare cibo in posizione valida
    function generateValidFood() {
        let food;
        let isValid = false;

        while (!isValid) {
            food = {
                x: Math.floor(Math.random() * 30) * 10,
                y: Math.floor(Math.random() * 25) * 10
            };

            // Controlla che il cibo non sia sopra il serpente
            isValid = !gameState.snake.some(segment =>
                segment.x === food.x && segment.y === food.y
            );
        }

        return food;
    }


    document.addEventListener('keydown', (e) => {
        if (!gameState.gameRunning) return;
        switch (e.key) {
            case 'ArrowUp':
                if (gameState.direction.y === 0) gameState.nextDirection = { x: 0, y: -1 };
                break;
            case 'ArrowDown':
                if (gameState.direction.y === 0) gameState.nextDirection = { x: 0, y: 1 };
                break;
            case 'ArrowLeft':
                if (gameState.direction.x === 0) gameState.nextDirection = { x: -1, y: 0 };
                break;
            case 'ArrowRight':
                if (gameState.direction.x === 0) gameState.nextDirection = { x: 1, y: 0 };
                break;
        }
    });

    drawGame();
}

// ===== PROJECT FOLDER HANDLER =====
document.addEventListener('click', (e) => {
    const projectFolder = e.target.closest('.project-folder');
    if (projectFolder) {

        const projectId = projectFolder.getAttribute('data-project');
        console.log("click project-folder projectId:" + projectId);
        createWindow(projectId);

    }
});

// ===== DESKTOP ICONS =====
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        console.log("click desktop icon-");
        const windowType = icon.getAttribute('data-window');
        console.log("click project-folder projectId:" + windowType);
        createWindow(windowType);

    });
    icon.addEventListener('dblclick', () => {
        console.log("dblclick desktop icon-");
        const windowType = icon.getAttribute('data-window');
        console.log("click project-folder projectId:" + windowType);
        createWindow(windowType);

    });
});

// ===== CLOCK UPDATE =====
setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}, 1000);

// ===== SETTINGS WINDOW =====
function createSettingsWindow() {
    const existingWindow = document.querySelector('[data-window-id="settings"]');
    if (existingWindow) {
        existingWindow.style.zIndex = state.zIndex++;
        return;
    }

    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.setAttribute('data-window-id', 'settings');
    windowEl.style.left = '0%';
    windowEl.style.bottom = '50px'
    windowEl.style.top = 'auto';
    windowEl.style.width = '400px';
    windowEl.style.zIndex = state.zIndex++;
    windowEl.style.pointerEvents = 'auto';

    const content = `
<div class="window-header">
    <span class="window-title">⚙️ System Settings</span>
    <div class="window-controls">
        <button class="window-btn">_</button>
        <button class="window-btn">□</button>
        <button class="window-btn close" data-close="settings">×</button>
    </div>
</div>

<div class="window-content">
    <div style="margin-bottom: 15px;">
        <h4 style="color: #718096; font-size: 11px; margin-bottom: 8px; text-transform: uppercase;">LANGUAGE</h4>
        <p style="font-size: 10px; color: #a0aec0; margin-top: 5px;">Seleziona la lingua preferita</p>
        <select
            id="languageSelect"
            style="width: 100%; padding: 8px; background: rgba(0,0,0,0.3); border: 1px solid #718096; color: #00ffff; font-family: Courier New, monospace; font-size: 11px; border-radius: 2px; cursor: pointer;"
        >
            <option value="en">English</option>
            <option value="it">Italiano</option>
        </select>
    </div>

    <div style="margin-bottom: 15px; padding-top: 10px; border-top: 1px solid #718096;">
        <h4 style="color: #718096; font-size: 11px; margin-bottom: 8px; text-transform: uppercase;">THEME</h4>
        <p style="font-size: 10px; color: #a0aec0; margin-top: 8px;">Choose your preferred color scheme</p>

        <div style="display: flex; gap: 10px; margin-bottom: 10px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1;">
                <input type="radio" name="theme" value="auto" id="themeAuto" checked>
                <span style="font-size: 11px; color: #cbd5e0;">Auto System</span>
            </label>
        </div>

        <div style="display: flex; gap: 10px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1;">
                <input type="radio" name="theme" value="light" id="themeLight">
                <span style="font-size: 11px; color: #cbd5e0;">Light</span>
            </label>

            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1;">
                <input type="radio" name="theme" value="dark" id="themeDark">
                <span style="font-size: 11px; color: #cbd5e0;">Dark</span>
            </label>
        </div>
    </div>

    <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid #718096;">
        <button
            id="settingsApplyBtn"
            style="width: 100%; padding: 8px; background: #4a5568; color: #f7fafc; border: 1px solid #718096; font-family: Courier New, monospace; font-weight: bold; cursor: pointer; border-radius: 2px; transition: all 0.2s; font-size: 11px; margin-bottom: 8px;"
            onmouseover="this.style.background='#718096'; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'"
            onmouseout="this.style.background='#4a5568'; this.style.boxShadow='none'"
        >
            APPLY CHANGES
        </button>

        <button
            id="settingsCloseBtn"
            style="width: 100%; padding: 8px; background: rgba(113, 128, 150, 0.2); color: #f7fafc; border: 1px solid #718096; font-family: Courier New, monospace; font-weight: bold; cursor: pointer; border-radius: 2px; transition: all 0.2s; font-size: 11px;"
            onmouseover="this.style.background='rgba(113, 128, 150, 0.3)'; this.style.boxShadow='0 0 8px rgba(113, 128, 150, 0.5)'"
            onmouseout="this.style.background='rgba(113, 128, 150, 0.2)'; this.style.boxShadow='none'"
        >
            CANCEL
        </button>
    </div>

    <div style="margin-top: 12px; padding: 8px; background: rgba(72, 187, 120, 0.1); border: 1px solid #48bb78; border-radius: 3px;">
        <p style="font-size: 8px; color: #48bb78; margin: 0; letter-spacing: 0;">
            <strong>ℹ️ INFO</strong> Settings are saved locally in your browser
        </p>
    </div>
</div>
`;

    windowEl.innerHTML = content;
    document.body.appendChild(windowEl);

    // Close button functionality
    const closeBtn = windowEl.querySelector('[data-close]');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            closeWindow('settings');
        });
    }

    // Apply button
    const applyBtn = document.getElementById('settingsApplyBtn');
    if (applyBtn) {
        applyBtn.addEventListener('click', function () {
            applySettings();
            closeWindow('settings');
        });
    }

    // Cancel button
    const cancelBtn = document.getElementById('settingsCloseBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', function () {
            closeWindow('settings');
        });
    }

    state.windows['settings'] = windowEl;
}


function applySettings() {
    // Get selected language
    const language = document.getElementById('languageSelect').value;
    localStorage.setItem('userLanguage', language);
    state.currentLanguage = language;
    console.log('Language changed to:', language);

    // Get selected theme
    const theme = document.querySelector('input[name="theme"]:checked').value;
    localStorage.setItem('userTheme', theme);
    applyTheme(theme);
    console.log('Theme changed to:', theme);

    // Update UI with new language
    updateLanguage(language);
}

function updateLanguage(lang) {
    const t = translations[lang] || translations['en'];

    // Update desktop icons
    const iconLabels = document.querySelectorAll('.icon-label');
    if (iconLabels[0]) iconLabels[0].textContent = t.icons.about;
    if (iconLabels[1]) iconLabels[1].textContent = t.icons.projects;
    if (iconLabels[2]) iconLabels[2].textContent = t.icons.contact;
    if (iconLabels[3]) iconLabels[3].textContent = t.icons.game;

    // Update open windows
    Object.entries(state.windows).forEach(([type, windowEl]) => {
        const titleEl = windowEl.querySelector('.window-title');
        if (titleEl) {
            // USARE .innerHTML INVECE DI .textContent
            if (type === 'about') titleEl.innerHTML = t.about.title;
            if (type === 'projects') titleEl.innerHTML = t.projects.title;
            if (type === 'contact') titleEl.innerHTML = t.contact.title;
            if (type === 'game') titleEl.innerHTML = t.game.title;
        }
    });
}

function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'light') {
        html.setAttribute('data-color-scheme', 'light');
    } else if (theme === 'dark') {
        html.setAttribute('data-color-scheme', 'dark');
    } else {
        html.removeAttribute('data-color-scheme');
    }
}

function loadSettings() {
    // Load language
    const savedLanguage = localStorage.getItem('userLanguage') || 'en';
    state.currentLanguage = savedLanguage;
    if (document.getElementById('languageSelect')) {
        document.getElementById('languageSelect').value = savedLanguage;
    }
    updateLanguage(savedLanguage);

    // Load theme
    const savedTheme = localStorage.getItem('userTheme') || 'auto';
    const themeRadio = document.querySelector(`input[name="theme"][value="${savedTheme}"]`);
    if (themeRadio) {
        themeRadio.checked = true;
    }
    applyTheme(savedTheme);

    // Load sound preference
    const soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    if (document.getElementById('soundToggle')) {
        document.getElementById('soundToggle').checked = soundEnabled;
    }
}

// ===== INITIALIZATION =====
state.currentLanguage = localStorage.getItem('userLanguage') || 'en';
updateTrackDisplay();
loadSettings();

// ===== START BUTTON HANDLER =====
document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.querySelector('.start-button');
    if (startBtn) {
        startBtn.addEventListener('click', createSettingsWindow);
        console.log('✓ START button event listener attached');
    } else {
        console.error('✗ START button not found');
    }
});

// Fallback if script runs after DOM load
if (document.readyState !== 'loading') {
    const startBtn = document.querySelector('.start-button');
    if (startBtn) {
        startBtn.addEventListener('click', createSettingsWindow);
    }
}

// Fallback for if script runs after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        const startBtn = document.querySelector('.start-button');
        if (startBtn) {
            startBtn.addEventListener('click', createSettingsWindow);
        }
    });
} else {
    const startBtn = document.querySelector('.start-button');
    if (startBtn) {
        startBtn.addEventListener('click', createSettingsWindow);
    }
}

// ===== UPDATE TRACK DISPLAY =====
function updateTrackDisplay() {
    if (playlist && playlist.length > 0) {
        const track = playlist[currentTrackIndex];
        if (track) {
            document.getElementById('trackName').textContent = track.name;
            document.getElementById('trackArtist').textContent = track.artist;
        }
    }
}

