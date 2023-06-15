export default function Testimonials() {
    const testimonials = [
      {
        name: 'James riyal',
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
        <div style={{ backgroundColor: 'rgb(48, 44, 41)' }}>
        <div className="text-center p-9" style={{ paddingBottom: '7%', paddingTop: '15%' }}>
          <h2 className="text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
          <p className="text-md mb-4 text-white">
            Straight From the Source
          </p>
        </div>
          <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 pb-5" >
        {testimonials.map((testimonial, index) => (
          <div className="mb-12 md:mb-0 bg-black m-2 " key={index} >
            <div className="mb-6 flex justify-center">
              <img
                // src={`https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(${index + 2}).jpg`}
                alt={testimonial.name[0]}
                className="w-32 rounded-full shadow-lg dark:shadow-white/30 text-white m-2"
                // alt={`Avatar ${index + 1}`}
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-white">{testimonial.name}</h5>
            <p className="mb-4 text-white">{testimonial.quote}</p>
          </div>
        ))}
      </div>
      </div>
    );
  };

  