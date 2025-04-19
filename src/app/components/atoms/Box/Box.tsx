import React from 'react';

type BoxProps<T extends React.ElementType = 'div'> = {
    as?: T;
    className?: string;
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const Box = <T extends React.ElementType = 'div'>({
    as,
    className,
    children,
    ...props
}: BoxProps<T>) => {
    const Component = as || 'div';
    return (
        <Component
            className={`box ${className}`}
            {...(props as React.ComponentProps<T>)}
        >
            {children}
        </Component>
    );
};

export default Box;