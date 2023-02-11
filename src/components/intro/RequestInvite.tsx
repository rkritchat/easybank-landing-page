import Background from "./Background";

const RequestInvite = () => {
    return (<div className='flex flex-col items-center pb-20 sm:px-[8rem] sm:flex-row-reverse sm:pb-[0]'>
        <Background/>
        <div className='mx-6 flex flex-col gap-6 items-center sm:items-start sm'>
            <h1 className='text-4xl text-center text-[#2d314d] sm:text-left sm:text-5xl sm:font-[300]'>
                Next generation digital banking
            </h1>
            <p className='text-sm text-center text-[#9698a6] leading-6 sm:text-left sm:w-[22rem]'>
                Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more.
            </p>
            <button className='py-4 px-10 rounded-full text-white cursor-pointer bg-gradient-to-r from-[#31d35c] to-[#2bb7da] font-bold tracking-wide mt-4'>Request Invite</button>
        </div>
    </div>)
}

export default RequestInvite