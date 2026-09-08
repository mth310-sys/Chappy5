machineName: 防空少女ラブキューレ
manufacturer: KPE / Konami Amusement
releaseDate: 2017-03-21
recordNumber: 1061
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ / セット継続型ART
formalModelName: ラブキューレ／KY
certificationNumber: 6S1317
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity
- コナミアミューズメント機種アーカイブで2017年3月稼働・5号機A+ARTを確認。
- HAZUSE、K-Navi、パチビーで導入開始日2017-03-21が一致。
- HAZUSE型式DBで正式型式 `ラブキューレ／KY`、検定番号 `6S1317` を確認。
reliability: OFFICIAL_FOR_MONTH_AND_SYSTEM; MACHINE_DB/ANALYSIS_HIGH_FOR_EXACT_DATE_MODEL_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.5% |
| 3 | 101.7% |
| 4 | 104.2% |
| 5 | 107.8% |
| 6 | 113.5% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG BONUS EX | BIG | REG | ボーナス合算 | ART初当り |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/2048.0 | 1/329.3 | 1/668.7 | 1/199.2 | **CONFLICT: 1/365.3 vs 1/363.5** |
| 2 | 1/2048.0 | 1/316.6 | 1/668.7 | 1/194.4 | 1/307.1 |
| 3 | 1/2048.0 | 1/309.1 | 1/642.5 | 1/189.4 | 1/339.3 |
| 4 | 1/2048.0 | 1/304.8 | 1/601.2 | 1/184.1 | 1/282.7 |
| 5 | 1/2048.0 | 1/291.3 | 1/601.2 | 1/179.1 | 1/307.3 |
| 6 | 1/2048.0 | 1/276.5 | 1/555.4 | 1/169.3 | 1/240.4 |
- HAZUSEは設定1 ART初当りを1/365.3、pachislo-dataは1/363.5と掲載。設定2～6は一致するため、設定1だけ平均せずCONFLICTとして保持。
- BIG欄はBIG BONUS EXを除く通常BIG、ボーナス合算はEXを含む合成値。
reliability: ANALYSIS_HIGH_MULTI_SOURCE; CONFLICT_FOR_SETTING1_ART_INITIAL

## baseGamesPer50
- 約31G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「絶対空域」単体純増: 約1.0枚/G。
- ボーナス込み実効表記: 約1.9枚/G。
- 定義を混同せず分離保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「絶対空域」: 1セット20G以上、初回30G以上。継続抽選+セットストック型。
- BIG BONUS / BIG BONUS EX: 純増200枚。
- REG系（SHOOTING BONUS / 殲滅ボーナス）: 純増約50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: **ボーナス間777G**到達で成功確定CZ「空戦バトル」に当選し、実質ART確定。
- ART中に777Gへ到達した場合はART終了後に確定CZを経由するとの当時攻略記述あり。
- CZ初当り参考値: 設定1約1/250、設定2約1/215、設定3約1/235、設定4約1/190、設定5約1/230、設定6約1/169。
- 新ソニックモード/無限ART等を搭載するが、実機完全再現用の詳細抽選はSCOPE_EXCLUDED。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 一撃の当時「天井/設定変更」ページでは、設定変更時の①天井ゲーム数、②状態、③液晶ステージをすべて `現在調査中` と明記。
- 表記揺れ `防空少女ラブキューレ / ラブキューレ / ラブキューレKY / ラブキューレ／KY`、メーカー `KPE / Konami` と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替え、公式アーカイブ・HAZUSE・K-Navi・当時解析・古い攻略記事・後年整理資料を再探索したが、初代2017年機について後発の高信頼な確定契約を固定できなかった。
- 後継スマスロ「防空少女ラブキューレ2」のリセット仕様は別機種のため混入しない。
- よって天井RESET/CARRYOVER、状態RESELECT/CARRYOVERを一般的5号機挙動から推測しない。
reliability: UNVERIFIED_AFTER_RESEARCH_WITH_DIRECT_CONTEMPORARY_UNKNOWN_TABLE

### carryOverBehavior
- 据え置き時のボーナス間777G進捗・内部状態の引継ぎ契約は、十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 一撃当時資料は純電源OFF→ONについて、①天井ゲーム数、②状態、③液晶ステージをすべて `現在調査中` としている。
- 後発資料で初代2017年機固有の確定的な引継ぎ/初期化契約を確認できなかったため `UNVERIFIED_AFTER_RESEARCH`。
reliability: UNVERIFIED_AFTER_RESEARCH_WITH_DIRECT_CONTEMPORARY_UNKNOWN_TABLE

