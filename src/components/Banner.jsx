import React from 'react'

import banner1 from '../assets/banner/banner-1.png'
import Button from './common/Button'

export default function Banner() {
	return (
		<section id='home' className='h-screen'>
			<img className='w-full h-full object-cover' src={banner1} alt="" />
			<div className="absolute inset-0 bg-black/30"></div>
			<div className="absolute inset-0 flex items-center justify-left text-white p-32">
				<div>
					<p className='uppercase font-black text-4xl'>Chào mừng đến với hạt bí</p>
					<p>Giao diện, Website, Apps và hơn thế nữa</p>
					<div className='flex items-center gap-4 mt-8'>
						<a href="#service">
							<Button>Khám phá ngay</Button>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
