import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentSave = (
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
      d="M8 0c-.55 0-1 .45-1 1v8.586L5.707 8.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L9 9.586V1c0-.55-.45-1-1-1M1 14v2h14v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentSave)
export default ForwardRef