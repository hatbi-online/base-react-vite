import React from 'react'
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import MainRoute from '../routes/MainRoute'

export default function Main() {
	return (
		<div className='bg-black/5'>
			<Header />
			<div>
				<MainRoute />
			</div>
			<Footer />
		</div>
	)
}