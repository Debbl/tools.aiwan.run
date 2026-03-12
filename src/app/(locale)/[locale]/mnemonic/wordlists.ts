import { wordlist as czechWordlist } from '@scure/bip39/wordlists/czech.js'
import { wordlist as englishWordlist } from '@scure/bip39/wordlists/english.js'
import { wordlist as frenchWordlist } from '@scure/bip39/wordlists/french.js'
import { wordlist as italianWordlist } from '@scure/bip39/wordlists/italian.js'
import { wordlist as japaneseWordlist } from '@scure/bip39/wordlists/japanese.js'
import { wordlist as koreanWordlist } from '@scure/bip39/wordlists/korean.js'
import { wordlist as portugueseWordlist } from '@scure/bip39/wordlists/portuguese.js'
import { wordlist as simplifiedChineseWordlist } from '@scure/bip39/wordlists/simplified-chinese.js'
import { wordlist as spanishWordlist } from '@scure/bip39/wordlists/spanish.js'
import { wordlist as traditionalChineseWordlist } from './traditional-chinese-wordlist'

export const WORD_COUNT_OPTIONS = [12, 15, 18, 21, 24] as const

export type WordCount = (typeof WORD_COUNT_OPTIONS)[number]

export const WORD_COUNT_TO_STRENGTH: Record<WordCount, number> = {
  12: 128,
  15: 160,
  18: 192,
  21: 224,
  24: 256,
}

export const WORDLIST_OPTIONS = [
  {
    value: 'english',
    label: 'English',
  },
  {
    value: 'simplified-chinese',
    label: '简体中文',
  },
  {
    value: 'traditional-chinese',
    label: '繁體中文',
  },
  {
    value: 'japanese',
    label: '日本語',
  },
  {
    value: 'korean',
    label: '한국어',
  },
  {
    value: 'spanish',
    label: 'Español',
  },
  {
    value: 'french',
    label: 'Français',
  },
  {
    value: 'italian',
    label: 'Italiano',
  },
  {
    value: 'portuguese',
    label: 'Português',
  },
  {
    value: 'czech',
    label: 'Čeština',
  },
] as const

export type WordlistId = (typeof WORDLIST_OPTIONS)[number]['value']

export const WORDLISTS: Record<WordlistId, string[]> = {
  'english': englishWordlist,
  'simplified-chinese': simplifiedChineseWordlist,
  'traditional-chinese': traditionalChineseWordlist,
  'japanese': japaneseWordlist,
  'korean': koreanWordlist,
  'spanish': spanishWordlist,
  'french': frenchWordlist,
  'italian': italianWordlist,
  'portuguese': portugueseWordlist,
  'czech': czechWordlist,
}
