import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmblemPhotos = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m3.5 3-2 2L6 9l-2 2v.5c0 .5.5.5.5.5h7s.473-.035.5-.5v-1zm0 0" />
      <path d="M4 1C2.355 1 1 2.355 1 4v8c0 1.645 1.355 3 3 3h8c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm0 2h8c.57 0 1 .43 1 1v8c0 .57-.43 1-1 1H4c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EmblemPhotos)
export default ForwardRef