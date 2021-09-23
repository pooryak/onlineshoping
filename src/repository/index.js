import Api from '../utility/Api';

export const getPlp = async (config) => Api.get('search/', config);

export const getPdp = async (id = null, config) => Api.get(`product/${id}/`, config);
