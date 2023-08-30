import SimpleReactFooter from "simple-react-footer";
// import "./footer.scss"
// for documentation of footer refer https://www.npmjs.com/package/simple-react-footer

const description = "CafeChain - Where Blockchain Meets Your Daily Brew! Experience the future of coffee shopping with secure transactions and traceable beans. Sip, savor, and support fair-trade practices, one blockchain-powered cup at a time.";
const title = "Contact Us";
const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            {
                name: "Careers",
                link: "/careers"
            },
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Admin",
                link: "/admin"
            }
        ]
    },
    {
        title: "Legal",
        resources: [
            {
                name: "Privacy",
                link: "/privacy"
            },
            {
                name: "Terms",
                link: "/terms"
            }
        ]
    },
    {
        title: "Visit",
        resources: [
            {
                name: "Locations",
                link: "/locations"
            },
            {
                name: "Culture",
                link: "/culture"
            }
        ]
    }
];
const Footer = () => {
    return (
            <SimpleReactFooter
                description={description}
                title={title}
                columns={columns}
                linkedin="mayankesh-jha-15446b206"
                facebook="fluffy_cat_on_fb"
                twitter="fluffy_cat_on_twitter"
                instagram="fluffy_cat_live"
                youtube="UCFt6TSF464J8K82xeA?"
                pinterest="fluffy_cats_collections"
                copyright="Mayankesh Jha"
                iconColor="white"
                backgroundColor="#7c422d"
                fontColor="white"
                copyrightColor="darkgrey"
            />
    )
}

export default Footer