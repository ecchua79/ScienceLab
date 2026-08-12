// ============================================
// 初一 第十二章《物体的运动》 - 名词配对题
// CHAPTER: 1c12
// ============================================
//
// 说明：
// 1. 本章为"物体的运动"章节，所有 term 均为名词类概念（运动、参照物、路程/位移、
//    速率/速度、匀速直线运动），排除了计算例题与作图步骤（例12.x 本身不单独成词）。
// 2. 采用的本章真实易混淆/陷阱对子：
//    生活中的运动 vs 科学上的机械运动、路程 vs 位移、速率 vs 速度（标量/向量）、
//    匀速率运动、平均 vs 瞬时、直线运动 vs 曲线运动、匀速直线运动。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '1c12',
  title: '第十二章：物体的运动',
  grade: 1,
};

const MATCH_GROUPS = [
  {
    groupName: '运动与参照物（陷阱：生活中的运动 vs 科学上的机械运动 / 直线运动 vs 曲线运动）',
    pairs: [
      { id: 'p1a', term: '机械运动', definition: '在科学上，运动是指物体在空间中的位置随时间发生变化的运动(mechanical motion)；一般是由力的作用引起的。' },
      { id: 'p1b', term: '参照物', definition: '一个物体是否运动，必须要先选择另一个物体作为比较的标准，这个被选作标准的物体(reference body)。' },
      { id: 'p1c', term: '相对运动', definition: '科学上所说的运动(relative motion)，也就是物体相对于参照物的运动；所选择的参照物不一样，结果也可能不同。' },
      { id: 'p1d', term: '直线运动', definition: '机械运动的一类：譬如汽车在直行的道路上行驶、自由落体等。' },
      { id: 'p1e', term: '曲线运动', definition: '机械运动的一类：譬如汽车绕圆环行驶、过山车、海盗船等。' },
      { id: 'p1f', term: '路程', definition: '定义为"物体运动时所经过的路径长度"，国际标准单位为米(metre，单位符号为 m)。' },
      { id: 'p1g', term: '位移', definition: '定义为"物体在运动过程中，其位置的变化量"，是有大小、有方向的量；国际标准单位为米(metre，单位符号为 m)。' },
    ]
  },
  {
    groupName: '速率与速度（陷阱：速率 vs 速度 / 平均 vs 瞬时）',
    pairs: [
      { id: 'p3a', term: '速率', definition: '科学家以物体每单位时间内所经过的路程来表示运动快慢，即路程与所花时间的比值(speed)；只有大小，没有方向。' },
      { id: 'p3b', term: '速度', definition: '科学家(velocity)来表达物体在运动过程中每单位时间内位置的变化量；由于与位移有关，因此它除了有大小，也有方向。' },
      { id: 'p3c', term: '平均速率', definition: '物体在长时间的运动过程中，运动的快慢很难保持一致，利用公式计算出来的速率只能算是一种平均值(average speed)。' },
      { id: 'p3d', term: '瞬时速率', definition: '把物体运动所经过的时间缩短到接近于零，此时所得的平均速率就可以反映物体在那一瞬间真正运动的快慢的速率(instantaneous speed)。' },
      { id: 'p3e', term: '平均速度', definition: '利用公式计算出来的速度只能算是一种平均值(average velocity)。' },
      { id: 'p3f', term: '瞬时速度', definition: '把物体运动所经过的时间缩短到接近于零，此时所得的平均速度就可以反映物体在那一瞬间位置变化的快慢(instantaneous velocity)。' },
      { id: 'p3g', term: '匀速直线运动', definition: '当我们随着电动扶梯运动时，每单位时间内所经过的路程都相同，方向也没有改变(rectilinear motion with uniform velocity)。' },
      { id: 'p3h', term: '匀速率运动', definition: '物体在运动过程中，运动的快慢始终没有改变，即速率没有改变(motion of uniform speed)。' },
    ]
  }
];

