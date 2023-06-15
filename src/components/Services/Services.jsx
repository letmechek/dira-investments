import service1 from '../../Assets/images/service1.jpeg'
import service2 from '../../Assets/images/service2.png'


export default function Services() {
    return (
      <div style={{ backgroundColor: 'rgb(48, 44, 41)' }} className='pb-10'>
        <div className="text-center p-9" style={{paddingBottom:'15%', paddingTop: '15%'}}>
        <h2 className="text-4xl font-bold mb-4 text-white">Service Offerings</h2>
        <p className="text-sm mb-4 text-white">
        With backgrounds in oil trading and market knowledge, Dira Investments offers expert Oil Trading Advisory services. Our team analyzes market trends, evaluates risks, and provides valuable insights to optimize your trading strategies. Stay ahead of the competition with our reliable advisory solutions.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
          <div className="relative">
            <img src={service1} alt="Brainstorming" className="w-full h-auto rounded shadow" style={{ opacity: 0.5, height:'555px' }}/>
            <div className="absolute pb-10 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="p-4 text-white  text-center">
                <h3 className="text-xl  mb-2">Wholesale Oil Procurement</h3>
                <p>At Dira Investments, we specialize in sourcing high-quality oil products directly from trusted suppliers. Our Wholesale Oil Procurement service ensures that your business can access a reliable and consistent supply of oil at competitive prices. Whether you require crude oil, refined petroleum products, or specialty oils, our expert team will handle the procurement process, ensuring prompt delivery and meeting your specific requirements.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={service2} alt="Branding & Positioning Analysis" className="w-full h-auto rounded shadow" style={{ opacity: 0.5,  height:'555px' }} />
            <div className="absolute pb-10 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="p-4 text-white  text-center">
                <h3 className="text-xl  mb-2">Retail Oil Distribution Solutions</h3>
                <p> Dira Investments offers comprehensive Retail Oil Distribution Solutions designed to streamline your oil sales operations. With our expertise in the oil industry, we provide end-to-end support, from inventory management to logistics and marketing strategies. Our tailored solutions help optimize your retail oil sales, ensuring timely replenishment, competitive pricing, and effective branding. Let us assist you in expanding your customer base and maximizing profitability in the retail oil market.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  