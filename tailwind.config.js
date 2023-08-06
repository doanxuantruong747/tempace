module.exports = {
  /** @type {import('tailwindcss').Config} */
  // purge: [
  //   "./pages/*.js",
  //   "./pages/**/*.js",
  //   "./components/*.js",
  //   "./components/**/*.js",
  // ],
  content: [
    './node_modules/flowbite/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    minHeight: {
      '100vh': '100vh',
    },
    maxHeight: {
      'custom-461': '461px',
    },
    maxWith: {
      'custom-461': '461px',
    },
    backgroundSize: {
      '90%': '90%',
      '80%': '80%',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      t: '0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      orange: '0px 20px 20px -15px rgba(245,56,56,0.81) ',
      'orange-md': '0px 20px 40px -15px rgba(245,56,56,0.81) ',
      none: 'none',
      learnmore: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      transparent: 'transparent',
      black: {
        100: '#555555',
        200: '#242424',
        400: '#000000',
        500: '#4F5665',
        600: '#0B132A',
      },
      orange: {
        100: '#FFECEC',
        500: '#F53855',
      },
      green: {
        500: '#2FAB73',
      },
      white: {
        100: '#FFFFFF',
        300: '#F8F8F8',
        500: '#fff',
      },
      gray: {
        100: '#EEEFF2',
        200: '#787878',
        400: '#AFB5C0',
        500: '#DDDDDD',
        600: '#CCCCCC',
      },
      blue: {
        100: '#0085FF',
        200: '#337FFF',
        300: '#337FFF',
        400: '#78CDFF',
        500: '#0B2C5E',
      },
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      lineHeight: {
        100: '100%',
      },
      backgroundImage: {
        // 'hero-pattern': "url('~/assets/hero/background_hero4.png')",
        // 'hello-pattern': "url('~/assets/hello/background.png')",
        //  'hello-pattern-m': "url('~/assets/hello/backgroundMobile.png')",
        // 'our-team-pattern': "url('~/assets/ourTeam/CardBG.png')",
        // 'transaction-img': "url('~/assets/hero/background_hero6.png')",
        // 'hero-pattern-m': "url('~/assets/hero/bg_m.png')",
        // 'look-likes': "url('~/assets/looks-like/bg.png')",
        // 'look-likes-m': "url('~/assets/looks-like/new_bg_M.png')",
        // 'look-likes-m-1': "url('~/assets/looks-like/bg_m-1.png')",
        // translations: "url('~/assets/translations/bg.png')",
        // 'translations-m': "url('~/assets/translations/bg_m.png')",
        // contact_m: "url('~/assets/contact/bg_M.png')",
        // 'bg-teaser': "url('~/assets/teaser/bg_teaser.png')",
        // 'bg-feature': "url('~/assets/feature/background.png')",
        // 'bg-translation': "url('~/assets/translation/bg.png')",
        // 'bg-transaltion': "url('~/assets/translation/bg_content.png')",
        // 'bg-conversation': "url('~/assets/conversation/conversation.png')",
        // 'bg-register': "url('~/assets/register/background.png')",
        // 'btn-register': "url('~/assets/register/btn-register.png')",
        // 'bg-stepRegister': "url('~/assets/register/bg-stepRegister_old.png')",
        // 'bg-recentBlog': "url('~/assets/recent-blog/bg_recent.png')",
      },
      width: {
        70: '70px',
        114: '114px',
      },
      height: {
        70: '70px',
        114: '114px',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['active', 'hover'],
    },
  },
  plugins: [],
};
