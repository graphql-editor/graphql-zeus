function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-zinc-900 to-zinc-800">
      <h1 className="text-5xl font-bold text-white mb-4">Zeus + Vite</h1>
      <p className="text-zinc-400 text-lg max-w-md text-center">Your GraphQL client is ready to be generated.</p>
      <div className="mt-8 bg-zinc-950 rounded-lg p-4 font-mono text-sm text-zinc-300">
        <code>npx graphql-zeus {'<schema>'} ./src/lib</code>
      </div>
      <p className="mt-6 text-zinc-500 text-sm">
        Edit <code className="bg-zinc-800 px-1.5 py-0.5 rounded">src/App.tsx</code> to get started
      </p>
    </main>
  );
}

export default App;
