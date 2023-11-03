import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style:  none;
    text-decoration: none;
  }

  p{
    @media (max-width: 568px){
      font-size: small;
    }
  }
  @font-face {
  font-family: "Outfit";
  src: url("../fonts/Outfit-VariableFont_wght.ttf");
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: "Outfit", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: #222;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialised !important;
}

  *, button, input{
    background: none;
    border: 0;
  }

  body {
    background: #F1F4F5;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      background: transparent;
      width: 10px;
    }

    ::-webkit-scrollbar-button {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      background: #3059ff;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #191919;
    }

    ::-webkit-scrollbar-track-piece {
      background: transparent;
    }
  }

  #root{
    margin: 0 auto;
    width: 100%;
    max-width: 1768px;
  }

  .bradcump {
  font-size: 14px;
  margin-bottom: 16px;
}

.bradcump-inactive {
  color: #999;
}

.bradcump-active {
  color: #222;
}


  .container {
    min-height: 100vh;
    max-width: 924px;
    margin: 0 auto;
    margin-top: 44px;
    padding-bottom: 160px;
  }
  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.3s forwards;
  }
  
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

`;
