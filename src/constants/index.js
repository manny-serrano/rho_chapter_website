export const navLinks = [
    {label: "Home" }, 
    {label: "History" }, 
    {label: "Rho Chapter" },
    {label: "Our Pillars" },
    {label: "Legacy"},
    {label: "Contact"}

]; 

const noChangeParts = [
    "Object_84",
    "Object_37",
    "Object_34",
    "Object_12",
    "Object_80",
    "Object_35",
    "Object_36",
    "Object_13",
    "Object_125",
    "Object_76",
    "Object_33",
    "Object_42",
    "Object_58",
    "Object_52",
    "Object_21",
    "Object_10",
];

const performanceImages = [
    { id: "p1", src: "/ncregion.png" },
    { id: "p2", src: "/rhoconf.JPG" },
    { id: "p3", src: "/Dukebrothers.jpg" },
    { id: "p4", src: "/rhoclassphoto.jpg" },
    { id: "p5", src: "/crestlogo.png" },
    { id: "p6", src: "/dcphoto.jpg" },
    { id: "p7", src: "/probate3.JPG" }
];

const performanceImgPositions = [
    {
        id: "p1",
        left: 5,
        bottom: 65,
    },
    {
        id: "p2",
        right: 10,
        bottom: 60,
    },
    {
        id: "p3",
        right: -5,
        bottom: 45,
    },
    {
        id: "p4",
        right: -2,
        bottom: 0,
    },
    {
        id: "p5",
        left: 20,
        bottom: 50,
    },
    {
        id: "p6",
        left: 2,
        bottom: 30,
    },
    {
        id: "p7",
        left: -2,
        bottom: 0,
    },
];

const features = [
    {
        id: 1,
        icon: "/feature-icon1.svg",
        highlight: "Academics.",
        text: "We believe academic excellence is foundationally important for the advancement of our community.",
        styles: "left-5 md:left-20 top-[25%] opacity-0 translate-y-5",
    },
    {
        id: 2,
        icon: "/earth.svg",
        highlight: "Culture.",
        text: "As a Latino-based Fraternity, we pride ourselves in knowing that our membership is comprised of Hermanos from various backgrounds.",
        styles: "right-5 md:right-20 top-[35%] opacity-0 translate-y-5",
    },
    {
        id: 3,
        icon: "/blackhands.svg",
        highlight: "Brotherhood.",
        text: "La Fraternidad promotes intellectual, cultural, and academic strength in its members in order to prepare them for lives as both leaders and team members, in their community and otherwise.",
        styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
    },
    {
        id: 4,
        icon: "/support.svg",
        highlight: "Service.",
        text: "We collaborate with individuals, organizations and institutions that will join our efforts to improve the conditions of the Latino community.",
        styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
    },
    {
        id: 5,
        icon: "/feature-icon5.svg",
        highlight: "Writing Tool.",
        text: "Write smarter and faster, whether it's blogs, essays, or captions, AI helps polish your words.",
        styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
    },
];

const featureSequence = [
    { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
    { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
    { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
    { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
    { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

export {
    features,
    featureSequence,
    footerLinks,
    noChangeParts,
    performanceImages,
    performanceImgPositions,
};