import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Navbar = () => {
    return (<div className='flex justify-between items-center p-6 bg-white z-50 relative sm:px-[8rem] gap-10'>
        <LeftSection/>
        <RightSection/>
    </div>)
}

export default Navbar