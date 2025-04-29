import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/errors/NotFound'

export default function MainRoute() {
	return (
		<Routes>
			{/* auto redirect ve /login neu o / */}
			<Route path="/" element={<Home />} />


			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
