import api from "../configs/api";

const addPlayer = async (id, player) => {
   
    const teamUpdate = { "players": player }
    const response = await api.patch(`/map/${id}`, teamUpdate);
    return response.data;
}

const exportObject = { addPlayer };

export default exportObject;