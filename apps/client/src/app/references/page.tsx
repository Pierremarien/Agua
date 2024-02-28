import React from "react";
import { referencesData, clientData } from "../fakeData";
import { List } from "@agua/ui";

const Refs = () => {
  return (
    <div>
      <List references={referencesData} isLarge={true} clients={clientData} />
    </div>
  );
};

export default Refs;
