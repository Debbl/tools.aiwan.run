'use client'
import { SEOLayout } from '~/components/seo-layout'

const markdownZh = `
# 🔐 MiWiFi SSH 密码计算器 - 在线路由器工具

## 📖 项目简介

MiWiFi SSH 密码计算器是一个专业的在线工具，帮助您根据小米路由器的序列号计算 SSH 密码。这个工具基于小米路由器的算法，为开发者和技术爱好者提供便捷的 SSH 访问解决方案。

## ✨ 主要功能

### 🎯 核心特性
- **密码计算**: 根据序列号自动计算 SSH 密码
- **算法支持**: 支持小米路由器系列产品的密码算法
- **一键复制**: 轻松复制计算出的密码
- **实时计算**: 输入序列号后立即显示密码
- **响应式设计**: 完美适配桌面端和移动端设备

### 🛠️ 技术特点
- **高性能**: 基于 Next.js 15 构建，提供极速计算体验
- **PWA 支持**: 可安装为渐进式 Web 应用
- **离线功能**: 支持 Service Worker，提供离线访问能力
- **现代 UI**: 采用 Tailwind CSS 构建的美观界面
- **TypeScript**: 完整的类型安全保证

## 🚀 如何使用

### 基本操作
1. **输入序列号**: 在输入框中输入小米路由器的序列号
2. **自动计算**: 系统会自动计算对应的 SSH 密码
3. **查看结果**: 密码字段会显示计算出的密码
4. **复制密码**: 点击复制按钮即可复制密码

### 高级功能
- **格式验证**: 自动验证序列号格式的正确性
- **错误处理**: 智能处理无效的序列号输入
- **历史记录**: 保存常用的序列号和密码组合
- **批量处理**: 支持批量计算多个序列号

## 🎨 使用场景

### 开发应用
- **路由器管理**: 获取小米路由器的 SSH 访问权限
- **固件开发**: 为路由器固件开发提供访问工具
- **网络调试**: 进行网络配置和调试工作
- **安全测试**: 进行路由器安全测试

### 实用工具
- **设备管理**: 管理小米路由器设备
- **技术研究**: 研究路由器技术细节
- **学习工具**: 学习路由器 SSH 访问方法

## 🔧 技术架构

### 前端技术栈
- **Next.js 15**: React 全栈框架
- **React 19**: 最新的 React 版本
- **TypeScript**: 类型安全的 JavaScript
- **Tailwind CSS**: 实用优先的 CSS 框架
- **密码算法**: 使用小米路由器的密码计算算法

### 性能优化
- **实时计算**: 使用 useMemo 优化计算性能
- **代码分割**: 按需加载组件
- **缓存策略**: 智能的静态资源缓存
- **PWA 支持**: 离线访问和安装功能

## 🌟 项目特色

### 开源免费
- 完全开源，基于 MIT 许可证
- 无需注册，即开即用
- 无广告干扰，纯净体验

### 持续更新
- 定期优化密码计算算法
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
- 优化的密码输入体验
- 移动端友好的复制提示

## 🔗 相关资源

### 项目链接
- **GitHub 仓库**: [tools.aiwan.run](https://github.com/Debbl/tools.aiwan.run/)
- **在线演示**: 当前页面
- **问题反馈**: 欢迎在 GitHub 上提交 Issue

## 🎯 SEO 优化

### 关键词覆盖
- miwifi ssh 密码计算器, 小米路由器 ssh 工具, 在线密码计算
- miwifi 密码计算, 路由器 ssh 密码, 小米路由器工具
- 在线路由器工具, ssh 密码生成器
- miwifi 序列号, 路由器访问工具

### 内容策略
- 提供丰富的使用教程和技术文档
- 定期优化密码计算算法和用户体验
- 支持多语言内容（计划中）
- 优化页面加载速度和用户体验

## 📈 使用统计

### 当前支持
- **设备支持**: 支持小米路由器系列产品
- **算法准确**: 准确的密码计算算法
- **响应时间**: 实时密码计算
- **用户满意度**: 持续收集反馈并改进

### 未来计划
- 添加更多路由器型号支持
- 支持其他品牌路由器
- 增加密码验证功能
- 开发移动端原生应用

---

*最后更新: 2025年1月26日*

> 💡 **小贴士**: MiWiFi SSH 密码计算器为技术爱好者提供便捷的路由器访问工具！
`

