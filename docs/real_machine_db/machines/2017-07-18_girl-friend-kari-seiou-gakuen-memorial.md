machineName: パチスロ ガールフレンド（仮）～聖櫻学園メモリアル～
manufacturer: オリンピア（平和グループ）
releaseDate: 2017-07-18
recordNumber: 1107
generation: 5号機（5.5号機）
systemType: ART特化 / 疑似ボーナス＋ゲーム数上乗せART
formalModelName: パチスロガールフレンド（仮）／G4
certificationNumber: 7S0436
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `パチスロガールフレンド（仮）／G4`、検定番号 `7S0436`、メーカー「オリンピア」、導入開始日2017-07-18を確認。
- ALL7導入予定一覧、電撃オンライン、グリーンべるとでも2017-07-18全国導入を照合。グリーンべるとは納品7月17日予定と報道しており、ホール導入日の7月18日と矛盾しない。
- 2021年以降のニューギン製パチンコ版「Pガールフレンド（仮）」とは別機として分離。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **97.7%**
- 設定2: **98.8%**
- 設定3: **100.2%**
- 設定4: **103.4%**
- 設定5: **108.3%**
- 設定6: **116.2%**
- スロパチネット、期待値見える化、後年整理DBで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### GF TIME（ART）単独初当たり
- 設定1: **1/419.2**
- 設定2: **1/407.0**
- 設定3: **1/387.2**
- 設定4: **1/341.5**
- 設定5: **1/288.7**
- 設定6: **1/219.9**

### GF BONUS（疑似ボーナス）単独初当たり
- 設定1: **1/597.7**
- 設定2: **1/572.7**
- 設定3: **1/516.1**
- 設定4: **1/432.2**
- 設定5: **1/474.2**
- 設定6: **1/390.6**

### 初当たり合算
- 設定1: **1/244.6**
- 設定2: **1/236.3**
- 設定3: **1/219.8**
- 設定4: **1/189.8**
- 設定5: **1/178.5**
- 設定6: **1/140.1**
- HAZUSE、スロパチネット、期待値見える化等で系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 当時解析資料: **46.1～47.7G/50枚**。
- 別解析では代表値 **約46.1G/50枚**。
- 物差し比較では設定差を含む範囲46.1～47.7Gを保持し、単一点に平均化しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- GF BONUS / GF TIMEとも **約1.8枚/G**。
- 2017年グリーンべると業界記事、P-WORLD、複数解析で一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- GF BONUS: **20G**継続の疑似ボーナス。
- GF TIME: **1セット50G+α**を基本とするゲーム数上乗せART。HAZUSE解析では平均初期ゲーム数約60G、GF BONUS経由時は50G固定とされる。
- 一部解析に「ART 40G以上」表記があるため、最低ゲーム数表現は資料差を残し、P-WORLDの基本仕様50G+αをcanonical比較値とする。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- ART間天井は内部モード依存。
  - 通常: **最大776G**
  - 天国準備: **最大776G**
  - 引き戻し: **最大500G**
  - 天国: **最大80G**
- GF COIN: **10000コイン到達でCZまたはART**。
- 10000コイン到達時の公開振り分け: **ART or GF BONUS 35.16% / CZ 64.84%**。
- 通常時の全モード移行テーブル・全状態移行率は実機完全再現用のため収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_MORNING_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **天井を再抽選（前日進捗RESET）**。
- 内部モード・内部状態を再抽選。
- GF COINを再抽選し、液晶表示上は0コインから開始。
- 日数カウンタも再抽選。
- 液晶は実戦/解析上 **下駄箱ステージ**、初期液晶出目は1・3・5とする資料あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きでは **天井進捗 / 内部モード / 内部状態 / GF COIN / 日数カウンタを引き継ぐ**とする朝一解析表を確認。
- GF COINは内部値を引き継ぐ一方、見た目上は0表示となる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior
- 純電源OFF→ONでは **天井 / 内部モード / 内部状態 / GF COIN / 日数カウンタをCARRYOVER**。
- 液晶GF COIN表示は0へ戻るため、0表示だけでは設定変更判別不可。
- 電断後の液晶ステージ/出目については当時解析に「調査中」が残る資料があり、設定変更時と同一とは推定しない。
reliability: ANALYSIS_HIGH_FOR_INTERNAL_CARRYOVER / UNVERIFIED_FOR_EXACT_DISPLAY_STAGE_AFTER_POWER_CYCLE

