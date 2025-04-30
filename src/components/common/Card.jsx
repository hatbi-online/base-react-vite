import React from 'react'

export default function Card({ children, className }) {
	const baseClasses = 'bg-white border-1 border-black/10 p-8 hover:cursor-pointer hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition duration-500 ease-in-out';

	const classes = className ? `${baseClasses} ${className}` : baseClasses;
	return (
		<div className={classes}>{children}</div>
	)
}
