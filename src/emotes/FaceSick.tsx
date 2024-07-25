import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceSick = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    ref={ref}
    {...props}
  >
    <path
      fill="#474747"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M4.313 4.688a.3.3 0 0 1 .125.03l1.125.657 1.156-.656c.165-.092.34-.021.406.156a.43.43 0 0 1-.187.5l-.72.406.72.406a.376.376 0 0 1 .156.47c-.069.176-.242.218-.406.124l-1.125-.625-1.157.625c-.165.092-.34.053-.406-.125a.43.43 0 0 1 .188-.5l.687-.406-.687-.375c-.165-.094-.256-.324-.188-.5a.3.3 0 0 1 .313-.188zm5.156 0a.3.3 0 0 1 .125.03l1.125.657 1.156-.656c.165-.092.34-.021.406.156a.43.43 0 0 1-.187.5l-.719.406.719.406c.164.094.255.293.187.47-.068.176-.273.218-.437.124l-1.125-.656-1.156.656c-.166.092-.34.053-.407-.125a.43.43 0 0 1 .188-.5l.719-.406-.72-.406c-.163-.094-.255-.293-.187-.47a.3.3 0 0 1 .313-.187zM5.125 9.03A2.75 2.75 0 0 1 7 9.562c.35.22.413.274 1 .344.16.056.607-.04 1-.344.28-.204.561-.295.844-.374 1.309-.368 2.574.436 3.156 1.25v.5c-.511-.286-1.06-.598-1.625-.782l.469.938c.328.647.132 1.399-.438 1.687s-1.297-.009-1.625-.656l-.593-1.156c-.051-.101-.068-.209-.094-.313a1 1 0 0 1-.094.031c-.541.314-1.56.197-2 0-.917-.437-.909-.667-1.531-.687-.853.019-1.843.399-2.469.937v-.5c.264-.678 1.119-1.316 2.125-1.406z"
      overflow="visible"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceSick)
export default ForwardRef