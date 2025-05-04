import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/errors/NotFound'
import Home from '../pages/home/Home'

export default function MainRoute() {
	return (
		<Routes>
			{/* auto redirect ve /login neu o / */}
			<Route path="/" element={<Home />} />


			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
