# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 172件目 `くりぃむしちゅー`（ロデオ、2007-09）までを継承。
- **173件目として `めんそーれ2-30`（エマ、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_mensore2-30.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `15e31821d8a8537e423cb68b8db01afe44913dc6`

## 173. めんそーれ2-30

- manufacturer: エマ
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ボーナス+RT / 完全告知 / 沖スロ30Φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- 5号機クロニクル/PACNKで2007年9月導入を確認。
- 2009年7月30日のグリーンべると回顧記事は、前作『めんそーれ2』を「07年7月に発表」としRT搭載機と明記。
- `2007年9月 / 納品 / 導入 / 発売 / 9月3日 / 9月10日 / 9月17日 / 9月24日` 等へ検索語を変えて再探索したが、一次/業界高信頼資料から具体納品開始日は確定できず、月精度 `2007-09` とした。

### 性能コア

| 設定 | BIG系合算 | REG系合算 | 全ボーナス合算 | パチマガPAYOUT | P-WORLD/5号機クロニクル |
|---|---:|---:|---:|---:|---:|
| 1 | 約1/232.40 | 約1/239.18 | 1/117.87 | 95.61% | 94.2% |
| 2 | 約1/234.06 | 約1/252.06 | 1/121.36 | 98.40% | 96.8% |
| 3 | 約1/221.41 | 約1/240.94 | 1/115.38 | 102.23% | 101.0% |
| 4 | 約1/215.58 | 約1/239.18 | 1/113.38 | 104.31% | 103.2% |
| 5 | 約1/206.09 | 約1/234.06 | 1/109.59 | 107.65% | 106.9% |
| 6 | 約1/207.39 | 約1/204.80 | 1/103.04 | 110.57% | 110.4% |

- PACNKのPAYOUTは96/98/100/103/106/109%で、上記2系列とも一部大きく異なる。平均せず `CONFLICT` として3系列を保持。
- 50枚ベースはパチマガスロマガで設定1〜6 `36.57 / 36.56 / 36.59 / 36.59 / 36.65 / 36.68G`。
- めんそーれBIGは約256枚、BIG約192枚、REG約64枚。払い出し終了条件は345枚超 / 253枚超 / 77枚超でP-WORLDとも一致。
- RT「ネオ・スーパーモード」を搭載。特殊リプレイが契機。白7REG成立で終了し、白7REG後1G目は特殊リプレイ確率が上がり再突入契機となる。
- RT純増枚数/Gは表記揺れ・RT名・型式・純増等へ検索を分岐したが高信頼値を確定できず `UNVERIFIED`。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`。本機固有の設定変更時内部処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED`。据え置き時RT/内部状態引継ぎを直接確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみのRT/内部状態処理を直接確定できず。
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`。天井非搭載。
- ceilingAfterReset: `NONE_CONFIRMED`。リセット短縮天井なし。
- modeAfterReset: `NONE_CONFIRMED`。朝一専用通常モード/変更時モード振り分けは確認されない。
- stateAfterReset: `UNVERIFIED`。ネオ・スーパーモード中の設定変更/据え置き/電断時RT状態処理を確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: `UNVERIFIED`。本機固有ガックン・初期出目・告知ランプ/ドット等による変更判別を確定できず。
- numericResetData: `NONE_CONFIRMED`。

## 主要出典

### めんそーれ2-30
- パチマガスロマガ 基本システム: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/26/a.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/26/h.php
- パチマガスロマガ 1000円G数: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/26/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4842
- 5号機クロニクル: https://5goki.com/ema
- PACNK: https://pacnk.com/slot/tools/sh_mensore22007.html
- ドラス公式シミュレーター: https://www.dorasu.com/pc/game/pc/menso2/index.html
- P-WORLD / グリーンべると回顧: https://news.p-world.co.jp/articles/3552/greenbelt

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準173件地点から継続。2007年9月残候補の最古未処理を監査する。**
2. 残候補: `サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. 次回は上記残候補について具体納品日/ホール導入日を再比較し、最古を確定して登録する。月精度しか得られない場合は十分な再探索後に限り `2007-09` とする。
4. 2007年9月漏れ監査完了後に2007年10月へ進む。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
5. resetBehavior遡及QAは、`ウイニングレッド / ウイニングレッド30` の次に位置する既存レコードを最新mainで時系列確認し、未補完の最古機から続行する。既補完機を重複改変しない。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
