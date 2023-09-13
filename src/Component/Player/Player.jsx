


const Player = ({player, handleClick}) => {


    return (

            <div className="border-2 p-4 text-center rounded-xl">
                <img className="ml-auto mr-auto rounded-full" src={player.image} alt="" />
                <h1 className="text-2xl font-bold mt-4">{player.name}</h1>
                <h2 className="my-4 font-bold">{player.country}</h2>
                <div className="flex justify-around gap-4 text-xl font-semibold">
                    <p>{player.role}</p>
                    <p>{player.salary} Tk</p>
                </div>
                <button onClick={() => handleClick(player)} className="bg-teal-500 px-4 py-2 mt-4 rounded-md font-bold text-white">Buy Now</button>
            </div>
       
    );
};

export default Player;