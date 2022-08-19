import {
  SafeDataSourceData,
  MultisigTransactionRequest,
  BlockExplorerUriTemplate,
  FiatCurrencies,
  MasterCopyReponse,
  DecodedDataParameterValue,
} from '../src'

describe('Types are exported from index correctly', () => {
  it('Random type check', () => {
    const val = {} as unknown as
      | SafeDataSourceData
      | MultisigTransactionRequest
      | BlockExplorerUriTemplate
      | FiatCurrencies
      | MasterCopyReponse
      | DecodedDataParameterValue
    expect(val).toBe(val)
  })

  it('Dynamic enum export check', () => {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    const { default: _ = null, ...rest } = require('../src/index')
    const exportedNames = Object.keys(rest)

    const fs = require('fs')
    const path = require('path')

    const typesDir = path.join(__dirname, '..', 'src', 'types')

    const exportedTypeNames = fs
      .readdirSync(typesDir)
      .filter((file: string) => file !== 'api.ts')
      .flatMap((file: any) => {
        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
        const { default: _ = null, ...rest } = require(`../src/types/${file}`)
        return Object.keys(rest)
      })

    exportedTypeNames.every((type: string) => expect(exportedNames.includes(type)).toBe(true))
  })
})
