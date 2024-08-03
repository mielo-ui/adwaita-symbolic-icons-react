import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FolderDocuments = (
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
      d="M5 1C3.355 1 2 2.355 2 4v9c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V5.5a1 1 0 0 0-.293-.707l-3.5-3.5A1 1 0 0 0 9.5 1zm0 2h4v1.5Q9 6 10.5 6H12v7c0 .57-.43 1-1 1H5c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FolderDocuments)
export default ForwardRef