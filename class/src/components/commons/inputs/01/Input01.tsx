export default function input01(props) { 

  return (
    <input type={props.type} {...props.register} />
  )
}