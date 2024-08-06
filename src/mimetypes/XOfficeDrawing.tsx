import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const XOfficeDrawing = (
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
      d="M5 1C3.355 1 2 2.355 2 4v9c0 1.645 1.355 3 3 3h6c1.645 0 3-1.355 3-3V5.5a1 1 0 0 0-.293-.707l-3.5-3.5A1 1 0 0 0 9.5 1zm0 2h4v1.5Q9 6 10.5 6H12v4.98c-1.023-.085-1.48-.445-1.922-.847-.254-.235-.492-.5-.812-.727a2.17 2.17 0 0 0-2.532 0c-.32.227-.558.492-.812.727-.442.402-.899.762-1.922.847V4c0-.57.43-1 1-1m1.5 2C5.676 5 5 5.676 5 6.5S5.676 8 6.5 8 8 7.324 8 6.5 7.324 5 6.5 5m0 1c.281 0 .5.219.5.5s-.219.5-.5.5-.5-.219-.5-.5.219-.5.5-.5M8 10c.309 0 .48.074.684.219.203.148.425.383.718.648.52.48 1.297 1.004 2.598 1.113V13c0 .57-.43 1-1 1H5c-.57 0-1-.43-1-1v-1.02c1.3-.109 2.078-.632 2.598-1.113.293-.265.515-.5.718-.648A1.04 1.04 0 0 1 8 10m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(XOfficeDrawing)
export default ForwardRef