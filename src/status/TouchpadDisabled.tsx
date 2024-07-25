import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const TouchpadDisabled = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      d="M1.531.469.47 1.53l14 14 1.062-1.062-.957-.957c.27-.453.426-.98.426-1.543V4.03A3.04 3.04 0 0 0 11.969 1H3.03c-.293 0-.578.043-.844.125zM4.063 3h7.906C12.566 3 13 3.434 13 4.031V10h-1.937zm-3.938.188C.043 3.453 0 3.738 0 4.03v7.938A3.04 3.04 0 0 0 3.031 15h8.907l-2-2H8v-1.937L6.938 10H2V5.063zM2 11h5v2H3.031C2.434 13 2 12.566 2 11.969zm10.063 0H13v.938zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(TouchpadDisabled)
export default ForwardRef