// src/styles.ts
import { makeStyles } from "@mui/styles";

// Define the types for styles (optional, but helps with type safety)
const useHeroStyles = makeStyles((theme) => ({
  heroContainer: {
    height: "100vh",
    background: "url('path/to/your/striking-visual.jpg') no-repeat center center/cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
  },
  content: {
    zIndex: 1,
  },
  logo: {
    width: "150px", // Adjust based on logo size
    marginBottom: theme.spacing(2),
  },
  tagline: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: theme.spacing(3),
  },
  button: {
    backgroundColor: "#FF5722", // Button color
    color: "#fff",
    "&:hover": {
      backgroundColor: "#E64A19",
    },
  },
}));

export default useHeroStyles;
