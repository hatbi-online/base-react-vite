import React from 'react'
import Button from '../../common/Button'

export default function About() {
	return (
		<div className='bg-white min-h-screen px-32 flex items-center'>
			<div className='grid grid-cols-2 gap-32'>
				<div className='col-span-1'>
					<p className='font-semibold uppercase mb-16'>Về chúng tôi</p>
					<p className='text-4xl mb-16'>Hơn 20 Năm Thiết Kế Và Xây Dựng Ứng Dụng Và Website</p>
					<p className='mb-16'>hatbi.online là đơn vị với hơn 20 năm kinh nghiệm trong việc thiết kế và xây dựng website cùng ứng dụng tùy biến, giúp doanh nghiệp tối ưu hoá trải nghiệm người dùng và phát triển thương hiệu số. Chúng tôi mang đến giải pháp hiện đại, bảo mật cao, chuẩn UI/UX và dễ dàng mở rộng theo nhu cầu thực tế.</p>
					<Button className='inline-block' variant='outline'>Đọc thêm</Button>
				</div>
				<div className='col-span-1'>
					<img className='border-2 border-orange-400 rounded-lg w-full object-cover' src="https://tailadmin.com/_next/static/media/feature-1.68397d46.svg" alt="" />
				</div>
				<div className='col-span-2 flex items-center justify-center gap-4'>
					<span>1</span>
					<span>2</span>
					<span>3</span>
				</div>
			</div>
		</div>
	)
}
