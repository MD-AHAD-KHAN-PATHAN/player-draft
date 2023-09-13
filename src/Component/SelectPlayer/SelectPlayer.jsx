

const SelectPlayer = ({selectPlayers}) => {
    return (
        <div>
           {
            selectPlayers.map(player =>
                <div key={player.id} className="bg-emerald-300 rounded-xl p-4 mb-4 text-white font-bold">
                    <div className="flex justify-between">
                        <h2>{player.name}</h2>
                        <h2>{player.role}</h2>
                    </div>
                    
                </div>
            )
           }
        </div>
    );
};

export default SelectPlayer;