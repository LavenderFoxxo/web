/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/LavenderFolf',
        permanent: true
      },
      {
        source: '/fluff',
        destination: 'https://discord.com/api/oauth2/authorize?client_id=1072720839310573619&permissions=1617797049414&scope=bot',
        permanent: true
      },
      {
        source: '/themesong',
        destination: 'https://www.youtube.com/watch?v=K78cANAaKuc',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://github.com/LavenderFoxxo',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
