import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaPlaylistRepeat = (
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
      d="M8 1v2H4C1.8 3 0 4.8 0 7v2a4 4 0 0 0 1.02 2.672 1 1 0 1 0 1.488-1.336A1.97 1.97 0 0 1 2 9V7c0-1.125.875-2 2-2h4v2h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 9 1.008V1zm6.29 3a1 1 0 0 0-.72.258.993.993 0 0 0-.078 1.41c.317.355.508.816.508 1.34v2c0 1.125-.875 2-2 2H8V9H7v.008a1 1 0 0 0-.707.285l-2 2a1 1 0 0 0 0 1.414l2 2c.187.184.441.29.707.285V15h1v-1.992h4c2.2 0 4-1.805 4-4v-2a4 4 0 0 0-1.02-2.676A1 1 0 0 0 14.29 4m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaPlaylistRepeat)
export default ForwardRef