import React from 'react'
import { cn } from '@/lib/utils'

const props = {
  gap: {
    px: "gap-px",
    0: "gap-0",
    0.5: "gap-0.5",
    1: "gap-1",
    1.5: "gap-1.5",
    2: "gap-2",
    2.5: "gap-2.5",
    3: "gap-3",
    3.5: "gap-3.5",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    7: "gap-7",
    8: "gap-8",
    9: "gap-9",
    10: "gap-10",
    11: "gap-11",
    12: "gap-12",
    14: "gap-14",
    16: "gap-16",
    20: "gap-20",
    24: "gap-24",
    28: "gap-28",
    32: "gap-32",
    36: "gap-36",
    40: "gap-40",
    44: "gap-44",
    48: "gap-48",
    52: "gap-52",
    56: "gap-56",
    60: "gap-60",
    64: "gap-64",
    72: "gap-72",
    80: "gap-80",
    96: "gap-96",
  },
  items: {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
  },
  justify:  {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  },
  wrap:  {
    true: "flex-wrap",
    wrap: "flex-wrap",
    reverse: "flex-wrap-reverse",
    nowrap: "flex-nowrap",
  },
};

type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
    gap?: keyof typeof props.gap;
    items?: keyof typeof props.items;
    justify?: keyof typeof props.justify;
    wrap?: keyof typeof props.wrap;
}

export const  Flex = ({ className, gap, items, justify, wrap, children, ref, ...rest }: FlexProps & { ref?: React.Ref<HTMLDivElement> }) => {
  
  return (
    <div ref={ref} {...rest} className={cn("flex", gap != null  && props.gap[gap], items && props.items[items], justify && props.justify[justify], wrap && props.wrap[wrap], className)}>
        {children}
    </div>
  )
}
