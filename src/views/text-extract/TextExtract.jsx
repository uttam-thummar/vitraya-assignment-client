import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextExtractStyles } from './styles/TextExtractStyles';
import { textExtractUpload } from '../../reducers/text-extract/textExtractSlice';
import BoxLoader from '../../components/BoxLoader';

const TextExtract = () => {
    const dispatch = useDispatch();
    const { isLoading, currentTextExtract } = useSelector((store) => store.textExtract);

    const [imageInput, setImageInput] = useState();

    const handleImageUpload = async () => {
        dispatch(textExtractUpload({ image: imageInput }));
    }

    return (
        <>
            <TextExtractStyles>
                <div className='heading'>
                    <h3>Extract Text From Image Using OCR</h3>
                </div>
                <div className='input-output-row'>
                    <div className='input-box'>
                        <div className='input-title'>
                            <h5>Input</h5>
                        </div>
                        <div className='input-preview'>
                            {imageInput ? (
                                <img
                                    src={URL.createObjectURL(imageInput)}
                                    alt='Input'
                                />
                            ) : (
                                <div className='no-input-output'>
                                    <h4>No Input</h4>
                                    <h5>Choose a file to start</h5>
                                </div>
                            )}
                        </div>
                        <div className='image-input'>
                            <div>
                                <input
                                    type='file'
                                    accept='.jpg, .jpeg, .png'
                                    onChange={(e) => setImageInput(e.target.files[0])}
                                />
                                {imageInput && (
                                    <button type='submit' className='btn' onClick={handleImageUpload}>
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='output-box'>
                        <div className='output-title'>
                            <h5>Output</h5>
                        </div>
                        <BoxLoader isLoading={isLoading}>
                            <div className='output-preview'>
                                {!currentTextExtract.extractedText ? (
                                    <div className='no-input-output'>
                                        <h4>No Output</h4>
                                        <h5>Choose a file and submit to start</h5>
                                    </div>
                                ) : (
                                    <div className='extracted-text'>
                                        <div dangerouslySetInnerHTML={{ __html: `<span><strong>Bold words/sentences:</strong> ${currentTextExtract.boldWords}</span><br/><p style="margin-top: 20px;font-weight: bold;text-decoration: underline">Output:</p>` + (currentTextExtract?.extractedText || '').replace(/\n/g, "<br/>") }}>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </BoxLoader>
                    </div>
                </div>
            </TextExtractStyles>
        </>
    )
}

export default TextExtract;