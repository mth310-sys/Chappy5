# ハッピージャグラーVⅢ

recordNo: 1529
machineName: ハッピージャグラーVⅢ
manufacturer: 北電子
formalModel: SハッピージャグラーVⅢEA
inspectionCode: 2S0196
releaseDate: 2022-10-24
generation: 6号機
systemType: ノーマルAタイプ / 完全告知

## payoutRateBySetting
- 設定1: 97.0%
- 設定2: 98.1%
- 設定3: 99.9%
- 設定4: 102.9%
- 設定5: 105.8%
- 設定6: 108.4%

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### BIG
- 設定1: 1/273.1
- 設定2: 1/270.8
- 設定3: 1/263.2
- 設定4: 1/254.0
- 設定5: 1/239.2
- 設定6: 1/226.0

### REG
- 設定1: 1/397.2
- 設定2: 1/362.1
- 設定3: 1/332.7
- 設定4: 1/300.6
- 設定5: 1/273.1
- 設定6: 1/256.0

### ボーナス合算
- 設定1: 1/161.8
- 設定2: 1/154.9
- 設定3: 1/146.9
- 設定4: 1/137.7
- 設定5: 1/127.5
- 設定6: 1/120.0

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約42G/50枚。

信頼度: ANALYSIS_HIGH

## netIncrease
- 非該当。AT/ART/RTによる純増管理を持たないノーマルタイプ。

## basicPayout
- BIG CHANCE: 平均約240枚（266枚を超える払い出しで終了）。
- BONUS GAME / REG: 平均約96枚（98枚を超える払い出しで終了）。
- 告知タイミングは約1/4が先告知、約3/4が後告知。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- ノーマルAタイプの完全告知機。
- AT/ART/CZは非搭載。
- 天井機能は非搭載。
- 朝一専用モード、ゲーム数モード、周期天井は非該当。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_BONUS_PENDING_DETAILS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- ゲーム数天井・周期・AT/CZモードは非搭載のためRESET対象なし。
- 設定変更後1G目はリールガックンが発生する機種固有情報を確認。
- 成立済みボーナス、告知待ち状態等の低レベル内部状態を設定変更時にどう扱うかは、公開機種固有資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時に引き継ぐゲーム数天井・周期・AT/CZモードは非該当。
- 成立済みボーナス/告知待ち状態の据え置き時契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONのみでは設定変更由来のガックンは発生しないとの機種固有情報を確認。
- 天井・モード・有利区間の比較対象は非該当。
- 成立済みボーナス/告知待ち状態の純電断復帰契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 天井用ゲーム数カウンタ非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- 天井非搭載。設定変更専用短縮天井も `NOT_APPLICABLE`。

### modeAfterReset
- AT/CZ/ゲーム数モード非搭載のため `NOT_APPLICABLE`。

### stateAfterReset
- 設定変更専用の高確・前兆・CZ等は非該当。
- ボーナス成立済み/告知待ち等の低レベル状態は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- ノーマルAタイプで、本DBが追跡するAT等の有利区間状態は `NOT_APPLICABLE`。

### resetBenefits
- 設定変更専用の天井短縮、朝一高確、CZ/AT優遇等は `NOT_APPLICABLE`。
- 公開された朝一数値恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後1G目のリールガックンは変更判別材料になる。
- 純電源OFF→ONだけでは設定変更由来のガックンは発生しない。
- 店側が事前に1G回す、手でリール位置を動かす等で見え方が変わり得るため、ガックン単独を100%確定判別とは扱わない。
- 有利区間ランプによる判別は非該当。

### numericResetData
- 天井短縮G数: `NOT_APPLICABLE`。
- 朝一モード振り分け: `NOT_APPLICABLE`。
- 朝一CZ/AT当選率: `NOT_APPLICABLE`。
- 公開朝一専用数値: `NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更専用の比較可能な朝一数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常の設定別BIG/REG/合算値は性能コアとして保持し、朝一専用値には転用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `ハッピージャグラーVⅢ / ハッピージャグラーV3 / SハッピージャグラーVⅢEA / 2S0196 / 北電子` と `設定変更 / リセット / 朝一 / ガックン / 電源OFF ON / 据え置き / 天井 / モード / 状態 / ボーナス成立 / 告知` を組み替えて再探索。
- 北電子機種情報系、P-WORLD/グリーンべると、HAZUSE、解析DB、後年の機種固有ガックン検証を横断。
- ノーマル機一般論で成立済みボーナス等を補完せず、直接確認できない低レベル状態はUNVERIFIEDで残した。

## sources
取得日: 2026-09-13

1. グリーンべると / P-WORLD業界ニュース — 2022-10-24導入、設定別BIG/REG/合算、出玉率、BIG約240枚、RB約96枚
   - https://news.p-world.co.jp/articles/21995/greenbelt
   - reliability: INDUSTRY_HIGH
2. 遊技日本 / P-WORLD — 型式名 `SハッピージャグラーVⅢEA`
   - https://news.p-world.co.jp/articles/21499/nippon
   - reliability: INDUSTRY_HIGH
3. PiDEA — 東京都公安委員会検定通過
   - https://www.pidea.jp/articles/1658720419
   - 型式 `SハッピージャグラーVⅢEA` / 検定番号 `2S0196`
   - reliability: PUBLIC_RECORD_REPRINT
4. HAZUSE — ハッピー ジャグラー VⅢ
   - https://hazuse.com/machine/pachislot/2S0196/
   - 型式、検定番号、導入日、天井非搭載、設定別ボーナス確率
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — ハッピージャグラーVⅢ
   - https://chonborista.com/slot/kitadenshi/173776/
   - 約42G/50枚、天井非搭載、各設定値
   - reliability: ANALYSIS_HIGH
6. P-WORLD新台スケジュール / グリーンべると — 2022-10-24パチスロ欄はハッピージャグラーVⅢ
   - https://news.p-world.co.jp/articles/21806/greenbelt
   - reliability: INDUSTRY_HIGH
7. クズマガ — ハッピージャグラーVⅢガックン検証
   - https://www.kzo-moso.com/slot154/
   - 設定変更後1G目にガックン、純電源OFF/ONのみでは発生しない旨
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更/据え置き/純電源OFF→ON時の成立済みボーナス・告知待ち状態の機種固有直接契約
- ガックン挙動のメーカー公式または当時業界一次資料による別系統照合

## conflicts
- 現時点で性能コア主要数値に重大CONFLICTなし。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_BONUS_PENDING_DETAILS
confidence: INDUSTRY_HIGH / PUBLIC_RECORD / ANALYSIS_HIGH