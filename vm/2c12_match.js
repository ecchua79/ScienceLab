// ============================================
// 初二 第十二章《天体和宇宙》 - 名词配对题
// CHAPTER: 2c12
// ============================================
//
// 说明：
// 1. 本章为"天体和宇宙"章节，所有 term 均为名词类概念（天体、观测工具、恒星特征、
//    恒星演化阶段、星系类型、天体系统层级、宇宙起源），排除了观测方法与具体数据
//    （如视星等数值表、恒星温度表、哈勃观测史实不单独成词，但"视星等"概念本身收录）。
// 2. 采用的本章真实易混淆/陷阱对子：
//    占星学 vs 天文学、天体 vs 人造天体、原恒星 vs 主序星、红巨星 vs 红超巨星、
//    白矮星 vs 黑矮星、中子星 vs 黑洞、椭圆/螺旋/不规则星系、银河系 vs 银河带、
//    星团 vs 星云、光年（长度单位，非时间）。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '2c12',
  title: '第十二章：天体和宇宙',
  grade: 2,
};

const MATCH_GROUPS = [
  {
    groupName: '天体与观测（陷阱：占星学 vs 天文学 / 天体 vs 人造天体 / 星团 vs 星云）',
    pairs: [
      { id: 'p1a', term: '占星学', definition: '古时人们将天上星辰与我们有着某种关联，用来预测未来的命运和趋势(astrology)。' },
      { id: 'p1b', term: '天文学', definition: '用科学的方法探究天体和天象(astronomy)。' },
      { id: 'p1c', term: '天体', definition: '(astronomical object / celestial object)指的是宇宙中任何自然形成的单一物体，或由多个物体凝聚而成。' },
      { id: 'p1d', term: '人造天体', definition: '人类发射并在宇宙中运行的机器。' },
      { id: 'p1e', term: '星团', definition: '(star cluster)是指恒星数目超过10颗以上，并且相互之间受引力束缚的恒星集团。' },
      { id: 'p1f', term: '星云', definition: '(nebula)是由气体和尘埃物质组成的巨大云雾状天体。' },
    ]
  },
  {
    groupName: '星座与亮度（陷阱：星座 vs 星图 / 视星等）',
    pairs: [
      { id: 'p2a', term: '星座', definition: '(constellation)基本上是指一群群星星的组合。' },
      { id: 'p2b', term: '星图', definition: '星座在星空中的位置被标注的图。' },
      { id: 'p2c', term: '视星等', definition: '(apparent magnitude)表示在地球上观测到的天体亮度。' },
    ]
  },
  {
    groupName: '恒星的诞生与演化（陷阱：原恒星 vs 主序星 / 红巨星 vs 红超巨星 / 白矮星 vs 黑矮星）',
    pairs: [
      { id: 'p3a', term: '原恒星', definition: '当密集的气体和尘埃在引力作用下坍缩时，开始形成(protostar)。' },
      { id: 'p3b', term: '主序星', definition: '当中心的氢核聚变(nuclear fusion)反应开始发生，恒星开始释放巨大能量并发出光芒，这时候的恒星(main sequence star)。' },
      { id: 'p3c', term: '红巨星', definition: '中等质量的恒星（质量介于0.8至8倍太阳质量），如太阳，将演化成比原来大小数百倍大的(red giant)。' },
      { id: 'p3d', term: '白矮星', definition: '红巨星不断把外层物质抛向太空形成行星状星云，核心则形成体积很小、密度很高的(white dwarf)；已无法再发生核反应。' },
      { id: 'p3e', term: '黑矮星', definition: '白矮星随着其能量不断散发，最后将冷却成一颗看不见的(black dwarf)。' },
      { id: 'p3f', term: '红超巨星', definition: '大质量的恒星（质量大于8倍太阳质量）则演化成的(red supergiant)，半径可达太阳的1000倍以上。' },
    ]
  },
  {
    groupName: '恒星的终结与星系（陷阱：中子星 vs 黑洞 / 椭圆 vs 螺旋 vs 不规则星系 / 银河系 vs 银河带）',
    pairs: [
      { id: 'p4a', term: '超新星', definition: '红超巨星在演化的末期将剧烈爆炸形成的(supernova)；爆炸所释放的能量非常巨大，亮度可比整个星系都要亮。' },
      { id: 'p4b', term: '中子星', definition: '若超新星爆炸后核心的质量小于太阳质量的3倍左右，就会形成一颗体积极小、密度极大的(neutron star)。' },
      { id: 'p4c', term: '黑洞', definition: '若核心的质量大于太阳质量的3倍，就会形成(black hole)；其强大的引力使任何物质，甚至光也无法逃脱。' },
      { id: 'p4d', term: '椭圆星系', definition: '(elliptical galaxy)呈现椭圆形的外观，没有明显的结构，一般属于比较年老的星系，只有少量的气体尘埃，年轻的恒星也很少。' },
      { id: 'p4e', term: '螺旋星系', definition: '(spiral galaxy)拥有明显的盘状结构和旋臂；旋臂上恒星诞生率高，年轻的恒星较多，中央的核球集聚了年老的恒星。' },
      { id: 'p4f', term: '不规则星系', definition: '(irregular galaxy)外观一般是混乱、没有固定的形态，可能曾因星系之间发生碰撞、受到引力作用而被破坏变形。' },
      { id: 'p4g', term: '银河系', definition: '(Milky Way Galaxy)我们的太阳系位于的星系里；是个螺旋星系，拥有核球、盘面和两个主要的旋臂，由至少1000亿颗恒星组成。' },
      { id: 'p4h', term: '银河带', definition: '在晴朗的夜晚，我们会看到一条云雾状或密密麻麻都是星星的光带横跨天空，这是(Milky Way Band)或简称银河；由于我们位于银河系里，只能观测到银河系的一部分。' },
    ]
  },
  {
    groupName: '天体系统层级与宇宙起源（陷阱：光年是长度单位 / 行星系 vs 本星系群 vs 总星系）',
    pairs: [
      { id: 'p5a', term: '光年', definition: '长度的单位，指光在真空中一年时间内传播的距离（1光年大约为9.46兆千米）。' },
      { id: 'p5b', term: '行星系', definition: '是由恒星和围绕其运动的行星及其他天体组成的天体系统；地球位于的称为太阳系。' },
      { id: 'p5c', term: '本星系群', definition: '我们的银河系和相邻的几十个星系组成了一个更大的星系群。' },
      { id: 'p5d', term: '总星系', definition: '最大的天体系统，也称可观测宇宙。' },
      { id: 'p5e', term: '大爆炸理论', definition: '目前被广为接受的宇宙起源与演化模型(Big Bang Theory)。' },
    ]
  }
];

