# バーニングフラワー30

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: バーニングフラワー30
aliases:
- バーニングフラワー-30
- バーニングフラワー30Φ
formalModelName: バーニングフラワー－３０
manufacturer: 岡崎産業
releaseDate: 2007-05（P-WORLD・5号機クロニクルで月一致。2007-05-20時点のP-WORLD掲示板に実戦投稿あり。ただし掲示板単独では全国導入日確定に使わない）
generation: 5号機初期
systemType: A+RT / 完全告知 / 30Φ

## 性能コア

payoutRateBySetting:
- 設定1: 94.70%
- 設定2: 96.85%
- 設定3: 100.21%
- 設定4: 101.21%
- 設定5: 104.59%
- 設定6: 107.86%

confidence: ANALYSIS_HIGH

note:
- パチマガスロマガ30Φ値と5号機クロニクルの94.7 / 96.8 / 100.2 / 101.2 / 104.6 / 107.9%は丸め差の範囲で一致。
- 25Φとは設定別ボーナス確率・ベースが異なるため独立レコード化。

initialHitBySetting:
- 赤7BIG: 1/1638.40, 1/1310.72, 1/1456.36, 1/1310.72, 1/1456.36, 1/1310.72
- 青7BIG: 1/537.18, 1/550.72, 1/485.45, 1/504.12, 1/468.11, 1/478.36
- BIG合成: 1/404.54, 1/387.79, 1/364.09, 1/364.09, 1/354.25, 1/350.46
- REG: 1/579.96, 1/555.39, 1/520.13, 1/520.13, 1/508.03, 1/504.12
- ボーナス合成: 1/238.31, 1/228.35, 1/214.17, 1/214.17, 1/208.71, 1/206.74

confidence: ANALYSIS_HIGH

baseGamesPer50:
- 設定1: 39.09G
- 設定2: 39.09G
- 設定3: 40.44G
- 設定4: 41.15G
- 設定5: 44.13G
- 設定6: 47.33G

confidence: ANALYSIS_HIGH

netIncrease:
- 赤7BIG後100G RT搭載。
- 1Gあたり純増は今回、比較可能な高信頼数値を確定できずUNVERIFIED。

basicPayout:
- BIG: 約360枚（465枚超払い出しで終了）
- REG: 約97枚（12G消化または8回入賞で終了）
- 赤7BIG後100G RT。

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 完全告知。
- 赤7BIG後のみ100G RT。青7BIG後はRTなし。
- 30Φ仕様。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「バーニングフラワー30 / バーニングフラワー－３０ / 岡崎産業」と「設定変更 / リセット / 朝一 / ガックン / RT消滅」を組み替えて再探索したが、設定変更時のRT残G・内部RT状態処理を明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井・モードストックはNONE_CONFIRMED。
- 据え置き時の赤7後RT残G数/内部RT状態はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみでRT残G数・状態が維持/消滅するかはUNVERIFIED。
- 電断のみで朝一専用モード・天井短縮・初当たり優遇が生じる根拠はNONE_CONFIRMED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- 通常時モード管理型としての公開情報はNONE_CONFIRMED。

stateAfterReset:
- 赤7BIG後100G RTの設定変更/据え置き/電断時処理のみUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の天井短縮・モード優遇・初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- RT中の設定変更で不利が生じるかは、RT処理自体がUNVERIFIEDのため確定しない。

resetDetection:
- 本機固有のガックン・表示・RT挙動による設定変更判別は十分な再探索後もUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. パチマガスロマガ — バーニングフラワー30 ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/55/h.php
   - 設定別赤7/青7/BIG合成/REG/合算、シミュレートPAYOUTを掲載。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — バーニングフラワー30 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/55/a.php
   - 30Φ版、完全告知、赤7BIG後100G RT、BIG約360枚、REG約97枚。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — バーニングフラワー30 小役/1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/55/c.php
   - 設定別1000円あたり39.09〜47.33G。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — バーニングフラワー30
   - https://www.p-world.co.jp/machine/database/4696
   - 型式名バーニングフラワー－３０、赤7BIG後100G RT、BIG/REG終了条件を確認。
   - reliability: INDUSTRY_DB
5. 5号機クロニクル — 岡崎産業5号機全機種一覧
   - https://5goki.com/okazaki
   - 2007/5、25Φ/30Φ両筐体、機械割94.7〜107.9%。30Φパチマガ値と丸め一致。
   - reliability: ANALYSIS_SINGLE
6. スロリスクタイム — A+RT機一覧
   - https://pachisuro100.com/a-rt/
   - バーニングフラワー30を岡崎産業・2007/5のA+RT機として掲載。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 日単位の全国納品/ホール導入日
- RT 1Gあたり純増
- 設定変更/据え置き/電源OFF→ON時のRT残G・内部状態処理
- 本機固有の設定変更判別

## conflicts

- 機械割はパチマガスロマガ精密値と5号機クロニクル丸め値の差のみで、実質一致と扱う。

## QA note

- 25Φ/30Φは基本構成・獲得枚数・赤7後100G RTは同系統だが、設定別ボーナス確率・ベースが明確に異なるため別機種として保存。
- resetBehaviorはRT状態処理を重点再探索したが確定資料に到達できずPARTIAL。
