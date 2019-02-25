import React from 'react';
import ParticlesDisplay from './ParticlesDisplay';


class ContactMe extends React.Component {

  render () {
    return (
      <div>
        <ParticlesDisplay/>
        <div class = "container">
          <form method="POST" action="https://formspree.io/dburbach1982@gmail.com">
            <input type="email" name="email" placeholder="Your email" required/>
            <textarea name="message" placeholder="Test Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactMe;
