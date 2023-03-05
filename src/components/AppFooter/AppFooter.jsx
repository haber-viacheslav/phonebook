import { Paper, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const AppFooter = () => {
  return (
    <footer>
      <Paper sx={{}}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} p={4}>
            <Typography variant="subtitle1">2023 developed</Typography>
          </Box>
        </Container>
      </Paper>
    </footer>
  );
};
