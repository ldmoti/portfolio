document.addEventListener('DOMContentLoaded', function() {
  
  const burgerButton = document.getElementById('burger-button');
  const mainNav = document.getElementById('main-nav'); 

  // Add event listener to the burger button
  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    mainNav.classList.toggle('show');
  });


  const volunteerExperiences = document.querySelectorAll('.volunteer__experience'); 
  volunteerExperiences.forEach(experience => {
      const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
              experience.classList.add('animate');
              observer.disconnect(); 
          }
      });
      observer.observe(experience);
  });
  
  // Animations for Projects
  const projects = document.querySelectorAll('.project'); // Get all project elements
  projects.forEach(project => {
      const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
              project.classList.add('animate');
              observer.disconnect(); 
          }
      });
      observer.observe(project);
  });
  
  // Animations for Skills
  const skills = document.querySelectorAll('.skill'); // Get all skill elements
  skills.forEach(skill => {
      const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
              skill.classList.add('animate');
              observer.disconnect(); 
          }
      });
      observer.observe(skill);
  });
});

const track = document.getElementById("project_showcase");
//dataset attributes
track.dataset.mouseDownAt = "0";
track.dataset.prevScrollLeft = "0";

const handleOnDown = e => {
  track.dataset.mouseDownAt = e.clientX;
  track.dataset.prevScrollLeft = track.scrollLeft;
  track.style.cursor = 'grabbing'; // Change cursor on mousedown
};

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.style.cursor = 'grab'; // Reset cursor on mouseup
};

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const newScrollLeft = parseFloat(track.dataset.prevScrollLeft) + mouseDelta;
  
  track.scrollLeft = newScrollLeft;
};

track.addEventListener("mousedown", handleOnDown);
track.addEventListener("mouseup", handleOnUp);
track.addEventListener("mouseleave", handleOnUp); 
track.addEventListener("mousemove", handleOnMove);
