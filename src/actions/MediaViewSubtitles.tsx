import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaViewSubtitles = (
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
      d="M3 1C1.355 1 0 2.355 0 4v8c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v8c0 .555-.5 1-1 1H3c-.57 0-1-.43-1-1V4c0-.555.445-1 1-1m0 6v1h4V9zm5 0v1h3V9zm4 0v1h1V9zm-9 2v1h2v-1zm3 0v1h3v-1zm4 0v1h3v-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaViewSubtitles)
export default ForwardRef