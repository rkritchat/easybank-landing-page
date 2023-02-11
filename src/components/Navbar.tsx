const pageDetail = {
    logo: '/logo.svg',
    logo_alt: 'easybank',
    hamburger: 'icon-hamburger.svg',
    hamburger_alt: 'menu',
}

const Navbar = () => {
    return (<div className='flex justify-between items-center p-6 bg-white z-50 relative'>
        <LeftSection/>
        <RightSection/>
    </div>)
}

const LeftSection = () => {
    return (<section>
        <img src={pageDetail.logo} alt={pageDetail.logo_alt} className='w-[10rem]'/>
    </section>)
}

const RightSection = () => {
    return <section>
        <img src={pageDetail.hamburger} alt={pageDetail.hamburger_alt} className='w-8'/>
    </section>
}

export default Navbar