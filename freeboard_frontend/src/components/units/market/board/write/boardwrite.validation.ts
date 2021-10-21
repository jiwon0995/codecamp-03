import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("필수 정보입니다."),
  contents: yup
    .string()
    .required("필수 정보입니다."),
  price: yup
    .number()
    .required("필수 정보입니다.")
    .typeError("숫자만 입력해 주세요."),
  remarks:yup.string().required("필수 정보입니다.")
})