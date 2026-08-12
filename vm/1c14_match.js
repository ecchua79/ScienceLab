// ============================================
// 初一 第十四章《地月运动》 - 名词配对题
// CHAPTER: 1c14
// ============================================
//
// 说明：
// 1. 本章为"地月运动"章节，所有 term 均为名词类概念（自转/公转、近日/远日点、
//    近地/远地点、月相、日食/月食及影子、潮汐、历法类型），排除了计算与表格。
// 2. 采用的本章真实易混淆/陷阱对子：
//    自转 vs 公转、近日点 vs 远日点、近地点 vs 远地点、日食 vs 月食、
//    本影 vs 半影、大潮 vs 小潮、阳历 vs 阴历 vs 阴阳历、日全食 vs 日环食、
//    月全食 vs 月偏食。
// 3. 所有 definition 字段均直接使用教材原句，未自行改写含义。

const CHAPTER_INFO = {
  id: '1c14',
  title: '第十四章：地月运动',
  grade: 1,
};

const MATCH_GROUPS = [
  {
    groupName: '地球的运动（陷阱：自转 vs 公转 / 近日点 vs 远日点）',
    pairs: [
      { id: 'p1a', term: '地球自转', definition: '(rotation)是指地球绕着地轴旋转；一圈所需时间大约为24小时（一天），方向由西向东，从北极上空看呈逆时针方向。' },
      { id: 'p1b', term: '地球公转', definition: '地球围绕太阳运行(revolution)；一圈需大约365.242天（一年），从北极上空看呈逆时针方向绕太阳公转。' },
      { id: 'p1c', term: '地轴进动', definition: '由于太阳、月球和其他行星引力的影响，地轴指向天空的区域会像一个陀螺发生缓慢的变化，又称岁差(precession)。' },
      { id: 'p1d', term: '近日点', definition: '地球的公转轨道呈椭圆形，地球离太阳最近的位置(perihelion)，发生在每年一月初。' },
      { id: 'p1e', term: '远日点', definition: '地球离太阳最远的位置(aphelion)，发生在每年七月初。' },
    ]
  },
  {
    groupName: '月球的运动（陷阱：近地点 vs 远地点 / 月相）',
    pairs: [
      { id: 'p2a', term: '月球自转', definition: '月球的自转方向和地球一样，由西向东；月球自转一圈所需时间大约为27.3天。' },
      { id: 'p2b', term: '月球公转', definition: '月球呈逆时针方向围绕地球公转，公转周期和自转相同（约27.3天），因此月球总是以同一个面朝向地球。' },
      { id: 'p2c', term: '近地点', definition: '月球离地球最近时的位置(perigee)。' },
      { id: 'p2d', term: '远地点', definition: '月球离地球最远时的位置(apogee)。' },
      { id: 'p2e', term: '月相', definition: '月球的公转导致我们在地球上看到月球有圆缺的变化(moon phase)。' },
    ]
  },
  {
    groupName: '日食与月食（陷阱：日食 vs 月食 / 本影 vs 半影 / 日全食 vs 日环食）',
    pairs: [
      { id: 'p3a', term: '日食', definition: '当月球运行至太阳和地球之间（农历初一），三者几乎排成同一直线，月球的影子落在地球表面的现象(solar eclipse)。' },
      { id: 'p3b', term: '月食', definition: '当月球运行至地球的影子里，照射在月球的部分阳光被阻挡使月球变暗的现象(lunar eclipse)。' },
      { id: 'p3c', term: '本影', definition: '月球或地球的影子分成两个部分，即很暗的部分(umbra)。' },
      { id: 'p3d', term: '半影', definition: '月球或地球的影子分成两个部分，不那么暗的影子区域(penumbra)。' },
      { id: 'p3e', term: '日全食', definition: '若日食时月球比太阳大，月球完全遮挡太阳形成的(total solar eclipse)。' },
      { id: 'p3f', term: '日环食', definition: '若日食时月球比太阳小，太阳边缘留下一圈光亮的环，称为(annular solar eclipse)。' },
      { id: 'p3g', term: '月全食', definition: '当整个月球完全进入地球本影区，发生的现象(total lunar eclipse)。' },
      { id: 'p3h', term: '月偏食', definition: '当整个月球只有一部分月球在地球本影区内，发生的现象(partial lunar eclipse)。' },

    ]
  },
  {
    groupName: '潮汐与历法（陷阱：大潮 vs 小潮 / 阳历 vs 阴历 vs 阴阳历）',
    pairs: [
      { id: 'p4a', term: '潮汐', definition: '在沿海地区可察觉海面有个周期性涨落的现象(tide)；海面水位升至最高时叫高潮(high tide)，降至最低时叫低潮(low tide)。' },
      { id: 'p4b', term: '大潮', definition: '在新月（朔月）或满月（望月）时，太阳、月球和地球处在几乎同一直线上，形成的(spring tide)。' },
      { id: 'p4c', term: '小潮', definition: '在上弦月或下弦月时，太阳、地球和月球的位置呈90度，太阳的引力削弱了月球的引力，形成的(neap tide)。' },
      { id: 'p4d', term: '潮间带', definition: '(intertidal zone)位于高潮海面和低潮海面之间，在高潮时被海水淹没，在低潮时露出水面，环境急剧变化。' },
      { id: 'p4e', term: '阳历', definition: '依据地球绕太阳公转的周期制定的历法；我们普遍使用的公历是其中一种，四季分明、月份不反映月相。' },
      { id: 'p4f', term: '阴历', definition: '阴历依据月相变化的周期制定的历法；穆斯林使用的回历（伊斯兰历）是其中一种，月份不反映季节。' },
      { id: 'p4g', term: '阴阳历', definition: '结合了阳历和阴历的特点；华人使用的农历属于的历法，既反映月相，也通过二十四节气反映季节。' },
    ]
  }
];

