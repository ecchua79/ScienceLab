// 章节数据文件：2c10 - 能量、功和功率（能量形式、动能势能、守恒、功与功率计算）
// 用于「找错字：科学校对社」游戏引擎（game.html）动态加载
// 使用方式：与引擎文件放在同一资料夹，并在引擎的 CHAPTER_LIST 里
// 加上一行 { file: "2c10.js", label: "2c10 · 能量、功和功率" }
// 本文件由第10章 docx 撰写 10 段科普短文，每段 15 个关键词（A 概念型 / B 数值单位型）。

window.CURRENT_CHAPTER = {
  "id": "2c10",
  "title": "能量、功和功率",
  "passages": [
    {
      "id": "2c10-a",
      "article": "宇宙间一切运动都离不开【能量】。没有能量，生命无法【继续】，空气不再【流动】，星辰停止运转。能量不仅【生物】有，【非生物】也有。能量有【多种】【存在】【形式】。做机械运动的物体具有【机械能】。食物储存的能量属于【化学能】。电也叫【电能】。电能可被【转化】为其他形式，也来自【太阳】等【源头】，用来完成【任务】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "能量",
          "distractors": [
            "质量",
            "体积",
            "温度"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "继续",
          "distractors": [
            "中断",
            "停止",
            "暂停"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "流动",
          "distractors": [
            "停滞",
            "凝固",
            "静止"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "生物",
          "distractors": [
            "非生物",
            "矿物",
            "水体"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "非生物",
          "distractors": [
            "生物",
            "生命",
            "有机体"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "多种",
          "distractors": [
            "单一",
            "少数",
            "个别"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "存在",
          "distractors": [
            "消失",
            "缺失",
            "虚无"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "形式",
          "distractors": [
            "类别",
            "类型",
            "种类"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "机械能",
          "distractors": [
            "化学能",
            "电能",
            "热能"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "化学能",
          "distractors": [
            "机械能",
            "电能",
            "光能"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "电能",
          "distractors": [
            "机械能",
            "化学能",
            "热能"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "转化",
          "distractors": [
            "消灭",
            "停滞",
            "固定"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "太阳",
          "distractors": [
            "月亮",
            "星星",
            "地球"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "源头",
          "distractors": [
            "终点",
            "结尾",
            "末端"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "任务",
          "distractors": [
            "休息",
            "静止",
            "空白"
          ]
        }
      ]
    },
    {
      "id": "2c10-b",
      "article": "物体由于【运动】而具有的能量叫【动能】。行驶【汽车】、滚动【小球】都有动能。质量【越大】，动能越大；质量不变时【速度】越大，动能也越大。动能与物体的【质量】和速度有关。小钢球从【同一】【高度】滑下，质量越大推动【木块】距离【越远】；从不同高度滑下，速度越大推动距离【愈长】。综上动能【决定】于质量与速度两【因素】，两者【有关】。",
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
          "correct": "动能",
          "distractors": [
            "势能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "汽车",
          "distractors": [
            "房屋",
            "树木",
            "石头"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "小球",
          "distractors": [
            "方块",
            "木板",
            "铁块"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "越大",
          "distractors": [
            "越小",
            "不变",
            "消失"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "速度",
          "distractors": [
            "质量",
            "时间",
            "距离"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "质量",
          "distractors": [
            "体积",
            "密度",
            "形状"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "同一",
          "distractors": [
            "不同",
            "各异",
            "悬殊"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "高度",
          "distractors": [
            "深度",
            "宽度",
            "长度"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "木块",
          "distractors": [
            "铁块",
            "石块",
            "泡沫"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "越远",
          "distractors": [
            "越近",
            "越短",
            "越近"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "愈长",
          "distractors": [
            "愈短",
            "愈近",
            "等距"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "决定",
          "distractors": [
            "无关",
            "独立",
            "分离"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "因素",
          "distractors": [
            "偶然",
            "例外",
            "混乱"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "有关",
          "distractors": [
            "无关",
            "独立",
            "分离"
          ]
        }
      ]
    },
    {
      "id": "2c10-c",
      "article": "物体由于被【举高】而具有的能量叫【重力势能】。【质量】【越大】、【高度】越高，重力势能越大。物体因【弹性形变】而具有的能量叫【弹性势能】。形变的【程度】越大，恢复时【释放】能量越多。射箭拉弓都会【储存】弹性势能。当恢复【原状】时，弹性势能转化为【动能】。机械能包含动能与【势能】两大【形式】，势能即【潜在】可发的能量。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "举高",
          "distractors": [
            "降低",
            "放平",
            "落下"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "重力势能",
          "distractors": [
            "弹性势能",
            "动能",
            "热能"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "质量",
          "distractors": [
            "体积",
            "密度",
            "形状"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "高度",
          "distractors": [
            "深度",
            "宽度",
            "长度"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "越大",
          "distractors": [
            "越小",
            "不变",
            "消失"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "弹性形变",
          "distractors": [
            "永久变形",
            "破碎",
            "溶解"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "弹性势能",
          "distractors": [
            "重力势能",
            "动能",
            "热能"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "程度",
          "distractors": [
            "幅度",
            "范围",
            "数量"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "释放",
          "distractors": [
            "吸收",
            "储存",
            "封锁"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "储存",
          "distractors": [
            "释放",
            "消耗",
            "流失"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "原状",
          "distractors": [
            "变形",
            "扭曲",
            "破碎"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "动能",
          "distractors": [
            "势能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "势能",
          "distractors": [
            "动能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "形式",
          "distractors": [
            "类别",
            "类型",
            "种类"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "潜在",
          "distractors": [
            "显在",
            "表面",
            "外露"
          ]
        }
      ]
    },
    {
      "id": "2c10-d",
      "article": "机械手表的【发条】储存【弹性势能】，恢复时【转化】为秒针的【动能】。篮球【上升】时动能【转为】【重力势能】，【下落】时重力势能转化为动能。若【只有】动能与势能【相互】转化，机械能【总量】【保持】【不变】，即机械能【守恒】。这揭示能量转化的【规律】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "发条",
          "distractors": [
            "齿轮",
            "指针",
            "表盘"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "弹性势能",
          "distractors": [
            "重力势能",
            "动能",
            "热能"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "转化",
          "distractors": [
            "消灭",
            "停滞",
            "固定"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "动能",
          "distractors": [
            "势能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "上升",
          "distractors": [
            "下降",
            "平移",
            "静止"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "转为",
          "distractors": [
            "固定",
            "停滞",
            "消灭"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "重力势能",
          "distractors": [
            "弹性势能",
            "动能",
            "热能"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "下落",
          "distractors": [
            "上升",
            "悬浮",
            "静止"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "只有",
          "distractors": [
            "任一",
            "全部",
            "多种"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "相互",
          "distractors": [
            "单向",
            "独自",
            "分离"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "总量",
          "distractors": [
            "分量",
            "部分",
            "单位"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "保持",
          "distractors": [
            "改变",
            "打破",
            "丧失"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "不变",
          "distractors": [
            "改变",
            "波动",
            "丧失"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "守恒",
          "distractors": [
            "损耗",
            "消失",
            "增加"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "规律",
          "distractors": [
            "偶然",
            "例外",
            "混乱"
          ]
        }
      ]
    },
    {
      "id": "2c10-e",
      "article": "机械能可转化为【其他】能量。【水】力发电时水的重力势能转化为【动能】，推动发电机产生【电能】。风能也可转化为电能。开水热能转化为瓶塞的【运动】。光合作用将【光能】转化为【化学能】储存在【有机物】。能量转化时，【某种】形式【减少】多少，另一种就【增加】多少，【总量】【保持】不变，这就是【能量守恒】【定律】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "其他",
          "distractors": [
            "同种",
            "单一",
            "个别"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "水",
          "distractors": [
            "火",
            "风",
            "土"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "动能",
          "distractors": [
            "势能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "电能",
          "distractors": [
            "机械能",
            "化学能",
            "热能"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "运动",
          "distractors": [
            "静止",
            "凝固",
            "消失"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "光能",
          "distractors": [
            "声能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "化学能",
          "distractors": [
            "机械能",
            "电能",
            "热能"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "有机物",
          "distractors": [
            "无机物",
            "矿物",
            "金属"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "某种",
          "distractors": [
            "所有",
            "全部",
            "任一"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "减少",
          "distractors": [
            "增加",
            "保持",
            "翻倍"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "增加",
          "distractors": [
            "减少",
            "保持",
            "抵消"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "总量",
          "distractors": [
            "分量",
            "部分",
            "单位"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "保持",
          "distractors": [
            "改变",
            "打破",
            "丧失"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "能量守恒",
          "distractors": [
            "能量消失",
            "能量创生",
            "能量损耗"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "定律",
          "distractors": [
            "假说",
            "偶然",
            "例外"
          ]
        }
      ]
    },
    {
      "id": "2c10-f",
      "article": "为【量度】能量转化，引入【功】的【概念】。功等于【力】与该力【方向上】【位移】的【乘积】，即 W=Fs。在【国际】【单位制】，功的单位是【焦耳】，符号【J】。1 N 的力使物体【移动】1 m 做功【1 J】，即 1 J = 【1 N·m】。若只有力而无位移，则该力【没有】做功。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "量度",
          "distractors": [
            "忽略",
            "掩盖",
            "混淆"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "功",
          "distractors": [
            "能",
            "力",
            "功率"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "概念",
          "distractors": [
            "实物",
            "现象",
            "偶然"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "力",
          "distractors": [
            "速度",
            "质量",
            "时间"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "方向上",
          "distractors": [
            "反方向",
            "垂直",
            "无关"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "位移",
          "distractors": [
            "距离",
            "路程",
            "长度"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "乘积",
          "distractors": [
            "和",
            "差",
            "商"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "国际",
          "distractors": [
            "国内",
            "地方",
            "局部"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "单位制",
          "distractors": [
            "单位",
            "制度",
            "系统"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "焦耳",
          "distractors": [
            "瓦特",
            "牛顿",
            "千克"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "J",
          "distractors": [
            "W",
            "N",
            "kg"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "移动",
          "distractors": [
            "固定",
            "静止",
            "停留"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "1 J",
          "distractors": [
            "1 W",
            "1 N",
            "1 kg"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "1 N·m",
          "distractors": [
            "1 J·m",
            "1 N",
            "1 m²"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "没有",
          "distractors": [
            "已经",
            "正在",
            "完成"
          ]
        }
      ]
    },
    {
      "id": "2c10-g",
      "article": "例题：【重】【100 N】物体从【地面】【匀速】【提高】【1 m】，提力做功 = 100 N × 1 m = 【100 J】。若用【50 N】【水平】力【拖动】【10 m】，做功 = 50 N × 10 m = 【500 J】。举高做功较小，水平拖动做功【较大】。匀速提升时提力【等于】重力。功与力和位移都【有关】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "重",
          "distractors": [
            "轻",
            "空",
            "虚"
          ]
        },
        {
          "id": 2,
          "type": "B",
          "correct": "100 N",
          "distractors": [
            "100 kg",
            "10 N",
            "1 N"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "地面",
          "distractors": [
            "空中",
            "水下",
            "桌上"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "匀速",
          "distractors": [
            "加速",
            "减速",
            "静止"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "提高",
          "distractors": [
            "降低",
            "放平",
            "落下"
          ]
        },
        {
          "id": 6,
          "type": "B",
          "correct": "1 m",
          "distractors": [
            "1 cm",
            "10 m",
            "1 km"
          ]
        },
        {
          "id": 7,
          "type": "B",
          "correct": "100 J",
          "distractors": [
            "10 J",
            "100 W",
            "100 N"
          ]
        },
        {
          "id": 8,
          "type": "B",
          "correct": "50 N",
          "distractors": [
            "5 N",
            "500 N",
            "50 kg"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "水平",
          "distractors": [
            "竖直",
            "倾斜",
            "垂直"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "拖动",
          "distractors": [
            "抬起",
            "抛起",
            "举起"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "10 m",
          "distractors": [
            "1 m",
            "100 m",
            "10 cm"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "500 J",
          "distractors": [
            "50 J",
            "500 W",
            "500 N"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "较大",
          "distractors": [
            "较小",
            "相等",
            "微弱"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "等于",
          "distractors": [
            "大于",
            "小于",
            "无关"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "有关",
          "distractors": [
            "无关",
            "独立",
            "分离"
          ]
        }
      ]
    },
    {
      "id": "2c10-h",
      "article": "做功有【快慢】【之分】，用【功率】【描述】。功率是【单位时间】内【所做】的功，即 P=W/t。单位【瓦特】，【符号】【W】。1 s 内【完成】1 J 功，功率为【1 W】，即 1 W = 【1 J/s】。【常用】还有千瓦、兆瓦。功率越大，能量【转化】越【快】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "快慢",
          "distractors": [
            "缓急",
            "多少",
            "大小"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "之分",
          "distractors": [
            "之合",
            "之统",
            "之混"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "功率",
          "distractors": [
            "功",
            "力",
            "能量"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "描述",
          "distractors": [
            "忽略",
            "掩盖",
            "混淆"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "单位时间",
          "distractors": [
            "单位距离",
            "单位长度",
            "单位质量"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "所做",
          "distractors": [
            "所获",
            "所失",
            "无关"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "瓦特",
          "distractors": [
            "焦耳",
            "牛顿",
            "千克"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "符号",
          "distractors": [
            "单位",
            "数值",
            "名称"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "W",
          "distractors": [
            "J",
            "N",
            "kg"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "完成",
          "distractors": [
            "中断",
            "放弃",
            "停顿"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "1 W",
          "distractors": [
            "1 J",
            "1 N",
            "1 kW"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "1 J/s",
          "distractors": [
            "1 W·s",
            "1 J",
            "1 s"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "常用",
          "distractors": [
            "罕见",
            "少用",
            "禁用"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "转化",
          "distractors": [
            "消灭",
            "停滞",
            "固定"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "快",
          "distractors": [
            "慢",
            "停滞",
            "缓"
          ]
        }
      ]
    },
    {
      "id": "2c10-i",
      "article": "例题：起重机吊【质量】【1500 kg】【货物】，在【0.5 min】内【匀速】吊至【6 m】，求【功率】(g=【10 N/kg】)。【重量】 F = 1500 × 10 = 【15000 N】。【功】 W = Fs = 15000 × 6 = 【90000 J】。0.5 min = 【30 s】。功率 P = 90000 ÷ 30 = 【3000 W】 = 【3 kW】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "质量",
          "distractors": [
            "体积",
            "密度",
            "形状"
          ]
        },
        {
          "id": 2,
          "type": "B",
          "correct": "1500 kg",
          "distractors": [
            "150 kg",
            "1500 g",
            "15 kg"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "货物",
          "distractors": [
            "空物",
            "轻物",
            "虚物"
          ]
        },
        {
          "id": 4,
          "type": "B",
          "correct": "0.5 min",
          "distractors": [
            "0.5 s",
            "5 min",
            "0.5 h"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "匀速",
          "distractors": [
            "加速",
            "减速",
            "静止"
          ]
        },
        {
          "id": 6,
          "type": "B",
          "correct": "6 m",
          "distractors": [
            "6 cm",
            "60 m",
            "6 km"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "功率",
          "distractors": [
            "功",
            "力",
            "能量"
          ]
        },
        {
          "id": 8,
          "type": "B",
          "correct": "10 N/kg",
          "distractors": [
            "5 N/kg",
            "10 N/m",
            "10 kg/N"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "重量",
          "distractors": [
            "质量",
            "体积",
            "密度"
          ]
        },
        {
          "id": 10,
          "type": "B",
          "correct": "15000 N",
          "distractors": [
            "1500 N",
            "15000 kg",
            "15000 J"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "功",
          "distractors": [
            "能",
            "力",
            "功率"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "90000 J",
          "distractors": [
            "9000 J",
            "90000 N",
            "90000 W"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "30 s",
          "distractors": [
            "3 s",
            "300 s",
            "30 min"
          ]
        },
        {
          "id": 14,
          "type": "B",
          "correct": "3000 W",
          "distractors": [
            "300 W",
            "3000 J",
            "3000 N"
          ]
        },
        {
          "id": 15,
          "type": "B",
          "correct": "3 kW",
          "distractors": [
            "3 W",
            "30 kW",
            "3 MW"
          ]
        }
      ]
    },
    {
      "id": "2c10-j",
      "article": "本章学能量与【功】、【功率】。能量有机械能、化学能、电能等【形式】，可【相互】【转化】。机械能【包含】动能与【势能】。动能与势能可相互转化且【守恒】。功 = 力×【位移】，【单位】【焦耳】。功率 = 功÷【时间】，单位【瓦特】。功是能量转化的【量度】，功率是转化【快慢】的量度。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "功",
          "distractors": [
            "能",
            "力",
            "功率"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "功率",
          "distractors": [
            "功",
            "力",
            "能量"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "形式",
          "distractors": [
            "类别",
            "类型",
            "种类"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "相互",
          "distractors": [
            "单向",
            "独自",
            "分离"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "转化",
          "distractors": [
            "消灭",
            "停滞",
            "固定"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "包含",
          "distractors": [
            "排除",
            "分离",
            "遗漏"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "势能",
          "distractors": [
            "动能",
            "热能",
            "电能"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "守恒",
          "distractors": [
            "损耗",
            "消失",
            "增加"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "位移",
          "distractors": [
            "距离",
            "路程",
            "长度"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "单位",
          "distractors": [
            "数值",
            "名称",
            "符号"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "焦耳",
          "distractors": [
            "瓦特",
            "牛顿",
            "千克"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "时间",
          "distractors": [
            "空间",
            "质量",
            "体积"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "瓦特",
          "distractors": [
            "焦耳",
            "牛顿",
            "千克"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "量度",
          "distractors": [
            "忽略",
            "掩盖",
            "混淆"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "快慢",
          "distractors": [
            "缓急",
            "多少",
            "大小"
          ]
        }
      ]
    }
  ]
};
