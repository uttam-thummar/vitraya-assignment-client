import styled from 'styled-components';

const RecentExtractsStyles = styled.div`
    height: 100%;
    padding: 20px;

    .empty-recent-extracts {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .text-extract-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 30px;
    }
    .text-extract-item {
        display: flex;
        gap: 20px;
        align-items: start;
        height: 300px;
        box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
        border-radius: 13px;
        padding: 10px;
    }
    .text-extract-image {
        width: 30%;
        min-width: 30%;
        height: 100%;
    }
    .text-extract-image img{
        width: 100%;
        height: 100%;
        display: block;
        object-fit: contain;
    }
    .text-extract-content {
        flex-grow: 1;
        height: 100%;
        overflow-y: auto;
    }
`;

export { RecentExtractsStyles };