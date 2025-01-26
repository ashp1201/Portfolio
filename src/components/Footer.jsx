import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { GitHub, LinkedIn, LogoDev } from "@mui/icons-material";
import { Box } from "@mui/material";
import "../CssFile/Footer.css";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Showcase of skills and achievements, offering a visual narrative
              of expertise and creativity to captivate audiences and prospective
              collaborators.
            </Typography>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vijay Nagar, M G Road, Borivali, Mumbai - 104
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link
              href="https://www.linkedin.com/in/ashok-purohit-5aa23125b/"
              target="_blank"
              color="inherit"
              sx={{ pr: 1 }}
            >
              <LinkedIn className="linkedin" />
            </Link>
            <Link
              href="https://github.com/ashp1201"
              target="_blank"
              color="inherit"
              sx={{ pr: 1 }}
            >
              <GitHub className="github" />
            </Link>
            <Link
              href="https://devfolio.co/@Ashokp1201"
              target="_blank"
              color="inherit"
            >
              <LogoDev className="devfolio" />
            </Link>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link
              color="inherit"
              sx={{ textDecoration: "none" }}
              href="#"
              target="_blank"
            >
              Portofolio.dev
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
