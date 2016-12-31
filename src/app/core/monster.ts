import { Rune } from './rune';

export class Monster {
  id: string;
  atk: number;
  accuracy: number;
  def: number;
  con: number;
  critical_damage: number;
  critical_rate: number;
  speed: number;
  resist: number;
  level: number;
  runes: Rune[];
}
