import { SmileOutlined } from "@ant-design/icons";
import {
  BoardWrapper,
  ContentsWrapper,
  ContentsBox,
  Title,
  IconX,
  TopBar,
  IconY,
  Label,
  ImgWrapper,
  Img,
  RadioButton,
  RadioLabel,
  RadioWrpper,
  SubmitButton,
  ErrorMessage,
  ReactQuillStyled,
  AddressInput,
} from "./boardwrite.styles";
import Input02 from "../../../../commons/inputs/02/Input";
import Address from "../../../../commons/Address/Address";
import Uploads02 from "../../../../commons/uploads/02/Upload02.container";

export default function BoardWritePageUI(props: any) {
  return (
    <BoardWrapper>
      <ContentsWrapper>
        <TopBar>
          <SmileOutlined />
          <Title>{props.isEdit ? "New Product" : "Edit Product"}</Title>
          <div>
            <IconY />
            <IconX />
          </div>
        </TopBar>
        <form
          onSubmit={
            props.isEdit
              ? props.handleSubmit(props.onClickUsedItem)
              : props.handleSubmit(props.onClickUpdate)
          }
        >
          <ContentsBox>
            <Title>{props.isEdit ? "NEW PRODUCT" : "EDIT PRODUCT"}</Title>
            <Input02
              name="Product Name"
              type="text"
              register={props.register("name")}
              formState={props.formState.errors.name?.message}
              defaultValue={props.data?.fetchUseditem.name}
            ></Input02>
            <Input02
              name="Simple explanation"
              type="text"
              register={props.register("remarks")}
              formState={props.formState.errors.remarks?.message}
              defaultValue={props.data?.fetchUseditem.remarks}
            ></Input02>
            <div>
              <Label>Product</Label>
              <ReactQuillStyled
                onChange={props.onChangeMyEditer}
                value={props.contents || ""}
              />
              <ErrorMessage>
                {props.formState.errors.contents?.message}
              </ErrorMessage>
            </div>
            <Input02
              name="Price"
              type="text"
              register={props.register("price")}
              formState={props.formState.errors.price?.message}
              defaultValue={props.data?.fetchUseditem.price}
            ></Input02>
            <Input02
              name="Tag"
              defaultValue={props.data?.fetchUseditem.tags}
            ></Input02>
            <Address
              onChangeLat={props.onChangeLat}
              onChangeLng={props.onChangeLng}
              LAT={props.LAT}
              LNG={props.LNG}
              data={props.data}
              setAddress={props.setAddress}
              setAddressDetail={props.setAddressDetail}
            />
            <Img>
              <Label>Img</Label>
              <ImgWrapper>
                {/* 몇 번째 이미지인지 구분하기 위해서 index사용 */}
                {new Array(3).fill(1).map((el, index) => (
                  <Uploads02
                    key={`${el}_${index}`}
                    index={index}
                    fileUrl={el}
                    onChangeFiles={props.onChangeFiles}
                    defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
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
            {props.isEdit ? (
              <SubmitButton type="submit">SUBMIT</SubmitButton>
            ) : (
              <SubmitButton type="submit">EDIT</SubmitButton>
            )}
          </ContentsBox>
        </form>
      </ContentsWrapper>
    </BoardWrapper>
  );
}
