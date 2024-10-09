
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch content from Drupal
    axios.get('http://localhost:57943/jsonapi/node/home')
      .then((response) => {
        // Extract data from the API response
        setHomes(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading content.</div>;

  return (
    <div className="App">
      <nav>
        <ul>
          {homes.map((home) => (
            <li key={home.id}>
              <a href={`#${home.attributes.title}`}>
                {home.attributes.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {homes.map((home) => (
        <section id={home.attributes.title} key={home.id}>
          <h1>{home.attributes.title}</h1>
          <p>{home.attributes.body.processed}</p>
        </section>
      ))}
    </div>
  );
}



export default Home