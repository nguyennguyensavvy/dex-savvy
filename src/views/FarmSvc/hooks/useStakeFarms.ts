import { useCallback } from 'react'
import { enterStakingFarmSvc } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = () => {
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      return enterStakingFarmSvc(masterChefContract, amount)
    },
    [masterChefContract],
  )

  return { onStake: handleStake }
}

export default useStakeFarms
