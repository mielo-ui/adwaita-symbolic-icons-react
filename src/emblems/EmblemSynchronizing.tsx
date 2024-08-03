import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmblemSynchronizing = (
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
      d="M7.863 1q-.404.007-.8.063A7 7 0 0 0 1.938 4.5a.994.994 0 0 0 .367 1.363.996.996 0 0 0 1.363-.363 5.002 5.002 0 0 1 8.914.5H11c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1s-1 .45-1 1v1.398A7.01 7.01 0 0 0 7.863 1M1 8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-1.395a7 7 0 0 0 12.063-.105.994.994 0 0 0-.368-1.363.97.97 0 0 0-.758-.102.99.99 0 0 0-.609.465 4.996 4.996 0 0 1-8.91-.5H5c.55 0 1-.45 1-1s-.45-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmblemSynchronizing)
export default ForwardRef