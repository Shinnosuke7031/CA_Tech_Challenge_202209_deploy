import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />

    <div className='all-wrapper'>
    {children}

    </div>

    <style jsx global>{`
        html {
          font-size: 16px;
          font-family:  '游ゴシック', YuGothic, 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3','ヒラギノ角ゴ Pro W3', 'メイリオ', Meiryo, sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          
        }
        
        body {
          background: #c7c5c5;
          color: #000;
          cursor: auto;
          font-size: 1em;
          font-style: normal;
          font-weight: 300;
          line-height: 1.444;
          margin: 0;
          padding: 0;
          overflow-wrap: break-word;
          word-wrap: break-word
        }
        
        blockquote, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, li, ol, p, pre, td, th, ul {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
          padding: 0
        }

        .all-wrapper {
          text-align: center;
          margin: 0 auto;
          width: 900px;
        }
                `}</style>

  </div>
)

export default Layout
