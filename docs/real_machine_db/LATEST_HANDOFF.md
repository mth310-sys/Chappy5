# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 171件目 `デジパラダイス`（デージー、2007-09）までを継承。
- **172件目として `くりぃむしちゅー`（ロデオ、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_cream-stew.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `03c4dc75522d625ac050841e592cfecade6e3326`
- CONFLICT補正commit: `8eb70c58f0e6120d3ae2f48e7537945a5cac6388`

## 172. くりぃむしちゅー

- manufacturer: ロデオ
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ノーマル / BIG+REG / 演出用10G RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- フィールズ株式会社の2007-08-10公式リリースで、ロデオ製パチスロ機『くりぃむしちゅー』を全国発売し、2007年9月にホールで遊技可能になる予定と明記。
- フィールズ決算資料・複数機種DBでも2007年9月発売/導入で一致。
- `9月3日 / 9月10日 / 9月17日 / 9月24日 / 納品 / 導入開始` を含めて再探索したが、具体納品日を一次/高信頼資料で確定できなかったため月精度 `2007-09` とした。

### 性能コア

| 設定 | 全BIG合算 | REG | ボーナス合算 | 機械割 |
|---|---:|---:|---:|---:|
| 1 | 1/485.45 | 1/753.29 | 1/295.21 | 97.4% |
| 2 | 1/485.45 | 1/753.29 | 1/295.21 | 98.5% |
| 3 | 1/442.81 | 1/675.63* | 1/267.49 | 101.2% |
| 4 | 1/420.10 | 1/661.98 | 1/257.00 | 104.0% |
| 5 | 1/387.79 | 1/624.15 | 1/239.18 | 106.7% |
| 6 | 1/360.09 | 1/569.88 | 1/220.66 | 110.8% |

- 機械割はパチ＆スロ必勝本のシミュレート値を主値。HAZUSEの整数丸め97/98/101/104/107/111%とも整合。
- `*` 設定3 REGは必勝本 `1/675.63`、pachinko's blog `1/676` に対しHAZUSE DATA `1/645.6`。平均せず `CONFLICT` として全値を保持し、2資料が一致する1/675.63を主値に採用。
- SUPER BIG平均約448枚、NORMAL BIG平均約348枚、REG平均約112枚。
- HAZUSEの払い出し条件: S-BIG 465枚超、N-BIG 420枚超、REG 12Gまたは8回入賞。
- 特殊リプレイ契機の10G演出用プチRT「緊急事態」を搭載。
- 1000円G数は旧解析検索インデックスで設定1 47.48G、設定2 50.01G、設定3 48.5Gまで確認。設定4〜6は直接値を取得できず推定していない。物差し用途では設定1 47.48Gを低設定代表値として保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`。本機固有の設定変更時内部処理を直接確定できず。
- carryOverBehavior: `UNVERIFIED`。
- powerCycleBehavior: `UNVERIFIED`。
- gameCounterReset: `NOT_APPLICABLE / NONE_CONFIRMED`。通常時ゲーム数天井なし。
- ceilingAfterReset: `NONE_CONFIRMED`。リセット短縮天井なし。
- modeAfterReset: `NONE_CONFIRMED`。朝一専用モード/変更時モード振り分けの公開情報なし。
- stateAfterReset: `UNVERIFIED`。10G「緊急事態」中の設定変更/電断時RT残G・内部状態処理を確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一専用恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: `UNVERIFIED`。本機固有ガックン・初期出目・液晶/ランプ挙動による変更判別を確定できず。
- numericResetData: `NONE_CONFIRMED`。

## 主要出典

### くりぃむしちゅー
- フィールズ株式会社 2007-08-10公式発売リリース: https://ircms.irstreet.com/contents/data_file.php?brand=79&filename=pdf_file.pdf&folder_contents=9517&src_data=38407&template=39
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/981/1/15099
- HAZUSE DATA: https://data.hazuse.com/?machine_code=6S1216
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2007/09/creamStew
- 旧slotmaniac解析: https://slotmaniac.web.fc2.com/kaiseki/creamstew.html
- パチスロ天井パラダイス 2007年: https://sloten7.com/years/y2007/
- パチ7 タイアップ史: https://pachiseven.jp/articles/detail/11773
- パチ7 回顧: https://pachiseven.jp/articles/detail/10261

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準172件地点から継続。2007年9月残候補の最古未処理を監査する。**
2. 残候補: `めんそーれ2-30 / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 熊酒場30`。
3. 次の優先候補は `めんそーれ2-30`。エマ、2007年9月導入は5号機クロニクル/PACNKで確認済み。5号機沖スロ、ボーナス+RT「ネオスーパーモード」、天井非搭載。具体納品日と性能値を別系統資料で照合して登録する。
4. `めんそーれ2-30` の機械割は5号機クロニクル `94.2/96.8/101.0/103.2/106.9/110.4%` とPACNK `96/98/100/103/106/109%` が大きく異なるため、登録時は平均せず `CONFLICT` として双方の定義・根拠を保持する。
5. 2007年9月内の月精度機は、具体日を十分再探索しても確定できない場合のみ月精度で登録する。
6. 9月漏れ監査完了後に2007年10月へ進む。`マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定は既確認。
7. resetBehavior遡及QAは、`ウイニングレッド / ウイニングレッド30` の次に位置する既存レコードを最新mainで時系列確認し、resetBehavior未補完の最古機から続行する。既補完機を重複改変しない。
8. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
