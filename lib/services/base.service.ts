import { ApiResponse } from "@/interfaces/IAPI";
import { axiosClient } from "../axios";

export class BaseService {
  protected readonly axios = axiosClient;

  async load(metadata: FormData): Promise<ApiResponse> {
    try {
      const response = await this.axios.post("", metadata);
      return response.data;
    } catch (e) {
      console.error(`${e}`);
      throw e;
    }
  }

  protected _getRequestMetadata(
    action: string,
    options?: { gid?: number; pid?: number }
  ): FormData {
    const formData = new FormData();

    formData.append("action", action);
    formData.append("responsetype", "json");
    formData.append("identifier", process.env.API_IDENTIFIER as string);
    formData.append("secret", process.env.API_SECRET_KEY as string);

    console.log(options);

    if (options?.gid) {
      formData.append("gid", `${options.gid}`);
    }

    if (options?.pid) {
      formData.append("pid", `${options.pid}`);
    }

    return formData;
  }
}
