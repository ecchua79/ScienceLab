// 章节数据文件：2c08 - 气压和压强（压强的定义与计算、增大减小压强、液体与气体压强、大气压）
// 用于「找错字：科学校对社」游戏引擎（game.html）动态加载
// 使用方式：与引擎文件放在同一资料夹，并在引擎的 CHAPTER_LIST 里
// 加上一行 { file: "2c08.js", label: "2c08 · 气压和压强" }
//
// 本文件由第8章 docx（初二科学 第8章 气压和压强）内容撰写 10 段科普短文，
// 每段 15 个关键词（A 概念型 / B 数值单位型）。A 类每词全文仅出现一次；
// B 类数值与单位视为整体挖空，干扰项含「数值错单位对」「单位错数值对」两类。

window.CURRENT_CHAPTER = {
  "id": "2c08",
  "title": "气压和压强",
  "passages": [
    {
      "id": "2c08-a",
      "article": "我们同时按【铅笔】两端，两指所受压力是【相同】的。但按【笔尖】的手指更痛，因为笔尖【受力面积】较【小】，压强较【大】。科学把单位【面积】所受的压力叫做【压强】，符号为【p】。压力单位是【牛顿(N)】，面积单位是【平方米(m²)】，压强单位为【N/m²】。国际单位制称它【帕斯卡(Pa)】，且【1 N/m²】等于【1 Pa】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "铅笔",
          "distractors": [
            "钢笔",
            "尺",
            "橡皮"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "相反",
            "悬殊"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "笔尖",
          "distractors": [
            "笔尾",
            "平滑端",
            "侧面"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "受力面积",
          "distractors": [
            "施力面积",
            "压力大小",
            "重力面积"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "小",
          "distractors": [
            "大",
            "相等",
            "宽阔"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "微弱",
            "消失"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "面积",
          "distractors": [
            "体积",
            "质量",
            "长度"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "压强",
          "distractors": [
            "压力",
            "重力",
            "张力"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "p",
          "distractors": [
            "F",
            "A",
            "m"
          ]
        },
        {
          "id": 10,
          "type": "B",
          "correct": "牛顿(N)",
          "distractors": [
            "千克(kg)",
            "米(m)",
            "帕斯卡(Pa)"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "平方米(m²)",
          "distractors": [
            "平方米(cm²)",
            "千克(kg)",
            "牛顿(N)"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "N/m²",
          "distractors": [
            "N/cm²",
            "kg/m²",
            "Pa·m"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "帕斯卡(Pa)",
          "distractors": [
            "牛顿(N)",
            "焦耳(J)",
            "瓦(W)"
          ]
        },
        {
          "id": 14,
          "type": "B",
          "correct": "1 N/m²",
          "distractors": [
            "2 N/m²",
            "1 kg/m²",
            "1 Pa"
          ]
        },
        {
          "id": 15,
          "type": "B",
          "correct": "1 Pa",
          "distractors": [
            "2 Pa",
            "1 N",
            "1 kPa"
          ]
        }
      ]
    },
    {
      "id": "2c08-b",
      "article": "做铅笔实验时，将铅笔【两端】同时压在两只手指上。按【笔尖】的手指明显【痛】，因为笔尖【受力面积】较【小】；按【平滑端】的手指较不痛，因为该处受力面积较【大】。把铅笔【反过来】压，痛感会转移。可见当【压力】【一样】时，受力面积越【窄】，压强的【作用效果】越【强】。压强是【单位面积】上所受的力，反映压力对物体的【作用】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "两端",
          "distractors": [
            "一端",
            "中间",
            "侧面"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "笔尖",
          "distractors": [
            "笔尾",
            "平滑端",
            "笔杆"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "痛",
          "distractors": [
            "麻",
            "凉",
            "痒"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "受力面积",
          "distractors": [
            "施力面积",
            "体积",
            "质量"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "小",
          "distractors": [
            "大",
            "相等",
            "宽阔"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "平滑端",
          "distractors": [
            "笔尖",
            "粗糙端",
            "尖端"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "微弱",
            "零"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "反过来",
          "distractors": [
            "正过来",
            "固定",
            "不动"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "压力",
          "distractors": [
            "重力",
            "浮力",
            "张力"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "一样",
          "distractors": [
            "不同",
            "悬殊",
            "相反"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "窄",
          "distractors": [
            "宽",
            "广",
            "平"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "作用效果",
          "distractors": [
            "外观",
            "颜色",
            "温度"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "强",
          "distractors": [
            "弱",
            "消失",
            "模糊"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "单位面积",
          "distractors": [
            "单位体积",
            "单位长度",
            "整体"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "作用",
          "distractors": [
            "形状",
            "颜色",
            "气味"
          ]
        }
      ]
    },
    {
      "id": "2c08-c",
      "article": "刀具用久会变【钝】，因刀口与物体【接触】面积变【大】。用力【相同】时面积越大，【压强】越【小】，【切割】越【困难】。而【锋利】的刀接触面积【细】，压强大，切割【轻松】。要【增大】压强，可【减小】受力面积；要减小压强，则增大受力面积。滑雪者用【宽】雪板来【降低】对雪地的压强。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "钝",
          "distractors": [
            "利",
            "锐",
            "尖"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "接触",
          "distractors": [
            "分离",
            "远离",
            "隔绝"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "零",
            "微弱"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "悬殊",
            "变化"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "压强",
          "distractors": [
            "压力",
            "重力",
            "浮力"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "小",
          "distractors": [
            "大",
            "恒定",
            "增强"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "切割",
          "distractors": [
            "黏合",
            "焊接",
            "抛掷"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "困难",
          "distractors": [
            "容易",
            "轻松",
            "顺手"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "锋利",
          "distractors": [
            "钝",
            "粗糙",
            "圆钝"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "细",
          "distractors": [
            "粗",
            "宽",
            "厚"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "轻松",
          "distractors": [
            "困难",
            "费力",
            "艰辛"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "增大",
          "distractors": [
            "减小",
            "保持",
            "抵消"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "减小",
          "distractors": [
            "增大",
            "保持",
            "加倍"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "宽",
          "distractors": [
            "窄",
            "细",
            "薄"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "降低",
          "distractors": [
            "升高",
            "维持",
            "加剧"
          ]
        }
      ]
    },
    {
      "id": "2c08-d",
      "article": "例题：滑雪板长【1.5 m】、宽【0.1 m】，运动员质量【60 kg】，g 取【10 N/kg】。两块板的【总】面积 = 2 × 1.5 × 0.1 = 【0.3 m²】。雪地受到的压力【等于】运动员【重力】：F = m g = 60 × 10 = 【600 N】。【平均】压强 p = F ÷ A = 600 ÷ 0.3 = 【2000 Pa】。【宽大】的雪板能【减小】压强，使人不易【陷入】雪中。一张对折报纸平铺时压强仅约【1 Pa】。",
      "keywords": [
        {
          "id": 1,
          "type": "B",
          "correct": "1.5 m",
          "distractors": [
            "2.5 m",
            "1.5 cm",
            "150 cm"
          ]
        },
        {
          "id": 2,
          "type": "B",
          "correct": "0.1 m",
          "distractors": [
            "0.2 m",
            "0.1 cm",
            "10 cm"
          ]
        },
        {
          "id": 3,
          "type": "B",
          "correct": "60 kg",
          "distractors": [
            "30 kg",
            "60 g",
            "60 t"
          ]
        },
        {
          "id": 4,
          "type": "B",
          "correct": "10 N/kg",
          "distractors": [
            "5 N/kg",
            "10 N/m",
            "10 kg/N"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "总",
          "distractors": [
            "分",
            "部",
            "单"
          ]
        },
        {
          "id": 6,
          "type": "B",
          "correct": "0.3 m²",
          "distractors": [
            "0.6 m²",
            "0.3 cm²",
            "3 m²"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "等于",
          "distractors": [
            "小于",
            "大于",
            "无关"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "重力",
          "distractors": [
            "浮力",
            "张力",
            "压力"
          ]
        },
        {
          "id": 9,
          "type": "B",
          "correct": "600 N",
          "distractors": [
            "300 N",
            "600 kg",
            "600 g"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "平均",
          "distractors": [
            "瞬间",
            "最大",
            "最小"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "2000 Pa",
          "distractors": [
            "1000 Pa",
            "2000 N",
            "2000 kPa"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "宽大",
          "distractors": [
            "窄小",
            "细薄",
            "尖利"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "减小",
          "distractors": [
            "增大",
            "保持",
            "加剧"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "陷入",
          "distractors": [
            "浮起",
            "弹起",
            "滑出"
          ]
        },
        {
          "id": 15,
          "type": "B",
          "correct": "1 Pa",
          "distractors": [
            "2 Pa",
            "1 N",
            "1 kPa"
          ]
        }
      ]
    },
    {
      "id": "2c08-e",
      "article": "压强计由一根【U形】玻璃管和【橡皮膜】组成，用于测量【液体】压强。当橡皮膜受到【压强】时，【两侧】液柱出现【高度差】。压强越【大】，高度差越【明显】。若把橡皮膜放在水中【相同】【深度】，压强【相等】时高度差也【一致】。压强计可【测量】压强大小，高度差越【强】，现象越【清楚】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "U形",
          "distractors": [
            "直线",
            "圆形",
            "方形"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "橡皮膜",
          "distractors": [
            "金属片",
            "玻璃板",
            "木板"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "液体",
          "distractors": [
            "固体",
            "气体",
            "真空"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "压强",
          "distractors": [
            "压力",
            "重力",
            "浮力"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "两侧",
          "distractors": [
            "单侧",
            "中央",
            "底部"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "高度差",
          "distractors": [
            "颜色差",
            "温度差",
            "宽度差"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "零",
            "恒定"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "明显",
          "distractors": [
            "隐约",
            "模糊",
            "消失"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "悬殊",
            "变化"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "深度",
          "distractors": [
            "高度",
            "广度",
            "密度"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "相等",
          "distractors": [
            "不等",
            "悬殊",
            "相反"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "一致",
          "distractors": [
            "不同",
            "参差",
            "相反"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "测量",
          "distractors": [
            "忽略",
            "估计",
            "猜测"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "强",
          "distractors": [
            "弱",
            "消失",
            "模糊"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "清楚",
          "distractors": [
            "模糊",
            "朦胧",
            "错乱"
          ]
        }
      ]
    },
    {
      "id": "2c08-f",
      "article": "【液体】内部会产生压强，源于【粒子】间的相互【碰撞】。液体压强随【深度】增加而【增大】。水坝因此设计成【上窄下宽】，以【承受】底部更大压强，提升【稳定】与【承载】能力。在【相同】深度，液体朝【各个方向】的压强【相等】。潜水越深，压迫感越【强】，说明压强越【大】，水下也越【危险】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "液体",
          "distractors": [
            "固体",
            "气体",
            "真空"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "粒子",
          "distractors": [
            "分子",
            "原子",
            "离子"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "碰撞",
          "distractors": [
            "分离",
            "远离",
            "静止"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "深度",
          "distractors": [
            "高度",
            "广度",
            "密度"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "增大",
          "distractors": [
            "减小",
            "不变",
            "消失"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "上窄下宽",
          "distractors": [
            "上宽下窄",
            "上下等宽",
            "上窄下窄"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "承受",
          "distractors": [
            "回避",
            "忽略",
            "卸除"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "稳定",
          "distractors": [
            "摇晃",
            "崩塌",
            "倾斜"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "承载",
          "distractors": [
            "悬浮",
            "漂浮",
            "逃避"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "悬殊",
            "变化"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "各个方向",
          "distractors": [
            "单一方向",
            "垂直方向",
            "水平方向"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "相等",
          "distractors": [
            "不等",
            "悬殊",
            "相反"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "强",
          "distractors": [
            "弱",
            "消失",
            "模糊"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "微弱",
            "零"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "危险",
          "distractors": [
            "安全",
            "舒适",
            "平稳"
          ]
        }
      ]
    },
    {
      "id": "2c08-g",
      "article": "液体在【相同】深度向【各个】【方向】压强【相等】。压强计橡皮膜放水中【同一】深度，液柱【高度差】都【一致】。此原理用于洗手台下【U形】弯管：管内【保留】一定高度【水柱】，两侧同深压强相等而【平衡】，形成【水封】。【隔绝】室内外空气，阻止臭气【回流】，保持【清洁】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "悬殊",
            "变化"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "各个",
          "distractors": [
            "单一",
            "某个",
            "特定"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "方向",
          "distractors": [
            "位置",
            "高度",
            "密度"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "相等",
          "distractors": [
            "不等",
            "悬殊",
            "相反"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "同一",
          "distractors": [
            "不同",
            "另一",
            "变化"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "高度差",
          "distractors": [
            "颜色差",
            "温度差",
            "宽度差"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "一致",
          "distractors": [
            "不同",
            "参差",
            "相反"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "U形",
          "distractors": [
            "直线",
            "圆形",
            "方形"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "保留",
          "distractors": [
            "排空",
            "流失",
            "倒掉"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "水柱",
          "distractors": [
            "气柱",
            "沙柱",
            "空管"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "平衡",
          "distractors": [
            "倾斜",
            "失衡",
            "崩塌"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "水封",
          "distractors": [
            "气封",
            "沙封",
            "空封"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "隔绝",
          "distractors": [
            "连通",
            "混合",
            "开放"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "回流",
          "distractors": [
            "外流",
            "上升",
            "扩散"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "清洁",
          "distractors": [
            "污浊",
            "恶臭",
            "混乱"
          ]
        }
      ]
    },
    {
      "id": "2c08-h",
      "article": "在【相同】深度，液体【密度】越大，压强越【大】。例如【盐水】的密度大于【淡水】，同深处盐水压强更【高】。浮力是液体【向上】对物体的推力，源于上、下【表面】的【压强差】，底部更深压强比顶部【强】，形成【浮力】。轮船从淡水驶入【海水】，浮力【增】加，【吃水】深度变【浅】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "悬殊",
            "变化"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "密度",
          "distractors": [
            "浓度",
            "温度",
            "湿度"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "微弱",
            "零"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "盐水",
          "distractors": [
            "淡水",
            "糖水",
            "油"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "淡水",
          "distractors": [
            "盐水",
            "海水",
            "污水"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "高",
          "distractors": [
            "低",
            "平",
            "等"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "向上",
          "distractors": [
            "向下",
            "向左",
            "向右"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "表面",
          "distractors": [
            "内部",
            "核心",
            "底层"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "压强差",
          "distractors": [
            "压强和",
            "压强积",
            "压力差"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "强",
          "distractors": [
            "弱",
            "消失",
            "模糊"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "浮力",
          "distractors": [
            "重力",
            "压力",
            "张力"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "海水",
          "distractors": [
            "淡水",
            "河水",
            "油"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "增",
          "distractors": [
            "减",
            "消",
            "停"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "吃水",
          "distractors": [
            "排水",
            "载货",
            "浮力"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "浅",
          "distractors": [
            "深",
            "宽",
            "厚"
          ]
        }
      ]
    },
    {
      "id": "2c08-i",
      "article": "气体由不断【运动】的粒子组成，粒子【碰撞】物体表面产生【压强】。气体粒子运动【无规则】，所以大气从【各个方向】对我们施加压强，称为【大气压】。在海平面附近，大气压约为【1.01×10⁵ Pa】，这叫【标准大气压】。粒子撞击【越多】、速度【越大】，表面压强越【大】。我们虽【感觉】不到，但它始终存在并【包围】着我们，也【持续】作用，正是【气体】粒子在撞击。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "运动",
          "distractors": [
            "静止",
            "凝固",
            "消失"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "碰撞",
          "distractors": [
            "分离",
            "远离",
            "静止"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "压强",
          "distractors": [
            "压力",
            "重力",
            "浮力"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "无规则",
          "distractors": [
            "有序",
            "规律",
            "直线"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "各个方向",
          "distractors": [
            "单一方向",
            "垂直方向",
            "水平方向"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "大气压",
          "distractors": [
            "液体压强",
            "固体压强",
            "真空压强"
          ]
        },
        {
          "id": 7,
          "type": "B",
          "correct": "1.01×10⁵ Pa",
          "distractors": [
            "1.01×10⁴ Pa",
            "1.01×10⁵ kg",
            "2.02×10⁵ Pa"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "标准大气压",
          "distractors": [
            "标准液体压",
            "普通气压",
            "真空压强"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "越多",
          "distractors": [
            "越少",
            "不变",
            "停止"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "越大",
          "distractors": [
            "越小",
            "不变",
            "消失"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "大",
          "distractors": [
            "小",
            "微弱",
            "零"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "感觉",
          "distractors": [
            "无视",
            "忽略",
            "否认"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "包围",
          "distractors": [
            "远离",
            "隔绝",
            "排斥"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "持续",
          "distractors": [
            "中断",
            "停止",
            "暂歇"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "气体",
          "distractors": [
            "液体",
            "固体",
            "真空"
          ]
        }
      ]
    },
    {
      "id": "2c08-j",
      "article": "【托里拆利】首次精确测出大气压：用约【1 m】长玻璃管灌满【水银】倒插，管内水银降至【760 mm】高的水银柱，此即【1 标准大气压】。换算：1 atm = 【1.01×10⁵ Pa】= 【760 mmHg】。海拔越【高】，大气压越【小】。在海拔【2000 m】以内，每升高约【12 m】，大气压【减小】约【133 Pa】，相当于【1 mmHg】。高山空气【稀薄】，呼吸更急促。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "托里拆利",
          "distractors": [
            "牛顿",
            "伽利略",
            "爱因斯坦"
          ]
        },
        {
          "id": 2,
          "type": "B",
          "correct": "1 m",
          "distractors": [
            "2 m",
            "1 cm",
            "100 mm"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "水银",
          "distractors": [
            "水",
            "酒精",
            "油"
          ]
        },
        {
          "id": 4,
          "type": "B",
          "correct": "760 mm",
          "distractors": [
            "760 cm",
            "76 mm",
            "760 m"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "1 标准大气压",
          "distractors": [
            "1 标准液体压",
            "半标准大气压",
            "真空压强"
          ]
        },
        {
          "id": 6,
          "type": "B",
          "correct": "1.01×10⁵ Pa",
          "distractors": [
            "1.01×10⁴ Pa",
            "1.01×10⁵ kg",
            "2.02×10⁵ Pa"
          ]
        },
        {
          "id": 7,
          "type": "B",
          "correct": "760 mmHg",
          "distractors": [
            "760 cmHg",
            "76 mmHg",
            "760 Pa"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "高",
          "distractors": [
            "低",
            "平",
            "等"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "小",
          "distractors": [
            "大",
            "恒定",
            "增强"
          ]
        },
        {
          "id": 10,
          "type": "B",
          "correct": "2000 m",
          "distractors": [
            "200 m",
            "2000 km",
            "2 m"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "12 m",
          "distractors": [
            "12 cm",
            "120 m",
            "1.2 m"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "减小",
          "distractors": [
            "增大",
            "保持",
            "加剧"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "133 Pa",
          "distractors": [
            "133 kPa",
            "13 Pa",
            "133 N"
          ]
        },
        {
          "id": 14,
          "type": "B",
          "correct": "1 mmHg",
          "distractors": [
            "1 cmHg",
            "10 mmHg",
            "1 Pa"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "稀薄",
          "distractors": [
            "浓密",
            "厚重",
            "粘稠"
          ]
        }
      ]
    }
  ]
};
