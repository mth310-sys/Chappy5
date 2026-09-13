# パチスロ 戦国†恋姫

recordNo: 1578
machineName: パチスロ 戦国†恋姫
manufacturer: 藤商事
formalModel: S戦国恋姫FC
inspectionCode: 3S0259
releaseDate: 2023-07-18
generation: 6.5号機 / メダル機
systemType: AT / 技術介入型疑似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
### 市場想定 / 平均値
- 設定1: 98.5%
- 設定2: 99.2%
- 設定3: 100.5%
- 設定4: 103.1%
- 設定5: 104.9%
- 設定6: 106.8%

### 完全攻略時
- 設定1: 100.6%
- 設定2: 101.4%
- 設定3: 102.8%
- 設定4: 105.5%
- 設定5: 107.4%
- 設定6: 109.4%
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG BONUS
- 設定1: 1/268.4
- 設定2: 1/263.7
- 設定3: 1/254.4
- 設定4: 1/237.6
- 設定5: 1/227.4
- 設定6: 1/216.5

### REG BONUS
- 設定1: 1/404.4
- 設定2: 1/398.7
- 設定3: 1/392.2
- 設定4: 1/370.6
- 設定5: 1/357.2
- 設定6: 1/349.2

### ボーナス合算
- 設定1: 1/161.3
- 設定2: 1/158.7
- 設定3: 1/154.3
- 設定4: 1/144.8
- 設定5: 1/138.9
- 設定6: 1/133.6
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.3〜33.7G/50枚（設定1〜6）
- 設定1目安: 約33.3G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 疑似ボーナス: 約5.0枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG BONUS: ベルナビ30回+α、平均約350枚。
- REG BONUS: ベルナビ10回、平均約100枚。
- BIG中の技術介入「姫くり」でナビ回数上乗せ。上位の「SUPER姫くり」時は平均約450枚。
- ハーレムモード滞在中は当選ボーナスがすべてBIGとなる。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役・リーチ目等を契機に疑似ボーナス当選を目指すボーナスタイプ寄りAT。
- 通常時最大900G+αで天井到達。恩恵はBIG BONUS当選 + BIG後50%でハーレムモード突入。
- ハーレムモードはショート1 / ショート2 / ロング1 / ロング2があり、滞在中はボーナスがすべてBIG。
- 朝一用の「リセット」モードがあり、初回ボーナス時のみBIG比率60%へ上昇。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / 900G+α天井 / 内部モードをリセット**し、設定変更用のモード振り分けを行う。
- 同一設定の打ち直しも設定変更時挙動の対象とする解析記述あり。
- 設定変更時は「リセット」モードが94.9%で選択され、初回ボーナス時のみBIG比率が60%に上昇。
- 残りではハーレム系モードから開始する可能性がある。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / 天井ゲーム数 / 内部モードを引き継ぐ**。
- 朝一の表示だけで設定変更か据え置きかを確定する公開判別法は確認できない。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **有利区間 / 天井 / 内部モードを引き継ぐ**。
- 設定変更時・純電源OFF→ON時とも開始ステージは城下町ステージとする解析表があり、表示ステージのみでは判別できない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_SUPPORT

### gameCounterReset
- 設定変更: 900G+α天井の内部ゲーム数をリセット。
- 据え置き / 純電源OFF→ON: 内部天井ゲーム数を引き継ぐ。

### ceilingAfterReset
- 通常天井: 900G+α。
- 設定変更後だけ固定ゲーム数へ短縮される専用短縮天井は、検索語・資料系統を変えて再探索したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井到達時はBIG当選 + BIG後50%でハーレムモードへ移行。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時モード振り分け:
  - リセット: 94.9%
  - ショート2: 4.3%
  - ロング1: 0.4%
  - ロング2: 0.4%
- 「リセット」モードでは初回ボーナス時のみBIG比率60%。
- 比較用として、通常遊技中の有利区間リセット時は リセット89.8% / ショート2 9.0% / ロング1 0.8% / ロング2 0.4%。これは設定変更時よりハーレム系が優遇される別契約のため混同しない。
- 据え置き / 純電源OFF→ON: 内部モード引き継ぎ。
信頼度: ANALYSIS_HIGH

### stateAfterReset
- 本機の朝一挙動を左右する公開情報は主に上記モード契約として整理される。
- モードとは別の独立した通常/高確等「内部状態」の設定変更専用振り分けは、十分な再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き / 純電源OFF→ONは公開リセット表上、内部モードを引き継ぐ。

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き / 純電源OFF→ON: 有利区間引き継ぎ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_SUPPORT

### resetBenefits
- 初回ボーナス時のみBIG比率60%となる「リセット」モードを94.9%で選択。
- 設定変更時からショート2 / ロング1 / ロング2のハーレム系モードで開始する可能性あり（合計5.1%）。
- ハーレム系モード中は当選ボーナスがすべてBIG。

### resetPenalties
- 設定変更により前日の天井ゲーム数進行・内部モード・有利区間を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時・電源OFF→ON時とも城下町ステージ開始とする解析表があり、開始ステージのみでは判別困難。
- リセットモードによる初回BIG比率上昇は事後的な推測材料だが、単独の確定判別要素ではない。
- 前日天井進行を引き継いで900G+α到達挙動が出れば据え置き推測材料となるが、朝一即時判別ではない。
- 本機固有のリールガックン条件・発生率は `戦国†恋姫 / 戦国恋姫 / S戦国恋姫FC / 藤商事` と `ガックン / 設定変更 / リセット / 朝一` を組み替え、当時解析・後年整理資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード振り分け: リセット94.9% / ショート2 4.3% / ロング1 0.4% / ロング2 0.4%。
- リセットモードの初回ボーナスBIG比率: **60%**。
- 設定変更後ハーレム系モード開始率: **5.1%**（公開モード表のショート2/ロング1/ロング2合計。個別値を上記に保持）。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED**。
- 通常天井: **900G+α**。

