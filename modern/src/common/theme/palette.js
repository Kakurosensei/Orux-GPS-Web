import {
  amber, grey, yellow, red, common,
} from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server) => {
  const colors = {
    white: common.white,
    background: grey[50],
    primary: validatedColor(server?.attributes?.colorPrimary) || yellow[700],
    secondary: validatedColor(server?.attributes?.colorSecondary) || yellow[700],
    positive: yellow[700],
    medium: amber[700],
    negative: red[500],
    neutral: grey[500],
    geometry: '#3bb2d0',
  };

  return {
    background: {
      default: colors.background,
    },
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.white,
    },
    colors,
  };
};
