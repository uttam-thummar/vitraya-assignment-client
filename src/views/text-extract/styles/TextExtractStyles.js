import styled from 'styled-components';

const TextExtractStyles = styled.div`
    margin-top: 30px;
    padding: 20px;

    .heading {
        text-align: center;
    }
    .input-output-row {
        display:  flex;
        justify-content: center;
        align-items: start;
        gap: 10px;
        margin-top: 40px;
    }
    .input-box, .output-box {
        width: 50%;
        border-radius: 7px;
        box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
    }
    .input-title, .output-title {
        padding: 10px;
        text-align: center;
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
    }
    .input-preview, .image-input, .output-preview{
        border-top: 1px solid rgba(0,0,0,.05);
        padding: 10px;
    }
    .image-input div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input-preview {
        height: 450px;
    }
    .input-preview img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
    }
    .output-preview {
        height: 500px;
        overflow-y: auto;
    }
    .input-preview, .output-preview {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .no-input-output {
        text-align: center;
    }
    .extracted-text {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        text-align: left;
    }
`;

export { TextExtractStyles };