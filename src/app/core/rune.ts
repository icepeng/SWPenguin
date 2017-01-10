export class Rune {
  id: string;
  occupied_id: string;
  occupied_master_id: number;
  class: number; // 등급(별)
  pri_eff: number[]; // 주옵
  prefix_eff: number[]; // 접두옵
  sec_eff: number[][]; // 부옵
  slot_no: number; // 슬롯
  set_id: number; // 세트
  upgrade_curr: number; // 업글
  rank: number; // 색깔
}

export enum RuneEffect {
  Zero, FlatHP, ScaleHP, FlatATK, ScaleATK, FlatDEF, ScaleDEF, None, SPD, CRate, CDmg, RES, ACC
}

export enum RuneSet {
  Zero, Energy, Guard, Swift, Blade, Rage, Focus, Endure, Fatal, None, Despair, Vampire, None2, Violent, Nemesis, Will, Shield, Revenge, Destroy, Fight, Determination, Enhance, Accuracy, Tolerance
}
