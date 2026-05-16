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
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Field, FieldLabel } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { NativeSelect, NativeSelectOption } from '~/components/ui/native-select'
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
    <div className='mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8'>
      <header className='flex flex-col gap-3 border-b pb-6'>
        <div className='flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between'>
          <div className='min-w-0 space-y-2'>
            <h1 className='text-2xl font-semibold tracking-tight sm:text-3xl'>
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

          <Badge
            variant='outline'
            className={`h-auto max-w-full items-center self-start rounded-full px-3 py-1.5 text-sm whitespace-normal ${
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
            <span className='min-w-0 leading-5'>
              {derivedResult.validationMessage}
            </span>
          </Badge>
        </div>

        <Alert className='rounded-2xl border-dashed'>
          <AlertTitle>
            <Trans>Security reminder</Trans>
          </AlertTitle>
          <AlertDescription className='mt-1 leading-6'>
            <Trans>
              Everything runs locally in your browser. Never share your
              mnemonic, entropy, seed, or passphrase with anyone.
            </Trans>
          </AlertDescription>
        </Alert>
      </header>

      <main className='grid min-w-0 flex-1 gap-5 py-5 sm:gap-6 sm:py-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]'>
        <section className='min-w-0 space-y-5 sm:space-y-6'>
          <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
            <CardContent>
              <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
                <Field>
                  <FieldLabel htmlFor='mnemonic-word-count'>
                    <Trans>Word count</Trans>
                  </FieldLabel>
                  <NativeSelect
                    className='w-full'
                    id='mnemonic-word-count'
                    value={String(wordCount)}
                    onChange={(event) =>
                      setWordCount(Number(event.target.value) as WordCount)
                    }
                  >
                    {WORD_COUNT_OPTIONS.map((option) => (
                      <NativeSelectOption key={option} value={option}>
                        {option} {t`words`} ({WORD_COUNT_TO_STRENGTH[option]}{' '}
                        bits)
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                </Field>

                <Field>
                  <FieldLabel htmlFor='mnemonic-wordlist'>
                    <Trans>Wordlist</Trans>
                  </FieldLabel>
                  <NativeSelect
                    className='w-full'
                    id='mnemonic-wordlist'
                    value={wordlistId}
                    onChange={(event) =>
                      setWordlistId(event.target.value as WordlistId)
                    }
                  >
                    {WORDLIST_OPTIONS.map((option) => (
                      <NativeSelectOption
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </NativeSelectOption>
                    ))}
                  </NativeSelect>
                </Field>

                <Field className='sm:col-span-2 xl:col-span-1'>
                  <FieldLabel htmlFor='mnemonic-passphrase'>
                    <Trans>BIP-39 passphrase</Trans>
                  </FieldLabel>
                  <Input
                    id='mnemonic-passphrase'
                    type='password'
                    value={passphrase}
                    autoComplete='off'
                    placeholder={t`Optional extra password`}
                    onChange={(event) => setPassphrase(event.target.value)}
                  />
                </Field>
              </div>

              <div className='mt-4 flex justify-end'>
                <Button
                  className='w-full sm:w-auto sm:min-w-52'
                  onClick={handleGenerate}
                >
                  <RefreshCwIcon className='size-4' />
                  <Trans>Generate</Trans>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
            <CardHeader>
              <CardTitle>
                <Trans>Mnemonic phrase</Trans>
              </CardTitle>
              <CardDescription>
                <Trans>
                  The selected wordlist is {activeWordlistLabel}. English is
                  usually the safest choice for wallet interoperability.
                </Trans>
              </CardDescription>
              <CardAction>
                <CopyButton text={mnemonic} />
              </CardAction>
            </CardHeader>

            <CardContent>
              <Textarea
                className='field-sizing-fixed min-h-40 min-w-0 resize-y text-sm leading-7'
                value={mnemonic}
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                placeholder={t`Generate or paste a BIP-39 mnemonic phrase`}
                spellCheck={false}
                onChange={(event) => setMnemonic(event.target.value)}
              />
            </CardContent>
          </Card>

          <div className='grid min-w-0 gap-4 lg:grid-cols-3'>
            <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
              <CardContent>
                <p className='text-muted-foreground text-sm'>
                  <Trans>Detected words</Trans>
                </p>
                <p className='mt-2 text-3xl font-semibold'>
                  {wordCountDetected}
                </p>
              </CardContent>
            </Card>

            <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
              <CardContent>
                <p className='text-muted-foreground text-sm'>
                  <Trans>Entropy bits</Trans>
                </p>
                <p className='mt-2 text-3xl font-semibold'>
                  {entropyBits || '--'}
                </p>
              </CardContent>
            </Card>

            <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
              <CardContent>
                <p className='text-muted-foreground text-sm'>
                  <Trans>Checksum bits</Trans>
                </p>
                <p className='mt-2 text-3xl font-semibold'>
                  {checksumBits || '--'}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <aside className='min-w-0 space-y-5 sm:space-y-6'>
          <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
            <CardHeader>
              <CardTitle>
                <Trans>Entropy (hex)</Trans>
              </CardTitle>
              <CardDescription>
                <Trans>
                  This is the raw secret entropy behind the mnemonic.
                </Trans>
              </CardDescription>
              <CardAction>
                <CopyButton text={derivedResult.entropyHex} />
              </CardAction>
            </CardHeader>

            <CardContent>
              <Textarea
                readOnly
                className='field-sizing-fixed min-h-28 min-w-0 resize-none font-mono text-xs leading-6'
                value={derivedResult.entropyHex}
                placeholder={t`Entropy will appear here after validation`}
              />
            </CardContent>
          </Card>

          <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
            <CardHeader className='max-sm:grid-cols-1'>
              <CardTitle>
                <Trans>Seed (hex)</Trans>
              </CardTitle>
              <CardDescription>
                <Trans>
                  Derived with PBKDF2-HMAC-SHA512 and 2048 iterations.
                </Trans>
              </CardDescription>
              <CardAction className='max-sm:col-start-1 max-sm:row-start-3 max-sm:justify-self-start'>
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
                    {isSeedVisible ? (
                      <Trans>Hide</Trans>
                    ) : (
                      <Trans>Reveal</Trans>
                    )}
                  </Button>
                  <CopyButton text={derivedResult.seedHex} />
                </div>
              </CardAction>
            </CardHeader>

            <CardContent>
              <Textarea
                readOnly
                className='field-sizing-fixed min-h-36 min-w-0 resize-none font-mono text-xs leading-6'
                value={seedPreview}
                placeholder={t`Seed will appear here after validation`}
              />
            </CardContent>
          </Card>

          <Card size='sm' className='min-w-0 rounded-2xl sm:rounded-3xl'>
            <CardHeader>
              <CardTitle>
                <Trans>Compatibility notes</Trans>
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-2 text-sm leading-6'>
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
            </CardContent>
          </Card>
        </aside>
      </main>
    </div>
  )
}
