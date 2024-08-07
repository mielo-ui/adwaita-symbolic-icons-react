import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceRaspberry = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.558 0 1.031.473 1.031 1.031V7c0 .558-.473 1-1.031 1s-1-.442-1-1v-.969C5 5.473 5.442 5 6 5m4 0c.558 0 1 .473 1 1.031V7c0 .558-.442 1-1 1s-1-.442-1-1v-.969C9 5.473 9.442 5 10 5M3 9.063c.997.636 4.016.937 5 .937.492 0 1.429.015 2.406-.094.978-.108 1.996-.36 2.594-.843v.5c0 .441-.753.919-2.156 1.187l.25.531c.279.604.083 1.276-.438 1.532l-.25.125c-.52.255-1.175-.03-1.469-.625l-.624-1.282c-.018-.034-.02-.035-.032-.062H8c-3.256 0-5-.874-5-1.406z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceRaspberry)
export default ForwardRef