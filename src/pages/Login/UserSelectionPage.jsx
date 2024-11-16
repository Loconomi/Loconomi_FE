import React from 'react';
import styled from 'styled-components';

const UserSelectionPage = () => {
  const options = [
    { emoji: '👨🏻‍🌾', label: '농산물 생산자' },
    { emoji: '🧑🏻‍🍳', label: '요식업 종사자' },
    { emoji: '🙋🏻‍♀️', label: '일반 사용자' },
  ];

  return (
    <Container>
      <Title><User>사용자</User>를 선택해 주세요.</Title>
      <Options>
        {options.map((option, index) => (
          <Option key={index}>
            <Emoji>{option.emoji}</Emoji>
            <OptionText>{option.label}</OptionText>
          </Option>
        ))}
      </Options>
    </Container>
  );
};

export default UserSelectionPage;

const Container = styled.div`
  width: 100%;
  height: 100vh; /* 전체 뷰포트 높이를 차지하도록 변경 */
  max-width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem 0;
  padding-Bottom: 7.5rem;
`;

const Title = styled.h1`
  font-size: 1.25rem; 
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3rem; 
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem; 
  flex-wrap: wrap;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem; 
  border: 0.125rem solid ${({ theme }) => theme.colors.orange};
  border-radius: 0.625rem;
  width: 5.203rem; 
  height: 7rem;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); 

  &:hover {
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2); 
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

const User = styled.span`
  font-size: 1.25rem; 
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 3rem; 
`;

const Emoji = styled.span`
  font-size: 2.8rem; 
  margin-bottom: 0.85rem; 
`;

const OptionText = styled.p`
  font-size: 0.688rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;