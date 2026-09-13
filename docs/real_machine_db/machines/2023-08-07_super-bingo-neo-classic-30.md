# スーパービンゴネオクラシック-30

recordNo: 1584
machineName: スーパービンゴネオクラシック-30
manufacturer: ヤーマ製造 / ベルコ
formalModel: SスーパービンゴHY1-30
inspectionCode: 3S0080
releaseDate: 2023-08-07
generation: 6.5号機 / メダル機 / 30Φ
systemType: AT / 周期抽選
settings: L / 1 / 2 / 3 / 4 / 6

## payoutRateBySetting
- 設定L: 非公開
- 設定1: 98.0%
- 設定2: 99.5%
- 設定3: 101.0%
- 設定4: 103.0%
- 設定6: 106.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BINGO CHANCE（BC）初当たり
- 設定L: 非公開
- 設定1: 1/354.6
- 設定2: 1/330.1
- 設定3: 1/315.8
- 設定4: 1/299.7
- 設定6: 1/283.8
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.5G/50枚
信頼度: ANALYSIS_HIGH

## netIncrease
- AT「BINGO CHANCE」: 約2.8枚/G
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BINGO CHANCE: 1セット33GまたはHooah!（111G以上）。
- 初回継続期待度約50%、2セット目以降約75%。
- 999G+α天井契機のBCは33G 50% / Hooah! 50%。
- 通常BCのHooah!発生率は約6.7%。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 25Φ版と同じくゲーム数周期とデジタル周期でBCを抽選する30Φ独立型式。
- 通常最大天井は999G+αでBC。
- 30Φ版についても設定別BC初当たり・機械割は25Φ版と同一公開値。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **ゲーム数周期 / デジタル周期 / 有利区間 / 天井G数をリセット**。
- 30Φ版の機種固有解析で **設定変更後は初回デジタル周期の期待度が優遇**されることを確認。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時はゲーム数周期 / デジタル周期 / 有利区間 / 天井G数を引き継ぐとする同系統解析を採用。
- 30Φ版の純電断比較でも同4項目の引継ぎを直接確認。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **ゲーム数周期 / デジタル周期 / 有利区間 / 天井G数をすべて引き継ぐ**。
信頼度: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井G数・ゲーム数周期をリセット。
- 据え置き: 引き継ぎ。
- 純電源OFF→ON: 引き継ぎ。

### ceilingAfterReset
- 通常最大天井: **999G+α**。
- 設定変更後も固定の短縮天井になる公開契約は確認できず、天井そのものは999G+α。
- リセット恩恵は初回デジタル周期の期待度優遇。
信頼度: ANALYSIS_HIGH

### modeAfterReset
- 独立モードA/B等ではなく、ゲーム数周期 / デジタル周期を設定変更で再セットするタイプとして保存。
- 設定変更専用の具体的周期振り分け率は十分な再探索後も公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 朝一客判断に影響する独立した低確/高確等の設定変更専用状態契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 引き継ぎ。
- 純電源OFF→ON: 引き継ぎ。
- 基本的にBC終了後、カウントダウン7開始前に有利区間を移行する。
信頼度: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は初回デジタル周期のBC期待度が優遇される。
- 早い周期でのBC当選が通常より期待できる。

### resetPenalties
- 前日のゲーム数周期・デジタル周期・有利区間・天井進行を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 周期優遇による早い当たりは設定変更推測材料だが確定判別ではない。
- 本機固有のガックン条件・発生率は `スーパービンゴネオクラシック-30 / SスーパービンゴHY1-30 / ヤーマ / ベルコ` と各リセット語を組み替えて再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常最大天井: **999G+α**。
- 設定変更専用デジタル周期振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。
- 設定変更後初回デジタル周期期待度: **優遇（具体的固定率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）**。

### publicMorningNumbers
- 固定短縮天井なし確認: 最大 **999G+α**。
- 初回デジタル周期期待度優遇（具体率未固定）。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スーパービンゴネオクラシック-30 / スーパービンゴネオクラシック30 / SスーパービンゴHY1-30 / ヤーマ / ベルコ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / デジタル周期 / ガックン / 有利区間` を組み替えて探索。
- ベルコ公式、業界資料、東京都公安委員会検定通過記事、P-WORLD、一撃等を横断。
- 25Φ版と公開基本性能が同一であることは複数資料で確認したが、リセット項目は30Φ版を直接扱う一撃資料を優先し、単純転記していない。

## sources
取得日: 2026-09-13

1. ベルコ公式 — 発売リリース
   - https://www.s-bellco.co.jp/news/202230602_01/
   - ヤーマ製30Φ版を25Φ版と同時発表、純増約2.8枚/G、33G or Hooah!。
   - confidence: OFFICIAL

2. 遊技日本 / P-WORLD — 販売発表
   - https://news.p-world.co.jp/articles/24678/nippon
   - 型式SスーパービンゴHY1-30、製造元ヤーマ、設定別BC/出玉率、8月7日導入予定。
   - confidence: INDUSTRY

3. 遊技通信 / P-WORLD — 東京都公安委員会検定通過
   - https://news.p-world.co.jp/articles/24404/yugitsushin
   - 型式SスーパービンゴHY1-30、ヤーマ、検定番号3S0080。
   - confidence: INDUSTRY

4. P-WORLD — 30Φ機種DB
   - https://www.p-world.co.jp/machine/database/9861
   - 設定別BC/機械割、約32.5G/50枚、999G+α天井。
   - confidence: ANALYSIS_HIGH

5. 一撃 — 30Φ天井/設定変更
   - https://1geki.jp/slot/s_sbingo_nc_30/3/
   - 設定変更/電源OFF ONのゲーム数周期・デジタル周期・有利区間・天井G数、初回デジ周期優遇、天井BC 33G/Hooah 50:50。
   - confidence: ANALYSIS_HIGH

6. 一撃 — 30Φ BINGO CHANCE
   - https://1geki.jp/slot/s_sbingo_nc_30/81/
   - 純増約2.8枚/G、1セット33G or Hooah!、初回約50%・以降約75%、有利区間移行。
   - confidence: ANALYSIS_HIGH

## missingFields
- 設定変更専用デジタル周期の具体的振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用初回デジ周期BC期待度の具体的率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン: UNVERIFIED_AFTER_RESEARCH
- 独立した内部状態契約: UNVERIFIED_AFTER_RESEARCH

## conflicts
- なし。25Φ版と基本性能が同一でも、製造元・正式型式・検定番号・30Φ仕様が別のため独立レコード。

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
