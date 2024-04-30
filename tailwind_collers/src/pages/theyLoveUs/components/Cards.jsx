import React from "react";
import kontrastr from "../../../assets/theyLoveUs/logos/kontrastr.png";
import zoomerr from "../../../assets/theyLoveUs/logos/zoomerr.png";
import shells from "../../../assets/theyLoveUs/logos/shells.png";
import artvenue from "../../../assets/theyLoveUs/logos/artvenue.png";
import waves from "../../../assets/theyLoveUs/logos/waves.png";
import image1 from "../../../assets/theyLoveUs/user-thumb/image1.jpg";
import image2 from "../../../assets/theyLoveUs/user-thumb/image2.jpg";
import image3 from "../../../assets/theyLoveUs/user-thumb/image3.jpg";
import image4 from "../../../assets/theyLoveUs/user-thumb/image4.jpg";
import image5 from "../../../assets/theyLoveUs/user-thumb/image5.jpg";

const Cards = () => {
  const cards = [
    {
      id: 1,
      header: "kontrastr",
      logo: kontrastr,
      image: image1,
      name: "Ralph Edwards",
      role: "Product Designer",
      text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
    },
    {
      id: 2,
      header: "Zoomerr",
      logo: zoomerr,
      image: image2,
      name: "Hellen Jummy",
      role: "Team Lead",
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    },
    {
      id: 3,
      header: "SHELLS",
      logo: shells,
      image: image3,
      name: "Hellena John",
      role: "Co-founder",
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    },
    {
      id: 4,
      header: "ArtVenue",
      logo: artvenue,
      image: image4,
      name: "David Oshodi",
      role: "Manager",
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    },
    {
      id: 5,
      header: "Waves",
      logo: waves,
      image: image5,
      name: "Charolette Hanlin",
      role: "CEO",
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    },
  ];
  return (
    <div className=" flex overflow-x-auto gap-5" >
      {cards.map((card) => (
        <div
          key={card.id}
          className=" flex flex-col items-center justify-center gap-2 flex-shrink-0 w-[319px] h-[296px] sm:w-96 sm:h-[430px] rounded-[20px] bg-white border border-[#E2E8F0]"
          style={{
            "box-shadow": "0px 10px 15px -3px #0000001A;",
          }}
        >
          <div className=" flex w-[271px] sm:w-[320px] h-16 py-4 ">
            <img
              className=" h-full opacity-80 mr-2"
              src={`${card.logo}`}
              alt={card.logo}
            />
            <header className=" text-2xl leading-[26.4px] font-bold text-[#475569]  ">
              {card.header}
            </header>
          </div>
          <p className=" w-[271px] sm:w-[320px] h-[88px] sm:h-[190px] leading-[22.4px] sm:text-2xl sm:leading-[38.4px] ">
            {card.text}
          </p>
          <div className=" flex items-end w-[271px] sm:w-[320px] pt-4 h-20">
            <div className=" w-16 h-16 overflow-hidden rounded-full mr-3">
              <img src={`${card.image}`} alt="users" />
            </div>
            <div className="w-[191px] sm:w-60 h-[51px]  ">
              <div className=" text-lg">{card.name}</div>
              <div className=" text-[16px] leading-[22.3px] text-[#475569] ">
                {card.role}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
