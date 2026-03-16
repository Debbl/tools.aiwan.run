export type RandomNameSeparator = '_' | '-' | ' '

export interface GenerateRandomNameOptions {
  prefix?: string
  separator?: RandomNameSeparator
}

const DEFAULT_COUNT = 6
const MIN_COUNT = 1
const MAX_COUNT = 20

export const adjectives: readonly string[] = [
  'ancient',
  'bold',
  'brave',
  'bright',
  'calm',
  'careful',
  'charming',
  'cheerful',
  'clever',
  'cloudy',
  'cool',
  'cosmic',
  'crimson',
  'curious',
  'daring',
  'dazzling',
  'deep',
  'eager',
  'epic',
  'fancy',
  'fearless',
  'fierce',
  'flashy',
  'gentle',
  'giant',
  'glorious',
  'golden',
  'grand',
  'happy',
  'icy',
  'jolly',
  'keen',
  'kind',
  'lively',
  'lucky',
  'magic',
  'mighty',
  'misty',
  'modern',
  'mystic',
  'nimble',
  'noisy',
  'nova',
  'peaceful',
  'plucky',
  'proud',
  'quick',
  'radiant',
  'rapid',
  'royal',
  'shiny',
  'silent',
  'silver',
  'smart',
  'smooth',
  'solar',
  'sparkling',
  'stellar',
  'stormy',
  'sunny',
  'swift',
  'tidy',
  'tiny',
  'tough',
  'tranquil',
  'vivid',
  'warm',
  'wild',
  'wise',
  'witty',
]

export const heroes: readonly string[] = [
  'agent_zero',
  'angel',
  'apocalypse',
  'archangel',
  'ares',
  'avengers',
  'banshee',
  'beast',
  'bishop',
  'black_bolt',
  'black_cat',
  'black_panther',
  'black_widow',
  'blade',
  'blink',
  'blue_marvel',
  'boom_boom',
  'cable',
  'callisto',
  'captain_america',
  'captain_marvel',
  'carnage',
  'chameleon',
  'colossus',
  'crystal',
  'cyclops',
  'dagger',
  'daredevil',
  'darkhawk',
  'dazzler',
  'deadpool',
  'doctor_doom',
  'doctor_strange',
  'domino',
  'dormammu',
  'drax',
  'echo',
  'electro',
  'elektra',
  'emma_frost',
  'falcon',
  'firebird',
  'firestar',
  'forge',
  'galactus',
  'gambit',
  'gamora',
  'ghost_rider',
  'gladiator',
  'goblin_queen',
  'goliath',
  'groot',
  'guardian',
  'havok',
  'hawkeye',
  'hellcat',
  'hercules',
  'hulk',
  'iceman',
  'ikaris',
  'iron_fist',
  'iron_man',
  'jubilee',
  'juggernaut',
  'karma',
  'kitty_pryde',
  'lockjaw',
  'logan',
  'loki',
  'luke_cage',
  'magik',
  'magneto',
  'mandarin',
  'medusa',
  'moon_knight',
  'mystique',
  'namor',
  'nebula',
  'nightcrawler',
  'nova',
  'odin',
  'phoenix',
  'polaris',
  'professor_x',
  'psylocke',
  'punisher',
  'quasar',
  'quicksilver',
  'rhino',
  'rocket_raccoon',
  'rogue',
  'ronan',
  'scarlet_spider',
  'scarlet_witch',
  'sentinel',
  'shadowcat',
  'silver_sable',
  'silver_surfer',
  'spitfire',
  'squirrel_girl',
  'starfox',
  'stature',
  'storm',
  'sunfire',
  'sunspot',
  'taskmaster',
  'thanos',
  'thing',
  'thor',
  'tigra',
  'triton',
  'ultron',
  'valkyrie',
  'venom',
  'vision',
  'warlock',
  'wasp',
  'winter_soldier',
  'wolverine',
]

export function normalizeRandomNameCount(input: number): number {
  if (!Number.isFinite(input)) return DEFAULT_COUNT

  return Math.min(MAX_COUNT, Math.max(MIN_COUNT, Math.floor(input)))
}

function getRandomIndex(length: number): number {
  if (length <= 0) {
    throw new Error('length must be greater than 0')
  }

  if (typeof crypto !== 'undefined' && 'getRandomValues' in crypto) {
    const values = new Uint32Array(1)
    crypto.getRandomValues(values)
    return values[0]! % length
  }

  return Math.floor(Math.random() * length)
}

function pickRandomWord(words: readonly string[]): string {
  return words[getRandomIndex(words.length)]!
}

function normalizeAffix(value?: string): string | null {
  const normalized = value?.trim()

  return normalized || null
}

export function generateRandomName(
  options: GenerateRandomNameOptions = {},
): string {
  const separator = options.separator ?? '_'
  const prefix = normalizeAffix(options.prefix)
  const adjective = pickRandomWord(adjectives)
  const hero = pickRandomWord(heroes)

  return [prefix, adjective, hero].filter(Boolean).join(separator)
}

export function generateRandomNames(
  count: number,
  options: GenerateRandomNameOptions = {},
): string[] {
  const targetCount = normalizeRandomNameCount(count)
  const results = new Set<string>()
  const maxAttempts = targetCount * 8
  let attempts = 0

  while (results.size < targetCount && attempts < maxAttempts) {
    results.add(generateRandomName(options))
    attempts += 1
  }

  return Array.from(results)
}
