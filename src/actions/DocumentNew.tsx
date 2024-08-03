import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentNew = (
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
      d="M4 0C2.355 0 1 1.355 1 3v10c0 1.645 1.355 3 3 3h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.57 0-1-.43-1-1V3c0-.57.43-1 1-1h5.586L13 5.414V6c0 .55.45 1 1 1s1-.45 1-1V5a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 10 0zm7 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentNew)
export default ForwardRef