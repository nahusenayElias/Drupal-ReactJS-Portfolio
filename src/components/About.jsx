import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function About() {
  const [about, setAbout] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:61438/jsonapi/node/about?include=field_about_image')
      .then((response) => {
        const aboutData = response.data.data[0];
        setAbout(aboutData);


        if (response.data.included && response.data.included.length > 0) {
          const imageData = response.data.included.find(
            (item) => item.type === 'file--file'
          );
          if (imageData) {
            const imageUrl = imageData.attributes.uri.url;
            setImage(imageUrl);
          }
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content.</div>;

  return (
    <div className="d-flex justify-content-center mb-4">

    <Card style={{ width: '22rem' }}>

    <div className="container">
      <h1>{about.attributes.title}</h1>
      {image && (
        <img
        src={`http://localhost:61438${image}`}
        alt="About Image"
        className="img-fluid mb-3"
        />
        )}
      <div
        dangerouslySetInnerHTML={{ __html: about.attributes.body.processed }}
        />
    </div>
        </Card>
        <div className='mt-3' style={ {marginBottom: '20px'}}></div>
        </div>
  );
}

export default About;
