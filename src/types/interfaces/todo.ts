export type GenderType = "M" | "W";

export interface ITodo {
  /** 아이디 */
  id: number;
  /** 제목 */
  title: string;
  /** 설명 (커스텀) */
  desc?: string;
  /** 유저 아이디 */
  userId: number;
  /** 완료 여부 */
  completed: boolean;
  /** 나이 */
  gender: GenderType;
}

export enum ResType {
  SUCCESS = 200,
  FAIL = 400,
}

export const ResObj = {
  success: 200,
  fail: 400,
};
