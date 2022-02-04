import api from "../configs/api";

const getMarkers = async () => {
    const response = await api.get('/map');
    return response.data
}

const exportObject = { getMarkers };

export default exportObject;