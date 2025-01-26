import React, { useRef, useState } from "react";
import "../CssFile/Contact.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    emailjs
      .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
          form.current,                             // Form reference
          process.env.REACT_APP_EMAILJS_USER_ID     // User ID
  )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err.text);
          setError("Failed to send the message. Please try again later.");
          setLoading(false);
        }
      );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
          <Box className="head">
            <Typography className="head_line" variant="h4" color="initial">
              Contact Us
            </Typography>
          </Box>
          <form ref={form} onSubmit={handleSubmit}>
            {error && <Typography color="error">{error}</Typography>}
            {success && (
              <Typography color="success.main">Message sent successfully!</Typography>
            )}
            <TextField
              fullWidth
              label="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              type="email"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default Contact;
