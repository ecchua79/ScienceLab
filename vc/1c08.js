// 章节数据文件：1c08 - 声音的产生、传播与特性
// 用于「找错字：科学校对社」游戏引擎（game.html）动态加载
// 使用方式：与引擎文件放在同一资料夹，并在引擎的 CHAPTER_LIST 里
// 加上一行 { file: "1c08.js", label: "1c08 · 波与声音" }
//
// ⚠ 转档说明：原始素材里多段正文用【】多标记了1-2个没有候选词数据的词
// （如段落a的"响度"、段落j的"远程""慢"），已拿掉方括号处理成不可点击的
// 普通文字，确保每段仍是15个可用关键词。原文中"益众老师"已订正为"逸众老师"。

window.CURRENT_CHAPTER = {
  id: "1c08",
  title: "声音",

  passages: [
    {
      id: "1c08-a",
      article:
        "同学们，你们有没有发现，当窗外刮起大风时，玻璃窗会【轻微】地摇晃，并发出“呜呜”声？" +
        "当我们大声说话，手摸喉咙也能感觉到【振动】。科学告诉我们，声音是伴随着物体的振动而【产生】的。" +
        "那个【最初】发出振动的物体，我们称之为【声源】。如果物体【停止】了振动，声音也会随之【消失】。" +
        "有趣的是，我们可以利用仪器记录这种振动规律，这就是机械式音乐盒能【保存】声音的秘密。" +
        "声音就像落入水中的石子，会向周围【扩散】出声波。如果在这个过程中，介质粒子运动得越【快】，" +
        "能量传递就越【高效】。在标准状况下，声音在空气中的传播是【持续】的，且【向外】延伸。" +
        "若我们将声带的运动幅度【增加】，声音的响度也会随之变大。在【15℃】的空气中，我们能清晰听到彼此的交谈。",
      keywords: [
        { id: 1,  type: "A", correct: "轻微", distractors: ["剧烈", "缓慢"] },
        { id: 2,  type: "A", correct: "振动", distractors: ["静止", "旋转"] },
        { id: 3,  type: "A", correct: "产生", distractors: ["消失", "隐藏"] },
        { id: 4,  type: "A", correct: "最初", distractors: ["最后", "中间"] },
        { id: 5,  type: "A", correct: "声源", distractors: ["介质", "接收器"] },
        { id: 6,  type: "A", correct: "停止", distractors: ["开始", "继续"] },
        { id: 7,  type: "A", correct: "消失", distractors: ["产生", "增强"] },
        { id: 8,  type: "A", correct: "保存", distractors: ["丢弃", "遗忘"] },
        { id: 9,  type: "A", correct: "扩散", distractors: ["聚拢", "收缩"] },
        { id: 10, type: "A", correct: "快",   distractors: ["慢", "稳"] },
        { id: 11, type: "A", correct: "高效", distractors: ["低效", "缓慢"] },
        { id: 12, type: "A", correct: "持续", distractors: ["中断", "瞬间"] },
        { id: 13, type: "A", correct: "向外", distractors: ["向内", "向上"] },
        { id: 14, type: "A", correct: "增加", distractors: ["减少", "维持"] },
        { id: 15, type: "B", correct: "15℃", distractors: ["15K", "15℉", "150℃"] }
      ]
    },
    {
      id: "1c08-b",
      article:
        "声音是一个非常“大牌”的旅行者，它【离不开】传播介质。无论是气体、液体还是【固体】，" +
        "只要有粒子在，它就能传播。但是，在【真空】环境中，因为没有任何粒子来传递振动，" +
        "所以声音【无法】传递。这就是为什么在太空中，宇航员必须通过【无线电】通讯。" +
        "有趣的是，声音在不同介质中的速度大不相同。在空气中它走得最【慢】，在液体中会变【快】，" +
        "而在固体中则是跑得【最快】。这是因为固体的粒子排列得最【紧密】，振动传递得更【直接】。" +
        "比如声音在水中的速度大约是【1500m/s】，而在钢铁中竟然可以达到【5000m/s】！" +
        "这种由于介质【密度】不同导致的差异，使得声音在固体中的传播效果更【好】。" +
        "如果我们【减少】介质的密度，声音的速度通常也会随之下降。",
      keywords: [
        { id: 1,  type: "A", correct: "离不开", distractors: ["独立于", "伴随着"] },
        { id: 2,  type: "A", correct: "固体",   distractors: ["真空", "虚空"] },
        { id: 3,  type: "A", correct: "真空",   distractors: ["介质", "稠密"] },
        { id: 4,  type: "A", correct: "无法",   distractors: ["能够", "迅速"] },
        { id: 5,  type: "A", correct: "无线电", distractors: ["声波", "气流"] },
        { id: 6,  type: "A", correct: "慢",     distractors: ["快", "稳"] },
        { id: 7,  type: "A", correct: "快",     distractors: ["慢", "停"] },
        { id: 8,  type: "A", correct: "最快",   distractors: ["最慢", "一般"] },
        { id: 9,  type: "A", correct: "紧密",   distractors: ["疏松", "混乱"] },
        { id: 10, type: "A", correct: "直接",   distractors: ["间接", "缓慢"] },
        { id: 11, type: "B", correct: "1500m/s", distractors: ["1500km/h", "340m/s", "150.0m/s"] },
        { id: 12, type: "B", correct: "5000m/s", distractors: ["5000cm/s", "500.0m/s", "5000km/s"] },
        { id: 13, type: "A", correct: "密度",   distractors: ["温度", "质量"] },
        { id: 14, type: "A", correct: "好",     distractors: ["差", "弱"] },
        { id: 15, type: "A", correct: "减少",   distractors: ["增加", "保持"] }
      ]
    },
    {
      id: "1c08-c",
      article:
        "温度是影响声速的另一个关键因素。逸众老师常提醒大家，气温越高，空气粒子的振动就越【剧烈】，" +
        "这会使声音的传播速度【加快】。在【15℃】的空气中，声速是【340m/s】。" +
        "如果气温每【升高】了【1℃】，声速就会【增加】大约【0.6m/s】。这意味着在炎热的午后，" +
        "声音跑得比在凉爽的清晨更【快】。相反，如果高度【增加】导致气温【下降】，声速也会跟着【减慢】。" +
        "在阴雨天的白天，地面气温【较低】，声音不容易传向远方。但在晴朗的傍晚，地面热量向空中辐射，" +
        "温度随高度【上升】，这种温差变化会改变声音的传播路径，让我们更【容易】听到远处的声音。",
      keywords: [
        { id: 1,  type: "A", correct: "剧烈", distractors: ["缓慢", "轻微"] },
        { id: 2,  type: "A", correct: "加快", distractors: ["减慢", "停止"] },
        { id: 3,  type: "B", correct: "15℃",  distractors: ["15℉", "0℃", "150℃"] },
        { id: 4,  type: "B", correct: "340m/s", distractors: ["340km/h", "1500m/s", "34.0m/s"] },
        { id: 5,  type: "A", correct: "升高", distractors: ["降低", "恒定"] },
        { id: 6,  type: "B", correct: "1℃",   distractors: ["1K", "10℃", "1.0%"] },
        { id: 7,  type: "A", correct: "增加", distractors: ["减少", "维持"] },
        { id: 8,  type: "B", correct: "0.6m/s", distractors: ["0.6km/h", "6.0m/s", "60cm/s"] },
        { id: 9,  type: "A", correct: "快",   distractors: ["慢", "准"] },
        { id: 10, type: "A", correct: "增加", distractors: ["减少", "消失"] },
        { id: 11, type: "A", correct: "下降", distractors: ["上升", "保持"] },
        { id: 12, type: "A", correct: "减慢", distractors: ["加快", "瞬间"] },
        { id: 13, type: "A", correct: "较低", distractors: ["较高", "极高"] },
        { id: 14, type: "A", correct: "上升", distractors: ["下降", "波动"] },
        { id: 15, type: "A", correct: "容易", distractors: ["困难", "复杂"] }
      ]
    },
    {
      id: "1c08-d",
      article:
        "当你在山谷大喊，声音碰到山壁会【弹】回来，这就是回声。回声的原理是声波遇到了【障碍物】产生了【反射】。" +
        "为什么我们在普通课室里听不到回声呢？那是因为我们距离墙壁太【近】。" +
        "人耳要分辨原声和回声，时间差必须【大于】大约【0.1s】。如果距离【缩短】，回声回来得太【快】，" +
        "就会和原声【重叠】在一起。虽然在小房间分不清回声，但这会让声音听起来更【响亮】，" +
        "所以浴室歌王们唱得特别好听。如果我们想要【消除】回声，就需要【增加】表面的【粗糙】程度来【吸收】能量。" +
        "反之，【坚硬】的墙面则会增强反射效果。",
      keywords: [
        { id: 1,  type: "A", correct: "弹",   distractors: ["吸", "穿"] },
        { id: 2,  type: "A", correct: "障碍物", distractors: ["介质", "虚空"] },
        { id: 3,  type: "A", correct: "反射", distractors: ["折射", "吸收"] },
        { id: 4,  type: "A", correct: "近",   distractors: ["远", "高"] },
        { id: 5,  type: "A", correct: "大于", distractors: ["小于", "等于"] },
        { id: 6,  type: "B", correct: "0.1s", distractors: ["0.1min", "1.0s", "10ms"] },
        { id: 7,  type: "A", correct: "缩短", distractors: ["拉长", "改变"] },
        { id: 8,  type: "A", correct: "快",   distractors: ["慢", "稳"] },
        { id: 9,  type: "A", correct: "重叠", distractors: ["分离", "消失"] },
        { id: 10, type: "A", correct: "响亮", distractors: ["微弱", "尖锐"] },
        { id: 11, type: "A", correct: "消除", distractors: ["增强", "保持"] },
        { id: 12, type: "A", correct: "增加", distractors: ["减少", "维持"] },
        { id: 13, type: "A", correct: "粗糙", distractors: ["光滑", "坚硬"] },
        { id: 14, type: "A", correct: "吸收", distractors: ["反射", "释放"] },
        { id: 15, type: "A", correct: "坚硬", distractors: ["柔软", "潮湿"] }
      ]
    },
    {
      id: "1c08-e",
      article:
        "大自然和科技都巧妙地利用了回声。蝙蝠是夜间的猎手，它们通过【发出】高频声波并【接收】回声来判断目标，" +
        "这种方法叫【回声定位】。科学家模仿这一原理发明了【声呐】，用于探测海底的【深度】。" +
        "声呐会向水中发射【超声波】，它的频率【高于】人耳极限的【20000Hz】。如果目标正在【移动】，" +
        "反射回来的声波【音调】会产生【变化】。根据声波往返的【时间】，我们可以精准计算出【距离】。" +
        "如果我们把发射频率【调低】，探测的精度可能会【下降】。对于海中的鱼群，声呐能准确地捕捉到它们的踪迹。",
      keywords: [
        { id: 1,  type: "A", correct: "发出",   distractors: ["吸收", "阻断"] },
        { id: 2,  type: "A", correct: "接收",   distractors: ["屏蔽", "忽略"] },
        { id: 3,  type: "A", correct: "回声定位", distractors: ["无线电导航", "雷达探测"] },
        { id: 4,  type: "A", correct: "声呐",   distractors: ["望远镜", "显微镜"] },
        { id: 5,  type: "A", correct: "深度",   distractors: ["宽度", "亮度"] },
        { id: 6,  type: "A", correct: "超声波", distractors: ["次声波", "无线电波"] },
        { id: 7,  type: "A", correct: "高于",   distractors: ["低于", "等于"] },
        { id: 8,  type: "B", correct: "20000Hz", distractors: ["20000dB", "20Hz", "200kHz"] },
        { id: 9,  type: "A", correct: "移动",   distractors: ["静止", "消失"] },
        { id: 10, type: "A", correct: "音调",   distractors: ["响度", "音色"] },
        { id: 11, type: "A", correct: "变化",   distractors: ["恒定", "消失"] },
        { id: 12, type: "A", correct: "时间",   distractors: ["速度", "质量"] },
        { id: 13, type: "A", correct: "距离",   distractors: ["温度", "密度"] },
        { id: 14, type: "A", correct: "调低",   distractors: ["调高", "维持"] },
        { id: 15, type: "A", correct: "下降",   distractors: ["上升", "保持"] }
      ]
    },
    {
      id: "1c08-f",
      article:
        "声音是有“性格”的，我们称之为乐音三要素。首先是【音调】，它决定了声音的【高低】。" +
        "当你拨动吉他弦，弦振动得越【快】，【频率】就越【高】，声音听起来就越尖。" +
        "频率的单位是【Hz】。人耳能听到的最低频率是【20Hz】。其次是【响度】，代表声音的【强弱】。" +
        "如果你用力敲鼓，鼓面的【振幅】变【大】，声音就变【响】。最后是【音色】，这是声音的“指纹”。" +
        "即使音调和响度完全【相同】，由于材料不同，钢琴和小提琴的声音听起来也完全【不同】。",
      keywords: [
        { id: 1,  type: "A", correct: "音调", distractors: ["响度", "音色"] },
        { id: 2,  type: "A", correct: "高低", distractors: ["强弱", "特征"] },
        { id: 3,  type: "A", correct: "快",   distractors: ["慢", "稳"] },
        { id: 4,  type: "A", correct: "频率", distractors: ["振幅", "周期"] },
        { id: 5,  type: "A", correct: "高",   distractors: ["低", "稳"] },
        { id: 6,  type: "B", correct: "Hz",   distractors: ["dB", "m/s", "kg"] },
        { id: 7,  type: "B", correct: "20Hz", distractors: ["20dB", "20000Hz", "0.2Hz"] },
        { id: 8,  type: "A", correct: "响度", distractors: ["音调", "音色"] },
        { id: 9,  type: "A", correct: "强弱", distractors: ["高低", "甜咸"] },
        { id: 10, type: "A", correct: "振幅", distractors: ["频率", "波长"] },
        { id: 11, type: "A", correct: "大",   distractors: ["小", "窄"] },
        { id: 12, type: "A", correct: "响",   distractors: ["弱", "尖"] },
        { id: 13, type: "A", correct: "音色", distractors: ["响度", "频率"] },
        { id: 14, type: "A", correct: "相同", distractors: ["不同", "相反"] },
        { id: 15, type: "A", correct: "不同", distractors: ["相同", "相似"] }
      ]
    },
    {
      id: "1c08-g",
      article:
        "有些声音让人愉悦，有些则让人抓狂，后者就是【噪音】。物理学上，噪音源于物体的【无规则】振动。" +
        "我们用【分贝】来衡量声音的强弱，符号是【dB】。逸众老师提醒大家，长期处于【90dB】以上的环境，" +
        "会损伤耳朵的【听觉感受器】，引发【耳鸣】。在住宅区，白天的噪音不应超过【50dB】。" +
        "为了保护听力，我们可以从三方面【控制】噪音：第一是在【声源】处，比如装消音器；" +
        "第二是在传播【过程】中，比如【植树】来隔离；第三是在【接收】处，比如戴耳塞。" +
        "如果噪音水平【下降】，我们的心理压力也会随之【减轻】。",
      keywords: [
        { id: 1,  type: "A", correct: "噪音", distractors: ["乐音", "超声波"] },
        { id: 2,  type: "A", correct: "无规则", distractors: ["有规律", "持续性"] },
        { id: 3,  type: "A", correct: "分贝", distractors: ["赫兹", "瓦特"] },
        { id: 4,  type: "B", correct: "dB",   distractors: ["Hz", "kg", "m"] },
        { id: 5,  type: "B", correct: "90dB", distractors: ["90Hz", "40dB", "9.0dB"] },
        { id: 6,  type: "A", correct: "听觉感受器", distractors: ["视觉感受器", "触觉神经"] },
        { id: 7,  type: "A", correct: "耳鸣", distractors: ["失明", "眩晕"] },
        { id: 8,  type: "B", correct: "50dB", distractors: ["50Hz", "100dB", "5.0dB"] },
        { id: 9,  type: "A", correct: "控制", distractors: ["增加", "忽略"] },
        { id: 10, type: "A", correct: "声源", distractors: ["介质", "接收端"] },
        { id: 11, type: "A", correct: "过程", distractors: ["结果", "起点"] },
        { id: 12, type: "A", correct: "植树", distractors: ["伐木", "铺路"] },
        { id: 13, type: "A", correct: "接收", distractors: ["发射", "传递"] },
        { id: 14, type: "A", correct: "下降", distractors: ["上升", "维持"] },
        { id: 15, type: "A", correct: "减轻", distractors: ["增加", "消失"] }
      ]
    },
    {
      id: "1c08-h",
      article:
        "声波其实是一种【纵波】。这意味着介质粒子的振动方向与波的传播方向在【同一条直线上】。" +
        "想象一下，音叉振动时【挤压】周围的空气，形成疏密相间的【波】。这种挤压过程是【连续】的。" +
        "当声波进入耳朵，它会带动鼓膜【振动】。如果声源的频率【增加】，每秒钟产生的疏密波数量就会【增多】。" +
        "当声音在水中传播时，水分子的【间距】比空气分子更【小】，这使得能量【损失】更少。" +
        "这也是为什么在水底，即使声音传播得更【远】，响度依然维持得较【好】。" +
        "若介质【消失】，这种波动也会立即【中断】。",
      keywords: [
        { id: 1,  type: "A", correct: "纵波", distractors: ["横波", "电磁波"] },
        { id: 2,  type: "A", correct: "同一条直线上", distractors: ["垂直方向", "随机方向"] },
        { id: 3,  type: "A", correct: "挤压", distractors: ["拉伸", "吸引"] },
        { id: 4,  type: "A", correct: "波",   distractors: ["粒子", "射线"] },
        { id: 5,  type: "A", correct: "连续", distractors: ["间断", "瞬间"] },
        { id: 6,  type: "A", correct: "振动", distractors: ["静止", "膨胀"] },
        { id: 7,  type: "A", correct: "增加", distractors: ["减少", "稳定"] },
        { id: 8,  type: "A", correct: "增多", distractors: ["减少", "恒定"] },
        { id: 9,  type: "A", correct: "间距", distractors: ["质量", "速度"] },
        { id: 10, type: "A", correct: "小",   distractors: ["大", "等"] },
        { id: 11, type: "A", correct: "损失", distractors: ["获得", "增加"] },
        { id: 12, type: "A", correct: "远",   distractors: ["近", "慢"] },
        { id: 13, type: "A", correct: "好",   distractors: ["差", "弱"] },
        { id: 14, type: "A", correct: "消失", distractors: ["出现", "增加"] },
        { id: 15, type: "A", correct: "中断", distractors: ["持续", "加强"] }
      ]
    },
    {
      id: "1c08-i",
      article:
        "为什么录影棚的墙壁总是凹凸不平且铺满海绵？这里面藏着【吸收】声音的科学。" +
        "逸众老师告诉大家，声波被反射还是吸收，取决于材料的【软硬】。【坚硬】且光滑的表面，如大理石，" +
        "非常擅长【反射】声波；而【柔软】且粗糙的表面，如海绵，则能有效地【阻断】回声。" +
        "通过【增加】吸音材料的厚度，我们可以进一步【减少】噪音的反射。在建筑设计中，" +
        "使用【双层】玻璃可以利用中间的空气层来【削弱】声音。如果在两层玻璃之间抽成【真空】，" +
        "隔音效果会达到【最大化】。这种设计能让室内的安静程度【提升】，" +
        "即便室外是【100dB】的街道，室内依然保持约【30dB】的宁静。",
      keywords: [
        { id: 1,  type: "A", correct: "吸收", distractors: ["释放", "反射"] },
        { id: 2,  type: "A", correct: "软硬", distractors: ["颜色", "气味"] },
        { id: 3,  type: "A", correct: "坚硬", distractors: ["柔软", "液体"] },
        { id: 4,  type: "A", correct: "反射", distractors: ["吸收", "折射"] },
        { id: 5,  type: "A", correct: "柔软", distractors: ["坚硬", "金属"] },
        { id: 6,  type: "A", correct: "阻断", distractors: ["加强", "诱导"] },
        { id: 7,  type: "A", correct: "增加", distractors: ["减少", "保持"] },
        { id: 8,  type: "A", correct: "减少", distractors: ["增加", "忽略"] },
        { id: 9,  type: "A", correct: "双层", distractors: ["单层", "透明"] },
        { id: 10, type: "A", correct: "削弱", distractors: ["增强", "保持"] },
        { id: 11, type: "B", correct: "真空", distractors: ["0Pa", "100kPa", "1atm"] },
        { id: 12, type: "A", correct: "最大化", distractors: ["最小化", "平均化"] },
        { id: 13, type: "A", correct: "提升", distractors: ["下降", "维持"] },
        { id: 14, type: "B", correct: "100dB", distractors: ["100Hz", "10dB", "1000dB"] },
        { id: 15, type: "B", correct: "30dB", distractors: ["30Hz", "80dB", "3.0dB"] }
      ]
    },
    {
      id: "1c08-j",
      article:
        "不同动物发声的方式各具特色。人类靠声带振动，青蛙靠【气囊】发声，而鸟类则拥有独特的【鸣管】。" +
        "有趣的是，哺乳动物通常只在【呼气】时发声，而鸟类在【吸气】时也能鸣叫。" +
        "这种【生理】结构的差异决定了它们声音的【音色】。如果我们【改变】发声体的振动频率，" +
        "【音调】就会随之【波动】。对于人耳来说，如果声音频率【降低】到【20Hz】以下，" +
        "我们就听不到了，这叫【次声波】；如果【升高】到【20000Hz】以上，同样也听不到，这叫【超声波】。" +
        "大象能利用次声波进行远程交流，因为这种波在空气中衰减得更慢。",
      keywords: [
        { id: 1,  type: "A", correct: "气囊", distractors: ["声带", "翅膀"] },
        { id: 2,  type: "A", correct: "鸣管", distractors: ["咽喉", "肺部"] },
        { id: 3,  type: "A", correct: "呼气", distractors: ["憋气", "吞咽"] },
        { id: 4,  type: "A", correct: "吸气", distractors: ["憋气", "停止"] },
        { id: 5,  type: "A", correct: "生理", distractors: ["化学", "物理"] },
        { id: 6,  type: "A", correct: "音色", distractors: ["响度", "温度"] },
        { id: 7,  type: "A", correct: "改变", distractors: ["维持", "忽略"] },
        { id: 8,  type: "A", correct: "音调", distractors: ["颜色", "质量"] },
        { id: 9,  type: "A", correct: "波动", distractors: ["恒定", "消失"] },
        { id: 10, type: "A", correct: "降低", distractors: ["增加", "维持"] },
        { id: 11, type: "B", correct: "20Hz", distractors: ["20dB", "20000Hz", "2Hz"] },
        { id: 12, type: "A", correct: "次声波", distractors: ["超声波", "乐音"] },
        { id: 13, type: "A", correct: "升高", distractors: ["降低", "恒定"] },
        { id: 14, type: "B", correct: "20000Hz", distractors: ["20000dB", "20Hz", "20kHz"] },
        { id: 15, type: "A", correct: "超声波", distractors: ["次声波", "噪音"] }
      ]
    }
  ]
};
