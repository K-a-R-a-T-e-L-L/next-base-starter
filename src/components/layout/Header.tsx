import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-amber-100 w-full h-[120px] flex items-center justify-between py-5">
      <div className="bg-amber-200 w-[15%] h-full relative">
        <Image
          src={"/logo.png"}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Logo"
          fill
        />
      </div>
      <ul className="w-[70%] bg-amber-200 flex items-center justify-evenly">
        <li>
          <Link href={`/Home`}>Home</Link>
        </li>
        <li>
          <Link href={`/About us`}>About us</Link>
        </li>
        <li>
          <Link href={`/Advatages`}>Advatages</Link>
        </li>
        <li>
          <Link href={`/Contacts`}>Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
