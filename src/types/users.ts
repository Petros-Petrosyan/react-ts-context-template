export interface InitialState {
  loading: boolean;
  error: boolean;
  users: string[];
}

export interface Payload {
  name: string;
}

export interface Action {
  type: string;
  payload?: Payload;
}
