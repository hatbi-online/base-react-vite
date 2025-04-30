import React from 'react'
import Banner from '../../Banner'
import About from './About'
import Service from './Service'

export default function Home() {
	return (
		<div className='min-h-screen'>
			<Banner />
			<About />
			<Service />
		</div>
	)
}
