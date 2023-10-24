import Link from "next/link";

export default function RedirectingButton(props) {
  return (
    <Link
      href={props.href}
      className="text-primary-red font-[700] text-[24px] "
    >
      Saiba mais
    </Link>
  );
}
