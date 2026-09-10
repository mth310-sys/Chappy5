# No.1268 アナザーハナビ弥生ちゃん

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: アナザーハナビ弥生ちゃん
- manufacturer: ユニバーサルブロス
- releaseDateCanonical: 2019-03-04
- releaseDatePlannedConflict: 2019-02-25
- generation: 6号機
- systemType: AT / CZ経由・直撃型 / セット数・マップ管理AT
- formalModelNameCanonical: `S／アナザーハナビ弥生ちゃん／DH`
- certificationNumber: `8S1059`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | CZ「玉貼りチャンス」初当たり | AT「YAYOI TIME」初当たり | 機械割 |
|---:|---:|---:|---:|
| 1 | 1/119.2 | 1/369.8 | 97.7% |
| 2 | 1/84.5 | 1/196.1 | 98.8% |
| 5 | 1/75.0 | 1/153.5 | 103.0% |
| 6 | 1/67.1 | 1/112.3 | 108.2% |

- HAZUSE、一撃、ちょんぼりすた、すろぱちくえすと等で一致。

### baseGamesPer50
- 設定1: **約50G/50枚**
- 設定2: **約52G/50枚**
- 設定5: **約54G/50枚**
- 設定6: **約55G/50枚**
- 代表値のみの資料では約50G/50枚。設定別値を優先し、定義差として保持。

### netIncrease / basicPayout
- AT純増: **約4.5枚/G**。
- AT「YAYOI TIME」: **1セット約100枚**、セット数+全17種マップ管理。
- 継続モードの公開期待度: 16% / 25% / 50% / 62.5% / 77% / 85% / 100%。物差し上は基本AT性能の補助値として保持。

## modeSpecificMinimumData
- CZ「玉貼りチャンス」: **10G+α**、設定1のAT期待度約30%。
- AT直撃も存在し、設定別直撃率は 1/1767.9 / 1/641.2 / 1/496.6 / 1/331.7。
- 通常ゲーム数天井: **非搭載**。
- AT終了後はCZへ移行する解析で一致。

## resetBehavior
### settingChangeBehavior
- 本機専用朝一解析で、設定変更時の**内部状態はRESET**。
- 朝一ステージは当時資料で調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを純電源OFF→ONから独立させた本機固有の全内部契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電源OFF→ON時の内部状態引継ぎ資料はあるが、据え置きへ自動転記しない。

