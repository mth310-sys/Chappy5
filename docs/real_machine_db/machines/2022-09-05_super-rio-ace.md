# スーパーリオエース

recordNo: 1515
machineName: スーパーリオエース
manufacturer: 山佐製造 / 山佐ネクスト販売
formalModel: SパチスロスーパーリオエースCC
inspectionCode: 2S0382
releaseDate: 2022-09-05
generation: 6.5号機
systemType: AT / 擬似ボーナス + ゲーム数上乗せ型AT

## payoutRateBySetting
- 設定1: 98.5%
- 設定2: 99.0%
- 設定3: 100.4%
- 設定4: 105.0%
- 設定5: 108.6%
- 設定6: 110.8%

複数解析資料で一致。HAZUSE発表値とも一致。

信頼度: ANALYSIS_HIGH / INDUSTRY_CROSSCHECK

## initialHitBySetting
### ボーナス初当り
- 設定1: 1/247.2
- 設定2: 1/245.7
- 設定3: 1/244.7
- 設定4: 1/237.5
- 設定5: 1/233.1
- 設定6: 1/230.5

### AT「リオラッシュ」初当り
- 設定1: 1/605.2
- 設定2: 1/593.5
- 設定3: 1/566.8
- 設定4: 1/506.0
- 設定5: 1/462.4
- 設定6: 1/438.8

一部資料に設定1ボーナス1/247.3、設定2 AT 1/593.6、設定5 AT 1/462.5、設定6 AT 1/438.9の小数末尾差がある。平均せず、複数資料が一致する上記をcanonicalとし丸め差をCONFLICT注記する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約35.6G/50枚
- 導入前資料には36G/50枚表記もあるため丸め差として保持。

信頼度: ANALYSIS_HIGH

## netIncrease
- 「リオタイム」/「リオチャンス」: 約+1.5枚/G
- メインAT「リオラッシュ」: 約+2.3枚/G

信頼度: INDUSTRY_HIGH

## basicPayout
- 初当りボーナスは差枚数管理型で、開始時の「ご褒美ブレイク」で獲得枚数を決定。
- ご褒美ブレイクの平均獲得枚数は成功したCZ等により約82枚〜約142枚。
- ボーナス中のAT当選期待度は設定1で約41%。
- AT初当り時は33G継続の「リオタイム」から開始し、「リオチャンス」ストックを平均約6個獲得。
- その後「リオチャンス」でストック数分のG数上乗せを行い、獲得したG数がAT「リオラッシュ」の初期G数となる。
- AT中の細かな上乗せ/特化ゾーン内部抽選は本DBの完全再現対象外。

信頼度: INDUSTRY_HIGH

## modeSpecificMinimumData
- 通常時は5種類の通常モード（A/B/C/短縮/天国）があり、ボーナス天井やCZ失敗後の挙動に影響。
- モードA/B/C天井: 597G+α。
- 短縮モード天井: 450G+α。
- 天国モード天井: 100G+α。
- 通常時はチップ10個獲得でCZ「リオチャレ」へ突入。
- AT非当選時ボーナス終了後、AT終了後、設定変更後など通常時1周期目は「ACEモード」に突入し、CZ突入率/成功率が優遇される。
- ACEモード中の公表解析上の機械割は約102%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_PARTIAL_POWER_CYCLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部状態・通常モードをRESET。
- 設定変更後は有利区間移行時の成立役に応じて通常モードを再抽選。
- 設定変更後の通常時1周期目は「ACEモード」に突入する。

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態・通常モードをCARRY_OVER。
- 本機は有利区間ランプ非搭載のため、朝一外観だけでは設定変更/据え置きを判別できない。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは、天井はCARRY_OVERすることを機種別解析で確認。
- 純電源OFF→ON時の通常モード・内部状態・有利区間について、設定変更との直接比較を明記した高信頼機種別資料は今回の再探索で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き挙動から未確認項目を推測転記しない。

### gameCounterReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER（天井について直接確認）。

### ceilingAfterReset
- 設定変更後だけの固定G数天井短縮は確認できない。
- 通常モード別天井はA/B/C 597G、短縮450G、天国100G。
- 設定変更後は有利区間移行時に通常モードを再抽選するため、成立役次第で短縮/天国が選ばれる可能性はあるが、これは固定短縮天井とは区別する。

### modeAfterReset
- 設定変更時は通常モードを再抽選。
- 有利区間移行時の成立役が弱チェリー/スイカ/チャンスリプレイならモードB以上濃厚。
- 強チェリー/チャンス目なら短縮モード or 天国濃厚。
- 通常リプレイ等を含む全成立役別の完全モード振り分けは、本DB用途に必要な公開値として今回固定できず、細かな内部抽選の収集対象にも広げない。
- 据え置き時は通常モードCARRY_OVER。

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 据え置き時: 内部状態CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 設定変更時とAT終了時が有利区間リセット契機として確認されている。
- 有利区間ランプは非搭載のため、朝一ランプによる変更判別は不可。

### resetBenefits
- 設定変更後の通常時1周期目はACEモード。
- ACEモード中はCZ突入率とCZ成功率が大幅に優遇され、公開解析上の機械割は約102%。
- 有利区間移行時にレア小役が成立すると通常モードが優遇される。

