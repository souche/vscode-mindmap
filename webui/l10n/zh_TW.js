define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': '心智圖',
            'tianpan': '天盤圖',
            'structure': '組織圖',
            'filetree': '樹狀圖',
            'right': '邏輯圖',
            'fish-bone': '魚骨圖'
        },
        'theme': {
            'classic': '經典',
            'classic-compact': '緊湊經典',
            'snow': '溫柔冷光',
            'snow-compact': '緊湊冷光',
            'fish': '魚骨圖',
            'wire': '線框',
            'fresh-red': '清新紅',
            'fresh-soil': '泥土黃',
            'fresh-green': '文藝綠',
            'fresh-blue': '天空藍',
            'fresh-purple': '浪漫紫',
            'fresh-pink': '可愛粉',
            'fresh-red-compat': '緊湊紅',
            'fresh-soil-compat': '緊湊黃',
            'fresh-green-compat': '緊湊綠',
            'fresh-blue-compat': '緊湊藍',
            'fresh-purple-compat': '緊湊紫',
            'fresh-pink-compat': '緊湊粉',
            'tianpan':'天盤',
            'tianpan-compact': '緊湊天盤'
        },
        'maintopic': '中心主題',
        'topic': '分支主題',
        'panels': {
            'history': '歷史',
            'template': '範本',
            'theme': '主題',
            'layout': '配置',
            'style': '樣式',
            'font': '字型',
            'color': '顏色',
            'background': '背景',
            'insert': '插入',
            'arrange': '排列',
            'nodeop': '節點作業',
            'priority': '優先順序',
            'progress': '進度',
            'resource': '資源',
            'note': '備註',
            'attachment': '附件',
            'word': '文字'
        },
        'ui': {
            'command': {
                'appendsiblingnode': '插入同層主題',
                'appendparentnode': '插入上層主題',
                'appendchildnode': '插入下層主題',
                'removenode': '刪除',
                'editnode': '編輯',
                'arrangeup': '上移',
                'arrangedown': '下移',
                'resetlayout': '重新配置',
                'expandtoleaf': '全部展開',
                'expandtolevel1': '展開至第一級節點',
                'expandtolevel2': '展開至第二級節點',
                'expandtolevel3': '展開至第三級節點',
                'expandtolevel4': '展開至第四級節點',
                'expandtolevel5': '展開至第五級節點',
                'expandtolevel6': '展開至第六級節點',
                'fullscreen': '全螢幕',
                'outline': '大綱'
            },
            'search':'搜尋',
            'expandtoleaf': '展開',
            'back': '返回',
            'undo': '復原 (Ctrl + Z)',
            'redo': '取消復原 (Ctrl + Y)',
            'tabs': {
                'idea': '思考',
                'appearence': '外觀',
                'view': '檢視'
            },
            'bold': '粗體',
            'italic': '斜體',
            'forecolor': '顏色',
            'fontfamily': '字型',
            'fontsize': '大小',
            'layoutstyle': '配置樣式',
            'node': '節點操作',
            'hand': '允許拖曳',
            'camera': '回到根節點',
            'zoom-in': '放大（Ctrl+）',
            'zoom-out': '縮寫（Ctrl-）',
            'markers': '標記',
            'help': '說明',
            'preference': '喜好設定',
            'expandnode': '展開至末端節點',
            'collapsenode': '收合至第一級節點',
            'template': '範本',
            'theme': '主題',
            'clearstyle': '清除樣式',
            'copystyle': '複製樣式',
            'pastestyle': '貼上樣式',
            'appendsiblingnode': '同層主题',
            'appendchildnode': '下層主题',
            'arrangeup': '上移',
            'arrangedown': '下移',
            'editnode': '編輯',
            'removenode': '移除',
            'priority': '優先順序',
            'progress': {
                'p1': '未開始',
                'p2': '完成 1/8',
                'p3': '完成 1/4',
                'p4': '完成 3/8',
                'p5': '完成一半',
                'p6': '完成 5/8',
                'p7': '完成 3/4',
                'p8': '完成 7/8',
                'p9': '已完成',
                'p0': '清除進度'
            },
            'resource': {
                'add': '新增'
            },
            'link': '連結',
            'image': '圖片',
            'note': '備註',
            'insertlink': '插入連結',
            'insertimage': '插入圖片',
            'insertnote': '插入備註',
            'removelink': '移除連結',
            'removeimage': '移除圖片',
            'removenote': '移除備註',
            'resetlayout': '重新配置',
            'navigator': '導覽器',
            'selectall': '全選',
            'selectrevert': '取消全選',
            'selectsiblings': '選取下層節點',
            'selectlevel': '選取同層節點',
            'selectpath': '選取路徑',
            'selecttree': '選取樹系',
            'noteeditor': {
                'title': '標題',
                'hint': '支援 GFM 語法撰寫',
                'placeholder': '請選取節點以編輯備註文字'
            },
            'dialog': {
                'image': {
                    'title': '圖片',
                    'imagesearch': '圖片搜尋',
                    'keyword': '關鍵字',
                    'placeholder': '請輸入要搜尋的關鍵字',
                    'baidu': '百度',
                    'linkimage': '連結圖片',
                    'linkurl': '連結位址',
                    'placeholder2': '必填：以 http(s):// 開頭',
                    'imagehint': '提示訊息',
                    'placeholder3': '選填：當游標在圖片上懸停時顯示的訊息',
                    'preview': '圖片預覽',
                    'uploadimage': '上傳圖片',
                    'selectfile': '選擇檔案...',
                    'ok': '確定',
                    'cancel': '取消',
                    'formatinfo': '附檔名只接受 jpg、gif 及 png'
                },
                'hyperlink': {
                    'title': '連結',
                    'linkurl': '連結位址',
                    'linkhint': '提示訊息',
                    'placeholder': '必填：以 http(s):// 或 ftp(s):// 開頭',
                    'placeholder2': '選填：當游標在連結上懸停時顯示的訊息',
                    'ok': '確定',
                    'cancel': '取消'

                },
                'exportnode': {
                    'title': '匯出節點',
                    'ok': '確定',
                    'cancel': '取消'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': '中心主題'
            },
            'node': {
                'arrangeup': '上移',
                'appendchildnode': '下層',
                'appendsiblingnode': '同層',
                'arrangedown': '下移',
                'removenode': '刪除',
                'appendparentnode': '上層',
                'selectall': '全選',
                'topic': '分支主題',
                'importnode': '匯入節點',
                'exportnode': '匯出節點'
            },
            'input': {
                'edit': '編輯'
            },
            'priority': {
                'main': '優先權',
                'remove': '移除',
                'esc': '返回'
            },
            'progress': {
                'main': '進度',
                'remove': '移除',
                'esc': '返回'
            },
            'history': {
                'undo': '復原',
                'redo': '取消復原'
            }
        }
    };
});
