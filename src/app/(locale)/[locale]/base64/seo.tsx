'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# 🔐 Base64 编码解码工具 - 在线文本转换器

## 📖 项目简介

Base64 编码解码工具是一个专业的在线工具，帮助您快速进行 Base64 编码和解码操作。无论是数据传输、API 开发还是文件处理，这个工具都能为您提供准确、便捷的 Base64 转换服务。

## ✨ 主要功能

### 🎯 核心特性
- **双向转换**: 支持文本到 Base64 编码和 Base64 到文本解码
- **实时转换**: 输入内容时立即显示转换结果
- **一键复制**: 轻松复制转换结果到剪贴板
- **错误处理**: 智能处理无效输入，提供友好提示
- **响应式设计**: 完美适配桌面端和移动端设备

### 🛠️ 技术特点
- **高性能**: 基于 Next.js 15 构建，提供极速转换体验
- **PWA 支持**: 可安装为渐进式 Web 应用
- **离线功能**: 支持 Service Worker，提供离线访问能力
- **现代 UI**: 采用 Tailwind CSS 构建的美观界面
- **TypeScript**: 完整的类型安全保证

## 🚀 如何使用

### 基本操作
1. **输入文本**: 在左侧文本框中输入要编码的文本内容
2. **查看编码**: 右侧文本框会实时显示 Base64 编码结果
3. **解码操作**: 在右侧输入 Base64 编码，左侧显示解码结果
4. **复制结果**: 点击复制按钮即可复制转换结果

### 高级功能
- **实时转换**: 输入时立即显示转换结果
- **清空重置**: 使用清除按钮快速清空输入内容
- **错误处理**: 智能处理无效输入，提供友好提示

## 🎨 使用场景

### 开发应用
- **API 开发**: 处理 Base64 编码的数据传输
- **文件处理**: 将文件内容转换为 Base64 格式
- **数据存储**: 在数据库中存储 Base64 编码的数据

### 实用工具
- **图片处理**: 将图片转换为 Base64 格式嵌入网页
- **邮件附件**: 处理邮件中的 Base64 编码附件
- **配置文件**: 处理包含 Base64 编码的配置文件

## 🔧 技术架构

### 前端技术栈
- **Next.js 15**: React 全栈框架
- **React 19**: 最新的 React 版本
- **TypeScript**: 类型安全的 JavaScript
- **Tailwind CSS**: 实用优先的 CSS 框架
- **原生 API**: 使用浏览器原生 Base64 转换 API

### 性能优化
- **实时转换**: 使用 useMemo 优化转换性能
- **代码分割**: 按需加载组件
- **缓存策略**: 智能的静态资源缓存
- **PWA 支持**: 离线访问和安装功能

## 🌟 项目特色

### 开源免费
- 完全开源，基于 MIT 许可证
- 无需注册，即开即用
- 无广告干扰，纯净体验

### 持续更新
- 定期优化转换算法
- 响应社区反馈，持续改进
- 保持与最新 Web 标准的兼容性

### 隐私保护
- 无需上传个人信息
- 所有处理都在本地完成
- 不收集用户数据

## 📱 移动端体验

### 适配优化
- 触摸友好的界面设计
- 优化的移动端交互
- 响应式布局适配各种屏幕尺寸

### 移动端特性
- 支持触摸手势操作
- 优化的文本输入体验
- 移动端友好的复制提示

## 🔗 相关资源

