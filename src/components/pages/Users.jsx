import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import { useLocation } from "react-router-dom";

const users = [...Array(10).keys()].map((i) => {
  return {
    id: i,
    name: `WATER-${i}`,
    image: "https://source.unsplash.com/r0SRBsuxwlA",
    mail: "test@gmail.com",
    phone: "000-0000-0000",
    company: {
      name: "RIVER"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <SUserArea>
        <h2>User List</h2>
        <SearchInput />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
