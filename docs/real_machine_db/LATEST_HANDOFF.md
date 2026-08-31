# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 173件目 `めんそーれ2-30`（エマ、2007-09）までを継承。
- 2007年9月残候補の導入日を再比較し、グリーンべると当時記事で `バリバリ伝説` の「最短2007-09-09納品予定」を確認したため優先処理。
- **174件目として `バリバリ伝説`（平和、2007-09-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-09_baribari-densetsu.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `871a1d2113331c60a50c12228bd401bf06a10501`

## 174. バリバリ伝説

- manufacturer: 平和
- releaseDate: `2007-09-09`
- generation: 5号機初期
- systemType: ボーナス+RT / 完走型RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- グリーンべると2007-08-10記事で新機種リリースを報じ、「納品は最短で9月9日の予定」と明記。
- 5号機クロニクル等の2007年9月導入とも整合。
- 後年5号機クロニクル本文にはRTゲーム数等で当時資料と整合しない記述が混在するため、導入月/機械割照合以外のゲーム性は当時業界記事・パチマガスロマガ・K-Naviを優先した。

### 性能コア

| 設定 | 赤7BIG | 青7BIG | REG | 全ボーナス合成 | パチマガPAYOUT | 5号機クロニクル |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 1/2427.26 | 1/407.06 | 1/601.25 | 1/220.66 | 96.95% | 97.2% |
| 2 | 1/2427.26 | 1/381.02 | 1/601.25 | 1/212.78 | 98.97% | 99.0% |
| 3 | 1/2427.26 | 1/366.13 | 1/579.96 | 1/205.44 | 100.69% | 100.9% |
| 4 | 1/2427.26 | 1/346.75 | 1/532.81 | 1/193.32 | 103.23% | 103.5% |
| 5 | 1/2427.26 | 1/339.56 | 1/512.00 | 1/188.32 | 104.57% | 104.5% |
| 6 | 1/2427.26 | 1/315.08 | 1/492.75 | 1/178.09 | 107.32% | 107.7% |

- 50枚ベース: 設定1〜6 `37.68 / 38.07 / 38.47 / 38.86 / 39.30 / 39.72G`。
- バリバリBIG: 純増234枚 + 120G完走型RT。
- BIG: 純増234枚。
- REG: 純増120枚。
- 通常BIG/REG後は32G CZ。特殊リプレイ `リプ・ベル・リプ` 成立でRT「バリバリチャンス」へ。
- RT増加性能は当時グリーンべるとが120Gで約70枚、パチマガスロマガが設定別+0.73〜+0.77枚/Gで差があるため `CONFLICT` として両方保持。
- 機械割もパチマガスロマガと5号機クロニクルに小差があるため平均せず保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`。本機固有の設定変更時CZ/RT状態処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED`。据え置き時のCZ/RT残G・内部状態引継ぎを直接確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみの場合のCZ/RT残G・内部状態処理を直接確定できず。
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`。通常時ゲーム数天井は確認されない。
- ceilingAfterReset: `NONE_CONFIRMED`。短縮天井・変更天井なし。
- modeAfterReset: `NONE_CONFIRMED`。朝一専用モード/変更時モード振り分けは確認されない。
- stateAfterReset: `UNVERIFIED`。32G CZ/120G RT中の設定変更・据え置き・電断時残状態処理を確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: `UNVERIFIED`。本機固有ガックン・初期出目・液晶/ランプ等による変更判別を確定できず。
- numericResetData: `NONE_CONFIRMED`。

### 再探索実施

`バリバリ伝説 / 平和 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / RT / バリバリチャンス / バリバリチャレンジ / 32G / 天井` を組み替え、当時業界記事、パチマガスロマガ、K-Navi、P-WORLD、5号機クロニクル、後年保存資料まで横断。RT/CZ構造と性能値は確定できたが、設定変更・据え置き・電断時の本機固有状態処理は直接資料を得られず推測しない。

## 主要出典

### バリバリ伝説
- P-WORLD / グリーンべると（2007-08-10）: https://news.p-world.co.jp/articles/2334/greenbelt
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/34/h.php
- パチマガスロマガ 1000円G数/RT純増: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/34/c.php
- K-Navi: https://p-kn.com/slot/632/
- 5号機クロニクル: https://5goki.com/heiwa-olympia
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2007/09/baribari-densetsu

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準174件地点から継続。2007年9月残候補の最古未処理を監査する。**
2. 残候補: `サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. 上記残候補について具体納品日/ホール導入日を再比較し、最古を確定して登録する。月精度しか得られない場合は十分な再探索後に限り `2007-09` とする。
4. `サザンドリーム` はP-WORLD/パチマガ/5号機クロニクルで2007年9月まで確認済み。具体日未確定なので次回優先再探索候補。
5. `ザ・ドゥーナッツのトンdeピース` は2007年9月導入、10月2日に都内ホールでイベント実施の業界記録あり。具体納品日は引き続き監査。
6. 2007年9月漏れ監査完了後に2007年10月へ進む。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
7. resetBehavior遡及QAは、`ウイニングレッド / ウイニングレッド30` の次に位置する既存レコードを最新mainで時系列確認し、未補完の最古機から続行する。既補完機を重複改変しない。
8. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
