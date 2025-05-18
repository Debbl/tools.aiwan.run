import { DiffEditorContainer } from './components/diff-editor-container'

export default function CodeDiffPage() {
  return (
    <div className='min-h-screen'>
      <header className='py-4 text-center text-2xl font-medium'>Code Diff</header>

      <main className='h-full'>
        <DiffEditorContainer />
      </main>
    </div>
  )
}
