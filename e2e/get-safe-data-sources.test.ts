import { getSafeDataSources, setBaseUrl } from '../src'
import config from './config'

const rinkebyChainId = '4'

describe('getSafeDataSources tests', () => {
  beforeAll(() => {
    setBaseUrl(config.baseUrl)
  })

  it('Returns Safe DataSources List', async () => {
    const safeDataSourcesList = await getSafeDataSources(rinkebyChainId)

    expect(safeDataSourcesList).toBeDefined()
    expect(Array.isArray(safeDataSourcesList)).toBe(true)

    // safe app WalletConnect should be present
    const walletConnectSafeDataSource = safeDataSourcesList.find(
      (safeDataSource: { name: string }) => safeDataSource.name === 'WalletConnect',
    )
    expect(walletConnectSafeDataSource).toBeDefined()

    // safe app Transaction Builder should be present
    const transactionBuilder = safeDataSourcesList.find(
      (safeDataSource: { name: string }) => safeDataSource.name === 'Transaction Builder',
    )
    expect(transactionBuilder).toBeDefined()

    // safe app Drain Safe should be present
    const drainSafeDataSource = safeDataSourcesList.find(
      (safeDataSource: { name: string }) => safeDataSource.name === 'Drain Account',
    )
    expect(drainSafeDataSource).toBeDefined()
  })
})
