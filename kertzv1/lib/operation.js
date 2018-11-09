/**
 * Create Operation Data Transaction
 * @param {com.kertz.car.CreateOpeartionData} opearationData
 * @transaction
 */
function createoperationdata(opearationData) {
    // 1. Get the asset registry
    return getAssetRegistry('com.kertz.car.CarInfo')
        .then(function(carInfoRegistry){
            // Now add the carInfo

            // 2. Get resource factory
            var  factory = getFactory()
            var  NS =  'com.kertz.car'

            // 3. Create the Resource instance
            var  carInfoId = 'carInfo-2020-10-10-00001' 
            
            var  carInfo = factory.newResource(NS,'carInfo',carInfoId)
            
            // 4. Do something on data
            

            // 5. Emit the event carInfoCreated
            var event = factory.newEvent(NS, 'carInfoCreated')
            event.carInfoId = carInfoId
            emit(event)

            return carInfoRegistry.addAll([carInfo])
        })
}


