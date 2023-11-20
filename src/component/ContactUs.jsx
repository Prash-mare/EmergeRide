import React from 'react'

const ContactUs = () => {
  return (
    <div class="contact-container">
        <div class="contact-card">
            <a class="contactus">Contact Us</a>
            <div class="inputBox1">
                <input type="text" required="required"/>
                <span class="user">Name</span>
            </div>

            <div class="inputBox">
                <input type="email" required="required"/>
                <span>Email</span>
            </div>

            <div class="inputBox1" >
            <textarea id='text-area1' class="custom-textarea" required="required" placeholder="How can we help?"></textarea>
            </div>

            <button class="enter">Enter</button>

        </div>
    </div>
  )
}

export default ContactUs