### powerCycleBehavior
- 純電源OFF→ON時は**内部状態CARRY_OVER**とする本機専用解析が複数系統で一致。
- 液晶/ステージ復帰位置は当時資料で調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- CZ/AT前兆等の個別内部ゲーム数について、設定変更/据え置き/純電断別の公開固定契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- リセット専用短縮天井: `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- 朝一専用モード振り分け/設定変更専用マップ振り分けの公開固定値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常時にはCZ内部モード、AT継続マップが存在するが、reset専用契約と混同しない。

### stateAfterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRY_OVER**。
- 据え置き単独条件: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 6号機ATのため有利区間対象世代。
- 本機固有資料で設定変更/据え置き/純電断別の有利区間ランプ・有利区間状態そのものの直接契約を十分な確度で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般6号機仕様から推定補完しない。

### resetBenefits
- 設定変更専用の天井短縮、AT直撃優遇、CZ優遇、専用モード優遇など比較可能な公開固定値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 後年のリセット一覧でも本機は「リセット恩恵は特になし」と整理されている。

### resetPenalties
- 天井非搭載のため宵越し天井進行喪失はなし。
- その他の設定変更専用不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 当時解析の朝一リセット判別欄は**調査中**。
- ガックン、有利区間ランプ、初期出目、ステージ等による本機固有の確定判別条件/発生率は、検索語・資料系統変更後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- resetShortenedCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetMorningHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDate / formalModel
- HAZUSE、K-Navi、ちょんぼりすた等の実導入系データベースは **2019-03-04** を導入開始日としているためcanonical。
- ALL7 2019年2月導入予定一覧、一撃、すろぱちくえすと、モゲスロ等は **2019-02-25予定/導入** とするため `CONFLICT_RELEASE_DATE_PLANNED_2019_02_25_VS_ACTUAL_DB_2019_03_04` として保持。
- HAZUSEで型式 **`S／アナザーハナビ弥生ちゃん／DH`**、検定番号 **`8S1059`** を確認。

## missingFields
- 据え置きと純電断を完全分離した内部状態契約。
- 設定変更/据え置き/純電断別の有利区間直接契約。
- 朝一ステージ確定値。
- 本機固有ガックン条件・発生率、その他確定的な変更判別法。
- reset専用モード振り分け/朝一当選率。

## conflicts
- `CONFLICT_RELEASE_DATE_PLANNED_2019_02_25_VS_ACTUAL_DB_2019_03_04`
  - 2019-02-25: ALL7月間導入予定、一撃、すろぱちくえすと、モゲスロ等。
  - 2019-03-04: HAZUSE、K-Navi、ちょんぼりすた、おスロおパチおいでやす等。
  - 「予定日」と後発の「導入開始日」が混在している可能性が高いため平均化せず、ホール実導入時系列用canonicalは2019-03-04とした。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/8S1059/ — 型式、検定番号、2019-03-04、設定別CZ/AT、機械割、ベース、純増 — reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. K-Navi — https://p-kn.com/slot/3175/ — 2019-03-04ホール導入開始 — reliability: `MACHINE_DB_CROSSCHECK`
3. ちょんぼりすた — https://chonborista.com/slot/universal-slot/74840/ — 2019-03-04、性能コア、設定別ベース、天井非搭載、設定変更時内部状態RESET/電源入切時CARRY_OVER — reliability: `ANALYSIS_HIGH`
4. おスロおパチおいでやす — https://oslo-opachi.com/2019/03/04/post-4860/ — 性能コア、天井非搭載、朝一設定変更=内部状態RESET/電源入切=CARRY_OVER — reliability: `CONTEMPORARY_ANALYSIS_CROSSCHECK`
5. 一撃 — https://1geki.jp/slot/s_ahanabi/ — 2019-02-25導入予定、設定別AT/機械割、純増約4.5枚/G、1セット約100枚 — reliability: `ANALYSIS_HIGH`
6. すろぱちくえすと — https://www.slopachi-quest.com/article/another-hanabi-yayoichan/ — 2019-02-25、設定別CZ/AT、約50G、純増、天井非搭載 — reliability: `SECONDARY_ANALYSIS_CROSSCHECK`
7. モゲスロ — https://moge-site.com/archives/20931 — 2019-02-25、性能値、朝一リセット判別は当時「調査中」 — reliability: `CONTEMPORARY_ANALYSIS`
8. ALL7 2019年2月導入予定一覧 — https://www.all7.jp/plans/index/2019/02 — 2019-02-25導入予定 — reliability: `INDUSTRY_SCHEDULE`
9. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/10/at-01.php — AT1セット約100枚、純増約4.5枚/G — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
10. スロリスクタイム — https://pachisuro100.com/reset/ — 後年リセット一覧で「リセット恩恵は特になし」 — reliability: `RETROSPECTIVE_SECONDARY`

## confidence
- releaseDateCanonical: `CONFLICT_RESOLVED_FOR_CHRONOLOGY_ACTUAL_DB_PREFERRED`
- formalModelName/certificationNumber: `ANALYSIS_HIGH_MACHINE_DB`
- performanceCore: `ANALYSIS_HIGH_CROSSCHECKED`
- resetBehaviorCore: `ANALYSIS_HIGH_PARTIAL_CROSSCHECKED`
- advantageousSectionReset: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- numericResetData: `PARTIAL_RESEARCH_EXHAUSTED`
