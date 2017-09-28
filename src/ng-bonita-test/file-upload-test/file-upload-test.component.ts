// ANGULAR Imports
import { Component, OnInit } from '@angular/core'

// ZGWNU Ng Bonita Module Imports
import { ZgwnuBonitaFileUploadService, ZgwnuBonitaErrorResponse, ZgwnuBonitaContractInputFile,
    ZgwnuBonitaFileUploadProgress } from '@zgwnu/ng-bonita'  

// APP Imports
import { TestCaseService } from '../test/test-case.service'
import { FileUploadTestProgress } from './file-upload-test-progress'

@Component({
    moduleId: module.id,
    selector: 'file-upload-test',
    templateUrl: 'file-upload-test.component.html',
    styleUrls: [ 'file-upload-test.component.css' ],
})

export class FileUploadTestComponent implements OnInit { 

    // Generic Bonita Rest Api test vars
    errorResponse: ZgwnuBonitaErrorResponse

    // File Upload Test Vars
    inputFile: ZgwnuBonitaContractInputFile
    passedTest_FileUpload_uploadFileRequest: boolean = false

    uploadFileProgress_Default: ZgwnuBonitaFileUploadProgress = new ZgwnuBonitaFileUploadProgress()
    inputFile_WithProgressDefault: ZgwnuBonitaContractInputFile
    passedTest_FileUpload_uploadFileRequest_WithProgressDefault: boolean = false

    uploadFileProgress_Custom: FileUploadTestProgress = new FileUploadTestProgress()
    inputFile_WithProgressCustom: ZgwnuBonitaContractInputFile
    passedTest_FileUpload_uploadFileRequest_WithProgressCustom: boolean = false


    constructor(
        private fileUploadService: ZgwnuBonitaFileUploadService, 
        private testCaseService: TestCaseService,  
    )
    {
    }
    
    ngOnInit() {

    }

    private test_FileUpload_uploadFile(event: any) {
        let uploadFiles: FileList = event.target.files
        let uploadFile: File = uploadFiles[0]

        this.fileUploadService.uploadFileRequest(uploadFile, 'test_FileUpload')
            .subscribe(
                inputFile => {
                    this.inputFile = inputFile
                    this.passedTest_FileUpload_uploadFileRequest = true
                    this.testCaseService.uploadedDocFile = inputFile
                },
                errorResponse => {
                    this.errorResponse = errorResponse
                }
            )
    }

    private test_FileUpload_uploadFile_WithProgressDefault(event: any) {
        let uploadFiles: FileList = event.target.files
        let uploadFile: File = uploadFiles[0]

        this.fileUploadService.uploadFileRequest(uploadFile, 'test_uploadFile_WithProgressDefault', this.uploadFileProgress_Default)
            .subscribe(
                inputFile => {
                    this.inputFile_WithProgressDefault = inputFile
                    this.passedTest_FileUpload_uploadFileRequest_WithProgressDefault = true
                    this.testCaseService.uploadedDocFile = inputFile
                },
                errorResponse => {
                    this.errorResponse = errorResponse
                }
            )
    }

    private test_FileUpload_uploadFile_WithProgressCustom(event: any) {
        let uploadFiles: FileList = event.target.files
        let uploadFile: File = uploadFiles[0]

        this.fileUploadService.uploadFileRequest(uploadFile, 'test_uploadFile_WithProgressCustom', this.uploadFileProgress_Custom)
            .subscribe(
                inputFile => {
                    this.inputFile_WithProgressCustom = inputFile
                    this.passedTest_FileUpload_uploadFileRequest_WithProgressCustom = true
                    this.testCaseService.uploadedDocFile = inputFile
                },
                errorResponse => {
                    this.errorResponse = errorResponse
                }
            )
    }

}