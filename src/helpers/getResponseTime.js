function getTypeData(data){
    const responseData = data.filter((filt, i) => {
        return filt.type === 'data'
    })

    return responseData
}

export function getResponseMin(data, os, browser){
    const typeData = getTypeData(data)

    const response = typeData.filter((filt, i) => {
        return filt.os === os && filt.browser === browser
    })

    return response.map((data,i) => {
        return data.min_response_time
    })
}

export function getResponseMax(data, os, browser){
    const typeData = getTypeData(data)

    const response = typeData.filter((filt, i) => {
        return filt.os === os && filt.browser === browser
    })

    return response.map((data,i) => {
        return data.max_response_time
    })
}