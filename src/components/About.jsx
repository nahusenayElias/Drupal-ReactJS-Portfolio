import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';  // Import DOMPurify for sanitizing HTML
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function About() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from Drupal JSON:API with image field included
    axios.get('http://localhost:61438/jsonapi/node/aboutt?include=field_image')
      .then((response) => {
        setAbout(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching about data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading about data...</div>;
  if (error) return <div>Error loading about data: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center">About Me</h1>
      <div className="row">
        {about.map((item) => {
          // Find the image URL from the included data
          const imageUrl = item.relationships.field_image.data
            ? `http://localhost:61438${item.included.find(image => image.id === item.relationships.field_image.data.id)?.attributes.uri.url}`
            : null;

          return (
            <div className="col-md-12" key={item.id}>
              <div className="card mb-4">
                <div className="row g-0">
                  {imageUrl && (
                    <div className="col-md-4">
                      {/* Display the image */}
                      <img src={imageUrl} alt={item.attributes.title} className="img-fluid rounded-start" />
                    </div>
                  )}
                  <div className="col-md-8">
                    <div className="card-body">
                      {/* Display the title */}
                      <h5 className="card-title">{item.attributes.title}</h5>
                      {/* Render the sanitized body content */}
                      <p className="card-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.body.processed) }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
