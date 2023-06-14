import service1 from '../../Assets/images/service1.webp'
import service2 from '../../Assets/images/service2.webp'


export default function Services() {
    return (
      <div style={{ backgroundColor: 'rgb(48, 44, 41)' }} className='pb-10'>
        <div className="text-center p-9" style={{paddingBottom:'15%', paddingTop: '15%'}}>
        <h2 className="text-4xl font-bold mb-4 text-white">Service Offerings</h2>
        <p className="text-sm mb-4 text-white">
          With backgrounds in strategy, project management and much more, Dira Investments Limited is at the frontline, and leading your business down the path of success. Take a look at the services below, and gain a level of insight like never before.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          <div className="relative">
            <img src={service1} alt="Brainstorming" className="w-full h-auto rounded shadow" style={{ opacity: 0.8 }}/>
            <div className="absolute pb-10 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="p-4 text-white  text-center">
                <h3 className="text-xl  mb-2">Brainstorming</h3>
                <p>From personal to professional growth, Dira Investments Limited wants to help you overcome your struggles in order to create the successful business you’ve always dreamt of. Book this service to start benefiting today.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={service2} alt="Branding & Positioning Analysis" className="w-full h-auto rounded shadow" style={{ opacity: 0.8 }} />
            <div className="absolute pb-10 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="p-4 text-white  text-center">
                <h3 className="text-xl  mb-2">Branding & Positioning Analysis</h3>
                <p>From coast to coast, countless clients are benefiting from this and other services. It’s time to transform your business, and Dira Investments Limited is here to give you the tools you need in order to succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  