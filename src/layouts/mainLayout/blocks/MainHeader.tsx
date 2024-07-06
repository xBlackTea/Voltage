'use client';
import { usePalette } from '@/hooks';
import { Box } from '@mui/material';
import React from 'react';
import { MainHeaderAvatar, MainHeaderLogo } from '../atoms';

export const MainHeader = () => {
	const palette = usePalette();

	return (
		<>
			<Box
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					width: '100vw',
					height: '60px',
					backgroundColor: palette.layout.primary,
				}}
			>
				<MainHeaderLogo />
				<MainHeaderAvatar />
			</Box>
			<Box
				sx={{
					height: '60px',
				}}
			/>
		</>
	);
};
