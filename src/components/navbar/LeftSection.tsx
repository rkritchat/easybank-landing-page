const pageDetail = {
    logo: '/logo.svg',
    logo_alt: 'easybank',
}

const LeftSection = () => {
    return (<section>
        <img src={pageDetail.logo} alt={pageDetail.logo_alt} className='w-[10rem]'/>
    </section>)
}


export default LeftSection