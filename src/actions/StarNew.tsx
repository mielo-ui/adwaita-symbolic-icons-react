import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const StarNew = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.402 0a.8.8 0 0 0-.761.547L4.48 4.02.808 4.004C.023 4-.297 5.008.344 5.457l2.902 2.047-1.2 3.43c-.257.718.552 1.351 1.192.933l3.2-2.074.308.207H10V8.785l-.45-1.281.583-.414 2.332-1.649c.633-.449.316-1.445-.461-1.449L8.28 3.977 7.161.55A.81.81 0 0 0 6.401 0M11 8v3H8v2h3v3h2v-3h3v-2h-3V8zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(StarNew)
export default ForwardRef