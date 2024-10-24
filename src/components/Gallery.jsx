function App() {
    return (
        <section id="gallery" className="flex flex-col items-center text-zinc-50 w-full bg-zinc-950 max-w-[1920px]">
            <div className="bg-zinc-50 h-[30px] w-full"></div>
            <div className="bg-zinc-950 h-[25px] w-full"></div>
            <span className="w-full max-w-[1200px] flex items-end justify-between">
                <a className="font-semibold text-[36px] pl-[20px] pt-[15px] min-[800px]:pl-[30px]" href="#">Gallery</a>
                <a className="pr-[20px] pt-[15px] min-[800px]:pr-[30px]" href="#">see all</a>
            </span>

            <div class="px-[20px] py-[50px]">
                <div class="columns-1 gap-8 space-y-8 min-[700px]:columns-2 min-[1100px]:columns-3">
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x400" alt="Gallery Image 1" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x500" alt="Gallery Image 2" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x350" alt="Gallery Image 3" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x450" alt="Gallery Image 4" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x500" alt="Gallery Image 5" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x400" alt="Gallery Image 6" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x350" alt="Gallery Image 7" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://via.placeholder.com/300x450" alt="Gallery Image 8" class="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    )
  }
  
  export default App