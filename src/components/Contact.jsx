const Contact = () => {
    return (
      <section className="bg-gray-50 mt-10" id='contact'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contáctanos</h2>
          <p className="mb-8 lg:mb-8 font-light text-center text-gray-600 sm:text-xl">¿Tienes alguna pregunta o te interesan nuestros servicios? Ponte en contacto y estaremos encantados de ayudarte</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Tu correo</label>
              <input type="email" id="email" className="shadow-md bg-white border border-gray-300 text-gray-900 text-2sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Correo electrónico" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-lg font-medium text-gray-900">Tema</label>
              <input type="text" id="subject" className="block p-3 w-full text-2sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-md focus:ring-blue-500 focus:border-blue-500" placeholder="¿Cómo te podemos ayudar?" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-900">Comentario</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-2sm text-gray-900 bg-white rounded-lg shadow-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Déjanos un comentario"></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-[#555555] hover:bg-[#726a6a] focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-150 ease-in-out">Enviar mensaje</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
