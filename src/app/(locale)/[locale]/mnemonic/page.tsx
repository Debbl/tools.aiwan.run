'use client'
import { Trans, useLingui } from '@lingui/react/macro'
import {
  generateMnemonic,
  mnemonicToEntropy,
  mnemonicToSeedSync,
  validateMnemonic,
} from '@scure/bip39'
import {
  EyeIcon,
  EyeOffIcon,
  RefreshCwIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
} from 'lucide-react'
import { useDeferredValue, useMemo, useState } from 'react'
import { CopyButton } from '~/components/copy-button'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'
import {
  WORD_COUNT_OPTIONS,
  WORD_COUNT_TO_STRENGTH,
  WORDLIST_OPTIONS,
  WORDLISTS,
} from './wordlists'
import type { WordCount, WordlistId } from './wordlists'

function bytesToHex(bytes: Uint8Array) {
  return Array.from(bytes, (value) => value.toString(16).padStart(2, '0')).join(
    '',
  )
}

function normalizeMnemonic(value: string) {
  return value
    .normalize('NFKD')
    .replace(/[\s\u3000]+/gu, ' ')
    .trim()
}

function getEntropyBits(wordCount: number) {
  return Math.floor((wordCount * 11 * 32) / 33)
}

function getChecksumBits(wordCount: number) {
  return Math.floor(getEntropyBits(wordCount) / 32)
}

const FIELD_CLASS_NAME =
  'border-input bg-background focus-visible:border-ring focus-visible:ring-ring/50 flex h-10 w-full rounded-md border px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px]'

