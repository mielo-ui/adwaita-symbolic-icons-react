import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Starred = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 0a1 1 0 0 0-.95.684l-1.448 4.34-4.59-.016C.032 5.004-.371 6.266.43 6.828l3.625 2.555-1.5 4.285c-.317.902.687 1.691 1.492 1.172l4.004-2.594 3.894 2.586c.801.531 1.817-.258 1.5-1.16l-1.504-4.29 3.645-2.577c.789-.563.394-1.809-.574-1.813l-4.66-.015L8.949.69A1 1 0 0 0 8 0m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Starred)
export default ForwardRef