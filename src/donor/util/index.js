import "isomorphic-fetch"
import config from '../../config.json'


const CallApi = async ({ endpoint, body, method, useHeaders, headers }) => {
    let payload = {
        headers: useHeaders && {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        method
    }

    if (body) {
        payload.body = body
    }

    return await fetch(`${config.ApiURL}${endpoint}`, payload)
}

export const GetHats = async () => {
    try {
        const response = await CallApi({
            endpoint: 'hats',
            method: 'GET'
        })
        const hats = await response.json()

        return {
            success: true,
            hats
        }
    } catch (error) {
        return {
            success: false,
            hats: {}
        }
    }
}

export const GetHat = async id => {
    try {
        const response = await CallApi({
            endpoint: `hats/${id}`,
            method: 'GET'
        })
        const hat = await response.json()

        return {
            success: true,
            hat
        }
    } catch (error) {
        console.log(error)
        return {
            success: false
        }
    }
}

export const GetContent = async () => {
    try{
        const response = await CallApi({
            endpoint: `content`, 
            method: 'GET'
        })
        const content = await response.json()

        return {
            success: true,
            content: content
        }
    }catch(error){
        console.log(error)
        return {
            success: false,
            content: {}
        }
    }
}