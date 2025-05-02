import React from 'react'

export default function Footer() {
	return (
		<div className=''>
			<div className='p-32 bg-black/60 text-white'>

				<div class="w-full">
					<div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
						<div>
							<h2 class="mb-6 text-sm font-semibold text-white uppercase">Company</h2>
							<ul class="text-white/50 font-medium">
								<li class="mb-4">
									<a href="#" class=" hover:underline">About</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Careers</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Brand Center</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Blog</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
							<ul class="text-gray-500 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline">Discord Server</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Twitter</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Facebook</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Contact Us</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
							<ul class="text-gray-500 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline">Privacy Policy</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Licensing</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Terms &amp; Conditions</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
							<ul class="text-gray-500 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline">iOS</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Android</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">Windows</a>
								</li>
								<li class="mb-4">
									<a href="#" class="hover:underline">MacOS</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
			<div className='px-32 py-8 bg-black/70 text-white'>
				<p className='text-center'>©Bản quyền - Đã được bảo lưu. Thiết kế bởi ♥️ quandohong28</p>
			</div>
		</div>
	)
}
