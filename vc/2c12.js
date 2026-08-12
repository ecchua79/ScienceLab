// 章节数据文件：2c12 - 天体和宇宙（天体、星座、恒星亮度与温度、生命周期、星系、天体系统、大爆炸）
// 用于「找错字：科学校对社」游戏引擎（game.html）动态加载
// 使用方式：与引擎文件放在同一资料夹，并在引擎的 CHAPTER_LIST 里
// 加上一行 { file: "2c12.js", label: "2c12 · 天体和宇宙" }
// 本文件由第12章 docx 撰写 10 段科普短文，每段 15 个关键词（A 概念型 / B 数值单位型）。

window.CURRENT_CHAPTER = {
  "id": "2c12",
  "title": "天体和宇宙",
  "passages": [
    {
      "id": "2c12-a",
      "article": "晴朗夜空洒满星斗，这些亮点大多是【恒星】，少数是【行星】、【卫星】、【小行星】、【彗星】、【星团】、【星云】与【星系】等其他【天体】。人类发射的则叫【人造天体】。恒星是由气体尘埃组成的【发光】球体，最熟悉的是【太阳】与【月球】，它们离地球很【近】，因此最【耀眼】明亮。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "恒星", "distractors": ["行星", "卫星", "彗星"]},
    {"id": 2, "type": "A", "correct": "行星", "distractors": ["恒星", "卫星", "彗星"]},
    {"id": 3, "type": "A", "correct": "卫星", "distractors": ["恒星", "行星", "彗星"]},
    {"id": 4, "type": "A", "correct": "小行星", "distractors": ["行星", "恒星", "卫星"]},
    {"id": 5, "type": "A", "correct": "彗星", "distractors": ["行星", "恒星", "卫星"]},
    {"id": 6, "type": "A", "correct": "星团", "distractors": ["星系", "星云", "星座"]},
    {"id": 7, "type": "A", "correct": "星云", "distractors": ["星团", "星系", "星座"]},
    {"id": 8, "type": "A", "correct": "星系", "distractors": ["星团", "星云", "星座"]},
    {"id": 9, "type": "A", "correct": "天体", "distractors": ["物体", "物质", "现象"]},
    {"id": 10, "type": "A", "correct": "人造天体", "distractors": ["天然天体", "自然天体", "原始天体"]},
    {"id": 11, "type": "A", "correct": "发光", "distractors": ["吸热", "反光", "发热"]},
    {"id": 12, "type": "A", "correct": "太阳", "distractors": ["月亮", "地球", "火星"]},
    {"id": 13, "type": "A", "correct": "月球", "distractors": ["太阳", "地球", "火星"]},
    {"id": 14, "type": "A", "correct": "近", "distractors": ["远", "高", "低"]},
    {"id": 15, "type": "A", "correct": "耀眼", "distractors": ["暗淡", "微弱", "隐蔽"]}
  ]
    },
    {
      "id": "2c12-b",
      "article": "太阳与月球离地球很【近】，是最【耀眼】天体。地球大气将阳光【散射】，使【白天】看不到其他星；【满月】夜月光也被散射，可见星较【少】。天空呈【蓝色】正因散射；无大气的月球天空是【黑】的。辨认星空从【星座】入手，【古人】将亮星连成图案，国际天文学联合会于【1930】年【统一】划分为【88】个星座。星图标注星星【位置】，四季有代表【亮星】。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "近", "distractors": ["远", "高", "低"]},
    {"id": 2, "type": "A", "correct": "耀眼", "distractors": ["暗淡", "微弱", "隐蔽"]},
    {"id": 3, "type": "A", "correct": "散射", "distractors": ["吸收", "反射", "折射"]},
    {"id": 4, "type": "A", "correct": "白天", "distractors": ["黑夜", "傍晚", "清晨"]},
    {"id": 5, "type": "A", "correct": "满月", "distractors": ["新月", "残月", "弦月"]},
    {"id": 6, "type": "A", "correct": "少", "distractors": ["多", "丰", "密"]},
    {"id": 7, "type": "A", "correct": "蓝色", "distractors": ["红色", "白色", "黑色"]},
    {"id": 8, "type": "A", "correct": "黑", "distractors": ["蓝", "白", "亮"]},
    {"id": 9, "type": "A", "correct": "星座", "distractors": ["星系", "星云", "星团"]},
    {"id": 10, "type": "A", "correct": "古人", "distractors": ["今人", "外人", "后人"]},
    {"id": 11, "type": "A", "correct": "1930", "distractors": ["1920", "1940", "1830"]},
    {"id": 12, "type": "A", "correct": "统一", "distractors": ["分裂", "随意", "混乱"]},
    {"id": 13, "type": "A", "correct": "88", "distractors": ["48", "100", "66"]},
    {"id": 14, "type": "A", "correct": "位置", "distractors": ["大小", "亮度", "颜色"]},
    {"id": 15, "type": "A", "correct": "亮星", "distractors": ["暗星", "微星", "行星"]}
  ]
    },
    {
      "id": "2c12-c",
      "article": "恒星明暗取决于真实亮度与距地球【距离】。天文学用【视星等】表示地球上看到的亮度，数值越【小】越亮。【太阳】视星等最【最小】，达【-26.7】，因离地球最近。【金星】最亮时达【-4.9】。【天狼星】是夜空最亮恒星，视星等【-1.44】。【心宿二】最亮时约【0.9】。【肉眼】【可见】最暗星约【6】，全天约六千多颗；望远镜可见更暗星。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "距离", "distractors": ["大小", "质量", "温度"]},
    {"id": 2, "type": "A", "correct": "视星等", "distractors": ["绝对星等", "光度", "亮度"]},
    {"id": 3, "type": "A", "correct": "小", "distractors": ["大", "中", "等"]},
    {"id": 4, "type": "A", "correct": "太阳", "distractors": ["金星", "天狼星", "月亮"]},
    {"id": 5, "type": "A", "correct": "最小", "distractors": ["最大", "较高", "较低"]},
    {"id": 6, "type": "B", "correct": "-26.7", "distractors": ["-2.67", "26.7", "-26.7 K"]},
    {"id": 7, "type": "A", "correct": "金星", "distractors": ["火星", "木星", "水星"]},
    {"id": 8, "type": "B", "correct": "-4.9", "distractors": ["-49", "4.9", "-4.9 K"]},
    {"id": 9, "type": "A", "correct": "天狼星", "distractors": ["心宿二", "太阳", "金星"]},
    {"id": 10, "type": "B", "correct": "-1.44", "distractors": ["-14.4", "1.44", "-1.44 K"]},
    {"id": 11, "type": "A", "correct": "心宿二", "distractors": ["天狼星", "太阳", "牛郎星"]},
    {"id": 12, "type": "B", "correct": "0.9", "distractors": ["9", "0.09", "0.9 K"]},
    {"id": 13, "type": "A", "correct": "肉眼", "distractors": ["望远镜", "显微镜", "眼镜"]},
    {"id": 14, "type": "A", "correct": "可见", "distractors": ["隐藏", "遮蔽", "消失"]},
    {"id": 15, "type": "B", "correct": "6", "distractors": ["60", "600", "0.6"]}
  ]
    },
    {
      "id": "2c12-d",
      "article": "恒星颜色反映其表面【温度】。太阳呈【黄色】，表面温度【5200 - 6000 K】。【天狼星】白色，【7500 - 10000 K】。【老人星】黄白色，【6000 - 7500 K】。【大角星】淡橙色，【3700 - 5200 K】。【参宿七】蓝白色，【10000 - 30000 K】。【参宿四】橙红色，【2400 - 3700 K】。颜色越蓝温度越【高】，越红则越【低】。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "温度", "distractors": ["质量", "亮度", "大小"]},
    {"id": 2, "type": "A", "correct": "黄色", "distractors": ["蓝色", "红色", "白色"]},
    {"id": 3, "type": "B", "correct": "5200 - 6000 K", "distractors": ["520-600K", "5200-6000°C", "52000-60000K"]},
    {"id": 4, "type": "A", "correct": "天狼星", "distractors": ["太阳", "老人星", "参宿七"]},
    {"id": 5, "type": "B", "correct": "7500 - 10000 K", "distractors": ["750-1000K", "7500-10000°C", "75000-100000K"]},
    {"id": 6, "type": "A", "correct": "老人星", "distractors": ["天狼星", "大角星", "参宿四"]},
    {"id": 7, "type": "B", "correct": "6000 - 7500 K", "distractors": ["600-750K", "6000-7500°C", "60000-75000K"]},
    {"id": 8, "type": "A", "correct": "大角星", "distractors": ["老人星", "参宿七", "参宿四"]},
    {"id": 9, "type": "B", "correct": "3700 - 5200 K", "distractors": ["370-520K", "3700-5200°C", "37000-52000K"]},
    {"id": 10, "type": "A", "correct": "参宿七", "distractors": ["大角星", "参宿四", "老人星"]},
    {"id": 11, "type": "B", "correct": "10000 - 30000 K", "distractors": ["1000-3000K", "10000-30000°C", "100000-300000K"]},
    {"id": 12, "type": "A", "correct": "参宿四", "distractors": ["参宿七", "大角星", "牛郎星"]},
    {"id": 13, "type": "B", "correct": "2400 - 3700 K", "distractors": ["240-370K", "2400-3700°C", "24000-37000K"]},
    {"id": 14, "type": "A", "correct": "高", "distractors": ["低", "平", "等"]},
    {"id": 15, "type": "A", "correct": "低", "distractors": ["高", "平", "等"]}
  ]
    },
    {
      "id": "2c12-e",
      "article": "恒星【诞生】始于【星云】，即【气体】与【尘埃】组成的巨大云雾状天体。当密集气体尘埃在【引力】作用下【坍缩】，形成【原恒星】。坍缩中物质【旋转】【聚集】，密度与【温度】升高。当中心足够高，【氢核聚变】开始，释放巨大【能量】。剩余气体尘埃形成【原行星盘】。约【46亿】年前太阳系也经此诞生。恒星并非【永恒】不变。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "诞生", "distractors": ["消亡", "毁灭", "消失"]},
    {"id": 2, "type": "A", "correct": "星云", "distractors": ["星团", "星系", "星座"]},
    {"id": 3, "type": "A", "correct": "气体", "distractors": ["液体", "固体", "真空"]},
    {"id": 4, "type": "A", "correct": "尘埃", "distractors": ["晶体", "离子", "分子"]},
    {"id": 5, "type": "A", "correct": "引力", "distractors": ["磁力", "浮力", "张力"]},
    {"id": 6, "type": "A", "correct": "坍缩", "distractors": ["膨胀", "消散", "分裂"]},
    {"id": 7, "type": "A", "correct": "原恒星", "distractors": ["主序星", "白矮星", "黑洞"]},
    {"id": 8, "type": "A", "correct": "旋转", "distractors": ["静止", "平移", "振动"]},
    {"id": 9, "type": "A", "correct": "聚集", "distractors": ["分散", "消散", "解体"]},
    {"id": 10, "type": "A", "correct": "温度", "distractors": ["密度", "质量", "亮度"]},
    {"id": 11, "type": "A", "correct": "氢核聚变", "distractors": ["氢裂变", "氦聚变", "核裂变"]},
    {"id": 12, "type": "A", "correct": "能量", "distractors": ["质量", "体积", "温度"]},
    {"id": 13, "type": "A", "correct": "原行星盘", "distractors": ["行星系", "星系", "星云"]},
    {"id": 14, "type": "A", "correct": "46亿", "distractors": ["46万", "460亿", "4.6亿"]},
    {"id": 15, "type": "A", "correct": "永恒", "distractors": ["短暂", "瞬息", "无常"]}
  ]
    },
    {
      "id": "2c12-f",
      "article": "恒星能量主要来自中心【核聚变】，氢聚变成氦，维持亮度与【平衡】。此阶段叫【主序星】。氢燃料终有【耗尽】之日。中等质量恒星（如【太阳】）将演化成数百倍大的【红巨星】。【核心】坍缩，外层【抛射】成【行星状星云】，【白矮星】成【黑矮星】。白矮星无法再核反应，逐渐【冷却】。【质量】越【大】寿命越【短】。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "核聚变", "distractors": ["核裂变", "化学反应", "热辐射"]},
    {"id": 2, "type": "A", "correct": "平衡", "distractors": ["失衡", "倾斜", "崩解"]},
    {"id": 3, "type": "A", "correct": "主序星", "distractors": ["原恒星", "红巨星", "白矮星"]},
    {"id": 4, "type": "A", "correct": "耗尽", "distractors": ["充满", "盈余", "积累"]},
    {"id": 5, "type": "A", "correct": "太阳", "distractors": ["天狼星", "参宿七", "金星"]},
    {"id": 6, "type": "A", "correct": "红巨星", "distractors": ["白矮星", "黑洞", "星云"]},
    {"id": 7, "type": "A", "correct": "核心", "distractors": ["表面", "外层", "边缘"]},
    {"id": 8, "type": "A", "correct": "抛射", "distractors": ["吸收", "聚集", "收缩"]},
    {"id": 9, "type": "A", "correct": "行星状星云", "distractors": ["星系", "星团", "彗星"]},
    {"id": 10, "type": "A", "correct": "白矮星", "distractors": ["红巨星", "黑洞", "中子星"]},
    {"id": 11, "type": "A", "correct": "黑矮星", "distractors": ["白矮星", "红巨星", "行星"]},
    {"id": 12, "type": "A", "correct": "冷却", "distractors": ["升温", "燃烧", "爆发"]},
    {"id": 13, "type": "A", "correct": "质量", "distractors": ["体积", "亮度", "温度"]},
    {"id": 14, "type": "A", "correct": "大", "distractors": ["小", "中", "等"]},
    {"id": 15, "type": "A", "correct": "短", "distractors": ["长", "久", "恒"]}
  ]
    },
    {
      "id": "2c12-g",
      "article": "大质量恒星演化成【红超巨星】，半径可达太阳【1000】倍以上。末期剧烈【爆炸】成【超新星】，亮度可比整个【星系】。若【残核】质量小于太阳约【3】倍，形成【中子星】；大于【3】倍则形成【黑洞】，其引力强到连【光】也无法【逃脱】。黑洞中心密度【无限】大。质量更小的【红矮星】可存活上兆年，体型【巨大】。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "红超巨星", "distractors": ["红巨星", "白矮星", "黑洞"]},
    {"id": 2, "type": "A", "correct": "1000", "distractors": ["100", "10000", "10"]},
    {"id": 3, "type": "A", "correct": "爆炸", "distractors": ["坍缩", "凝聚", "静止"]},
    {"id": 4, "type": "A", "correct": "超新星", "distractors": ["新星", "流星", "彗星"]},
    {"id": 5, "type": "A", "correct": "星系", "distractors": ["星云", "星团", "星座"]},
    {"id": 6, "type": "A", "correct": "残核", "distractors": ["外层", "表面", "边缘"]},
    {"id": 7, "type": "B", "correct": "3", "distractors": ["1", "30", "300"]},
    {"id": 8, "type": "A", "correct": "中子星", "distractors": ["白矮星", "黑洞", "行星"]},
    {"id": 9, "type": "A", "correct": "3", "distractors": ["1", "30", "300"]},
    {"id": 10, "type": "A", "correct": "黑洞", "distractors": ["白矮星", "中子星", "星云"]},
    {"id": 11, "type": "A", "correct": "光", "distractors": ["热", "声", "电"]},
    {"id": 12, "type": "A", "correct": "逃脱", "distractors": ["捕获", "吸引", "困住"]},
    {"id": 13, "type": "A", "correct": "无限", "distractors": ["有限", "零", "微小"]},
    {"id": 14, "type": "A", "correct": "红矮星", "distractors": ["红巨星", "白矮星", "太阳"]},
    {"id": 15, "type": "A", "correct": "巨大", "distractors": ["微小", "有限", "零"]}
  ]
    },
    {
      "id": "2c12-h",
      "article": "恒星、气体与尘埃在【引力】下【组成】更大系统【星系】。可观测宇宙约【2兆】个星系。按【形态】分【椭圆星系】、【螺旋星系】与【不规则星系】。我们位于【银河系】，它由至少【1000亿】颗恒星组成，中心有约【400万】太阳质量的黑洞。太阳系在【猎户臂】上，距银河【核心】约【2.6万】光年。夏季面向核心故较【亮】。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "引力", "distractors": ["磁力", "浮力", "张力"]},
    {"id": 2, "type": "A", "correct": "组成", "distractors": ["拆解", "分离", "dismantle"]},
    {"id": 3, "type": "A", "correct": "星系", "distractors": ["星团", "星云", "星座"]},
    {"id": 4, "type": "A", "correct": "2兆", "distractors": ["2亿", "2万", "2000"]},
    {"id": 5, "type": "A", "correct": "形态", "distractors": ["颜色", "温度", "质量"]},
    {"id": 6, "type": "A", "correct": "椭圆星系", "distractors": ["螺旋星系", "不规则星系", "星团"]},
    {"id": 7, "type": "A", "correct": "螺旋星系", "distractors": ["椭圆星系", "不规则星系", "星云"]},
    {"id": 8, "type": "A", "correct": "不规则星系", "distractors": ["椭圆星系", "螺旋星系", "星团"]},
    {"id": 9, "type": "A", "correct": "银河系", "distractors": ["太阳系", "星系群", "星云"]},
    {"id": 10, "type": "B", "correct": "1000亿", "distractors": ["100亿", "1000万", "10000亿"]},
    {"id": 11, "type": "B", "correct": "400万", "distractors": ["40万", "4000万", "4万"]},
    {"id": 12, "type": "A", "correct": "猎户臂", "distractors": ["盾牌臂", "英仙臂", "矩尺臂"]},
    {"id": 13, "type": "A", "correct": "核心", "distractors": ["边缘", "表面", "外层"]},
    {"id": 14, "type": "B", "correct": "2.6万", "distractors": ["2600", "26万", "2.6亿"]},
    {"id": 15, "type": "A", "correct": "亮", "distractors": ["暗", "淡", "弱"]}
  ]
    },
    {
      "id": "2c12-i",
      "article": "天体运动与【引力】形成【层次】分明的【天体系统】。【行星系】由恒星与绕其行星组成，地球所在称【太阳系】。银河系与【相邻】几十个星系组成【本星系群】，更大的称【室女座超星系团】，最大的称【总星系】（可观测宇宙）。【光年】是【长度】单位，指光在【真空】一年走的距离，约【9.46兆】千米。天体间距离极【大】，故用光年计量，距银河中心约【2.6万】光年。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "引力", "distractors": ["磁力", "浮力", "张力"]},
    {"id": 2, "type": "A", "correct": "层次", "distractors": ["混乱", "无序", "零散"]},
    {"id": 3, "type": "A", "correct": "天体系统", "distractors": ["天体群", "星系", "星云"]},
    {"id": 4, "type": "A", "correct": "行星系", "distractors": ["恒星系", "星系群", "星云"]},
    {"id": 5, "type": "A", "correct": "太阳系", "distractors": ["银河系", "本星系群", "行星系"]},
    {"id": 6, "type": "A", "correct": "相邻", "distractors": ["遥远", "孤立", "隔绝"]},
    {"id": 7, "type": "A", "correct": "本星系群", "distractors": ["室女座超星系团", "总星系", "银河系"]},
    {"id": 8, "type": "A", "correct": "室女座超星系团", "distractors": ["本星系群", "总星系", "银河系"]},
    {"id": 9, "type": "A", "correct": "总星系", "distractors": ["本星系群", "室女座超星系团", "银河系"]},
    {"id": 10, "type": "B", "correct": "光年", "distractors": ["年", "千米", "公里"]},
    {"id": 11, "type": "B", "correct": "长度", "distractors": ["质量", "时间", "面积"]},
    {"id": 12, "type": "B", "correct": "真空", "distractors": ["空气", "水", "固体"]},
    {"id": 13, "type": "B", "correct": "9.46兆", "distractors": ["9.46", "946兆", "0.946兆"]},
    {"id": 14, "type": "A", "correct": "大", "distractors": ["小", "微", "细"]},
    {"id": 15, "type": "B", "correct": "2.6万", "distractors": ["2600", "26万", "2.6亿"]}
  ]
    },
    {
      "id": "2c12-j",
      "article": "目前最被接受的宇宙【起源】模型是【大爆炸理论】。约【138亿】年前，宇宙由【密度】极大、【温度】极高状态诞生，迅速【膨胀】并不断【扩张】至今。1922年弗里德曼首提膨胀想法，1929年【哈勃】通过【观测】发现星系越远【远离】越快。1998年发现膨胀在【加速】。科学家【持续】【探索】以【完善】这一【理论】。",
      "keywords": [
    {"id": 1, "type": "A", "correct": "起源", "distractors": ["终结", "毁灭", "消亡"]},
    {"id": 2, "type": "A", "correct": "大爆炸理论", "distractors": ["恒稳态理论", "收缩理论", "循环理论"]},
    {"id": 3, "type": "B", "correct": "138亿", "distractors": ["138万", "1380亿", "13.8亿"]},
    {"id": 4, "type": "A", "correct": "密度", "distractors": ["稀疏", "稀薄", "真空"]},
    {"id": 5, "type": "A", "correct": "温度", "distractors": ["质量", "亮度", "大小"]},
    {"id": 6, "type": "A", "correct": "膨胀", "distractors": ["收缩", "坍缩", "静止"]},
    {"id": 7, "type": "A", "correct": "扩张", "distractors": ["收缩", "坍缩", "凝聚"]},
    {"id": 8, "type": "A", "correct": "哈勃", "distractors": ["爱因斯坦", "伽利略", "牛顿"]},
    {"id": 9, "type": "A", "correct": "观测", "distractors": ["臆测", "想象", "假设"]},
    {"id": 10, "type": "A", "correct": "远离", "distractors": ["靠近", "接近", "趋近"]},
    {"id": 11, "type": "A", "correct": "加速", "distractors": ["减速", "停止", "逆转"]},
    {"id": 12, "type": "A", "correct": "持续", "distractors": ["中断", "停止", "暂停"]},
    {"id": 13, "type": "A", "correct": "探索", "distractors": ["放弃", "忽略", "终止"]},
    {"id": 14, "type": "A", "correct": "完善", "distractors": ["破坏", "推翻", "废弃"]},
    {"id": 15, "type": "A", "correct": "理论", "distractors": ["假说", "偶然", "例外"]}
  ]
    }
  ]
};
