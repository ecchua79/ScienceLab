// 章节数据文件：1c01 - 什么是科学（科学的定义、态度、科学方法、实验室安全与器材、测量与单位）
// 用于「找错字：科学校对社」游戏引擎（game.html）动态加载
// 使用方式：与引擎文件放在同一资料夹，并在引擎的 CHAPTER_LIST 里
// 加上一行 { file: "1c01.js", label: "1c01 · 什么是科学" }
//
// 本文件由第1章 docx（初一科学 第1章 什么是科学）内容撰写 10 段科普短文，
// 每段 15 个关键词（A 概念型 / B 数值单位型）。A 类每词全文仅出现一次；
// B 类数值与单位视为整体挖空，干扰项含「数值错单位对」「单位错数值对」两类。

window.CURRENT_CHAPTER = {
  "id": "1c01",
  "title": "什么是科学",
  "passages": [
    {
      "id": "1c01-a",
      "article": "科学（science）并不是古人用【神话】与【想象】解释雷电风雨的传说，而是透过【系统性】的【观察】与【实验】来认识【自然世界】的方法。人类探究石头由什么【组成】、生物如何【运作】、星辰如何【运动】。科学要求我们用【事实】思考，寻找更【合理】的解释。知识始于对现象的【提问】，再经实验【检验】。严谨的科学还需【诚实】记录、保持【开明】接受新证据。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "神话",
          "distractors": [
            "科学",
            "事实",
            "逻辑"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "想象",
          "distractors": [
            "观察",
            "实验",
            "推理"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "系统性",
          "distractors": [
            "零散",
            "随机",
            "杂乱"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "观察",
          "distractors": [
            "臆测",
            "想象",
            "传说"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "实验",
          "distractors": [
            "空想",
            "神话",
            "臆断"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "自然世界",
          "distractors": [
            "神话世界",
            "幻想世界",
            "虚构世界"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "组成",
          "distractors": [
            "分解",
            "混合",
            "消散"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "运作",
          "distractors": [
            "停滞",
            "停止",
            "消失"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "运动",
          "distractors": [
            "静止",
            "停顿",
            "固定"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "事实",
          "distractors": [
            "谬误",
            "假象",
            "传说"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "合理",
          "distractors": [
            "荒谬",
            "矛盾",
            "随意"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "提问",
          "distractors": [
            "断言",
            "结论",
            "猜测"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "检验",
          "distractors": [
            "轻信",
            "忽略",
            "假定"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "诚实",
          "distractors": [
            "造假",
            "隐瞒",
            "篡改"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "开明",
          "distractors": [
            "固执",
            "偏见",
            "武断"
          ]
        }
      ]
    },
    {
      "id": "1c01-b",
      "article": "科学家具备共同的特质。首先是【好奇心】，探索新事物如何运作的渴望；其次是【诚实】，即使怀疑【数据】有误也须【如实】记录，绝不造假；再来是【开明】，对可能被【新证据】【推翻】的【理论】保持【怀疑】，并愿意【接受】新想法；最后是【责任感】，确保科学不【危害】生物与【环境】。牛顿因好奇发现地心引力；哥白尼以开明提出【日心说】推翻旧说；索尔克如实记录数据；罗特布拉特致力【减少】核武，彰显责任。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "好奇心",
          "distractors": [
            "冷漠",
            "漠视",
            "厌倦"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "诚实",
          "distractors": [
            "虚假",
            "隐瞒",
            "欺骗"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "数据",
          "distractors": [
            "传说",
            "神话",
            "谣言"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "如实",
          "distractors": [
            "篡改",
            "捏造",
            "隐瞒"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "开明",
          "distractors": [
            "固执",
            "偏执",
            "封闭"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "新证据",
          "distractors": [
            "旧结论",
            "谣言",
            "假设"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "推翻",
          "distractors": [
            "证实",
            "支持",
            "巩固"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "理论",
          "distractors": [
            "谬论",
            "传说",
            "谣言"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "怀疑",
          "distractors": [
            "盲信",
            "笃信",
            "轻信"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "接受",
          "distractors": [
            "拒绝",
            "排斥",
            "否定"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "责任感",
          "distractors": [
            "私心",
            "漠然",
            "功利"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "危害",
          "distractors": [
            "保护",
            "造福",
            "维护"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "环境",
          "distractors": [
            "自身",
            "利益",
            "机器"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "日心说",
          "distractors": [
            "地心说",
            "盖天说",
            "浑天说"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "减少",
          "distractors": [
            "增加",
            "扩张",
            "加剧"
          ]
        }
      ]
    },
    {
      "id": "1c01-c",
      "article": "科学方法以【实验】检验问题。先提出【问题】，再建立【假设】解释现象，如红砂糖在热水中溶解得【较快】。接着设计【公平测试】，【识别】三类【变数】：主动改变的【操纵性变数】（水温）、随之改变的【反应性变数】（溶解时间）、保持不变的【固定性变数】。例如比较红砂糖在【20°C】与热水中的溶解时间，除水温外其他条件都须【相同】。最后分析【结果】、得出【结论】，若不符则修正假设，循环【探究】直至找到答案。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "实验",
          "distractors": [
            "空想",
            "臆测",
            "传说"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "问题",
          "distractors": [
            "答案",
            "结论",
            "定论"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "假设",
          "distractors": [
            "结论",
            "事实",
            "定论"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "较快",
          "distractors": [
            "较慢",
            "一样",
            "停滞"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "公平测试",
          "distractors": [
            "偏颇测试",
            "随意测试",
            "主观测试"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "识别",
          "distractors": [
            "混淆",
            "忽略",
            "掩盖"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "变数",
          "distractors": [
            "常数",
            "定值",
            "恒量"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "操纵性变数",
          "distractors": [
            "反应性变数",
            "固定性变数",
            "控制变数"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "反应性变数",
          "distractors": [
            "操纵性变数",
            "固定性变数",
            "独立变数"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "固定性变数",
          "distractors": [
            "操纵性变数",
            "反应性变数",
            "变化变数"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "20°C",
          "distractors": [
            "40°C",
            "5°C",
            "20°F"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "相同",
          "distractors": [
            "不同",
            "悬殊",
            "随机"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "结果",
          "distractors": [
            "猜想",
            "假设",
            "臆断"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "结论",
          "distractors": [
            "假设",
            "猜测",
            "前提"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "探究",
          "distractors": [
            "臆断",
            "轻信",
            "搁置"
          ]
        }
      ]
    },
    {
      "id": "1c01-d",
      "article": "进入实验室须严守【规则】，以【正确】方式操作，避免【意外】。实验前细心聆听说明，熟悉【器材】；保持台面【整洁】，实验后洗净器具归位；严禁在实验室【饮食】或【嬉闹】；除非指示，不得【触碰】药品。意外发生时须【镇定】并【立即】【报告】老师。若被化学试剂【灼伤】，应以缓缓流水冲洗【1分钟】以上；轻微【割伤】则清洗后贴胶布。废弃物须【妥善】处理，以免污染环境。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "规则",
          "distractors": [
            "随意",
            "惯例",
            "习惯"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "正确",
          "distractors": [
            "错误",
            "随意",
            "危险"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "意外",
          "distractors": [
            "必然",
            "计划",
            "常态"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "器材",
          "distractors": [
            "药品",
            "试剂",
            "样本"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "整洁",
          "distractors": [
            "杂乱",
            "肮脏",
            "混乱"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "饮食",
          "distractors": [
            "饮水",
            "娱乐",
            "休息"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "嬉闹",
          "distractors": [
            "静默",
            "严肃",
            "专注"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "触碰",
          "distractors": [
            "观察",
            "远离",
            "忽略"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "镇定",
          "distractors": [
            "慌乱",
            "惊慌",
            "焦躁"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "立即",
          "distractors": [
            "延迟",
            "暂缓",
            "拖延"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "报告",
          "distractors": [
            "隐瞒",
            "忽略",
            "沉默"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "灼伤",
          "distractors": [
            "治愈",
            "防护",
            "冷却"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "1分钟",
          "distractors": [
            "10秒",
            "5分钟",
            "1小时"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "割伤",
          "distractors": [
            "烫伤",
            "灼伤",
            "刺伤"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "妥善",
          "distractors": [
            "随意",
            "草率",
            "马虎"
          ]
        }
      ]
    },
    {
      "id": "1c01-e",
      "article": "实验室失火须按情况【正确】灭火、及时【撤离】并【报警】。常见灭火器有三类：【干粉】灭火器适用于石油、油漆及【电气】火灾；【泡沫】灭火器用于油类液体火灾，但【不可】用于带电设备；【二氧化碳】灭火器适合易燃液体、气体及精密仪器。小火可用【灭火毯】盖灭，或让着火者【翻滚】扑灭火焰。选错灭火器会【加剧】灾情，因此必须【熟悉】器材，保护【生命】与【财产】，减少【损失】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "正确",
          "distractors": [
            "错误",
            "随意",
            "鲁莽"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "撤离",
          "distractors": [
            "逗留",
            "围观",
            "聚集"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "报警",
          "distractors": [
            "隐瞒",
            "忽略",
            "沉默"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "干粉",
          "distractors": [
            "泡沫",
            "二氧化碳",
            "水"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "电气",
          "distractors": [
            "水",
            "油",
            "气体"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "泡沫",
          "distractors": [
            "干粉",
            "二氧化碳",
            "沙"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "不可",
          "distractors": [
            "可以",
            "应当",
            "适合"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "二氧化碳",
          "distractors": [
            "干粉",
            "泡沫",
            "水"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "灭火毯",
          "distractors": [
            "水",
            "沙",
            "风扇"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "翻滚",
          "distractors": [
            "站立",
            "奔跑",
            "跳跃"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "加剧",
          "distractors": [
            "缓解",
            "控制",
            "减轻"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "熟悉",
          "distractors": [
            "生疏",
            "无视",
            "忽略"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "生命",
          "distractors": [
            "财产",
            "设备",
            "文件"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "财产",
          "distractors": [
            "生命",
            "设备",
            "资料"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "损失",
          "distractors": [
            "收益",
            "盈余",
            "保全"
          ]
        }
      ]
    },
    {
      "id": "1c01-f",
      "article": "化学药品须依【安全警告标识】使用。常见标识包括【有毒】、【易燃】、【易爆】、【有腐蚀性】与【有刺激性】，提醒我们防范。其中【生物危害】标识表示袋内含威胁健康的微生物、病毒或【毒素】，属直接或潜在传染因子。这类物品回收后须【高温灭菌】再处理。认识标识、做好【防护】并遵守【守则】，才能降低【风险】、保障【健康】，避免危及【生态】与【社会】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "安全警告标识",
          "distractors": [
            "使用说明",
            "品牌标签",
            "价格标签"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "有毒",
          "distractors": [
            "无毒",
            "有益",
            "营养"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "易燃",
          "distractors": [
            "阻燃",
            "耐火",
            "防爆"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "易爆",
          "distractors": [
            "稳定",
            "安全",
            "惰性"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "有腐蚀性",
          "distractors": [
            "中性",
            "温和",
            "无害"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "有刺激性",
          "distractors": [
            "舒缓",
            "温和",
            "安抚"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "生物危害",
          "distractors": [
            "物理危害",
            "化学危害",
            "辐射危害"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "毒素",
          "distractors": [
            "营养",
            "水分",
            "氧气"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "高温灭菌",
          "distractors": [
            "常温保存",
            "冷藏",
            "稀释"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "防护",
          "distractors": [
            "暴露",
            "忽视",
            "裸触"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "守则",
          "distractors": [
            "惯例",
            "习惯",
            "喜好"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "风险",
          "distractors": [
            "安全",
            "保障",
            "益处"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "健康",
          "distractors": [
            "疾病",
            "损伤",
            "衰弱"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "生态",
          "distractors": [
            "经济",
            "工业",
            "商业"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "社会",
          "distractors": [
            "个人",
            "家庭",
            "团体"
          ]
        }
      ]
    },
    {
      "id": "1c01-g",
      "article": "实验室器材各有专门用途。盛装与加热可用【烧杯】、【锥形瓶】、【试管】；加热燃烧靠【本生灯】、【三脚架】与【陶土网】；夹持用【试管夹】。测量体积用【量筒】，测温度用【温度计】，称质量用【电子秤】。移取液体可用【滴管】或【移液管】，搅拌用【玻璃棒】。观察微小结构则靠【显微镜】。使用前须熟记操作，以免损坏器材或引发【危险】。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "烧杯",
          "distractors": [
            "量筒",
            "漏斗",
            "试管"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "锥形瓶",
          "distractors": [
            "烧杯",
            "量筒",
            "试管"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "试管",
          "distractors": [
            "烧杯",
            "量筒",
            "漏斗"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "本生灯",
          "distractors": [
            "冰箱",
            "空调",
            "风扇"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "三脚架",
          "distractors": [
            "椅子",
            "梯子",
            "桌子"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "陶土网",
          "distractors": [
            "铁丝网",
            "纱布",
            "滤纸"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "试管夹",
          "distractors": [
            "镊子",
            "钳子",
            "夹子"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "量筒",
          "distractors": [
            "烧杯",
            "试管",
            "漏斗"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "温度计",
          "distractors": [
            "气压计",
            "湿度计",
            "速度计"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "电子秤",
          "distractors": [
            "尺",
            "量筒",
            "温度计"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "滴管",
          "distractors": [
            "量筒",
            "漏斗",
            "试管"
          ]
        },
        {
          "id": 12,
          "type": "A",
          "correct": "移液管",
          "distractors": [
            "量筒",
            "滴管",
            "漏斗"
          ]
        },
        {
          "id": 13,
          "type": "A",
          "correct": "玻璃棒",
          "distractors": [
            "铁丝",
            "木棍",
            "塑料棒"
          ]
        },
        {
          "id": 14,
          "type": "A",
          "correct": "显微镜",
          "distractors": [
            "望远镜",
            "放大镜",
            "投影仪"
          ]
        },
        {
          "id": 15,
          "type": "A",
          "correct": "危险",
          "distractors": [
            "安全",
            "便利",
            "效率"
          ]
        }
      ]
    },
    {
      "id": "1c01-h",
      "article": "测量须规定【标准】，这个标准就是【单位】。早期各地单位不一，如长度用英尺、英寸，造成【交流】不便甚至【失误】。著名例子是火星气候探测者号因单位【混淆】而【坠毁】。为此建立【国际单位制（SI）】，含【7】个【基本单位】。书写时数字与单位间须留【空格】，如【1250 kg】、【48 s】、【350 m】。极大量或极小量可加【词头】，如千（k）表示【1000】倍。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "标准",
          "distractors": [
            "随意",
            "估计",
            "概略"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "单位",
          "distractors": [
            "工具",
            "数值",
            "标准"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "交流",
          "distractors": [
            "隔离",
            "封闭",
            "独立"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "失误",
          "distractors": [
            "精准",
            "成功",
            "无误"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "混淆",
          "distractors": [
            "统一",
            "厘清",
            "区分"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "坠毁",
          "distractors": [
            "抵达",
            "成功",
            "着陆"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "国际单位制（SI）",
          "distractors": [
            "英制",
            "美制",
            "旧制"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "基本单位",
          "distractors": [
            "导出单位",
            "辅助单位",
            "临时单位"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "空格",
          "distractors": [
            "连写",
            "逗号",
            "句号"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "词头",
          "distractors": [
            "后缀",
            "符号",
            "指数"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "7",
          "distractors": [
            "5",
            "9",
            "6"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "1250 kg",
          "distractors": [
            "125 kg",
            "12500 kg",
            "1250 g"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "48 s",
          "distractors": [
            "48 min",
            "24 s",
            "48 m"
          ]
        },
        {
          "id": 14,
          "type": "B",
          "correct": "350 m",
          "distractors": [
            "350 km",
            "35 m",
            "350 s"
          ]
        },
        {
          "id": 15,
          "type": "B",
          "correct": "1000",
          "distractors": [
            "100",
            "1000000",
            "10"
          ]
        }
      ]
    },
    {
      "id": "1c01-i",
      "article": "长度采用【国际单位】，其基本单位为【米(m)】，1千米等于【1000 m】。测量工具因【需求】而异：直尺量厚度，钢卷尺量距离，布卷尺量腰围，内、外卡尺量圆孔【直径】。面积是物体【表面】大小，由长乘宽得【平方米（m²）】。体积是物体【占空间】大小，由长宽高得【立方米（m³）】；【液体】常用升与毫升，1立方米等于【1000 L】，【1 mL】等于【1 cm³】。不规则固体可用【排水法】测体积，不规则平面用【方格纸】估算。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "国际单位",
          "distractors": [
            "英制",
            "美制",
            "旧制"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "米(m)",
          "distractors": [
            "英尺",
            "英寸",
            "码"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "需求",
          "distractors": [
            "喜好",
            "习惯",
            "兴趣"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "直径",
          "distractors": [
            "半径",
            "周长",
            "弧长"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "表面",
          "distractors": [
            "内部",
            "体积",
            "核心"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "平方米（m²）",
          "distractors": [
            "平方米（m²）",
            "平方厘米（cm²）",
            "平方千米（km²）"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "占空间",
          "distractors": [
            "占质量",
            "占面积",
            "占时间"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "立方米（m³）",
          "distractors": [
            "平方米（m²）",
            "立方厘米（cm³）",
            "立方千米（km³）"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "液体",
          "distractors": [
            "固体",
            "气体",
            "晶体"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "排水法",
          "distractors": [
            "称重法",
            "刻度法",
            "比较法"
          ]
        },
        {
          "id": 11,
          "type": "A",
          "correct": "方格纸",
          "distractors": [
            "白纸",
            "坐标纸",
            "滤纸"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "1000 m",
          "distractors": [
            "100 m",
            "10000 m",
            "1000 cm"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "1000 L",
          "distractors": [
            "100 L",
            "10000 L",
            "1000 mL"
          ]
        },
        {
          "id": 14,
          "type": "B",
          "correct": "1 mL",
          "distractors": [
            "1 L",
            "5 mL",
            "1 m³"
          ]
        },
        {
          "id": 15,
          "type": "B",
          "correct": "1 cm³",
          "distractors": [
            "1 m³",
            "10 cm³",
            "1 m²"
          ]
        }
      ]
    },
    {
      "id": "1c01-j",
      "article": "质量反映物体含【物质】的多少，是【固有】属性，不随【形状】、【状态】、【位置】改变。早期用三杆天平、杠杆天平，今多用机械秤与【电子秤】。时间国际单位为秒，1分等于【60 s】，1小时等于【3600 s】。温度表示【冷热】，人体正常体温为【37℃】；绝对零度为【-273.15℃】；可容忍最高体温【42℃】。体温计刻度介于35至42℃，因体温一般不超此【范围】。测量须选对工具与【方法】，方得【准确】结果。",
      "keywords": [
        {
          "id": 1,
          "type": "A",
          "correct": "物质",
          "distractors": [
            "能量",
            "空间",
            "时间"
          ]
        },
        {
          "id": 2,
          "type": "A",
          "correct": "固有",
          "distractors": [
            "可变",
            "临时",
            "外在"
          ]
        },
        {
          "id": 3,
          "type": "A",
          "correct": "形状",
          "distractors": [
            "质量",
            "颜色",
            "温度"
          ]
        },
        {
          "id": 4,
          "type": "A",
          "correct": "状态",
          "distractors": [
            "位置",
            "质量",
            "体积"
          ]
        },
        {
          "id": 5,
          "type": "A",
          "correct": "位置",
          "distractors": [
            "形状",
            "状态",
            "质量"
          ]
        },
        {
          "id": 6,
          "type": "A",
          "correct": "电子秤",
          "distractors": [
            "直尺",
            "量筒",
            "温度计"
          ]
        },
        {
          "id": 7,
          "type": "A",
          "correct": "冷热",
          "distractors": [
            "明暗",
            "快慢",
            "轻重"
          ]
        },
        {
          "id": 8,
          "type": "A",
          "correct": "范围",
          "distractors": [
            "定点",
            "极值",
            "常数"
          ]
        },
        {
          "id": 9,
          "type": "A",
          "correct": "方法",
          "distractors": [
            "直觉",
            "臆测",
            "猜测"
          ]
        },
        {
          "id": 10,
          "type": "A",
          "correct": "准确",
          "distractors": [
            "粗略",
            "错误",
            "随意"
          ]
        },
        {
          "id": 11,
          "type": "B",
          "correct": "60 s",
          "distractors": [
            "30 s",
            "100 s",
            "60 min"
          ]
        },
        {
          "id": 12,
          "type": "B",
          "correct": "3600 s",
          "distractors": [
            "60 s",
            "3600 min",
            "3600 m"
          ]
        },
        {
          "id": 13,
          "type": "B",
          "correct": "37℃",
          "distractors": [
            "42℃",
            "35℃",
            "37 K",
            "310 K"
          ]
        },
        {
          "id": 14,
          "type": "B",
          "correct": "-273.15℃",
          "distractors": [
            "-100℃",
            "0℃",
            "-273.15 K",
            "0 K"
          ]
        },
        {
          "id": 15,
          "type": "B",
          "correct": "42℃",
          "distractors": [
            "37℃",
            "35℃",
            "42 K"
          ]
        }
      ]
    }
  ]
};
