import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaTag,
  FaHome,
  FaBed,
  FaBath,
  FaChair,
  FaRulerCombined,
  FaIdBadge,
  FaCity,
  FaBuilding,
  FaLayerGroup,
  FaList,
  FaMapMarkerAlt,
  FaKey,
  FaPhone,
  FaRupeeSign,
  FaUserTie,
} from "react-icons/fa";
import axios from "axios";

const PropertyDetailPage = () => {
  const { id ,activeType} = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
const [status,setStatus]=useState("")
const [statusId,setStatusId]=useState("")
 const formatPrice = (amount) => {
        if (!amount) return "0";

        if (amount >= 10000000) {
            return (amount / 10000000).toFixed(2) + " Cr";
        } else if (amount >= 100000) {
            return (amount / 100000).toFixed(2) + " Lakh";
        } else if (amount >= 1000) {
            return (amount / 1000).toFixed(2) + " K";
        } else if (amount >= 100) {
            return (amount / 100).toFixed(2) + " rs";
        }
        return amount;
    };

const propertyHighlights = property ? [
      { icon: <FaRupeeSign />, label: "Total Price", value: formatPrice(property.total_price) },
       { icon: <FaRupeeSign />, label: "Price", value: `${formatPrice(property.price)}/ ${property.area_unit}` },
 
   {
    icon: <FaRulerCombined />,
    label: "Area",
    value: property.area ? `${property.area} ${property.area_unit}` : null,
  },
 
 { icon: <FaHome />, label: "Property Type", value: property.property_type },


  

  { icon: <FaBed />, label: "Bedrooms", value: property.bedrooms },
  { icon: <FaBath />, label: "Bathrooms", value: property.bathrooms },
  { icon: <FaChair />, label: "Furnishing", value: property.furnishing },
 { icon: <FaHome />, label: "BHK", value: property.bhk_type },
 
//   { icon: <FaIdBadge />, label: "Property ID", value: property.id },
 { icon: <FaHome />, label: "Other Room", value: property.other_room },

  { icon: <FaUserTie />, label: "Ownership", value: property.ownership },
   { icon: <FaLayerGroup />, label: "Balcony", value: property.balcony },
  
  {
    icon: <FaList />,
    label: "Status",
    value: property.active === "1" ? "Active" : "Inactive",
  },
    { icon: <FaHome />, label: "Sub Type", value: property.property_sub_type },
  { icon: <FaKey />, label: "Listing Type", value: property.listing_type },
{ icon: <FaUserTie />, label: "User Type", value: property.user_type },
  { icon: <FaCity />, label: "City", value: property.agent_city },
  
  { icon: <FaBuilding />, label: "Apartment", value: property.apartment_society },
 
  { icon: <FaLayerGroup />, label: "Floor Allowed", value: property.floor_allowed },

 
  { icon: <FaMapMarkerAlt />, label: "Locality", value: property.locality },
 
//   { icon: <FaPhone />, label: "Phone", value: property.phone },

 
  { icon: <FaCity />, label: "Property City", value: property.property_city },

 
 
] : [];

 useEffect(() => {
  getDetails();
  
}, []);

  const getDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.squarebigha.com/api/get-agent-property-detail/${id}/${activeType}`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiJkMTkxNmNhNjFiNDhiYTk3YWYxOTU3N2MxNWIyZGJhMTMwNmZlZmVjNWE0YzU1ZTJmNmQyYTAyZWU5NjdjNWYwN2NjYmFhYmE2MTA3YWQyNyIsImlhdCI6MTc2NDY2NTU2OS45Mzc4NjQsIm5iZiI6MTc2NDY2NTU2OS45Mzc4NjYsImV4cCI6MTc5NjIwMTU2OS45MzMwNzMsInN1YiI6IjM1Iiwic2NvcGVzIjpbXX0.Gs8Fap_0ywj3CEvMbeePY9Z9plNklTty3YrS4k-5uqT_WQczLbHJmLE-8vVJpzktbOB0EeHL2u3hH8-p6PcyD4r4MYH5TPkExPbOfOQyNMTxcZtuoI2hnrkQVj2hz18R_WD8ztlRnvnsZxRSCG9megGRi10YrK-PJwjl-PTaSxAfvB1n6UrZ_sCm0xhtbS9SXMbdiZuF0NR4_iiI6aLi1YiuxC_uRifnCyUAFrVP4lRFZnrNQlqvyPSqZwJHgtck6uath-d_yTPA7LYu-QASbIC_KwU3nole2eyGWIHOD5aslDanvVQBAbDTDG7tVDj_cyhIYS9GYI2YJ1rX_CZghuRpq08qm9KigYXpnmhxftJURpxs2M53wev7OiETdxJkQQ2J8bmr0dNcoNzcMoTrTy0hSOz17LryyFk9rJCABZxoerwzMmq1OWTtEOk-KPDiv6L6m8u5jXSq4mD__g8edG26k6WfeSmse9xSzMoi4cHF3uo4HM7OATwzUmQT-4x2d5qfsXapajv4EsLbRT3vlJxP1LGUaDUmyC13kB-RryAGbZTRNcMXUdw_eNdZkR2uOrx_OJtRNJa5K-tftfzH6LvoHj69dJK9OiuQVkiqape2n2_-lLdp39PEKdlB43VVMnMqwkU4DUW6VZ34ojPQYJP1DJ9ppZduVKUkwtUY0E4",
          },
        }
      );

      if (res.data.status === 200) {
        setProperty(res.data.data);
        setStatus(res.data.data.active)
        setStatusId(res.data.data.id)
      
       console.log(res.data.data.id)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

// update Status 

 useEffect(() => {
  getstatus();
  
}, [status]);
 const  getstatus=async()=>{
  const payload={
      property_type:activeType,
      id:statusId,
      status:status
    }
    console.log("post payload",payload)
try {
  const res=await axios.post(`https://api.squarebigha.com/api/update-property-status`,payload,{
    headers:{
      Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIwMTk5MjgxNi1kZDUxLTcyMDEtYWY5MC1iNTZiYmNiMGVmNDEiLCJqdGkiOiJkMTkxNmNhNjFiNDhiYTk3YWYxOTU3N2MxNWIyZGJhMTMwNmZlZmVjNWE0YzU1ZTJmNmQyYTAyZWU5NjdjNWYwN2NjYmFhYmE2MTA3YWQyNyIsImlhdCI6MTc2NDY2NTU2OS45Mzc4NjQsIm5iZiI6MTc2NDY2NTU2OS45Mzc4NjYsImV4cCI6MTc5NjIwMTU2OS45MzMwNzMsInN1YiI6IjM1Iiwic2NvcGVzIjpbXX0.Gs8Fap_0ywj3CEvMbeePY9Z9plNklTty3YrS4k-5uqT_WQczLbHJmLE-8vVJpzktbOB0EeHL2u3hH8-p6PcyD4r4MYH5TPkExPbOfOQyNMTxcZtuoI2hnrkQVj2hz18R_WD8ztlRnvnsZxRSCG9megGRi10YrK-PJwjl-PTaSxAfvB1n6UrZ_sCm0xhtbS9SXMbdiZuF0NR4_iiI6aLi1YiuxC_uRifnCyUAFrVP4lRFZnrNQlqvyPSqZwJHgtck6uath-d_yTPA7LYu-QASbIC_KwU3nole2eyGWIHOD5aslDanvVQBAbDTDG7tVDj_cyhIYS9GYI2YJ1rX_CZghuRpq08qm9KigYXpnmhxftJURpxs2M53wev7OiETdxJkQQ2J8bmr0dNcoNzcMoTrTy0hSOz17LryyFk9rJCABZxoerwzMmq1OWTtEOk-KPDiv6L6m8u5jXSq4mD__g8edG26k6WfeSmse9xSzMoi4cHF3uo4HM7OATwzUmQT-4x2d5qfsXapajv4EsLbRT3vlJxP1LGUaDUmyC13kB-RryAGbZTRNcMXUdw_eNdZkR2uOrx_OJtRNJa5K-tftfzH6LvoHj69dJK9OiuQVkiqape2n2_-lLdp39PEKdlB43VVMnMqwkU4DUW6VZ34ojPQYJP1DJ9ppZduVKUkwtUY0E4"
    }
  })
  console.log(res.data)
} catch (error) {
  console.log(error)
}
}


  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h4>Loading property details...</h4>
      </div>
    );
  }

  /* ---------------- NO DATA ---------------- */
  if (!property) {
    return (
      <div className="container mt-5 text-center">
        <h4 className="text-danger">Property not found</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }


   
 console.log("status",status ,statusId)
  return (
    <div className="container mt-4 pb-5 ">
      {/* BACK BUTTON */}
     < div className="mb-3 d-flex gap">
      <button className="btn btn-out" onClick={() => navigate(-1)}>
        <FaArrowLeft className="me-2" />
        Back
      </button>
      <div className="btn-group ">
    <button
      className={`btn btn-sm p-2 ${
        status == 1
          ? "btn-resi"
          : "btn-out"
      }`}
      onClick={() => setStatus(1)}
    >
      active
    </button>
  <button
      className={`btn btn-sm ${
        status == 0
          ? "bg-danger text-white"
          : "btn-out "
      }`}
      onClick={() => setStatus(0)}
    >
      Inactive
    </button>
  </div>
</div>
      {/* IMAGE  */}
  <div className="imagelist">
<div className="row">
  {property?.media?.length > 0 ? (
    property.media.map((img, index) => (
      <div className="col-md-4 mb-3" key={index}>
        <img
          src={`https://api.squarebigha.com/${img.file_url}`}
          alt={`property-${index}`}
          className="img-fluid rounded shadow-sm"
          style={{ height: "220px", objectFit: "cover", width: "100%" }}
        />
      </div>
    ))
  ) : (
    <p>No images available</p>
  )}
</div>

  </div>
      {/* <div className="card">
  <div className="text-trans">
    <h2 className="fw-bold">{property.apartment_society}</h2>
  <h2 className="font ">
  
  { `${property.bhk_type==null?"":property.bhk_type} ${property.area}${property.area_unit}  ${property.apartment_society}   in ${property.locality}`}
    </h2>
  </div>

  <div className="price-box">
    ₹ {formatPrice(property.total_price)}

  </div>
</div> */}
   <div className="card cardpa">
<h2 className="font mt-4">Property Information</h2>
   <div className="row g-3 ">

  {propertyHighlights
    .filter(item => item.value)
    .map((item, i) => (
      <div className="col-md-3 col-sm-6" key={i}>
        <div className="detail-card d-flex align-items-center gap-3">
          <div className="icon fs-4 text-primary">
            {item.icon}
          </div>
          <div>
            <small className="text-muted">{item.label}</small>
            <h6 className="mb-0 text-trans">{item.value}</h6>
          </div>
        </div>
      </div>
    ))}
</div>

</div>

  {property.description && (
  <div className="card mt-4 shadow-sm">
    <div className="card-body">
      <h5>Description</h5>
      <p className="text-muted">{property.description}</p>
    </div>
  </div>
)}

{property.aminity?.length > 0 && (
  <div className="card mt-4 shadow-sm">
    <div className="card-body">
      <h5>Amenities</h5>
      <div className="d-flex flex-wrap gap-2">
        {property.aminity.map(a => (
          <span key={a.id} className="badge rounded-pill bg-light text-dark border">
            {a.name}
          </span>
        ))}
      </div>
    </div>
  </div>
)}

      {/* AGENT INFO */}
      <div className="card mt-4 shadow-sm border-0">
  <div className="card-body">
    <h5>Agent Details</h5>
    <p><strong>Type:</strong> {property.user_type}</p>
    <p><strong>Phone:</strong> {property.phone}</p>
  </div>
</div>

    </div>
  );
};

export default PropertyDetailPage;
