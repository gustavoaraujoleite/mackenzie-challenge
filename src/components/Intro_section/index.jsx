import Image from "next/image";
import Header from "../Header";
import Button from "../UI/Button";
import header_image from "../../assets/images/header_image.png";
import RedirectingButton from "../UI/RedirectingButton";
export default function IntroSection() {
  return (
    <div className="bg-primary-red h-[600px] mb-[32rem] rounded-[0] mx-0 mt-0 py-8 px-8 md:bg-primary-red md:mx-2  md:mt-4 md:py-10 md:px-16 md:rounded-[20px] md:h-[720px] md:mb-[6rem]">
      <Header />
      <section className="flex justify-center py-8">
        <h1 className="text-center text-[38px] font-[800] md:font-[800] text-[60px] font-['bebas neue'] tracking-tighter text-white">
          <span className="text-white md:text-black">NOSSA</span> IDENTIDADE
        </h1>
      </section>

      <section className=" md:flex md:pt-8  md:h-[690px]">
        <div className="w-[100%] h-[360px] mb-2 md:w-[90%] md:h-[500px] relative md:mr-10 md:mb-[0]">
          <Image
            src={header_image}
            className="rounded-[20px] mb-[-90px]  shadow-lg"
            fill
            sizes="inherit"
            alt="Intro image"
          />
        </div>

        <div className="flex flex-col mt-8 md:w-[66%] md:mt-0 ">
          <h1 className=" text-black relative font-[700] text-[34px] mb-2 md:hidden ">
            Mais de <span className="text-primary-red">150 anos</span> de
            história
          </h1>
          <h2 className="subjectText">
            Com mais de 150 anos de história, o Mackenzie é uma instituição
            educacional pioneira, agente de inovações pedagógicas. Comprometido
            com valores e princípios cristãos, o Instituto busca formar cidadãos
            capazes de discernir, realizar uma leitura do mundo e intervir na
            sociedade.
          </h2>
          <div className="hidden md:flex md:justify-center">
            <Button
              href="#"
              title="Saiba mais"
              className=" pl-14 pr-2 pt-[2px] pb-[4px] rounded-[4px] xl:text-[32px] md:text-[22px] text-white font-[700] border border-4 xl:mt-8 md:mt-3"
            />
          </div>
          <div className=" my-4 mr-1 flex justify-end md:hidden ">
            <RedirectingButton href="#" />
          </div>
        </div>
      </section>
    </div>
  );
}