const markdownEn = `
# 🔐 MiWiFi SSH Password Calculator - Online Router Tool

## 📖 Project Introduction

The MiWiFi SSH Password Calculator is a professional online tool that helps you calculate SSH passwords based on Xiaomi router serial numbers. This tool is based on Xiaomi router algorithms and provides convenient SSH access solutions for developers and tech enthusiasts.

## ✨ Main Features

### 🎯 Core Features
- **Password Calculation**: Automatically calculate SSH password based on serial number
- **Algorithm Support**: Support password algorithms for Xiaomi router series products
- **One-click Copy**: Easily copy calculated passwords
- **Real-time Calculation**: Display password immediately after entering serial number
- **Responsive Design**: Perfectly adapts to desktop and mobile devices

### 🛠️ Technical Features
- **High Performance**: Built on Next.js 15, providing lightning-fast calculation experience
- **PWA Support**: Can be installed as a Progressive Web App
- **Offline Functionality**: Supports Service Worker for offline access
- **Modern UI**: Beautiful interface built with Tailwind CSS
- **TypeScript**: Complete type safety guarantee

## 🚀 How to Use

### Basic Operations
1. **Input Serial Number**: Enter Xiaomi router serial number in the input box
2. **Auto Calculation**: System automatically calculates corresponding SSH password
3. **View Results**: Password field displays calculated password
4. **Copy Password**: Click copy button to copy password

### Advanced Features
- **Format Validation**: Automatically validate serial number format correctness
- **Error Handling**: Smart handling of invalid serial number input
- **History Record**: Save commonly used serial number and password combinations
- **Batch Processing**: Support batch calculation of multiple serial numbers

## 🎨 Use Cases

### Development Applications
- **Router Management**: Get SSH access to Xiaomi routers
- **Firmware Development**: Provide access tools for router firmware development
- **Network Debugging**: Perform network configuration and debugging work
- **Security Testing**: Conduct router security testing

### Practical Tools
- **Device Management**: Manage Xiaomi router devices
- **Technical Research**: Research router technical details
- **Learning Tool**: Learn router SSH access methods

## 🔧 Technical Architecture

### Frontend Tech Stack
- **Next.js 15**: React full-stack framework
- **React 19**: Latest React version
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Password Algorithm**: Use Xiaomi router password calculation algorithm

### Performance Optimization
- **Real-time Calculation**: Optimize calculation performance with useMemo
- **Code Splitting**: On-demand component loading
- **Caching Strategy**: Smart static resource caching
- **PWA Support**: Offline access and installation features

## 🌟 Project Highlights

### Open Source & Free
- Completely open source under MIT license
- No registration required, ready to use
- No ad interference, pure experience

### Continuous Updates
- Regularly optimize password calculation algorithms
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
- Optimized password input experience
- Mobile-friendly copy prompts

## 🔗 Related Resources

### Project Links
- **GitHub Repository**: [tools.aiwan.run](https://github.com/Debbl/tools.aiwan.run/)
- **Online Demo**: Current page
- **Issue Feedback**: Welcome to submit issues on GitHub

## 🎯 SEO Optimization

### Keyword Coverage
- miwifi ssh password calculator, xiaomi router ssh tool, online password calculator
- miwifi password calculator, router ssh password, xiaomi router tool
- online router tool, ssh password generator
- miwifi serial number, router access tool

### Content Strategy
- Provide rich tutorials and technical documentation
- Regularly optimize password calculation algorithms and user experience
- Support multi-language content (planned)
- Optimize page loading speed and user experience

## 📈 Usage Statistics

### Current Support
- **Device Support**: Support Xiaomi router series products
- **Algorithm Accuracy**: Accurate password calculation algorithm
- **Response Time**: Real-time password calculation
- **User Satisfaction**: Continuously collecting feedback and improving

### Future Plans
- Add support for more router models
- Support other brand routers
- Add password verification functionality
- Develop mobile native applications

---

*Last Updated: January 26, 2025*

> 💡 **Tip**: MiWiFi SSH Password Calculator provides convenient router access tools for tech enthusiasts!
`

export function SEO({ className }: { className?: string }) {
  return <SEOLayout className={className} markdownEn={markdownEn} markdownZh={markdownZh} />
}
