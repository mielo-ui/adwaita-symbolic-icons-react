import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewListBulletRtl = (
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
      d="M13.5 2.008s.5.222.5.5v.988c0 .274-.5.5-.5.5h-1s-.5-.226-.5-.5v-.988c0-.278.5-.5.5-.5zm-4 0c.277 0 .5.222.5.5v.988c0 .274-.223.5-.5.5h-8a.5.5 0 0 1-.5-.5v-.988c0-.278.223-.5.5-.5zm4 5s.5.222.5.5v.988c0 .274-.5.5-.5.5h-1s-.5-.226-.5-.5v-.988c0-.278.5-.5.5-.5zm-4 0s.5.222.5.5v.988c0 .274-.223.5-.5.5h-8a.5.5 0 0 1-.5-.5v-.988c0-.278.5-.5.5-.5zm4 5c.277 0 .5.222.5.5v.988c0 .274-.5.5-.5.5h-1s-.5-.226-.5-.5v-.988c0-.278.223-.5.5-.5zm-4 0c.277 0 .5.222.5.5v.988c0 .274-.223.5-.5.5h-8a.5.5 0 0 1-.5-.5v-.988c0-.278.223-.5.5-.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewListBulletRtl)
export default ForwardRef