import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 64px;
`;

const Text = styled.p`
  margin-top: 10px;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404</Title>
      <Text>Page Not Found</Text>
    </Wrapper>
  );
};

export default NotFound;