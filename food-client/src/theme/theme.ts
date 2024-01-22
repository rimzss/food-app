import { createTheme } from "@mui/material";

export const theme = createTheme({spacing:4,
palette:{mode:'light', 
primary:{main:'#18BA51'},
success:{main:"#ffffff"}

}
})
declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }