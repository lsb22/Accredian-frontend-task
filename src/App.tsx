import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
const App = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateAreas: `"nav" "hero"`,
      }}
    >
      <Box sx={{ gridArea: "nav" }}>
        <NavBar />
      </Box>
      <Box sx={{ gridArea: "hero" }}>
        <Hero />
      </Box>
    </Box>
  );
};

export default App;
