export const Note = (props: { note: NoteInterface; handleEditButton: ()=>void }) => (
  <>
    <div className="col-sm-3 mb-3 mb-sm-3" key={props.note.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.note.title}</h5>
          <p className="card-text">{props.note.note}</p>
          <button
            className="btn btn-primary me-2"
            data-bs-toggle="modal"
            data-bs-target="#modal"
            onClick={props.handleEditButton}>
            Edit
          </button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </>
);

export interface NoteInterface {
  id?: number;
  title?: string;
  note?: string;
}
