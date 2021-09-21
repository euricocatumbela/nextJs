import styled from "styled-components";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
  //   console.log(data);
};
const IndexPage = ({ users }) => {
  return (
    <Wrapper>
      <Title>Others page</Title>
      <div>
        {users.map((user) => (
          <Link href={"/others/" + user.id} key={user.id}>
            <a>{user.name}</a>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  margin: 20px 0 0 0;
  a {
    display: grid;
    grid-row: 300px;
  }
`;
const Title = styled.h1`
  color: red;
  font-size: 40px;
`;
