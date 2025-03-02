
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
          © 2025 My Website. All Rights Reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
