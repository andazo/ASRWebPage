import { GrOptimize } from "react-icons/gr";
import { GiSellCard } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const Servicios = () => {
    return(
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto mt-40">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div className="lg:w-1/4">
                    <h3 className="text-5xl text-secondary font-bold lg:w-3/4 mb-3">¿Cómo te podemos ayudar?</h3>
                    <p className="text-lg text-secondary mt-6">En ASR Boost, potenciamos el valor de tu marca y facilitamos tu entrada en nuevos mercados. 
                        Te enseñamos a liderar tu negocio de exportación con estrategias a medida y capacitación continua, asegurando 
                        tu éxito y autonomía en el mercado internacional.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="border-2 bg-[#D9E4DD] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex justify-center items-center">
                                    <GrOptimize className="text-5xl"/>
                                </div>
                                <h5 className="text-3xl font-semibold text-secondary px-5 text-center mt-5">Optimizar el valor de tu marca</h5>
                            </div>
                        </div>
                        <div className="border-2 bg-[#D9E4DD] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex justify-center items-center">
                                    <GiSellCard className="text-5xl"/>
                                </div>
                                <h5 className="text-3xl font-semibold text-secondary px-5 text-center mt-5">Estrategias de inserción al mercado</h5>
                            </div>
                        </div>
                        <div className="border-2 bg-[#D9E4DD] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex justify-center items-center">
                                    <LiaChalkboardTeacherSolid className="text-5xl"/>
                                </div>
                                <h5 className="text-3xl font-semibold text-secondary px-5 text-center mt-5">Capacitación para la administración de tu marca</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Servicios;