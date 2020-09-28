import React from "react";
import {
  ImageWrapper,
  InfoData,
  InfoHeader,
  InfoRow,
  Image,
  NameHeader,
  InfoContainer,
  InfoSectionContainer,
  Wrapper,
  InfoSection,
} from "./elements";

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
