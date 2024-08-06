import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CameraVideo = (
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
      d="M7 3C5.355 3 4 4.355 4 6v1.426L.68 3.992H0v9h.645L4 9.5V11c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V6c0-1.645-1.355-3-3-3zm0 2h6c.57 0 1 .43 1 1v5c0 .57-.43 1-1 1H7c-.57 0-1-.43-1-1V6c0-.57.43-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CameraVideo)
export default ForwardRef