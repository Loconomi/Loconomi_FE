import styled from 'styled-components';
import RightButton from '../../assets/image/restaurant/right.png';

const RestaurantModalSection = ({ description, name, image }) => {
  return (
    <Container>
      <MenuSection>
        <Image src={image} />
        <Description>
          {description}
        </Description>
        <ButtonImage src={RightButton} />
      </MenuSection>
      <InfoSection>
        <OtherMenu name={name} />
        <Guide />
      </InfoSection>
    </Container>
  );
};

export default RestaurantModalSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const MenuSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 120px;
    background-color: #FFF7EC;
    border-radius: 8px;
`;

const Image = styled.img`
    border-radius: 100px;
    width: 50px;
    height: 50px;
`;

const ButtonImage = styled.img`
    width: 30px;
    height: 30px;

`;

const Description = styled.div`
    display: flex;
    gap: 20px;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;

`;

const OtherMenu = styled.div`
    display: flex;
    font-size: 16px;
    border-radius: 8px;

    width: 50%;
    height: 120px;
    background-color: #FFF7EC;

`;

const Guide = styled.div`
    display: flex;
    font-size: 16px;
    width: 50%;
    height: 120px;
    background-color: #FFF7EC;
    border-radius: 8px;

`;


