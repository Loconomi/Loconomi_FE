import React from 'react';
import styled from 'styled-components';
import FilterOption from './FilterOption';

const FilterModal = ({
  isOpen,
  categories,
  regions,
  selectedCategory,
  selectedRegion,
  onCategorySelect,
  onRegionSelect,
  onClose,
}) => isOpen && (
  <Modal>
    <Content>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Section>
        <Title>카테고리 선택</Title>
        <Options>
          {categories.map((category) => (
            <FilterOption
              key={category}
              selected={selectedCategory === category}
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </FilterOption>
          ))}
        </Options>
      </Section>
      <Section>
        <Title>지역 선택</Title>
        <Options>
          {regions.map((region) => (
            <FilterOption
              key={region}
              selected={selectedRegion === region}
              onClick={() => onRegionSelect(region)}
            >
              {region}
            </FilterOption>
          ))}
        </Options>
      </Section>
      <ApplyButton onClick={onClose}>적용하기</ApplyButton>
    </Content>
  </Modal>
);

export default FilterModal;

const Modal = styled.div`
  position: fixed;
  top: -2rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.2rem;
  width: 90%;
  max-width: 350px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  width: 1.7rem;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme }) => theme.colors.orange};
  border: 2.5px solid ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 0.95rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1.8rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3); 
`;
