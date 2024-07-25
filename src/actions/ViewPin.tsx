import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 0c-.55 0-1 .45-1 1s.45 1 1 1h.14l.516 3.594A5 5 0 0 0 3 10h10a5 5 0 0 0-2.656-4.406L10.855 2H11a1.002 1.002 0 0 0 .707-1.707A1 1 0 0 0 11 0zm2 11v4l1 1 1-1v-4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewPin)
export default ForwardRef