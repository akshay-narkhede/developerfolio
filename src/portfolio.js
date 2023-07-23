/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 50 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Akshay Narkhede",
  title: "Hi there, I'm Akshay",
  subTitle: emoji(
    "I'm a software engineer specializing in crafting exceptional digital experiences through web and mobile application development. Currently pursuing a Master's in Computer Science at Indiana University Bloomington."
  ),
  resumeLink:
    "",
    // "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/akshay-narkhede",
  linkedin: "https://www.linkedin.com/in/akshay-narkhede/",
  gmail: "narkhede.aks@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/14208499/akshay-narkhede",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An enthusiastic full-stack developer who enjoys building various products in domains like finance, edutech, banking, leveraging both cutting-edge technologies and machine learning solutions.",
  skills: [
    emoji("Seamlessly integrating various third-party services, including YES Bank, Experian, PayTM payment gateway, and more, to enhance the functionality and user experience of applications."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Material UI",
      fontAwesomeClassname: "fab fa-uikit"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "Gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Product Management",
      fontAwesomeClassname: "fas fa-user"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indiana University Bloomington",
      logo: require("./assets/images/Indiana-University.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mumbai_university.png"),
      subHeader: "Bachelor of Engineering in Information Technology",
      duration: "July 2014 - June 2018",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developement Intern",
      company: "Future Wonder",
      companylogo: require("./assets/images/futurewonder.png"),
      date: "May 2022 – Present",
      desc: "Future Wonder excels in Application Design, Software Engineering, Testing, Infrastructure Consulting, and Vendor Management.",
      descBullets: [
        "Resolved code issues for multiple client projects with efficient solutions in frontend and backend",
        "Performed DevOps tasks, including Bitbucket to GitLab migration, updating scripts for QA production data migration",
        "Assessed and assisted in the technical sales of a 2-year old machine learning project"
      ]
    },
    {
      role: "Lead Software Engineer",
      company: "LEO1(Financepeer)",
      companylogo: require("./assets/images/leo1-logo.jpg"),
      date: "Feb 2021 – Jul 2022",
      desc: "LEO1 is a peer-to-peer lending platform that offers loans to students to pay school fees and multiple education services.",
      descBullets: [
        "Lead architectural and design improvement efforts for multiple products",
        "Mentored team, conducted code reviews, debugging & ensured deployment of prod-ready code with optimal solutions",
        "Conducted standup, grooming, demos, planning as a scrum master for multiple teams"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "LEO1(Financepeer)",
      companylogo: require("./assets/images/leo1-logo.jpg"),
      date: "Nov 2017 – Feb 2021",
      desc: "LEO1 is a peer-to-peer lending platform that offers loans to students to pay school fees and multiple education services.",
      descBullets: [
        "Designing, analyzing and strategizing product, customer flow with the product team and validating the feasibility of new functionalities with estimating required development effort",
        "Identified data issues and delivered RCA with corrective steps to business users for all products in the company"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Professional Work",
  subtitle: "PLAYED A CRUCIAL ROLE IN CRAFTING THE TECHNOLOGY INFRASTRUCTURE FOR MULTIPLE PRODUCTS",
  projects: [
    {
      image: require("./assets/images/impactp2p.png"),
      projectName: "ImpactP2P",
      projectDesc: "ImpactP2P is a p2p lending and borrowing platform designed to address the financial needs of self-employed, salaried individuals through a highly secure and digital medium.",
      descBullets : [
        "Constructed an entire loan system with KYC (Know Your Customer) integration, bank analysis, credit check integration and credit score in-house algorithms with dashboards",
        "Executed core modules of investor flow and wealth partner solutions delivering functionalities such as auto investing, portfolio management, portfolio liquidity and interactive dashboards",
        "Developed core components of EMI, penalty payment scheduling revenue management"
      ],
      footerLink: [
        {
          name: "#p2plending",
        },
        {
          name: "Visit Website",
          url: "https://impactp2p.com/",
          changeColor : true,
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/leo1-learn-logo.avif"),
      projectName: "LEO1 Learn (Edinfinity)",
      projectDesc: "LEO1 Learn is an educational content consumption platform where self-hosted content and business partner-hosted content are consumed using rewards management.",
      descBullets : [
        "Designed and implemented an journey of content listing web and mobile application, with streaming enabled for different resolutions using AWS MediaConvert and CloudFront.",
        "Developed content streaming (OTT) platform using AWS S3, MediaConvert to stream on demand educational content recommended to user.",
        "Optimized web applications using server and client level caching which reduced load on resources by more than 60%."
      ],
      footerLink: [
        {
          name: "#digitallearning",
        },
        {
          name: "Visit Website",
          url: "https://www.leo1.in/edinfinity/",
          changeColor : true,
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Personal & Academic Projects"),
  subtitle:
    "SOME COOL STUFF THAT I HAVE DONE !",

  achievementsCards: [
    {
      title: "EduSphere a Learning Management System",
      subtitle:
        "Edusphere is a learning management system (LMS) that provides a comprehensive platform for educational institutions to manage and deliver online learning content.",
      image: require("./assets/images/EduSphere.png"),
      imageAlt: "EduSphere",
      footerLink: [
        {
          name: "#lms",
        },
        {
          name: "#Edtech",
        },
        {
          name: "#SoftwareEngineering",
        },
        {
          name: "View Live Site",
          changeColor : true,
          url :"https://edusphere-lms.netlify.app/"
        },
        {
          name: "View Project",
          changeColor : true,
          url :"https://drive.google.com/file/d/1hZ-ID795icXZWIUkCLCFnsQyc_Fwu4tf/view"
        }
      ]
    },
    {
      title: "Home Credit Default Risk, Machine Learning Course Project",
      subtitle:
        "As a graduate student team, we analyzed Home Credit Group's dataset to identify loan default risks and improve customer experience. Using advanced ML techniques, we developed a predictive pipeline.",
      image: require("./assets/images/home_credit.jpg"),
      imageAlt: "Home Credit Default Risk",
      footerLink: [
        {name: "#MachineLearning", url: ""},
        {name: "#CreditRisk" },
        {name: "#MLPipelines", url: ""},
      ]
    },

    {
      title: "ANFlix",
      subtitle: "A movies listing webpage from TMDB APIs with all general categories of movies and TV shows with play trailers of selected movie names using node package module.",
      image: require("./assets/images/anflix.png"),
      imageAlt: "AnFlix",
      footerLink: [
        {name: "#movies", url: ""},
        {name: "#trailers" },
        {name: "#restapis", url: ""},
        {name: "View Project", changeColor : true, url: "https://anflix-movies.web.app/"},
      ]
    },
    {
      title: "Covid Screens Dashboard",
      subtitle: "Designed and implemented a covid screen tracker using covid19india apis with summary, graphical data. Created a simple dashboard using React library with help of Ant Design.",
      image: require("./assets/images/covid_screens.jpg"),
      imageAlt: "CovidScreens",
      footerLink: [
        {name: "#covid", url: ""},
        {name: "#data" },
        {name: "#india", url: ""},
        {name: "View Project",changeColor : true, url: "https://covidscreens.netlify.app/"},

      ]
    },
    {
      title: "Wallpse an Android Application",
      subtitle: "An app uses a public API for dog images to display on user screen on scrolling (infinite scroll) and used JavaScript library for basic device details.",
      image: require("./assets/images/wallpse.png"),
      imageAlt: "Wallpse",
      footerLink: [
        {name: "#android", url: ""},
        {name: "#ui" },
        {name: "#apis", url: ""},
        {name: "View Project", changeColor : true, url: "https://photos.google.com/share/AF1QipNxdgeAcvQcnsgHRXeLDfZHtEOim32Y0S8RZv6D89yMWh6m5rzDPE6b8pvELuuWTw/photo/AF1QipMRIqYHofIjcYTVUEV5a0pAW9d5x36ep8N3d1t_?key=U2ZBVmRjT293VW1MY0xnSEtRUE5KcXpUYkxUNU9B"},
      ]
    },
    {
      title: "UGC Dashboard",
      subtitle: "A web application as part of the first Government organized Hackathon 2017 that enables UGC employees to maintain data in digital format instead of physical files.",
      image: require("./assets/images/ugc.jpg"),
      imageAlt: "UGC",
      footerLink: [
        {name: "#SIH2017", url: ""},
        {name: "#ugc" },
        {name: "#indiaDigitalization", url: ""},
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach out to me"),
  subtitle:
    "I'm open to discussing projects, or catching up. Feel free to connect with me.",
  subtitle2: "You can also play pong from here in the meanwhile."
  // email_address: "narkhede.aks@gmail.com"
};

const aboutInfo = {
  display: true, // Set false to hide this section, defaults to true
  title: "About me",
  para1:
    "Prior to embarking on my graduate studies, I spent five fruitful years as a Software Developer at Leo1 (Financepeer). Being the organization's first employee, I had the unique opportunity to contribute to multiple products from their inception and embrace various roles and responsibilities. With a team of just ten individuals, we achieved a significant milestone in 2019 when we were selected for the esteemed Google Launchpad Accelerator India event. During this event, we received invaluable mentorship from Google, propelling our growth and success.",
  para2: "Beyond the realm of software development, I have diverse hobbies and interests that add color to my life. I take great pleasure in exploring my culinary skills by cooking different varieties of food. Additionally, spending quality time with friends, watching movies and TV shows, and embarking on exciting travel adventures to new destinations are among my favorite pastimes."
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  aboutInfo,
  isHireable
};
