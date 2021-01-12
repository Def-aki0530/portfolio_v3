require('dotenv').config();
const { API_KEY, BLOG_API_KEY } = process.env;

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'static',
  head: {
    title: '安西鴻輝 ポートフォリオ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '安西鴻輝のポートフォリオWebサイトです。過去にデザイン・コーディングをしたロゴやWebサイトを掲載しています。' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://anzaikouki-portfolio.netlify.app/' },
      { hid: 'og:title', property: 'og:title', content: '安西鴻輝 ポートフォリオ' },
      { hid: 'og:description', property: 'og:description', content: '安西鴻輝のポートフォリオWebサイトです。過去にデザイン・コーディングをしたロゴやWebサイトを掲載しています。' },
      { hid: 'og:image', property: 'og:image', content: 'https://anzaikouki-portfolio.netlify.app/img/AnzaiKoukiPortfolio.jpg' },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700&display=swap"
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/reset.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-scrollto'},
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ["~/assets/scss/variable.scss"],
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  env: {
    API_KEY,
  }
}
