import ReactPlayer from "react-player";
import styled from "@emotion/styled"

const MyYoutube = styled(ReactPlayer)`
  border: 3px solid black;
  /* margin: 150px;
  width: 100px;
  height: 100px; */
`

export default function LibraryYoutubePage() { 

  return <MyYoutube
    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
  />;
}