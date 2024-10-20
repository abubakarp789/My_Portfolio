/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/a-creative-and-unique-landscape-poster-displaying.jpeg";

const imageAltText = "Machine Learning and AI Softwares icons picture";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "!00 Days Of Machine Learning With Bytewise Fellowship",
    description:
      "Completed 100DaysOfByteWiseFellowship Successfully. These 100 Days teach me a a lot about ML and AI field.",
    url: "https://github.com/abubakarp789/100DaysOfBytewiseFellowship",
  },
  {
    title: "Churn Predictor",
    description:
      "Churn Predictor is my final Project of Bytewise Fellowship and it is also my first Open Source Project.",
    url: "https://github.com/abubakarp789/Churn_Predictor",
  },
  {
    title: "Restaurant Management System",
    description:
      "Database Course Semester Project.",
    url: "https://github.com/abubakarp789/Restaurant-Management-System",
  },
  {
    title: "My Portfolio",
    description:
      "Created from Microsoft's codespaces project and deployed to Azure. Includes my experience and design abilities.",
    url: "https://green-hill-0ee454400.5.azurestaticapps.net/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
