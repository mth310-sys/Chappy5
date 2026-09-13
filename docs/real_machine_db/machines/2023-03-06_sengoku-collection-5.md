# 戦国コレクション5

recordNo: 1553
machineName: 戦国コレクション5
manufacturer: KPE / コナミアミューズメント
formalModel: S戦国コレクション5PS
inspectionCode: 2S1018
releaseDate: 2023-03-06
generation: 6.5号機 / メダル機
systemType: AT / 規定コレ数・シナリオ管理型
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.7%
- 設定3: 100.3%
- 設定4: 104.0%
- 設定5: 107.7%
- 設定6: 110.1%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「異世界制覇ラッシュ」
- 設定1: 1/350.1
- 設定2: 1/334.6
- 設定3: 1/318.9
- 設定4: 1/275.2
- 設定5: 1/251.8
- 設定6: 1/233.2

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.3G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「異世界制覇ラッシュ」: 約10.0枚/G。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## basicPayout
- AT「異世界制覇ラッシュ」は1セット20G+α。
- 継続シナリオ管理型で、6セット目到達で上位AT「Super異世界制覇ラッシュ」へ移行。
- 上位ATは高継続性能を持つ。通常版のP-WORLD/必勝本掲載ではセット継続率約90%として扱われる。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は毎ゲーム「コレポイント」を獲得し、規定コレ数到達でATへ直行。
- モードA天井1280コレ、モードB768コレ、モードC384コレ、天国/裏天国/極楽は128コレ以内。
- CZ「鬼ヶ島バカンス」はコレ数獲得特化ゾーン。
- エンディング後は極楽モードへ移行し128コレ以内のAT当選濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_BENEFIT_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井/規定コレ数RESET。
- 内部状態RESET。
- モードRESET・再抽選。
- 設定変更後はAT継続シナリオ抽選が優遇される。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井/規定コレ数CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ON時は天井/規定コレ数CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。
- 純電源OFF→ON時の有利区間そのものについて、通常版戦コレ5固有の設定変更/据え置き/電断3条件を直接並べた高信頼資料は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。一般的6.5号機挙動からは補完しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常最大天井は1280コレ。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更後は早い規定コレ数選択とATシナリオが優遇されるため、固定天井短縮とは分離して扱う。

### modeAfterReset
- 設定変更時はモード再抽選。
- 設定変更後は天国/モードC側が優遇され、早いAT当選に期待できる。
- 据え置き/純電源OFF→ONではモードCARRY_OVER。

### stateAfterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更後の内部状態の全初期振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 通常版固有の直接資料不足につき `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる設定変更/据え置き判別は不可。

### resetBenefits
- 設定変更後はAT継続シナリオが優遇。
- 高期待度シナリオまたは継続濃厚シナリオが各約1/6で選択される可能性あり。
- 設定変更後の初回AT終了時は約10%で裏天国へ移行。
- 設定変更後初回ATが1153〜1216コレで当選した場合、高期待度/濃厚シナリオ合算50%以上（各約26%）。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・モードを失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 高信頼解析ではリセット判別自体が「調査中」とされており、本機固有ガックン条件・発生率は検索語/資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 朝一の早い当選や優遇シナリオは変更示唆材料にはなるが、単独では設定変更確定材料にしない。

### numericResetData
- 設定変更後、高期待度シナリオ: 約1/6。
- 設定変更後、継続濃厚シナリオ: 約1/6。
- 設定変更後初回AT終了時の裏天国移行: 約10%。
- 設定変更後初回ATが1153〜1216コレで当選した場合: 高期待度 約26% / 濃厚 約26%。
- 通常最大天井: 1280コレ。
- 設定変更専用固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更後のATシナリオ優遇として高期待度/濃厚が各約1/6。
- 初回AT終了後の裏天国移行約10%。
- 1153〜1216コレ当選時の高期待度/濃厚が各約26%。
- 一部後年資料に「天国+モードC約54%」表記があるが、スマスロ版「超極楽LOOP」資料との混同リスクがあるため、通常版canonical数値には採用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `戦国コレクション5 / 戦コレ5 / S戦国コレクション5PS / KPE / コナミアミューズメント / 2S1018` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 規定コレ / モード / 状態 / 有利区間 / ガックン / 判別` を組み替えて検索。
- コナミ公式、遊技日本/P-WORLD、遊技通信/P-WORLD、パチ＆スロ必勝本、なな徹、P-WORLD機種DB、旧解析系を横断。

## conflicts
- 2022-12-19の検定通過資料には `S戦国コレクション5KY`（コナミアミューズメント / 2S1351）と `S戦国コレクション5PS`（KPE / 2S1018）の2型式が並ぶ。本DBでは販売発表・市場機として明示されたKPE製 `S戦国コレクション5PS` をNo.1553のcanonical型式とし、KYを同一市場機として自動統合しない。
- 2023-09のスマスロ `戦国コレクション5超極楽LOOP` は別型式・別仕様のため本レコードへ混入させない。

## sources
取得日: 2026-09-13

- コナミアミューズメント公式 発売発表: https://www.konami.com/amusement/corporate/ja/topics/20221205/
  - 6.5号機、戦国コレクション5、2023年3月稼働予定、純増約10枚/G、ゲーム数/シナリオ管理、極楽モード。
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/22433/nippon
  - 製造元KPE、型式S戦国コレクション5PS、設定別AT確率/出玉率。
- 遊技通信 / P-WORLD検定通過: https://news.p-world.co.jp/articles/22607/yugitsushin
  - S戦国コレクション5PS / KPE / 検定番号2S1018。別型式KY / 2S1351も確認。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2531/2
  - 2023-03-06、設定別AT/機械割、32.3G/50枚、純増約10枚/G、1280コレ天井、設定変更/電源OFF-ON比較。
- パチ＆スロ必勝本 機種基本スペック: https://p.hisshobon.jp/machine/4032/1/92491
  - AT1セット20G+α、上位AT、設定別性能。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/506/13931/
  - 設定変更/据え置きの有利区間・天井・状態・モード、設定変更後シナリオ優遇、初回AT終了時裏天国約10%、有利区間ランプ判別不可。
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9769
  - AT/モード構造、規定コレ数、上位AT、設定別AT確率。
- イチカツ: https://ichikatsu.com/sengokucollection5/
  - 2023-03-06、設定別AT/機械割、32.3G/50枚、設定変更天井RESET・電源OFF/ON引継ぎの照合。

missingFields:
- 純電源OFF→ON時の有利区間そのものの通常版固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン/初期リール挙動: UNVERIFIED_AFTER_RESEARCH
- 設定変更後内部状態の全初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
