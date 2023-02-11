type pageProp = {
    img: string
    img_alt: string
    author: string
    topic: string
    content: string
}
const Article = ({img, img_alt, author, topic, content}: pageProp) => {
    return (<div className='px-6 flex flex-col mb-6 sm:px-3'>
        <img src={img} alt={img_alt} className='rounded-t-xl w-full h-[13.5rem] object-cover sm:rounded-t-md'/>
        <div className='flex flex-col gap-2 px-5 pt-6 pb-12 bg-white bg-white rounded-b-xl'>
            <p className='text-[0.67rem]'>{author}</p>
            <h1 className='text-[1.1rem]'>{topic}</h1>
            <p className='text-sm leading-5'>{content}</p>
        </div>
    </div>)
}

export default Article