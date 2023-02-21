const pageDetail = {
    hamburger: 'icon-hamburger.svg',
    hamburger_alt: 'menu',
}
const RightSection = () => {
    return (
        <section>
            <img src={pageDetail.hamburger} alt={pageDetail.hamburger_alt} className='w-8 sm:hidden'/>
            <div className='hidden sm:flex items-center justify-between gap-[15rem]'>
                <ul className='flex gap-6 text-[#9698a6] cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
                <button className='py-4 px-10 rounded-full text-white cursor-pointer bg-gradient-to-r from-[#31d35c] to-[#2bb7da] font-bold tracking-wide'>Request Invite</button>
            </div>
        </section>
    )
}

export default RightSection
