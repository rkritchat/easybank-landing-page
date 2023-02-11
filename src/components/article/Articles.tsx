import Article from "./Article";

const Articles = () => {
    const data = [
        {
            img: '/image-currency.jpg',
            img_alt: 'currency',
            author: 'By Claire Robinson',
            topic: 'Receive money in any currency with no fees',
            content: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        },
        {
            img: '/image-restaurant.jpg',
            img_alt: 'restaurant',
            author: 'By Wilson Hutton',
            topic: 'Treat yourself without worrying about money',
            content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        },
        {
            img: '/image-plane.jpg',
            img_alt: 'plan',
            author: 'By Wilson Hutton',
            topic: 'Take your Easybank card wherever you go',
            content: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        },
        {
            img: '/image-confetti.jpg',
            img_alt: 'confetti',
            author: 'By Claire Robinson',
            topic: 'Our invite-only Beta accounts are now live!',
            content: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
    ]

    return (<div className='py-20 flex flex-col items-center bg-[#fafafa] sm:px-[8rem] sm:items-start'>
        <h1 className='text-3xl mb-5 tracking-wide mb-8 sm:px-7'>Latest Articles</h1>
        <div className='flex flex-col sm:flex-row'>
            {data.map((e, i) => (
                <Article key={i} img={e.img} img_alt={e.img_alt} author={e.author} topic={e.topic} content={e.content}/>
            ))}
        </div>
    </div>)
}

export default Articles