import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const kakao = window.kakao;
    const container = mapRef.current; // 지도를 담을 영역의 DOM 참조

    // 지도를 생성할 때 필요한 기본 옵션
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, //
    };

    new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <MapContainer ref={mapRef}></MapContainer>
    </>
  );
}

export default Map;

const MapContainer = styled.div`
    width: 390px;
    max-width: 390px;
    height: 566px;
`;
