# パチスロOVERLORD絶対支配者光臨Ⅱ

recordNo: 1555
machineName: パチスロOVERLORD絶対支配者光臨Ⅱ
manufacturer: オーイズミ
formalModel: S/OVERLORD絶対支配者光臨Ⅱ/SX
inspectionCode: 2S1507
releaseDate: 2023-03-20
generation: 6.5号機 / メダル機
systemType: AT / 規定G数・自力CZ・バトル型AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.7%
- 設定3: 101.5%
- 設定4: 104.5%
- 設定5: 108.0%
- 設定6: 112.0%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ「PKチャンス」
- 設定1: 1/247
- 設定2: 1/246
- 設定3: 1/222
- 設定4: 1/219
- 設定5: 1/194
- 設定6: 1/190

### AT「ULTIMATE BATTLE」
- 設定1: 1/334
- 設定2: 1/331
- 設定3: 1/309
- 設定4: 1/289
- 設定5: 1/264
- 設定6: 1/246

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.1G/50枚（設定1）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「ULTIMATE BATTLE」: 約2.7枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- AT「ULTIMATE BATTLE」はバトル型AT。セット継続期待度70%OVER。
- BIG BONUS / ULTIMATE CHALLENGEはいずれも20G、純増約2.7枚/G。
- 報酬ランクに応じてBIG、特化ゾーン等を獲得する。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常モードは通常A/B/C、準備A/B、天国の6種。
- 通常A/B/Cは最大786G+α、準備A/Bは486G+α、天国は86G+αで天井。
- CZ「PKチャンス」は自力突破型。AT初当たりの主要経路。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_BENEFIT_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 内部状態RESET。
- モードRESET・再抽選。
- 設定変更後は準備A / 準備B / 天国のいずれかから開始。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ON時の天井ゲーム数・内部状態・モード・有利区間について、設定変更/据え置きとは分離された本機固有の直接資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な6.5号機挙動から補完しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常A/B/Cの最大天井: 786G+α。
- 設定変更時は準備A/Bまたは天国開始のため、最大天井は486G+αへ短縮。
- 天国選択時は86G+αが天井。

### modeAfterReset
- 設定変更時は通常A/B/Cを選ばず、準備A / 準備B / 天国のいずれかから開始。
- 据え置きはモード引継ぎ。
- 設定変更時の準備A/B/天国の個別振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる設定変更/据え置き判別は不可。

### resetBenefits
- 設定変更後は準備A / 準備B / 天国のいずれかから開始。
- 最大天井が通常786G+αから486G+αへ短縮。
- 天国選択時は86G+αでAT当選。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・モードを失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一486G+αを超えて通常時が継続した場合、設定変更後の最大天井条件と矛盾するため据え置き濃厚材料となる。
- 有利区間ランプ判別不可。
- 本機固有ガックン条件/発生率は正式型式・メーカー・シリーズ名を含め再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常A/B/C天井: 786G+α。
- 設定変更後準備A/B天井: 486G+α。
- 設定変更後天国天井: 86G+α。
- 設定変更後モード: 準備A / 準備B / 天国のいずれか。
- 個別モード振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 最大天井: 通常786G+α → 設定変更時486G+α。
- 天国選択時: 86G+α。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `OVERLORD絶対支配者光臨Ⅱ / オーバーロード2 / S/OVERLORD絶対支配者光臨Ⅱ/SX / オーイズミ / 2S1507` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 状態 / 有利区間 / ガックン / 判別` を組み替えて検索。
- オーイズミ発表系、遊技日本/P-WORLD、HAZUSE、一撃、なな徹、ちょんぼりすた、旧解析系を横断。

## conflicts
- 導入台数は資料に約7,000台/約10,000台予定の差があるが、市場性能物差しの必須項目外のためcanonical化しない。

## sources
取得日: 2026-09-13

- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/22712/nippon
  - 型式S/OVERLORD絶対支配者光臨Ⅱ/SX、オーイズミ。
- HAZUSE: https://hazuse.com/machine/pachislot/2S1507/
  - 検定番号2S1507、2023-03-20、設定別機械割、純増約2.7枚/G。
- 遊技日本 / P-WORLD PV発表: https://news.p-world.co.jp/articles/22741/nippon
  - 正式型式、CZ/AT構造、メーカー公式機種サイト。
- P-BOMB 発表記事: https://p-bomb.co.jp/industry/new-machine/6206/
  - 6.5号機、純増約2.7枚/G、2023-03-20導入予定。
- 一撃 基本解析: https://1geki.jp/slot/s_overlord2/
  - 設定別AT初当り、機械割、35.1G/50枚、純増2.7枚/G、最大786G+α。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/513/14143/
  - 設定変更/据え置きの有利区間・天井・内部状態・モード、設定変更後準備A/B/天国、486G/86G天井、有利区間ランプ判別不可。
- ちょんぼりすた: https://chonborista.com/slot/oizumi-slot/181557/
  - 設定別CZ/AT/出玉率、35.1G/50枚、純増、最大天井。

missingFields:
- 純電源OFF→ON時の天井/状態/モード/有利区間の本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の準備A/B/天国の個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
