
import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";
import SelectPlayer from "../SelectPlayer/SelectPlayer";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [selectPlayers, setSelectPlayers] = useState([]);
    const [totalCost, setTotalCost] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    },[])

    const handleClick = player => {

        if(selectPlayers.find(item => item.id === player.id)) {
            alert('This Player is Already Sold-out');
        }
        else {

            if(selectPlayers.length < 11) {
                setSelectPlayers([...selectPlayers, player]);

                let price = player.salary;
    
                selectPlayers.forEach(player => price+=player.salary)
                
                setTotalCost(price);
            }
            else {
                alert('Your Players limite is full');
            }
            
        }
        
    }




    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 mx-4">
                <div className="grid lg:grid-cols-3 lg:col-span-3 md:grid-cols-2 md:col-span-2 gap-4">
                    {
                        players.map(player =><Player player={player} key={player.id} handleClick={handleClick}></Player> )
                    }

                </div>
                <div>
                    <h1 className="text-center text-2xl font-bold bg-teal-400 rounded-xl py-4 text-white">Cummilla Victoria</h1>
                    <h2 className="my-4 text-center text-2xl font-bold bg-yellow-400 rounded-xl py-4 text-white">Total Cost : {totalCost}</h2>
                    <h2 className="my-4 text-center text-2xl font-bold bg-lime-400 rounded-xl py-4 text-white">Purchase Player : {selectPlayers.length}</h2>
                    <SelectPlayer selectPlayers={selectPlayers}></SelectPlayer>
                </div>
            </div>
            
            

        </div>
    );
};

export default Players;