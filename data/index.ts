export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning MERN",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "WebSleuth - E-commerce price Tracker",
    des: "WebScraper based Price Tracker",
    img: "/ph1.png",
    iconLists: ["/re.svg","Next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://websleuth.netlify.app/",
  },
  {
    id: 2,
    title: "ZoltRooms",
    des: "Hotel Booking application",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg","firebase-svgrepo-com.svg"],
    link: "https://zolt-rooms.vercel.app/",
  },
  {
    id: 3,
    title: "Will be updated",
    des: "Working on it",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  {
    id: 4,
    title: "Will be updated",
    des: "Working on it",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "",
  },
];

export const testimonials = [
  {
    quote: "It was a delight to team up with Rahul on our recent project. His exceptional professionalism and timely responses were crucial in our success. Rahul’s vibrant energy and thorough understanding of development make him a standout partner. For those aiming to improve their website and brand visibility, Rahul comes highly recommended.",
    name: "Manya",
    title: "PWC trainee",
    imageUrl: "/mangu.png"
  },
  {
    quote: "Collaborating with Rahul was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rahul's enthusiasm for every aspect of development truly stands out. It was great working with you, and I am confident that together we will achieve even greater things in the future. If you're looking to elevate your website and brand, Rahul is the ideal partner.",
    name: "Aditya Kumar",
    title: "IBM intern",
    imageUrl: "/adi.png"
  },
  {
    quote: "I had the opportunity to work with Rahul during a hackathon, where we developed a voice-based medical assistant. Collaborating with him was a great pleasure. His expertise, innovative approach, and dedication significantly contributed to the success of our project. Rahul's ability to integrate complex ideas seamlessly into our development process was truly impressive. His participation was invaluable, and I would enthusiastically recommend him for any future collaborative efforts.",
    name: "Saahil Singh raathore",
    title: "Python Developer, Bytive",
    imageUrl: "/saahil.png"
  },
  // Add more items as needed
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOllll",
    img: "/vercel-logo-svgrepo-com.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IBM Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Codeclause Web dev intern",
    desc: "Designed and developed Websites using MERN",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Cloud Expertise",
    desc: "Experienced in AWS and various Cloud Services",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open-Source Contributer",
    desc: "Contributed in Github HacktoberFest",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Hexton09"  // Replace with your actual GitHub profile link
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/yourusername"  // Replace with your actual Twitter profile link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rahul-singh-nagesh/"  // Replace with your actual LinkedIn profile link
  },
];