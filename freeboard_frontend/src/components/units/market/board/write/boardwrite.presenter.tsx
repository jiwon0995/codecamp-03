import { SmileOutlined } from "@ant-design/icons";
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
  ImgBox,
  ImgWrapper,
  Img,
  RadioButton,
  RadioLabel,
  RadioWrpper,
  SubmitButton,
  ErrorMessage,
  ReactQuillStyled,
} from "./boardwrite.styles";
import Input02 from "../../../../commons/inputs/02/Input";
import Address from "../../../../commons/Address/Address";
import Uploads02 from '../../../../commons/uploads/02/Upload02.container'

export default function BoardWritePageUI(props: any) {
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
        <form onSubmit={props.handleSubmit(props.onClickUsedItem)}>
          <ContentsBox>
            <Title>NEW PRODUCT</Title>
            <Input02
              name="Product Name"
              type="text"
              register={props.register("name")}
              formState={props.formState.errors.name?.message}
            ></Input02>
            <Input02
              name="Simple explanation"
              type="text"
              register={props.register("remarks")}
              formState={props.formState.errors.remarks?.message}
            ></Input02>
            <div>
              <Label>Product</Label>
              <ReactQuillStyled onChange={props.onChangeMyEditer} />
              <ErrorMessage>
                {props.formState.errors.contents?.message}
              </ErrorMessage>
            </div>
            <Input02
              name="Price"
              type="text"
              register={props.register("price")}
              formState={props.formState.errors.price?.message}
            ></Input02>
            <Input02 name="Tag"></Input02>
            <Address />
            <Img>
              <Label>Img</Label>
              <ImgWrapper>
                {/* 몇 번째 이미지인지 구분하기 위해서 index사용 */}
                {props.fileUrls.map((el, index) => (
                  <Uploads02
                    key={`${el}_${index}`}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </ImgWrapper>
            </Img>
            <RadioWrpper>
              <Label>Main Image</Label>
              <RadioButton type="radio" name="img"></RadioButton>
              <RadioLabel>Image 1</RadioLabel>
              <RadioButton type="radio" name="img"></RadioButton>
              <RadioLabel>Image 2</RadioLabel>
            </RadioWrpper>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
          </ContentsBox>
        </form>
      </ContentsWrapper>
    </BoardWrapper>
  );
}
