import puntoVerde from "../assets/Rectangle 18.png";
import DesProd from "../assets/purpleSecret.png";
import Licencia from "../assets/FDAap.png";
import LicenciaComida from "../assets/NutFacts.png";
import Amazon from "../assets/marketPlace.png";
import Bus from "../assets/BusinessIllustration.png";

const ServiciosLista = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 mt-44" id='services'>
      <div className="text-center">
        <h2 className="md:text-6xl text-3xl font-extrabold text-secondary mb-2">
          Servicios ASR Boost
        </h2>
        <p className="text-secondary md:w-1/3 mx-auto px-4 text-xl">
          Con nuestros servicios, diseñamos la estrategia que mejor se adapte a
          tu negocio y producto
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto">
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-center text-secondary">
            Desarrollo de productos
          </h3>
          <p className="text-secondary text-center text-lg my-5">
            A partir de un producto especifico podemos incursionar en nuevas
            líneas
          </p>
          <ul className="mt-4 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Diversificación.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Apertura a nuevos mercados.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Variedad de consumidor.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Gama de productos para tu tienda.
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center">
            <img
              src={DesProd}
              alt=""
              className="object-fill h-60 w-80 rounded-3xl"
            />
          </div>
        </div>
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-center text-secondary">
            Licencias
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            A través de nuestra empresa partner en EE.UU. Andean Group LLC,
            apoyamos a nuestros clientes para
          </p>
          <ul className="mt-4 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Obtención número FDA.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Crearse como sus propios importadores.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Agilidad en obtención de licencias.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Export - Import Bank of the United States.
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center mt-2">
            <img
              src={Licencia}
              alt=""
              className="object-fill h-60 w-80 rounded-3xl"
            />
          </div>
        </div>
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-center text-secondary">
            Packaging y Regulaciones
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            Adaptación tablas nutricionales y empaques FDA & EU Compliant para
            exportar
          </p>
          <ul className="mt-4 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Adaptación tablas nutricionales y empaques.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              FDA & EU Compliant para exportación de productos.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Agilidad para la venta de productos comestibles.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Guía de regulaciones según el destino de exportación.
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center">
            <img
              src={LicenciaComida}
              alt=""
              className="object-fill h-60 w-80 rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-20 md:w-8/12 mx-auto">
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-center text-secondary">
            Marketplace & E-commerce
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            Más de 16 Marketplaces Desarrollados en EEUU, Chile, Costa Rica y Reino Unido
          </p>
          <ul className="mt-4 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Desarrollo de Marketplace propio.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Estudio de mercado y viabilidad para recomendar la estrategia
              correcta de precios.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Diseño especializado de tienda para cada emprendedor.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Capacitación en las herramientas de la operación de cada ecommerce.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Implementar estrategias de marketing digital que potencien las
              ventas de tu tienda.
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center mt-2">
            <img
              src={Amazon}
              alt=""
              className="object-fill h-54 w-70 rounded-3xl"
            />
          </div>
        </div>
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer">
          <h3 className="text-3xl font-bold text-center text-secondary">
            Retail & Crossborder
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            Ingreso al mercado destino cómo, cuándo, dónde y con quién hacerlo
          </p>
          <ul className="mt-4 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Diseñamos la estrategia comercial para ingresar al mercado
              internacional.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Hacemos los estudios de viabilidad y logística.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Acompañamos paso por paso, desde el envío de productos hasta el
              lanzamiento de marca.
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              Traspasamos nuestros contactos de los principales agentes de la
              cadena, generando la red y el conocimiento necesario para la
              venta.
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center mt-2">
            <img
              src={Bus}
              alt=""
              className="object-fill h-52 w-62 rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosLista;
