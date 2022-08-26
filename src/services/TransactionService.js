import transaction from '@database/transaction'
/**
 * Encapsulate all the method of transaction in a class
 * @class
 */


class TransactionService{

    formatDate(dateString) {
        const date = new Date(dateString)
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate()
        );
      }

    /**
     * Get all the saved exchanges
     * @async
     * @function getAllTransactionHistory
     * @returns {Promise<object>}
     */
    async getAllTransactionHistory(query){
        try{
            const pagination ={}
            const conditions = {}

            if(query.pageQuery && query.limitQuery){
                pagination.limit = query.limitQuery
                pagination.page = query.pageQuery
            }
           
            if(query.fromDate && query.toDate && query.type){
                conditions.createdAt = {$lte:this.formatDate(query.toDate),$gte:this.formatDate(query.fromDate)}
                if(query.type !== "ALL"){
                    conditions.extType = query.type
                }
            }

            return await transaction.paginate(conditions,pagination)
  
        }catch(error){
            console.log(error)
        }
    }

    /**
     * Save the echange data in database
     * @function exchange
     * @param {*} input 
     * @returns {Promise<Object>}
     */

    async exchange(input){
        try{
          return await transaction.create(input)
        }catch(error){
            console.log(error)
        }

    }

}


export default new TransactionService()