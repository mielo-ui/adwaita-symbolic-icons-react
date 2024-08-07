import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PhoneOld = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.001 0c-1.01.005-1 1-1 1v12l.002.016v.136c0 1.024.857 1.848 1.92 1.848h5.158c1.063 0 1.92-.824 1.92-1.848V5c0-1.023-.937-2-2-2h-5V1s-.009-.994-1-1m1.754 5H9.25a.75.75 0 0 1 .752.752v1.496A.75.75 0 0 1 9.251 8H5.755a.75.75 0 0 1-.752-.752V5.752A.75.75 0 0 1 5.755 5m-.252 5h1.143a.499.499 0 1 1 0 1H5.503a.499.499 0 1 1 0-1m2.857 0h1.143a.499.499 0 1 1 0 1H8.36a.499.499 0 1 1 0-1m-2.857 2h1.143a.499.499 0 1 1 0 1H5.503a.499.499 0 1 1 0-1m2.857 0h1.143a.499.499 0 1 1 0 1H8.36a.499.499 0 1 1 0-1"
      color="#000"
      overflow="visible"
      style={{
        marker: "none",
      }}
    />
  </svg>
)
const ForwardRef = forwardRef(PhoneOld)
export default ForwardRef