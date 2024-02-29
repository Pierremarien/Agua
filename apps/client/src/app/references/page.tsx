import React from "react";
import { referencesData, clientData } from "../fakeData";
import { List } from "@agua/ui";

const Refs = () => {
  return (
    <main className="min-h-screen">
      <List references={referencesData} hideChevron={true} clients={clientData} />
    </main>
  );
};

export default Refs;
