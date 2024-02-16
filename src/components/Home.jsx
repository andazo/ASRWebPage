//import Illustration from '../assets/BusinessIllustration.png';
//import Management from '../assets/Management2.png'
import Management2 from '../assets/marketing.png'
import Banner from '../shared/Banner';

const Home = () => {
    return(
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-40" id='home'>
            <Banner Image1={Management2} heading="Impulsamos el éxito de tus productos" subheading="Contamos con más de 18 años de experiencia exportando productos de Chile, 
                Colombia, Perú & Costa Rica al Mundo" btn1={'Servicios'} btn2={'Contáctanos'}  
            />
        </div>
    )
};

export default Home;