import MotorList from "../components/MotorList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div style={{
        background: "linear-gradient(90deg, #1a2980 0%, #26d0ce 100%)",
        color: "#fff",
        borderRadius: "18px",
        padding: "2.5rem 1.5rem 2rem 1.5rem",
        margin: "2rem auto 2.5rem auto",
        maxWidth: 900,
        boxShadow: "0 4px 24px rgba(26, 41, 128, 0.10)"
      }}>
        <h1 style={{
          fontSize: "2.7rem",
          margin: 0,
          letterSpacing: "1px",
          fontWeight: 700,
          textShadow: "0 2px 8px rgba(38, 208, 206, 0.12)"
        }}>
          welcom to shvdy's motorshop 
        </h1>
        <p style={{
          fontSize: "1.25rem",
          marginTop: "1rem",
          color: "#e0e7ff",
          fontWeight: 400
        }}>
          Discover, search, update, and manage your favorite motors in style!
        </p>
      </div>
      <MotorList />
      <Footer />
    </div>
  );
}