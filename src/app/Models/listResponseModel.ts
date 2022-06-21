import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
data:T[];
//her listte kullanmak amacı ile 
}