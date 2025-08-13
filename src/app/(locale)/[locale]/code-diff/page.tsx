import { DiffEditorContainer } from './components/diff-editor-container'

export default function CodeDiffPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='py-4 text-center text-2xl font-medium'>
        <h1>Code Diff</h1>
      </header>

      <main className='flex h-full flex-1 flex-col'>
        <DiffEditorContainer />
      </main>
    </div>
  )
}
