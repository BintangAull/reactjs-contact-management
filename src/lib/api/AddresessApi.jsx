export const createAddresses = async (token, id , {street, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`,{
        method :"POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body:JSON.stringify({
            street,
            province,
            country,
            postal_code
        })
    })
}

export const addressList = async (token, id) =>{
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`,{
        method : "GET",
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const removeAddress = async (token, contactId, addressId) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`,{
        method : "DELETE",
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const addressDetail = async (token, contactId, addressId) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`,{
        method : "GET",
        headers:{
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}

export const addressUpdate = async (token, contactId, addressId, {street, city, province, country, postal_code}) => {
    return await fetch(`${import.meta.env.VITE_API_PATH}/contacts/${contactId}/addresses/${addressId}`,{
        method : "PUT",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body:JSON.stringify({
            street,
            city,
            province,
            country,
            postal_code
            })
    })
}
