import { HomeGrid } from "../components/homeGrid";
import { Company } from "@agua/utils";

export default function Page(): JSX.Element {
  // Replace this with server answer //
  const company: Company = {
    id: 0,
    name: "agua",
    address: "ntm",
    locality: "ntm",
    email: "ntm",
    phone: "ntm",
    about_team: "ntm",
    about_company: "ntm",
    about_references: "ntm",
    image: "ntm",
    logo: "ntm",
  };
  // End of replacement //

  return (
    <main>
      <HomeGrid {...company} />
    </main>
  );
}
