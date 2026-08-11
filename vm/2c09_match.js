// ============================================
// 初二 第九章《简单机械》 - 名词配对题
// CHAPTER: 2c09
// ============================================
//
// 说明：
// 1. 本章为"简单机械"章节，所有 term 均为名词类概念（装置、要素、类型、
//    原理），排除了实验操作步骤与计算公式（如例9-1/例9-2 的解题过程、
//    F1l1=F2l2 的代数推导本身不单独成词，但其作为"杠杆平衡条件"概念收录）。
// 2. 采用的本章真实易混淆/陷阱对子：
//    省力杠杆 vs 费力杠杆 vs 等臂杠杆、动力 vs 阻力、动力臂 vs 阻力臂、
//    定滑轮 vs 动滑轮、杠杆 vs 滑轮（滑轮可视为变形杠杆）。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '2c09',
  title: '第九章：简单机械',
  grade: 2,
};

const MATCH_GROUPS = [
  {
    groupName: '机械与简单机械（陷阱：机械 vs 简单机械）',
    pairs: [
      { id: 'p1a', term: '机械', definition: '能够改变力的大小和方向的装置(mechanic)。' },
      { id: 'p1b', term: '简单机械', definition: '最基本的机械，其中就包括杠杆(lever)和滑轮(pulley)这两种。' },
      { id: 'p1c', term: '六大简单机械', definition: '人类发明的简单机械：杠杆、轮轴、斜面、滑轮、螺旋和楔子。' },
      { id: 'p1d', term: '杠杆', definition: '一根硬棒在力的作用下能够绕着一个固定的点转动，这根硬棒就叫做杠杆(lever)。' },
    ]
  },
  {
    groupName: '杠杆五要素（陷阱：动力 vs 阻力 / 动力臂 vs 阻力臂）',
    pairs: [
      { id: 'p2a', term: '支点', definition: '杠杆绕着转动的那个固定的点(fulcrum)。' },
      { id: 'p2b', term: '动力', definition: '能够使杠杆转动的力 F1 (effort)。' },
      { id: 'p2c', term: '阻力', definition: '阻碍杠杆转动的力 F2 (resistance)。' },
      { id: 'p2d', term: '动力臂', definition: '从支点到动力作用线的距离 l1 (effort arm)。' },
      { id: 'p2e', term: '阻力臂', definition: '从支点到阻力作用线的距离 l2 (resistance arm)。' },
    ]
  },
  {
    groupName: '杠杆类型与平衡（陷阱：省力/费力/等臂杠杆）',
    pairs: [
      { id: 'p3a', term: '省力杠杆', definition: '当动力臂大于阻力臂(l1 > l2)时的杠杆。' },
      { id: 'p3b', term: '费力杠杆', definition: '当动力臂小于阻力臂(l1 < l2)时的杠杆。' },
      { id: 'p3c', term: '等臂杠杆', definition: '当动力臂等于阻力臂(l1 = l2)时的杠杆，既不省力也不费力。' },
      { id: 'p3d', term: '杠杆平衡', definition: '杠杆在动力和阻力的共同作用下，保持静止或匀速转动状态。' },
      { id: 'p3e', term: '杠杆平衡条件', definition: '动力乘以动力臂等于阻力乘以阻力臂，用公式表示为 F1l1 = F2l2。' },
    ]
  },
  {
    groupName: '滑轮家族（陷阱：定滑轮 vs 动滑轮 / 杠杆 vs 滑轮）',
    pairs: [
      { id: 'p4a', term: '滑轮', definition: '一种周边有槽、可以绕着中心轴转动的轮子；可以视为一个变形的杠杆。' },
      { id: 'p4b', term: '定滑轮', definition: '并不会随着绳子而移动的滑轮(fixed pulley)；相当于等臂杠杆' },
      { id: 'p4c', term: '动滑轮', definition: '会随着物体的移动而移动的滑轮(movable pulley)；动滑轮相当于省力杠杆。' },
      { id: 'p4d', term: '滑轮组', definition: '实际应用时，常常将定滑轮和动滑轮组合而成的，能达到既省力也可以改变力方向的目的。' },
    ]
  },
  {
    groupName: '其它四种简单机械（陷阱：轮轴/斜面/螺旋/楔子 各自特征）',
    pairs: [
      { id: 'p5a', term: '轮轴', definition: '(wheel and axle)主要由两个大小不一的圆盘组成，其中大盘通常叫做轮，小盘通常叫做轴。' },
      { id: 'p5b', term: '斜面', definition: '(inclined plane)是有别于杠杆的另一类简单机械；虽然沿着斜面将物体移到高处比直接举高要费位移，但能起到省力的作用。' },
      { id: 'p5c', term: '螺旋', definition: '(screw)是一个变形的斜面，相当于在有限的空间将斜面的坡道做得很长，用较小的力旋转就能产生较大的向前推力。' },
      { id: 'p5d', term: '楔子', definition: '(wedge)由两个斜面组成，主要用于填充空隙以固定物体，也可以用来将物体分开。' },
    ]
  }
];