### resetPenalties
- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のため、朝一の見た目だけでは設定変更/据え置きを判別不能。
- 設定変更後はACEモードとなるが、ボーナス/AT終了後の1周期目もACEモードとなるため、ACEモード挙動だけで設定変更確定とはできない。
- 本機固有のリールガックン条件/発生率を、機種名・正式型式・山佐/山佐ネクスト・設定変更/リセット/ガックンで再探索したが、直接契約を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
- ACEモード中の機械割: 約102%。
- モード別天井: A 597G / B 597G / C 597G / 短縮450G / 天国100G（各+α）。
- 設定変更後の有利区間移行時:
  - 弱チェリー / スイカ / チャンスリプレイ: モードB以上濃厚。
  - 強チェリー / チャンス目: 短縮モード or 天国濃厚。

### publicMorningNumbers
- 設定変更後1周期目のACEモード機械割約102%を朝一比較用数値として保持。
- 設定変更時専用の固定モード振り分け率や朝一○G以内当選率は、十分な再探索後も公開値を固定できなかったため推測しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `スーパーリオエース / SUPER RIO ACE / SパチスロスーパーリオエースCC / 2S0382 / 山佐 / 山佐ネクスト / 設定変更 / リセット / 朝一 / 据え置き / 電源ON OFF / 電断 / 天井 / モード / ACEモード / ガックン / 有利区間`。
- HAZUSE、業界記事、P-WORLD、必勝本、なな徹、イチカツ、当時解析/回顧資料を横断。
- 設定変更/据え置きの有利区間・天井・内部状態・モードは直接比較表あり。純電断は天井引継ぎまで直接確認できたが、その他の内部状態/モードまでは推測しない。

## conflicts
- ボーナス初当り/AT初当りの一部設定で小数末尾に丸め差あり。canonicalは複数資料一致値、差分は保持。
- 50枚ベースは35.6Gと36G表記があり、定義差ではなく丸め差として35.6Gをcanonical。

## missingFields
- 純電源OFF→ON時の通常モード / 内部状態 / 有利区間の機種固有直接契約
- 本機固有ガックン条件/発生率
- 設定変更時の通常役を含む完全な通常モード振り分け率（未公表/未固定。完全再現用詳細としては収集対象外）

## sources
取得日: 2026-09-13

1. HAZUSE — 型式・検定番号・導入日・出玉率・基本スペック
   - https://hazuse.com/machine/pachislot/2S0382/
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
2. 娯楽産業 — 山佐ネクスト新機種発表
   - https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AA%E3%82%AA%E3%82%A8%E3%83%BC%E3%82%B9%E3%80%8D%E7%99%BA/
   - 2022-09上旬予定、ボーナス平均82〜142枚、AT期待度約41%（設定1）、リオタイム33G・平均6ストック、純増1.5/2.3枚/G
   - reliability: INDUSTRY
3. 遊技通信web — 新機種発表
   - https://www.yugitsushin.jp/news/rio%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E5%85%A8%E9%96%8B%E3%81%AE%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E6%96%B0%E4%BD%9C-%E3%80%8C%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AA%E3%82%AA/
   - AT構造、純増1.5/2.3枚/G、9月上旬導入予定
   - reliability: INDUSTRY
4. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3950/1/89764
   - 設定別ボーナス/AT/機械割、2022-09-05導入
   - reliability: ANALYSIS_HIGH
5. P-WORLD — 機種情報
   - https://www.p-world.co.jp/machine/database/9680
   - 6.5号機AT、ボーナス平均82〜142枚、AT設定1期待度約41%、純増構造
   - reliability: INDUSTRY_DB
6. なな徹 — 朝一/設定変更時の挙動・有利区間
   - https://nana-press.com/kaiseki/machine/416/11172/
   - 設定変更/据え置きの有利区間・天井・内部状態・モード比較、ACEモード、変更判別
   - reliability: ANALYSIS_HIGH
7. なな徹 — 通常時モード/ACEモード
   - https://nana-press.com/kaiseki/machine/416/11714/
   - モード別天井、有利区間移行時レア役によるモード優遇、ACEモード機械割約102%
   - reliability: ANALYSIS_HIGH
8. パチ＆スロ必勝本 — 有利区間について
   - https://p.hisshobon.jp/machine/3950/1/90691
   - 設定変更時/AT終了時の有利区間リセット契機、有利区間ランプ非搭載
   - reliability: ANALYSIS_HIGH
9. イチカツ！ — 設定変更・リセット
   - https://ichikatsu.com/superrioace/
   - 設定変更時の天井RESET、電源ON/OFF時の天井CARRY_OVER、35.6G/50枚
   - reliability: ANALYSIS_SINGLE
10. ちょんぼりすた — 基本解析
   - https://chonborista.com/slot/yamasa-slot/171029/
   - 6.5号機、AT/ボーナス、天井・モードのクロスチェック
   - reliability: ANALYSIS_HIGH

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_PARTIAL_POWER_CYCLE
confidence: INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET / ANALYSIS_SINGLE_POWER_CYCLE_CEILING_ONLY
