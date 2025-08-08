'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# 汉字拼音转换工具 - 在线中文转拼音

## 📖 项目简介

汉字拼音转换工具是一个专业的在线工具，帮助您快速将中文汉字转换为拼音。无论是学习中文、文档处理还是语言研究，这个工具都能为您提供准确、便捷的拼音转换服务。

## ✨ 主要功能

### 🎯 核心特性
- **智能转换**: 支持简体中文和繁体中文的拼音转换
- **声调显示**: 可选择是否显示声调标记
- **实时转换**: 输入文字时立即显示拼音结果
- **一键复制**: 轻松复制转换结果到剪贴板
- **响应式设计**: 完美适配桌面端和移动端设备

### 🛠️ 技术特点
- **高性能**: 基于 Next.js 15 构建，提供极速转换体验
- **PWA 支持**: 可安装为渐进式 Web 应用
- **离线功能**: 支持 Service Worker，提供离线访问能力
- **现代 UI**: 采用 Tailwind CSS 构建的美观界面
- **TypeScript**: 完整的类型安全保证

## 🚀 如何使用

### 基本操作
1. **输入中文**: 在左侧文本框中输入您要转换的中文文字
2. **选择声调**: 勾选"声调"选项以显示声调标记
3. **查看结果**: 右侧文本框会实时显示转换后的拼音
4. **复制结果**: 点击复制按钮即可复制拼音结果

### 高级功能
- **声调控制**: 可选择显示或隐藏声调标记
- **清空输入**: 使用清除按钮快速清空输入内容
- **错误处理**: 智能处理无效输入，提供友好提示

## 🎨 使用场景

### 学习应用
- **中文学习**: 帮助初学者学习汉字发音
- **语言教学**: 为中文教师提供教学辅助工具
- **发音练习**: 通过拼音练习标准发音

### 实用工具
- **文档处理**: 为中文文档添加拼音注释
- **语言研究**: 语言学研究和分析
- **编程开发**: 为中文内容处理提供拼音支持

## 🔧 技术架构

### 前端技术栈
- **Next.js 15**: React 全栈框架
- **React 19**: 最新的 React 版本
- **TypeScript**: 类型安全的 JavaScript
- **Tailwind CSS**: 实用优先的 CSS 框架
- **pinyin 库**: 专业的汉字拼音转换库

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
- 汉字拼音转换, 中文转拼音, 拼音转换工具
- 在线拼音工具, 汉字拼音查询
- 中文学习工具, 拼音学习
- 汉字发音, 中文拼音对照

### 内容策略
- 提供丰富的使用教程和学习资源
- 定期优化转换算法和用户体验
- 支持多语言内容（计划中）
- 优化页面加载速度和用户体验

## 📈 使用统计

### 当前支持
- **汉字覆盖**: 支持常用汉字和生僻字
- **声调支持**: 完整的四声调显示
- **响应时间**: 平均转换时间 < 100ms
- **用户满意度**: 持续收集反馈并改进

### 未来计划
- 添加更多汉字支持
- 支持批量转换功能
- 增加发音音频功能
- 开发移动端原生应用

---

*最后更新: 2025年1月26日*

> 💡 **小贴士**: 使用声调功能可以帮助您更好地学习标准的中文发音！
`

const markdownEn = `
# Chinese to Pinyin Converter - Online Chinese Character to Pinyin Tool

## 📖 Project Introduction

The Chinese to Pinyin Converter is a professional online tool that helps you quickly convert Chinese characters to pinyin. Whether you're learning Chinese, processing documents, or conducting language research, this tool provides accurate and convenient pinyin conversion services.

## ✨ Main Features

### 🎯 Core Features
- **Smart Conversion**: Supports pinyin conversion for both simplified and traditional Chinese
- **Tone Display**: Option to show or hide tone marks
- **Real-time Conversion**: Display pinyin results immediately when typing
- **One-click Copy**: Easily copy conversion results to clipboard
- **Responsive Design**: Perfectly adapts to desktop and mobile devices

### 🛠️ Technical Features
- **High Performance**: Built on Next.js 15, providing lightning-fast conversion experience
- **PWA Support**: Can be installed as a Progressive Web App
- **Offline Functionality**: Supports Service Worker for offline access
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **TypeScript**: Complete type safety guarantee

## 🚀 How to Use

### Basic Operations
1. **Input Chinese**: Enter the Chinese text you want to convert in the left text box
2. **Select Tones**: Check the "Tone" option to display tone marks
3. **View Results**: The right text box shows the converted pinyin in real-time
4. **Copy Results**: Click the copy button to copy the pinyin result

### Advanced Features
- **Tone Control**: Option to show or hide tone marks
- **Clear Input**: Use the clear button to quickly clear input content
- **Error Handling**: Smart handling of invalid input with friendly prompts

## 🎨 Use Cases

### Learning Applications
- **Chinese Learning**: Help beginners learn Chinese character pronunciation
- **Language Teaching**: Provide teaching aids for Chinese teachers
- **Pronunciation Practice**: Practice standard pronunciation through pinyin

### Practical Tools
- **Document Processing**: Add pinyin annotations to Chinese documents
- **Language Research**: Linguistic research and analysis
- **Programming Development**: Provide pinyin support for Chinese content processing

## 🔧 Technical Architecture

### Frontend Tech Stack
- **Next.js 15**: React full-stack framework
- **React 19**: Latest React version
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **pinyin Library**: Professional Chinese to pinyin conversion library

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
- Chinese to pinyin converter, Chinese character to pinyin, pinyin conversion tool
- Online pinyin tool, Chinese pinyin lookup
- Chinese learning tool, pinyin learning
- Chinese character pronunciation, Chinese pinyin reference

### Content Strategy
- Provide rich tutorials and learning resources
- Regularly optimize conversion algorithms and user experience
- Support multi-language content (planned)
- Optimize page loading speed and user experience

## 📈 Usage Statistics

### Current Support
- **Character Coverage**: Supports common and rare Chinese characters
- **Tone Support**: Complete four-tone display
- **Response Time**: Average conversion time < 100ms
- **User Satisfaction**: Continuously collecting feedback and improving

### Future Plans
- Add support for more Chinese characters
- Support batch conversion functionality
- Add pronunciation audio features
- Develop mobile native applications

---

*Last Updated: January 26, 2025*

> 💡 **Tip**: Using the tone feature can help you better learn standard Chinese pronunciation!
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
