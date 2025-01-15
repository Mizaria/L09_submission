import Img from "../assets/why-rp.jpg";

export default function Home({ title }) {
  return (
    <div className="container" id = 'homebackground'>
      <img
        className="img-feat"
        src={Img}
        alt="rp"
      />

      <h1  id = 'hometitle'>{title}</h1>
      <p id = 'Homedes'>If you are excited by advancing IT technology and have big interest for problem-solving, join us at RP's School of Infocomm , SOI. Uncover your hidden technical talents and bring your creative digital aspirations to life with our support. Explore our six diploma programs spanning a diverse range of infocomm disciplines. </p>
    </div>
  );
}
