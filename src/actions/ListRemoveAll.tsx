import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ListRemoveAll = (
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
      d="M15 1v2H1V1zm0 4v2H1V5zM7.125 8c.492 0 .875.383.875.875v6.25a.864.864 0 0 1-.875.875H.875A.864.864 0 0 1 0 15.125v-6.25C0 8.383.383 8 .875 8zM15 9v2H9V9zm-8.5 2h-5s-.5 0-.5.5v1c0 .5.5.5.5.5h5s.5 0 .5-.5v-1c0-.5-.5-.5-.5-.5m8.5 2v2H9v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ListRemoveAll)
export default ForwardRef