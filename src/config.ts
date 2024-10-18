import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'CineBuzZBD',
  subtitle: 'Download movies for nothing',
  lang: 'en',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: false,
    src: 'https://i.ibb.co.com/z5KtZxJ/welcome-to-freeguybd.jpg',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center', // Equivalent to object-position, defaults center
    credit: {
      enable: true,         // Display the credit text of the banner image
      text: 'For live Sports Visit Here.',              // Credit text to be displayed
      url: 'https://freecatv.pages.dev'                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://pub-e589435eaea240798b2c94206f7d060d.r2.dev/resources/profile.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Mahamudun Nabi Siam',
  bio: 'Learning...',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: '',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: '',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: '',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
