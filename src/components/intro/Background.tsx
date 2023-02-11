const pageDetail = {
    intro_mobile_img: '/bg-intro-mobile.svg',
    intro_mobile_alt: 'mobile background image',
    intro_desktop_img: '/bg-intro-desktop.svg',
    intro_desktop_alt: 'desktop background image',
    mockup_img: '/image-mockups.png',
    mockup_alt: 'mockup image'
}

const Background = () => {
    return (
        <div>
            <Mobile/>
            <Desktop/>
        </div>
    )
}

const Mobile = () => {
    return (
        <div className="relative w-full bg-white sm:hidden">
            <img src={pageDetail.mockup_img} alt={pageDetail.mockup_alt}
                 className='absolute -top-[8.8rem] w-full z-10'/>
            <img src={pageDetail.intro_mobile_img} alt={pageDetail.intro_mobile_alt} className='h-[24.3rem] w-[30rem]'/>
        </div>
    )
}

const Desktop = () => {
    return (
        <div className="hidden relative w-full bg-white sm:block">
            <img src={pageDetail.mockup_img} alt={pageDetail.mockup_alt}
                 className='absolute -top-[8.8rem] w-[50rem] z-10 -right-[18.7rem]'/>
            <img src={pageDetail.intro_desktop_img} alt={pageDetail.intro_desktop_alt}
                 className='h-[55rem] w-[100rem] relative -right-[14rem] -top-[13rem]'/>
        </div>
    )
}

export default Background