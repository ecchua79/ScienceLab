// ============================================
// 初一 第十三章《太阳系》 - 名词配对题
// CHAPTER: 1c13
// ============================================
//
// 说明：
// 1. 本章为"太阳系"章节，所有 term 均为名词类概念（太阳系成员、太阳结构、太阳活动、
//    天体分类、卫星、流星现象），排除了监测任务清单与具体数据表格。
// 2. 采用的本章真实易混淆/陷阱对子：
//    恒星 vs 行星 vs 矮行星 vs 太阳系小天体、行星 vs 卫星、小行星 vs 彗星、
//    流星 vs 陨石、本影 vs 半影、太阳活动极大期 vs 极小期、天然卫星 vs 人造卫星。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '1c13',
  title: '第十三章：太阳系',
  grade: 1,
};

const MATCH_GROUPS = [
  {
    groupName: '太阳系成员（陷阱：恒星 vs 行星 vs 矮行星 vs 太阳系小天体）',
    pairs: [
      { id: 'p1a', term: '太阳系', definition: '主宰是太阳，它位于其中心；太阳巨大的质量所产生的引力，牵引着其内各天体，使它们按一定的轨道围绕着它运转。' },
      { id: 'p1b', term: '恒星', definition: '古人称呼天空中位置固定、形成永恒星空背景的天体(star)；比如太阳。' },
      { id: 'p1c', term: '行星', definition: '在太阳系内的天体，同时符合三个条件：围绕太阳公转、拥有足够质量呈近乎球体形状、能够清除自身轨道上的其他天体。' },
      { id: 'p1d', term: '矮行星', definition: '一颗天体如果只是围绕太阳公转、近乎球体形状，比如冥王星。' },
      { id: 'p1e', term: '太阳系小天体', definition: '一颗天体如果只能满足围绕太阳公转的条件，它将被归类为(small Solar System body, SSSB)。' },
    ]
  },
  {
    groupName: '太阳的结构与活动（陷阱：内部结构 vs 大气结构 / 太阳活动极大期 vs 极小期）',
    pairs: [
      { id: 'p2a', term: '核反应区', definition: '(core)是太阳的中心与能量来源，能量由此处的核聚变反应所产生，温度可高达1500万℃。' },
      { id: 'p2b', term: '光球层', definition: '(photosphere)是太阳大气中最底的一层，一般称为太阳的表面，我们所见到太阳的可见光几乎全是由它发出的。' },
      { id: 'p2c', term: '色球层', definition: '(chromosphere)是光球层之上的橙红热气层，只有在日全食时或使用特殊设备才可见；温度可从几千到几十万摄氏度。' },
      { id: 'p2d', term: '日冕层', definition: '(corona)是太阳大气的最外层，延伸范围非常广，只有在日全食时或使用日冕仪才可见；温度可高达几百万摄氏度。' },
      { id: 'p2e', term: '太阳活动', definition: '太阳的大气受到太阳磁场的支配，时时刻刻处于局部的激烈运动之中，如黑子群的出没、日珥的变化、耀斑及日冕物质抛射等。' },
      { id: 'p2f', term: '太阳活动极大期', definition: '太阳黑子数处于高峰值时的时期(solar maximum)。' },
      { id: 'p2g', term: '太阳活动极小期', definition: '太阳黑子数处于低峰值时的时期(solar minimum)。' },

    ]
  },
  {
    groupName: '小行星与彗星（陷阱：小行星 vs 彗星 / 流星 vs 陨石）',
    pairs: [
      { id: 'p3a', term: '小行星', definition: '(asteroid)大部分集中在火星和木星轨道之间的小行星带，主要由岩石和金属组成。' },
      { id: 'p3b', term: '彗星', definition: '(comet)源自于太阳系外侧的柯伊伯带或更遥远的奥尔特云，主要由冰物质和少许岩石、尘埃组成，有时被叫做"脏雪球"；接近太阳时会释气并展示出尾巴。' },
      { id: 'p3c', term: '流星体', definition: '太阳系里还漂浮着更小的固体块(meteoroid)，多数源自于彗星或小行星，或是天体之间撞击时喷发出来的碎片。' },
      { id: 'p3d', term: '流星', definition: '当流星体被地球的引力吸引而进入大气层时，因高速压缩空气而发热发光，并在星空中瞬间划出光迹的现象(meteor / shooting star)。' },
      { id: 'p3e', term: '陨石', definition: '较大的流星体或小行星未能在天空中烧尽，撞击地球后产生的残骸(meteorite)。' },
    ]
  },
  {
    groupName: '卫星系统（陷阱：天然卫星 vs 人造卫星 / 卫星 vs 母体）',
    pairs: [
      { id: 'p4a', term: '卫星', definition: '当甲物体围绕着乙物体运行，甲物体的名称(satellite)。' },
      { id: 'p4b', term: '天然卫星', definition: '(natural satellite)地球只有一个天然卫星，即月球(Moon)。' },
      { id: 'p4c', term: '人造卫星', definition: '(artificial satellite)是人类发射的卫星；地球有几千个。' },
      { id: 'p4d', term: '天文单位（AU）', definition: '太阳与地球的平均距离约为1.5亿公里，被称为一个(astronomical unit, AU)。' },
    ]
  }
];

