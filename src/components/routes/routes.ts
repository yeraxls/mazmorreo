import { JsxElement } from "typescript";
import Mazmorras from "../Mazmorras";

interface props{
    to: string,
    path: string,
    Component: () => JSX.Element
}
export const routes : props[] = [
    {to: "/", path: "/", Component: Mazmorras}
];