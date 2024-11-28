import React, { useState, useRef } from 'react';
import pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFReader = () => {
    const [file, setFile] = useState(null);
    const canvasRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setFile(file);
            renderPDF(file);
        } else {
            alert('Please select a PDF file.');
        }
    };

    const renderPDF = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const typedarray = new Uint8Array(reader.result);
            pdfjsLib.getDocument(typedarray).promise.then((pdf) => {
                pdf.getPage(1).then((page) => {
                    const scale = 1.5;
                    const viewport = page.getViewport({ scale });

                    const canvas = canvasRef.current;
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = {
                        canvasContext: context,
                        viewport,
                    };
                    page.render(renderContext);

                    // Extract text from the first page
                    page.getTextContent().then((textContent) => {
                        const textItems = textContent.items;
                        let finalString = '';

                        for (let i = 0; i < textItems.length; i++) {
                            finalString += textItems[i].str + ' ';
                        }

                        console.log('Extracted text:', finalString);
                        // You can send this text to your backend or use it in your frontend
                    });
                });
            });
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <canvas ref={canvasRef} style={{ border: '1px solid black' }} />
        </div>
    );
};

export default PDFReader;
