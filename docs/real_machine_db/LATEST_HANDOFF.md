# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 178件目 `サザンドリーム`（ネイチャー・アセスメント、2007-09）までを継承。
- **179件目として `マスクオブゾロ`（ロデオ、2007-09）を登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_mask-of-zorro.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `70e5d5c5a7aaf84626079e695e3af65b6d440824`

## 179. マスクオブゾロ

- manufacturer: ロデオ
- formalModel: `UNVERIFIED`
- releaseDate: `2007-09`
- generation: 5号機初期
- systemType: ノーマル / ボーナス主体 / 複数ボーナス
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入・機種同定

- 5号機クロニクルはロデオの2007年導入機として `マスクオブゾロ` を掲載し、導入時期を2007/9としている。
- P-WORLDにもパチスロ `マスクオブゾロ` の機種DBが残る。
- 2007年全機種年表でも `9月 / マスクオブゾロ / ロデオ` を確認。
- 具体納品開始日の高信頼資料は今回確定できず、推測せず月精度 `2007-09` を採用。

### 性能コア

| 設定 | BIG合成 | ZBB合成 | ボーナス合成 | PAYOUT |
|---|---:|---:|---:|---:|
| 1 | 1/366.12 | 1/287.44 | 1/146.61 | 97.80% |
| 2 | 1/366.12 | 1/273.07 | 1/142.78 | 99.95% |
| 3 | 1/326.05 | 1/277.69 | 1/136.82 | 102.55% |
| 4 | 1/341.33 | 1/252.06 | 1/131.07 | 105.30% |
| 5 | 1/303.41 | 1/273.07 | 1/130.55 | 107.94% |
| 6 | 1/302.01 | 1/234.06 | 1/118.30 | 112.59% |

- 上表はパチマガスロマガ保存ページの設定別合成確率とPAYOUT。
- 50枚ベースは設定1→6で `35.21 / 36.27 / 35.86 / 37.68 / 38.03 / 39.31G`。
- 基本獲得性能はBIG約312枚、REG約104枚、ZBB-A約26枚、ZBB-B約221枚。
- パチマガスロマガの基本システムは `ノーマル/同時成立あり`。出玉増加型RT/ART/ATは確認していない。

### CONFLICT

- 機械割はパチマガスロマガのシミュレート値 `97.80 / 99.95 / 102.55 / 105.30 / 107.94 / 112.59%` と、5号機クロニクルの `96.5 / 98.5 / 101.2 / 103.8 / 106.6 / 111.0%` が競合。
- 平均せず両系列をレコードへ保持。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED`
- carryOverBehavior: `UNVERIFIED`
- powerCycleBehavior: `UNVERIFIED`
- gameCounterReset: 通常時天井に相当するゲーム数管理は `NOT_APPLICABLE / NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE / NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `マスクオブゾロ 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井`、ロデオ名併記、型式/ボーナス名称併記へ検索語を変更し、P-WORLD、当時解析保存、古いDB、回顧資料を横断したが、本機固有の設定変更/電断処理や変更判別の直接資料は確定できなかった。

## 主要出典

### マスクオブゾロ
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/a.php
- パチマガスロマガ ボーナス確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/h.php
- パチマガスロマガ 小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/c.php
- パチマガスロマガ 機種トップ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/45/rodeo_slot_45.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4912
- 5号機クロニクル（ロデオ）: https://5goki.com/rodeo
- 2007年全機種年表: https://dorubako.biz/year/2007.html

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準179件地点から継続。** 2007年9月の月精度残候補を漏れ防止優先で閉じる。
2. 次候補は `ハイサイネオ / 学習パチスロ国語`。具体納品日が取れなければ、複数資料で2007年9月導入を確認したうえで月精度 `2007-09` で登録する。
3. 9月漏れ候補として `春夏秋冬 / 熊酒場30 / 時空大作戦` も既存レコード有無を再確認し、未処理なら時系列を崩さず差し込む。
4. 2007年9月を閉じた後に2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。
5. resetBehavior遡及QAは、新規収集を止めず、2006年5月以降でresetBehavior未収集の最古既存機を最新mainから再確認して順次補完する。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。
