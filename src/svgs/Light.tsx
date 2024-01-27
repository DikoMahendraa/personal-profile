import { JSX, SVGProps } from 'react'

const Light = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#ffffff"
    {...props}
  >
    <circle
      cx={12}
      cy={12}
      r={4}
      fill="#ffffff"
      stroke="#222"
      strokeWidth={1.2}
    />
    <path
      stroke="#ffffff"
      strokeWidth={1.2}
      d="M12 8V4M12 20v-4M9.172 9.172 6.343 6.343M17.657 17.657l-2.829-2.829M16 12h4M4 12h4M14.828 9.172l2.829-2.829M6.343 17.657l2.829-2.829"
    />
  </svg>
)
export default Light
