'use client'
import { Trans } from '@lingui/react/macro'
import { format } from 'date-fns'
import { LucideInfo } from 'lucide-react'
import NoSleep from 'nosleep.js'
import { useEffect, useRef } from 'react'
import { match } from 'ts-pattern'
import { RippleButton } from '~/components/animate-ui/buttons/ripple'
import { Switch } from '~/components/animate-ui/radix/switch'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/animate-ui/radix/tooltip'
import { AnimatedBackground } from '~/components/motion-primitives/animated-background'

export default function Page() {
  const noSleep = useRef<NoSleep | null>(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [sleepTime, setSleepTime] = useState(0)
  const [isInPromote, setIsInPromote] = useState(false)

  const Promote = useMemo(() => {
    return [
      {
        label: <Trans>Promote</Trans>,
        value: 'promote',
      },
      {
        label: <Trans>Short Break</Trans>,
        value: 'short-break',
      },
      {
        label: <Trans>Long Break</Trans>,
        value: 'long-break',
      },
    ] as const
  }, [])

  const [promote, setPromote] = useState<(typeof Promote)[number]['value']>(Promote[0].value)
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!noSleep.current) {
      noSleep.current = new NoSleep()
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
      setIsEnabled(noSleep.current?.isEnabled ?? false)
    }

    return () => {
      if (noSleep.current) {
        noSleep.current.disable()
      }
    }
  }, [])

  useEffect(() => {
    if (isEnabled) {
      noSleep.current?.enable()
    } else {
      noSleep.current?.disable()
    }
  }, [isEnabled])

  const handlePause = () => {
    if (timer.current) {
      clearInterval(timer.current)
      setIsEnabled(false)
    }
  }

  const handleStop = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }

    setIsEnabled(false)
    setIsInPromote(false)
    setSleepTime(0)
  }

  const handleStart = () => {
    if (isEnabled) return

    if (!isInPromote) {
      setIsInPromote(true)
      const time = match(promote)
        .with('promote', () => {
          return 25
        })
        .with('short-break', () => {
          return 5
        })
        .with('long-break', () => {
          return 15
        })
        .exhaustive()

      setSleepTime(time * 60)
    }

    setIsEnabled(true)
    timer.current = setInterval(() => {
      setSleepTime((prev) => {
        if (prev <= 0) {
          handleStop()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-y-2'>
      <header className='text-2xl font-medium'>
        <h1 className='flex items-center justify-center gap-x-2 text-center'>
          <Trans>Keep Screen On</Trans>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LucideInfo className='size-4' />
              </TooltipTrigger>
              <TooltipContent>
                <div className='flex items-center gap-x-2'>
                  <Trans>inspired by</Trans>
                  <a href='https://www.keepscreenon.com/' target='_blank' rel='noopener noreferrer'>
                    https://www.keepscreenon.com/
                  </a>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h1>
      </header>

      <main className='flex flex-col items-center justify-center gap-y-2'>
        <div className='flex items-center gap-x-2'>
          <Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
          <p className='text-muted-foreground text-sm'>
            <Trans>Keep your device screen always on.</Trans>
          </p>
        </div>

        <div className='bg-accent flex flex-col items-center justify-center gap-y-2 rounded-lg p-4'>
          <div className='flex flex-col items-center justify-center gap-y-2'>
            <div className='flex items-center gap-x-2'>
              <div className='flex gap-2 rounded-[8px] bg-gray-100 p-[2px] dark:bg-zinc-800'>
                <AnimatedBackground
                  defaultValue={Promote[0].value}
                  className='bg-foreground/10 flex rounded-lg dark:bg-zinc-700'
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.2,
                  }}
                  onValueChange={(value) => setPromote(value as (typeof Promote)[number]['value'])}
                >
                  {Promote.map(({ label, value }) => {
                    return (
                      <button
                        key={value}
                        data-id={value}
                        type='button'
                        aria-label={`${label} view`}
                        disabled={isInPromote}
                        className='inline-flex items-center justify-center p-2 text-center text-zinc-800 transition-transform active:scale-[0.98] dark:text-zinc-50'
                      >
                        {label}
                      </button>
                    )
                  })}
                </AnimatedBackground>
              </div>
            </div>

            <div className='flex items-center gap-x-2'>
              <div className='text-2xl font-medium'>
                {match({
                  promote,
                  isInPromote,
                })
                  .with({ isInPromote: true }, () => (
                    <div
                      className={cn({
                        'text-gray-500': !isEnabled && isInPromote,
                      })}
                    >
                      {format(new Date(sleepTime * 1000), 'mm:ss')}
                    </div>
                  ))
                  .with({ promote: 'promote' }, () => <div>25:00</div>)
                  .with({ promote: 'short-break' }, () => <div>05:00</div>)
                  .with({ promote: 'long-break' }, () => <div>15:00</div>)
                  .exhaustive()}
              </div>
            </div>

            <div className='flex items-center gap-x-2'>
              {!isEnabled && (
                <RippleButton variant='default' onClick={handleStart}>
                  <Trans>Start</Trans>
                </RippleButton>
              )}

              {isInPromote && (
                <>
                  <RippleButton variant='outline' onClick={handlePause}>
                    <Trans>Pause</Trans>
                  </RippleButton>
                  <RippleButton variant='destructive' onClick={handleStop}>
                    <Trans>Stop</Trans>
                  </RippleButton>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
