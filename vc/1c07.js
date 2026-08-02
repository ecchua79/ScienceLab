// 章节数据文件：1c07 - 光的现象（光的传播、反射、折射与颜色）
// 用于「找错字：科学校对社」游戏引擎（game.html）动态加载
// 使用方式：与引擎文件放在同一资料夹，并在引擎的 CHAPTER_LIST 里
// 加上一行 { file: "1c07.js", label: "1c07 · 光的现象" }
//
// ⚠ 转档说明：本章由 NotebookLM 一次生成10段，但多段候选词表列了15行、
// 实际短文中用【】标出的关键词却不足15个（详见对话说明）。以下数据
// 只保留了「短文中真的有【】标记」的关键词，段落 a/c/g 是15个，
// 其余段落介于11-14个之间，之后可视需要补齐。
// 段落c第14个关键词（漫）的干扰项原始文字有乱码，此处为合理推测，建议核对。

window.CURRENT_CHAPTER = {
  id: "1c07",
  title: "光的现象",

  passages: [
    {
      id: "1c07-a",
      article:
        "光在我们的生活中无处不在，但它并不是一种物质，而是一种特殊的【能量】形式。" +
        "科学家通过精确测量发现，光在【真空】中的传播速度是【最大】的，其数值约为【300,000 km/s】。" +
        "这意味着太阳光传到地球大约需要【500 s】的时间。然而，光在不同介质中的“车速”会有所改变。" +
        "例如，光在水中的速度会【减慢】到真空中的【3/4】，而在玻璃中则【更慢】，仅约为真空中的【2/3】。" +
        "这种速率的【改变】是导致光线发生偏折的根本原因。当光从【光疏】介质进入【光密】介质时，" +
        "它的速度会【下降】，从而导致传播【方向】发生【偏转】。",
      keywords: [
        { id: 1,  type: "A", correct: "能量",        distractors: ["物质", "质量", "力量"] },
        { id: 2,  type: "A", correct: "真空",        distractors: ["介质", "空气", "液体"] },
        { id: 3,  type: "A", correct: "最大",        distractors: ["最小", "平均", "恒定"] },
        { id: 4,  type: "B", correct: "300,000 km/s", distractors: ["300,000 m/s", "3,000 km/s", "1,080,000,000 km/h"] },
        { id: 5,  type: "B", correct: "500 s",       distractors: ["500 min", "8 s", "0.5 h"] },
        { id: 6,  type: "A", correct: "减慢",        distractors: ["加快", "维持", "停止"] },
        { id: 7,  type: "B", correct: "3/4",         distractors: ["4/3", "1/2", "0.75 m/s"] },
        { id: 8,  type: "A", correct: "更慢",        distractors: ["更快", "一样", "消失"] },
        { id: 9,  type: "B", correct: "2/3",         distractors: ["3/2", "1/3", "0.67 km"] },
        { id: 10, type: "A", correct: "改变",        distractors: ["恒定", "消失", "增加"] },
        { id: 11, type: "A", correct: "光疏",        distractors: ["光密", "透明", "均匀"] },
        { id: 12, type: "A", correct: "光密",        distractors: ["光疏", "不透明", "粗糙"] },
        { id: 13, type: "A", correct: "下降",        distractors: ["上升", "保持", "抵消"] },
        { id: 14, type: "A", correct: "方向",        distractors: ["颜色", "亮度", "能量"] },
        { id: 15, type: "A", correct: "偏转",        distractors: ["直行", "循环", "扩散"] }
      ]
    },
    {
      id: "1c07-b",
      article:
        "光有一个非常固执的脾气，那就是在同一种【均匀】介质中必须沿【直线】传播。" +
        "我们可以用带有箭头的直线，即【光线】，来表示它的路径。当光在传播途中遇到【不透明】物体阻挡时，" +
        "光线无法绕过去，就会在物体背光面形成【影子】。这种特性在生活中有很多应用，" +
        "比如古老的【皮影戏】和科学实验中的【小孔成像】。在小孔成像中，由于光线的交叉传播，" +
        "屏上会形成一个【倒立】的【实】像。如果我们将光源【靠近】小孔，屏上的像会变得更【大】。" +
        "此外，光不仅能前进，还能通过【反射】改变方向。如果让光【逆】着反射方向射入，" +
        "它会原路返回，这证明了光路是【可逆】的。",
      keywords: [
        { id: 1,  type: "A", correct: "均匀",   distractors: ["杂乱", "粗糙", "密集"] },
        { id: 2,  type: "A", correct: "直线",   distractors: ["曲线", "折线", "圆圈"] },
        { id: 3,  type: "A", correct: "光线",   distractors: ["能量", "波动", "粒子"] },
        { id: 4,  type: "A", correct: "不透明", distractors: ["透明", "半透明", "磨砂"] },
        { id: 5,  type: "A", correct: "影子",   distractors: ["虚像", "彩虹", "光圈"] },
        { id: 6,  type: "A", correct: "皮影戏", distractors: ["电影", "话剧", "摄影"] },
        { id: 7,  type: "A", correct: "小孔成像", distractors: ["折射成像", "镜面反射", "色散现象"] },
        { id: 8,  type: "A", correct: "倒立",   distractors: ["正立", "横向", "倾斜"] },
        { id: 9,  type: "A", correct: "实",     distractors: ["虚", "假", "模糊"] },
        { id: 10, type: "A", correct: "靠近",   distractors: ["远离", "接触", "对齐"] },
        { id: 11, type: "A", correct: "大",     distractors: ["小", "等大", "模糊"] },
        { id: 12, type: "A", correct: "反射",   distractors: ["折射", "吸收", "衍射"] },
        { id: 13, type: "A", correct: "逆",     distractors: ["顺", "绕", "穿"] },
        { id: 14, type: "A", correct: "可逆",   distractors: ["单向", "闭合", "发散"] }
      ]
    },
    {
      id: "1c07-c",
      article:
        "当光线射向物体表面时会发生反射。根据【反射定律】，【入射线】、反射线与【法线】必须在同一个平面上。" +
        "最关键的一点是，【反射角】永远【等于】【入射角】。如果入射角从【30°】增加到【55°】，" +
        "反射角也会同步增加到同样的数值。在互动游戏中，我们可以通过调节镜子角度来观察这一规律。" +
        "当光射向【平滑】的镜面时，会产生【规律】的【镜面】反射，使我们能看到清晰的像。" +
        "但若表面是【粗糙】的，如黑板，光线就会向【各个方向】射出，形成【漫】反射。" +
        "漫反射虽然看起来乱，但每一条光线依然【遵守】反射定律。",
      keywords: [
        { id: 1,  type: "A", correct: "反射定律", distractors: ["折射定律", "能量守恒", "惯性定律"] },
        { id: 2,  type: "A", correct: "入射线",   distractors: ["折射线", "切线", "法线"] },
        { id: 3,  type: "A", correct: "法线",     distractors: ["切线", "水平线", "铅垂线"] },
        { id: 4,  type: "A", correct: "反射角",   distractors: ["临界角", "折射角", "补角"] },
        { id: 5,  type: "A", correct: "等于",     distractors: ["大于", "小于", "垂直于"] },
        { id: 6,  type: "A", correct: "入射角",   distractors: ["偏转角", "仰角", "俯角"] },
        { id: 7,  type: "B", correct: "30°",      distractors: ["30 rad", "60°", "0.52 rad"] },
        { id: 8,  type: "B", correct: "55°",      distractors: ["55 rad", "35°", "0.96 rad"] },
        { id: 9,  type: "A", correct: "平滑",     distractors: ["崎岖", "磨砂", "潮湿"] },
        { id: 10, type: "A", correct: "规律",     distractors: ["随机", "混沌", "间断"] },
        { id: 11, type: "A", correct: "镜面",     distractors: ["漫", "透射", "吸收"] },
        { id: 12, type: "A", correct: "粗糙",     distractors: ["细腻", "透明", "金属"] },
        { id: 13, type: "A", correct: "各个方向", distractors: ["单一方向", "垂直方向", "回原方向"] },
        { id: 14, type: "A", correct: "漫",       distractors: ["镜面", "折射", "全反射"] },
        { id: 15, type: "A", correct: "遵守",     distractors: ["违反", "忽略", "改变"] }
      ]
    },
    {
      id: "1c07-d",
      article:
        "【平面镜】是我们每天都会使用的工具。它所成的像是【等大】且【正立】的。有趣的是，" +
        "这个像是无法用屏幕承接的，因此被称为【虚像】。当你站在镜子前【1.5 m】处，" +
        "你的像也会在镜后【1.5 m】处。如果你身高【1.6 m】，镜中的你同样也是这个高度。" +
        "平面镜成像还有一个重要特点，就是【横向倒置】。这就是为什么【救护车】前方的字母必须【反写】，" +
        "好让前方司机通过【后视镜】看到正确的字样。此外，如果你向镜子【走近】，" +
        "虽然看起来像变大了，但实际上像的大小保持【不变】。",
      keywords: [
        { id: 1,  type: "A", correct: "平面镜",   distractors: ["凸透镜", "凹面镜", "棱镜"] },
        { id: 2,  type: "A", correct: "等大",     distractors: ["放大", "缩小", "畸变"] },
        { id: 3,  type: "A", correct: "正立",     distractors: ["倒立", "倾斜", "旋转"] },
        { id: 4,  type: "A", correct: "虚像",     distractors: ["实像", "幻影", "阴影"] },
        { id: 5,  type: "B", correct: "1.5 m",    distractors: ["1.5 cm", "3.0 m", "150 mm"] },
        { id: 6,  type: "B", correct: "1.5 m",    distractors: ["0.75 m", "1.5 kg", "1500 cm"] },
        { id: 7,  type: "B", correct: "1.6 m",    distractors: ["1.6 cm", "3.2 m", "160 mm"] },
        { id: 8,  type: "A", correct: "横向倒置", distractors: ["上下颠倒", "比例缩小", "完全一致"] },
        { id: 9,  type: "A", correct: "救护车",   distractors: ["消防车", "警车", "私家车"] },
        { id: 10, type: "A", correct: "反写",     distractors: ["正写", "缩写", "涂黑"] },
        { id: 11, type: "A", correct: "后视镜",   distractors: ["挡风玻璃", "仪表盘", "遮阳板"] },
        { id: 12, type: "A", correct: "走近",     distractors: ["远离", "侧移", "停留"] },
        { id: 13, type: "A", correct: "不变",     distractors: ["增加", "减少", "消失"] }
      ]
    },
    {
      id: "1c07-e",
      article:
        "除了平面镜，【球面镜】在生活中也非常普遍。汤匙的内侧相当于【凹面镜】，" +
        "它能将平行光线【会聚】在一点，这个点叫作【实焦点】。因为这个特性，" +
        "它常被用于制作【太阳灶】或手电筒的【反光碗】。相反，汤匙的外侧是【凸面镜】，" +
        "它会对光线产生【发散】作用。凸面镜形成的像是【缩小】且正立的，这让它拥有更【广】的视野，" +
        "适合做汽车的【后视镜】。我们可以通过调整镜子的【曲率半径】来改变焦点位置。" +
        "如果曲率半径增加，【焦距】也会随之【变长】。",
      keywords: [
        { id: 1,  type: "A", correct: "球面镜",   distractors: ["平面镜", "棱镜", "透镜"] },
        { id: 2,  type: "A", correct: "凹面镜",   distractors: ["凸面镜", "凹透镜", "平面镜"] },
        { id: 3,  type: "A", correct: "会聚",     distractors: ["发散", "平行", "吸收"] },
        { id: 4,  type: "A", correct: "实焦点",   distractors: ["虚焦点", "盲点", "顶点"] },
        { id: 5,  type: "A", correct: "太阳灶",   distractors: ["潜望镜", "显微镜", "幻灯机"] },
        { id: 6,  type: "A", correct: "反光碗",   distractors: ["电池", "灯泡", "开关"] },
        { id: 7,  type: "A", correct: "凸面镜",   distractors: ["凹面镜", "凸透镜", "滤光片"] },
        { id: 8,  type: "A", correct: "发散",     distractors: ["会聚", "偏折", "消失"] },
        { id: 9,  type: "A", correct: "缩小",     distractors: ["放大", "等大", "倒立"] },
        { id: 10, type: "A", correct: "广",       distractors: ["窄", "深", "浅"] },
        { id: 11, type: "A", correct: "后视镜",   distractors: ["近视镜", "放大镜", "望远镜"] },
        { id: 12, type: "A", correct: "曲率半径", distractors: ["镜片厚度", "折射率", "入射角"] },
        { id: 13, type: "A", correct: "焦距",     distractors: ["像距", "物距", "弧长"] },
        { id: 14, type: "A", correct: "变长",     distractors: ["变短", "不变", "消失"] }
      ]
    },
    {
      id: "1c07-f",
      article:
        "当你观察水中的吸管时，它看起来好像“断了”，这是【折射】现象在作怪。" +
        "当光线从空气【斜】射入水中时，由于光在水中的传播速率变【慢】，光线会【向着】法线偏折。" +
        "此时，【入射角】会【大于】【折射角】。反之，如果光从水射向空气，折射角会变【大】。" +
        "这种现象会导致【视深度】比【实际】深度更【小】。例如，清澈的泳池底部看起来很【浅】，" +
        "但实际上可能非常深。我们必须利用这一原理，通过调整【入射角度】来精准命中目标。",
      keywords: [
        { id: 1,  type: "A", correct: "折射",   distractors: ["反射", "色散", "衍射"] },
        { id: 2,  type: "A", correct: "斜",     distractors: ["直", "绕", "逆"] },
        { id: 3,  type: "A", correct: "慢",     distractors: ["快", "稳", "停"] },
        { id: 4,  type: "A", correct: "向着",   distractors: ["远离", "平行于", "垂直于"] },
        { id: 5,  type: "A", correct: "入射角", distractors: ["反射角", "临界角", "仰角"] },
        { id: 6,  type: "A", correct: "大于",   distractors: ["小于", "等于", "垂直于"] },
        { id: 7,  type: "A", correct: "折射角", distractors: ["入射角", "偏转角", "补角"] },
        { id: 8,  type: "A", correct: "大",     distractors: ["小", "消失", "恒定"] },
        { id: 9,  type: "A", correct: "视深度", distractors: ["实际深度", "海拔高度", "物体长度"] },
        { id: 10, type: "A", correct: "实际",   distractors: ["虚拟", "理论", "预估"] },
        { id: 11, type: "A", correct: "小",     distractors: ["大", "相等", "波动"] },
        { id: 12, type: "A", correct: "浅",     distractors: ["深", "宽", "窄"] },
        { id: 13, type: "A", correct: "入射角度", distractors: ["折射率", "介质厚度", "光源强度"] }
      ]
    },
    {
      id: "1c07-g",
      article:
        "【透镜】是利用折射原理制成的重要光学元件。中间厚、边缘薄的是【凸透镜】，" +
        "它具有【会聚】光线的作用。如果将平行光射向它，光线会交于【右侧】的焦点。" +
        "当物体放在焦点【以内】时，它能成【放大】的虚像，这就是【放大镜】的工作原理。" +
        "而中间薄、边缘厚的是【凹透镜】，它具有【发散】光线的作用。凹透镜永远只能成【缩小】的虚像，" +
        "常用于制作【近视】眼镜。我们可以发现，随着【物距】的增加，凸透镜所成的实像会逐渐变【小】，" +
        "而【像距】也会逐渐【减小】。",
      keywords: [
        { id: 1,  type: "A", correct: "透镜",   distractors: ["球面镜", "棱镜", "平面镜"] },
        { id: 2,  type: "A", correct: "凸透镜", distractors: ["凹透镜", "凸面镜", "凹面镜"] },
        { id: 3,  type: "A", correct: "会聚",   distractors: ["发散", "反射", "吸收"] },
        { id: 4,  type: "A", correct: "右侧",   distractors: ["左侧", "中心", "表面"] },
        { id: 5,  type: "A", correct: "以内",   distractors: ["以外", "上方", "下方"] },
        { id: 6,  type: "A", correct: "放大",   distractors: ["缩小", "等大", "倒立"] },
        { id: 7,  type: "A", correct: "放大镜", distractors: ["显微镜", "望远镜", "近视镜"] },
        { id: 8,  type: "A", correct: "凹透镜", distractors: ["凸透镜", "凹面镜", "凸面镜"] },
        { id: 9,  type: "A", correct: "发散",   distractors: ["会聚", "集中", "偏折"] },
        { id: 10, type: "A", correct: "缩小",   distractors: ["放大", "等大", "扭曲"] },
        { id: 11, type: "A", correct: "近视",   distractors: ["远视", "散光", "弱视"] },
        { id: 12, type: "A", correct: "物距",   distractors: ["像距", "焦距", "半径"] },
        { id: 13, type: "A", correct: "小",     distractors: ["大", "模糊", "清晰"] },
        { id: 14, type: "A", correct: "像距",   distractors: ["物距", "焦距", "弧长"] },
        { id: 15, type: "A", correct: "减小",   distractors: ["增大", "不变", "消失"] }
      ]
    },
    {
      id: "1c07-h",
      article:
        "全反射是一种非常奇特的光学现象。当光从【光密】介质（如玻璃）射入【光疏】介质（如空气）时，" +
        "折射角会【大于】入射角。如果我们不断【增大】入射角，当折射角达到【90°】时，" +
        "此时的入射角被称为【临界角】。如果入射角继续【增加】并超过临界角，折射线就会完全【消失】，" +
        "光线全部反射回原介质，这就是【全反射】。这项原理是现代通信的基石，【光纤】就是利用光的内部全反射来导光的。" +
        "【高锟】爵士因在光纤领域的成就获得了【2009年】诺贝尔物理学奖。",
      keywords: [
        { id: 1,  type: "A", correct: "光密",   distractors: ["光疏", "透明", "均匀"] },
        { id: 2,  type: "A", correct: "光疏",   distractors: ["光密", "不透明", "粗糙"] },
        { id: 3,  type: "A", correct: "大于",   distractors: ["小于", "等于", "垂直于"] },
        { id: 4,  type: "A", correct: "增大",   distractors: ["减小", "恒定", "抵消"] },
        { id: 5,  type: "B", correct: "90°",    distractors: ["180°", "45°", "0°"] },
        { id: 6,  type: "A", correct: "临界角", distractors: ["入射角", "反射角", "补角"] },
        { id: 7,  type: "A", correct: "增加",   distractors: ["减少", "稳定", "消失"] },
        { id: 8,  type: "A", correct: "消失",   distractors: ["增强", "变亮", "变色"] },
        { id: 9,  type: "A", correct: "全反射", distractors: ["漫反射", "镜面反射", "色散"] },
        { id: 10, type: "A", correct: "光纤",   distractors: ["电线", "铜管", "水管"] },
        { id: 11, type: "A", correct: "高锟",   distractors: ["牛顿", "爱因斯坦", "伽利略"] },
        { id: 12, type: "B", correct: "2009年", distractors: ["1999年", "2019年", "1666年"] }
      ]
    },
    {
      id: "1c07-i",
      article:
        "你认为白光是最单纯的颜色吗？【牛顿】在【1666年】通过实验否定了这一观点。" +
        "他让白光通过【三棱镜】，发现白光被分解成了红、橙、黄、绿、蓝、靛、紫七种颜色，" +
        "这种现象叫作光的【色散】。色散的原因是不同颜色的光在玻璃中的传播【速率】不同。" +
        "其中，【红】光的偏折程度最【小】，而【紫】光的偏折程度最【大】。分解后的七彩色带被称为【光谱】。" +
        "彩虹的形成正是因为阳光在雨滴中发生了【折射】和色散。",
      keywords: [
        { id: 1,  type: "A", correct: "牛顿",   distractors: ["高锟", "伽利略", "达尔文"] },
        { id: 2,  type: "B", correct: "1666年", distractors: ["1866年", "1966年", "2009年"] },
        { id: 3,  type: "A", correct: "三棱镜", distractors: ["平面镜", "凸透镜", "凹透镜"] },
        { id: 4,  type: "A", correct: "色散",   distractors: ["反射", "全反射", "折射"] },
        { id: 5,  type: "A", correct: "速率",   distractors: ["质量", "温度", "响度"] },
        { id: 6,  type: "A", correct: "红",     distractors: ["紫", "绿", "黄"] },
        { id: 7,  type: "A", correct: "小",     distractors: ["大", "中等", "恒定"] },
        { id: 8,  type: "A", correct: "紫",     distractors: ["红", "蓝", "橙"] },
        { id: 9,  type: "A", correct: "大",     distractors: ["小", "消失", "平均"] },
        { id: 10, type: "A", correct: "光谱",   distractors: ["光纤", "影像", "影子"] },
        { id: 11, type: "A", correct: "折射",   distractors: ["漫反射", "镜面反射", "直线传播"] }
      ]
    },
    {
      id: "1c07-j",
      article:
        "我们之所以能看到物体的颜色，是因为物体对光进行了选择性的【反射】或【透过】。" +
        "【不透明】物体的颜色取决于它反射的色光。例如红色的【大红花】是因为它反射了【红】光，" +
        "而【吸收】了其他颜色的光。如果用绿光照射红花，红花会看起来呈【黑】色。" +
        "【透明】物体的颜色则由它透过的色光决定。此外，光有三位“大将”，称为【光的三原色】，" +
        "分别是【红】、【绿】和【蓝】。当这三种色光以【相同】强度混合时，会产生【白】光。" +
        "手机屏幕就是利用这三种颜色的小点来组合出千万种色彩的。",
      keywords: [
        { id: 1,  type: "A", correct: "反射",     distractors: ["产生", "发散", "消失"] },
        { id: 2,  type: "A", correct: "透过",     distractors: ["阻挡", "弯曲", "偏转"] },
        { id: 3,  type: "A", correct: "不透明",   distractors: ["透明", "发光", "镜面"] },
        { id: 4,  type: "A", correct: "大红花",   distractors: ["仙人掌", "绿叶", "向日葵"] },
        { id: 5,  type: "A", correct: "红",       distractors: ["蓝", "黄", "白"] },
        { id: 6,  type: "A", correct: "吸收",     distractors: ["反射", "透射", "放大"] },
        { id: 7,  type: "A", correct: "黑",       distractors: ["红", "绿", "白"] },
        { id: 8,  type: "A", correct: "透明",     distractors: ["不透明", "粗糙", "磨砂"] },
        { id: 9,  type: "A", correct: "光的三原色", distractors: ["美术三原色", "互补色", "光谱色"] },
        { id: 10, type: "A", correct: "红",       distractors: ["橙", "黄", "紫"] },
        { id: 11, type: "A", correct: "绿",       distractors: ["黄", "青", "靛"] },
        { id: 12, type: "A", correct: "蓝",       distractors: ["紫", "品红", "棕"] },
        { id: 13, type: "A", correct: "相同",     distractors: ["不同", "随机", "极弱"] },
        { id: 14, type: "A", correct: "白",       distractors: ["黑", "灰", "金"] }
      ]
    }
  ]
};
