import styled from "styled-components";

export const CreateProjectContainer = styled.div`
  padding: 70px 20px; 

  .wrapper {
    max-width: 1000px;
    display: block;
    margin: 0 auto; 
    border: 0.5px solid #878787;
    border-radius: 10px;
    box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);

    
    .title {
      font-size: 31px;
      margin: 58px 0 28px 40px;
      
    }
    
    .create-form {
      padding: 0px 40px 35px;
      
      input {
        margin-bottom: 20px;
      }
      
      button {
        display: block;
        max-width: 300px;
        margin: 40px auto 0;
      }
    }
  }
    
`