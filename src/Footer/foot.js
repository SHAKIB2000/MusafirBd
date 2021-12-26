import React from 'react';
import SimpleReactFooter from "simple-react-footer";

const description = "Officially the People's Republic of Bangladesh, is a country in South Asia. It is the eighth-most populous country in the world, with a population exceeding 163 million people in an area of either 148,460 square kilometres (57,320 sq mi) or 147,570 square kilometres (56,980 sq mi), making it one of the most densely populated countries in the world.";
  const title = "Bangladesh";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "Wikipedia",
                link: "https://en.wikipedia.org/wiki/Bangladesh"
            },
            {
                name: "Govt. Portal",
                link: "https://bangladesh.gov.bd/index.php"
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
                link: "https://www.google.com.bd/maps/place/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6/@23.4522017,85.8468091,6z/data=!3m1!4b1!4m5!3m4!1s0x30adaaed80e18ba7:0xf2d28e0c4e1fc6b!8m2!3d23.684994!4d90.356331"
            },
            {
                name: "Culture",
                link: "https://www.bangladesh.com/culture/"
            }
        ]
    }
 ];

 function Foot() {
    return (
    <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="MUSAFIRBD"
    iconColor="white"
    backgroundColor= "rgb(41,41,41)"
    // backgroundColor="#000046"
    fontColor="white"
    copyrightColor="darkgrey"
 />);
}
export default Foot;