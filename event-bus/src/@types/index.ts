export enum EEventsTypes {
  CREATE_POST = "CREATE_POST",
  CREATE_COMMENT = "CREATE_COMMENT",
}

export interface IEvent {
  type: EEventsTypes;
  data: object;
}
