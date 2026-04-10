# CAMBTI

一个纯前端的中文整活网站，用 31 道题测试你的相机品牌人格。

## 特点

- 纯静态站点，无需构建
- 适合直接部署到 GitHub Pages
- 包含分享海报、截图卡、像素品牌小人
- 在桌面、平板、手机端都能直接浏览

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 8000
```

然后打开 `http://127.0.0.1:8000/`

## 发布到 GitHub Pages

这个仓库已经带了 GitHub Actions 工作流：

1. 新建一个 GitHub 仓库
2. 把当前目录内容推到仓库的 `main` 分支
3. 进入仓库 `Settings > Pages`
4. 将 `Source` 设为 `GitHub Actions`
5. 推送后等待 Actions 完成部署

部署成功后，站点会出现在：

`https://<你的 GitHub 用户名>.github.io/<仓库名>/`

## 文件结构

- `index.html`: 页面结构
- `styles.css`: 响应式样式与视觉系统
- `script.js`: 题库、结果逻辑、分享海报、像素角色
- `.github/workflows/pages.yml`: GitHub Pages 自动部署

