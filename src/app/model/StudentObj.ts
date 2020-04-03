import { organization } from './organization'
import { Timestamp } from 'rxjs/internal/operators/timestamp'

export class StudentObj{
    id: Number
    org:organization
    redgno: Number
    fname: String
    lname: String
    dob: Date
    email: String
    mobileno: Number
    year: Number
    createdon:any
    modifiedon:any

}