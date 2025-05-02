import React from 'react'

export default function FormInput({ className }) {
	const baseClasses = 'border-2 border-orange-400 rounded-lg p-4 focus:outline-none'

	const classes = className ? `${baseClasses} ${className}` : baseClasses
	return (
		<input type="text" className={classes} />
	)
}
