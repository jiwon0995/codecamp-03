import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 996px;
  
  display: flex;
  justify-content: space-between;
  /* align-items:  */
  margin-top: 30px;
`;
export const AddressInput = styled.input`
  width: 588px;
  height: 52px;
  margin: 10px 0px;
`;
export const Label = styled.div`
  padding-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  font-family: "myfont";
`;
export const Map = styled.div`
  width: 384px;
  height: 252px;
  background-color: #6c6c6c;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
`;

export const GPSInput = styled.input`
  width: 108px;
  height: 52px;
  margin-right: 15px;
`;
export const GPSBox = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
`;
export default function Address() {
  return (
    <Wrapper>
      <ContentsBox>
        <Label>Location</Label>
        <Map></Map>
      </ContentsBox>
      <ContentsBox>
        
          <Label>GPS</Label>
          <GPSBox>
            <GPSInput />
            <GPSInput />
          </GPSBox>
          <ContentsBox>
            <Label>Address</Label>
            <AddressInput />
            <AddressInput />
          </ContentsBox>
        
      </ContentsBox>
    </Wrapper>
  );
}
