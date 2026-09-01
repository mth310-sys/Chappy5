# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは231件地点（`パチスロ北斗の拳2 ネクストゾーン将` 追加済み）。
- 今回、パイオニア `ハナダマシイ` / `ハナダマシイ-30` を232・233件目として追加。
- 境界再監査で、**2008-03-02納品のオリンピア `NEO花伝説-30` がmain未登録と判明したため、234件目として遡及追加。**
- したがってレコード追加番号は234件地点だが、導入時系列上の最新前進地点は `ハナダマシイ / -30` の正式販売納品日2008-03-16。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 232. ハナダマシイ（パイオニア / 25Φ）

- new record: `docs/real_machine_db/machines/2008-03-16_hanadamashii.md`
- manufacturer: パイオニア
- modelName: `華魂（ハナダマシイ）`
- releaseDate: `2008-03-16`（グリーンべると正式販売納品開始）
- generation: 5号機初期
- systemType: ボーナス + 75G完走型RT（D-Rush）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- パチマガスロマガ実ボーナス合成: `1/210.05 / 1/199.80 / 1/190.51 / 1/182.04 / 1/174.30 / 1/167.18`
- 機械割（シミュレート）: `96.38 / 98.50 / 100.57 / 102.61 / 104.63 / 106.61%`
- 50枚ベース: `33.00 / 33.00 / 33.00 / 33.01 / 33.01 / 33.02G`
- BIG: 純増約150枚（220枚超払い出し終了）
- BIG後は必ず75G完走型RT `D-Rush`。RTで約50枚増、BIG+RT全体で約200枚増加見込み。
- D-Rush/表示上の出現率に資料差:
  - グリーンべると `1/147（設定1）〜1/113（設定6）`
  - P-WORLD `1/147 / 1/137 / 1/129 / 1/121 / 1/113 / 1/107`
  - パチマガの実ボーナス抽選 `1/210.05〜1/167.18` とは定義を分離。平均化禁止。

### releaseTiming

- グリーンべると: 2008-03-07時点で先行導入済み、正式販売の納品2008-03-16開始。
- 当時業界史アーカイブ: `2008-03-31発売（2/11先行導入）`。
- 5号機クロニクル: `2008/2`。
- 主releaseDateは当時業界一次資料の正式販売納品日 `2008-03-16`。2/11先行導入・3/31発売記録は `CONFLICT_RELEASE_TIMING_DEFINITION` として保持。

### v0.7 resetBehavior

