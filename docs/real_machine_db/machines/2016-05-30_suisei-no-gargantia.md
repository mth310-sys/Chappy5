machineName: パチスロ 翠星のガルガンティア
manufacturer: D-light（ディ・ライト）
releaseDate: 2016-05-30
recordNumber: 979
generation: 5号機
systemType: A+ART / 差枚数管理型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- パチビー、パチ7、当時解析複数で2016-05-30導入、メーカーD-light（ディ・ライト）を照合。
- 実機流通資料もD-light / 2016年5月導入開始 / 5号機を支持。
- 正式型式名・検定番号は作品名、メーカー表記、D-Light/D-light/ディ・ライト、型式候補、5S/6S、検定通過等へ検索語を変え、当時解析・古DB・実機流通・検索アーカイブを横断したが直接固定できず、推測せず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.4% |
| 3 | 99.9% |
| 4 | 103.9% |
| 5 | 106.8% |
| 6 | 110.1% |

- すろぱちくえすと、pachislo-data、後年回顧解析で同系列を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/873.8 | 1/315.0 | 1/231.5 |
| 2 | 1/873.8 | 1/302.1 | 1/224.5 |
| 3 | 1/873.8 | 1/288.1 | 1/216.7 |
| 4 | 1/873.8 | 1/261.6 | 1/201.3 |
| 5 | 1/873.8 | 1/242.6 | 1/189.9 |
| 6 | 1/873.8 | 1/228.8 | 1/181.3 |

- 純ボーナス確率は全設定共通1/873.8。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: **約37G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体: **約1.7枚/G**。
- ボーナス込みART性能表記: **約1.9枚/G**。定義を混ぜず別保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 純ボーナス「覚醒プロセス」: **約300枚**、通常時BIG時のART期待度は約33〜35%表記。
- ART「翠星チャンス」: 差枚数管理型。突入時の特化ゾーンで初期差枚数を決定。
- 通常時は「限定解除」等を経由してARTを目指す。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井は **ART間1000G消化後、次回の連続演出発展時にART当選濃厚**。1000G到達即発動ではない。
- ボーナス当選ではART間天井ゲーム数をリセットしない。
- 通常天井ゲーム数振り分け公開値: 0G 7.0% / 100G 0.4% / 200G 5.1% / 300G 0.4% / 400G 5.1% / 500G 0.4% / 600G 0.4% / 700G 0.4% / 800G 0.4% / 900G 0.4% / 1000G 80.1%。
- 内部状態として低確 / 高確 / 超高確を持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は通常のART間1000G天井を引き継がず、**リセット専用天井を再抽選**。
- リセット時天井振り分けは **0G 10.2% / 100G 10.2% / 200G 39.8% / 300G 39.8%**（精密値資料では10.16 / 10.16 / 39.84 / 39.84%）。最大300G到達後、次回連続演出発展でART濃厚。
- 内部状態を再抽選: **低確62.5% / 高確25.0% / 超高確12.5%**。
- バーストポイントは前日値を引き継がず再抽選。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時のバーストポイントは **CARRYOVER** と当時設定変更解析が明記。
- ART間天井についても宵越し前提の当時攻略例（前日+当日ゲーム数で通常1000G側を狙う）から据え置きCARRYOVERを強く支持。
- 据え置き時の低確/高確/超高確を独立表で明記した本機固有資料は十分な再探索でも固定できず、内部状態単独は **UNVERIFIED_AFTER_RESEARCH** とする。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_BURST_POINT / UNVERIFIED_AFTER_RESEARCH_FOR_STATE

### powerCycleBehavior
- 純電源OFF→ONで **限定解除の前兆カウント（液晶右下G数）は消えずCARRYOVER**。翌朝消えていれば設定変更濃厚という当時判別法が複数資料で一致。
- 純電源OFF→ON時のART間天井ゲーム数および低確/高確/超高確の内部状態を直接比較した本機固有資料は、表記・検索語・資料系統を変えた再探索でも固定できず **UNVERIFIED_AFTER_RESEARCH**。限定解除カウンタの保持から全内部契約を自動推定しない。
reliability: ANALYSIS_HIGH_FOR_LIMITED_RELEASE_COUNTER / UNVERIFIED_AFTER_RESEARCH_FOR_FULL_CEILING_STATE_CONTRACT

### gameCounterReset
- 設定変更: **RESET_TO_SPECIAL_RESET_CEILING_TABLE**（0/100/200/300G）。
- 据え置き: **CARRYOVER_SUPPORTED**（通常ART間天井の宵越し攻略資料）。
- 純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**（天井内部カウンタそのものの直接表なし）。
- 通常: ART間最大1000G到達後、次回連続演出発展でART濃厚。

### ceilingAfterReset
- 設定変更専用短縮天井: **最大300G+連続演出発展**。
- 公開振り分け: **0G 10.16% / 100G 10.16% / 200G 39.84% / 300G 39.84%**。
- 300G到達即ARTではなく、その後の連続演出発展が発動条件。

### modeAfterReset
- 朝一専用の別名称ゲーム数モードは今回固定せず。天井テーブル自体を設定変更専用再抽選として保存。
- 通常時には複数内部状態・演出モードが存在するが、完全再現用詳細抽選は対象外。

### stateAfterReset
- **低確62.5% / 高確25.0% / 超高確12.5%**。
- 高確以上合算 **37.5%**。
- 据え置き/純電断の内部状態の直接比較契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大天井が通常1000Gから **最大300G+α**へ大幅短縮。
- 0G天井10.16%、100G天井10.16%、200G天井39.84%があり、300Gより浅い振り分けも計60.16%。
- 高確25.0% + 超高確12.5% = **37.5%で高確以上スタート**。
- バーストポイントは再抽選され、0〜9ptに振り分けられるため前日低ptから上振れる可能性がある。

