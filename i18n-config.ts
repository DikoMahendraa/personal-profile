export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'jp', 'id'],
} as const

export type Locale = (typeof i18n)['locales'][number]
