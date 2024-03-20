import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";

export const NoteModal = (props: { operation: string , showModal: boolean}) => {

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;
    const bootstrapModal = new Modal(modalElement!);
    if (props.showModal) {
      bootstrapModal.show();
    } else {
      bootstrapModal.hide();
    }
    return () => {
      bootstrapModal.dispose();
    };
  }, [props.showModal]);
  return (
    <div
      // className={`modal fade ${props.showModal ? 'show' : ''}`}
      className="modal"
      ref={modalRef}
      id="modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      // onClick={() => setShowModal(false)}
      aria-hidden="true"
      // aria-hidden={!props.showModal}
      >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.operation}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  aria-describedby="title"
                  placeholder="input your note's title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="note" className="form-label">
                  Note
                </label>
                <textarea className="form-control" id="note" placeholder="input your note" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
