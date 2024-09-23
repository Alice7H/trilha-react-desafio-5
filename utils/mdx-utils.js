import { api } from '../services/api'

export const getPosts = async () => {
    const { data } = await api.from('posts').select('*')

    if (data) {
        return data;
    }
    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const { data } = await api.from('posts').select().eq('id', id);
    if (data) {
        return data[0];
    }
    return {};
}