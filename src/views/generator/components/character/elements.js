import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  grid-template-rows: 1fr;
  grid-gap: 1.5rem;
  padding-bottom: 3rem;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr;
    max-height: 80vh;
    padding-bottom: 0.5rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const InfoSection = styled.div`
  border-radius: 0.2rem;
`;

const InfoRow = styled.div`
  * {
    margin: 0;
  }
  align-items: center;
  display: flex;
  width: 100%;
  height: 1.5rem;
  padding: 0.5rem 0;
  justify-content: space-between;
  //   border-bottom: 1px solid ;
  border-bottom: ${(props) => (!props.underline ? "1px solid #e6e6e6" : 0)};
`;
const InfoData = styled.p`
  font-size: 1rem;
  font-weight: 300;
`;
const InfoHeader = styled.h1`
  font-size: 1rem;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
`;

const InfoSectionContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 0.2rem;
`;

const InfoContainer = styled.div`
  padding: 1rem;
`;

const NameHeader = styled.div`
  padding: 1rem 1rem;
  h1 {
    margin: 0;
    font-size: 1.2rem;
    font-family: "Titillium Web", sans-serif;
    padding: 0;
    padding-bottom: 0.3rem;
  }
  p {
    font-size: 0.7rem;
    margin: 0;
    color: grey;
    font-weight: 600;
  }

  padding-bottom: 1.2rem;

  border-bottom: 1px solid #e6e6e6;
`;

const HiddenImg = styled.img`
  width: 1rem;
  display: none;
  height: 1rem;
`;

const Image = styled.img`
  border-radius: 0.2rem;
  width: auto;
  min-width: 20rem;
  max-width: 35rem;
  width: 100%;

  @media only screen and (max-width: 800px) {
    widht: 100%;
    min-width: 100%;
    height: 40vh;
    padding: 0;
  }
`;

export {
  Image,
  InfoSectionContainer,
  HiddenImg,
  NameHeader,
  InfoContainer,
  InfoData,
  InfoHeader,
  InfoSection,
  InfoRow,
  Wrapper,
  ImageWrapper,
};
