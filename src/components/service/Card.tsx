
type pageProp = {
    img: string
    header: string
    content: string
}

const Card = ({img, header, content}: pageProp)=>{
    return (<div className='w-full flex flex-col items-center px-[2rem] gap-4 mb-10 sm:items-start'>
        <img src={img} alt='logo' className='w-16'/>
        <h1 className='text-xl'>{header}</h1>
        <p className='text-center text-sm leading-6 sm:text-left'>{content}</p>
    </div>)
}

export default Card