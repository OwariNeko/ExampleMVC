class service 
{
    /**r
     * .getTime
     * @method
     */
    getTime()
    {
        return new Promise( (resolve, reject) => {
            
            resolve ({  message : `server time ${new Date().toISOString()}`
            })
        })
    }

    /**r
     * .getTime
     * @method
     */
    getRandomNumber()
    {
        return new Promise( (resolve, reject) => {
            resolve ({  message : `Number : ${Math.random()}`
            })
        })
    }

}
module.exports = service;