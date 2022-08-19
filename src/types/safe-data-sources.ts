export enum SafeDataSourceAccessPolicyTypes {
  NoRestrictions = 'NO_RESTRICTIONS',
  DomainAllowlist = 'DOMAIN_ALLOWLIST',
}

export type SafeDataSourceNoRestrictionsPolicy = {
  type: SafeDataSourceAccessPolicyTypes.NoRestrictions
}

export type SafeDataSourceDomainAllowlistPolicy = {
  type: SafeDataSourceAccessPolicyTypes.DomainAllowlist
  value: string[]
}

export type SafeDataSourcesAccessControlPolicies =
  | SafeDataSourceNoRestrictionsPolicy
  | SafeDataSourceDomainAllowlistPolicy

export type SafeDataSourceProvider = {
  url: string
  name: string
}

export type SafeDataSourceData = {
  id: number
  url: string
  name: string
  iconUrl: string
  description: string
  chainIds: string[]
  provider?: SafeDataSourceProvider
  accessControl: SafeDataSourcesAccessControlPolicies
  tags: string[]
}

export type SafeDataSourcesResponse = SafeDataSourceData[]
