# ハイハイハイビ-30

machineName: ハイハイハイビ-30
formalModelName: ハイビGX-30
manufacturer: パイオニア
releaseDate: 2014-03-31
releaseDatePrecision: exact_hall_start_calendar_with_month_crosscheck

generation: 5号機
systemType: ノーマル / リアルボーナス / 完全告知 / 30φ沖スロ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_RESET_CONTRACT

## identity

- K-Navi 2014年3月新台導入カレンダーで全国一斉導入開始日 **2014-03-31**、メーカー **パイオニア**を確認。
- パイオニア公式旧製品一覧は本機を **2014年4月発売**として月単位で掲載。3/31は月末の全国導入開始日、4月はメーカー側発売月表記として併記し、直接CONFLICT化しない。
- P-WORLDで型式名 **ハイビGX-30**、検定番号 **3S0695** を確認。
- パチマガスロマガ旧攻略ページは **パイオニア/2014年3月** と掲載。
- confidence: ANALYSIS_HIGH_DATE_WITH_OFFICIAL_MONTH_CROSSCHECK

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97% |
| 2 | 98% |
| 3 | 100% |
| 4 | 104% |
| 5 | 107% |
| 6 | 110% |

- パチマガスロマガ旧攻略とpacnkで一致。
- 5号機クロニクルも同系列を独立照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/288 | 1/436 | 1/173 |
| 2 | 1/278 | 1/420 | 1/167 |
| 3 | 1/274 | 1/394 | 1/161 |
| 4 | 1/257 | 1/370 | 1/151 |
| 5 | 1/243 | 1/350 | 1/143 |
| 6 | 1/229 | 1/332 | 1/135 |

- パチマガスロマガ旧攻略とpacnkで一致。
- 当時業界記事も設定1の合算1/173という設計意図を独立確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「ハイハイハイビ-30 / ハイビGX-30」に「50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数」を組み合わせて公式・旧攻略・古いDB・回顧資料を再探索したが、比較可能な明示数値を固定できなかった。

## netIncrease

- **NOT_APPLICABLE_REAL_BONUS_TYPE**。
- P-WORLDはART等の付加機能を持たず、ボーナスのみでコインを増やすノーマルタイプと明記。

## basicPayout

- BIG: パチマガスロマガ **純増約308枚（規定329枚払い出し）**、P-WORLD **最大308枚**で整合。
- REG: **CONFLICT_REG_PAYOUT_112_VS_100**。
  - パチマガスロマガ: 純増約112枚（規定119枚払い出し）。
  - P-WORLD: REGULAR BONUS 最大100枚。
- REGの定義差/掲載差を解消できないため平均せず双方保持。
- confidence: ANALYSIS_HIGH_BIG / CONFLICT_REG_PAYOUT

## modeSpecificMinimumData

- 5号機 / 5ライン / ノーマル / 完全告知 / 30φ沖スロ。
- ハイビスカスランプ点滅でボーナス確定。
- 全ボーナスの約7割が単独成立、約3割が小役との同時当選。
- チェリーのボーナス期待度約5%、チャンスリプレイ約25%。
- 告知タイミングはP-WORLDで先告知約60%、次ゲーム告知約40%。
- 30種類以上のプレミアム点滅と全6種類のフリーズ演出を搭載。
- AT/ART/CZ等の付加機能: 非搭載。

## ceiling

- **NONE / NOT_APPLICABLE_NORMAL_TYPE**。
- pacnkで天井機能非搭載を明示確認。
- P-WORLDのノーマル・ボーナスのみという仕様とも整合。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_UNVERIFIED_PHYSICAL_RESET_CONTRACT
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の設定変更時リール初期動作、告知ランプ、内部ボーナス状態等の物理的契約を直接固定できなかった。
- 天井・AT/ART/CZがないことから設定変更時挙動を推定しない。

### carryOverBehavior

