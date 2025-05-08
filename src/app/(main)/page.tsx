import { Header } from '~/components/header'
import { Showcase } from '~/components/show-case'

export default function Page() {
  return (
    <div className='flex h-full flex-col'>
      <Header />

      <main className='flex flex-1 items-center justify-center'>
        <Showcase />
      </main>
    </div>
  )
}
