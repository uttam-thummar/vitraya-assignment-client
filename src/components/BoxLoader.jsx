import React from 'react';
import styled from 'styled-components';

const BoxLoader = ({ children, isLoading }) => {
    return (
        <>
            <BoxLoaderWrapper>
                <div className="loader-wrapper">
                    <div className={`loader-overlay ${isLoading && 'is-open'}`}>
                        <div className="loader-icon">
                            <div className="loader"></div>
                        </div>
                    </div>
                    <div className="sr-only">
                        Loading...
                    </div>
                </div>
                <div className='children'>
                    {children}
                </div>
            </BoxLoaderWrapper>
        </>
    )
}

const BoxLoaderWrapper = styled.main`
    position: relative;
    height: 100%;

    .loader-overlay {
        border-radius: inherit;
        z-index: 1035;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        align-items: center;
        justify-content: center;
        background-color: hsla(0, 0%, 100%, 0.9);
    }

    .loader-wrapper {
        border-radius: inherit;
    }

    .loader-overlay.is-open {
        display: flex;
    }

    .loader-icon {
        display: inline-block;
        width: 14px;
        height: 14px;

    }
    .loader-icon > svg {
        fill: var(--black);
        object-fit: contain;
        width: 100% !important;
        height: 100% !important;
        display: block;
        overflow: visible;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    .loader {
        width: 100%;

        &::after {
            content: "";
            display: block;
            width: 40px;
            height: 40px;
            border-style: solid;
            border-color: #0071C2;
            border-top-color: hsla(0, 0%, 100%, 0.9);
            border-width: 4px;
            border-radius: 50%;
            -webkit-animation: spin .8s linear infinite;
            animation: spin .8s linear infinite;
        }
    }

    .children {
        height: 100%
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;

export default BoxLoader;