### resetPenalties
- 前日のART間天井進捗を失うため、前日深ハマり台では通常宵越し価値を失う。ただし本機はリセット最大300Gのため、変更後も朝一価値は非常に高い。
- 前日の高バーストポイントを保有していた場合は設定変更で再抽選され、その蓄積を失う可能性がある。
- 前日の内部高確等が引き継がれる据え置き契約は直接固定できないため、状態面の不利は推測しない。

### resetDetection
- **限定解除前兆カウント**: 液晶右下の前兆G数表示は純電源ON/OFFでは消えない。閉店時に表示あり→翌朝消失なら設定変更濃厚。ただし店側手動対策の可能性あり。
- **バーストポイント**: ART終了後も次回ARTへ持ち越す。前日把握値と翌朝ARTでの進行が合わなければ設定変更を支持。ただしリセット後の再抽選値が偶然一致し得るため確定ではない。
- **ステージ**: 朝一に居住区から数Gで連結器/凪の日等の高確示唆ステージへ移行すれば、約37.5%高確以上というリセット状態再抽選を背景に変更期待を上げる材料。
- **ガックン**: 当時資料は「未確認・おそらく効かない」とする推測止まり。確定契約として採用せず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- リセット天井: **0G 10.16% / 100G 10.16% / 200G 39.84% / 300G 39.84%**。
- 内部状態: **低確62.5% / 高確25.0% / 超高確12.5%**。
- バーストポイント再抽選:
  - 0・1pt: **各0.4%**
  - 2・3pt: **各25.0%**
  - 4・5pt: **各14.5%**
  - 6・7pt: **各7.8%**
  - 8・9pt: **各2.3%**

## sources
取得日: 2026-09-08

1. パチビー — パチスロ 翠星のガルガンティア
   - https://www.pachibee.jp/machines/movie/216050001
   - 2016-05-30導入、D-light、5号機A+ART、ART約1.7枚/G・ボーナス込み約1.9枚/G。
   - reliability: INDUSTRY_DATABASE
2. パチ7 — パチスロ 翠星のガルガンティア 天井
   - https://pachiseven.jp/machines/4837/cutout/78
   - ART間1000G、設定変更後最大300G、導入日/メーカー。
   - reliability: INDUSTRY_ANALYSIS
3. すろぱちくえすと — 翠星のガルガンティア 機種解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/gargantia/
   - 機械割、初当たり、約37G、純増、通常/リセット天井、設定変更状態、リセット判別、バーストpt。
   - reliability: PERIOD_ANALYSIS_HIGH
4. すろぱちくえすと — 設定変更(リセット)恩恵・挙動
   - https://www.slopachi-quest.com/article/gargantia-reset/
   - 据え置き時バーストpt引継ぎ、設定変更時状態、リセット天井/ポイント再抽選。
   - reliability: PERIOD_ANALYSIS_HIGH
5. pachislo-data — 翠星のガルガンティア
   - https://pachislo-data.com/diright/24961
   - 導入日、性能コア、通常天井振り分け、リセット天井振り分け。
   - reliability: PERIOD_ANALYSIS
6. ちょんぼりすた — 翠星のガルガンティア
   - https://chonborista.com/slot/d-light/19556/
   - リセット状態、限定解除前兆カウンタの電源ON/OFF保持、バーストpt、朝一ステージ判別。
   - reliability: ANALYSIS_HIGH
7. 真パチスロ備忘録 — ガルガンティア リセ天井/判別
   - https://sin-surobi.com/garugan/16041/
   - 2016年当時記事。限定解除カウンタ電源ON/OFF保持、バーストpt、ガックン未確認注記。
   - reliability: PERIOD_ANALYSIS
8. ピロ式パチスロ記 — リセット後天井ゲーム数振分け
   - https://piro-shiki.com/gargantia-tenjo-reset/
   - 2016-06-18。0/100/200/300Gの精密振り分け10.16/10.16/39.84/39.84%。
   - reliability: PERIOD_ANALYSIS
9. A-SLOT — D-light 翠星のガルガンティア中古実機
   - https://www.a-slot.com/SHOP/dlight_8.html
   - D-light、2016年5月導入、5号機、ボーナス1/873.8を照合。
   - reliability: OLD_MACHINE_DATABASE

## missingFields
- 正式型式名: **UNVERIFIED_AFTER_RESEARCH**。
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時のART間天井ゲーム数そのものの直接契約: **UNVERIFIED_AFTER_RESEARCH**。限定解除前兆カウントの保持は直接確認済み。
- 純電源OFF→ON時の低確/高確/超高確内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時内部状態の独立明記: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- 重大な性能数値CONFLICTは今回固定せず。機械割97.1〜110.1%、ART初当たり1/315.0〜1/228.8、約37G/50枚、ART1.7枚/Gは複数系統で整合。
- リセット天井の10.2/39.8%表記と10.16/39.84%表記は丸め差として同系列扱いし、CONFLICTにしない。

## notesForYardstick
- 2016年A+ARTの中でも、設定変更後の天井が通常1000Gから最大300Gへ極端に短縮される「強リセット恩恵」比較基準として有用。
- 朝一公開数値が豊富で、天井0/100/200/300G、状態62.5/25/12.5%、バーストpt0〜9ptまで物差し化可能。
- 一方で純電断の全内部契約は、限定解除カウンタ保持以外を推測で埋めずUNVERIFIEDに残す。
