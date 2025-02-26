import { Stack, Box, Button, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" mt={2}>
      <Box>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography>accredian</Typography>
          <Button variant="contained">courses</Button>
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <Button variant="text">Refer and Earn</Button>
          <Button variant="text">Resources</Button>
          <Button variant="text">About Us</Button>
          <Button variant="contained">Login</Button>
          <Button variant="outlined">Try for free</Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default NavBar;
