// title: project title,
// image: thumbnail image,
// modalImage: image displayed on modal (if it's video, write "none")
// modalVideoMp4: mp4 displayed on modal,
// modalVideoOgg: ogg displayed on modal,
// language: used languages and libraries,
// pageLink: deployed website link,
// githubLink: github link,
// figmaLink: figma link (if applicable),
// description: description

const projectsData = [
  {
    title: "Creative Product Generator",
    image: require("../../assets/projects-image/product-generator.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/product-generator-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/product-generator-video.ogg"),
    language: "React, Redux toolkit, TypeScript, styled components, OpenAI API",
    pageLink: "https://product-generator.netlify.app/",
    githubLink: "https://github.com/MahoMori/product-generator",
    description:
      "This application generates a random product ad and product name by using OpenAI API. The user can generate ads and names  multiple times and choose one each. They can share the generated product on social media and messaging apps.",
  },
  {
    title: "Tongue Twister Game",
    image: require("../../assets/projects-image/tongue-twister.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/tongue-twister-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/tongue-twister-video.ogg"),
    language: "HTML, CSS, JavaScript",
    pageLink: "https://tongue-twister-game.netlify.app/",
    githubLink: "https://github.com/MahoMori/tongue-twister",
    description:
      "It is a tongue twister game which is coded with pure JavaScript. It uses Voice Recognition API and checks if a player is able to say a tongue twister shown on a screen. At the end of the game or after the player quits, the result based on how many tongue twisters they were able to say will be presented.",
  },
  {
    title: "Vancouver Hot Chocolate Adventure",
    image: require("../../assets/projects-image/hotchoco.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/hotchoco-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/hotchoco-video.ogg"),
    language: "React, Redux toolkit, TypeScript, styled components, Firebase",
    pageLink: "https://vancouver-hot-chocolate-adventure.netlify.app",
    githubLink: "https://github.com/MahoMori/van-hotchoco-adventure",
    figmaLink:
      "https://www.figma.com/file/gXOsP3r6LcIChVVKqX95iN/Vancouver-Hot-Chocolate-Adventure-Design-Draft?node-id=0%3A1",
    description:
      'Using the Geolocation API, this web application compares a user\'s location and a shop location. If they are close enough, the user can check the store as "Been To". The shops and hot chocolate flavours are based on Greater Vancouver Hot Chocolate Festival. All shop data is stored in Firebase.',
  },

  {
    title: "Grocery Budget Calculator",
    image: require("../../assets/projects-image/budget.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/budget-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/budget-video.ogg"),
    language: "React, Redux toolkit, TypeScript, styled components",
    pageLink: "https://grocery-budget-calculator.netlify.app",
    githubLink: "https://github.com/MahoMori/budget-calculator",
    figmaLink:
      "https://www.figma.com/file/zfGsu4tn19uQ2HQzWbrzLm/Budget-Calculator?node-id=0%3A1",
    description:
      "The web application that keeps track of budget. The users enter their budget, and the app calculates and shows how much they can spend within their budget when items are added. Items can be edited and deleted. When the total price exceeds the budget,  the budget text changes its color to red.",
  },

  {
    title: "Space Gallery",
    image: require("../../assets/projects-image/space-gallery.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/space-gallery-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/space-gallery-video.ogg"),
    language: "React, styled components",
    pageLink: "https://space-gallery-mm.netlify.app",
    githubLink: "https://github.com/MahoMori/intern-challenge.git",
    description:
      'The image gallery that users can like and unlike pictures using NASA Astronomy Picture of the Day API. By clicking the icon on top right, the image is saved to a local data and can be viewed on "My Favourits" page even after reloading the website. Images can be removed from favourites by clicking the icon again.',
  },

  {
    title: "To Go/To Do List",
    image: require("../../assets/projects-image/togo.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/togo-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/togo-video.ogg"),
    language: "React, Redux toolkit, Material UI",
    // language: "React, Redux toolkit, Material UI, Firebase",
    pageLink: "https://togo-todo-list.netlify.app",
    githubLink: "https://github.com/MahoMori/to-go-list.git",
    description:
      "The website that users can add, edit and delete lists of places to go and things to do. It has a complete CRUD feature. It will be implemented with Firebase for signing up and logging in features so that the list can be for a group of specific people. When users log in, they will have their own panels for an individual list for each person.",
    // description:
    //   "The website that users can add, edit and delete lists of places to go and things to do. It has complete CRUD feature. It uses Firebase for signing up and logging in feature so that the list can be for a group of specific people. When users log in, they have their own panels for an individual list for each person.",
  },

  {
    title: "Cocktailedge",
    image: require("../../assets/projects-image/cocktailege.png"),
    modalImage: "none",
    modalVideoMp4: require("../../assets/projects-image/cocktailege-video.mp4"),
    modalVideoOgg: require("../../assets/projects-image/cocktailege-video.ogg"),
    language: "React, Material UI",
    pageLink: "https://cockailedge.netlify.app",
    githubLink: "https://github.com/MahoMori/search-cocktail.git",
    description:
      "The website to search cocktails by name and ingredients using TheCocktailDB API. It also has a list page of cocktails sorted by alphanumeric order. The modal pops up when each image is clicked and contains information about the cocktail.",
  },

  {
    title: "Sound Mart",
    image: require("../../assets/projects-image/soundmart.png"),
    modalImage: require("../../assets/projects-image/soundmart.png"),
    language: "HTML, CSS, Javascript",
    pageLink: "https://sound-mart-v2.netlify.app",
    githubLink: "https://github.com/MahoMori/sound_mart.git",
    description:
      "The store page for purchasing BGM. It has a trial listening feature and adding items to a cart and deleting items from a cart feature. The number and price in the cart changes depending on the items in there. It was a pair project to practice Javascript with HTML and CSS.",
  },

  {
    title: "UDI Lab",
    image: require("../../assets/projects-image/udi-multi.png"),
    modalImage: require("../../assets/projects-image/udi.png"),
    language: "HTML, SCSS",
    pageLink: "https://udi-lab.netlify.app",
    githubLink: "https://github.com/MahoMori/udi_labo",
    description:
      "The landing page design for Unnatural Death Investigation Institution. It is a fan made website based on a Japanese drama. The bottom right icon brings users to the top of the website and there is a hamburger menu when viewing on a smaller screen than a laptop.",
  },

  {
    title: "Light Night Lamp",
    image: require("../../assets/projects-image/light-multi.png"),
    modalImage: require("../../assets/projects-image/light.png"),
    language: "HTML, CSS",
    pageLink: "https://light-night-lamp.netlify.app",
    githubLink: "https://github.com/MahoMori/html_css_midterm_project",
    description:
      "The ecommerce landing page design for the store selling lamps. It showcases some of their products and introduces a service for companies and businesses to help with lightings at their offices, cafes and restaurants.",
  },
];

export default projectsData;
