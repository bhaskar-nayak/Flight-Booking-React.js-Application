import '../Styles/WhyBook.css';

function WhyBookUsComponent() {
    const whyBookUsObj = [
        {
            id: 1,
            imgurls: "https://www.shutterstock.com/image-vector/calendar-check-mark-vector-icon-260nw-1744982156.jpg",
            title: "Easy Booking",
            descriptions: "We offer easy and convenient flight bookings with attractive offers."
        },
        {
            id: 2,
            imgurls: "https://www.shutterstock.com/image-vector/rupee-reduction-symbol-cost-decrease-260nw-1891487590.jpg",
            title: "Lowest Price",
            descriptions: "Get instant refunds effortlessly on your travel bookings with us."
        },
        {
            id: 3,
            imgurls: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LYsLJALOqGf6iDd-DTQXSsuQ9hsrVSYtmg&s",
            title: "Instant Refund",
            descriptions: "Get instant refunds effortlessly on your travel bookings with us."
        },
        {
            id: 4,
            imgurls: "https://www.shutterstock.com/image-vector/support-24-hours-flat-icon-260nw-2205418421.jpg",
            title: "24/7 Support",
            descriptions: "Get assistance 24/7 on any kind of travel related query. We are happy to assist you."
        },
        {
            id: 5,
            imgurls: "https://static.vecteezy.com/system/resources/thumbnails/002/621/766/small/shopping-sale-discount-commerce-badge-in-silhouette-style-icon-free-vector.jpg",
            title: "Exciting Deals",
            descriptions: "Enjoy exciting deals on flights, hotels, buses, car rental and tour packages."
        }
    ];

    return (
        <div className="container">
            <h4 className="whyBook">Why Book With Us?</h4>
            <div className="whyBookWithObject my-4">
                {whyBookUsObj.map(item => (
                    <div className="whyCard" key={item.id}>
                        <img className="imageIcons" src={item.imgurls} alt={item.title} />
                        <h5>{item.title}</h5>
                        <p>{item.descriptions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhyBookUsComponent;
