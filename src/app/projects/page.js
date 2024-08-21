import Cards from "../components/cards"

export default function Projects() {
    return (
        <div className="justify-evenly flex flex-wrap bg-red-600">
            <Cards img='/background.jpg' title='portfolio' description={'this is my portfolio'} 
            github={'https://github.com/MatthewCCChang/personal-website'}></Cards>
            <Cards img='/night-background.jpg' title='portfolio' description={'this is my portfolio'} github={'https://github.com/MatthewCCChang/personal-website'}></Cards>
            <Cards img='/background.jpg' title='portfolio' description={'this is my portfolio'} github={'https://github.com/MatthewCCChang/personal-website'}></Cards>
            <Cards img='/night-background.jpg' title='portfolio' description={'this is my portfolio'} github={'https://github.com/MatthewCCChang/personal-website'}></Cards>
        </div>
    )
}