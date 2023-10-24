import RedirectingButton from "@/components/UI/RedirectingButton";
import Image from "next/image";
import studyPartners from "../../../assets/images/study_partners.png";

export default function BasisA() {
  return (
    <div className="mb-[4rem]">
      <p className="desktopSubjectText">
        O Sistema Mackenzie de Ensino é líder na oferta de uma proposta
        educacional sustentada pela tradição cristã. Com materiais didáticos e
        soluções pedagógicas, atendemos mais de 400 escolas, incluindo unidades
        próprias e parceiras. Destacamo-nos como o primeiro sistema de ensino
        cristão e o mais relevante academicamente no país.
      </p>

      <div className="desktopImagesContainer mt-16 mb-8">
        <Image
          src={studyPartners}
          fill
          className="desktopImages"
          alt="Study Partners"
          sizes="inherit"
        />
      </div>

      <div>
        <h1 className=" text-black relative font-[700] text-[34px] mb-2 ">
          Histórico do <span className="text-primary-red">SME</span>
        </h1>
        <p className="desktopSubjectText">
          Desenvolvemos um modelo pedagógico alinhado com a filosofia cristã e o
          entendimento de que todo conhecimento provém de Deus e é o ponto
          convergente de todo raciocínio.
        </p>
      </div>

      <div className=" my-4 mr-1  ">
        <RedirectingButton href="#" />
      </div>
    </div>
  );
}
