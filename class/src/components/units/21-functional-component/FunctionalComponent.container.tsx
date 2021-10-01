import FunctionalComponentUI from "./FunctionalComponent.presenter"


export default function FunctionalComponent() { 

  // return <FunctionalComponentUI count={123} school="다람초"/>
  return (
    <>
      {FunctionalComponentUI({ count :123, school: "다람초"})}
    </>
  )

}