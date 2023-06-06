import { backgroundImg } from "./config";


const About = () => {
  return (
    <div className="relative w-full h-screen ">
      <img className="absolute w-full h-full object-cover mix-blend-overlay " src={backgroundImg} alt="/"/>
       <div className="p-16 pr-96">
        <h1 className="font-extrabold text-5xl p-10 text-red-800">Welcome to the world of Tasty & Fresh Food</h1>

       </div>
       <div className="pl-28  pr-60">
        <h2  className="font-medium text-lg ">With a joyful, pastel palette and an array of spunky vector art, the Zwigato website promises a great time to all of its customers. Those design choices help to establish the restaurant brand, as does the restaurant logo: Zwigato written in a tiki-style font and cast in orange and white. It appears at the top of every page and functions as a link to the homepage which is an important website navigation practice. 


The restaurant features photos of the colorful cuisine all over the website so that customers know exactly what they’re getting. It’s especially helpful on the online ordering page, as customers might be more inclined to order unfamiliar items.

</h2>
<h2 className="mt-4 text-lg font-medium">Pickup and delivery will likely remain popular even as customers return to dining rooms, so featuring a lightbox that provides links to these options makes the experience even more convenient</h2>
       </div>
    </div>
  )
}
export default About;