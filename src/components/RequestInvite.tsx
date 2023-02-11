const pageDetail = {
    intro_mobile_img: '/bg-intro-mobile.svg',
    intro_mobile_alt: 'mobile background image',
    mockup_img: '/image-mockups.png',
    mockup_alt: 'mockup image'
}
const RequestInvite = () => {
    return (<div className='flex flex-col items-center pb-20'>
        <div className="relative w-full bg-white">
            <img src={pageDetail.mockup_img} alt={pageDetail.mockup_alt}
                 className='absolute -top-[8.8rem] w-full z-10'/>
            <img src={pageDetail.intro_mobile_img} alt={pageDetail.intro_mobile_alt} className='h-[24.3rem] w-[30rem]'/>
        </div>
        <div className='mx-6 flex flex-col gap-6 items-center'>
            <h1 className='text-4xl text-center text-[#2d314d]'>
                Next generation digital banking
            </h1>
            <p className='text-sm text-center text-[#9698a6] leading-6'>
                Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more.
            </p>
            <button className='py-4 px-10 rounded-full text-white cursor-pointer bg-gradient-to-r from-[#31d35c] to-[#2bb7da] font-bold tracking-wide mt-4'>Request Invite</button>
        </div>
    </div>)
}

export default RequestInvite