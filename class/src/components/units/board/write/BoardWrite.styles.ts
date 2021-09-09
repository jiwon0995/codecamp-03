import styled from '@emotion/styled'

interface ITitleprops {
  zzz: boolean
}
interface IBurronprops { 
  qqq: boolean
}



export const MyButton = styled.button`
  background-color: ${(props: ITitleprops) => (props.qqq) === true ? 'yellow' : 'gray'};
  
`


export const Title = styled.h1`
  color: ${(props: IBurronprops) => (props.qqq) === true ? 'blue' : 'yellow'}
`