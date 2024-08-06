import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const VideoJoinedDisplays = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.5 2c-1.219 0-2.246.898-2.457 2.063A2.3 2.3 0 0 0 6.5 4h-4A2.52 2.52 0 0 0 0 6.5v3C0 10.867 1.133 12 2.5 12h4c.562 0 1.082-.191 1.5-.512.418.32.937.512 1.5.512h4c1.367 0 2.5-1.133 2.5-2.5v-5C16 3.133 14.867 2 13.5 2zm0 2h4c.293 0 .5.207.5.5v5a.48.48 0 0 1-.5.5h-4a.48.48 0 0 1-.5-.5v-5c0-.293.207-.5.5-.5m-7 2h4c.293 0 .5.207.5.5v3a.48.48 0 0 1-.5.5h-4a.48.48 0 0 1-.5-.5v-3c0-.293.207-.5.5-.5m.5 7c-.555 0-1 .445-1 1h5c0-.555-.445-1-1-1zm7 0c-.555 0-1 .445-1 1h5c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(VideoJoinedDisplays)
export default ForwardRef