import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceKiss = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.531 5C6.266 5 7 5.225 7 6.092c-2.56-.604-2.418 1.688-3 .22C3.68 5.505 4.797 5 5.531 5m4.938 0c.734 0 1.704.461 1.531 1.313-.317 1.556-.528-.958-3-.221C9 5.225 9.734 5 10.469 5M7 8c.41-.01.75.134 1.031.344.282-.21.652-.357 1.063-.344.631.02.906.76.906 1.187 0 .775.475.766 1 .829-.634.15-.987 1.224-.984 1.765.005.972-.93 1.256-2.016 1.25-1.085-.004-1.987-.251-1.984-1.234 0-.408-.353-1.59-1.032-1.766.68-.093 1.016-.25 1.016-.86 0-.808.529-1.16 1-1.171" />
      <path d="M9 10.274c-.17.08-.32.16-.322.272-.018.27-.374.481-.672.48s-.594-.21-.594-.48c0-.112-.111-.19-.272-.272.53-.395 1.253-.338 1.86 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(FaceKiss)
export default ForwardRef