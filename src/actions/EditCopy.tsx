import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditCopy = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M0 3c0-1.645 1.355-3 3-3h5c1.645 0 3 1.355 3 3 0 .55-.45 1-1 1s-1-.45-1-1c0-.57-.43-1-1-1H3c-.57 0-1 .43-1 1v5c0 .57.43 1 1 1 .55 0 1 .45 1 1s-.45 1-1 1c-1.645 0-3-1.355-3-3zm5 5c0-1.645 1.355-3 3-3h5c1.645 0 3 1.355 3 3v5c0 1.645-1.355 3-3 3H8c-1.645 0-3-1.355-3-3zm2 0v5c0 .57.43 1 1 1h5c.57 0 1-.43 1-1V8c0-.57-.43-1-1-1H8c-.57 0-1 .43-1 1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EditCopy)
export default ForwardRef