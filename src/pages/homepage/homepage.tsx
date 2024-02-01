/*import NavBar from "../../components/NavBar/NavBar";
import SliderCarouselComponent from "../../components/SliderCarousel/SliderCarousel";
import { Global } from "../../components/globalStyles";

const Homepage = () => {
    return ( 
        <>
        <NavBar />
        <Global />
        <SliderCarouselComponent />
        <form method="POST" enctype="multipart/form-data" action="http://localhost:3000">
        <input type="file" name="my-file" accept="image/*">
        <input type="submit" value="Upload">
    </form>
        </>
     );
}
 
export default Homepage; */
import NavBar from "../../components/NavBar/NavBar";
import SliderCarouselComponent from "../../components/SliderCarousel/SliderCarousel";
import { Global } from "../../components/globalStyles";

const Homepage = () => {
    return ( 
        <>
            <NavBar />
            <Global />
            <SliderCarouselComponent />
            <form method="POST" encType="multipart/form-data" action="http://localhost:5000/test">
                <input type="file" name="my-file" accept="image/*" />
                <input type="submit" value="Upload" />
            </form>
        </>
     );
}

export default Homepage;