- ゲーム数天井、AT/ART/CZ、出玉管理用モードの引継ぎは **NOT_APPLICABLE / NONE_CONFIRMED**。
- その他の本機固有の設定据え置き時物理状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの電源OFF→ON時における本機固有のリール/ランプ/内部処理契約は **UNVERIFIED_AFTER_RESEARCH**。
- パイオニア他機種の一般論から補完しない。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- 公開ゲーム数天井・周期管理なし。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井/朝一天井: NONE_CONFIRMED_AFTER_RESEARCH。

### modeAfterReset

- AT/ART/CZ・天井用内部出玉モード: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 朝一専用出玉モードは確認できない。

### stateAfterReset

- 朝一高確・CZ・RT等の内部状態: **NOT_APPLICABLE_OR_NONE_CONFIRMED_FOR_NORMAL_TYPE**。
- 設定変更専用の状態優遇/不利: NONE_CONFIRMED_AFTER_RESEARCH。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更/朝一専用の主要恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更/朝一専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 「設定変更 / リセット / 朝一 / 据え置き / ガックン / リールガックン / 初期出目 / ハイビスカス」を機種名・型式名と組み合わせ、当時攻略・旧DB・回顧資料を再探索したが、本機固有の変更判別情報を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時専用の朝一当選率、モード振り分け、短縮G数、状態振り分け等: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- `CONFLICT_REG_PAYOUT_112_VS_100`: パチマガスロマガはREG純増約112枚、P-WORLDは最大100枚。平均せず双方保持。
- パイオニア公式の「2014年4月発売」とK-Naviの「2014-03-31全国導入開始」は、月末導入と発売月表記の粒度差として扱う。
- 後継2025年「ハイビリターン-30」の仕様・数値を混入させない。
- 天井非搭載から設定変更/据え置き/電源OFF→ONの物理契約を推定しない。

## sources

取得日: **2026-09-06**

1. K-Navi「新台導入カレンダー 2014年3月」
   - https://p-kn.com/calendar/201403/
   - 2014-03-31のパチスロ パイオニア「ハイハイハイビ-30」を確認。
   - reliability: ANALYSIS_HIGH_PERIOD_CALENDAR

2. パイオニア公式「その他機種一覧」
   - https://www.slot-pioneer.co.jp/products/30.html
   - ハイハイハイビ-30を2014年4月発売として公式月単位確認。
   - reliability: OFFICIAL

3. パチマガスロマガ旧攻略「ハイハイハイビ-30」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/109/a.php
   - 2014年3月、5ライン/ノーマル/完全告知、BIG約308枚、REG約112枚。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/109/h.php
   - 設定別BIG/REG/合算/PAYOUT。
   - reliability: ANALYSIS_HIGH_PERIOD_SOURCE

4. P-WORLD「ハイハイハイビ-30」
   - https://www.p-world.co.jp/machine/database/7348
   - メーカー、型式ハイビGX-30、検定番号3S0695、5号機/ノーマル/完全告知/沖スロ、AT/ART非搭載、BIG最大308枚、REG最大100枚。
   - reliability: INDUSTRY_DATABASE_HIGH

5. pacnk「ハイハイハイビ-30 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_haihaihaibi.html
   - 設定別BIG/REG/PAYOUT、天井非搭載。
   - reliability: ANALYSIS_RETROSPECTIVE

6. 5号機クロニクル「パイオニア 5号機全機種一覧」
   - https://5goki.com/pioneer
   - 2014年4月導入、設定別機械割の独立回顧照合。
   - reliability: ANALYSIS_RETROSPECTIVE

7. 当時業界記事再録「ハイビ最新作は高い合成確率で遊びやすさを追求」2014-03-12
   - https://p-mans.blogspot.com/2014/03/
   - 完全告知ノーマルA、設定1合算1/173、単独約7割、チェリー/チャンスリプレイ同時当選、ブッコワレ告知。
   - reliability: INDUSTRY_PERIOD_REPRINT

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の本機固有物理挙動: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の本機固有物理挙動: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ON時挙動: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
