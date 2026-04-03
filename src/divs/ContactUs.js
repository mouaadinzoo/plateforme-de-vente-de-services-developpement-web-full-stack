import "../contact11.css";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const ContactUs = () => {
  return (
    <div className="contact-box mt-16 ">
     
      <div className="contact-info w-96 ">
        <span className="coninfo font-bold flex font-extrabold text-xl">
          <div className="text-2xl bg-[#E4DCD1] p-2 rounded-full">
            <BsTelephone />
          </div>{" "}
          <div className=" ml-7">WRITE TO US</div>
        </span>
        <p className="a11 px-10">We are available 24/7, 7 days a week.</p>
  
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <hr></hr>
        <span className="coninfo font-bold flex font-extrabold text-xl  ">
          <div className="text-3xl  bg-[#E4DCD1] p-2 rounded-full">
            <AiOutlineMail />
          </div>{" "}
          <div className=" ml-7">WRITE TO US</div>
        </span>
        <p className="a11 px-10">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="a11 px-10 mt-11">Emails: support@exclusive.com</p>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className="contact-form mt-2 ml-7">
        <div>
          {" "}
          <input
            type="text"
            className="forminput pl-2"
            placeholder="Your name *"
          ></input>
          <input
            type="text"
            className="forminput pl-2"
            placeholder="Your mail *"
          ></input>
          <input
            type="text"
            className="forminput pl-2"
            placeholder="Your phone *"
          ></input>
        </div>
        <div>
          <input
            type="text"
            className="forminputcom h-64 "
            placeholder="Your comment"
          ></input>
        </div>
        <div className="text-right mr-9 mt-12">
          <button
            class="bg-[#DFB4A3] hover:bg-[#c49e8f] text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline border-2 border-[#23414B] "
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


