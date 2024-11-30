import DiffEditorContainer from "./components/DiffEditorContainer";

export default function CodeDiffPage() {
  return (
    <div className="h-full">
      <header className="py-4 text-center text-2xl font-medium">
        Code Diff
      </header>

      <main className="h-full">
        <DiffEditorContainer />
      </main>
    </div>
  );
}
