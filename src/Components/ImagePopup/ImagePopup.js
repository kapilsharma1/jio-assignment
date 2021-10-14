import React from 'react'
import { useState } from 'react';
import "./styles.css";
const ImagePopup = ({imageUrl,thumbnailUrl}) => {
    const [isOpen, setisOpen] = useState(false)
   const handleShowDialog = () => {
        setisOpen(!isOpen);
       // console.log("cliked");
      };
    return (
        <div>
        <img
          className="small"
          src={thumbnailUrl}
          onClick={handleShowDialog}
          alt="no image"
        />
        {isOpen && (
          <dialog
            className="dialog"
            style={{ position: "absolute", top:window.scrollY+70 }}
            open
            onClick={handleShowDialog}
          >
            <img
              className="image"
              src={imageUrl}
              onClick={handleShowDialog}
              alt="no image"
            />
          </dialog>
        )}
      </div>
    )
}

export default ImagePopup
