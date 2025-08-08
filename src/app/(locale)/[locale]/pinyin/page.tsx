'use client'
import { Button, Checkbox, Textarea } from '@heroui/react'
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
        <Checkbox isSelected={isShowTone} onValueChange={setIsShowTone}>
          <Trans>Tone</Trans>
        </Checkbox>
      </div>
      <div className='grid gap-2 gap-y-4 px-2 sm:grid-cols-2'>
        <Textarea
          isInvalid={inputText === 'Invalid input'}
          value={inputText}
          onValueChange={handleInputTextChange}
          classNames={{
            inputWrapper: 'relative',
          }}
          minRows={8}
          label={t`Text`}
          placeholder={t`Enter your input text`}
          endContent={
            <Button
              className='absolute top-2 right-3'
              size='sm'
              isIconOnly
              variant='light'
              onPress={() => setInputText('')}
            >
              <CircleX size={16} className='hover:text-red-500' />
            </Button>
          }
        />
        <Textarea
          isInvalid={pingyinText === 'Invalid input'}
          value={pingyinText}
          disabled
          label={t`Pinyin`}
          minRows={8}
          placeholder={t`No input`}
          endContent={
            <CopyButton className='absolute top-2 right-3' text={pingyinText} />
          }
        />
      </div>
    </div>
  )
}
