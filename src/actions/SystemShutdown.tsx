import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const SystemShutdown = (
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
      d="M8 0c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1V1c0-.55-.45-1-1-1M4.863 1.816a1 1 0 0 0-.367.125 7.01 7.01 0 0 0-3.258 7.872A7.01 7.01 0 0 0 7.988 15a7.01 7.01 0 0 0 6.766-5.168c.828-3.05-.5-6.289-3.23-7.879a.994.994 0 0 0-1.368.36c-.133.226-.172.5-.105.757.07.258.234.477.465.61a5 5 0 1 1-7.344 5.613 4.99 4.99 0 0 1 2.324-5.621.997.997 0 0 0 .363-1.363 1.008 1.008 0 0 0-.996-.492m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(SystemShutdown)
export default ForwardRef