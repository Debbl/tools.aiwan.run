'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# 随机名称生成器

随机名称生成器会从一个形容词词表和一个角色名词表中各取一个词，组合成可读性不错的随机名称，例如 \`bright_thor\` 或 \`swift_vision\`。

这个工具适合用来快速生成临时项目名、测试数据、演示账号名或者开发阶段的占位标识。所有结果都在浏览器本地生成，不会上传任何输入内容。
`

const markdownEn = `
# Random Name Generator

The random name generator combines one adjective with one hero-style word to create readable names such as \`bright_thor\` or \`swift_vision\`.

It works well for temporary project names, test fixtures, demo accounts, and placeholder identifiers. Everything is generated locally in your browser.
`

export function SEO({ className }: { className?: string }) {
  return (
    <SEOLayout
      className={className}
      markdownZh={markdownZh}
      markdownEn={markdownEn}
    />
  )
}
