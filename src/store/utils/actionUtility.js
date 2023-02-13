export function createAsyncActionTypes(typeKey, typeName) {
    return {
        [`${typeKey}_REQUESTED`]: `${typeName}/requested`,
        [`${typeKey}_FULFILLED`]: `${typeName}/fulfilled`,
        [`${typeKey}_REJECTED`]: `${typeName}/rejected`
    }
}