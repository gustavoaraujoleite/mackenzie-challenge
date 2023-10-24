import Image from "next/image";
import mackenzie_logo from "../../assets/images/main_logo_mackenzie.png";
import MenuItem from "../UI/MenuItem";
import Button from "../UI/Button";
import BurgerMenu from "../UI/BurgerMenu";

export default function Header() {
  return (
    <header>
      <section className=" md:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className=" relative  md:hidden">
            <BurgerMenu />
          </div>
          <div className="w-[160px] h-[66px]  relative">
            <Image src={mackenzie_logo} layout="fill" />
          </div>
        </div>

        <div className="hidden md:flex justify-between w-[56%] ">
          <MenuItem title="Nossa identidade" href="#" />
          <MenuItem title="Materiais didáticos" href="#" />
          <MenuItem title="Soluções educacionais" href="#" />
          <div>
            <Button
              href="#"
              title="Login"
              className="bg-white pl-6 pr-2 pt-[2px] pb-[4px] rounded-[4px] text-[17px] text-primary-red font-[700] "
            />
          </div>
        </div>
      </section>
    </header>
  );
}
