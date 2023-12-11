import React from "react";
import { Link } from "react-router-dom";
import pdf from "../../pdf/resume.pdf"
const Home = () => {

    const onButtonClick = () => {
     
        // using Java Script method to get PDF file
        fetch({pdf}).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SamplePDF.pdf";
                alink.click();
            });
        });
    };
  return (
    <div className="max-w-7xl lg:max-w-[90%] border mx-auto">
      <div className="px-4">
        <div className="hero min-h-screen ">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6 text-2xl">
                I am Moshiur Rahman Taz Mirage. I am a front-end developer.
              </p>
              <Link onClick={onButtonClick} href="" target={"_blank"} download={true} className="btn btn-primary">Download My Resume</Link>
              {/* <Link href="/pdf/resume.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 rounded-lg hover:text-dark
              hover:bg-light text-lg border-2 border-solid border-transparent hover:border-dark px-6"
              download={true}
              >Resume <LinkArrow className={"w-6 ml-1"}/> </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