### gameCounterReset
- 設定変更: **RESET / RESELECT**。
- 据え置き・純電断: **CARRYOVER**。
- 対象はモード別ART間天井進捗。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更時はモード再抽選のため天井も再決定。
- 公開されているモード別最大天井は **80G / 500G / 776G**。
- 設定変更専用の固定短縮天井値は確認されない。
- 新台初日実戦値では401～550Gの当選率上昇が観測され、500G天井の引き戻しモード優遇が推測されているが、**設定変更時のモード振り分け自体は解析値として公開確認できない**ため数値化しない。
reliability: ANALYSIS_HIGH_FOR_CEILINGS / ANALYSIS_SINGLE_EMPIRICAL_FOR_RESET_ZONE_BIAS

### modeAfterReset
- 設定変更: **RESELECT**。
- 据え置き・純電断: **CARRYOVER**。
- 設定変更後の引き戻しモード優遇を示す実戦傾向は複数解析で言及されるが、正式なモード別振り分け数値は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESELECT_CARRYOVER / UNVERIFIED_FOR_NUMERIC_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: **内部状態を再抽選**。
- 据え置き・純電断: **内部状態を引き継ぐ**。
- 設定変更直後の「通常 / 高確準備 / 高確 / 超高確」の具体的初期振り分けは、機種名・型式・設定変更・リセット・朝一・内部状態等で資料横断したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_INITIAL_STATE_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- GF COINが設定変更時に再抽選され、**96.48%が1200コイン以上、88.67%が4650コイン以上、71.10%が5800コイン以上**で開始する計算となる（公開振り分けからの単純合算）。
- 日数カウンタも11/28/45/62/79日目のいずれかへ再抽選され、周期進行が朝一から付与される。
- 実戦集計では401～550Gの当選率上昇が確認され、引き戻しモード優遇の可能性が高い。ただしモード振り分け非公開のため確定数値とはしない。
reliability: ANALYSIS_HIGH_FOR_PUBLISHED_RESET_DISTRIBUTIONS / ANALYSIS_SINGLE_EMPIRICAL_FOR_MODE_BIAS

### resetPenalties
- 前日の浅い天井進捗、有利な内部モード/状態、蓄積GF COIN、日数カウンタを設定変更で失う可能性がある。
- 実戦値では設定変更後の天国（80G天井）移行が少ない傾向も報告されるが、正式移行率が非公開のため **EMPIRICAL_NOT_CANONICAL_NUMERIC** とする。
reliability: ANALYSIS_HIGH_FOR_RESET_LOSS / ANALYSIS_SINGLE_EMPIRICAL_FOR_TENGOKU_BIAS

### resetDetection
- 設定変更時は下駄箱ステージ、液晶1・3・5開始とする解析情報あり。
- ただし純電断時の正確な液晶ステージ/出目が「調査中」とされた資料が残るため、これ単独を deterministic な変更判別とはしない。
- GF COIN表示は設定変更・据え置き電断とも見た目上0となるため判別不能。
- 本機固有の確定的ガックン契約は「ガックン / 設定変更 / 朝一 / 据え置き / オリンピア / G4」等へ検索語を変えても高信頼資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_KNOWN_DISPLAY_FACTS / UNVERIFIED_FOR_DETERMINISTIC_CHANGE_DETECTION

### numericResetData
- 設定変更時GF COIN初期値:
  - 50: **0.78%**
  - 1200: **3.52%**
  - 2350: **3.52%**
  - 3500: **3.52%**
  - 4650: **17.58%**
  - 5800: **23.83%**
  - 6950: **23.83%**
  - 8100: **23.44%**
- 設定変更時日数カウンタ:
  - 11日目: **20.31%**
  - 28日目: **19.92%**
  - 45日目: **19.92%**
  - 62日目: **19.92%**
  - 79日目: **19.92%**
- settingChangeModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- settingChangeStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- publishedMorningHitRate: 正式な朝一○G以内当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。401～550G上昇は実戦集計であり解析確率とは分離。

## conflicts
- ART基本G数について、P-WORLDは **1セット50G+α**、期待値見える化は **40G以上**、HAZUSEは **平均初期約60G（GF BONUS経由50G固定）**。これらは「基本セット」「最低値」「平均初期値」の定義差を含むため平均せず定義別に保持し、物差し主値はP-WORLDの50G+α。
- メーカー表記に「オリンピア」「平和」「オリンピア・ゴールドオリンピア」の揺れがある。本機型式のメーカーcanonicalはHAZUSE等の **オリンピア**、企業グループ補助表記として平和グループを併記。

## missingFields
- published numeric reset mode distribution: UNVERIFIED_AFTER_RESEARCH。
- published numeric setting-change initial-state distribution: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun/change-detection contract: UNVERIFIED_AFTER_RESEARCH。
- exact display stage/output after pure power-cycle: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. HAZUSE — https://hazuse.com/machine/pachislot/7S0436/
   - 型式、検定番号、メーカー、2017-07-18導入、ART/GF BONUS確率、内部モード構造。
   - reliability: ANALYSIS_HIGH
2. グリーンべると / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/9317/greenbelt
   - 2017-05-31展示会記事。ART純増約1.8枚/G、初当たり1/244～1/140、GF BONUS 20G、納品7月17日予定。
   - reliability: INDUSTRY
3. ALL7 2017年7月導入一覧 — https://www.all7.jp/plans/index/2017/07/10
   - オリンピア・ゴールドオリンピア、導入予定2017-07-18。
   - reliability: INDUSTRY_SECONDARY
4. 電撃オンライン 2017-07-18 — https://dengekionline.com/elem/000/001/560/1560061/
   - 7月18日より全国ホール導入済みであることを確認。
   - reliability: INDUSTRY_MEDIA
5. P-WORLD機種DB — https://www.p-world.co.jp/machine/database/8409
   - GF BONUS 20G、GF TIME 50G+α、純増1.8枚/G。
   - reliability: INDUSTRY_DATABASE
6. スロパチネット — https://slopachi-net.com/girl-friend
   - 機械割、ART/GF BONUS/合算初当たり、純増、天井、GF COIN設定変更時振り分け。
   - reliability: ANALYSIS_HIGH
7. 期待値見える化 — https://slotjin.com/zone/gfkari/
   - 設定変更/電源OFF→ONの天井・モード・状態・GF COIN・日数カウンタ契約、GF COIN/日数振り分け、リセット後実戦ゾーン。
   - reliability: ANALYSIS_HIGH_FOR_RESET_TABLE / ANALYSIS_SINGLE_FOR_EMPIRICAL_ZONE
8. ちょんぼりすた — https://chonborista.com/slot/orinpia-slot/38549/
   - モード別天井、設定変更時/電断時の天井・モード・状態・GF COIN契約、GF COIN/日数振り分け、表示情報。
   - reliability: ANALYSIS_HIGH
9. スロット解析情報~すろかい~ — https://slotkaiseki.hatenablog.com/entry/girlfriend
   - 当時2017年解析。46.1～47.7G/50枚、初当たり/機械割、モード別天井、設定変更GF COIN詳細振り分け。
   - reliability: ANALYSIS_SINGLE_PERIOD_SOURCE
10. HAZUSE AT/ART詳細 — https://hazuse.com/machine/pachislot/7S0436/genre/209/
   - GF TIME純増約1.8枚/G、平均初期約60G、GF BONUS経由50G固定、内部状態4段階。
   - reliability: ANALYSIS_HIGH

## researchNotes
- 欠損項目は「ガールフレンド(仮) / ガルフレ / 聖櫻学園メモリアル / G4 / オリンピア / 平和」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 引き戻し / モード / 内部状態 / GFコイン / 日数カウンタ / ガックン」を組み替えて再探索。
- 当時解析、業界記事、機種DB、後年整理DBを横断し、モード/状態の設定変更時具体振り分けと確定ガックンは固定できなかったためUNVERIFIED判定。
