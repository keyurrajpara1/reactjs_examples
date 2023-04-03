import React, {useState, useRef} from 'react';
import Data from "./data";
import CategoryItem from "./CategoryItem";
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Modal } from 'bootstrap';
const CategoryList = () => {
  const [items, setItems] = useState(Data);
  const [item, setItem] = useState({"id": "", "name": "", "spanish_name": ""});
  const modalRef = useRef(null);
  const deleteFunction = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((currentValue, index, arr) => {
        return currentValue.id !== id;
      });
    });
  };
  const editFunction = (currentValue) => {
    setItem(currentValue);
    const modalEle = modalRef.current;
    //https://www.codeply.com/p/FLqwWV6Oan\
    const bsModal = new bootstrap.Modal(modalEle);
    bsModal.show();
  };
  const showModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new bootstrap.Modal(modalEle);
    bsModal.show();
  }
  const hideModal = () => {
    const modalEle = modalRef.current;
    const bsModal= bootstrap.Modal.getInstance(modalEle);
    bsModal.hide();
  }
  const handleInputs = (event) => {
    let {name:inputName, value:inputValue} = event.target;
    setItem((previousValue) => {
      return {
        ...previousValue,
        [inputName]: inputValue
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(item));
  }
  return (
    <>
      <h3>Category List</h3>
      <CategoryItem items={items} eventEditFunction={editFunction} eventDeleteFunction={deleteFunction} />

      <div className="addEmployee">
          <button type="button" className="btn btn-primary" onClick={showModal}>Add Employee</button>

          <div className="modal fade" ref={modalRef} data-bs-backdrop="static" data-bs-keyboard="false">
           <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                  <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                      <div className="mb-3">
                        <label htmlFor="" className="col-form-label">Name:</label>
                        <input type="text" className="form-control" name="name" value={item.name} onChange={handleInputs} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="" className="col-form-label">Spanish Name:</label>
                        <textarea className="form-control" name="spanish_name" value={item.spanish_name} onChange={handleInputs}></textarea>
                      </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={hideModal}>Close</button>
                    <button type="submit" className="btn btn-primary">Understood</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
export default CategoryList;