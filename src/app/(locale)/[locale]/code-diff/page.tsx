import { DiffEditorContainer } from './components/diff-editor-container'

export default function CodeDiffPage() {
  return (
    <div className='min-h-screen'>
      <header className='py-4 text-center text-2xl font-medium'>
        <h1>Code Diff</h1>
      </header>

      <main className='h-full'>
        <DiffEditorContainer />
      </main>
    </div>
  )
}