### gameCounterReset
- 通常天井条件そのものはボーナス間777Gで確定。
- 設定変更時: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常: ボーナス間777Gで確定CZ→ART。
- 設定変更専用の短縮天井・変更天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時に通常777G進捗がRESETされるかCARRYOVERされるかは `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用のゲーム数モード/設定変更専用モードおよび公開振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ART中のチャージレベル等は通常ゲーム性の内部要素であり、朝一専用リセット契約としては固定しない。

### stateAfterReset
- 設定変更時・純電源OFF→ON時の通常/高確等の内部状態処理は一撃当時資料で調査中。
- 後発の初代機固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更/朝一専用として公開された確定的な短縮天井・高確率スタート・初当り優遇数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 2017-03-24の個人実戦記事では、朝一最初のチャンスリプレイ成立後に左上エネルギーメーターの挙動を比較して設定変更を推測できる可能性が報告されている。ただし個人実戦由来で、メーカー/高信頼解析の確定契約ではないため `LOW_CONFIDENCE_EXPERIMENTAL_CLUE` として隔離。
- 本機固有の確定的ガックン、ランプ、初期出目、液晶ステージによる変更判別は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井進捗自体の設定変更契約が未固定のため、前日G数からの変更判別ルールも作らない。
reliability: LOW_CONFIDENCE_FOR_METER_CLUE; UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- resetShortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetHighStateStartRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificEarlyHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- normalCeilingReference: `BONUS間777G`

## dataQualityNotes
- 2017-03-21導入はHAZUSE・K-Navi・パチビー・複数解析で一致、コナミ公式アーカイブは2017年3月稼働と記載。
- 型式/検定番号はHAZUSEで直接確認。
- 機械割97.2～113.5%、ボーナス確率、31G/50枚、ART約1.0枚/G、ボーナス込み約1.9枚/G、BIG200枚、REG約50枚、ボーナス間777G天井は複数資料で高一致。
- ART初当りは設定1のみHAZUSE `1/365.3` とpachislo-data `1/363.5` が競合。設定2～6は一致。平均・丸め統合せずCONFLICT保存。
- ART基本ゲーム数はHAZUSE/P-WORLDが「1セット20G以上・初回30G以上」。詳細セット振り分けは収集しない。
- resetBehaviorは当時一撃が設定変更・純電断とも全主要項目を「調査中」と明記しており、後年の別機種「ラブキューレ2」のリセット仕様を初代へ転記しない。

## conflicts
- `CONFLICT_ART_INITIAL_SETTING1`: HAZUSE `1/365.3` vs pachislo-data `1/363.5`。設定2～6は一致。平均せず両値保持。

## missingFields
- setting-change ceiling counter treatment: `UNVERIFIED_AFTER_RESEARCH`。
- carry-over ceiling counter treatment: `UNVERIFIED_AFTER_RESEARCH`。
- pure power-cycle ceiling/state/stage treatment: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific deterministic reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用のCZ/ART/特化ゾーン内部抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / コナミアミューズメント機種アーカイブ: https://www.konami.com/amusement/psm/archive/ps/2017/lovekyure/index.html
- MACHINE_DB / HAZUSE 機種概要・型式・検定番号: https://hazuse.com/machine/pachislot/6S1317/genre/209/
- ANALYSIS / HAZUSE 基本スペック・確率・機械割・配当: https://hazuse.com/machine/pachislot/6S1317/genre/201/
- ANALYSIS / 一撃 天井・設定変更・電源OFF/ON: https://1geki.jp/slot/s_lovekyure/3/
- ANALYSIS / pachislo-data 機種解析: https://pachislo-data.com/kpe/33356
- MACHINE_DB / K-Navi 機種概要: https://p-kn.com/slot/2711/
- MACHINE_DB / パチビー: https://www.pachibee.jp/machines/lecture/217020005
- MACHINE_DB / P-WORLD: https://www.p-world.co.jp/machine/database/8274
- RETROSPECTIVE / みんスロ: https://minslo.com/%E9%98%B2%E7%A9%BA%E5%B0%91%E5%A5%B3%E3%83%A9%E3%83%96%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%AC/
- LOW_CONFIDENCE_EXPERIMENTAL / 2017-03-24朝一実戦記事: https://episode.doorblog.jp/archives/50920201.html
