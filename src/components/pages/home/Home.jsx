import React from 'react'
import Banner from '../../Banner'
import About from './About'
import Service from './Service'
import Pricing from './Pricing'
import Contact from './Contact'

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Banner />
			<Service />
			<Pricing />
			<About />
			<Contact />
		</div>
	)
}
