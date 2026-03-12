'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# 助记词生成器

这是一个基于 BIP-39 的本地助记词工具，支持 12 / 15 / 18 / 21 / 24 个单词、多语言词库、校验和检查，以及根据助记词和可选 passphrase 派生 seed。

## 适用场景

- 生成主流钱包兼容的 BIP-39 助记词
- 校验现有助记词是否匹配所选词库与 checksum
- 查看原始 entropy 与 seed（十六进制）
- 在浏览器本地完成，不上传敏感数据

## 兼容性说明

- 默认推荐 English，兼容性通常最好
- 同时提供简体中文、繁体中文、日文、韩文、西班牙文、法文、意大利文、葡萄牙文和捷克文词库
- seed 派生遵循 BIP-39 规定的 PBKDF2-HMAC-SHA512（2048 次迭代）

## 安全建议

- 助记词、entropy、seed 都属于高敏感信息，请勿截图、云同步或发送给他人
- passphrase 是额外的 BIP-39 密码，遗失后通常无法恢复
- 如需正式存储资产，建议配合离线环境与硬件钱包使用
`

const markdownEn = `
# Mnemonic Generator

This browser-first tool generates and validates BIP-39 mnemonic phrases with 12 / 15 / 18 / 21 / 24 words, multiple official wordlists, checksum verification, and optional seed derivation.

## What it supports

- Generate wallet-friendly BIP-39 mnemonics
- Validate checksum and selected wordlist
- Inspect entropy and derived seed in hex
- Run locally in the browser without uploading secrets

## Compatibility notes

- English is recommended for the broadest wallet compatibility
- Official BIP-39 wordlists are included for Chinese, Japanese, Korean, Spanish, French, Italian, Portuguese, and Czech
- Seed derivation follows PBKDF2-HMAC-SHA512 with 2048 iterations

## Safety tips

- Treat mnemonic, entropy, and seed as highly sensitive secrets
- The passphrase is the extra BIP-39 password and cannot be guessed back later
- For real funds, prefer an offline environment and a hardware wallet
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
