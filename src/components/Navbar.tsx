
const Navbar = () => {

    return (
        <nav className={`w-[100vw] flex justify-between items-center bg-bgcolor sticky z-10 top-0 border-b-2 md:border-b-4 md:py-1 paddingX`}>
            <a href="#home"><img src="src/assets/images/general_icons/home.svg" className="h-8 hidden md:flex" alt="Home" /></a>
            <ul className="hidden md:flex space-x-6 items-center">
                <li><a href="#timeline" className="hover:text-gray-400">Présentation</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projets</a></li>
                <li><a href="#cv" className="hover:text-gray-400">CV</a></li>
                <li><a href="#skills" className="hover:text-gray-400">Compétences</a></li>
                <li><a href="#contact" className="customButtonNav">Contact</a></li>
            </ul>

            {/* Mobile */}
            <ul className="flex w-full md:hidden justify-evenly h-9 p-1">
                <li><a href="#home"><img src="src/assets/images/general_icons/home.svg" className="h-full" alt="Home" /></a></li>
                <li><a href="#navContainer"><img src="src/assets/images/general_icons/nav.svg" className="h-full" alt="Navigation" /></a></li>
            </ul>
        </nav>
    )
}

export default Navbar