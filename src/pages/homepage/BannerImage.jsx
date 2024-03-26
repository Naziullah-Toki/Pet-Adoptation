import "../../css/BannerImage.css"
import petimage from "../../assets/images/cat and dog logo.png"



const BannerImage = () => {
    return (
        <div className="bannerimage">
            <div className="container grid grid-cols-2 gap-4 justify-center items-center ">
            <div className="text-white  mt-40 ml-11  ">
                    <h1 className="text-6xl">Best Friend with </h1>
                  <h1 className="text-6xl mb-5">Happy Time</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus veniam quam? Voluptas deserunt architecto magnam eligendi omnis, molestiae, eos delectus assumenda aliquam id aspernatur, quos iste pariatur consectetur rem?</p>
                   <button className="btn btn-outline btn-primary mt-5">Adopt Now</button>
                </div>
                <div>
             <img  className="min-h-screen" src={petimage} alt=""  />
                </div>
                
            </div>
        </div>
    );
};

export default BannerImage;