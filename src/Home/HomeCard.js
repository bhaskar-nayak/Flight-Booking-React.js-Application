import '../Styles/HomeCardStyle.css';

function HomeCard() {
  const homeFlightObj = [
    {
      id: 1,
      imgUrls: "https://content.skyscnr.com/m/77b618db6132580/original/Summer-Campaign-2025-Explore-Everywhere-Generic.jpg?resize=1224%3Aauto",
      learnmore: "Learnmore"
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <h4 className='Planning-title my-2'>WHERE ARE YOU PLANNING TO GO NEXT?</h4>
        <h2 className='save-title'>Save on your journey by <span className='explore-color'>exploring</span> these routes with lower fares</h2>
      </div>

      <div className='row mt-4'>
        {homeFlightObj.map(item => (
  <div className='image-overlay-wrapper' key={item.id}>
    <img className='background-image' src={item.imgUrls} alt={item.hotelTitle} />
    <div className='overlay-content'>
      <h1 className='hotel-title'>
        This ❛Summer, Explore <br /> Everywhere
      </h1>
      <p className='description'>
        Endless destinations. Every price.
        One search <br />
        and summer's happening
      </p>
      <button className='btn btn-white'>{item.learnmore}</button>
    </div>
  </div>
))}

      </div>
    </div>
  );
}

export default HomeCard;
