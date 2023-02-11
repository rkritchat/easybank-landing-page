import Card from "./Card";

const WhyEasybank = () => {
    const data = [
        {
            img: '/icon-online.svg',
            header: 'Online Banking',
            content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
        },
        {
            img: '/icon-budgeting.svg',
            header: 'Simple Budgeting',
            content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        },
        {
            img: '/icon-onboarding.svg',
            header: 'Fast Onboarding',
            content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
            img: '/icon-api.svg',
            header: 'Open API',
            content: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
        },
    ]
    return (<div className='py-20 bg-[#f3f4f6] sm:px-[8rem]'>
        <div className='flex flex-col items-center gap-4 mb-12 sm:items-start'>
            <h1 className='text-3xl px-10 text-center text-[#2d314d] sm:text-left sm:px-7'>Why Choose Easybank?</h1>
            <p className='text-center text-sm px-8 text-[#9698a6] sm:w-[35rem] sm:text-left'>We leverage Open Banking to turn your bank account into your financial hub. Control
                your finances like never before.</p>
        </div>
        <div className='flex flex-col sm:flex-row'>
            {
               data.map((e, i)=>(
                   <Card key={i} img={e.img} header={e.header} content={e.content}/>
               ))
            }
        </div>
    </div>)
}

export default WhyEasybank