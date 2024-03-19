import { useState } from "react";
import { Note, NoteInterface } from "./Note";
import { NoteModal } from "./NoteModal";

const mockValue = [
  {
    id: Date.now(),
    title: "Mock 1",
    note: "Note ....",
  },
  {
    id: Date.now() + 1,
    title: "Mock 2",
    note: "Note ....",
  },
  {
    id: Date.now() + 2,
    title: "Mock 3",
    note: "Note ....",
  },
];
export const NoteList = () => {
  const [input, setInput] = useState({});
  const [operation, setOperation] = useState("");
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  // const handleAddButton = ()=> setOperation("Add");
  const handleAddButton = ()=> {setOperation("Add");}
  // const handleAddButton = useEffect((()=>setOperation('Add')),[operation])
  const handleEditButton = ()=> setOperation("Edit");
  // const modal = new Modal.getInstance()
  return (
    <>
      <div className="row">
        {notes.length === 0
          ? mockValue.map((data) => <Note key={data.id} note={data} handleEditButton={handleEditButton} />)
          : notes.map((data) => <Note key={data.id} note={data} handleEditButton={handleEditButton} />)}
      </div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#modal"
        // onClick={()=>setOperation("Add")}>
        // {/* onClick={handleAddButton}> */}
        onClick={handleAddButton}> 
        Add
      </button>
      {console.log("operation : " + operation)}
      
      <NoteModal key={operation} operation={operation} />
    </>
  );
};
