/* eslint-disable camelcase */
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import * as locales from './locales'

i18n.translations = {
  'en-US': locales.en_US,
  'pt-BR': locales.pt_BR,
}

i18n.defaultLocale = 'pt-BR'
i18n.locale = Localization.locale
i18n.fallbacks = true

export { i18n }
