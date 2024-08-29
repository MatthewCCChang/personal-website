import Cards from "../components/cards"

export default function Projects() {
    //colro scheme: white=large projects, light-blue=hackathon projects, blue-purple: personal
    return (
        <div className="justify-evenly flex flex-wrap ">
            <Cards img='/MLH.png' title='MLH x Meta Fellowship' description={'This is the portfolio created for this production engineering fellowshi['} 
            github={'https://github.com/MatthewCCChang/MLH_Portfolio'} background={"white"}></Cards>
            <Cards img='/Luna_Gym.png' title='Luna Gym' description={'Venus Hacks project focused on finding female-friendly gyms'} github={'https://github.com/MatthewCCChang/VenusHack'}
            background={"blue"}></Cards>
            <Cards img='/hangman (3).png' title='Hangman Poker' description={'A fusion game of Hangman and Texas Holdem'} github={'https://github.com/MatthewCCChang/Hangman-Poker'}
            background={"white"}></Cards>
            <Cards img='/Whats_The_Move.png' title="What's the Move" description={'LA Hacks project centered around encouraging outdorr activites and adventures'} github={'https://github.com/MatthewCCChang/Whats_The_Move'}
            background={"blue"}></Cards>
        </div>
    )
}