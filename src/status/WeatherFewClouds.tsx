import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WeatherFewClouds = (
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
    <g fill="#222">
      <path d="m12.246 2.34-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 1 0-1.414-1.414M7.004.992v1a1 1 0 1 0 2 0v-1a1 1 0 1 0-2 0m-4.66 2.75.707.707a1 1 0 0 0 .965.262c.347-.094.617-.363.71-.707a1.01 1.01 0 0 0-.261-.969l-.707-.707a1.002 1.002 0 0 0-1.676.45c-.09.343.008.714.262.964M.996 8.984h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2M6.133 8.719a2.014 2.014 0 0 1 1.004-2.524A2.01 2.01 0 0 1 9.73 7a1 1 0 0 0 1.368.367A1 1 0 0 0 11.465 6a3.993 3.993 0 0 0-5.192-1.61A3.99 3.99 0 0 0 4.27 9.442a.998.998 0 1 0 1.863-.723M8.113 11.098l1.516-.614A2.996 2.996 0 0 0 5 13c0 1.66 1.34 3 3 3h4c2.215 0 4-1.785 4-4s-1.785-4-4-4a3.99 3.99 0 0 0-3.887 3.098M14 12c0 1.098-.902 2-2 2H8c-.547 0-1-.453-1-1s.453-1 1-1c.191 0 .379.055.543.16a.994.994 0 0 0 1.516-.613A2 2 0 0 1 12 10c1.098 0 2 .902 2 2m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(WeatherFewClouds)
export default ForwardRef