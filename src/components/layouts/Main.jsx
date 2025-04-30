import React from 'react'
import MainRoute from '../routes/MainRoute'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import Card from '../common/Card'
import Button from '../common/Button'

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