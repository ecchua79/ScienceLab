# 3D 心脏结构与血液循环互动查看器

基于 Three.js 的心脏 3D 互动教学查看器，包含中文标注、血流动画、心跳搏动、传导系统可视化等功能。

## 功能

- **3D 心脏模型**：可拖动旋转、滚轮缩放
- **中文标注**：12 个解剖结构（心房、心室、瓣膜、主动脉、肺动脉等）配 SVG 引线
- **血流动画**：红蓝粒子流展示血液循环路线
  - 红色粒子（充氧血）：肺静脉 → 左心房 → 左心室 → 主动脉 → 全身
  - 蓝色粒子（缺氧血）：上下腔静脉 → 右心房 → 右心室 → 肺动脉 → 肺部
  - 心腔内粒子放大提亮，突出"血液在心腔内涌动"的视觉效果
- **心跳搏动**：约 70 bpm，模拟心动周期五阶段
- **传导系统**：黄色亮带沿传导路径传播
- **透视心肌**：半透明模式查看内部结构
- **点击选中**：点击标注或列表查看各结构的功能说明

## 技术栈

- Three.js r160（ES Module）
- FBXLoader 加载 FBX 模型
- CatmullRomCurve3 定义血流路径
- Sprite + CanvasTexture 渲染粒子
- 纯前端，无后端依赖，无构建步骤

## 在线访问

部署在 GitHub Pages 上：<https://你的用户名.github.io/heart-viewer/>

## 本地预览

需要通过 HTTP 服务器打开（不能直接双击 HTML 文件，因为使用了 ES Module）：

```bash
cd heart-viewer
python -m http.server 8732
# 浏览器打开 http://localhost:8732
```

## 模型来源

- 模型：[Sketchfab — Cardiac Conduction System](https://sketchfab.com/3d-models/cardiac-conduction-system-f314c85abb6a481592ffa5dd973ca0c0)（CC BY 许可）
- Three.js：[three.js](https://threejs.org/)

## 目录结构

```
heart-viewer/
├── index.html              # 主页面
├── heart-viewer.js         # 查看器核心逻辑
├── .gitignore
├── README.md
├── assets/
│   ├── heart.fbx           # 心脏 3D 模型
│   └── septum_texture.png  # 室间隔贴图
└── vendor/                 # Three.js 库文件
    ├── build/
    │   └── three.module.js
    └── examples/jsm/
        ├── controls/OrbitControls.js
        ├── curves/NURBSCurve.js
        ├── curves/NURBSUtils.js
        ├── libs/fflate.module.js
        └── loaders/FBXLoader.js
```
