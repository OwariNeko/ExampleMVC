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
            resolve ({  message : `Number : ${Math.floor(Math.random()*101)}`
            })
        })
    }

}
module.exports = service;