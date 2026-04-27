'use client'
import { Button, Checkbox, TextArea } from '@heroui/react'
import { Trans, useLingui } from '@lingui/react/macro'
import { CircleX } from 'lucide-react'
import pinyin from 'pinyin'
import { useMemo, useState } from 'react'
import { CopyButton } from '~/components/copy-button'

export default function Page() {
  const { t } = useLingui()

  const [inputText, setInputText] = useState('')
  const [isShowTone, setIsShowTone] = useState(true)

  const handleInputTextChange = (value: string) => {
    setInputText(value)
  }

  const pingyinText = useMemo(() => {
    let newPingyinText = ''
    try {
      newPingyinText = pinyin(inputText, {
        style: isShowTone ? pinyin.STYLE_TONE : pinyin.STYLE_NORMAL,
      }).join(' ')
    } catch {
      newPingyinText = t`Invalid input`
    }
    return newPingyinText
  }, [inputText, isShowTone, t])

  return (
    <div className='grid min-h-screen content-center gap-y-8'>
      <div>
        <h1 className='text-center'>
          <Trans>Pinyin</Trans>
        </h1>
      </div>
      <div className='flex justify-center gap-x-4'>
        <label className='flex items-center gap-2 text-sm'>
          <Checkbox isSelected={isShowTone} onChange={setIsShowTone} />
          <span>
            <Trans>Tone</Trans>
          </span>
        </label>
      </div>
      <div className='grid gap-2 gap-y-4 px-2 sm:grid-cols-2'>
        <label className='space-y-2'>
          <span className='text-sm font-medium'>{t`Text`}</span>
          <div className='relative'>
            <TextArea
              aria-invalid={inputText === 'Invalid input'}
              value={inputText}
              onChange={(event) => handleInputTextChange(event.target.value)}
              rows={8}
              placeholder={t`Enter your input text`}
            />
            <Button
              className='absolute top-2 right-3'
              size='sm'
              isIconOnly
              variant='ghost'
              onPress={() => setInputText('')}
            >
              <CircleX size={16} className='hover:text-red-500' />
            </Button>
          </div>
        </label>
        <label className='space-y-2'>
          <span className='text-sm font-medium'>{t`Pinyin`}</span>
          <div className='relative'>
            <TextArea
              aria-invalid={pingyinText === 'Invalid input'}
              value={pingyinText}
              readOnly
              rows={8}
              placeholder={t`No input`}
            />
            <CopyButton className='absolute top-2 right-3' text={pingyinText} />
          </div>
        </label>
      </div>
    </div>
  )
}
