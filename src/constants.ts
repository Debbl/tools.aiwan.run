/* eslint-disable n/prefer-global/process */
export const CWD = process.cwd()
export const isDev = process.env.NODE_ENV === 'development'
export const baseUrl = isDev ? process.env.__NEXT_PRIVATE_ORIGIN! : 'https://aiwan.run'

export function getWebsite(lang?: string) {
  const isZh = lang === 'zh'

  return {
    title: isZh ? 'Magic Tools - 魔法工具' : 'Magic Tools - Magic Tools',
    authors: [{ name: 'Brendan Dash', url: 'https://aiwan.run/' }],
    description: isZh ? 'Magic Tools - 魔法工具' : 'Magic Tools - Magic Tools',
    keywords: isZh
      ? [
          'base64',
          'base64 to png',
          'battery',
          'code diff',
          'dice roller',
          'generate query',
          'keep screen on',
          'miwifi sn',
          'pinyin',
        ]
      : [
          'base64',
          'base64 to png',
          'battery',
          'code diff',
          'dice roller',
          'generate query',
          'keep screen on',
          'miwifi sn',
          'pinyin',
        ],
    category: isZh ? '工具' : 'Tools',
    language: isZh ? 'zh' : 'en',
    creator: 'Brendan Dash',
    publisher: 'Brendan Dash',
    domain: isDev ? process.env.__NEXT_PRIVATE_ORIGIN! : 'https://tools.aiwan.run',
    email: 'me@aiwan.run',
    social: {
      twitter: '@Debbl66',
      github: 'https://github.com/Debbl/tools.aiwan.run',
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Magic Tools',
      'description': isZh ? '魔法工具' : 'Magic Tools',
      'url': 'https://tools.aiwan.run',
      'applicationCategory': isZh ? '工具' : 'Tools',
      'operatingSystem': 'Web Browser',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
      'author': {
        '@type': 'Person',
        'name': 'Brendan Dash (Debbl)',
        'url': 'https://aiwan.run/',
      },
      'creator': {
        '@type': 'Person',
        'name': 'Brendan Dash (Debbl)',
        'url': 'https://aiwan.run/',
      },
      'publisher': {
        '@type': 'Person',
        'name': 'Brendan Dash (Debbl)',
        'url': 'https://aiwan.run/',
      },
      'featureList': isZh
        ? [
            'base64',
            'base64 to png',
            'battery',
            'code diff',
            'dice roller',
            'generate query',
            'keep screen on',
            'miwifi sn',
            'pinyin',
          ]
        : [
            'base64',
            'base64 to png',
            'battery',
            'code diff',
            'dice roller',
            'generate query',
            'keep screen on',
            'miwifi sn',
            'pinyin',
          ],
      'screenshot': 'https://tools.aiwan.run/opengraph-image.png',
      'softwareVersion': '1.0.0',
      'downloadUrl': 'https://tools.aiwan.run',
      'installUrl': 'https://tools.aiwan.run',
    },
  }
}
