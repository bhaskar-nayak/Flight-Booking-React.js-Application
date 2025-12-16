
import '../Styles/TripIdeas.css'
function TripIdeasComponent(){
const tripIdeaObj = [
    {
        id:1,
        imgUrls:"https://hblimg.mmtcdn.com/content/hubble/img/additional_ttd_image/mmt/activities/t_ufs/m_Universal_Studios_Hollywood_LA_1_l_408_612.jpg",
        place:"Hyderabad",
        country:"India",
        roundTrip:"Round-Trip from",
        price:"7,899",
    },
     {
        id:2,
        imgUrls:"https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/destination/m_bali_l_393_629.jpg",
        country:"Indonesia",
        roundTrip:"Round-Trip from",
        price:"22,899",
    },
     {
        id:3,
        imgUrls:"https://hblimg.mmtcdn.com/content/hubble/img/bali/mmt/activities/t_ufs/m_activities_bali_tegallalang_rice_terraces_l_400_640.jpg",
        place:"Colombo",
        country:"sri lanka",
        roundTrip:"Round-Trip from",
        price:"23,899",
    },
     {
        id:4,
        imgUrls:"https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/destination/m_Lakshadweep_l_580_870.jpg",
        place:"phuket",
        country:"Thailand",
        roundTrip:"Round-Trip from",
        price:"10,899",
    },
     {
        id:5,
        imgUrls:"https://hblimg.mmtcdn.com/content/hubble/img/barcelona/mmt/destination/m_Barcelona_New_l_405_1119.jpg",
        place:"Queensland",
        country:"Australia",
        roundTrip:"Round-Trip from",
        price:"107,899",
    },
     {
        id:6,
        imgUrls:"https://hblimg.mmtcdn.com/content/hubble/img/los_angeles/mmt/activities/t_ufs/m_activities_los_angeles_getty_villa_l_420_629.jpg",
        place:"Texas",
        country:"United States Of America",
        roundTrip:"Round-Trip from",
        price:"97,899",
    },
]

    return(
        <>
        <div className="container py-4">
      <h4 className="mb-4">Trip Ideas from India</h4>
      <div className="row">
        {tripIdeaObj.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="trip-card d-flex align-items-center justify-content-between">
              <div className="trip-info p-3">
                <h5 className="mb-1">{item.place}</h5>
                <p className="mb-1 text-muted">{item.country}</p>
                <p className="mb-0 fw-bold text-primary">{item.roundTrip} ₹{item.price}</p>
              </div>
              <div className="trip-img">
                <img src={item.imgUrls} alt={item.place} className="trip-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}
export default TripIdeasComponent;