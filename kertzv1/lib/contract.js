/**
 * Create Contract Transaction
 * @param {com.kertz.contract.CreateContract} contractData
 * @transaction
 */
function createcontract(contractData) {
    // 1. Get the asset registry
    return getAssetRegistry('com.kertz.contract.Contract')
        .then(function(contractRegistry){
            // Now add the Contract

            // 2. Get resource factory
            var  factory = getFactory()
            var  NS =  'com.kertz.contract'

            // 3. Create the Resource instance
            var  contractId = 'Contract-2020-10-10-00001' 
            
            var  contract = factory.newResource(NS,'Contract',contractId)
            
            // 4. Do something on data
            

            // 5. Emit the event contractCreated
            var event = factory.newEvent(NS, 'ContractCreated')
            event.contractId = contractId
            emit(event)

            return contractRegistry.addAll([contract])
        })
}


