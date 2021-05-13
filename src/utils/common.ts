/**
 * 사용자의 나이를 가져온다.
 * @param userId 유저아이디
 * @returns 나이
 */
export const getuserAge = (userId: number): number => {
  return userId > 1 ? 22 : 1;
};