### publicMorningNumbers
- 設定変更時「リセット」モード: **94.9%**。
- 設定変更時ショート2: **4.3%**。
- 設定変更時ロング1: **0.4%**。
- 設定変更時ロング2: **0.4%**。
- リセットモード初回ボーナスBIG比率: **60%**。
- 設定変更後専用の短縮天井: **なし確認 / 通常900G+α**。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ 戦国†恋姫 / 戦国恋姫 / S戦国恋姫FC / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / モード移行 / BIG比率 / ハーレムモード / ガックン / 有利区間` を組み替えて検索。
- 藤商事公式機種サイト、検定通過業界記事、遊技日本、遊技通信、パチマガスロマガ、パチ＆スロ必勝本、HAZUSE、なな徹、パチ7、一撃、パチビー、後年リセット整理資料を横断。
- 固定できなかった項目は、独立した設定変更時内部状態振り分け・機種固有ガックン条件/発生率。推測補完していない。

## sources
取得日: 2026-09-13

1. 藤商事 公式機種サイト
   - https://www.fujimarukun.co.jp/products/machine/s_koihime/sp/
   - 公式機種存在、ゲームフロー/姫くり/ハーレムモード等の公式導線。
   - confidence: OFFICIAL

2. 遊技日本 / P-WORLD — 機種サイト・PV公開
   - https://news.p-world.co.jp/articles/24227/nippon
   - 型式名 `S戦国恋姫FC`、ATタイプ、2023-07-18導入予定。
   - confidence: INDUSTRY

3. 遊技通信 / P-WORLD — 新機種発表
   - https://news.p-world.co.jp/articles/24284/yugitsushin
   - 純増約5.0枚/G、REG約100枚、BIG約350枚、SUPER姫くり約450枚。
   - confidence: INDUSTRY

4. 遊技日本 / P-WORLD — 検定通過
   - https://news.p-world.co.jp/articles/23987/nippon
   - 型式 `S戦国恋姫FC` の検定通過。
   - confidence: INDUSTRY

5. 遊技日本 / P-WORLD — 販売発表・スペック
   - https://news.p-world.co.jp/articles/24395/nippon
   - 設定別BIG/REG/合算。
   - confidence: INDUSTRY

6. パチ7 — スペック
   - https://pachiseven.jp/machines/6766/cutout/2
   - 設定別市場想定/完全攻略機械割、33.3〜33.7G/50枚、導入日、天井。
   - confidence: ANALYSIS_HIGH

7. 一撃 — 解析攻略
   - https://1geki.jp/slot/s_sengokukoihime/
   - BIG/REG/合算、機械割、設定1ベース約33.3G、純増、基本獲得枚数。
   - confidence: ANALYSIS_HIGH

8. HAZUSE — 天井・設定変更
   - https://hazuse.com/machine/pachislot/3S0259/
   - 検定番号 `3S0259`、設定変更/電源OFF→ON時の有利区間・天井・内部モード・開始ステージ比較、天井。
   - confidence: ANALYSIS_HIGH

9. パチマガスロマガ — ハーレムモード / 設定変更時モード振り分け
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/35/tj04-1.php
   - 設定変更時 リセット94.9% / ショート2 4.3% / ロング1 0.4% / ロング2 0.4%、リセットモード初回BIG比率60%。
   - confidence: ANALYSIS_HIGH

10. パチマガスロマガ — 有利区間リセット時モード移行
    - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/35/bn05.php
    - 通常遊技中の有利区間リセット時 リセット89.8% / ショート2 9.0% / ロング1 0.8% / ロング2 0.4%。設定変更時とは別契約として比較保持。
    - confidence: ANALYSIS_HIGH

11. パチ＆スロ必勝本 — 通常時解説
    - https://p.hisshobon.jp/machine/4121/1/96401
    - 900G+α天井、設定変更（同一設定打ち直し含む）時の朝イチモード、BIG優遇。
    - confidence: ANALYSIS_HIGH

12. パチビー — 機種情報
    - https://www.pachibee.jp/machines/kouryaku/223060001
    - 2023-07-18導入、6.5号機、純増約5枚/G、900G+α天井。
    - confidence: ANALYSIS_HIGH

13. ALL7 — 2023年7月新台導入予定一覧
    - https://www.all7.jp/plans/index/2023/07
    - 2023-07-18群のパチスロとして `S 織田信奈の野望 全国版` と `パチスロ 戦国†恋姫` を確認。次のknown境界は2023-07-24 `スマスロ バイオハザード:ヴェンデッタ`。
    - confidence: INDUSTRY_LISTING

## missingFields
- 設定変更時の独立した通常/高確等内部状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 導入日について、主要業界/解析資料は2023-07-18で一致。一部HAZUSEページは2023-07-17表記だが、遊技日本・ALL7・パチ7・パチビー等の複数一致を優先し **2023-07-18 canonical / 2023-07-17 minority conflict** とする。

## status
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
