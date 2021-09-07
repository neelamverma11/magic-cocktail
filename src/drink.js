import React, { useState } from "react";
import Modal from "react-modal";

const Drink = ({ id, name, image, title, instruction }) => {

  let [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id={"drink" + id}>
      <div className="row">
        <div onClick={openModal}>
          <div className="img-div">
            <img src={image} alt="Loading..." style={{ width: "80%" }} />
          </div>
          <h6 className="heading">{name}</h6>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} >
        <div className=" container-fluid modalElement">
          <div className="row p-5">
            <div className="col-sm-6 modalimg">
              <div className="row">
                <div className="col-sm-12 ">{title}</div>
              </div>
              <img src={image} alt="Drink_image" style={{ width: "80%" }} />
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12 ">
                  <b>Instructions</b>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 ">
                  <label>{instruction}</label>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 ">
                  <b>Glass</b>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">Serve : {title}</div>
              </div>
            </div>
            <div>
              <button className="closebtn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Drink;