export default function Page() {
  const [wordCount, setWordCount] = useState<WordCount>(12)
  const [wordlistId, setWordlistId] = useState<WordlistId>('english')
  const [mnemonic, setMnemonic] = useState(() =>
    generateMnemonic(WORDLISTS.english, WORD_COUNT_TO_STRENGTH[12]),
  )
  const [passphrase, setPassphrase] = useState('')
  const [isSeedVisible, setIsSeedVisible] = useState(false)

  const { t } = useLingui()
  const wordlist = WORDLISTS[wordlistId]
  const deferredMnemonic = useDeferredValue(mnemonic)
  const deferredPassphrase = useDeferredValue(passphrase)
  const normalizedMnemonic = useMemo(
    () => normalizeMnemonic(deferredMnemonic),
    [deferredMnemonic],
  )
  const wordCountDetected = normalizedMnemonic
    ? normalizedMnemonic.split(' ').length
    : 0

  const derivedResult = useMemo(() => {
    if (!normalizedMnemonic) {
      return {
        entropyHex: '',
        isValid: false,
        seedHex: '',
        validationMessage: t`Generate or paste a mnemonic phrase to begin.`,
      }
    }

    if (!validateMnemonic(normalizedMnemonic, wordlist)) {
      return {
        entropyHex: '',
        isValid: false,
        seedHex: '',
        validationMessage: t`The mnemonic does not match the selected BIP-39 wordlist or checksum.`,
      }
    }

    try {
      const entropy = mnemonicToEntropy(normalizedMnemonic, wordlist)
      const seed = mnemonicToSeedSync(normalizedMnemonic, deferredPassphrase)

      return {
        entropyHex: bytesToHex(entropy),
        isValid: true,
        seedHex: bytesToHex(seed),
        validationMessage: t`Valid BIP-39 mnemonic.`,
      }
    } catch {
      return {
        entropyHex: '',
        isValid: false,
        seedHex: '',
        validationMessage: t`Unable to derive seed with the current input.`,
      }
    }
  }, [deferredPassphrase, normalizedMnemonic, t, wordlist])

  const handleGenerate = () => {
    setIsSeedVisible(false)
    setMnemonic(generateMnemonic(wordlist, WORD_COUNT_TO_STRENGTH[wordCount]))
  }

  const activeWordlistLabel =
    WORDLIST_OPTIONS.find((option) => option.value === wordlistId)?.label ??
    wordlistId
  const effectiveWordCount = WORD_COUNT_OPTIONS.includes(
    wordCountDetected as WordCount,
  )
    ? wordCountDetected
    : 0
  const entropyBits = effectiveWordCount
    ? getEntropyBits(effectiveWordCount)
    : 0
  const checksumBits = effectiveWordCount
    ? getChecksumBits(effectiveWordCount)
    : 0
  const seedPreview = isSeedVisible
    ? derivedResult.seedHex
    : derivedResult.seedHex.replace(/./g, '•')

  return (
    <div className='mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8'>
      <header className='flex flex-col gap-3 border-b pb-6'>
        <div className='flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-semibold tracking-tight'>
              <Trans>Mnemonic Generator</Trans>
            </h1>
            <p className='text-muted-foreground max-w-3xl text-sm sm:text-base'>
              <Trans>
                Generate and validate BIP-39 mnemonic phrases locally in your
                browser, with checksum checks, multiple official wordlists, and
                optional seed derivation.
              </Trans>
            </p>
          </div>

          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${
              derivedResult.isValid
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600'
                : 'border-amber-500/30 bg-amber-500/10 text-amber-700'
            }`}
          >
            {derivedResult.isValid ? (
              <ShieldCheckIcon className='size-4' />
            ) : (
              <ShieldAlertIcon className='size-4' />
            )}
            <span>{derivedResult.validationMessage}</span>
          </div>
        </div>

        <div className='rounded-2xl border border-dashed px-4 py-3 text-sm leading-6'>
          <p className='font-medium'>
            <Trans>Security reminder</Trans>
          </p>
          <p className='text-muted-foreground mt-1'>
            <Trans>
              Everything runs locally in your browser. Never share your
              mnemonic, entropy, seed, or passphrase with anyone.
            </Trans>
          </p>
        </div>
      </header>

      <main className='grid flex-1 gap-6 py-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]'>
        <section className='space-y-6'>
          <div className='grid gap-4 rounded-3xl border p-5 sm:grid-cols-2 xl:grid-cols-4'>
            <label className='space-y-2 text-sm'>
              <span className='font-medium'>
                <Trans>Word count</Trans>
              </span>
              <select
                className={FIELD_CLASS_NAME}
                value={String(wordCount)}
                onChange={(event) =>
                  setWordCount(Number(event.target.value) as WordCount)
                }
              >
                {WORD_COUNT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option} {t`words`} ({WORD_COUNT_TO_STRENGTH[option]} bits)
                  </option>
                ))}
              </select>
            </label>

            <label className='space-y-2 text-sm'>
              <span className='font-medium'>
                <Trans>Wordlist</Trans>
              </span>
              <select
                className={FIELD_CLASS_NAME}
                value={wordlistId}
                onChange={(event) =>
                  setWordlistId(event.target.value as WordlistId)
                }
              >
                {WORDLIST_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className='space-y-2 text-sm sm:col-span-2 xl:col-span-1'>
              <span className='font-medium'>
                <Trans>BIP-39 passphrase</Trans>
              </span>
              <input
                className={FIELD_CLASS_NAME}
                type='password'
                value={passphrase}
                autoComplete='off'
                placeholder={t`Optional extra password`}
                onChange={(event) => setPassphrase(event.target.value)}
              />
            </label>

            <div className='flex items-end'>
              <Button className='w-full' onClick={handleGenerate}>
                <RefreshCwIcon className='size-4' />
                <Trans>Generate new mnemonic</Trans>
              </Button>
            </div>
          </div>

          <div className='rounded-3xl border p-5'>
            <div className='mb-3 flex items-center justify-between gap-3'>
              <div>
                <h2 className='font-medium'>
                  <Trans>Mnemonic phrase</Trans>
                </h2>
                <p className='text-muted-foreground mt-1 text-sm'>
                  <Trans>
                    The selected wordlist is {activeWordlistLabel}. English is
                    usually the safest choice for wallet interoperability.
                  </Trans>
                </p>
              </div>
              <CopyButton text={mnemonic} />
            </div>

            <Textarea
              className='min-h-40 resize-y text-sm leading-7'
              value={mnemonic}
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              placeholder={t`Generate or paste a BIP-39 mnemonic phrase`}
              spellCheck={false}
              onChange={(event) => setMnemonic(event.target.value)}
            />
          </div>

          <div className='grid gap-4 lg:grid-cols-3'>
            <article className='rounded-3xl border p-5'>
              <p className='text-muted-foreground text-sm'>
                <Trans>Detected words</Trans>
              </p>
              <p className='mt-2 text-3xl font-semibold'>{wordCountDetected}</p>
            </article>

            <article className='rounded-3xl border p-5'>
              <p className='text-muted-foreground text-sm'>
                <Trans>Entropy bits</Trans>
              </p>
              <p className='mt-2 text-3xl font-semibold'>
                {entropyBits || '--'}
              </p>
            </article>

            <article className='rounded-3xl border p-5'>
              <p className='text-muted-foreground text-sm'>
                <Trans>Checksum bits</Trans>
              </p>
              <p className='mt-2 text-3xl font-semibold'>
                {checksumBits || '--'}
              </p>
            </article>
          </div>
        </section>

        <aside className='space-y-6'>
          <section className='rounded-3xl border p-5'>
            <div className='mb-3 flex items-center justify-between gap-3'>
              <div>
                <h2 className='font-medium'>
                  <Trans>Entropy (hex)</Trans>
                </h2>
                <p className='text-muted-foreground mt-1 text-sm'>
                  <Trans>
                    This is the raw secret entropy behind the mnemonic.
                  </Trans>
                </p>
              </div>
              <CopyButton text={derivedResult.entropyHex} />
            </div>

            <Textarea
              readOnly
              className='min-h-28 resize-none font-mono text-xs leading-6'
              value={derivedResult.entropyHex}
              placeholder={t`Entropy will appear here after validation`}
            />
          </section>

          <section className='rounded-3xl border p-5'>
            <div className='mb-3 flex items-center justify-between gap-3'>
              <div>
                <h2 className='font-medium'>
                  <Trans>Seed (hex)</Trans>
                </h2>
                <p className='text-muted-foreground mt-1 text-sm'>
                  <Trans>
                    Derived with PBKDF2-HMAC-SHA512 and 2048 iterations.
                  </Trans>
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => setIsSeedVisible((visible) => !visible)}
                >
                  {isSeedVisible ? (
                    <EyeOffIcon className='size-4' />
                  ) : (
                    <EyeIcon className='size-4' />
                  )}
                  {isSeedVisible ? <Trans>Hide</Trans> : <Trans>Reveal</Trans>}
                </Button>
                <CopyButton text={derivedResult.seedHex} />
              </div>
            </div>

            <Textarea
              readOnly
              className='min-h-36 resize-none font-mono text-xs leading-6'
              value={seedPreview}
              placeholder={t`Seed will appear here after validation`}
            />
          </section>

          <section className='rounded-3xl border p-5 text-sm leading-6'>
            <h2 className='font-medium'>
              <Trans>Compatibility notes</Trans>
            </h2>
            <div className='text-muted-foreground mt-3 space-y-2'>
              <p>
                <Trans>
                  Most wallets that support mnemonic import expect standard
                  BIP-39 English phrases.
                </Trans>
              </p>
              <p>
                <Trans>
                  Non-English BIP-39 wordlists exist, but cross-wallet support
                  can be less consistent.
                </Trans>
              </p>
              <p>
                <Trans>
                  Changing the passphrase changes the derived seed completely.
                </Trans>
              </p>
            </div>
          </section>
        </aside>
      </main>
    </div>
  )
}
