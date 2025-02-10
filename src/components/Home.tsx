import { useScrollTrigger } from '../Utils/Anim'

const Home = () => {

    useScrollTrigger('.scroll-reveal', { rootMargin: '0px' });

    return (
        <section className={'relative flex flex-col items-center justify-between w-full paddingX paddingY'}>
            <div className={'flex flex-col lg:flex-row items-center justify-between paddingY paddingX bg-bgcolordim rounded-xl'}>
                <div className={'flex flex-col lg:items-start items-center scroll-reveal lg:w-4/6 animatedX animleft justify-between md:gap-3 gap-3'}>
                    <p className={'customH2'}>Salut, je m'appelle</p>
                    <h1 className={'customH1'}>ARNOLD MASSELIN</h1>
                    <img className={'lg:hidden md:block rounded-full w-3/6 drop-shadow-lg scroll-reveal pop'} src='src/assets/images/others/Photo.webp'></img>
                    <h2 className={'customH2'}>Et en tant que
                        <span className={'font-extrabold xl:text-4xl lg:text-3xl'}> Développeur</span>,<br /> je crée des trucs sur internet</h2>
                    <p className={'customH2'}>On construit ensemble ?</p>
                </div>
                <img className={'lg:block hidden rounded-full lg:w-2/6 drop-shadow-lg scroll-reveal pop'} src='src/assets/images/others/Photo.webp'></img>
            </div>

            <div className={'absolute bottom-[10px] md:bottom-[90px] lg:bottom-[90px] xl:bottom-[340px] w-screen'}>
                <img className={'absolute z-[-4] scroll-reveal animatedY animBottom drop-shadow-custom'} src="src\assets\images\background\herobackground3.webp"></img>
                <img className={'absolute z-[-3] scroll-reveal animatedY speedMedium animBottom'} src="src\assets\images\background\herobackground2.webp"></img>
                <img className={'absolute z-[-1] scroll-reveal animatedY speedSlow animBottom'} src="src\assets\images\background\herobackground1.webp"></img>
            </div>
        </section>
    )
}

export default Home
