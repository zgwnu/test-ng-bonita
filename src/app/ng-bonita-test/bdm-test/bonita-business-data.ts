import { ZgwnuBonitaBusinessDataObjectInterface, ZgwnuBonitaBusinessDataListInterface 
    } from '@zgwnu/ng-bonita'

export interface Ng2BonitaXrefInterface extends ZgwnuBonitaBusinessDataObjectInterface {
xrefKey: string
}

export interface Ng2BonitaDetailInterface extends ZgwnuBonitaBusinessDataObjectInterface {
detailKey: string
xref: Ng2BonitaXrefInterface
}

export interface Ng2BonitaMasterInterface extends ZgwnuBonitaBusinessDataObjectInterface {
masterKey: string
masterDate: Date
details: Ng2BonitaDetailInterface[]
masterBoolean: boolean
masterDouble: number
masterFloat: number
masterInteger: number
masterLong: number
masterText: string
}

export interface Ng2BonitaMasterListInterface extends ZgwnuBonitaBusinessDataListInterface {
items: Ng2BonitaMasterInterface[]
}

export function ZgwnuBonitaIsDateType(dataObjectKey: string): boolean {
const dataTypeKeys: string[] = ['masterDate']
return dataTypeKeys.indexOf(dataObjectKey) > -1
}