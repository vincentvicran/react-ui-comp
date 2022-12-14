import styled from 'styled-components';

// const CollapseContainer = styled.div``

// const CollapseContent = styled.div``

// const CollapseHeader = styled.div``

// const CollapseIcon = styled.div``

// const CollapseHeaderContent = styled.div``

// const CollapseBody = styled.div``

// const CollapseBodyContent = styled.div``
// const CollpaseHeader = styled.div``;

const CollapseContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 10px;
    flex-direction: column;
    box-shadow: 0 4px 36px rgba(0, 0, 0, 0.12);
    border: 1px solid #e1e1e1;
    flex: 1;
    // width: 600px;
`;

const CollapseContent = styled.div`
    // border-radius: 10px;
    padding: 0;
    width: 100%;
    overflow: hidden;
`;

const CollapseHeader = styled.div`
    display: flex;
    padding: 8px 14px;
    font-size: 16px;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    position: relative;
    background: #ffffff;
`;

const CollapseIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    margin: 5px;
`;

const CollapseHeaderContent = styled.div`
    font-weight: bolder;
    padding: 5px 5px 3px 5px;
    font-smooth: 10em;
`;

const CollapseBody = styled.div`
    padding: 0px 20px;
    font-smooth: 10em;
    font-size: 14px;
    background-color: #fafafa;
    // backdrop-filter: blur(5px);
    scroll-behavior: smooth;
`;

const CollapseBodyContent = styled.div`
    padding: 8px;
`;

export {
    CollapseContainer,
    CollapseContent,
    CollapseHeader,
    CollapseBody,
    CollapseIcon,
    CollapseHeaderContent,
    CollapseBodyContent,
};
