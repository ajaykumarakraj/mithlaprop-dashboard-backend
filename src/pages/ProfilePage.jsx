import React from 'react';
import Sidebar from "../components/Sidebar"

const ProfilePage = () => {
  return (
    <div className="d-flex">


      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="card mx-auto shadow" style={{ maxWidth: '600px' }}>
          <div className="card-body text-center">
            <img
              src="https://i.postimg.cc/NGJ63Dk6/The-Importance-of-High-Quality-Real-Estate-Photos-v3.webp"
              alt="Profile"
              className="rounded-circle mb-3 img-fluid"
              style={{ height: '100px', width: '100px', objectFit: 'cover' }}
            />
            <h3 className="card-title">John Doe</h3>
            <p className="text-muted">Software Engineer</p>
            <p className="card-text">
              Passionate full-stack developer with a love for building responsive web applications. Based in New York, USA.
            </p>

            <ul className="list-group list-group-flush mt-4 text-start">
              <li className="list-group-item">
                <strong>Email:</strong> john.doe@example.com
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li className="list-group-item">
                <strong>Location:</strong> New York, USA
              </li>
            </ul>

            {/* Optional buttons */}
            {/* <div className="mt-4">
              <button className="btn btn-primary me-2">Edit Profile</button>
              <button className="btn btn-outline-secondary">Message</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
