# 测测你的本命编程语言

一个纯前端、无依赖、可直接部署到 GitHub Pages 的趣味测试网页。

## 文件结构

```text
programming-language-test/
├── index.html
├── style.css
├── app.js
├── README.md
└── .nojekyll
```

## 本地预览

直接双击 `index.html` 即可打开。也可以在项目目录执行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，例如 `programming-language-test`。
2. 把本项目所有文件放到仓库根目录。
3. 提交并推送到 `main` 分支。
4. 进入仓库 `Settings -> Pages`。
5. 在 `Build and deployment` 中选择 `Deploy from a branch`。
6. Branch 选择 `main`，Folder 选择 `/root`，保存。
7. 访问：`https://你的用户名.github.io/programming-language-test/`。

## 修改题目和结果

- 题目在 `app.js` 的 `QUESTIONS` 数组里。
- 结果文案在 `app.js` 的 `LANGUAGES` 对象里。
- 页面样式在 `style.css`。
