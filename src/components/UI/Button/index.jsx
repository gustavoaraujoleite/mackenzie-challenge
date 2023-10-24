import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <p className={props.className}>{props.title}</p>
    </Link>
  );
}
