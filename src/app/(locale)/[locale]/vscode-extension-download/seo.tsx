'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# VSCode 扩展下载工具（Marketplace 链接转 VSIX）

这个工具用于把 VSCode Marketplace 页面链接快速转换为可下载的 VSIX 地址，并支持一键触发下载。

你可以输入完整链接，也可以直接输入 \`publisher.extension\` 格式的 itemName。

## 核心能力

- 支持两种输入：Marketplace URL / itemName
- 自动解析 \`itemName\` 参数并校验格式
- 一键下载对应扩展包（.vsix）
- 展示解析结果与最终 VSIX 地址，方便检查
- 纯前端实现，不需要后端服务

## 如何使用

1. 粘贴 Marketplace 链接，例如：
   \`https://marketplace.visualstudio.com/items?itemName=vscodevim.vim\`
2. 或直接输入：\`vscodevim.vim\`
3. 点击“Download Extension”
4. 浏览器开始下载 VSIX 文件

## 输入规则

- 合法 itemName 必须是两段：\`publisher.extension\`
- URL 模式下会读取查询参数中的 \`itemName\`
- 空输入或格式错误会显示错误提示，并禁用下载

## 适用场景

- 网络受限环境下手动安装 VSCode 扩展
- 将扩展包分发给无法直接访问 Marketplace 的机器
- 本地归档常用 VSIX 文件，便于离线重装

## 说明与致谢

该工具的离线下载思路参考了这篇文章：
[wanglf / vscode-extension-offline.md](https://gist.github.com/wanglf/7acc591890dc0d8ceff1e7ec9af32a55)

## 关键词

vscode 扩展离线下载、marketplace 转 vsix、vscode 插件下载、itemName 下载、vsix 下载工具
`

const markdownEn = `
# VSCode Extension Download Tool (Marketplace to VSIX)

This tool converts a VSCode Marketplace link into a downloadable VSIX package URL and lets you download it in one click.

You can paste a full Marketplace URL or enter a plain \`publisher.extension\` itemName.

## Key Features

- Supports both Marketplace URL and itemName input
- Automatically extracts and validates \`itemName\`
- One-click VSIX download
- Shows resolved itemName and final VSIX URL for debugging
- Fully frontend implementation without backend APIs

## How to Use

1. Paste a Marketplace URL, for example:
   \`https://marketplace.visualstudio.com/items?itemName=vscodevim.vim\`
2. Or enter itemName directly: \`vscodevim.vim\`
3. Click **Download Extension**
4. Your browser starts downloading the VSIX package

## Input Rules

- Valid itemName must have exactly two parts: \`publisher.extension\`
- In URL mode, the tool reads the \`itemName\` query parameter
- Invalid or empty input shows an error and disables download

## Typical Use Cases

- Installing VSCode extensions in restricted/offline environments
- Sharing extension packages across machines
- Keeping local VSIX backups for reproducible setups

## Credit

The offline download approach is inspired by:
[wanglf / vscode-extension-offline.md](https://gist.github.com/wanglf/7acc591890dc0d8ceff1e7ec9af32a55)

## Keywords

vscode extension offline download, marketplace to vsix, itemName to vsix, download vscode plugin, vsix downloader
`

export function SEO({ className }: { className?: string }) {
  return (
    <SEOLayout
      className={className}
      markdownEn={markdownEn}
      markdownZh={markdownZh}
    />
  )
}
