import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FolderDragAccept = (
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
      d="M3 0C1.355 0 0 1.355 0 3v10c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3H9.414L7.707.293A1 1 0 0 0 7 0zm0 2h3.586l1.707 1.707A1 1 0 0 0 9 4h4c.563 0 1 .437 1 1v5H2V3c0-.562.438-1 1-1M2 12h12v1c0 .563-.437 1-1 1H3c-.562 0-1-.437-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FolderDragAccept)
export default ForwardRef