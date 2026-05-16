import bundleAnalyzer from '@next/bundle-analyzer'
import { createAutoImport } from 'next-auto-import'
import type { NextConfig } from 'next'

const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line n/prefer-global/process
  enabled: process.env.ANALYZE === 'true',
})

const withAutoImport = createAutoImport({
  imports: [
    'react',
    {
      twl: ['cn'],
    },
    {
      from: 'motion/react-m',
      imports: [['*', 'motion']],
    },
    {
      from: '~/i18n',
      imports: ['generateMetadataWithI18n'],
    },
  ],
})

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  turbopack: {
    rules: {
      '*.po': {
        loaders: ['@lingui/loader'],
        as: '*.js',
      },
    },
  },
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
  transpilePackages: ['three'],
}

export default [withBundleAnalyzer, withAutoImport].reduce(
  (config, fn) => fn(config),
  nextConfig,
)
