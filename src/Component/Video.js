import { useRef, useImperativeHandle, forwardRef } from "react";
import video from "./Video/download.mp4";
function Video(prop, ref) {
  const videoRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      play() {
        videoRef.current.play();
      },
      pause() {
        videoRef.current.pause();
      },
    }),
    []
  );

  return <video ref={videoRef} style={{ width: "200px" }} src={video}></video>;
}
export default forwardRef(Video);
