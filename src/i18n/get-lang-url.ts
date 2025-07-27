export function getLangUrl(locale: string) {
  return locale === 'en' ? '' : `/${locale}`
}
