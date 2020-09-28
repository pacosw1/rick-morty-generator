import styled, { keyframes } from "styled-components";
import React from "react";

export const SpinnerIcon = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 10px;
  height: 10px;

  border: 2px solid purple;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-radius: 50%;

  animation: 1s linear infinite ${spin360};
`;
