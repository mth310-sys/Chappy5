# ドラゴンハナハナ-30

machineName: ドラゴンハナハナ-30
manufacturer: パイオニア
releaseDate: 2012-10-09
releaseDatePrecision: exact_day_with_month_official_support
releaseDateNotes: パイオニア公式は2012年10月発売。K-Navi、HAZUSE、後年実機DBはホール導入開始2012-10-09で一致する。一方pacnkは2012年9月導入表記のため、月単位資料差をCONFLICTとして保持し、本線キーは具体日が一致する2012-10-09を採用。
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知 / 沖スロ / 技術介入要素あり
medalDiameter: 30φ
modelName: Dハナハナ-30
approvalNumber: 2S0582
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 111.0% |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

K-Navi、pacnkで同一系列を確認。

## initialHitBySetting

### BIG / REG / 合算

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/297 | 1/496 | 1/186 |
| 2 | 1/287 | 1/464 | 1/177 |
| 3 | 1/275 | 1/431 | 1/168 |
| 4 | 1/262 | 1/397 | 1/157 |
| 5 | 1/248 | 1/366 | 1/147 |
| 6 | 1/235 | 1/336 | 1/138 |

confidence: ANALYSIS_HIGH_MULTI_SOURCE

K-Navi、HAZUSE、pacnk、ハナハナ専門解析で一致。

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「ドラゴンハナハナ-30 / ドラハナ / Dハナハナ-30 / パイオニア」と「50枚 / 1000円 / 千円 / ベース / コイン持ち / 通常時回転数」を組み替え、公式・K-Navi・P-WORLD・HAZUSE・専門解析・古いDB・回顧資料を横断したが、本2012年機の比較可能な直接値を確定できず。
- 2023年「ドラゴンハナハナ～閃光～-30」の約39.9G/50枚は別機種なので流用しない。

## netIncrease

- NOT_APPLICABLE_NORMAL_TYPE
- ART/AT/RTによる継続純増は非搭載。

## basicPayout

- BIG: **約312枚**
- REG: **約130枚**
- K-Naviは払い出し終了条件をBIG 345枚超 / REG 135枚超と掲載。P-WORLD・K-Navi・HAZUSE系資料では実獲得目安BIG約312枚、REG約130枚で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ハイビスカスランプ点灯でボーナス確定の完全告知ノーマルタイプ。
- 天井機能: **非搭載**。
- ART/AT/CZ/通常時モード管理: 物差し対象となる公開搭載なし。
- HAZUSEは「天井非搭載のノーマルタイプ、止め時・狙い目は特になし」と明記。
- confidence: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-05

### settingChangeBehavior

- **NO_GAME_COUNT_OR_CEILING_RESET_EFFECT_APPLICABLE_TO_CORE_GAMEPLAY**
- 本機は天井・ART/AT/CZを持たないノーマルタイプのため、設定変更による天井ゲーム数消去・短縮や朝一専用AT/CZといった物差し上のリセット効果は非該当。
- 設定変更操作そのものによる停止出目、ランプ、一時状態等の機種固有挙動は **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- **NO_CEILING_OR_MODE_PROGRESS_TO_CARRY_OVER**
- 天井・規定ゲーム数・ART/AT/CZモード進捗は非搭載。
- ボーナス成立状態等の電源跨ぎを含む厳密な内部保持契約は本DB目的外かつ本機固有資料で未確認。

### powerCycleBehavior

- **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_TRANSIENT_STATE**
- 単純電源OFF→ON時に引き継ぐ天井/モード進捗自体は非該当だが、停止出目・告知ランプ等の本機固有の起動挙動は確定資料を確認できず。

### gameCounterReset

- **NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_SYSTEM**

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**
- HAZUSEで天井機能非搭載を確認。

### modeAfterReset

- **NOT_APPLICABLE_NO_PUBLIC_AT_ART_CZ_GAME_NUMBER_MODE_SYSTEM**

### stateAfterReset

- **NO_RESET_SPECIFIC_INTERNAL_STATE_CONFIRMED_AFTER_RESEARCH**
- 朝一高確等の物差し上の内部状態は確認されず。設定変更時の一時的内部契約を推測しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**

### resetBenefits

- **NONE_APPLICABLE_TO_CEILING_MODE_AT_CZ**
- 天井短縮、朝一モード、AT/ART/CZ優遇などはシステム上非該当。

### resetPenalties

