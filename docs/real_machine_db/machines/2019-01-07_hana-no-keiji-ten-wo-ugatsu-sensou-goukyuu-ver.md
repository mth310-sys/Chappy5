# No.1255 戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 戦国パチスロ花の慶次～天を穿つ戦槍～剛弓ver.
- manufacturer: ニューギン / EXCITE
- releaseDateCanonical: 2019-01-07
- generation: 5.9号機
- systemType: ART / CZ / 擬似ボーナス
- formalModelNameCanonical: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## releaseDateEvidence
- ちょんぼりすた、パチナビで2019-01-07導入が一致。
- グリーンべるとは2018-11-22記事で「納品は2019年1月6日予定」と報道しており、翌1月7日のホール導入と整合する。
- pachislo-dataには2019-01-21導入予定表記があり、日付差は `CONFLICT_RELEASE_DATE_2019_01_07_VS_2019_01_21` として保持。canonicalは複数資料一致＋業界納品予定と整合する2019-01-07。
- confidence: `INDUSTRY + ANALYSIS_HIGH_CROSSCHECKED`。

## performanceCore
### payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.2% |
| 2 | 99.3% |
| 3 | 100.8% |
| 4 | 102.1% |
| 5 | 104.0% |
| 6 | 105.3% |

### initialHitBySetting
| 設定 | ART初当たり | CZ出現率 |
|---:|---:|---:|
| 1 | 1/692 | 1/377 |
| 2 | 1/691 | 1/377 |
| 3 | 1/683 | 1/378 |
| 4 | 1/677 | 1/379 |
| 5 | 1/669 | 1/380 |
| 6 | 1/664 | 1/382 |

### baseGamesPer50
- 約50G/50枚。

### netIncrease / basicPayout
- ART「大合戦BONUS」純増: 約2.0枚/G。
- 1セットの継続ゲーム数は不定。
- ART継続期待度: 50〜100%、平均約80%。
- ART初当たり時は約1/2で「武功チャレンジ」から開始。
- 15戦突破で「天下無双モード」へ移行し、有利区間1500G完走となるエンディングが約束される仕様。
- エンディング最大100G。

### ceiling
- 通常ゲーム数天井: **非搭載**。
- 5.9号機有利区間上限1500Gを通常時天井と混同しない。

## modeSpecificMinimumData
- 通常時は花カウンタ、レア小役、CZなどからART当選を目指す。
- CZ「傾奇チャレンジ」は喧嘩祭りゾーン / 皆朱の刻 / 千年桜ゾーンの3系統。
- ARTは全12種類の継続シナリオを持つ戦況変化型MAPシステム。
- ART初当たりの約1/2で武功チャレンジ開始。
- 15戦突破後は天下無双モードとなり、エンディング到達濃厚。

## resetBehavior
### settingChangeBehavior
- 当時解析の朝一比較表では、設定変更時の「内部状態」「ステージ」はともに **調査中**。
- 機種名表記揺れ、正式シリーズ名、ニューギン/EXCITE、設定変更、リセット、朝一、据え置き、電源OFF→ON、天井短縮、モード、ガックン、有利区間を組み替えて追加再探索したが、本機固有の設定変更時状態契約を別資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 前作「天を穿つ戦槍」のリセット挙動は自動転記しない。

### carryOverBehavior
- 据え置きを独立条件として内部状態・ステージ等がどう扱われるか、本機固有の直接資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 純電源OFF→ONと同義扱いしない。

### powerCycleBehavior
- 当時解析の朝一比較表では、純電源OFF→ON時の「内部状態」「ステージ」はともに **調査中**。
- 追加再探索後も本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井自体が非搭載のため、天井ゲーム数のリセット/引継ぎは `NOT_APPLICABLE_NORMAL_GAME_CEILING`。
- 有利区間進捗の設定変更/純電断時契約は別項目として未固定。

### ceilingAfterReset
- 通常ゲーム数天井非搭載につきリセット短縮天井は `NOT_APPLICABLE`。
- 朝一専用短縮天井の公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更時の内部モード/昼夕夜状態の再抽選・引継ぎは本機固有資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時の全モード移行率はミッション範囲外のため収集しない。

