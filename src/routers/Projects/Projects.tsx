import React from 'react';
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  img: string;
  url: string;
  technologies: string[];
}

function Projects() {
  const projects: Project[] = [
    // {
    //   title: "First Project",
    //   description: "This is a website that I created to showcase my skills and experience.",
    //   img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAbFBMVEX/////AAD/gID/3Nz/PDz/c3P/+Pj/8PD/4OD/5+f/bGz/Pj7/6ur/tbX/oaH/dXX/vb3/z8//V1f/QkL/EBD/qqr/Skr/MTH/lZX/Zmb/Rkb/e3v/IiL/jIz/x8f/YWH/Kir/UVH/hob/Ghp6510/AAADhklEQVR4nO2afXOiMBCHgQDhXUBBEAXB7/8dD/GmV/Xa+20Cmd7MPn+1nco8JmSzm6xlMQzDMAzDMAzDMAzDMAzDfI/v+1ImSRiGwR2xsPw4/ylJpJz/YXsJKcNAFH2eVllzmZzOi9qhLMexrk/7/T6O3YU4nn851fU4luXQRl7nTJcmq9K8L0QQzqor6cigz6Yhvt4O9gocbtd4mLI+kFpDVDSRu4bOK27UFMoDV3jHLZweHL1CSSrstnN60IUKQ1VubWXbJXnAkk3eqVfchGYVjiasbHskzaPfmLGy7YayIMWGS/CZoyBo7UxZ2fYOt5KrhHSMAx7wc3NWtp3/xDkkzKKp6PAAjhGFsXV454iG+tTgGz+/8ymolZm0su0Ms/IvZrUuWKD3jS7EeSliWrI1q9ViAVUayLQ+U2JaSW1Wq8aSrvBEeGa5044mJyyehpTE1PHzs6aWi2kFlCDvzCs3i7W0jgGkJShf31k+0d00tM5YJigob8uiZfm5xjI5YFoFXWumUhY7YHt1T3nmh5YVNKoz2UNapNzU+fTBYlDTwvLTVFVrHmilmcQym0pdywozhWq8grRI6Zbz+ukgImthCRepon7Tml8xagbSGNGawz5lV0W1SMnp37TmmSQ94wJpOfpa81bh4VvYV894hnQK+OUjCftRB2mRUvlvvmmSgQOG1dXeSlphA2p5BrVkukefgWmR4uFXWkWLb9yRqdESpNVsaBJlQ9sYMS3dldhT8xtsJerFLUFPurC4pRPlg0bhbAyL8hp7Yq5UmmF7onIGkY8qUhsnNuKiWvZjWmrZaQYH9Tew7FQhl5c5LfF7Bsvl6QWZiLSObbCCjFq+UoP6G1j5Siv2ZapzLHIHLPZJJzYjvf56BTyxIR27rYCLnW/J0azWCJ40688LiQjT8iezWhN4Xf0z73xoJ0nawDdkve6RNokbFk3nwGU0Qrhoy4HZSx/wyscips26YCnznR/acCBNahH68QxedLa4lVUYCxFnSmeZuf0H3XkeBDq5OYETltT88TLThEe0Ur/AoTAo9Hgmm3dpXIgNi78Rk3pJ+k/2E6X97pmgcsoNYsW5dCryW/WEn4i+mtr6qlt2LdyudTtVvUhWa1n3l8b0j870bhe1w/BdY/owtNGu++hLXxrTt2+gf7TxL33872389y5+I238DMMwDMMwDMMwDMMwDMP87/wCUgpC76crB9wAAAAASUVORK5CYII=",
    //   url: "https://www.youtube.com/",
    //   technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"]
    // },
  ];

  return (
    <div className='projects'>
      <div className="projects__container">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div className='project__card' key={index}>
              <div className="project__card-wrapper">
                <a href={project.url} target="_blank">
                  <img src={project.img} alt={project.title} />
                </a>
                <div className="project__card-body">
                  <h3 className="card__title">{project.title}</h3>
                  <p className='card__description'>{project.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='projects__page-title'>
            <p>
              Welcome to my <span>projects</span> page!
              While I'm still working on showcasing my <span>projects</span> here,
              I wanted to give you a glimpse of what's to come.
              I'm excited to share the details of these <span>projects</span> once they're ready.
              Stay tuned for updates and new additions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
