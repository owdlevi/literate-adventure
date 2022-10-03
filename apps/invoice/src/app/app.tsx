import { ThemeProvider } from '@owd/ui/shared/theme';

import { Button } from '@mui/material';

export function App() {
  return (
    <ThemeProvider>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default App;
