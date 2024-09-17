import React from 'react'
import sateliteImg from '../../assets/foreigners.jpg';


const Rapidscat = () => {
  return (
    <>
      <section className='bg-blue-500  text-white pb-12'>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img src={sateliteImg}

                alt=""
                className='w-full sm:w-[80%] mx-auto max-h-[350px] object-cover'
              />
            </div>

            <div className='space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
              <p data-aos="fade-up"
                data-aos-delay="300"
                className='text-sky-800 uppercase'
              >
                Crime Against Foreigners
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className='uppercase text-5xl'

              >
                Foreigners abuse


              </h1>

              <p data-aos="fade-up " data-aos-delay="700">
                Foreigners may face various forms of abuse and crime while abroad, including harassment, exploitation, and violent attacks. Such incidents can range from verbal abuse and discrimination to more severe offenses like physical assault and fraud. The legal and diplomatic responses to these crimes are often complex, involving international laws and local regulations. It is crucial for both governments and organizations to work collaboratively to protect foreign nationals, provide support for victims, and address the root causes of such crimes. Awareness and preventive measures can significantly reduce the risks and ensure the safety and well-being of foreigners traveling or residing in foreign countries.

              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className='bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200'
              >
                View All

              </button>

            </div>
          </div>
        </div>
      </section>






    </>
  )
}

export default Rapidscat;