import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>GGGEDR's Resources</span>,
  primaryHue: 91,
  primarySaturation: 100,
  project: {
    link: 'https://github.com/Vladimir-Urik/free-resources-docs',
  },
  chat: {
    link: 'https://discord.gg/zj72haU7gN',
  },
  docsRepositoryBase: 'https://github.com/Vladimir-Urik/free-resources-docs/tree/main/',
  footer: {
    text: 'GGGEDR\'s Free Resources Docs',
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
            <div style={{ width: "100%" }} />
        )
      }
      if (title === 'Introduction') {
        return <>❓ {title}</>
      }

      if (title.match(/^[\w\s]+/)) {
        return <>👉 {title}</>
      }

      return <>{title}</>
    }
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – FRD'
    }
  },
}

export default config
