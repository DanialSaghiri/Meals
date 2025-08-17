"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [changeImage, setChangeImage] = useState();
  const imageInput = useRef();
  const pickImageHandler = () => {
    imageInput.current.click();
  };
  const changeImageHandler = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setChangeImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setChangeImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!changeImage ? (
            <p>no image picked yet.</p>
          ) : (
            <Image src={changeImage} alt="image picked" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          ref={imageInput}
          onChange={changeImageHandler}
        />
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={pickImageHandler}
      >
        Pick an Image
      </button>
    </div>
  );
}
