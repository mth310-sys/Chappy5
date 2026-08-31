# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 176件目 `スロット春夏秋冬`（西陣 / ソフィア、2007-09-24）までを継承。
- 2007年9月残候補 `サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / マスクオブゾロ / 学習パチスロ国語` を再監査。具体納品日を推測挿入せず、前回HANDOFF方針どおり月精度で9月漏れを閉じる方式へ移行。
- **177件目として `ザ・ドゥーナッツのトンdeピース`（ラスター、2007-09）を登録。** 当時保存資料では「9/中発売確定」まで確認したが具体日を確定できないためreleaseDateは `2007-09` のまま保持。
- 新規レコード: `docs/real_machine_db/machines/2007-09_the-donuts-ton-de-piece.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `bccd97423bb2cdee59401f8b8fdac0fffc28a3cb`
- resetBehavior遡及QAは `ゴールドシオ30`（2006-05）を補完。既存 `COMPLETE_CORE` を維持し、reset QAを別管理で `PARTIAL` とした。
- ゴールドシオ30 reset QA commit: `4f0b02782d1bdd9d89bac54f5efb5f2f7263b152`

## 177. ザ・ドゥーナッツのトンdeピース

- manufacturer: ラスター
- formalModel: `トンデピースZ`
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ボーナス + CZ + 500G完走型RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- Pマンズ保存記事は2007-08-07時点でラスターが販売開始したことを報道。
- 当時のパチスロ業界初まとめ保存資料は `ザ・ドゥーナッツのトンdeピースZ` を「既に発売確定（9/中）」と記載。
- 5号機クロニクル、pacnk、保存スペック資料はいずれも2007年9月導入で一致。
- K-Navi業界ニュースで2007-10-02に都内ホールで本機イベント実施を確認。
- 具体納品日の一次資料は今回も確定できなかったため日付を作らず `2007-09` とした。

### 性能コア

| 設定 | BIG | PIG | 合算 | 機械割 |
|---|---:|---:|---:|---:|
| 1 | 1/242.70 | 1/546.10 | 1/168.0 | 95.0% |
| 2 | 1/234.10 | 1/546.20 | 1/163.8 | 97.0% |
| 3 | 1/226.00 | 1/504.10 | 1/156.0 | 100.0% |
| 4 | 1/218.50 | 1/504.20 | 1/152.4 | 102.0% |
| 5 | 1/211.40 | 1/468.10 | 1/145.6 | 104.0% |
| 6 | 1/204.80 | 1/468.20 | 1/142.5 | 105.0% |

- BIG/PIGはpacnkと保存スペック資料で一致。
- 合算はK-Naviと保存スペック資料で一致。
- 機械割は5号機クロニクルとpacnkで一致。
- 通常時1000円あたり **31.99G**（設定共通）。
- BIG純増約170枚、PIG純増約50枚。
- 500G完走型RT「スーパーボーナス」はパチマガスロマガ **+0.43枚/G**、当時保存資料 **約+0.4枚/G** で丸め差として整合。
- 通常時はリプレイ契機の180G低性能RT → CZ → CZ中にリプレイより先にトウモロコシ成立で500G RTという構造。
- 500G RTはボーナスを引いても終了せず、ボーナス消化中もRT状態/ゲーム数を引き継ぐ貫通型2種BB構造。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED / PARTIAL`。設定変更時に180G低性能RT残G、CZ、500G RT残Gがどう処理されるか直接資料を確定できず。
- carryOverBehavior: `UNVERIFIED`。据え置き時の180G内部カウンタ/CZ/500G RT状態引継ぎを直接確定できず。
- powerCycleBehavior: `UNVERIFIED`。電源OFF→ONのみでの同状態保持/初期化を直接確定できず。
- gameCounterReset: 一般的な通常時ハマリ天井は `NONE_CONFIRMED`。180Gは低性能RT終了からCZへ至るゲーム性上の周期であり、ボーナス間天井ではない。営業日跨ぎの当該内部カウンタ処理はUNVERIFIED。
- ceilingAfterReset: 通常時天井 / リセット短縮天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード / 設定変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: 180G低性能RT/CZ/500G RT状態処理 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン・初期出目・液晶状態等による変更判別 `UNVERIFIED`。
- numericResetData: 公開された朝一専用数値 `NONE_CONFIRMED`。

## resetBehavior遡及QA

### ゴールドシオ30（2006-05）

- 既存性能status `COMPLETE_CORE`を維持してv0.7 resetBehaviorを追加。
- パチマガスロマガでRT・小役同時成立なしのシンプルなノーマル完全告知機と確認。
- pacnkで天井機能非搭載を確認。
- 通常時天井、RT/AT/ART、モード管理、有利区間、リセット短縮天井、朝一専用モードは `NOT_APPLICABLE / NONE_CONFIRMED`。
- P-WORLDの「ボーナス後32G以内の再当選でプレミアム告知」は通常抽選に対する演出仕様であり、朝一/リセット恩恵として扱わない。
- 本機固有ガックン、初期出目、電断時ランプ等の設定変更判別は十分な直接資料がなく `UNVERIFIED`。
- resetBehaviorQA: `PARTIAL`。

## 主要出典

### ザ・ドゥーナッツのトンdeピース
- Pマンズ保存記事: https://p-mans.blogspot.com/2007/08/
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/16/a.php
- パチマガスロマガ小役/RT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/16/c-1.php
- K-Navi: https://p-kn.com/slot/563/
- P-WORLD: https://www.p-world.co.jp/machine/database/4868
- 5号機クロニクル: https://5goki.com/luster
- pacnk: https://pacnk.com/slot/tools/sh_zadunattsunotondepisu.html
- パチ7技術回顧: https://pachiseven.jp/articles/detail/18289
- K-Navi業界ニュース: https://p-kn.com/topics/news/382/

### ゴールドシオ30
- P-WORLD: https://www.p-world.co.jp/machine/database/4171
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/79/a.php
- pacnk: https://pacnk.com/slot/tools/sh_goldshio.html
- 5号機クロニクル: https://5goki.com/pioneer

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準177件地点から継続。** 2007年9月の月精度残候補を漏れ防止優先で閉じる。
2. 次の優先候補は `サザンドリーム`。2007年9月導入、ネイチャー・アセスメント製、機械割96.9〜107.1%は5号機クロニクルで確認済み。具体納品日が確定できなければ `2007-09` の月精度で登録する。
3. 続いて `ハイサイネオ / マスクオブゾロ / 学習パチスロ国語` を同方式で再監査し、性能コアとv0.7 resetBehaviorを同時収集する。
4. 9月残候補を閉じた後に2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
5. **resetBehavior遡及QAの次候補は、2006年5月以降でresetBehavior未収集の最古機を最新mainから再確認して選ぶ。** 既存性能値をやり直さずresetBehaviorのみ補完する。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
