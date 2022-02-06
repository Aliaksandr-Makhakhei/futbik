import api from "../configs/api";

const getDetails = async (id) => {
    const response = await api.get(`/map/${id}`);
    return response.data
}

const exportObject = { getDetails };

export default exportObject;