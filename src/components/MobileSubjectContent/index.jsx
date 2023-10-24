import MobileSectionCard from "../UI/MobileSectionCard";
import scienceGirl from "../../assets/images/science_girl.png";
import studyPartners from "../../assets/images/study_partners.png";
import girlStudying from "../../assets/images/girl_studying.png";

export default function MobileSubjectContent() {
  return (
    <div className="flex flex-col justify-center px-8 ">
      <MobileSectionCard
        src={scienceGirl}
        subjectText="Nós, os Sistemas de Ensino Mackenzie, somos líderes na oferta de uma proposta educacional sustentada pela tradição. Com materiais didáticos e soluções didático-pedagógicas, atendemos mais de 400 escolas, incluindo unidades próprias e parceiras. Destacamo-nos como o sistema de ensino cristão mais relevante academicamente no país, baseado em uma cosmovisão bíblica."
      />
      <MobileSectionCard
        src={studyPartners}
        subjectText="Nós, os Sistemas de Ensino Mackenzie, oferecemos uma proposta educacional abrangente, com materiais didáticos e soluções pedagógicas, atendendo a mais de 400 escolas. Somos reconhecidos como o sistema de ensino cristão de maior relevância acadêmica no país, fundamentado em uma cosmovisão bíblica."
      />
      <MobileSectionCard
        title
        src={girlStudying}
        subjectText="Os Sistemas de Ensino Mackenzie
        traduzem os princípios essenciais
        de um ensino-aprendizagem de
        excelência em materiais didáticos e
        soluções pedagógicas para
        professores e alunos. Nosso Modelo
        Pedagógico se baseia em uma visão
        integrada dos conhecimentos, em
        um processo de ensinoaprendizagem
        interativo e
        significativo, e em uma metodologia
        reflexiva que promove a
        compreensão do ensino, realizado
        com personalização sem deixar de
        promover uma aprendizagem
        colaborativa à luz da cosmovisão
        cristã. Se você compartilha essa
        abordagem educacional, junte-se a
        nós nesta jornada!"
      />
    </div>
  );
}
