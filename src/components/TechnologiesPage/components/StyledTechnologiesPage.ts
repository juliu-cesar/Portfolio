import styled from "styled-components";

export const StyledTechnologiesPage = styled.div`
  width: 100%;
  .frame_principal {
    position: relative;
    z-index: 10;
  }

  .tech_shape {
    position: absolute;
    img {
      width: 100%;
    }
  }
  #tech_shape_1 {
    width: 60%;
    top: 0;
    right: 0;
    transform: translate(50%, -40%);
  }
  #tech_shape_2 {
    width: 70%;
    top: 50%;
    left: 0;
    transform: rotate(180deg) translate(50%, 40%);
  }
  #tech_shape_3 {
    width: 55%;
    bottom: 0;
    right: 0;
    transform: rotate(90deg) translate(30%, -25%);
  }

  @media (max-width: 1000px) {
    #tech_shape_1 {
      width: 70%;
    }
    #tech_shape_2 {
      width: 70%;
    }
    #tech_shape_3 {
      width: 60%;
    }
  }
  @media (max-width: 800px) {
    #tech_shape_1 {
      width: 75%;
    }
    #tech_shape_2 {
      width: 75%;
    }
    #tech_shape_3 {
      width: 65%;
    }    
  }
  @media (max-width: 700px) {
    #tech_shape_1 {
      width: 80%;
    }
    #tech_shape_2 {
      width: 80%;
    }
    #tech_shape_3 {
      width: 70%;
    }    
  }
  @media (max-width: 500px) {
    #tech_shape_1 {
      width: 90%;
    }
    #tech_shape_2 {
      width: 90%;
    }
    #tech_shape_3 {
      width: 80%;
    }    
  }
  @media (max-width: 400px) {
    #tech_shape_1 {
      width: 110%;
    }
    #tech_shape_2 {
      width: 100%;
    }
    #tech_shape_3 {
      width: 90%;
    }    
  }
`;
