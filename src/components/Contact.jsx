import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Card } from 'react-bootstrap';

function Contact() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:61438/jsonapi/node/contact')
      .then((response) => {
        setContact(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching contact data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading contact data...</div>;
  if (error) return <div>Error loading contact data: {error.message}</div>;

  return (
    <div className="project-wrapper">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">




      {contact.map((item) => (
        <section key={item.id}>
          <h2>{item.attributes.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.attributes.body.processed) }} />
        </section>
      ))}
    </div>
      </div>
      </div>
      </div>
  );
}

export default Contact;
