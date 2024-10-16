// src/api.js
import axios from 'axios';

const Category_URL = 'https://41e6-2401-4900-6274-ec36-d180-f58d-2f83-bc7e.ngrok-free.app/api/obtainCategoryAndSections/';

export const fetchSidebarData = async () => {
    try {
        const response = await axios.get(Category_URL);
        return response.data; // Adjust based on actual data structure
    } catch (error) {
        console.error('Error fetching sidebar data:', error);
        throw error; // Re-throw to handle it in the component
    }
};
