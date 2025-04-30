import React from 'react'
import Card from '../../common/Card'

export default function Service() {
	return (
		<div className='bg-white/10 min-h-screen px-32 flex items-center'>
			<div>
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
		</div>
	)
}
