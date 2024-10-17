import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify"; // Import DOMPurify

function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:61438/jsonapi/node/project_page")
      .then((response) => {
        setProjects(response.data.data); // Fetch the project data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project data:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading project data...</div>;
  if (error) return <div>Error loading project data: {error.message}</div>;

  return (
    <div className="project-wrapper">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {projects.map((project) => (
              <section key={project.id}>
                <h2>{project.attributes.title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      project.attributes.body.processed
                    ),
                  }}
                />
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
