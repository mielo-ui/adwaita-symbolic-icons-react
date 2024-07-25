import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkError = (
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
      fillOpacity={0.35}
      d="M12 1a1 1 0 0 0-.707 1.707L12.586 4H5c-.55 0-1 .45-1 1s.45 1 1 1h7.586l-1.031 1.031Q11.778 7.007 12 7a5 5 0 0 1 1.996.418l1.711-1.711a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 12 1M4 7a1 1 0 0 0-.707.293l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414L3.414 12H7a5 5 0 0 1 .426-2H3.414l1.293-1.293A1 1 0 0 0 4 7m0 0"
    />
    <path
      fill="#e01b24"
      d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m-2 3h4c.555 0 1 .445 1 1s-.445 1-1 1h-4c-.555 0-1-.445-1-1s.445-1 1-1m0 0"
      className="prefix__error"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkError)
export default ForwardRef