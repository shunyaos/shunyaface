export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Shunya Face",
      "logo": {
        "alt": "Shunyaface Logo",
        "src": "img/logo.png"
      },
      "links": [
        {
          "to": "docs/get-started/first-app",
          "label": "Get Started",
          "position": "right"
        },
        {
          "to": "docs/demos/face-recognition",
          "label": "Demo",
          "position": "right"
        },
        {
          "href": "https://github.com/shunyaos/shunyaface",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/get-started/first-app"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/shunyaface"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/shunyaos/shunyaface"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Shunya OS, Inc."
    }
  },
  "title": "Shunya Face",
  "tagline": "Face detection and recognition library",
  "url": "https://shunyaos.gitlab.io",
  "baseUrl": "/shunyaface/",
  "favicon": "img/favicon.ico",
  "organizationName": "shunyaos",
  "projectName": "shunyaface",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "doc1",
          "sidebarPath": "/home/sneha/Videos/Shunyafacce/github/website/sidebars.js"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/shunyaos/shunyaface"
        },
        "theme": {
          "customCss": "/home/sneha/Videos/Shunyafacce/github/website/src/css/custom.css"
        }
      }
    ]
  ]
};