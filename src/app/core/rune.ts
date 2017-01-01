export class Rune {
  id: string;
  occupied_id: string;
  class: number; // 등급(별)
  pri_eff: number[]; // 주옵
  prefix_eff: number[]; // 접두옵
  sec_eff: number[][]; // 부옵
  slot_no: number; // 슬롯
  set_id: number; // 세트
  upgrade_curr: number; // 업글
  rank: number; // 색깔
}
