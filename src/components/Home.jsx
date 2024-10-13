// axios.get('http://localhost:61438/jsonapi/node/home_page')
 // Home.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';  // Import DOMPurify

function Home() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:61438/jsonapi/node/home_page')
      .then((response) => {
        setHomes(response.data.data); // Fetch the home data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching home data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading home data...</div>;
  if (error) return <div>Error loading home data: {error.message}</div>;

  return (
    <div className="Home">
      {homes.map((home) => (
        <section key={home.id}>
          <h2>{home.attributes.title}</h2>
          {/* Sanitize HTML using DOMPurify */}
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(home.attributes.body.processed) }} />
        </section>
      ))}
    </div>
  );
}

export default Home;
