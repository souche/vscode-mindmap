define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mappa classica',
            'tianpan': 'Mappa a cielo',
            'structure': 'Diagramma organizzativo',
            'filetree': 'Diagramma organizzativo strutturato',
            'right': 'Diagramma strutture logiche',
            'fish-bone': 'Mappa a lisca di pesce'
        },
        'theme': {
            'classic': 'Classico',
            'classic-compact': 'Classico compatto',
            'snow': 'Neve',
            'snow-compact': 'Neve Compatto',
            'fish': 'Mappa a lisca di pesce',
            'wire': 'Wireframe',
            'fresh-red': 'Fresco rosso',
            'fresh-soil': 'Giallo sporco',
            'fresh-green': 'Verde artistico',
            'fresh-blue': 'Cielo Blu',
            'fresh-purple': 'Viola romantico',
            'fresh-pink': 'Polvere della mente',
            'fresh-red-compat': 'Rosso compatto',
            'fresh-soil-compat': 'Giallo compatto',
            'fresh-green-compat': 'Verde compatto',
            'fresh-blue-compat': 'Blu compatto',
            'fresh-purple-compat': 'Viola compatto',
            'fresh-pink-compat': 'Rosa compatto',
            'tianpan': 'Chiamata classico',
            'tianpan-compact': 'Chiamata compatto'
        },
        'maintopic': 'Tema centrale',
        'topic': 'Tema',
        'panels': {
            'history': 'storia',
            'template': 'modello',
            'theme': 'skin',
            'layout': 'disposizione',
            'style': 'stile',
            'font': 'font',
            'color': 'colore',
            'background': 'sfondo',
            'insert': 'inserisci',
            'arrange': 'aggiusta',
            'nodeop': 'attuale',
            'priority': 'priorità',
            'progress': 'avanzamento',
            'resource': 'risorse',
            'note': 'note',
            'attachment': 'allegati',
            'word': 'testo'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Inserisci nodo fratello',
                'appendparentnode': 'Inserisci nodo padre',
                'appendchildnode': 'Inserisci nodo figlio',
                'removenode': 'Cancella nodo',
                'editnode': 'Modifica nodo',
                'arrangeup': 'Su',
                'arrangedown': 'Giù',
                'resetlayout': 'Ripristina disposizione',
                'expandtoleaf': 'Mostra tutti i nodi',
                'expandtolevel1': 'Mostra fino al livello 1',
                'expandtolevel2': 'Mostra fino al livello 2',
                'expandtolevel3': 'Mostra fino al livello 3',
                'expandtolevel4': 'Mostra fino al livello 4',
                'expandtolevel5': 'Mostra fino al livello 5',
                'expandtolevel6': 'Mostra fino al livello 6',
                'fullscreen': 'Schermo intero',
                'outline': 'Contorno'
            },
            'search': 'Cerca',
            'expandtoleaf': 'Mostra',
            'back': 'ritorno',
            'undo': 'Annulla (Ctrl + Z)',
            'redo': 'Ripristina (Ctrl + Y)',
            'tabs': {
                'idea': 'Idea',
                'appearence': 'Apparenza',
                'view': 'Vista'
            },
            'bold': 'Grassetto',
            'italic': 'Corsivo',
            'forecolor': 'Colore font',
            'fontfamily': 'Font',
            'fontsize': 'Grandezza',
            'layoutstyle': 'Skin',
            'node': 'Operazioni nodo',
            'hand': 'Consenti trascinamento',
            'camera': 'Individua il nodo principale',
            'zoom-in': 'Zoom in (Ctrl+)',
            'zoom-out': 'Zoom out (Ctrl-)',
            'markers': 'tag',
            'help': 'Aiuto',
            'preference': 'Impostazioni',
            'expandnode': 'Mostra fino alla radice',
            'collapsenode': 'Raggruppa nodi',
            'template': 'modello',
            'theme': 'skin',
            'clearstyle': 'Cancella stile',
            'copystyle': 'Copia stile',
            'pastestyle': 'Incolla stile',
            'appendsiblingnode': 'Stessa skin',
            'appendchildnode': 'Skin subordinata',
            'arrangeup': 'preponi',
            'arrangedown': 'postponi',
            'editnode': 'Modifica',
            'removenode': 'Rimuovi',
            'priority': 'Priorità',
            'progress': {
                'p1': 'Non iniziato',
                'p2': 'Completo 1/8',
                'p3': 'Completo 1/4',
                'p4': 'Completo 3/8',
                'p5': 'Completo a metà',
                'p6': 'Completo 5/8',
                'p7': 'Completo 3/4',
                'p8': 'Completo 7/8',
                'p9': 'Completato',
                'p0': 'Anulla avanzamento'
            },
            'resource': {
                'add': 'Aggiungi'
            },
            'link': 'Collegamento',
            'image': 'Immagine',
            'note': 'Nota',
            'insertlink': 'Inserisci collegamento',
            'insertimage': 'Inserisci immagine',
            'insertnote': 'Insert note',
            'removelink': 'Rimuovi collegamenti esistenti',
            'removeimage': 'Rimuovi immagini esistenti',
            'removenote': 'Rimuovi note esterne',
            'resetlayout': 'Organizza',
            'navigator': 'Navigatore',
            'selectall': 'Seleziona tutto',
            'selectrevert': 'Annulla selezione',
            'selectsiblings': 'Seleziona fratello',
            'selectlevel': 'Seleziona livello',
            'selectpath': 'Seleziona percorso',
            'selecttree': 'Seleziona sotto albero',
            'noteeditor': {
                'title': 'Nota',
                'hint': 'Supporta GFM grammar',
                'placeholder': 'Seleziona un nodo per modificare la nota'
            },
            'dialog': {
                'image': {
                    'title': 'Immagine',
                    'imagesearch': 'Cerca immagini',
                    'keyword': 'Parola chiave：',
                    'placeholder': 'Inserire una parola per effettuare una ricerca',
                    'baidu': 'Cerca',
                    'linkimage': 'Immagine collegata',
                    'linkurl': 'URL：',
                    'placeholder2': 'Richiesta：deve iniziare con http(s)://',
                    'imagehint': 'Suggerimento：',
                    'placeholder3': 'Opzionale: testo mostrato al passaggio del mouse sopra limmagine',
                    'preview': 'Anteprima immagine：',
                    'uploadimage': 'Carica immagine',
                    'selectfile': 'Seleziona file…',
                    'ok': 'OK',
                    'cancel': 'Cancella',
                    'formatinfo': 'la estensione del file deve essere jpg, gif o png'
                },
                'hyperlink': {
                    'title': 'Collegamento',
                    'linkurl': 'Indirizzo del collegamento：',
                    'linkhint': 'Suggerimento：',
                    'placeholder': 'Richiesta：deve iniziare con http(s):// or ftp://',
                    'placeholder2': 'Opzionale: testo mostrato al passaggio del mouse sopra l\'immagine',
                    'ok': 'OK',
                    'cancel': 'Cancella'
                },
                'exportnode': {
                    'title': 'Esporta nodo',
                    'ok': 'OK',
                    'cancel': 'Cancella'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Tema principale'
            },
            'node': {
                'arrangeup': 'Preponi',
                'appendchildnode': 'Accoda il nodo bambino',
                'appendsiblingnode': 'Accoda il nodo fratello',
                'arrangedown': 'posponi',
                'removenode': 'Rimuovi',
                'appendparentnode': 'Accoda al nodo padre',
                'selectall': 'Seleziona tutto',
                'topic': 'Tema',
                'importnode': 'Importa nodo',
                'exportnode': 'Esporta nodo'
            },
            'input': {
                'edit': 'Modifica'
            },
            'priority': {
                'main': 'Priorità',
                'remove': 'Cancella',
                'esc': 'Annulla'
            },
            'progress': {
                'main': 'Progresso',
                'remove': 'Cancella',
                'esc': 'Annulla'
            },
            'history': {
                'undo': 'Annulla',
                'redo': 'Ripristina'
            }
        }
    };
});
