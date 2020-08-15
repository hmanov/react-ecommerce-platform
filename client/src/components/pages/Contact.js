import React from 'react';
import { AdminContainer } from '../../Styled/AdminStyled';
import { ContactContainer, ContactItem } from '../../Styled/Contact';
const Contact = () => {
  return (
    <AdminContainer>
      <div style={{ width: '50%' }}>
        <iframe
          width='100%'
          height='600'
          frameborder='0'
          scrolling='no'
          marginheight='0'
          marginwidth='0'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sliven%20center+(react%20app%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </div>
      <ContactContainer>
        <ContactItem>Adress: SLiven, ul "Al. Stamboliyski 1"</ContactItem>
        <ContactItem>tel.:00359888606089</ContactItem>
        <ContactItem>Email : hristo.manov@gmail.com</ContactItem>
      </ContactContainer>
    </AdminContainer>
  );
};

export default Contact;
