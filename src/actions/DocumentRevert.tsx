import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentRevert = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 0C2.355 0 1 1.355 1 3v10c0 1.645 1.355 3 3 3h7c.55 0 1-.45 1-1s-.45-1-1-1H4c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1h5.586L13 5.414V6c0 .55.45 1 1 1s1-.45 1-1V5a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 10 0zm5 5a1 1 0 0 0-.707.293l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 1 0 1.414-1.414L8.414 10H11c1.117 0 2 .883 2 2v4h2v-4c0-2.2-1.8-4-4-4H8.414l1.293-1.293A1 1 0 0 0 9 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentRevert)
export default ForwardRef