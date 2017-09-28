// ANGULAR Imports
import { Injectable } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaBusinessDataContext, ZgwnuBonitaContractInputFile } from '../../ng-bonita'

@Injectable()
export class TestCaseService {
    isAuthorized: boolean = false
    caseId: string
    taskId: string
    businessDataContext: ZgwnuBonitaBusinessDataContext
    uploadedDocFile: ZgwnuBonitaContractInputFile
}