import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
`;

const SpinDiv = styled.div`
  display: flex;
  padding-top: 2rem;
`;

const Empty = styled.h1`
  font-family: "Titillium web", sans-serif;
  font-size: 1.5rem;
`;

const GenerateButton = styled.button`
  height: 3.5rem;
  width: 9rem;
  padding: 1rem;
  font-family: "Titillium web", sans-serif;
  font-weight: 600;
  color: white;

  font-size: 0.8rem;
  letter-spacing: 1.5px;

  background-color: ${(props) =>
    props.disabled ? "rgba(209, 209, 209, .5)" : "rgb(181,91,255)"};
  border-radius: 0.2rem;
  appearance: none;
  margin-right: 0.82rem;
  transition: 0.5s;
  border: 0;

  outline: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    height: 5rem;
  }
`;

export { GenerateButton, SpinDiv, FlexContainer, Wrapper, Empty };
