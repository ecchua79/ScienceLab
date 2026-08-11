// ============================================
// 初二 第十章《能量、功和功率》 - 名词配对题
// CHAPTER: 2c10
// ============================================
//
// 说明：
// 1. 本章为"能量、功和功率"章节，所有 term 均为名词类概念（能量形式、要素、
//    物理量、单位、定律），排除了实验操作步骤与计算公式（例10-1/例10-2 的
//    解题过程、W=Fs / P=W/t 的代数推导本身不单独成词，但作为"功""功率"概念收录）。
// 2. 采用的本章真实易混淆/陷阱对子：
//    动能 vs 势能（及 重力势能 vs 弹性势能）、功 vs 功率、
//    焦耳 vs 瓦特、机械能守恒 vs 能量守恒定律、千瓦 vs 兆瓦。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '2c10',
  title: '第十章：能量、功和功率',
  grade: 2,
};

const MATCH_GROUPS = [
  {
    groupName: '能量的存在形式（陷阱：机械能 vs 化学能 vs 电能）',
    pairs: [
      { id: 'p1a', term: '能量', definition: '宇宙间的一切物质的运动和变化都离不开的。' },
      { id: 'p1b', term: '机械能', definition: '这些做机械运动的物体所具有的能量(mechanical energy)；其包括动能和势能。' },
      { id: 'p1c', term: '化学能', definition: '食物中所贮存的能量(chemical energy)；交通工具消耗燃料（汽油、柴油、煤油等）中所儲存的能量。' },
      { id: 'p1d', term: '电能', definition: '一种能量，(electrical energy)；是通过电流传递的能量，它可以被转化为其他形式的能量。' },
    ]
  },
  {
    groupName: '机械能的两种形式（陷阱：动能 vs 势能 / 重力势能 vs 弹性势能）',
    pairs: [
      { id: 'p2a', term: '动能', definition: '物体由于运动而具有的能量(kinetic energy)。' },
      { id: 'p2b', term: '势能', definition: '机械能的一种，其中主要包括重力势能(gravitational potential energy)和弹性势能(elastic potential energy)。' },
      { id: 'p2c', term: '重力势能', definition: '物体由于被举高而具有的能量。' },
      { id: 'p2d', term: '弹性势能', definition: '物体由于弹性形变而具有的能量。' },
    ]
  },
  {
    groupName: '功与功率（陷阱：功 vs 功率 / 焦耳 vs 瓦特）',
    pairs: [
      { id: 'p3a', term: '功', definition: '科学上规定，其等于力与该力方向上位移的乘积（W = Fs）。' },
      { id: 'p3b', term: '焦耳', definition: '在国际单位制中，功的单位，单位符号为J。' },
      { id: 'p3c', term: '功率', definition: '做功的快慢(power)，定义为单位时间内所做的功。' },
      { id: 'p3d', term: '瓦特', definition: '在国际单位制中，功率的单位，单位符号为W。' },
    ]
  },
  {
    groupName: '守恒与单位（陷阱：机械能守恒 vs 能量守恒定律 / 千瓦 vs 兆瓦）',
    pairs: [
      { id: 'p4a', term: '能量守恒定律', definition: '能量的形式在发生相互转化的过程中，总量保持不变(conservation of energy)。' },
      { id: 'p4b', term: '机械能守恒', definition: '如果只有动能和势能相互转化，机械能的总量保持不变(conservation of mechanical energy)。' },
      { id: 'p4c', term: '千瓦', definition: '实际应用中常用的功率单位之一，符号为kW（千瓦）。' },
      { id: 'p4d', term: '兆瓦', definition: '实际应用中常用的功率单位之一，符号为MW（兆瓦）。' },
    ]
  }
];

