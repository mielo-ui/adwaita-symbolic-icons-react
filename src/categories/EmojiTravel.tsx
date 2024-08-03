import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EmojiTravel = (
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
      d="M3.035 1c-.46 0-.86.313-.972.758l-1 4q-.029.118-.028.242v.04c-.566.093-1 .562-1 1.155v4.614c0 .59.434 1.058 1 1.152V14.5c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5V13h8v1.5c0 .277.223.5.5.5h2c.278 0 .5-.223.5-.5v-1.54c.563-.093 1-.562 1-1.155v-4.61c0-.593-.437-1.062-1-1.156V6q-.001-.124-.031-.242l-1-4A1 1 0 0 0 13.035 1zm.781 2h8.438l.75 3H3.066zm-.28 5a1.5 1.5 0 1 1-.002 3 1.5 1.5 0 0 1 .001-3m9 0a1.5 1.5 0 1 1-.002 3 1.5 1.5 0 0 1 .001-3m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(EmojiTravel)
export default ForwardRef