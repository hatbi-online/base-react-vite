import React from 'react'
import Card from '../../common/Card'
import loginForm from '../../../assets/illustrations/login_form.svg'
import landingpage from '../../../assets/illustrations/landing_page.svg'
import adminDashboard from '../../../assets/illustrations/admin_dashboard.svg'
import blog from '../../../assets/illustrations/blog.svg'
import wordpress from '../../../assets/illustrations/wordpress.svg'


export default function Service() {
	return (
		<section id='service' className='bg-white min-h-screen p-32 flex flex-col justify-center items-center'>
			<div className='mb-32'>
				<p className='text-center font-semibold uppercase mb-16'>Dịch vụ</p>
				<div className='grid grid-cols-4 gap-8'>
					<Card>
						<p className='text-xl mb-4'>Giao diện</p>
						<p>Cung cấp lên tới hơn 1000 giao diện có sẵn với nhiều công nghệ khác nhau và các lĩnh vực hiện hành như Ecommerce Website, Trang quản trị, Giao diện xác thực,...</p>
					</Card>
					<Card>
						<p className='text-xl mb-4'>Website đầy đủ chức năng và Ứng dụng di động</p>
						<p>Ngoài ra chúng tôi còn cung cấp ứng dụng Mobile, Desktop và Website đầy đủ chức năng từ SSR và CSR tuỳ chỉnh theo ý muốn của bạn</p>
					</Card>
					<Card>
						<p className='text-xl mb-4'>Máy chủ & Triển khai hệ thống</p>
						<p>Hỗ trợ triển khai ứng dụng lên các hệ thống máy chủ với tốc độ cực nhanh và bảo mật cao</p>
					</Card>
					<Card>
						<p className='text-xl mb-4'>Tích hợp dịch vụ</p>
						<p>Tích hợp các dịch vụ tiện ích như SEO, Bảo mật, Giao hàng & Thanh toán trực tuyến trên nhiều nền tảng khác nhau như Momo, VNPay, Paypal,...</p>
					</Card>
				</div>
			</div>

			<div>
				<p className='text-center font-semibold uppercase mb-16'>Các sản phẩm nổi bật của chúng tôi</p>
				<div className='grid grid-cols-6 gap-8'>
					<Card className='flex flex-col justify-between col-span-2'>
						<img src={loginForm} alt="" />
						<p className='text-lg mt-4 text-center'>Authentication Page</p>
					</Card>
					<Card className='flex flex-col justify-between col-span-2'>
						<img src={landingpage} alt="" />
						<p className='text-lg mt-4 text-center'>Landing Page</p>
					</Card>
					<Card className='flex flex-col justify-between col-span-2'>
						<img src={adminDashboard} alt="" />
						<p className='text-lg mt-4 text-center'>Admin Dashboard</p>
					</Card>
					<Card className='flex flex-col justify-between col-span-3'>
						<img src={wordpress} alt="" />
						<p className='text-lg mt-4 text-center'>Wordpress Website</p>
					</Card>
					<Card className='flex flex-col justify-between col-span-3'>
						<img src={blog} alt="" />
						<p className='text-lg mt-4 text-center'>Website hoàn chỉnh</p>
					</Card>
				</div>
			</div>
		</section>
	)
}
