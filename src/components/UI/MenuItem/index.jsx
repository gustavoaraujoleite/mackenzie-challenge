import Link from "next/link";

export default function MenuItem(props) {
  return <Link href={props.href} className="text-white font-[600] text-[17px]">{props.title}</Link>;
}
