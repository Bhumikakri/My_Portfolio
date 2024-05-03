import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className='contactPage' id='Contacts' >
      <h1>Contact Me</h1>
      <div className='contactUs'>
        <div className='contactDtl'>
          <h2>Get in touch</h2>
          <p>I am very approachable and would love to speak to you , feel free to call, send me an email. follow me in social media or simply complete the enquiry from.</p>
          <div style={{display:"flex", gap:"2rem"}}>
            <a href='https://github.com/Bhumikakri'><img style={{width:"40px"}} src='https://th.bing.com/th/id/R.7a864f07681f187fb572468bfc949977?rik=EyUQGBjtSbMjVw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fgithub%2fgithub_PNG80.png&ehk=sCQlSHnb7Wc8WNPgOilokXbf8jL4g20yv7QFEFpl6ko%3d&risl=&pid=ImgRaw&r=0' /></a>
            <a href='https://www.linkedin.com/in/bhumika-kumari-499899235/'><img style={{width:"40px", borderRadius:"50%"}} src='https://th.bing.com/th?id=OIP.d5futl9_HMoiD0hPTuYylwHaHX&w=250&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' /></a>
            <a href='https://leetcode.com/u/bhumikakri-2002/'><img style={{width:"40px", borderRadius:"50%"}} src='https://th.bing.com/th?id=OIP.ymdLUYayjisO2uU47lOI0AAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' /></a>
            <a href='https://www.hackerrank.com/bhumikakri2002/hackos'><img style={{width:"40px"}} src='data:image/jpeg;base64,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' /></a>
          </div>

        </div>
        <div className='allInputs'>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Subject'/>
          <textarea name="" id="" placeholder='Your message' cols="30" rows="10"></textarea>
          <button>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs