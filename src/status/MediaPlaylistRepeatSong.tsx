import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaPlaylistRepeatSong = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M7 1v2H4C1.8 3 0 4.8 0 7v2a4 4 0 0 0 1.02 2.672 1 1 0 1 0 1.488-1.336A1.97 1.97 0 0 1 2 9V7c0-1.125.875-2 2-2h3v2h1v-.008a1 1 0 0 0 .707-.285l2-2c.207-.207.313-.496.29-.789a.2.2 0 0 0-.009-.047.9.9 0 0 0-.09-.305c0-.007-.003-.011-.007-.02-.012-.023-.028-.046-.04-.07l-.027-.039q-.02-.03-.043-.062l-.023-.023a1 1 0 0 0-.051-.059l-2-2A1 1 0 0 0 8 1.008V1zm7 1a2 2 0 1 0 2 2c0-1.105-.895-2-2-2m1 5c-.55 0-1 .45-1 1v1.008c0 1.125-.875 2-2 2H8V9H7v.008a1 1 0 0 0-.707.285l-2 2a1 1 0 0 0 0 1.414l2 2c.187.184.441.29.707.285V15h1v-1.992h4c2.2 0 4-1.805 4-4V8c0-.55-.45-1-1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaPlaylistRepeatSong)
export default ForwardRef