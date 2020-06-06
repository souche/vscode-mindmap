define(function(require, exports, module) {
    return module.exports = {
        'template': {
            'default': '思维导图',
            'tianpan': '天盘图',
            'structure': '组织结构图',
            'filetree': '目录组织图',
            'right': '逻辑结构图',
            'fish-bone': '鱼骨头图'
        },
        'theme': {
            'classic': '脑图经典',
            'classic-compact': '紧凑经典',
            'snow': '温柔冷光',
            'snow-compact': '紧凑冷光',
            'fish': '鱼骨图',
            'wire': '线框',
            'fresh-red': '清新红',
            'fresh-soil': '泥土黄',
            'fresh-green': '文艺绿',
            'fresh-blue': '天空蓝',
            'fresh-purple': '浪漫紫',
            'fresh-pink': '脑残粉',
            'fresh-red-compat': '紧凑红',
            'fresh-soil-compat': '紧凑黄',
            'fresh-green-compat': '紧凑绿',
            'fresh-blue-compat': '紧凑蓝',
            'fresh-purple-compat': '紧凑紫',
            'fresh-pink-compat': '紧凑粉',
            'tianpan':'经典天盘',
            'tianpan-compact': '紧凑天盘'
        },
        'maintopic': '中心主题',
        'topic': '分支主题',
        'panels': {
            'history': '历史',
            'template': '模板',
            'theme': '皮肤',
            'layout': '布局',
            'style': '样式',
            'font': '文字',
            'color': '颜色',
            'background': '背景',
            'insert': '插入',
            'arrange': '调整',
            'nodeop': '当前',
            'priority': '优先级',
            'progress': '进度',
            'resource': '资源',
            'note': '备注',
            'attachment': '附件',
            'word': '文字'
        },
        'ui': {
            'command': {
                'appendsiblingnode': '插入同级主题',
                'appendparentnode': '插入上级主题',
                'appendchildnode': '插入下级主题',
                'removenode': '删除',
                'editnode': '编辑',
                'arrangeup': '上移',
                'arrangedown': '下移',
                'resetlayout': '整理布局',
                'expandtoleaf': '展开全部节点',
                'expandtolevel1': '展开到一级节点',
                'expandtolevel2': '展开到二级节点',
                'expandtolevel3': '展开到三级节点',
                'expandtolevel4': '展开到四级节点',
                'expandtolevel5': '展开到五级节点',
                'expandtolevel6': '展开到六级节点',
                'fullscreen': '全屏',
                'outline': '大纲'
            },
            'search':'搜索',
            'expandtoleaf': '展开',
            'back': '返回',
            'undo': '撤销 (Ctrl + Z)',
            'redo': '重做 (Ctrl + Y)',
            'tabs': {
                'idea': '思路',
                'appearence': '外观',
                'view': '视图'
            },
            'bold': '加粗',
            'italic': '斜体',
            'forecolor': '字体颜色',
            'fontfamily': '字体',
            'fontsize': '字号',
            'layoutstyle': '主题',
            'node': '节点操作',
            'hand': '允许拖拽',
            'camera': '定位根节点',
            'zoom-in': '放大（Ctrl+）',
            'zoom-out': '缩小（Ctrl-）',
            'markers': '标签',
            'help': '帮助',
            'preference': '偏好设置',
            'expandnode': '展开到叶子',
            'collapsenode': '收起到一级节点',
            'template': '模板',
            'theme': '皮肤',
            'clearstyle': '清除样式',
            'copystyle': '复制样式',
            'pastestyle': '粘贴样式',
            'appendsiblingnode': '同级主题',
            'appendchildnode': '下级主题',
            'arrangeup': '前调',
            'arrangedown': '后调',
            'editnode': '编辑',
            'removenode': '移除',
            'priority': '优先级',
            'progress': {
                'p1': '未开始',
                'p2': '完成 1/8',
                'p3': '完成 1/4',
                'p4': '完成 3/8',
                'p5': '完成一半',
                'p6': '完成 5/8',
                'p7': '完成 3/4',
                'p8': '完成 7/8',
                'p9': '已完成',
                'p0': '清除进度'
            },
            'resource': {
                'add': '添加'
            },
            'link': '链接',
            'image': '图片',
            'note': '备注',
            'insertlink': '插入链接',
            'insertimage': '插入图片',
            'insertnote': '插入备注',
            'removelink': '移除已有链接',
            'removeimage': '移除已有图片',
            'removenote': '移除已有备注',
            'resetlayout': '整理',
            'navigator': '导航器',
            'selectall': '全选',
            'selectrevert': '反选',
            'selectsiblings': '选择兄弟节点',
            'selectlevel': '选择同级节点',
            'selectpath': '选择路径',
            'selecttree': '选择子树',
            'noteeditor': {
                'title': '备注',
                'hint': '支持 GFM 语法书写',
                'placeholder': '请选择节点编辑备注'
            },
            'dialog': {
                'image': {
                    'title': '图片',
                    'imagesearch': '图片搜索',
                    'keyword': '关键词：',
                    'placeholder': '请输入搜索的关键词',
                    'baidu': '百度一下',
                    'linkimage': '外链图片',
                    'linkurl': '链接地址：',
                    'placeholder2': '必填：以 http(s):// 开头',
                    'imagehint': '提示文本：',
                    'placeholder3': '选填：鼠标在图片上悬停时提示的文本',
                    'preview': '图片预览：',
                    'uploadimage': '上传图片',
                    'selectfile': '选择文件...',
                    'ok': '确定',
                    'cancel': '取消',
                    'formatinfo': '后缀只能是 jpg、gif 及 png'
                },
                'hyperlink': {
                    'title': '链接',
                    'linkurl': '链接地址：',
                    'linkhint': '提示文本：',
                    'placeholder': '必填：以 http(s):// 或 ftp:// 开头',
                    'placeholder2': '选填：鼠标在链接上悬停时提示的文本',
                    'ok': '确定',
                    'cancel': '取消'

                },
                'exportnode': {
                    'title': '导出节点',
                    'ok': '确定',
                    'cancel': '取消'
                }
            }
        },
        'runtime': {
            'minder': {
                'maintopic': '中心主题'
            },
            'node': {
                'arrangeup': '前移',
                'appendchildnode': '下级',
                'appendsiblingnode': '同级',
                'arrangedown': '后移',
                'removenode': '删除',
                'appendparentnode': '上级',
                'selectall': '全选',
                'topic': '分支主题',
                'importnode': '导入节点',
                'exportnode': '导出节点'
            },
            'input': {
                'edit': '编辑'
            },
            'priority': {
                'main': '优先级',
                'remove': '移除',
                'esc': '返回'
            },
            'progress': {
                'main': '进度',
                'remove': '移除',
                'esc': '返回'
            },
            'history': {
                'undo': '撤销',
                'redo': '重做'
            }
        }
    };
});