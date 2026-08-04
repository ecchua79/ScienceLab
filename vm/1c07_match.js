// ============================================
// 初一 第七章《光》 - 名词配对题
// CHAPTER: 1c07
// ============================================

const CHAPTER_INFO = {
  id: '1c07',
  title: '第七章：光',
  grade: 1,
};

const MATCH_GROUPS = [
  {
    groupName: '光的传播',
    pairs: [
      { id: 'g1a', term: '光', definition: '一种具有一些有趣特点的能量形式' },
      { id: 'g1b', term: '光速', definition: '真空中的光速（符号为c）每秒大约前进300,000公里' },
      { id: 'g1c', term: '光线', definition: '通常用一条带有箭头的直线表示光的传播路线和方向' },
      { id: 'g1d', term: '影子', definition: '当有些光线被物体阻挡而其他光线继续沿直线传播时形成的黑暗区域' },
    ]
  },
  {
    groupName: '光的反射（陷阱：入射角/反射角）',
    pairs: [
      { id: 'g2a', term: '入射角', definition: '入射线与法线之间的夹角' },
      { id: 'g2b', term: '反射角', definition: '反射光线与法线之间的夹角' },
      { id: 'g2c', term: '法线', definition: '垂直于镜面的直线' },
      { id: 'g2d', term: '入射线', definition: '射向物体表面的光线' },
      { id: 'g2e', term: '反射线', definition: '被物体表面反射出来的光线' },
      { id: 'g2f', term: '镜面反射', definition: '当光线照射在平滑的表面时，反射出来的光线具有高度的规律性和对称性' },
      { id: 'g2g', term: '漫反射', definition: '当光线照射在粗糙的表面时，光线会不规则地朝各个方向反射' },
    ]
  },
  {
    groupName: '镜与成像（陷阱：凸面镜/凹面镜、实像/虚像）',
    pairs: [
      { id: 'g3a', term: '凸面镜', definition: '反射面向外凸出的镜子，如汤匙的外侧' },
      { id: 'g3b', term: '凹面镜', definition: '反射面向内凹的镜子，如汤匙的内侧' },
      { id: 'g3c', term: '虚像', definition: '光线实际上并没有穿过镜面形成图像，且不会在屏幕上形成图像' },
      { id: 'g3d', term: '实像', definition: '能在屏幕（光屏）上承接到的像，如凸透镜在另一侧形成的倒立图像' },
      { id: 'g3e', term: '实焦点', definition: '光线真实的聚焦点' },
      { id: 'g3f', term: '虚焦点', definition: '不是实际光线的聚焦点，而是发散光线的反向延长线会聚的点' },
      { id: 'g3g', term: '横向倒置', definition: '平面镜成实像时使图像左右相反的现象' },
    ]
  },
  {
    groupName: '光的折射与全反射（陷阱：光疏/光密介质、凸透镜/凹透镜）',
    pairs: [
      { id: 'g4a', term: '折射角', definition: '折射线与法线之间的夹角' },
      { id: 'g4b', term: '光疏介质', definition: '在这种介质中，光传播得较快' },
      { id: 'g4c', term: '光密介质', definition: '在这种介质中，光传播得较慢' },
      { id: 'g4d', term: '视深度', definition: '折射使水中的物体看起来比实际高' },
      { id: 'g4e', term: '实际深度', definition: '物体在液体中真实的物理深度' },
      { id: 'g4f', term: '凸透镜', definition: '中间厚、两边薄，可以汇聚光线的透镜' },
      { id: 'g4g', term: '凹透镜', definition: '中间薄、两边厚，可以发散光线的透镜' },
      { id: 'g4h', term: '临界角', definition: '当入射角增大到折射角达到90°时的入射角' },
      { id: 'g4i', term: '全反射', definition: '入射角超过临界角时，折射线完全消失，光线全部被反射回原介质的现象' },
      { id: 'g4j', term: '光导纤维（光纤）', definition: '利用了光的内部全反射原理来导光的装置' },
    ]
  },
  {
    groupName: '光的颜色',
    pairs: [
      { id: 'g5a', term: '可见光', definition: '人眼看到的光线，由不同颜色的光所组合而成' },
      { id: 'g5b', term: '光的色散', definition: '白光通过三棱镜后，被分解成七色光的现象' },
      { id: 'g5c', term: '光谱', definition: '不同的单色光按一定的次序排列的图案' },
      { id: 'g5d', term: '不透明物体', definition: '其颜色是由物体所反射的光决定' },
      { id: 'g5e', term: '透明物体', definition: '其颜色是由透过的光的颜色所决定' },
      { id: 'g5f', term: '光的三原色', definition: '红、绿、蓝这三种色光' },
    ]
  }
];
