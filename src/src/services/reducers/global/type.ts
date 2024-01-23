interface GlobalState {
  openApp: boolean;
}

interface Response<T> {
  data: T;
  message: string;
  statusCode: number;
}

export type { GlobalState, Response };
