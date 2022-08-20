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
    const githubSafeDataSource = safeDataSourcesList.find(
      (safeDataSource: { name: string }) => safeDataSource.name === 'github',
    )
    expect(githubSafeDataSource).toBeDefined()

    // safe app Transaction Builder should be present
    const google = safeDataSourcesList.find((safeDataSource: { name: string }) => safeDataSource.name === 'googleplus')
    expect(google).toBeDefined()

    // safe app Drain Safe should be present
    const quantimodo = safeDataSourcesList.find(
      (safeDataSource: { name: string }) => safeDataSource.name === 'quantimodo',
    )
    expect(quantimodo).toBeDefined()
  })
})
