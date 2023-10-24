import Image from "next/image";
import girlReading from "../../../assets/images/girl_studying.png";
import scienceGirl from "../../../assets/images/science_girl.png";

export default function BasisB() {
  return (
    <div>
      <div className="desktopImagesContainer mt-16 mb-8">
        <Image src={scienceGirl} layout="fill" className="desktopImages" />
      </div>

      <div>
        <p className="desktopSubjectText w-[90%]">
          O Sistema Mackenzie de Ensino trabalha para fornecer uma pedagogia
          cristã, com materiais e recursos didáticos, que conduza essa geração a
          glorificar a Deus por meio de uma atuação biblicamente orientada,
          social e culturalmente relevantes.
        </p>
      </div>

      <div className="desktopImagesContainer mt-16 mb-8">
        <Image src={girlReading} layout="fill" className="desktopImages" />
      </div>
    </div>
  );
}
