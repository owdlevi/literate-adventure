import SettingsDrawer from './drawer';
//
import ThemeContrast from './ThemeContrast';
import ThemeColorPresets from './ThemeColorPresets';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        {children}
        <SettingsDrawer />
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
