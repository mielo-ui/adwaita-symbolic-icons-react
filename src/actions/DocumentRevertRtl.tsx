import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentRevertRtl = (
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
      d="M4 0C2.355 0 1 1.355 1 3v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.57.43-1 1-1h5.586L13 5.414V13c0 .57-.43 1-1 1H5c-.55 0-1 .45-1 1s.45 1 1 1h7c1.645 0 3-1.355 3-3V5a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 10 0zm3 5a1 1 0 0 0-.707 1.707L7.586 8H5c-2.195 0-4 1.8-4 4v4h2v-4c0-1.117.883-2 2-2h2.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3A1 1 0 0 0 7 5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentRevertRtl)
export default ForwardRef