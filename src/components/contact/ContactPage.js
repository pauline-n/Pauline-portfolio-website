import React from 'react'
import './contact.css'
import { TextField, Button, TextareaAutosize } from '@mui/material';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
    return (
      <div className="contact" id="contact">
        <div className="lefty">
          <img src="assets/contactme.png" alt="" />
        </div>
        <div className="righty">
          <h2>Reach out to me.</h2>
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField
            id="standard-number"
            label="Phone Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Leave a Message"
            style={{ width: 200 }}
          />
          <Button variant="contained" color="info"
          onClick={handleSubmit}>
            Send
          </Button>
        </div>
      </div>
    );
}

export default ContactPage
