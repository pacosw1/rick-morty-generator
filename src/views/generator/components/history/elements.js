import styled from "styled-components";

const HistoryHeader = styled.div`
  padding-bottom: 0rem;
  h1 {
    font-size: 2.5rem;
    font-family: "Titillium Web", sans-serif;
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Image = styled.img`
  width: 5rem;
  height: 5rem;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
`;

const HiddenImg = styled.img`
  width: 1rem;
  display: none;
  height: 1rem;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem;
  justify-content: space-between;
`;
const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;
const ViewButton = styled.button`
  width: 7rem;
  height: 3rem;
  font-size: 1rem;
  appearance: none;
  outline: none;
  shadow: none;
  border: 1px solid #8925db;
  border-radius: 0.2rem;
  transition: 0s;

  background-color: ${(props) =>
    props.active ? "#8925db" : "rgba(0,0,0,0)"} !important;
  color: ${(props) => (props.active ? "white" : "#8925db")};
  font-weight: 600;

  :hover {
    background-color: #8925db !important;
    color: white;
    transition: 0.2s;
    border: 0;
  }
`;

const Name = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  font-family: "Titillium Web", sans-serif;
  padding-left: 1rem;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 0.2rem;
  height: 5rem;
  align-item: center;
  align-content: center;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  margin: 0.5rem 0;
  transition: 0.5s;
  border: 1px solid #e6e6e6;

  :hover {
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

export {
  Wrapper,
  Name,
  ViewButton,
  RightSection,
  LeftSection,
  HiddenImg,
  Image,
  HistoryHeader,
  HistoryContainer,
};
