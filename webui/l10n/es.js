define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': 'Mapa mental',
            'tianpan': 'Sky map',
            'structure': 'Organigrama',
            'filetree': 'Organigrama de directorios',
            'right': 'diagrama de estructura lógica',
            'fish-bone': 'Diagrama de espina de pescado'
        },
        'theme': {
            'classic': 'Clásico',
            'classic-compact': 'Clásico compacto',
            'snow': 'Luz fría suave',
            'snow-compact': 'Luz fría compacta',
            'fish': 'Fish bone map',
            'wire': 'Wireframe',
            'fresh-red': 'Pez rojo',
            'fresh-soil': 'Amarillo sucio',
            'fresh-green': 'Verde artistico',
            'fresh-blue': 'Cielo Azul',
            'fresh-purple': 'Morado romantico',
            'fresh-pink': 'Polvo mental',
            'fresh-red-compat': 'Rojo compacto',
            'fresh-soil-compat': 'Amarillo compacto',
            'fresh-green-compat': 'Verde compacto',
            'fresh-blue-compat': 'Azul compacto',
            'fresh-purple-compat': 'Morado compacto',
            'fresh-pink-compat': 'Polvo compacto',
            'tianpan': 'Dial clasico',
            'tianpan-compact': 'Dia compacto'
        },
        'maintopic': 'Tema central',
        'topic': 'tema de la rama',
        'panels': {
            'history': 'historial',
            'template': 'plantilla',
            'theme': 'tema',
            'layout': 'diseño',
            'style': 'estilo',
            'font': 'texto',
            'color': 'color',
            'background': 'fondo',
            'insert': 'insertar',
            'arrange': 'adjustar',
            'nodeop': 'actual',
            'priority': 'prioridad',
            'progress': 'progreso',
            'resource': 'recurso',
            'note': 'nota',
            'attachment': 'adjunto',
            'word': 'texto'
        },
        'ui': {
            'command': {
                'appendsiblingnode': 'Insertar nodo hermano',
                'appendparentnode': 'Insertar nodo padre',
                'appendchildnode': 'Insertar nodo hijo',
                'removenode': 'Eliminar',
                'editnode': 'Editar',
                'arrangeup': 'Arriba',
                'arrangedown': 'Abajo',
                'resetlayout': 'Restablecer diseño',
                'expandtoleaf': 'Expandir todos los nodos',
                'expandtolevel1': 'Expandir al nivel 1',
                'expandtolevel2': 'Expandir al nivel 2',
                'expandtolevel3': 'Expandir al nivel 3',
                'expandtolevel4': 'Expandir al nivel 4',
                'expandtolevel5': 'Expandir al nivel 5',
                'expandtolevel6': 'Expandir al nivel 6',
                'fullscreen': 'pantalla completa',
                'outline': 'contorno'
            },
            'search': 'Buscar',
            'expandtoleaf': 'Expandir',
            'back': 'atras',
            'undo': 'Deshacer (Ctrl + Z)',
            'redo': 'Rehacer (Ctrl + Y)',
            'tabs': {
                'idea': 'Idea',
                'appearence': 'Apariencia',
                'view': 'Vista'
            },
            'bold': 'Negrita',
            'italic': 'Itálicav',
            'forecolor': 'Color de fuente',
            'fontfamily': 'Fuente',
            'fontsize': 'Tamaño',
            'layoutstyle': 'Tema',
            'node': 'Operación de nodo',
            'hand': 'Permitir arrastrar',
            'camera': 'Localizar el nodo raíz',
            'zoom-in': 'Acercar (Ctrl+)',
            'zoom-out': 'Alejar (Ctrl-)',
            'markers': 'tag',
            'help': 'Ayuda',
            'preference': 'Preferencias',
            'expandnode': 'Expandir hoja',
            'collapsenode': 'recibir un nodo de nivel uno',
            'template': 'plantilla',
            'theme': 'tema',
            'clearstyle': 'Limpiar estilo',
            'copystyle': 'Copiar estilo',
            'pastestyle': 'Pegar estilo',
            'appendsiblingnode': 'mismo tema',
            'appendchildnode': 'tema subordinado',
            'arrangeup': 'pre-tune', // TODO: Get more info about this to translate it properly
            'arrangedown': 'post-tune', // TODO: Get more info about this to translate it properly
            'editnode': 'Editar',
            'removenode': 'remover',
            'priority': 'Prioridad',
            'progress': {
                'p1': 'no iniciado',
                'p2': 'Completado 1/8',
                'p3': 'Completado 1/4',
                'p4': 'Completado 3/8',
                'p5': 'Completado a la mitad',
                'p6': 'Completado 5/8',
                'p7': 'Completado 3/4',
                'p8': 'Completado 7/8',
                'p9': 'Completado',
                'p0': 'Limpiar progreso'
            },
            'resource': {
                'add': 'Agregar'
            },
            'link': 'Enlace',
            'image': 'Imagen',
            'note': 'Nota',
            'insertlink': 'Insertar enlace',
            'insertimage': 'Insertar imagen',
            'insertnote': 'Insertar nota',
            'removelink': 'Quitar enlaces existentes',
            'removeimage': 'Quitar imagen existente',
            'removenote': 'Quitar notas existentes',
            'resetlayout': 'Organizar',
            'navigator': 'Navegador',
            'selectall': 'Seleccionar todo',
            'selectrevert': 'Seleccionar revertir',
            'selectsiblings': 'Seleccionar hermanos',
            'selectlevel': 'Seleccionar nivel',
            'selectpath': 'Seleccionar ruta',
            'selecttree': 'Seleccionar subárbol',
            'noteeditor': {
                'title': 'Nota',
                'hint': 'Support GFM grammar',
                'placeholder': 'Por favor, seleccione un nodo para editar la nota'
            },
            'dialog': {
                'image': {
                    'title': 'Imagen',
                    'imagesearch': 'Búsqueda de imágenes',
                    'keyword': 'Palabra clave:',
                    'placeholder': 'Por favor ingrese la palabra clave para la búsqueda',
                    'baidu': 'Buscar',
                    'linkimage': 'Imagen vinculada',
                    'linkurl': 'URL：',
                    'placeholder2': 'Requerido: Iniciar con http(s)://',
                    'imagehint': 'Indicio:',
                    'placeholder3': 'Opcional: El texto que se muestra al pasar el cursor sobre la imagen.',
                    'preview': 'Vista previa de la imagen：',
                    'uploadimage': 'Cargar imagen',
                    'selectfile': 'Seleccionar archivo...',
                    'ok': 'OK',
                    'cancel': 'Cancelar',
                    'formatinfo': 'La extensión del archivo debe ser jpg, gif o png'
                },
                'hyperlink': {
                    'title': 'Enlace',
                    'linkurl': 'Link url：',
                    'linkhint': 'Indicio:',
                    'placeholder': 'Requerido: Iniciar con http(s):// o ftp://',
                    'placeholder2': 'Opcional: El texto que se muestra al pasar el cursor sobre el enlace.',
                    'ok': 'OK',
                    'cancel': 'Cancelar'

                },
                'exportnode': {
                    'title': 'Exportar Nodo',
                    'ok': 'OK',
                    'cancel': 'Cancelar'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': 'Tema principal'
            },
            'node': {
                'arrangeup': 'Organizar',
                'appendchildnode': 'Anexar nodo hijo',
                'appendsiblingnode': 'Anexar nodo hermano',
                'arrangedown': 'Organizar abajo',
                'removenode': 'Borrar',
                'appendparentnode': 'Anexar Nodo Padre',
                'selectall': 'Seleccionar Todo',
                'topic': 'Tema',
                'importnode': 'Importar Nodo',
                'exportnode': 'Exportar Nodo'
            },
            'input': {
                'edit': 'Editar'
            },
            'priority': {
                'main': 'Prioridad',
                'remove': 'Borrar',
                'esc': 'Esc'
            },
            'progress': {
                'main': 'Progreso',
                'remove': 'Borrar',
                'esc': 'Esc'
            },
            'history': {
                'undo': 'Deshacer',
                'redo': 'Rehacer'
            }
        }
    };
});