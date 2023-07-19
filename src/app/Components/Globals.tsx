import { NextPage } from "next"
import React from "react"
//InterFaces
interface Hero_Button_Props {
    text_feild: string
}
//Global Components
export const Navbar = () => {
    return (
        <section>
            <nav className="mx-2 my-2">
                <div className="flex justify-between">
                    <div>img</div>
                    <div>buttons</div>
                </div>
            </nav>
        </section>
    )
}

export const Hero_Button: NextPage<Hero_Button_Props> = (props) => {
    const { text_feild } = props
    return (
        <button className="px-4 py-2 rounded-md bg-mainContrast text-black ease-in-out duration-200 hover:bg-fadeContrast">{text_feild}</button>
    )
}