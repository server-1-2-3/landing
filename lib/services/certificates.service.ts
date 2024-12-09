import { ApiResponse } from "@/interfaces/IAPI";
import { BaseService } from "./base.service";

export class CertificatesService extends BaseService {
  constructor() {
    super();
  }

  public async loadAll(gid?: number): Promise<ApiResponse> {
    'use server';
    
    const metadata = this._getRequestMetadata("GetProducts", {gid});
    const result = await this.load(metadata);

    return result;
  }

  
}
