import "../../css/BannerImage.css"
import petimage from "../../assets/images/cat and dog logo.png"



const BannerImage = () => {
    return (
        <div className="bannerimage">
            <div className="container grid grid-cols-2 gap-4 justify-center items-center ">
            <div className="text-white text-4xl mt-40 ml-11  ">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa neque sit ducimus. Possimus debitis voluptates maiores non enim consequuntur. Illo dolore et saepe, eius adipisci aspernatur praesentium eveniet sapiente vero.</p>
                </div>
                <div>
             <img  className="min-h-screen" src={petimage} alt=""  />
                </div>
                
            </div>
        </div>
    );
};

export default BannerImage;