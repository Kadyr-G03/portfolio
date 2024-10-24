import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [errorMessage, setErrorMessage] = useState("");
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if all fields are filled
        if (!formData.name  || !formData.email || !formData.message) {
          setErrorMessage("Please fill out all fields");
          return;
        }
    
        // EmailJS configuration
        const serviceId = "portfolio_form"; // Replace with your service ID
        const templateId = "portfolio_temp"; // Replace with your template ID
        const userId = "PVbDX_C52SYeUtYax"; // Replace with your EmailJS user ID
    
        emailjs
          .send(serviceId, templateId, formData, userId)
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsSubmitted(true);
            setErrorMessage(""); // Clear error message
            setFormData({ name: "", surname: "", email: "", message: "" }); // Clear the form
          })
          .catch((error) => {
            console.error("FAILED...", error);
            setErrorMessage("Sorry, something went wrong. Please try again.");
          });
      };

    return (
        <section id="contact" className="min-[1000px]:h-[760px] w-full max-w-[1920px] bg-zinc-950">
            <div className="bg-zinc-50 h-[30px] w-full"></div>
            <div className="bg-zinc-950 h-[25px] w-full min-[1000px]:hidden"></div>
            <div className="w-full flex flex-row items-center justify-center">
                <div className="hidden flex flex-col content-center h-[730px] bg-cover bg-center bg-[url('https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg')] w-[540px] min-[1000px]:block">
                    <span className="flex flex-col items-end">
                        <span className="flex flex-row items-center m-[30px]">
                            <span className="text-zinc-200 font-semibold text-right">
                                PHONE
                                <br />
                                +36 707 800 974
                            </span>
                            <svg className="fill-zinc-200 mx-[25px]" height="22px" width="22px" viewBox="0 0 47.5 47.5">
                                <g transform="matrix(1.25 0 0 -1.25 0 47.5)">
                                <path d="m35.06 10.593-3.496 3.496a4.942 4.942 0 0 1-8.341-2.528c-5.765 1.078-11.372 6.662-11.721 11.653a4.918 4.918 0 0 1 2.587 1.36 4.944 4.944 0 0 1 0 6.991l-3.495 3.495a4.943 4.943 0 0 1-6.99 0C-6.881 24.574 24.575-6.882 35.06 3.604a4.942 4.942 0 0 1 0 6.989"></path>
                                </g>
                            </svg>
                        </span>
                        <span className="flex flex-row items-center m-[30px]">
                            <span className="text-zinc-200 font-semibold text-right">
                                ADDRESS
                                <br />
                                Debrecen, Hungary
                            </span>
                            <svg className="fill-zinc-200 mx-[25px]" width="35px" height="35px" viewBox="0 0 100 100">
                                <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"/>
                            </svg>
                        </span>
                        <span className="flex flex-row items-center m-[30px]">
                            <span className="text-zinc-200 font-semibold text-right">
                                EMAIL
                                <br />
                                kadyr.g03@gmail.com
                            </span>
                            <svg className="fill-zinc-200 mx-[25px]" width="35px" height="35px" viewBox="0 0 100 100">
                                <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"/>
                            </svg>
                        </span>
                    </span>
                </div>
                {isSubmitted ? (
                    <span className="text-zinc-50 p-[100px] font-semibold text-[30px] text-center"><span className="text-[50px]">Thank you</span><br /><br /><br />Your message has been sent successfully!<br /><br />I will get it touch with you soon!</span>
                ) : (
                <form onSubmit={handleSubmit} className="w-full min-[1000px]:w-[540px] flex flex-col items-center min-[1000px]:items-start" action="">
                    <span className="text-zinc-50 text-[48px] font-bold py-[20px] min-[1000px]:pl-[80px] min-[1000px]:py-[30px]">Contact</span>
                    <input className="transition-all min-[1000px]:ml-[60px] my-[10px] bg-zinc-800 hover:bg-zinc-700 rounded-[10px] indent-8 focus:outline-0 focus:bg-zinc-700 text-zinc-200 font-semibold h-[60px] w-10/12 max-w-[380px]" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                    <input className="transition-all min-[1000px]:ml-[60px] my-[10px] bg-zinc-800 hover:bg-zinc-700 rounded-[10px] indent-8 focus:outline-0 focus:bg-zinc-700 text-zinc-200 font-semibold h-[60px] w-10/12 max-w-[380px]" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                    <input className="transition-all min-[1000px]:ml-[60px] my-[10px] bg-zinc-800 hover:bg-zinc-700 rounded-[10px] indent-8 focus:outline-0 focus:bg-zinc-700 text-zinc-200 font-semibold h-[185px] w-10/12 max-w-[380px]" type="text" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    <button className="transition-all min-[1000px]:ml-[60px] my-[10px] bg-zinc-300 hover:bg-zinc-200 rounded-[10px] text-zinc-900 font-bold h-[60px] w-10/12 max-w-[380px]" type="submit" value="Submit">Submit</button>
                </form>
            )
            };
            </div>
            <div className="bg-zinc-950 h-[25px] w-full min-[1000px]:hidden"></div>
        </section>
    )
  }
  
  export default Contact