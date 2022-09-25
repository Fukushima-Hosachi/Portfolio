import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import ".//../App.css";
import Alert from 'react-bootstrap/Alert';


export const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_goycenm', 'template_zttnoyd', form.current, 'kK2Ux2hg7V3LCRV2l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
      
  
  return (
    <div className='Body'>

      <div className='index'>
          <p>連絡フォームです</p>
      </div>

      <div className='Contact'>
        <p>連絡フォーム</p>
        <br></br>
        
        <form ref={form} onSubmit={sendEmail}>
      
        <Form.Group className="mb-3"      controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email@example.com" name="email" />
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="名前" name="name" />
        </Form.Group>
      
        <FloatingLabel controlId="floatingTextarea2" label="お問い合わせ内容">
          
          <Form.Control
            as="textarea"
            placeholder="お問い合わせ内容をお書きください"
            style={{ height: '100px' }}
            name="message" 
          />
        </FloatingLabel>
        <br></br>

        <div className='Contact_Button'>
          <Button onClick = {Btn} variant="primary" type="submit" >
            送信
          </Button>
          
        </div>
        

      </form>
      
    </div>
    
  </div>
  
    
  );

  function Btn() {
    alert("お問い合わせを送信しました。");
  }

}

export default Contact;