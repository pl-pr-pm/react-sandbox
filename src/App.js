import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

const user = {
  name: "WATER",
  image: "https://source.unsplash.com/r0SRBsuxwlA",
  mail: "test@gmail.com",
  phone: "000-0000-0000",
  company: {
    name: "RIVER"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      </DefaultLayout>
        <PrimaryButton>TEST</PrimaryButton>
        <SecondaryButton>TEST2</SecondaryButton>
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
