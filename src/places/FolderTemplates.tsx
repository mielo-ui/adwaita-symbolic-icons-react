import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FolderTemplates = (
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
      d="M5 1C3.355 1 2 2.355 2 4v6.996h1V10h1V4c0-.57.43-1 1-1h4v1.5Q9 6 10.5 6H12v7h1v1h1V5.5a1 1 0 0 0-.293-.707l-3.5-3.5A1 1 0 0 0 9.5 1zm8 13h-1v.992h-1v1h1V15h1zm-2 .992v-1h-1v1zm-1 0H9v1h1zm-1 0v-1H8v1zm-1 0H7v1h1zm-1 0v-1H6v1zm-1 0H5v1h1zm-1 0v-1H4v1zm-1 0H3v1h1zm-1 0v-1H2v1zm0-1h1v-1H3zm0-1v-1H2v1zm0-1h1v-1H3zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FolderTemplates)
export default ForwardRef