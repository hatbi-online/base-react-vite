import { Button } from 'flowbite-react'
import React from 'react'

export default function Home() {
	return (
		<div className='min-h-screen flex items-center justify-center flex-col'>
			<p className='text-sm mb-4'>Cài đặt thành công!</p>
			<a href="https://github.com/orgs/hatbi-online/repositories" target='_blank'>
				<Button className='text-xs hover:cursor-pointer' size='sm'>Nhấn vào đây</Button>
			</a>
		</div>
	)
}
