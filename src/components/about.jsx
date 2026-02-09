import Header2 from "./Header2"
import Footer from "./Footer2"
export default function About(){
    return(
        <div>
            <Header2/>
            <div className="row  d-flex justtify-content-between">
                <div className="col-md-7 ms-4 font-serif">
                    <p className="ps-4 ms-4">More about me…<br />
                    <h1>I have a passion for elevating brands and cultivating human connections through visuals. <br /><br />

                    Most of all, I love what design can do for people. Please get in touch if you’re looking to collaborate. </h1></p>
                </div>
                <div className="col-md-4 ms-4  ps-4">
                <hr className="border-b-8  border-dark pb-2"/>
                <p>Contact <br />
                <br />
                </p>

                </div>
            </div>
            <Footer/>
        </div>
    )
}