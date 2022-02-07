const projectsData = [
  {
    title: "Space Gallery",
    image: require("../../assets/projects-image/space-gallery.png"),
    modalImage: require("../../assets/projects-image/kari.jpg"),
    language: "React, styled-components",
    pageLink: "test",
    githubLink: "test",
    description:
      'The image gallery that users can like and unlike pictures using NASA Astronomy Picture of the Day API. By clicking the icon on top right, the image is saved to a local data and can be viewed on "My Favourits" page even after reloading the website. Images can be removed from favourites by clicking the icon again.',
  },
  {
    title: "To Go/To Do List",
    image: require("../../assets/projects-image/togo.png"),
    modalImage: require("../../assets/projects-image/kari.jpg"),
    language: "React, Redux toolkit, Material UI",
    pageLink: "test",
    githubLink: "test",
    description:
      "The website that users can add, edit and delete lists of places to go and things to do. It has complete CRUD feature. It uses Firebase for signing up and logging in feature so that the list can be for a group of friends. When users log in, they have their own panels for an individual list for each person.",
  },
  {
    title: "Cocktailedge",
    image: require("../../assets/projects-image/cocktailege.png"),
    modalImage: require("../../assets/projects-image/kari.jpg"),
    language: "React, Material UI",
    pageLink: "test",
    githubLink: "test",
    description:
      "The website to search cocktails by name and ingredients using TheCocktailDB API. It also has a list page of cocktails sorted by alphaneumeric order. The modal pops up when each image is clicked and contains information about the cocktail.",
  },
  {
    title: "Sound Mart",
    image: require("../../assets/projects-image/soundmart.png"),
    modalImage: require("../../assets/projects-image/soundmart.png"),
    language: "HTML, CSS, Javascript",
    pageLink: "test",
    githubLink: "test",
    description:
      "The store page for purchasing BGM. It has trial listening feature and adding items to a cart and deleting items from a cart feature. The number and price in the cart changes depending on items in there. It was a pair poject to practice Javascript with HTML and CSS.",
  },
  {
    title: "UDI Lab",
    image: require("../../assets/projects-image/udi-multi.png"),
    modalImage: require("../../assets/projects-image/udi.png"),
    language: "HTML, SCSS",
    pageLink: "test",
    githubLink: "test",
    description:
      "The landing page design for Unnatural Death Investigation Institution. It is a fan made website based on a Japanese drama. The bottom left icon brings users to the top of the website and there is a hamburger menu when viewing in smaller screen than a laptop.",
  },
  {
    title: "Light Night Lamp",
    image: require("../../assets/projects-image/light-multi.png"),
    modalImage: require("../../assets/projects-image/light.png"),
    language: "HTML, CSS",
    pageLink: "test",
    githubLink: "test",
    description:
      "The e-commerce lading page design for the store selling lamps. It showcases some of their products and introduces a service for companies and business to help with lightings at thier offices, cafes and restaurants.",
  },
];

export default projectsData;
