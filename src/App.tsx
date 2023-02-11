import Navbar from "./components/Navbar";
import RequestInvite from "./components/RequestInvite";
import WhyEasybank from "./components/WhyEasybank";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

function App() {
    return (
        <main className='h-screen w-full'>
            <Navbar/>
            <RequestInvite/>
            <WhyEasybank/>
            <Articles/>
            <Footer/>
        </main>
    )
}

export default App