- **NONE_APPLICABLE_TO_CEILING_MODE_AT_CZ**
- 天井進捗消失等は非該当。

### resetDetection

- **UNVERIFIED_AFTER_RESEARCH**
- 「設定変更 / リセット / 朝一 / 据え置き / ガックン / 初期出目 / 電源OFF ON」と機種名・略称・型式名を組み替え、当時解析・ハナハナ専門資料・古いDB・回顧資料を再探索したが、本2012年機固有の変更判別契約を確定できず。
- 後継「ドラゴンハナハナ～閃光～」の朝一フェザーランプ等は別機種のため流用しない。

### publicMorningNumbers

- **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時専用の当選率、モード振り分け、短縮天井等の公開数値はシステム上非該当または確認なし。

### numericResetData

- normalCeiling: NOT_APPLICABLE
- resetCeiling: NOT_APPLICABLE
- resetModeDistribution: NOT_APPLICABLE_TO_PUBLIC_CORE_SYSTEM
- resetSpecificHitRate: NONE_CONFIRMED

resetQaReliability: SYSTEM_NON_APPLICABILITY_CONFIRMED_FOR_CEILING_MODE_AT_CZ__MACHINE_SPECIFIC_DETECTION_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH

## conflicts

1. **導入時期**
   - パイオニア公式: 2012年10月発売
   - K-Navi: 2012-10-09
   - HAZUSE: 2012-10-09
   - 後年実機DB: 2012-10-09
   - pacnk: 2012年9月導入
   - `CONFLICT_RELEASE_MONTH`。具体日一致を優先し、本線キーは2012-10-09。

## missingFields

- 50枚あたりゲーム数/ベース
- 設定変更時の停止出目・ランプ等の機種固有挙動
- 単純電源OFF→ON時の停止出目・告知等の機種固有挙動
- 本機固有のガックン等変更判別

## sources

取得日: 2026-09-05

1. パイオニア公式 2012年製品一覧
   - https://www.slot-pioneer.co.jp/products/2012.html
   - 2012年10月発売、製品存在を確認。
   - reliability: OFFICIAL

2. パイオニア公式 更新履歴
   - https://www.slot-pioneer.co.jp/news.html
   - 2012-08-07以降のプレサイト/展示会、2012-08-22機種サイト公開、2012-10-10設置店検索追加等の当時履歴。
   - reliability: OFFICIAL

3. K-Navi ドラゴンハナハナ-30
   - https://p-kn.com/slot/1702/
   - ホール導入開始2012-10-09、BIG/REG/合算、機械割、払い出し終了条件。
   - reliability: ANALYSIS_HIGH

4. K-Navi ボーナス確率
   - https://p-kn.com/slot/1702/40298/
   - BIG約312枚、REG約130枚、設定別BIG/REG/合算。
   - reliability: ANALYSIS_HIGH

5. P-WORLD ドラゴンハナハナ-30 2012年
   - https://www.p-world.co.jp/machine/database/6832
   - 5号機ノーマル/沖スロ、BIG最大312枚、REG最大130枚、ART等付加機能非搭載。
   - reliability: INDUSTRY_DATABASE

6. HAZUSE ドラゴンハナハナ-30
   - https://hazuse.com/machine/pachislot/2S0582/
   - 型式Dハナハナ-30、検定番号2S0582、導入開始2012-10-09、設定別BIG/REG/合算。
   - reliability: ANALYSIS_HIGH

7. HAZUSE 天井・設定判別
   - https://hazuse.com/machine/pachislot/2S0582/
   - 天井非搭載のノーマルタイプ、止め時/狙い目特になし。
   - reliability: ANALYSIS_HIGH

8. pacnk ドラゴンハナハナ-30
   - https://pacnk.com/slot/tools/sh_dragonhana.html
   - 2012年9月導入表記、設定別BIG/REG/PAYOUTを独立照合。
   - reliability: RETROSPECTIVE_ANALYSIS

9. ハナハナタイム ドラゴンハナハナ-30 機種情報
   - https://hanahana.man-soft.com/dragonhanahana/machine.html
   - BIG約312枚、REG約130枚、設定別BIG/REG/合算を独立照合。
   - reliability: SPECIALIST_RETROSPECTIVE_ANALYSIS

10. スロ安サーチ 実機情報
   - https://slot-price.com/slot_price_details/id/559
   - 型式Dハナハナ-30、店導入日2012-10-09を後年DBとして照合。
   - reliability: RETROSPECTIVE_DATABASE
