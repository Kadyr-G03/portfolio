function Header() {
  return (
    <header className="min-[0px]:justify-between max-w-[1920px] min-[800px]:justify-around bg-black/40 w-full h-[55px] backdrop-blur-3xl fixed flex items-center ">
        <a href="#intro">
            <svg className="mx-[15px] fill-zinc-200 w-6 h-6 transition-all hover:fill-zinc-50" viewBox="0 0 25 25">
                <polygon className="st0" points="1.81,0.01 7.64,0.02 7.64,7.15 3.58,11.73 4.39,12.46 15.37,0.01 23.5,0.02 12.39,12.48 23.5,25 15.37,25 7.64,16.14 7.64,25 1.81,25 "/>
            </svg>
        </a>
        <span className="min-[0px]:hidden min-[800px]:block">
            <a href="#gallery" className="mx-5 transition-all text-zinc-200 hover:text-zinc-50">Gallery</a>
            <a href="#about_me" className="mx-5 transition-all text-zinc-200 hover:text-zinc-50">About me</a>
            <a href="#" className="mx-5 transition-all text-zinc-200 hover:text-zinc-50">Experience</a>
            <a href="#skills_and_tools" className="mx-5 transition-all text-zinc-200 hover:text-zinc-50">Skills & Tools</a>
        </span>
        <a href="#contact" className="min-[0px]:hidden min-[800px]:block font-semibold transition-all text-zinc-200 hover:text-zinc-50">Contact</a>
        <svg className="min-[800px]:hidden mx-[15px] fill-zinc-200 w-8 h-8 transition-all hover:fill-zinc-50" viewBox="0 0 25 25">
            <path d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" />
        </svg>
    </header>
  )
}

export default Header