### 项目链接
- **GitHub 仓库**: [tools.aiwan.run](https://github.com/Debbl/tools.aiwan.run/)
- **在线演示**: 当前页面
- **问题反馈**: 欢迎在 GitHub 上提交 Issue

## 🎯 SEO 优化

### 关键词覆盖
- base64 编码解码, base64 转换工具, 在线 base64
- base64 编码器, base64 解码器, base64 转换
- 文本编码工具, 数据编码转换
- base64 在线工具, base64 编码解码器

### 内容策略
- 提供丰富的使用教程和技术文档
- 定期优化转换算法和用户体验
- 支持多语言内容（计划中）
- 优化页面加载速度和用户体验

## 📈 使用统计

### 当前支持
- **编码支持**: 支持所有文本内容的 Base64 编码
- **解码支持**: 支持标准 Base64 格式解码
- **响应时间**: 平均转换时间 < 50ms
- **用户满意度**: 持续收集反馈并改进

### 未来计划
- 添加更多编码格式支持
- 支持批量转换功能
- 增加文件上传功能
- 开发移动端原生应用

---

*最后更新: 2025年1月26日*

> 💡 **小贴士**: Base64 编码常用于数据传输和存储，是 Web 开发中的重要工具！
`

const markdownEn = `
# 🔐 Base64 Encoder/Decoder - Online Text Converter

## 📖 Project Introduction

The Base64 Encoder/Decoder is a professional online tool that helps you quickly perform Base64 encoding and decoding operations. Whether for data transmission, API development, or file processing, this tool provides accurate and convenient Base64 conversion services.

## ✨ Main Features

### 🎯 Core Features
- **Bidirectional Conversion**: Supports text to Base64 encoding and Base64 to text decoding
- **Real-time Conversion**: Display conversion results immediately when typing
- **One-click Copy**: Easily copy conversion results to clipboard
- **Error Handling**: Smart handling of invalid input with friendly prompts
- **Responsive Design**: Perfectly adapts to desktop and mobile devices

### 🛠️ Technical Features
- **High Performance**: Built on Next.js 15, providing lightning-fast conversion experience
- **PWA Support**: Can be installed as a Progressive Web App
- **Offline Functionality**: Supports Service Worker for offline access
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **TypeScript**: Complete type safety guarantee

## 🚀 How to Use

### Basic Operations
1. **Input Text**: Enter the text content to encode in the left text box
2. **View Encoding**: The right text box shows Base64 encoding results in real-time
3. **Decode Operation**: Enter Base64 encoding on the right, left shows decoded result
4. **Copy Results**: Click the copy button to copy conversion results

### Advanced Features
- **Real-time Conversion**: Display conversion results immediately when typing
- **Clear Reset**: Use the clear button to quickly clear input content
- **Error Handling**: Smart handling of invalid input with friendly prompts

## 🎨 Use Cases

### Development Applications
- **API Development**: Handle Base64 encoded data transmission
- **File Processing**: Convert file content to Base64 format
- **Data Storage**: Store Base64 encoded data in databases

### Practical Tools
- **Image Processing**: Convert images to Base64 format for web embedding
- **Email Attachments**: Handle Base64 encoded attachments in emails
- **Configuration Files**: Process configuration files containing Base64 encoding

## 🔧 Technical Architecture

### Frontend Tech Stack
- **Next.js 15**: React full-stack framework
- **React 19**: Latest React version
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Native API**: Use browser native Base64 conversion API

### Performance Optimization
- **Real-time Conversion**: Optimize conversion performance with useMemo
- **Code Splitting**: On-demand component loading
- **Caching Strategy**: Smart static resource caching
- **PWA Support**: Offline access and installation features

## 🌟 Project Highlights

### Open Source & Free
- Completely open source under MIT license
- No registration required, ready to use
- No ad interference, pure experience

### Continuous Updates
- Regularly optimize conversion algorithms
- Respond to community feedback for continuous improvement
- Maintain compatibility with latest Web standards

### Privacy Protection
- No personal information upload required
- All processing done locally
- No user data collection

## 📱 Mobile Experience

### Adaptation Optimization
- Touch-friendly interface design
- Optimized mobile interactions
- Responsive layout adapts to various screen sizes

### Mobile Features
- Support for touch gesture operations
- Optimized text input experience
- Mobile-friendly copy prompts

## 🔗 Related Resources

### Project Links
- **GitHub Repository**: [tools.aiwan.run](https://github.com/Debbl/tools.aiwan.run/)
- **Online Demo**: Current page
- **Issue Feedback**: Welcome to submit issues on GitHub

## 🎯 SEO Optimization

### Keyword Coverage
- base64 encoder decoder, base64 conversion tool, online base64
- base64 encoder, base64 decoder, base64 converter
- text encoding tool, data encoding conversion
- base64 online tool, base64 encoder decoder

### Content Strategy
- Provide rich tutorials and technical documentation
- Regularly optimize conversion algorithms and user experience
- Support multi-language content (planned)
- Optimize page loading speed and user experience

## 📈 Usage Statistics

### Current Support
- **Encoding Support**: Supports Base64 encoding for all text content
- **Decoding Support**: Supports standard Base64 format decoding
- **Response Time**: Average conversion time < 50ms
- **User Satisfaction**: Continuously collecting feedback and improving

### Future Plans
- Add support for more encoding formats
- Support batch conversion functionality
- Add file upload features
- Develop mobile native applications

---

*Last Updated: January 26, 2025*

> 💡 **Tip**: Base64 encoding is commonly used for data transmission and storage, an important tool in web development!
`

export function SEO({ className }: { className?: string }) {
  return <SEOLayout className={className} markdownEn={markdownEn} markdownZh={markdownZh} />
}
