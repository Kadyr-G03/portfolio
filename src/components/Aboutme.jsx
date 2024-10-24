import Links from "./Links.jsx"

function Aboutme() {
    return (
      <>
        <section id="about_me" className="mt-[30px] text-zinc-50 w-full bg-zinc-950 max-w-[1920px]">
            <div className="bg-zinc-50 h-[30px] w-full"></div>
            <div className="w-full flex flex-col items-center  min-[1000px]:flex-row justify-around">
                <img className="hidden  min-[1000px]:block w-5/12" src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_13146336.png" alt="" />
                <span className="p-[30px] flex flex-col min-[800px]:items-start">
                    <p className="p-[10px] font-bold text-[38px] min-[400px]:text-[44px] min-[1000px]:text-[70px]">About Me</p>
                    <br />
                    <p className="py-[10px] text-[14px] min-[400px]:text-[18px] min-[400px]:w-[350px] min-[600px]:text-[20px] min-[600px]:w-[500px] min-[600px]:text-[22px] min-[1200px]:w-[600px] leading-normal">
                    I am a passionate creative designer with a deep love for turning ideas into visually striking realities. With a keen eye for detail and a flair for innovative design, I transform concepts into powerful visual experiences. From branding to digital art, my work blends artistry and functionality to craft designs that not only stand out but also tell a story.                        <br />
                        <br />
                        I specialize in transforming images into polished masterpieces while preserving their natural beauty. With a deep understanding of lighting, textures, and composition, I elevate photos to their full potential, creating visuals that captivate and leave a lasting impression.
                        <br />
                        <br />
                        In both design and photo retouching, my goal is to create visually stunning work that resonates with audiences and brings ideas to life. Through a blend of creativity, technical skill, and attention to detail, I aim to craft experiences that are memorable and impactful.
                    </p>
                    <Links />
                </span>
            </div>
        </section>
      </>
    )
  }
  
  export default Aboutme