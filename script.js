const testimonials = [
    {
        name: "Itadori Yuji",
        role: "Software Developer",
        message: ' " Working with this team was a great experience. Everyone brought different ideas and skills to the project. " '
    },
    {
        name: "Kugisaki Nobara",
        role: "Frontend Developer",
        message: ' " I really enjoyed collaborating with the team. We learned a lot from each other while building the project. " '
    },
    {
        name: "Fushiguro Megumi",
        role: "Backend Developer",
        message: ' " The project challenged us to solve problems together and improve our development skills. " '
    }
];

const testimonialContainer = document.querySelector(".testimonial-container");

testimonials.forEach(function(testimonial) {

    const card = document.createElement("div");
    card.classList.add("testimonial-card");

    const message = document.createElement("p");
    message.textContent = testimonial.message;

    const name = document.createElement("h4");
    name.textContent = testimonial.name;

    const role = document.createElement("span");
    role.textContent = testimonial.role;

    card.append(message, name, role);

    testimonialContainer.appendChild(card);
});