import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'

export default function Header() {

	const navItems = [
		{ name: 'Trang chủ', path: '#home' },
		{ name: 'Về chúng tôi', path: '#about' },
		{ name: 'Dịch vụ', path: '#service' },
		{ name: 'Bảng giá', path: '#pricing' },
		{ name: 'Blog', path: 'https://blog.hatbi.online', external: true },
		{ name: 'Liên hệ', path: '#contact' },
		{ name: 'English', path: '#contact' },
	]

	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10) // scroll > 10px thì đổi màu
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const headerClasses = `transition-all duration-300 fixed w-full top-0 z-50 px-32 py-8 flex items-center justify-between transition-all ${scrolled ? 'bg-white shadow-sm text-black' : 'bg-transparent text-white'
		}`

	return (
		<div className={headerClasses}>
			<div>
				<img className='w-28' src={logo} alt="logo" />
			</div>
			<div>
				<ul className='flex items-center gap-8'>
					{navItems.map(({ name, path, external }) =>
						external ? (
							<a
								key={name}
								href={path}
								target='_blank'
								rel='noopener noreferrer'
								className='font-light'
							>
								{name}
							</a>
						) : (
							<a key={name} href={path} className='font-light'>
								{name}
							</a>
						)
					)}
				</ul>
			</div>
		</div>
	)
}
