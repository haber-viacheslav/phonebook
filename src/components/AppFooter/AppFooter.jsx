import { Paper, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const AppFooter = () => {
  return (
    <footer>
      <Paper sx={{}}>
        <Container sx={{ border: "1px solid 'prinary.second'" }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} p={4}>
            <Typography sx={{ fontSize: '1rem' }} variant="body1">
              2023 developed
            </Typography>
          </Box>
        </Container>
      </Paper>
    </footer>
  );
};
