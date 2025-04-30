import React from 'react'

export default function Button({ children, className, variant = 'primary' }) {
	const variants = {
		primary: 'bg-orange-400 border-2 border-orange-400 hover:border-white hover:bg-transparent text-white hover:cursor-pointer font-semibold transition-all duration-500 ease-in-out py-3 px-5 rounded-lg',
		outline: 'bg-transparent border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white hover:cursor-pointer font-semibold transition-all duration-500 ease-in-out py-3 px-5 rounded-lg',
	}

	const classes = className ? `${variants[variant]} ${className}` : variants[variant];

	return (
		<div className={classes}>{children}</div>
	)
}
