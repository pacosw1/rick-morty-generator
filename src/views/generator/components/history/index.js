import React from "react";

import {
  Wrapper,
  LeftSection,
  RightSection,
  ViewButton,
  HistoryHeader,
  HistoryContainer,
  Image,
  Name,
} from "./elements";

export const History = ({ children }) => {
  return (
    <HistoryContainer>
      <HistoryHeader>
        <h1>History</h1>
      </HistoryHeader>
      {children}
    </HistoryContainer>
  );
};

export const HistoryItem = ({ active, name, image, id, selectCharacter }) => {
  return (
    <Wrapper>
      <LeftSection>
        <Image src={image} />
        <Name>{name}</Name>
      </LeftSection>
      <RightSection>
        <ViewButton active={active} onClick={() => selectCharacter(id)}>
          {active ? "Active" : "View"}
        </ViewButton>
      </RightSection>
    </Wrapper>
  );
};
