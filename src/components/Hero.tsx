import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import img from "../assets/images/refer-img.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const schema = z.object({
  referrerName: z.string().min(4, { message: "Enter valid name" }),
  referrerEmail: z.string().min(9, { message: "Enter valid email" }),
  referrerPhone: z
    .string()
    .min(10, { message: "Enter valid phone number" })
    .max(10, { message: "Phone number can only have 10 digits" }),
  referrerRelation: z.string().min(5, { message: "Enter valid relation" }),
  referrerCourse: z.string().min(4, { message: "Enter valid course" }),
  refereeName: z.string().min(4, { message: "Enter valid name" }),
  refereeEmail: z.string().min(9, { message: "Enter valid email" }),
  refereePhone: z
    .string()
    .min(10, { message: "Enter valid phone number" })
    .max(10, { message: "Phone number can only have 10 digits" }),
  refereeSuggestedCourse: z.string().min(4, { message: "Enter valid course" }),
});

type RegisterData = z.infer<typeof schema>;

const Hero = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmission = (data: RegisterData) => {
    axios
      .post("http://localhost:3000/form", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
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
            <Dialog open={open} keepMounted onClose={handleClose}>
              <DialogTitle fontSize="1.1rem">
                {"Enter Referrer and Referee Details"}
              </DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  minWidth="350px"
                  onSubmit={handleSubmit((data) => {
                    handleFormSubmission(data);
                    reset();
                    handleClose();
                  })}
                >
                  <Stack spacing={3} mt={2}>
                    <Box fontFamily="roboto">{"Enter Referrer details"}</Box>
                    <Box>
                      <TextField
                        label="Name"
                        type="text"
                        {...register("referrerName")}
                        fullWidth
                      />
                      {errors.referrerName && (
                        <Typography sx={{ color: "red" }}>
                          {errors.referrerName.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Email"
                        type="email"
                        {...register("referrerEmail")}
                        fullWidth
                      />
                      {errors.referrerEmail && (
                        <Typography sx={{ color: "red" }}>
                          {errors.referrerEmail.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Phone number"
                        type="text"
                        {...register("referrerPhone")}
                        fullWidth
                      />
                      {errors.referrerPhone && (
                        <Typography sx={{ color: "red" }}>
                          {errors.referrerPhone.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Relationship with Referee"
                        type="text"
                        {...register("referrerRelation")}
                        fullWidth
                      />
                      {errors.referrerRelation && (
                        <Typography sx={{ color: "red" }}>
                          {errors.referrerRelation.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Current course enrolled"
                        type="text"
                        {...register("referrerCourse")}
                        fullWidth
                      />
                      {errors.referrerCourse && (
                        <Typography sx={{ color: "red" }}>
                          {errors.referrerCourse.message}
                        </Typography>
                      )}
                    </Box>
                    <Box fontFamily="roboto">{"Enter Referee details"}</Box>
                    <Box>
                      <TextField
                        label="Name"
                        type="text"
                        {...register("refereeName")}
                        fullWidth
                      />
                      {errors.refereeName && (
                        <Typography sx={{ color: "red" }}>
                          {errors.refereeName.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Email"
                        type="email"
                        {...register("refereeEmail")}
                        fullWidth
                      />
                      {errors.refereeEmail && (
                        <Typography sx={{ color: "red" }}>
                          {errors.refereeEmail.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Phone"
                        type="text"
                        {...register("refereePhone")}
                        fullWidth
                      />
                      {errors.refereePhone && (
                        <Typography sx={{ color: "red" }}>
                          {errors.refereePhone.message}
                        </Typography>
                      )}
                    </Box>
                    <Box>
                      <TextField
                        label="Preferred Course to Enroll"
                        type="text"
                        {...register("refereeSuggestedCourse")}
                        fullWidth
                      />
                      {errors.refereeSuggestedCourse && (
                        <Typography sx={{ color: "red" }}>
                          {errors.refereeSuggestedCourse.message}
                        </Typography>
                      )}
                    </Box>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Stack>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant="outlined">
                  close
                </Button>
              </DialogActions>
            </Dialog>
            <Button variant="contained" onClick={handleClickOpen}>
              Refer Now
            </Button>
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
