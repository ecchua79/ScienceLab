// ============================================
// 初一 第十一章《力》 - 名词配对题
// CHAPTER: 1c11
// ============================================
//
// 说明：
// 1. 本章为"力"章节，所有 term 均为名词类概念（力的定义、单位、要素、向量、
//    接触/非接触力、三种性质的力、形变、摩擦），排除了计算例题与作图步骤
//    （例11.x、力的图示法步骤本身不单独成词）。
// 2. 采用的本章真实易混淆/陷阱对子：
//    力的三要素、力是向量、接触力 vs 非接触力、重力 vs 弹力 vs 摩擦力、
//    重量 vs 质量、弹性形变 vs 塑性形变、静摩擦力 vs 动摩擦力。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '1c11',
  title: '第十一章：力',
  grade: 1,
};

const MATCH_GROUPS = [
  {
    groupName: '力的基础（陷阱：力的三要素 / 力是向量）',
    pairs: [
      { id: 'p1a', term: '力', definition: '物体对物体之间的作用。' },
      { id: 'p1b', term: '牛顿', definition: '力的国际单位(Newton，单位符号为 N)，以科学家(Isaac Newton)的名字命名。' },
      { id: 'p1c', term: '测力计', definition: '测量力的大小的工具；在日常生活中使用握力计测量握力，而在实验室中则常用弹簧秤。' },
      { id: 'p1d', term: '力的三要素', definition: '力的效应里三个重要的因素：施力大小、施力方向和施力位置。' },
      { id: 'p1e', term: '向量', definition: '有大小又有方向的物理量；我们通常用一条按照比例且带有箭头的线段来表示力，其中长度代表力的大小，箭头表示方向。' },
    ]
  },
  {
    groupName: '接触力与非接触力（陷阱：接触力 vs 非接触力）',
    pairs: [
      { id: 'p2a', term: '接触力', definition: '当施力物体与受力物体相互接触后产生力的效应，我们称之为(contact force)；在生活中的推、拉、提、压、以及摩擦力都是。' },
      { id: 'p2b', term: '非接触力', definition: '若施力物体与受力物体在没有相互接触下而产生力的效应，我们称之为(non-contact force)，或称为超距力；如磁力、静电力、重力都是。' },
      { id: 'p2c', term: '磁力', definition: '(magnetic force)是一种非接触力，例如磁铁吸引铁粉的力，施力物体与受力物体无需相互接触即产生力的效应。' },
      { id: 'p2d', term: '静电力', definition: '(static electric force)是一种非接触力，例如摩擦后的塑料梳子吸引头发的力，施力物体与受力物体无需相互接触即产生力的效应。' },
    ]
  },
  {
    groupName: '三种性质的力（陷阱：重力 vs 弹力 vs 摩擦力）',
    pairs: [
      { id: 'p3a', term: '重力', definition: '物体由于天体的吸引而受到的力(gravity force)。' },
      { id: 'p3b', term: '弹力', definition: '(elastic force)是指发生弹性形变的物体由于要恢复原状，对其接触的物体产生的力。' },
      { id: 'p3c', term: '摩擦力', definition: '当一个物体在另外一个物体表面上有相对运动或有相对运动的趋势时，在两个物体的接触面上会产生一种阻碍物体发生相对运动的力。' },
    ]
  },
  {
    groupName: '重量与质量（陷阱：重量 vs 质量）',
    pairs: [
      { id: 'p4a', term: '重量', definition: '重力的大小(weight, W)；由于它也是一种力，因此它的国际单位也是牛顿(N)。' },
      { id: 'p4b', term: '质量', definition: '物体的重量(W)与它(m)成正比，它们之间的比值为 g（即 W = mg）。' },
      { id: 'p4c', term: '重力加速度', definition: '重量与质量的比值(g)；地球的g平均值为 9.8 N/kg（粗略计算可取约 10 N/kg），物体离地心越远则 g 值越小、重量越小。' },
    ]
  },
  {
    groupName: '形变与摩擦（陷阱：弹性形变 vs 塑性形变 / 静摩擦力 vs 动摩擦力）',
    pairs: [
      { id: 'p5a', term: '弹性形变', definition: '(elastic deformation)是指当使物体形变的外力撤消后，物体能恢复原状，譬如钢丝弹簧。' },
      { id: 'p5b', term: '塑性形变', definition: '当外力撤消后，固体无法恢复原状的形变(plastic deformation)，譬如铁线制成的衣架。' },
      { id: 'p5c', term: '弹性限度', definition: '指一个物体在弹性形变时所能承受的最大作用力；超过则物体无法回到原来的形状。' },
      { id: 'p5d', term: '静摩擦力', definition: '当接触的两个物体相对静止，但又有相对滑动的趋势时的摩擦力。' },
      { id: 'p5e', term: '动摩擦力', definition: '一旦物体已经运动，静摩擦力转变为动摩擦力(dynamic friction)；动摩擦力又可根据运动形式再分为滑动摩擦力(sliding friction)和滚动摩擦力(rolling friction)。' },
      { id: 'p5f', term: '滑动摩擦力', definition: '当接触的两个物体相对滑动时的摩擦力(sliding friction)。' },
      { id: 'p5g', term: '滚动摩擦力', definition: '当接触的两个物体相对滚动时的摩擦力(rolling friction)。' },
    ]
  }
];

