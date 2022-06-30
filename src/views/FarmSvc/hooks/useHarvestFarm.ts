import { useCallback } from 'react'
import { harvestFarmSvc } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useHarvestFarm = () => {
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    return harvestFarmSvc(masterChefContract)
  }, [masterChefContract])

  return { onReward: handleHarvest }
}

export default useHarvestFarm
