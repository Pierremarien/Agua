import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: "antoine.lansman@branlette.cum" },
    update: {},
    create: {
      email: "antoine.lansman@branlette.cum",
      password: "password",
      username: "Branlix2000",
    },
  });

  const role1 = await prisma.roles.create({
    data: {
      role: "ADMIN",
    },
  });

  const role2 = await prisma.roles.create({
    data: {
      role: "MODERATOR",
    },
  });

  const role3 = await prisma.roles.create({
    data: {
      role: "USER",
    },
  });

  const userRole1 = await prisma.rol_usr.create({
    data: {
      userId: user1.id,
      roleId: role1.id,
    },
  });
  const genre1 = await prisma.genre.create({
    data: {
      name: "Urbanisme",
    },
  });

  const genre2 = await prisma.genre.create({
    data: {
      name: "Architecture",
    },
  });

  const genre3 = await prisma.genre.create({
    data: {
      name: "Aménagement",
    },
  });

  const subgenre1 = await prisma.subgenre.create({
    data: {
      name: "Faisabilité",
      genreId: genre1.id,
    },
  });

  const subgenre2 = await prisma.subgenre.create({
    data: {
      name: "Tourisme",
      genreId: genre1.id,
    },
  });

  const subgenre3 = await prisma.subgenre.create({
    data: {
      name: "Abords",
      genreId: genre3.id,
    },
  });

  const subgenre4 = await prisma.subgenre.create({
    data: {
      name: "Parc",
      genreId: genre3.id,
    },
  });

  const subgenre5 = await prisma.subgenre.create({
    data: {
      name: "Place",
      genreId: genre3.id,
    },
  });

  const subgenre6 = await prisma.subgenre.create({
    data: {
      name: "Equipement",
      genreId: genre3.id,
    },
  });

  const subgenre7 = await prisma.subgenre.create({
    data: {
      name: "Public",
      genreId: genre2.id,
    },
  });

  const subgenre8 = await prisma.subgenre.create({
    data: {
      name: "Privé",
      genreId: genre2.id,
    },
  });

  const client1 = await prisma.client.create({
    data: {
      name: "Client 1",
    },
  });

  const client2 = await prisma.client.create({
    data: {
      name: "Client 2",
    },
  });

  const client3 = await prisma.client.create({
    data: {
      name: "Client 3",
    },
  });

  const project1 = await prisma.project.create({
    data: {
      title: "Projet 1",
      description:
        "Description du projet 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
      status: "TERMINÉ",
      clientId: client1.id,
      target: "Valorisation du quartier",
      preview: "c'est le projet 1",
      genreId: genre1.id,
      subgenreId: subgenre1.id,
      terminated_description: "Le projet 1 est terminé",
    },
  });

  const project2 = await prisma.project.create({
    data: {
      title: "Projet 2",
      description:
        "Description du projet 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
      status: "CHANTIER",
      clientId: client2.id,
      target: "Rénovation de la place",
      preview: "c'est le projet 2",
      genreId: genre2.id,
      subgenreId: subgenre7.id,
    },
  });

  const project3 = await prisma.project.create({
    data: {
      title: "Projet 3",
      description:
        "Description du projet 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui.",
      status: "ETUDE",
      clientId: client3.id,
      target: "Aménagement du parc",
      preview: "c'est le projet 3",
      genreId: genre3.id,
      subgenreId: subgenre4.id,
    },
  });

  const member1 = await prisma.member.create({
    data: {
      name: "Membre 1",
      position: "Associé",
      description: "Description du membre 1",
    },
  });
  const member2 = await prisma.member.create({
    data: {
      name: "Membre 2",
      position: "Associé",
      description: "Description du membre 2",
    },
  });
  const member3 = await prisma.member.create({
    data: {
      name: "Membre 3",
      position: "Architecte",
      description: "Description du membre 3",
    },
  });
  const member4 = await prisma.member.create({
    data: {
      name: "Membre 4",
      position: "Architecte",
      description: "Description du membre 4",
    },
  });
  const member5 = await prisma.member.create({
    data: {
      name: "Membre 5",
      position: "Architecte",
      description: "Description du membre 5",
    },
  });
  const member6 = await prisma.member.create({
    data: {
      name: "Membre 6",
      position: "Architecte",
      description: "Description du membre 6",
    },
  });

  const company1 = await prisma.company.create({
    data: {
      name: "agua",
      logo: "https://www.agua.com/logo.png",
      email: "contact@agua.be",
      phone: 123456789,
      fax: 123456789,
      address: "Rue de la Loi 1",
      locality: "Bruxelles",
      postalCode: 1000,
      about_team:
        "Créé en 1980 par des architectes issus du groupe UA, en charge de la conception urbanistique de Louvain-la-Neuve, AGUA s’est positionné de prime abord comme un bureau spécialisé en architecture et urbanisme. Au fil des ans, AGUA a étendu ses activités à l’aménagement et l'équipement de l'espace public, traitement d’espaces touristiques, création et design d’équipement en mobilier urbain et éclairage public. En 2002, deux nouveaux associés ont rejoint Yves Rahir au sein d’AGUA et ont donné à la société une nouvelle envergure et une structure élargie.",
      about_company:
        "Le bureau AGUA pratique avec souplesse et créativité les quatre disciplines dans lesquelles il excelle. Il compte aujourd’hui 9 collaborateurs intégrés (designers industriels, urbanistes, architectes, paysagistes) et fait appel, en fonction des besoins, à des collaborateurs extérieurs (sociologues, métreurs ou géomètres).",
      about_references:
        "Le bureau Agua de par l’expérience de ses associés et collaborateurs peut faire état d’une grande diversité d’interventions concrètes sur le territoire wallon et bruxellois. Partant de l’approche urbanistique d’un territoire urbain ou rural, dont Agua étudie les éléments de morphologie spatiale et sociale, pour en définir les potentialités et pour proposer des options directrices d’aménagement, le bureau d’étude poursuit généralement sa mission en définissant, par étapes successives, le cadre physique de plus en plus précis, le cadre de vie de ceux qui l’utiliseront demain. Allant ainsi du global au détail, Agua travaille à chaque niveau d’intervention pour les compétences qu’il ne maîtrise pas, en association ou en appelant à la sous-traitance. La liste, ci-dessous, met en évidence les différents métiers du bureau (sociologie urbaine, urbanisme, architecture, aménagements d’espaces publics, design d’équipements urbains, éclairagisme, paysagisme, signalétique) qui ont pu s’épanouir au fil du temps et d’expériences concrètes dans le cadre de projets ‘‘globaux’’ où se marient cette interdisciplinarité en démontrant l’intérêt pour la cohérence des réalisations. ",
    },
  });

  const reference1 = await prisma.reference.create({
    data: {
      title: "Reference 1",
      description: "Description de la reference 1",
      projectId: project1.id,
      clientId: client1.id,
      type: "client",
      date: new Date(),
    },
  });

  const reference2 = await prisma.reference.create({
    data: {
      title: "Reference 2",
      description: "Description de la reference 2",
      projectId: project2.id,
      clientId: client2.id,
      type: "client",
      date: new Date(),
    },
  });

    const reference3 = await prisma.reference.create({
        data: {
        title: "Reference 3",
        description: "Description de la reference 3",
        projectId: project3.id,
        clientId: client3.id,
        type: "client",
        date: new Date(),
        },
    });

    const reference4 = await prisma.reference.create({
        data: {
        title: "Reference 4",
        description: "Description de la reference 4",
        clientId: client1.id,
        type: "client",
        date: new Date(),
        },
    });


}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
