import { ContactUs } from "@/components/ContactUs";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Home</h1>
      {/* <br />

      <div>
        <Link href={"/leer"}>Leer</Link>
      </div>
      <br />
      <hr />
      <div>
        <Link href={"/escribir"}>Escribir</Link>
      </div> */}
      <div className="">
        <ContactUs />
      </div>
    </div>
  );
}

export default page;
