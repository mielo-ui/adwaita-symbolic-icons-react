import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FolderPublicshare = (
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
      d="M13.031-.004c-1.656 0-3 1.34-3 3 0 .121.012.246.028.367L5.113 5.836a2.998 2.998 0 0 0-5.082 2.16 3 3 0 0 0 3 3 3.02 3.02 0 0 0 2.074-.844l4.954 2.473a3 3 0 0 0-.028.371 3 3 0 1 0 3-3c-.773 0-1.52.305-2.074.844L6.004 8.363c.016-.12.027-.246.027-.367q0-.189-.023-.371l4.945-2.473c.559.535 1.305.84 2.078.844a3 3 0 0 0 0-6m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FolderPublicshare)
export default ForwardRef