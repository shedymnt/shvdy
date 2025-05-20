import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(90deg, #1a2980 0%, #26d0ce 100%)",
      color: "#fff",
      padding: "2rem 1rem 1rem 1rem",
      marginTop: "3rem",
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
      boxShadow: "0 -2px 16px rgba(26,41,128,0.08)",
      textAlign: "center"
    }}>
      <div style={{maxWidth: 900, margin: "0 auto"}}>
        <h2 style={{marginBottom: "0.5rem"}}>About Us</h2>
        <p style={{margin: "0 0 1.5rem 0", color: "#e0e7ff"}}>
          We are passionate about motors and committed to providing the best platform for buying, selling, and managing your favorite vehicles. Our mission is to make your motor experience smooth and enjoyable.
        </p>
        <h2 style={{marginBottom: "0.5rem"}}>Contact Us</h2>
        <p style={{margin: 0, color: "#e0e7ff"}}>
          Email: <a href="mailto:info@motorsite.com" style={{color: "#fff", textDecoration: "underline"}}>shedymn1@gmail.com</a> <br />
          Phone: <a href="tel:+1234567890" style={{color: "#fff", textDecoration: "underline"}}>+216 22265216</a>
        </p>
        <div style={{marginTop: "2rem", fontSize: "0.95rem", color: "#b2bec3"}}>
          &copy; {new Date().getFullYear()} MotorSite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}