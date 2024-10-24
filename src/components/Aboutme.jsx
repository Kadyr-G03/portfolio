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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat.
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est 
                        laborum.
                        <br />
                        <br />
                        Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat 
                        nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est 
                        laborum.
                    </p>
                    <Links />
                </span>
            </div>
        </section>
      </>
    )
  }
  
  export default Aboutme