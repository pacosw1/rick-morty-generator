import React from "react";
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
    grid-template-rows: 1fr 0.5fr;
    // height: 100%;
    padding-bottom: 0.5rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const InfoSection = styled.div`
  border-radius: 0.2rem;
  height: 100%;
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

const InfoItem = ({ header, value, underline }) => {
  return (
    <InfoRow underline={underline}>
      <InfoHeader>{header}</InfoHeader>
      <InfoData>{valueFieldReducer(value)}</InfoData>
    </InfoRow>
  );
};

const valueFieldReducer = (value) => {
  if (!value) return "Unknown";
  return value;
};

export const CharacterDisplay = ({
  img,
  name,
  id,
  status,
  prevImg,
  species,
  type,
  gender,
  loading,
  origin,
  character,
  location,
  created,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={img} />
      </ImageWrapper>

      <InfoSection>
        <InfoSectionContainer>
          <NameHeader>
            <h1>{name}</h1>
            <p>CHARACTER ID: {id}</p>
          </NameHeader>
          <InfoContainer>
            <InfoItem header={"ID Number"} value={id} />
            <InfoItem header={"Status"} value={status} />
            <InfoItem header={"Species"} value={species} />
            <InfoItem header={"Type"} value={type} />
            <InfoItem header={"Gender"} value={gender} />
            <InfoItem header={"Origin"} value={origin} />
            <InfoItem underline={true} header={"Location"} value={location} />
          </InfoContainer>
        </InfoSectionContainer>
      </InfoSection>
    </Wrapper>
  );
};

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
  }
`;
