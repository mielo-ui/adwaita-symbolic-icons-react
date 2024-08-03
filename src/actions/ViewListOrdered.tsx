import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewListOrdered = (
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
      d="M2.5 1s0 1-1 1l-.004 1H2.5v2H4V1zm5 1.008c-.277 0-.5.222-.5.5v.988c0 .274.223.5.5.5h7c.277 0 .5-.226.5-.5v-.988c0-.278-.223-.5-.5-.5zM2.938 5.586c-.743.004-1.31.352-1.938.914l.5 1c.898-.59 1.84-1.05 1.863-.305.024.535-1.55.805-2.07 1.836V10H5V9H3c1.5-.5 1.777-1.297 1.832-1.79.09-.808-.895-1.632-1.894-1.624M7.5 7.008c-.277 0-.5.222-.5.5v.988c0 .274.223.5.5.5h7c.277 0 .5-.226.5-.5v-.988c0-.278-.223-.5-.5-.5zm-4.648 3.68v.003c-.543 0-1.106.137-1.625.418l-.141.075.363 1.191.2-.086c.597-.387 1.488-.492 1.453-.035-.036.46-.536.433-1.13.433v.97c.485 0 1.528.011 1.383.472-.183.57-1.171.129-1.734-.012l-.2-.078-.37 1.238.156.07c.496.235.945.34 1.5.34.633 0 1.168-.132 1.563-.39.39-.262.636-.66.636-1.121 0-.54-.37-.903-.855-1.117.531-.356.492-.63.601-.973 0-.43-.18-.797-.496-1.035-.32-.242-.761-.364-1.304-.364m4.648 1.32c-.277 0-.5.222-.5.5v.988c0 .274.223.5.5.5h7c.277 0 .5-.226.5-.5v-.988c0-.278-.223-.5-.5-.5zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ViewListOrdered)
export default ForwardRef