import * as React from "react";

export interface HelloProps {
    complier: string;
    framework: string;
}

export const Hello = (props: HelloProps) => <h1>Hello from {props.complier} and {props.framework}!</h1>;
