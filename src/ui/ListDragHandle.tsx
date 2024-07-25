import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ListDragHandle = (
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
      d="M4.496 0c-.832 0-1.5.672-1.5 1.5S3.664 3 4.496 3a1.5 1.5 0 0 0 0-3m6 0c-.832 0-1.5.672-1.5 1.5s.668 1.5 1.5 1.5a1.5 1.5 0 0 0 0-3m-6 6c-.832 0-1.5.672-1.5 1.5S3.664 9 4.496 9a1.5 1.5 0 0 0 0-3m6 0c-.832 0-1.5.672-1.5 1.5s.668 1.5 1.5 1.5a1.5 1.5 0 0 0 0-3m-6 6c-.832 0-1.5.672-1.5 1.5s.668 1.5 1.5 1.5a1.5 1.5 0 0 0 0-3m6 0c-.832 0-1.5.672-1.5 1.5s.668 1.5 1.5 1.5a1.5 1.5 0 0 0 0-3m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ListDragHandle)
export default ForwardRef