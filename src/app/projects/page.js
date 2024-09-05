import Cards from "../components/cards"

export default function Projects() {
    //colro scheme: white=large projects, light-blue=hackathon projects, blue-purple: personal
    return (
        <div className="justify-evenly flex flex-wrap ">
            <Cards img='/MLH.png' title='MLH x Meta Fellowship' description={'This is the portfolio created for this production engineering fellowship'} 
            github={'https://github.com/MatthewCCChang/MLH_Portfolio'} background={"magenta"}></Cards>
            <Cards img='/Luna_Gym.png' title='Luna Gym' description={'Venus Hacks project focused on finding female-friendly gyms'} github={'https://github.com/MatthewCCChang/VenusHack'}
            background={"blue"}></Cards>
            <Cards img='/hangman (3).png' title='Hangman Poker' description={'A fusion game of Hangman and Texas Holdem'} github={'https://github.com/MatthewCCChang/Hangman-Poker'}
            background={"magenta"}></Cards>
            <Cards img='/Whats_The_Move.png' title="What's the Move" description={'LA Hacks project centered around encouraging outdorr activites and adventures'} github={'https://github.com/MatthewCCChang/Whats_The_Move'}
            background={"blue"}></Cards>
            <Cards img='/Hephaestus.png' title="Hephaestus" description={'Project for BRDG Sustainability Challenge aimed to tackle river pollution problems'} github={'https://github.com/alejandro-garf/Hephaestus-Webapp'}
            background={"purple"}></Cards>
            
            <Cards img='/sleep_tracker.png' title="Sleep Tracker" description={'Project that measures sleep quality and activities.'} github={'https://github.com/uci-inf-133/a4-sleep-tracker-fullstackdemonz'}
            background={"purple"}></Cards>
            <Cards img='/hand_gesture.png' title="Hand Gesture" description={'Project that provides various imaging options through hand gestures detected by AI.'} github={'https://github.com/uci-inf-133/a5-final-project-finalteam'}
            background={"purple"}></Cards>
            
            <Cards img='/diabetes.png' title="Diabetes" description={'Analysis of diabetes patients using supervised learning.'} github={'https://github.com/MatthewCCChang/Diabetes-Dataset'}
            background={"purple"}></Cards>
            <Cards img='/search.png' title="Search" description={'A search engine for department specific webapges.'} github={'https://github.com/MatthewCCChang/Pickle-Search'}
            background={"purple"}></Cards>
            <Cards img='/cocktail.png' title="Cocktail" description={'A website that filters cocktails based off of user needs.'} github={'https://github.com/MatthewCCChang/Cocktail'}
            background={"magenta"}></Cards>
            
        </div>
    )
}