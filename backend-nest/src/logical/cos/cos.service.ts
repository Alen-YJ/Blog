import { Body, Injectable } from '@nestjs/common';
import * as COS from 'cos-nodejs-sdk-v5'
const fs = require('fs')
const path = require('path')
const PUBLIC_PATH = path.resolve(__dirname,'../../../../.env.json')

@Injectable()
export class CosService {
    async generateKey(@Body() body:any): Promise<any>{
        const data = fs.readFileSync(PUBLIC_PATH,'utf-8')
        console.info(data)
        const config = {
            "SecretId":data.SecretId,
            "SecretKey":data.SecretKey,
            "durationSeconds":data.durationSeconds,
            "bucket":data.bucket,
            "region":data.region,
            "allowPrefix":data.allowPrefix,
            "allowActions":[
                //简单上传操作 
                "name/cos:PutObject",
                //表单上传对象 
                "name/cos:PostObject",
                //分块上传：初始化分块操作 
                "name/cos:InitiateMultipartUpload",
                //分块上传：List 进行中的分块上传
                "name/cos:ListMultipartUploads",
                //分块上传：List 已上传分块操作 
                "name/cos:ListParts",
                //分块上传：上传分块块操作 
                "name/cos:UploadPart",
                //分块上传：完成所有分块上传操作 
                "name/cos:CompleteMultipartUpload",
                //取消分块上传操作 
                "name/cos:AbortMultipartUpload"
            ]
        }
        const result = await COS.getAuthorization(config)
        console.log(result)
        return {
            code:200,
            data:result,
            status:"success"
        }
    }
}
