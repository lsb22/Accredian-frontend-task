import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../assets/images/refer-img.png";

const Hero = () => {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Box display="flex" justifyContent="center" minHeight="80vh" mt={10}>
        <Stack>
          <Typography fontSize="4.6rem">
            Let's Learn
            <br /> & Earn
          </Typography>
          <Typography fontSize="2.3rem">
            get a chance to win <br />
            upto{" "}
            <Box
              component="span"
              sx={{
                backgroundColor: "#9635ce",
                color: "white",
                borderRadius: "2px",
              }}
            >
              RS. 15,000
            </Box>
          </Typography>
          <Box mt={2}>
            <Button variant="contained">Refer Now</Button>
          </Box>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="center" minHeight="80vh">
        <Box
          component="img"
          src={img}
          sx={{
            width: "100%",
            objectFit: "cover",
            height: "70%",
            aspectRatio: "1/1",
          }}
          mt={4}
        />
      </Box>
    </Box>
  );
};

export default Hero;
