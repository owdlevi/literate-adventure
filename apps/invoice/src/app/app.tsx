import { ThemeProvider } from '@owd/ui/shared/theme';
import { MotionLazyContainer, ThemeSettings } from '@owd/ui/components';

import { Button } from '@mui/material';

export function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}

export default App;
