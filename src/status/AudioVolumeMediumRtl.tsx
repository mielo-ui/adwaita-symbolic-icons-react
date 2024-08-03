import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const AudioVolumeMediumRtl = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M9 1.008a.99.99 0 0 1 .77.351L13 5h1c1.094 0 2 .844 2 2v2c0 1.09-.91 2-2 2h-1l-3.23 3.64A.97.97 0 0 1 9 15zm-3.04 2.98A1.004 1.004 0 0 1 7 4.996v.066a.96.96 0 0 1-.2.528 4 4 0 0 0 0 4.816c.122.16.188.344.2.531v.067c0 .305-.133.605-.395.805a1 1 0 0 1-1.398-.2C4.402 10.543 4 9.273 4 8a6 6 0 0 1 1.207-3.613c.184-.246.465-.383.754-.399m0 0" />
      <path
        fillOpacity={0.349}
        d="M2.54 1.969a1 1 0 0 1 .558.168c.457.312.578.933.27 1.39a7.995 7.995 0 0 0 0 8.946 1.005 1.005 0 0 1-.27 1.39 1.005 1.005 0 0 1-1.391-.27 10.015 10.015 0 0 1 0-11.187c.195-.285.512-.437.832-.437m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(AudioVolumeMediumRtl)
export default ForwardRef