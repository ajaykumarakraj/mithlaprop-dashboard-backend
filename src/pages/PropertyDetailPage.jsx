import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    FaArrowLeft, FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaTag,
    FaCalendarAlt, FaHome, FaCar, FaTree, FaCompass, FaThermometerHalf, FaChair, FaIdBadge
} from 'react-icons/fa';

const properties = [
    {
        id: 1,
        name: 'Ocean View Villa',
        location: 'Malibu, CA',
        price: '$2,000,000',
        description: 'A luxurious villa with a stunning view of the ocean. Featuring a private pool, modern architecture, and direct beach access.',
        size: '5000 sq ft',
        lotSize: '10,000 sq ft',
        bedrooms: 5,
        bathrooms: 4,
        yearBuilt: 2018,
        floors: 2,
        facing: 'South-West',
        type: 'Villa',
        garage: 2,
        status: 'Available',
        furnishing: 'Fully Furnished',
        availability: 'Immediately',
        listingDate: '2023-12-01',
        ownership: 'Freehold',
        energyRating: 'A+',
        features: ['Pool', 'Sea View', 'Garden', 'Smart Home', 'Fireplace'],
        images: [
            'https://i.postimg.cc/NGJ63Dk6/The-Importance-of-High-Quality-Real-Estate-Photos-v3.webp',
            'https://i.postimg.cc/NGJ63Dk6/The-Importance-of-High-Quality-Real-Estate-Photos-v3.webp',
            'https://i.postimg.cc/NGJ63Dk6/The-Importance-of-High-Quality-Real-Estate-Photos-v3.webp',
        ],
    },
];

const PropertyDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find((prop) => prop.id === parseInt(id));

    if (!property) {
        return (
            <div className="container mt-2 text-center">
                <h3 className="text-danger">Property not found</h3>
                <button className="btn btn-outline-secondary mt-3" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="me-2" /> Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5 pb-4 ">
            <div className="mb-4">
                <button className="btn btn-outline-primary" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="me-2" /> Back to Property List
                </button>
            </div>

            {/* Image Carousel */}
            <div id="propertyCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner rounded shadow">
                    {property.images.map((img, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <img src={img} className="d-block w-100" alt={`Slide ${index}`} style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
                {property.images.length > 1 && (
                    <>
                        <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </>
                )}
            </div>

            {/* Main Details */}
            <h2 className="fw-bold">{property.name}</h2>
            <p className="text-muted">
                <FaMapMarkerAlt className="me-2 text-primary" />
                {property.location}
            </p>
            <h4 className="text-success fw-bold">
                <FaTag className="me-2" />
                {property.price}
            </h4>

            <p className="fs-5 mt-4">{property.description}</p>

            <div className="row mt-4 g-3">
                <div className="col-md-6 col-lg-4">
                    <p><FaIdBadge className="me-2 text-dark" /> <strong>Property ID:</strong> {property.id}</p>
                    <p><FaRulerCombined className="me-2 text-info" /> <strong>Area:</strong> {property.size}</p>
                    <p><FaTree className="me-2 text-success" /> <strong>Lot Size:</strong> {property.lotSize}</p>
                    <p><FaBed className="me-2 text-warning" /> <strong>Bedrooms:</strong> {property.bedrooms}</p>
                </div>
                <div className="col-md-6 col-lg-4">
                    <p><FaBath className="me-2 text-primary" /> <strong>Bathrooms:</strong> {property.bathrooms}</p>
                    <p><FaCar className="me-2 text-secondary" /> <strong>Garage:</strong> {property.garage} cars</p>
                    <p><FaHome className="me-2 text-danger" /> <strong>Type:</strong> {property.type}</p>
                    <p><FaCalendarAlt className="me-2 text-muted" /> <strong>Year Built:</strong> {property.yearBuilt}</p>
                </div>
                <div className="col-md-6 col-lg-4">
                    <p><FaCompass className="me-2 text-info" /> <strong>Facing:</strong> {property.facing}</p>
                    <p><FaThermometerHalf className="me-2 text-danger" /> <strong>Heating/Cooling:</strong> Central HVAC</p>
                    <p><FaChair className="me-2 text-secondary" /> <strong>Furnishing:</strong> {property.furnishing}</p>
                    <p><FaCalendarAlt className="me-2 text-muted" /> <strong>Listing Date:</strong> {property.listingDate}</p>
                </div>
            </div>

            {/* More Info */}
            <div className="row mt-3">
                <div className="col-md-6">
                    <p><strong>Status:</strong> <span className={`ms-2 badge bg-${property.status === 'Available' ? 'success' : 'secondary'}`}>{property.status}</span></p>
                    <p><strong>Availability:</strong> {property.availability}</p>
                    <p><strong>Ownership:</strong> {property.ownership}</p>
                    <p><strong>Floors:</strong> {property.floors}</p>
                    <p><strong>Energy Rating:</strong> {property.energyRating}</p>
                </div>
            </div>

            {/* Features */}
            <div className="mt-4">
                <h5>Features:</h5>
                <div className="d-flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                        <span key={index} className="badge bg-light text-dark border">{feature}</span>
                    ))}
                </div>
            </div>

            {/* Approve / Reject Buttons */}
            <div className="mt-5 d-flex gap-3">
                <button
                    className="btn btn-success"
                    onClick={() => {
                        alert(`Approved: ${property.name}`);
                        // TODO: Add API call here
                    }}
                >
                    ✅ Approve
                </button>

                <button
                    className="btn btn-danger"
                    onClick={() => {
                        const confirmReject = window.confirm(`Are you sure you want to reject: ${property.name}?`);
                        if (confirmReject) {
                            alert(`Rejected: ${property.name}`);
                            // TODO: Add API call here
                        }
                    }}
                >
                    ❌ Reject
                </button>
            </div>

        </div>
    );
};

export default PropertyDetailPage;
