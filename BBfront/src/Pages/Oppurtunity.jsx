import React from 'react'
import { useParams } from 'react-router-dom';
import {Right} from "../Components/Right"
import {Left}from '../Components/Right';
import './Page.css'

const handleFileChange = (e) => {
  setSelectedFile(e.target.files[0]);
};

const handleUpload = async () => {
  const formData = new FormData();
  formData.append('file', selectedFile);
  formData.append('fhxxi56c'); // Replace with your Cloudinary upload preset

  try {
    const response = await fetch('CLOUDINARY_URL=cloudinary://784438841868274:lW7zwlVor19T2DKRYS8FbNuBPDU@djug8zfu7', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      onFileUpload(result.secure_url);
    } else {
      console.error('File upload failed');
    }
  } catch (error) {
    console.error('Error uploading file', error);
  }
};

const Oppurtunity = () => {
    const { id } = useParams();
  return (
    <>
    <div className="boxforopp">
      <div className="boxopri">
        <Right/>
      </div>
      <div className="boxople">
        <Left/>
      </div>
    </div>
    </>
  )
}

export default Oppurtunity