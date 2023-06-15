export default function Testimonials() {
    const testimonials = [
      {
        name: 'James Gichuru',
        quote: 'Im impressed with the professionalism and dedication of the team at Dira Investments. They have helped me navigate the complexities of the African market and achieve significant growth for my business.',
      },
      {
        name: 'Issa Mohamed',
        quote: 'Working with Dira Investments has been a game-changer for my startup. Their strategic insights and tailored solutions have positioned us for success in the African market.',
      },
      {
        name: 'Mohamed Osman',
        quote: 'I highly recommend Dira Investments to anyone looking to expand their business in Africa. Their expertise and deep understanding of the local market have been instrumental in our growth and profitability.',
      },
    ];
  
    return (
      <div style={{ backgroundColor: 'rgb(48, 44, 41)' }} className='pb-10'>
        <div className="text-center p-9" style={{ paddingBottom: '7%', paddingTop: '15%' }}>
          <h2 className="text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
          <p className="text-md mb-4 text-white">
            Straight From the Source
          </p>
        </div>
        <div className="flex justify-center pr-15">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black p-4 mx-2 rounded text-white">
              <p>{testimonial.quote}</p>
              <p className="text-white font-bold mt-4">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  