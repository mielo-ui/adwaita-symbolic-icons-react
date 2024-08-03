import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Alarm = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.336 1.004a2.53 2.53 0 0 0-1.223.418 2.495 2.495 0 0 0-.691 3.469l4.156-2.778a2.5 2.5 0 0 0-2.242-1.11m8 0a2.5 2.5 0 0 0-1.914 1.11l4.156 2.777a2.495 2.495 0 0 0-.691-3.47c-.457-.304-1-.452-1.551-.417M7.5 3C3.922 3 1 5.926 1 9.5c0 1.688.652 3.23 1.71 4.387l-.41.398a1 1 0 0 0-.015 1.414 1 1 0 0 0 1.414.02l.59-.574A6.43 6.43 0 0 0 7.5 16c1.188 0 2.297-.32 3.258-.883l.504.555c.37.41 1 .441 1.41.07a1 1 0 0 0 .07-1.41l-.426-.473A6.5 6.5 0 0 0 14 9.5C14 5.926 11.078 3 7.5 3m0 2C9.996 5 12 7.004 12 9.5 12 12 9.996 14 7.5 14S3 12 3 9.5C3 7.004 5.004 5 7.5 5m0 1c-.277 0-.5.227-.5.5V9H5.5a.501.501 0 0 0 0 1h2c.277 0 .5-.223.5-.5v-3c0-.273-.223-.5-.5-.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Alarm)
export default ForwardRef