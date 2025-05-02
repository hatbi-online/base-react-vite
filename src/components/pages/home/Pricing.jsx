import React from 'react'
import Button from '../../common/Button'

export default function Pricing() {
	const prices = [
		{
			id: 1,
			name: 'Free',
			price: 0,
			description: 'Miễn phí sử dụng dịch vụ và tính năng cơ bản',
			features: [
				'Kho giao diện miễn phí xây dựng sẵn',
				'Triển khai trên Github Page và Vercel',
			],
			value: [],
			buttonText: 'Đăng ký ngay',
		},
		{
			name: 'Cơ Bản 1',
			price: 0,
			description: 'Không cần bỏ ra bất kỳ chi phí nào, bạn cũng có thể sử dụng dịch vụ của chúng tôi với đa dạng vụ và tính năng cơ bản',
			features: [
				'Các tính năng của gói miễn phí',
				'Wordpress Website',
				'Cấu hình tên miền tuỳ chỉnh',
				'Cấu hình và triển khai trên Shared Hosting',

			],
			value: [],
			buttonText: 'Đăng ký ngay',
		},
		{
			name: 'Cơ Bản 2',
			price: 0,
			description: 'Không cần bỏ ra bất kỳ chi phí nào, bạn cũng có thể sử dụng dịch vụ của chúng tôi với đa dạng vụ và tính năng cơ bản',
			features: [
				'Các tính năng của gói miễn phí',
				'Wordpress Website',
				'Cấu hình tên miền tuỳ chỉnh',
				'Cấu hình và triển khai trên Shared Hosting',

			],
			value: [],
			buttonText: 'Đăng ký ngay',
		},
		{
			name: 'Chuyên Nghiệp',
			price: 0,
			description: 'Không cần bỏ ra bất kỳ chi phí nào, bạn cũng có thể sử dụng dịch vụ của chúng tôi với đa dạng vụ và tính năng cơ bản',
			features: [
				'Các tính năng của gói miễn phí',
				'Wordpress Website',
				'Cấu hình tên miền tuỳ chỉnh',
				'Cấu hình và triển khai trên Shared Hosting',

			],
			value: [],
			buttonText: 'Đăng ký ngay',
		},

	]

	return (
		<section id='pricing' className='bg-white/30 min-h-screen p-32'>
			<p className='text-center font-semibold uppercase mb-16'>Bảng giá dịch vụ</p>

			<div className='grid grid-cols-4 gap-8'>
				<div className='bg-white flex flex-col items-center border-2 border-orange-400 rounded-lg p-8 hover:cursor-pointer'>
					<p className='font-bold uppercase text-orange-400 mb-8'>miễn phí</p>
					<div>
						<div className='mb-8 min-h-24'>
							<p className='text-center mb-8'>Miễn phí sử dụng dịch vụ và tính năng cơ bản</p>
						</div>
						<div className='mb-8'>
							<ul className='list-disc flex flex-col text-left space-y-4'>
								<li>HTML5/CSS3/Javascript</li>
								<li>Kho giao diện đa dạng xây dựng sẵn</li>
								<li>Triển khai trên Github Page và Vercel</li>
								<li>0ms - Không cần chờ đợi thời gian xây dựng</li>
								<li>Trợ lý AI Bot</li>
							</ul>
						</div>
					</div>
					<div className='flex items-center flex-col mt-auto'>
						<p className='text-center text-lg font-bold mb-4'>Miễn phí</p>
						<Button variant='outline'>Đăng ký ngay</Button>
					</div>
				</div>
				<div className='bg-white flex flex-col items-center border-2 border-orange-400 rounded-lg p-8 hover:cursor-pointer'>
					<p className='font-bold uppercase text-orange-400 mb-8'>Cơ bản 1</p>
					<div className='mb-16'>
						<div className='mb-8 min-h-24'>
							<p className='text-center'>Website với nền tảng CMS, thao tác nhanh chóng, tiện lợi, đầy đủ chức năng</p>
						</div>
						<div className='mb-8'>
							<ul className='list-disc flex flex-col text-left space-y-4'>
								<li>Wordpress Website & Tools</li>
								<li>Triển khai trên Share Hosting</li>
								<li>Trợ lý AI Bot</li>
							</ul>
						</div>
					</div>

					<div className='flex items-center flex-col mt-auto'>
						<p className='text-center text-sm'></p>
						<p className='text-center text-lg font-bold mb-4'><span className='text-sm font-medium'>Giá chỉ từ </span>200.000đ / Site</p>
						<Button variant='outline'>Đăng ký ngay</Button>
					</div>
				</div>
				<div className='bg-white flex flex-col items-center border-2 border-orange-400 rounded-lg p-8 hover:cursor-pointer'>
					<p className='font-bold uppercase text-orange-400 mb-8'>Cơ bản 2</p>
					<div className='mb-16'>
						<div className='mb-8 min-h-24'>
							<p className='text-center'>Xây dựng giao diện theo yêu cầu với các framework hiện đại, mượt mà</p>
						</div>
						<div className='mb-8'>
							<ul className='list-disc flex flex-col text-left space-y-4'>
								<li>ReactJS, VueJS, Blade, TailwindCSS, v.v</li>
								<li>Kho giao diện tuỳ chỉnh</li>
								<li>Darkmode, chuyển đổi đa ngôn ngữ</li>
								<li>Triển khai trên Github Page và Vercel</li>
								<li>Chăm sóc khách hàng trực tiếp</li>
							</ul>
						</div>
					</div>

					<div className='flex items-center flex-col mt-auto'>
						<p className='text-center text-sm'></p>
						<p className='text-center text-lg font-bold mb-4'><span className='text-sm font-medium'>Giá chỉ từ </span>200.000đ / Site</p>
						<Button variant='outline'>Đăng ký ngay</Button>
					</div>
				</div>
				<div className='bg-white flex flex-col items-center border-2 border-orange-400 rounded-lg p-8 hover:cursor-pointer'>
					<p className='font-bold uppercase text-orange-400 mb-8'>Chuyên nghiệp</p>
					<div className='mb-16'>
						<div className='mb-8 min-h-24'>
							<p className='text-center'>Xây dựng Website đầy đủ chức năng, tích hợp công nghệ mới nhất và API 	tuỳ chỉnh</p>
						</div>
						<div className='mb-8'>
							<ul className='list-disc flex flex-col text-left space-y-4'>
								<li>Backend: Laravel, Java, PHP, v.v</li>
								<li>Frontend: ReactJS, VueJS, Blade, TailwindCSS, v.v</li>
								<li>Mobile app đa nền tảng</li>
								<li>Cấu hình và triển khai trên VPS server</li>
								<li>Tích hợp API bên thứ ba</li>
								<li>Ngôn ngữ và Framework đa dạng</li>
								<li>Bảo trì và cập nhật lâu dài</li>
								<li>Thời gian làm việc nhanh chóng</li>
								<li>Chăm sóc khách hàng trực tiếp</li>
							</ul>
						</div>


					</div>

					<div className='flex items-center flex-col'>
						<p className='text-center text-lg font-bold mb-4'><span className='text-sm font-medium'>Giá chỉ từ </span>1.000.000đ / Site</p>
						<Button variant='outline'>Đăng ký ngay</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