### stateAfterReset
- setting change: `UNVERIFIED_AFTER_RESEARCH`（当時資料は調査中）。
- pure power cycle: `UNVERIFIED_AFTER_RESEARCH`（当時資料は調査中）。
- carry-over distinct condition: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- 本機は5.9号機で有利区間を用い、ART15戦突破後は有利区間1500G完走となるエンディングに結び付く仕様を確認。
- ただし設定変更/据え置き/純電断時に有利区間進捗をどう処理するかという本機固有の直接契約は、十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論だけでリセット契約を補完しない。

### resetBenefits
- 設定変更専用の天井短縮、朝一専用モード、初当たり/CZ優遇率などの公開された本機固有恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン発生条件/発生率、初期出目、ランプ等による設定変更・据え置き確定契約は、検索語と資料系統を変えた再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 設定差のあるMB1確率は通常の設定判別要素であり、朝一リセット判別とは分離する。

### numericResetData
- normalGameCeiling: `NONE / NOT_APPLICABLE`
- resetShortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- morningInitialHitBenefit: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- advantageousSectionLimit: `1500G`（世代仕様/ゲーム性上の上限。設定変更契約とは別）

## conflictsAndQualityNotes
- 導入日は2019-01-07が複数資料で一致し、2019-01-06納品予定という業界記事とも整合。一方、pachislo-dataに2019-01-21予定表記があるため平均せずCONFLICTとして残す。
- 一部後年サイトに「6号機」表記が見られるが、グリーンべると当時記事、パチマガスロマガ、ちょんぼりすた等は5.9号機としており、本DBでは5.9号機をcanonicalとする。
- 朝一比較表の「調査中」をそのまま即UNVERIFIED確定せず、表記揺れ・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間で再探索した結果を記録。
- 実機完全再現用のCZ内部抽選・小役別状態移行等は収集対象外。

## missingFields
- 正式型式名/検定番号の高信頼固定。
- 設定変更/据え置き/純電断時の内部状態・ステージ直接契約。
- 設定変更/据え置き/純電断時の有利区間そのものの直接契約。
- 本機固有ガックン/初期出目等の変更判別契約。
- 公開された朝一専用数値（存在確認含む）。

## sources
取得日: 2026-09-11

1. グリーンべると — https://web-greenbelt.jp/00010908/ — 2018-11-22発表記事、5.9号機、純増約2枚/G、平均継続率約80%、初当たり1/2で武功チャレンジ、15セット後天下無双、2019-01-06納品予定 — reliability: `INDUSTRY`
2. ちょんぼりすた — https://chonborista.com/slot/newgin-slot/71777/ — 2019-01-07、設定別ART/出玉率、5.9号機、純増2.0枚/G、天井非搭載、朝一設定変更/電源OFF→ON内部状態・ステージ調査中、50G/50枚 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
3. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/10/a.php — 5.9号機/ART、初当たり約1/2武功チャレンジ、平均継続率約80% — reliability: `MAJOR_ANALYSIS_HIGH`
4. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/10/c.php — 50枚あたり約50G — reliability: `MAJOR_ANALYSIS_HIGH`
5. P-WORLD — https://www.p-world.co.jp/machine/database/8816 — ニューギン、ART/CZ/擬似ボーナス、純増約2.0枚/G、継続50〜100%/平均80%、15戦突破後の有利区間1500G完走エンディング — reliability: `MACHINE_DATABASE_HIGH`
6. パチナビ — https://pachinavi.net/machines/hana-keiji-ikusayari-gokyu/ — 2019-01-07、設定別ART初当たり/出玉率、CZ確率 — reliability: `ANALYSIS_SECONDARY_CROSSCHECK`
7. pachislo-data — https://pachislo-data.com/newgin/82049 — 2019-01-21導入予定表記（日付CONFLICT保持用） — reliability: `ANALYSIS_SINGLE`
