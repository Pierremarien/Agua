import { Card } from "@agua/ui";
import { companyData } from "./fakeData";
import { NavItems } from "@agua/utils";
import { fetchProjects } from "@agua/utils";


export default async function Home() {
  const projects = await fetchProjects(1);
  console.log(projects);
  const cardGridPositions = (index: number): string => {
    switch (index) {
      case 0:
        return "col-span-2 row-span-2";
      case 1:
        return "col-span-3 row-span-2 col-start-3";
      case 2:
        return "col-span-3 row-span-2 row-start-3";
      case 3:
        return "col-span-2 col-start-4 row-start-3";
      case 4:
        return "col-span-2 col-start-4 row-start-4";
      default:
        return "";
    }
  };

  return (
    <main className="relative grid h-screen grid-cols-5 grid-rows-4 gap-4 p-4">
      {companyData.name && (
        <h1 className="absolute flex h-full w-full items-center justify-center text-[clamp(8rem,28vw,32rem)]">
          {companyData.name}
        </h1>
      )}
      {NavItems.map(({ name, href }, index) => (
        <Card href={href} key={name} title={name} className={cardGridPositions(index)} />
      ))}
    </main>
  );
};



