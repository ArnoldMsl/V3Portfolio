import Navbar from '../components/Navbar';
import Home from '../components/Home'


function Appli() {

    return (
        <>
            <Navbar />
            <div className={'flex flex-col mx-auto xl:max-w-[1400px] 2xl:max-w-[1700px]'}>
                <Home />
            </div>
        </>
    );
}

export default Appli;
