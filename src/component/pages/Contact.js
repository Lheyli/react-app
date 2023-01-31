import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import img1 from "./img1.png";

// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6ohaq1s', 'template_fifshuk', form.current, 'djaBi7EN_GyqdFMiU')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };

  return <StyledContactForm>
    <img src={img1} alt="img1" height={1100} width={1300}/>
    <form ref={form} onSubmit={sendEmail}>
        <p>Write Me a Message!</p>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        <br></br> <br></br>
        <p> Address: Dagupan, Pangasinan <br></br>Email: liga.cruz@phinmaed.com </p> <p>Phone No: +639915724088</p>
    </form>

</StyledContactForm>;

};

export default Contact;

const StyledContactForm = styled.div`
  width: 400px;
  margin-left: 100px;
  margin-top: 100px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    margin-left: 1800px;
    margin-top: -800px;
   
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      color: rgb(33, 98, 210);
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgb(111, 155, 222);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      color: rgb(33, 98, 210);
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgb(111, 155, 222);
      }
    }
    label {
      margin-top: 1rem;
      color: rgb(33, 98, 210);
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(33, 98, 210);
      color: white;
      border: none;
    }
       
    p{
        color: rgb(33, 98, 210);
       }
  }
`;