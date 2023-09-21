import styled from 'styled-components';

import Theme from 'theme';

const ToastContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 100;
    right: 20px;
    bottom: 10px;
    width: 275px;
`;

const MasterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 95px;
`;

const MessageContainer = styled.div`
    position: relative;
    background: white;
    padding: 9px;
    border: 1px solid #e1e1e1;
    border-radius: ${Theme.radius.$default};
    box-shadow: ${Theme.shadows.$z4};
    color: #ffffff;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 70px;
`;

const ToastIndicator = styled.div`
    height: 100%;
    width: 3px;
    border-radius: 2px;
    background: red;
`;

const Message = styled.div`
    font-size: ${Theme.fontSizes.$3};
    color: black;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 3px;
    flex-direction: column;
`;

const MessageHeader = styled.div`
    font-size: ${Theme.fontSizes.$3};
    font-weight: ${Theme.fontWeights.$medium};
`;

const MessageContent = styled.div`
    font-size: ${Theme.fontSizes.$2};
    color: #919191;
`;

const ToastIconContainer = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 12px;
    color: red;
    font-size: 24px;
    width: 44px;
    height: 24px;
`;
const CloseIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    font-size: ${Theme.fontSizes.$3};
    margin-left: auto;
    border-radius: 50%;
    color: ${Theme.colors.$gray600};
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #717171;
        background: #f1f1f1;
    }
`;

export {
    ToastContainer,
    MasterContainer,
    MessageContainer,
    ToastIndicator,
    MessageHeader,
    MessageContent,
    Message,
    ToastIconContainer,
    CloseIconContainer,
};
