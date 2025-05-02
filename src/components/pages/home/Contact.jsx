import React from 'react'
import FormInput from '../../common/FormInput'

export default function Contact() {
	return (
		<section id='contact' className='min-h-screen p-40 bg-white/10'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-16 bg-white rounded-2xl p-16'>
				<div>
					<form action="">
						<div className='flex flex-col gap-8'>
							<FormInput />
							<FormInput />
							<FormInput />
							<textarea name="" id="" cols="30" rows="10" placeholder='Nội dung' className='border-2 border-orange-400 rounded-lg p-4'></textarea>
						</div>
					</form>
				</div>
				<div>
					<p className='font-semibold uppercase mb-16'>Liên hệ với chúng tôi</p>
					<p className='text-4xl mb-16'>Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất</p>
				</div>
			</div>
		</section>
	)
}
