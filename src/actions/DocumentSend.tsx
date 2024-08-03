import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentSend = (
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
      d="M4 0C2.355 0 1 1.355 1 3v10c0 1.645 1.355 3 3 3h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1h5.586L13 5.414V13c0 .57-.43 1-1 1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1c1.645 0 3-1.355 3-3V5a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 10 0zm4 6a1 1 0 0 0-.707.293l-3 3a1 1 0 1 0 1.414 1.414L7 9.414V16h2V9.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3A1 1 0 0 0 8 6m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentSend)
export default ForwardRef