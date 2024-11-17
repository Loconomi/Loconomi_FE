import React, { useState } from 'react';
import styled from 'styled-components';
import Shop from '../../assets/image/login/Shop.svg';
import ShopActive from '../../assets/image/login/Shop_active.svg';
import Person from '../../assets/image/login/Person.svg';
import PersonActive from '../../assets/image/login/Person_active.svg';
import Mobile from '../../assets/image/login/Mobile.svg';
import MobileActive from '../../assets/image/login/Mobile_active.svg';
import Pin from '../../assets/image/login/Pin.svg';
import PinActive from '../../assets/image/login/Pin_active.svg';
import ChieldCheck from '../../assets/image/login/ChieldCheck.svg';
import ChieldCheckActive from '../../assets/image/login/ChieldCheck_active.svg';

const RegisterFormPage = () => {
  const [form, setForm] = useState({
    shopName: '',
    representativeName: '',
    contactNumber: '',
    registrationNumber: '',
    address: '',
  });

  const [activeField, setActiveField] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setIsFilled(Object.values({ ...form, [name]: value }).every(field => field !== ''));
  };

  const getIcon = (fieldName) => {
    const isActive = activeField === fieldName || form[fieldName] !== '';
    switch (fieldName) {
      case 'shopName':
        return isActive ? ShopActive : Shop;
      case 'representativeName':
        return isActive ? PersonActive : Person;
      case 'contactNumber':
        return isActive ? MobileActive : Mobile;
      case 'registrationNumber':
        return isActive ? ChieldCheckActive : ChieldCheck;
      case 'address':
        return isActive ? PinActive : Pin;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header><Span>농산물 생산자 등록을<br/></Span> 완료해 주세요</Header>
      <SubText>사업자 정보를 입력해 주세요</SubText>
      <Form>
        <Notice>상호명</Notice>
        <Label isActive={activeField === 'shopName'}>
          <Icon src={getIcon('shopName')} alt="Shop Icon" />
          <Input
            type="text"
            name="shopName"
            placeholder="ex) 농담이네"
            value={form.shopName}
            onChange={handleInputChange}
            onFocus={() => setActiveField('shopName')}
            onBlur={() => setActiveField('')}
            isActive={activeField === 'shopName'}
          />
        </Label>
        
        <Notice>대표자 이름</Notice>
        <Label isActive={activeField === 'representativeName'}>
          <Icon src={getIcon('representativeName')} alt="Person Icon" />
          <Input
            type="text"
            name="representativeName"
            placeholder="ex) 김농"
            value={form.representativeName}
            onChange={handleInputChange}
            onFocus={() => setActiveField('representativeName')}
            onBlur={() => setActiveField('')}
            isActive={activeField === 'representativeName'}
          />
        </Label>
        
        <Notice>고객센터(연락처)</Notice>
        <Label isActive={activeField === 'contactNumber'}>
          <Icon src={getIcon('contactNumber')} alt="Mobile Icon" />
          <Input
            type="text"
            name="contactNumber"
            placeholder="ex) 010-1234-5678"
            value={form.contactNumber}
            onChange={handleInputChange}
            onFocus={() => setActiveField('contactNumber')}
            onBlur={() => setActiveField('')}
            isActive={activeField === 'contactNumber'}
          />
        </Label>
        
        <Notice>사업자 등록 번호</Notice>
        <Label isActive={activeField === 'registrationNumber'}>
          <Icon src={getIcon('registrationNumber')} alt="Chield Check Icon" />
          <Input
            type="text"
            name="registrationNumber"
            placeholder="ex) 1234567890"
            value={form.registrationNumber}
            onChange={handleInputChange}
            onFocus={() => setActiveField('registrationNumber')}
            onBlur={() => setActiveField('')}
            isActive={activeField === 'registrationNumber'}
          />
        </Label>
        
        <Notice>사업자 소재지</Notice>
        <Label isActive={activeField === 'address'}>
          <Icon src={getIcon('address')} alt="Pin Icon" />
          <Input
            type="text"
            name="address"
            placeholder="ex) 서울시 농담구 농담로 10"
            value={form.address}
            onChange={handleInputChange}
            onFocus={() => setActiveField('address')}
            onBlur={() => setActiveField('')}
            isActive={activeField === 'address'}
          />
        </Label>
        
        <SubmitButton isFilled={isFilled}>등록하기</SubmitButton>
      </Form>
    </Container>
  );
};

export default RegisterFormPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 1.3rem;
  padding-top: 6rem;
`;

const Notice = styled.p`
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;

const Header = styled.h1`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.4rem;
`;

const Span = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 1.4rem;
`;

const SubText = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.caption2};
  margin-bottom: 2rem;
`;

const Form = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 0.5rem;
  padding: 0.5rem;
  height: 3.25rem;
  background-color: ${({ isActive }) => (isActive ? '#FFEFD9' : 'white')};
`;

const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ isActive }) => (isActive ? '#FFEFD9' : 'white')};

  ::placeholder {
    color: ${({ theme }) => theme.colors.caption2};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.95rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ isFilled, theme }) => (isFilled ? theme.colors.orange : theme.colors.button)};
  border: none;
  border-radius: 0.5rem;
  cursor: ${({ isFilled }) => (isFilled ? 'pointer' : 'default')};
  margin-top: 1.8rem;
  transition: background-color 0.3s;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3); 

  &:hover {
    background-color: ${({ isFilled, theme }) => (isFilled ? theme.colors.orangeHover : theme.colors.button)};
  }
`;
