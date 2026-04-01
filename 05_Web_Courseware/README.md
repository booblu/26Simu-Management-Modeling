# 八讲网页版课件

这个目录是《管理建模与仿真》的网页版演示课件。

## 目标

- 课堂投屏优先
- 本地离线优先
- 静态部署友好
- 学生演示层与讲师备注层分离

## 结构

- `index.html`：课程总首页
- `lecture/l1` 到 `lecture/l8`：8 讲独立入口
- `src/content/manifests.ts`：人工策展式 slide 清单
- `src/app/`：首页与单讲应用壳层
- `src/components/MarkdownBlock.tsx`：Markdown / GFM / 数学公式 / 代码块渲染
- `src/theme/global.css`：课程级视觉系统

## 本地启动

如果当前终端没有把 `node` 放进 `PATH`，可以先执行：

```bash
export PATH="/Users/brook/Library/pnpm:$PATH"
```

然后在本目录运行：

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
pnpm preview
```

项目脚本也内置了 Node 兜底逻辑：如果 `PATH` 里找不到 `node`，会自动回落到 `/Users/brook/Library/pnpm/node`。

## 讲师模式

- 进入任一讲义页面后，添加 `?presenter=1`
- 也可以在课件页按 `p` 切换讲师模式
- 按 `o` 打开目录
- 左右方向键或空格翻页

## 内容原则

- 演示层只保留一条主张和少量支点
- 讲师备注层承接原讲义的丰满展开
- 每页 slide 都能回溯到 `01_Lectures/` 的来源文件
