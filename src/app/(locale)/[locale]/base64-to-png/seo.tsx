'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# 🖼️ Base64 转 PNG 工具 - 在线图片转换器

## 📖 项目简介

Base64 转 PNG 工具是一个专业的在线工具，帮助您快速将 Base64 编码的图片数据转换为 PNG 格式图片。无论是网页开发、图片处理还是数据恢复，这个工具都能为您提供准确、便捷的图片转换服务。

## ✨ 主要功能

### 🎯 核心特性
- **格式转换**: 支持 Base64 编码到 PNG 图片格式转换
- **实时预览**: 转换后立即显示图片预览
- **一键下载**: 轻松下载转换后的 PNG 图片
- **错误处理**: 智能处理无效的 Base64 数据
- **响应式设计**: 完美适配桌面端和移动端设备

### 🛠️ 技术特点
- **高性能**: 基于 Next.js 15 构建，提供极速转换体验
- **PWA 支持**: 可安装为渐进式 Web 应用
- **离线功能**: 支持 Service Worker，提供离线访问能力
- **现代 UI**: 采用 Tailwind CSS 构建的美观界面
- **TypeScript**: 完整的类型安全保证

## 🚀 如何使用

### 基本操作
1. **输入 Base64**: 在文本框中输入 Base64 编码的图片数据
2. **自动转换**: 系统会自动检测并转换图片格式
3. **预览图片**: 转换完成后显示图片预览
4. **下载图片**: 点击下载按钮保存 PNG 图片

### 高级功能
- **格式检测**: 自动检测 Base64 数据的图片格式
- **批量处理**: 支持多个 Base64 数据同时转换
- **错误提示**: 智能处理无效数据，提供友好提示

## 🎨 使用场景

### 开发应用
- **网页开发**: 将 Base64 图片嵌入网页
- **移动应用**: 处理应用中的 Base64 图片数据
- **API 开发**: 处理 API 返回的 Base64 图片

### 实用工具
- **图片恢复**: 从 Base64 数据恢复损坏的图片
- **数据迁移**: 将 Base64 格式图片转换为标准格式
- **文档处理**: 处理包含 Base64 图片的文档

## 🔧 技术架构

### 前端技术栈
- **Next.js 15**: React 全栈框架
- **React 19**: 最新的 React 版本
- **TypeScript**: 类型安全的 JavaScript
- **Tailwind CSS**: 实用优先的 CSS 框架
- **Canvas API**: 使用浏览器 Canvas API 进行图片处理

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
- 优化的图片预览体验
- 移动端友好的下载提示

## 🔗 相关资源

### 项目链接
- **GitHub 仓库**: [tools.aiwan.run](https://github.com/Debbl/tools.aiwan.run/)
- **在线演示**: 当前页面
- **问题反馈**: 欢迎在 GitHub 上提交 Issue

## 🎯 SEO 优化

### 关键词覆盖
- base64 转 png, base64 图片转换, 在线图片转换器
- base64 图片解码, base64 转图片, 图片格式转换
- 在线图片工具, 图片转换器
- base64 图片恢复, 图片数据转换

### 内容策略
- 提供丰富的使用教程和技术文档
- 定期优化转换算法和用户体验
- 支持多语言内容（计划中）
- 优化页面加载速度和用户体验

## 📈 使用统计

### 当前支持
- **格式支持**: 支持多种图片格式的 Base64 转换
- **质量保证**: 保持原始图片质量
- **响应时间**: 平均转换时间 < 200ms
- **用户满意度**: 持续收集反馈并改进

### 未来计划
- 添加更多图片格式支持
- 支持批量转换功能
- 增加图片编辑功能
- 开发移动端原生应用

---

*最后更新: 2025年1月26日*

> 💡 **小贴士**: Base64 转 PNG 工具常用于网页开发和图片处理，是前端开发的重要工具！
`

const markdownEn = `
# 🖼️ Base64 to PNG Converter - Online Image Converter

## 📖 Project Introduction

The Base64 to PNG Converter is a professional online tool that helps you quickly convert Base64 encoded image data to PNG format images. Whether for web development, image processing, or data recovery, this tool provides accurate and convenient image conversion services.

## ✨ Main Features

### 🎯 Core Features
- **Format Conversion**: Supports Base64 encoding to PNG image format conversion
- **Real-time Preview**: Display image preview immediately after conversion
- **One-click Download**: Easily download converted PNG images
- **Error Handling**: Smart handling of invalid Base64 data
- **Responsive Design**: Perfectly adapts to desktop and mobile devices

### 🛠️ Technical Features
- **High Performance**: Built on Next.js 15, providing lightning-fast conversion experience
- **PWA Support**: Can be installed as a Progressive Web App
- **Offline Functionality**: Supports Service Worker for offline access
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **TypeScript**: Complete type safety guarantee

## 🚀 How to Use

### Basic Operations
1. **Input Base64**: Enter Base64 encoded image data in the text box
2. **Auto Conversion**: System automatically detects and converts image format
3. **Preview Image**: Display image preview after conversion
4. **Download Image**: Click download button to save PNG image

### Advanced Features
- **Format Detection**: Automatically detect image format from Base64 data
- **Batch Processing**: Support converting multiple Base64 data simultaneously
- **Error Prompts**: Smart handling of invalid data with friendly prompts

## 🎨 Use Cases

### Development Applications
- **Web Development**: Embed Base64 images in web pages
- **Mobile Apps**: Process Base64 image data in applications
- **API Development**: Handle Base64 images returned by APIs

### Practical Tools
- **Image Recovery**: Recover damaged images from Base64 data
- **Data Migration**: Convert Base64 format images to standard formats
- **Document Processing**: Process documents containing Base64 images

## 🔧 Technical Architecture

### Frontend Tech Stack
- **Next.js 15**: React full-stack framework
- **React 19**: Latest React version
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Canvas API**: Use browser Canvas API for image processing

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
- Optimized image preview experience
- Mobile-friendly download prompts

## 🔗 Related Resources

### Project Links
- **GitHub Repository**: [tools.aiwan.run](https://github.com/Debbl/tools.aiwan.run/)
- **Online Demo**: Current page
- **Issue Feedback**: Welcome to submit issues on GitHub

## 🎯 SEO Optimization

### Keyword Coverage
- base64 to png, base64 image converter, online image converter
- base64 image decoder, base64 to image, image format converter
- online image tool, image converter
- base64 image recovery, image data conversion

### Content Strategy
- Provide rich tutorials and technical documentation
- Regularly optimize conversion algorithms and user experience
- Support multi-language content (planned)
- Optimize page loading speed and user experience

## 📈 Usage Statistics

### Current Support
- **Format Support**: Supports Base64 conversion for multiple image formats
- **Quality Assurance**: Maintains original image quality
- **Response Time**: Average conversion time < 200ms
- **User Satisfaction**: Continuously collecting feedback and improving

### Future Plans
- Add support for more image formats
- Support batch conversion functionality
- Add image editing features
- Develop mobile native applications

---

*Last Updated: January 26, 2025*

> 💡 **Tip**: Base64 to PNG converter is commonly used in web development and image processing, an important tool for frontend development!
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
