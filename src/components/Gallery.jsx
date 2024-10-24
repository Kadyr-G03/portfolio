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
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/e2e0e62f-0064-4f86-b9d8-5a55cb7110ca/Korembi-January-2024.jpg" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Waterfall_at_Arthur%27s_Pass_National_Park.jpg/1200px-Waterfall_at_Arthur%27s_Pass_National_Park.jpg" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://www.lombardodier.com/files/live/sites/loportail/files/news/2021/May/20210521/Nature_LOgreen.jpg" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=90&crop=false" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/06/Female_Woods_hike_1296x728-header-1-1296x728.jpg?w=1155&h=1528" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://www.pbs.org/wnet/nature/files/2019/07/Super-Hummingbirds-2.jpg" class="w-full h-auto object-cover" />
                    <img className="break-inside-avoid w-[300px] rounded-[20px]" src="https://natureinvestmenthub.ca/wp-content/uploads/2023/10/nathan-dumlao-xjhgZCuvg3k-unsplash-scaled.jpg" class="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    )
  }
  
  export default App