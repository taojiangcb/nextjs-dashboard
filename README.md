## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

# NextJS
## 样式
### Global Styles
### CSS Moduel
### Styled Components
### Tailwind
## 优化字体和图片
### 布局偏移
1. 在Next.js中，布局偏移是指在页面加载时，浏览器会先渲染布局，然后再加载页面中的内容。这可能会导致页面的视觉效果不正常， especially when using CSS animations or transitions.
### 添加主字体
```tsx
  // 在Next.js中，添加主字体的方法是使用字体库，例如Google Fonts。
  import { Inter } from 'next/font/google';
  export const inter = Inter({ subsets: ['latin'] });
```
```tsx
// 在layout.tsx中添加字体
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*  antialiased 是一个 CSS 类，用于启用抗锯齿。*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```
### 添加辅助字体

### 优化图片
#### 为什么要优化图片
1. 确保您的图像在不同屏幕尺寸上具有响应性。
2. 为不同的设备指定图像大小。
3. 防止在图像加载时发生布局偏移。
4. 延迟加载用户视区之外的图像。
#### The <Image> component 
1. 防止在加载图像时自动移动布局。
2. 调整图像大小以避免将大型图像传送到具有较小视区的设备。
3. 默认情况下延迟加载图像（图像在进入视区时加载）。
4. 以现代格式提供图片，例如 webp avif
## 布局和页面
### 嵌套路由
1. Next.js 使用文件系统路由，其中文件夹用于创建嵌套路由。每个文件夹都表示一个映射到 URL 段的路由段。
### Layout

## Navigating Between Pages 在页面之间导航
## Partial Prerendering 部分预呈现
### What Partial Prerendering is. 什么是部分预渲染。
#### Static vs. Dynamic Routes 

### How Partial Prerendering works. 部分预渲染的工作原理。




