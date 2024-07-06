'use client';
import { createTheme } from '@mui/material';
import { blue, green, orange } from '@mui/material/colors';

export const siteTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blue[800],
		},
		layout: {
			primary: '#000',
			secondary: '#111',
			line: blue[900],
			subLine: '#555',
			playIcon: {
				play: green['A700'],
				pause: orange['A700'],
			},
		},
		icon: {
			main: '#fff',
			hide: '#888',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
            ::-webkit-scrollbar{
                width: 10px;
				max-width: 2vw;
            },
            ::-webkit-scrollbar-thumb {
                background-color: rgba(255, 255, 255, 0.3);
            },
            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            `,
		},
	},
});
