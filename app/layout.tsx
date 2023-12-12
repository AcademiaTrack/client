import React from 'react'
import { Inter } from 'next/font/google'
import theme from '@/theme/themeConfig'
import { ConfigProvider } from 'antd'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AcademiaTrack',
  description: 'AcademiaTrack built by Shahriar Ahmed Shovon',
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body className={inter.className}>
      {children}
      {/* <ConfigProvider
        prefixCls="wui-ant"
        iconPrefixCls="wui-anticon"
        theme={theme}
      >
        
      </ConfigProvider> */}
    </body>
  </html>
)

export default RootLayout
