import joinImage from '../../Assets/images/join.webp';

export default function JoinUs() {
  return (
    <>
      <img src={joinImage} alt="Join Us" className="w-full h-auto " />
    <div className="bg-black text-white p-8 ">
      <h2 className="text-3xl font-bold mb-4 ">Join Us</h2>
      <p className="text-lg mb-4">Get Started Now</p>
      <form>
        <div className="mb-4">
          <label htmlFor="firstName" className="block">First name</label>
          <input type="text" id="firstName" className="w-full border border-white rounded px-4 py-2 bg-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block">Last name</label>
          <input type="text" id="lastName" className="w-full border border-white rounded px-4 py-2 bg-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email</label>
          <input type="email" id="email" className="w-full border border-white rounded px-4 py-2 bg-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block">Phone</label>
          <input type="tel" id="phone" className="w-full border border-white rounded px-4 py-2 bg-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="company" className="block">Company</label>
          <input type="text" id="company" className="w-full border border-white rounded px-4 py-2 bg-black" />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block">Position</label>
          <input type="text" id="position" className="w-full border border-white rounded px-4 py-2 bg-black" />
        </div>
        <button type="submit" className="bg-white text-black px-4 py-2 rounded ">Submit</button>
      </form>
    </div>
    </>
  );
}
