import { useCallback } from 'react'
import { leaveStakingFarmSvc } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useUnstakeFarms = () => {
  const masterChefContract = useMasterchef()

  const handleUnstake = useCallback(
    async (amount: string) => {
      return leaveStakingFarmSvc(masterChefContract, amount)
    },
    [masterChefContract],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstakeFarms
