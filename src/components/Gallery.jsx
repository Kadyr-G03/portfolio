function App() {
    return (
        <section id="gallery" className="flex flex-col items-center text-zinc-50 w-full bg-zinc-950 max-w-[1920px]">
            <div className="bg-zinc-50 h-[30px] w-full"></div>
            <div className="bg-zinc-950 h-[25px] w-full"></div>
            <span className="w-full max-w-[1200px] flex items-end justify-between">
                <a className="font-semibold text-[36px] pl-[20px] pt-[15px] min-[800px]:pl-[30px]" href="#">Gallery</a>
                <a className="pr-[20px] pt-[15px] min-[800px]:pr-[30px]" href="#">see all</a>
            </span>
            <div className="my-[30px] grid grid-cols-1 min-[800px]:grid-cols-2 min-[1200px]:grid-cols-3">
                <a href="#" className="block flex flex-col items-center m-[20px] w-[340px] h-[600px]">
                    <div className="rounded-[10px] h-[550px] w-full max-w-[310px] bg-cover bg-[url('https://www.oneclickitsolution.com/blog/wp-content/uploads/2024/01/What-is-GDS-1-min.webp')]"></div>
                    <span className="py-[10px] text-[30px] font-bold">Photography</span>
                </a>
                    <a href="#" className="block flex flex-col items-center m-[20px] w-[340px] h-[600px]">
                        <div className="rounded-[10px] h-[550px] w-full max-w-[310px] bg-cover bg-[url('https://www.oneclickitsolution.com/blog/wp-content/uploads/2024/01/What-is-GDS-1-min.webp')]"></div>
                        <span className="py-[10px] text-[30px] font-bold">Photography</span>
                    </a>
                    <a href="#" className="block flex flex-col items-center m-[20px] w-[340px] h-[600px]">
                        <div className="rounded-[10px] h-[550px] w-full max-w-[310px] bg-cover bg-[url('https://www.oneclickitsolution.com/blog/wp-content/uploads/2024/01/What-is-GDS-1-min.webp')]"></div>
                        <span className="py-[10px] text-[30px] font-bold">Photography</span>
                    </a>
                    <a href="#" className="block flex flex-col items-center m-[20px] w-[340px] h-[600px]">
                        <div className="rounded-[10px] h-[550px] w-full max-w-[310px] bg-cover bg-[url('https://www.oneclickitsolution.com/blog/wp-content/uploads/2024/01/What-is-GDS-1-min.webp')]"></div>
                        <span className="py-[10px] text-[30px] font-bold">Photography</span>
                    </a>
                    <a href="#" className="block flex flex-col items-center m-[20px] w-[340px] h-[600px]">
                        <div className="rounded-[10px] h-[550px] w-full max-w-[310px] bg-cover bg-[url('https://www.oneclickitsolution.com/blog/wp-content/uploads/2024/01/What-is-GDS-1-min.webp')]"></div>
                        <span className="py-[10px] text-[30px] font-bold">Photography</span>
                    </a>
                    <a href="#" className="block flex flex-col items-center m-[20px] w-[340px] h-[600px]">
                        <div className="rounded-[10px] h-[550px] w-full max-w-[310px] bg-cover bg-[url('https://www.oneclickitsolution.com/blog/wp-content/uploads/2024/01/What-is-GDS-1-min.webp')]"></div>
                        <span className="py-[10px] text-[30px] font-bold">Photography</span>
                    </a>
            </div>
        </section>
    )
  }
  
  export default App