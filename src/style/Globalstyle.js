import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    background-image: url('https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?cs=srgb&dl=pexels-pixabay-209831.jpg&fm=jpg'); // Replace with your image path
    background-size: cover; // Adjusts the image to cover the entire body
    background-position: center; // Centers the image
    background-attachment: fixed; // Keeps the image fixed during scroll
  }
`;

export default Globalstyle;
