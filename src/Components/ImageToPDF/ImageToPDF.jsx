import React, { useState } from 'react';
import "../ImageToPDF/ImageToPDF.css";
import jsPdf from "jspdf";

const ImageToPDF = () => {
    const[imageDataUrl , setImageDataUrl] = useState(null);
    console.log(imageDataUrl);

    const handleImageChange = (event) =>{
        const imageFile = event.target.files[0];
        console.log(imageFile);

        let reader = new FileReader();
        reader.onload = (e) =>{
            const newImageDataUrl = e.target.result;
            console.log(newImageDataUrl);
            setImageDataUrl(newImageDataUrl);
        }
        reader.readAsDataURL(imageFile);
    };

    const convertImageToPdf = () =>{
        if(imageDataUrl){
            const pdf = new jsPdf();
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (pdf.internal.pageSize.height * imgWidth) / pdf.internal.pageSize.width;
      
            pdf.addImage(imageDataUrl, 'JPEG', 0, 0, imgWidth, imgHeight);
            pdf.save('imageToPdf.pdf');
            

        }
    };
  return (
    <div className='shadow-lg w-4/6 m-auto mt-14 py-4 px-4' style={{height : "70vh"}}>
        <div>
            <h1 className='text-center font-semibold text-4xl text-blue-700'>Image To PDF Converter</h1>
        </div>
        <div className='border rounded p-14 mt-7 ml-14 text-center'>
            <input type="file" className='' onChange={handleImageChange}/>
        </div>
        <div className='flex items-center justify-center mt-7' onClick={convertImageToPdf}>
            <button className='border-none rounded bg-blue-500 text-white px-4 py-3 text-lg hover:bg-blue-800 transition delay-75'>
                Convert to PDF
            </button>
        </div>
    </div>
  )
}

export default ImageToPDF