'use server';

import { CertificatesService } from "./services/certificates.service";
import { ApiResponse } from "@/interfaces/IAPI";

export async function loadAllCertificates(group: string | number): Promise<ApiResponse> {
  const certificatesService = new CertificatesService();
  return await certificatesService.loadAll(+group);
}