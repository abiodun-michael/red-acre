import Joi from "joi";

/**
 * Validate all the inputs from request body
 * @function validateExchange
 * @param {*} input 
 * @returns {object}
 */

export const validateExchange = (input)=>{
    return Joi.object({
        amountFrom: Joi.number().integer().required(),
        amountTo: Joi.number().integer().required(),
        currencyFrom: Joi.string().required(),
        currencyTo: Joi.string().required(),
    }).validate(input,{abortEarly:false})
}