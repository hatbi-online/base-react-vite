import React from 'react'

export default function FormMessage({ message, type = 'normal' }) {
	const types = {
		normal: 'text-gray-500',
		error: 'text-red-500',
		success: 'text-green-500',
		warning: 'text-yellow-500',
	}

	return (
		<div>FormMessage</div>
	)
}