- settingChangeBehavior / carryOverBehavior / powerCycleBehavior / D-Rush中state: `UNVERIFIED_AFTER_RESEARCH`
- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/恩恵数値: `NONE_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- パチマガ現存目次に「攻め時・ヤメ時・設定変更時」項目は残るが、検索結果から本文の変更時処理を直接確定できなかったため一般論で補完しない。

## 233. ハナダマシイ-30（パイオニア / 30Φ）

- new record: `docs/real_machine_db/machines/2008-03-16_hanadamashii-30.md`
- modelName: `華魂（ハナダマシイ）-30`
- releaseDate: `2008-03-16`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 当時業界史アーカイブは検査適合段階から `華魂` と `華魂-30` を別々に列挙。
- パチマガスロマガは `ハナダマシイ&30` として共通性能掲載、当時攻略記事も25Φ/30Φはゲーム性同一と明記。
- 全機種方針に従い独立レコード化し、共通性能値は共通掲載資料を直接根拠として採用。別機種からの推測転記ではない。
- 性能コア、D-Rush、releaseTiming conflict、resetBehavior判断は25Φ版と共通。ただし30Φ固有の型式末尾/検定番号と変更判別は未確定。

## 234. NEO花伝説-30（オリンピア）— 境界漏れ遡及追加

- new record: `docs/real_machine_db/machines/2008-03-02_neo-hana-densetsu-30.md`
- manufacturer: オリンピア
- modelName / 型式名: `NEO花伝説-30`
- releaseDate: `2008-03-02`（グリーンべると納品予定日）
- generation: 5号機初期
- systemType: ノーマル / 完全告知・30Φ
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合成: `1/291.27 / 280.07 / 267.49 / 253.03 / 242.73 / 229.15`
- REG: `1/436.91 / 420.10 / 402.06 / 378.82 / 364.09 / 343.12`
- 合算: `1/174.76 / 168.04 / 160.63 / 151.70 / 145.64 / 137.39`
- 50枚ベース（パチマガ精密）: `36.47 / 36.87 / 37.31 / 37.97 / 38.83 / 39.17G`
- グリーンべると当時説明は1000円33〜34G。精密値との差は `CONFLICT_BASE_DEFINITION` として保持。
- BIG純増約300枚、REG約105枚。
- RT/ART等の付加機能なし。
- 天井なし（必勝本で明記）。

### 機械割CONFLICT

- パチマガスロマガ シミュレート: `96.58 / 98.72 / 101.32 / 104.76 / 107.76 / 111.17%`
- 当時事前解析 / 5号機クロニクル: `95.5 / 97.4 / 99.7 / 102.7 / 105.3 / 109.4%`
- 丸め差ではないため平均化せず `CONFLICT_PAYOUT_RATE`。

### v0.7 resetBehavior

- 通常時天井: `NONE`（天井ナシ確認）
- gameCounterReset / ceilingAfterReset: `NOT_APPLICABLE_CEILING_NONE`
- RT/ARTなし、公開モードなしのため朝一専用天井/モード/恩恵数値は `NONE_CONFIRMED / NOT_APPLICABLE`
- 有利区間: `NOT_APPLICABLE`
- ガックン/初期出目/ランプ等の変更判別: `UNVERIFIED_AFTER_RESEARCH`
- 2002年4号機 `花伝説-30` のストック/モード/リセット情報は別機種なので混用禁止。

## 今回の主要出典

取得日: 2026-09-01

### ハナダマシイ / -30
- グリーンべると: https://web-greenbelt.jp/00003541/
- パチマガスロマガ基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/a.php
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/h.php
- パチマガスロマガ小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/85/c.php
- P-WORLD: https://www.p-world.co.jp/machine/database/5097
- 5号機クロニクル: https://5goki.com/pioneer
- パチスロ業界初まとめ 更新情報4: https://slothistory.com/kousin_kako04.html
- パチスロ業界初まとめ 更新情報5: https://slothistory.com/kousin_kako05.html
- マイクロオーダーサービス当時攻略アーカイブ: https://plaza.rakuten.co.jp/mosnet/diaryall/

### NEO花伝説-30
- グリーンべると: https://web-greenbelt.jp/00003478/
- K-Navi: https://p-kn.com/slot/774/
- P-WORLD: https://www.p-world.co.jp/machine/database/5090
- パチマガスロマガ確率/PAYOUT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/83/h.php
- パチマガスロマガ小役/ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/83/c.php
- パチマガスロマガ目次: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/83/olympia_slot_83.php
- 必勝本: https://p.hisshobon.jp/machine/1078
- 当時事前解析: https://ameblo.jp/samurai777net/entry-10069226725.html
- 5号機クロニクル: https://5goki.com/heiwa-olympia

## 重複防止 / 境界メモ

- 既存231件の再追加禁止。
- 232 `ハナダマシイ`、233 `ハナダマシイ-30`、234 `NEO花伝説-30` も再追加禁止。
- `ハナダマシイ` は `華魂` 表記あり。銀魂の「花魂」等と検索混同しない。
- `NEO花伝説-30` は2002年4号機 `花伝説-30` と別機種。4号機のストック/裏物/モード資料を5号機へ混入させない。
- `ハナダマシイ/-30` は正式販売3/16だが2/11先行導入記録がある。時系列監査では「市場存在日」と「全国正式納品日」を区別する。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準234件地点から継続。**
2. **導入時系列の最新前進地点は2008-03-16。2008-03-17〜03-31を具体導入日で境界監査し、未処理最古機を追加する。**
3. 同時に、今回見つかったような2008-03-02以前の境界漏れがないか、3月上旬のメーカー/業界一覧をもう一度照合する。漏れがあれば番号は後発でも導入日を正しく記録して遡及追加。
4. 4月候補へ進む前に3月列を閉じる。既知の4月候補には北電子 `月光仮面2A`（当時業界史に2008-04-07発売記録）、アルゼ `アレックス7R`（2008-04-21発売記録）があるが、3月未処理を優先。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
