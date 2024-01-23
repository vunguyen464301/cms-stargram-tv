interface GlobalState {
  openApp: boolean;
}

interface PaginationParams {
  page: number;
  limit: number;
}
interface Paging {
  pageCurrent: number;
  pageSize: number;
  totalPage: number;
  totalSize: number;
}

interface PaginationResponse<T> {
  items: T[];
  paging: Paging;
}

interface Response<T> {
  data: T;
  message: string;
  statusCode: number;
}

export type {
  GlobalState,
  Response,
  PaginationResponse,
  PaginationParams,
  Paging,
};
