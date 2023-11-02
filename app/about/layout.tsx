import { log } from "console";
import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
	
  return (
    <div>
      <h1>About us</h1>
      <br />
      <ul>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      <br />
      {children}
    </div>
  );
}
