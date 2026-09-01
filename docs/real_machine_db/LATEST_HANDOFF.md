# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは220件地点（`銀河鉄道物語` 追加済み）。
- 2008-01-07同日候補の **`インディ・ジョーンズS` を221件目として追加済み。**

## 221. インディ・ジョーンズS

- new record: `docs/real_machine_db/machines/2008-01-07_indiana-jones-s.md`
- commit: `579a6c02e482c581d577fdaf10f770d25adb2d94`
- manufacturer: SANKYO
- releaseDate: `2008-01-07`
- generation: 5号機
- systemType: ボーナス主体 + RT
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 導入日の同定

- SANKYO公式: `2008.01`。
- 当時グリーンべると: 2007-11-28発表、銀河鉄道物語/インディ・ジョーンズSとも「1月上旬の納品予定」。
- 直前調査で確認済みの当時系旧DB「パチスロ業界初まとめ」: 両機 `2008/1/7発売`。
- 日精度は旧DB値を採用し、公式月/当時業界の1月上旬で整合確認。

### 性能コア

- BIG: `1/682.67 / 1/590.41 / 1/520.13 / 1/485.45 / 1/455.11 / 1/428.34`
- REG: 全設定約 `1/728.18`
- RT「アドベンチャータイム」出現率: `1/661 / 1/661 / 1/668 / 1/712 / 1/682 / 1/618`
- BIG/REG/RT込み合成（公式/K-Navi表示）: `1/230 / 1/218 / 1/208 / 1/206 / 1/198 / 1/187`
- 機械割: `95.3 / 98.2 / 101.4 / 103.2 / 105.5 / 108.0%`
- 50枚ベース: 当時業界発表の代表値 `約44G`。設定別当時解析 `43.0 / 43.5 / 44.8 / 45.7 / 46.9 / 47.9G`。
- BIG: 466枚超払い出し、純増約330枚。
- REG: 146枚超払い出し、純増約106枚。
- RT「アドベンチャータイム」: 約 `+0.9枚/G`、100Gまたは次回BIG/RBまで。

### CONFLICT / 定義注意

- `CONFLICT_BASIC_PAYOUT_SOURCE`: 当時グリーンべると/パチマガスロマガ/P-WORLDはBIG約330枚・REG約106枚で整合。一方、後年5号機クロニクルはBIG約210枚・REG約60枚。平均せず双方保持し、当時複数一致系列を物差し主系列とする。
- `TERMINOLOGY_NOTE_RT_ART`: SANKYO公式/当時グリーンべると/パチマガスロマガ/K-Naviは「RT」。後年5号機クロニクルは「ART」。本DBでは当時資料を優先しRT分類。
- 公式/K-Naviの「合成1/230〜1/187」はBIG+REGだけではなくRT契機を含む表示値。BIG+REGのみのボーナス合算とは定義を分離。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井 `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮/朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 設定変更専用/朝一専用内部モード `NONE_CONFIRMED`。8ライン/洞窟ステージは液晶演出上の滞在ステージとして分離。
- stateAfterReset: RT中の設定変更/据え置き/電断処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: ガックン/初期出目/液晶/RT挙動等、本機固有資料は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された朝一専用数値 `NONE_CONFIRMED`。

### 主要出典

- SANKYO公式: https://www.sankyo-fever.jp/collection/525/
- グリーンべると: https://web-greenbelt.jp/00004376/
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/13/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/5006
- K-Navi: https://p-kn.com/slot/740/
- 当時解析: https://macerate.seesaa.net/article/78021405.html
- 5号機クロニクル: https://5goki.com/sankyo

取得日: 2026-09-01

## 2008年1月 初期候補監査

- `銀河鉄道物語` / `インディ・ジョーンズS`: ともに2008-01-07候補として処理済み。再追加禁止。
- `餓狼伝説スペシャル`: グリーンべるとでトップ納品 `2008-01-20` 予定。関東1都6県は部品供給不足で遅延し1/27以降納品見通し。**次回最優先候補。**
- `まぁさん`: 4Gamer掲載のサミーネットワークス発表文で `2008-01-21` 実機導入同時配信。旧DBの2007-12表記は `CONFLICT_DATE_MONTH` 候補として維持。
- その後の1月候補として `島育ち / ウルトラキューティーハニー3 / めんそーれ2` 等を具体導入日で再比較し、未処理最古順に前進する。

## resetBehavior 遡及QA

- `ランブルローズ（2006-08）` まで補完済み。
- 次の未補完対象は `逮捕しちゃうぞ（2006-08-28）`。
- 新規収集を止めず、余力のある回で既存性能値をやり直さずresetBehaviorのみ補完する。

## 重複防止

- 217: `バーチャファイターF`。再追加禁止。
- 218: `学習パチスロ 理科`。再追加禁止。
- 219: `パンドラ`。再追加禁止。
- 220: `銀河鉄道物語`。再追加禁止。
- 221: `インディ・ジョーンズS`。再追加禁止。
- 既存の `NEO花物語 / スーパービンゴV / CANスロ / パチスロ「機動戦士ガンダムII～哀・戦士編～」 / パチスロシティーハンター / 名門!夢色学園生徒会 / バーチャファイターT / ぴかっとシーサー / バミューダ / サンバ×サンバ / ハナマル!学園奮闘記! / ダイナマイトリターンズ` は再追加禁止。

## 次回再開地点

1. **LATEST_HANDOFF基準221件地点から継続。**
2. **`餓狼伝説スペシャル` を次の最有力未処理機種として、2008-01-20トップ納品予定と地域遅延を再確認したうえで性能コア + v0.7 resetBehavior正式収集。**
3. `まぁさん（2008-01-21実機導入資料）` と1月中旬〜下旬候補の日付を並行監査し、餓狼伝説スペシャルより古い未処理機が見つかれば漏れ防止で先に遡及処理する。
4. resetBehavior遡及QAは `逮捕しちゃうぞ（2006-08-28）` から再開。
5. 欠損は検索語・資料系統を十分変更してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。兄弟機・後継機仕様を根拠なしに流用しない。
