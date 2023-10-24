import Image from "next/image";
import RedirectingButton from "../RedirectingButton";

export default function MobileSectionCard(props) {
  return (
    <div className="mb-6">
      <div className="w-[100%] h-[220px] mb-2  relative ">
        <Image
          src={props.src}
          className="rounded-[20px]  shadow-lg"
          fill
          sizes="inherit"
          alt={props.alt}
        />
      </div>

      {props.title && (
        <h1 className=" text-black relative font-[700] text-[34px] mb-2 md:hidden ">
          Histórico do <span className="text-primary-red">SME</span>
        </h1>
      )}

      <div>
        <p className="subjectText mt-4 ">{props.subjectText}</p>
      </div>

      {props.title && (
        <div className=" my-4 mr-1 flex justify-end md:hidden ">
          <RedirectingButton href="#" />
        </div>
      )}
    </div>
  );
}
