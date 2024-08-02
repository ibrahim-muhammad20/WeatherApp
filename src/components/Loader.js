import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled spinner component with background image
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background: url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg') no-repeat center center; /* Background image */
  background-size: cover; /* Cover the entire container */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  position: absolute; /* Ensure it covers the whole screen */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* Ensure it’s on top of other content */
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue color */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
  <SpinnerContainer>
    <Spinner />
  </SpinnerContainer>
);

export default Loader;
