import Cards from "../components/cards"

export default function Projects() {
    return (
        <div className="justify-evenly flex flex-wrap ">
            <Cards img='/background.jpg' title='portfolio' description={'this is my portfolio'} 
            github={'https://github.com/MatthewCCChang/personal-website'} background={"white"}></Cards>
            <Cards img='/night-background.jpg' title='portfolio' description={'this is my portfolio'} github={'https://github.com/MatthewCCChang/personal-website'}
            background={"blue"}></Cards>
            <Cards img='/background.jpg' title='portfolio' description={'this is my portfolio'} github={'https://github.com/MatthewCCChang/personal-website'}
            background={"white"}></Cards>
            <Cards img='/night-background.jpg' title='portfolio' description={'this is my portfolio'} github={'https://github.com/MatthewCCChang/personal-website'}
            background={"white"}></Cards>
        </div>
    )
}