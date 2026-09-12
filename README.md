# (Jenny) Zhenni He 何珍妮 — 个人网站


## 页面结构（多页面）

```
my-website/
├── index.html          ← About Me 关于我
├── publications.html   ← Publications 论文
├── experience.html     ← Experience 经历（工作 / 教学 / 科研项目）
├── personal.html       ← Personal 生活（数媒作品、新闻文章、联系方式）
├── style.css           ← 所有样式
├── main.js             ← 手机菜单、Show More 折叠、淡入动画
└── images/
    ├── profile.png     ← 个人照片
    └── doodles/        ← 13 个手绘风蜡笔涂鸦 SVG
```

## 浅色配色（对应 CSS 变量）

| 变量 | 色值 | 用途 |
|---|---|---|
| `--pink` | `#F7EAF1` | 粉色 Callout / 徽章 |
| `--blue` | `#E8F2FB` | 蓝色 Callout / 当前导航高亮 |
| `--green` | `#EAF2EC` | 绿色 Callout / Accepted 徽章 |
| `--yellow` | `#F8F3DE` | 黄色 Callout / 获奖·Under Review 徽章 |

改配色只需要改 `style.css` 开头 `:root` 里的变量。

## 本地预览

```bash
cd my-website
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 常用修改

- **改文字**：直接编辑对应 `.html` 页面
- **换照片**：替换 `images/profile.png`（建议 ≥ 400px 宽）
- **加论文**：在 `publications.html` 复制一个 `<li class="pub-item">…</li>`
- **换涂鸦**：替换 `images/doodles/` 里的同名 SVG
- **页脚版权**：四个页面底部各有一行

## 上线
网站地址：**https://hezhenni.github.io**
