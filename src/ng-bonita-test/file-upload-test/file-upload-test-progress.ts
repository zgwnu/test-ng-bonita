// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaProgressInterface } from '../../ng-bonita'

export class FileUploadTestProgress implements ZgwnuBonitaProgressInterface {
    loaded: number
    total: number

    get percentDone(): number {
        let percentDoneValue: number = 0
        if ((this.loaded) && (this.total)) percentDoneValue = Math.round(100 * this.loaded / this.total)
        return percentDoneValue
    }

    get toDoStr(): string {
        return Array(101 - this.percentDone).join('-')
    }

    get doneStr(): string {
        return Array(this.percentDone + 1).join('+')
    }
}