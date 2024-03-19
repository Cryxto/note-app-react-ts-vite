import { NoteList } from "./components/NoteList";

function App() {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <br />
            <h1>App</h1>
            <br />
            <NoteList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
