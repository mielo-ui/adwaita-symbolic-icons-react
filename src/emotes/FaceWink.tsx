import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceWink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    ref={ref}
    {...props}
  >
    <path
      fill="#474747"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.559 0 1.031.473 1.031 1.031V7c0 .558-.472 1-1.03 1-.56 0-1-.442-1-1v-.969C5 5.473 5.44 5 6 5m3.438 1h.906c.522 0 .969.216.969.5s-.447.5-.97.5h-.905c-.523 0-.938-.216-.938-.5s.415-.5.938-.5M3 9.063C3.716 10.136 5.235 11 8 11c2.452 0 4.211-.75 5-1.938v.5c0 .681-.838 2.407-5 2.407-3.88 0-5-1.874-5-2.406z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceWink)
export default ForwardRef