import {
  SmileOutlined,
} from "@ant-design/icons";
import {
  BoardWrapper,
  ContentsWrapper,
  ContentsBox,
  Title,
  IconX,
  TopBar,
  IconY,
  ProductBox,
  Label,
} from "./boardwrite.styles";
import Input02 from '../../../../commons/inputs/02/Input'

export default function BoardWritePageUI(props) { 

  return (
    <BoardWrapper>
      <ContentsWrapper>
        <TopBar>
          <Title>
            <SmileOutlined /> New Product
          </Title>
          <div>
            <IconY />
            <IconX />
          </div>
        </TopBar>
        <ContentsBox>
          <Title>NEW PRODUCT</Title>
          <Input02
            name="Product Name :"
            onChange={props.onChangeName}
          ></Input02>
          <Input02 name="Simple explanation :"></Input02>
          <div>
            <Label>Product : </Label>
            <ProductBox></ProductBox>
          </div>
          <Input02 name="Price :"></Input02>
          <Input02 name="Tag :"></Input02>
        </ContentsBox>
      </ContentsWrapper>
    </BoardWrapper>
  );
}