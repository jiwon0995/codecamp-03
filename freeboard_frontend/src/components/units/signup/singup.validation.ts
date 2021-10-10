import * as yup from "yup"

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("올바른 이메일 형식이 아닙니다.")
    .required("필수 정보입니다."),
  password: yup
    .string()
    .min(6, "비밀번호는 6~16자 입니다.")
    .max(16, "비밀번호는 6~16자 입니다.")
    .required("필수 정보입니다."),
  password2: yup
    .string()
    .min(6, "비밀번호는 6~16자 입니다.")
    .max(16, "비밀번호는 6~16자 입니다.")
    .required("필수 정보입니다."),
  name: yup
    .string()
    .required("필수 정보입니다.")
})