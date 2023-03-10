import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom"
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import FacebookIcon from "@mui/icons-material/FacebookSharp";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            // mb="0px"
            color={shades.secondary[500]}
          >
            <img src="./Logo.png" alt="" width={85} />
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Socials
          </Typography>
          <Box 
          display="flex"
          gap="30px"
          >
          <Typography mb="30px">
            <Link to="https://www.facebook.com">
              <FacebookIcon fontSize="large" /> 
            </Link>
          </Typography>
          <Typography mb="30px">
            <Link to="https://www.facebook.com">
              <FacebookIcon fontSize="large" /> 
            </Link>
          </Typography>
          </Box>
          <Box 
          display="flex"
          gap="30px"
          >
          <Typography mb="30px">
            <Link to="https://www.facebook.com">
              <FacebookIcon fontSize="large" /> 
            </Link>
          </Typography>
          <Typography mb="30px">
            <Link to="https://www.facebook.com">
              <FacebookIcon fontSize="large" /> 
            </Link>
          </Typography>
          </Box>

          
          
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            50 north Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: mredwardroh@gmail.com
          </Typography>
          <Typography mb="30px">(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
