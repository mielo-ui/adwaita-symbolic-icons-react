import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ApplicationsUtilities = (
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
      d="M2.934 0C1.309 0 0 1.332 0 2.988v10.028C0 14.668 1.309 16 2.934 16h.132C4.691 16 6 14.668 6 13.016V2.988C6 1.332 4.691 0 3.066 0zm2.593 0c.88.715 1.47 1.793 1.47 3v1H9.12c-.074-1.094 1.25-2 2-2 .68 0 1 .012 1 1v1h1.219c1.23-.602 1.781-1.969 1.781-2.687C15.121.578 12.734 0 11.434 0zM7 5v4.313c2.766 2.66 6.125 2.406 6.125 2.406s.352-1.52-1.906-4.031L8.844 5H7.063c-.02.004-.043-.004-.063 0m2.977 2.531L11.66 9.27c-1.8.164-2.152-.86-1.683-1.739m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ApplicationsUtilities)
export default ForwardRef