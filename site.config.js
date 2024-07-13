const CONFIG = {
  // profile setting (required)
  profile: {
    name: "여하월",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "보컬 / 편집",
    bio: "노래하고 영상하는 여하월 입니다",
    email: "yeonhawol3@gmail.com",
    linkedin: "",
    github: "",
    instagram: "",
    // youtube : "https://youtube.com/channel/UCwskk9ScOIehrv3gnTm8deQ?si=2jL0ssFglXGA18Oc",
  },
  projects: [
    {
      name: `여하월 BLOG`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "여하월 BLOG",
    description: "welcome to BLOG!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://yeohawol_official.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "kuruhakr/blog_1",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
