import Navbar from "./components/navbar/Navbar";
import RequestInvite from "./components/intro/RequestInvite";
import WhyEasybank from "./components/service/WhyEasybank";
import Articles from "./components/article/Articles";
import Footer from "./components/footer/Footer";

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
