import React from 'react';

class ContactMe extends React.Component {

  render () {
    return (
      <div>
        <form method="POST" action="https://formspree.io/dburbach1982@gmail.com">

          <input type="email" name="email" placeholder="Your email" required/>

          <textarea name="message" placeholder="Test Message" required></textarea>

          <button type="submit">Send</button>

        </form>
      </div>
    );
  }
}

export default ContactMe;
