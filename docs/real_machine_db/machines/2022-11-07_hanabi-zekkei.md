# 花火絶景

recordNo: 1530
machineName: 花火絶景
manufacturer: ミズホ / ユニバーサルエンターテインメント
formalModel: S/ハナビゼッケイ/BH
inspectionCode: 230127
releaseDate: 2022-11-07
generation: 6.2号機
systemType: AT / 擬似ボーナス / A-600再現 / 技術介入

## payoutRateBySetting
### 市場予測
- 設定1: 98.6%
- 設定2: 99.1%
- 設定3: 100.6%
- 設定4: 102.5%
- 設定5: 103.9%
- 設定6: 105.5%

### 完全攻略
- 設定1: 101.1%
- 設定2: 101.5%
- 設定3: 103.1%
- 設定4: 105.1%
- 設定5: 106.6%
- 設定6: 108.3%

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### BIG
- 設定1: 1/439.5
- 設定2: 1/434.9
- 設定3: 1/419.1
- 設定4: 1/399.4
- 設定5: 1/386.7
- 設定6: 1/372.0

### REG
- 設定1: 1/565.1
- 設定2: 1/556.6
- 設定3: 1/526.3
- 設定4: 1/510.1
- 設定5: 1/488.5
- 設定6: 1/475.0

### ボーナス合算
- 設定1: 1/247.2
- 設定2: 1/244.1
- 設定3: 1/233.3
- 設定4: 1/224.0
- 設定5: 1/215.9
- 設定6: 1/208.6

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約35.1G/50枚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス中: 約7.77枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG: 平均約600枚（完全攻略時。ベルナビ30回消化またはJAC IN 3回で終了）。
- REG: 平均約60枚。
- BIGはJAC INハズシの技術介入で獲得枚数が変動。
- ボーナス後は絶景チャレンジ抽選中を経由し、絶景チャレンジ成功時はボーナス引き戻し。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は8種類のゲーム数モードを搭載。
- ゲーム数天井: 最大950G。モードにより200G / 350G / 850G / 950Gが天井。
- 花火ポイント周期天井: 100ptで1周期、10周期到達でBIG。
- 通常時リーチ目高確率ステージは大花火ステージ / 花火百景ステージ。
- 1周期目は大花火ステージ移行期待度50%（全設定共通）。
- ボーナス終了時は原則有利区間リセットし、絶景チャレンジ抽選中開始時に新しい有利区間へ移行する。BIG 1G連時は例外的に引き継ぐ資料あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_RESET_SPECIFIC_MODE_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、内部天井、内部状態、通常時モード、花火ポイントをRESET。
- 開始ステージは縁側ステージ。
- サブ液晶に表示されるゲーム数カウンタだけは見た目上引き継がれるため、表示G数と内部天井進行を分離して扱う。
- 設定変更時はモードを再抽選するが、設定変更専用の全モード振り分けは今回の再探索で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は有利区間、内部天井、内部状態、通常時モード、花火ポイントをCARRY_OVER。
- サブ液晶ゲーム数カウンタも引き継ぐ。
- 開始ステージは縁側ステージ。

### powerCycleBehavior
- 純電源OFF→ONのみでは内部天井、内部状態、モード、花火ポイント、有利区間をCARRY_OVER。
- サブ液晶ゲーム数カウンタも引き継ぐ。
- 設定変更とは異なり内部天井はリセットされない。

### gameCounterReset
- 設定変更時は内部ゲーム数天井をRESET。
- 据え置き / 純電源OFF→ONは内部ゲーム数天井をCARRY_OVER。
- ただしサブ液晶表示のゲーム数カウンタは設定変更時も引き継ぐため、朝一表示が950Gを超える場合がある。

### ceilingAfterReset
- 通常最大天井は950G、周期天井は10周期。
- 設定変更時は内部天井を0から再スタートする。
- 固定の「設定変更専用短縮天井」は公開解析で確定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実戦上リセット台が650G以内で当選しやすいとの観測資料はあるが、解析値ではなく未確定のためcanonical数値には採用しない。

### modeAfterReset
- 設定変更時に通常時モードを再抽選。
- 据え置き / 純電源OFF→ONは滞在モードを引き継ぐ。
- 設定変更専用のモード振り分け数値は `PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH`。
- 絶景チャレンジ抽選中→通常時の一般モード振り分けは公開されているが、設定変更専用値と同一と断定せず、朝一専用数値へ転用しない。

### stateAfterReset
- 設定変更時は内部状態RESET。
- 据え置き / 純電源OFF→ONは内部状態CARRY_OVER。
- 設定変更後の開始ステージは縁側ステージ。

### advantageousSectionReset
- 設定変更時は有利区間RESET。
- 据え置き / 純電源OFF→ONは有利区間CARRY_OVER。
- 通常時は有利区間ランプ非点灯のため、ランプ単独では設定変更判別不可。
- 通常運用ではボーナス終了時にも有利区間をリセットし、絶景チャレンジ抽選中開始時に新規有利区間へ移行。BIG 1G連時は引継ぎ資料あり。

### resetBenefits
- 花火ポイントがRESETされるため朝一は1周期目から開始し、一般仕様として1周期目の大花火ステージ移行期待度50%（全設定共通）が適用される。
- 一部旧解析には「設定変更後はボーナス終了後と同じ状態」「内部的に絶景チャレンジ抽選中の可能性」とする記述がある一方、後年詳細解析は設定変更時に絶景チャレンジ抽選中へ移行しないと明記。後年詳細解析をcanonicalとし、旧記述は `CONFLICT_OLD_ANALYSIS_INTERPRETATION` として保持。
- 設定変更専用の短縮天井・固定高モード等の確定恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更で前日からの内部天井、周期進行、滞在モード、内部状態、花火ポイントを失う。
- 据え置き時のハマリ/高周期進行を狙う客にとっては設定変更が不利になり得る。
- それ以外の設定変更専用マイナス抽選値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプは通常時非点灯で判別に使えない。
- 設定変更 / 据え置きのどちらでもサブ液晶のゲーム数カウンタを引き継ぐため、朝一表示だけでは原則判別困難。
- 内部天井は設定変更でリセットされるため、サブ液晶表示が950Gを超えてなお通常時なら設定変更濃厚という判別材料になる。
- 本機固有のリールガックン条件・発生率は検索語・資料系統を変えても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常最大天井: 950G。
- 周期天井: 10周期（100pt × 10）。
- 1周期目の大花火ステージ移行期待度: 50%（全設定共通、設定変更専用ではなく1周期目一般仕様）。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FIXED_AFTER_RESEARCH`。
- 設定変更専用朝一当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 直接比較可能な設定変更専用のモード振り分け・○G以内当選率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 1周期目大花火ステージ50%は朝一にも適用されるが、通常の1周期目共通仕様として区別して保存。
- 実戦観測の「リセット台はほぼ650G以内に当選」は解析確定値でないためcanonical数値に不採用。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `花火絶景 / S花火絶景 / S/ハナビゼッケイ/BH / ミズホ / ユニバーサル / 230127` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / カウンタ / モード / 状態 / 花火ポイント / ガックン / 有利区間 / 650G` を組み替えて再探索。
- メーカー発売記事、業界記事、公安委員会検定再掲、P-WORLD、HAZUSE、なな徹、一撃、ちょんぼりすた、パチマガスロマガ旧DB、イチカツ、当時解析を横断。
- 内部天井RESETとサブ液晶表示G数CARRY_OVERを混同しないよう別フィールド化。
- 一般モード振り分けを設定変更専用振り分けとして転用しない。

## sources
取得日: 2026-09-13

1. 遊技日本 — ユニバーサルエンターテインメント発売発表
   - https://yugi-nippon.com/pachinko-new-machine/post-53544/
   - 製造元ミズホ、型式 `S/ハナビゼッケイ/BH`、A-600系ゲーム性
   - reliability: INDUSTRY_HIGH
2. 遊技日本 — 2022-11-07導入記事
   - https://yugi-nippon.com/pachinko-new-machine/post-54687/
   - 全国導入日、型式、ゲーム性
   - reliability: INDUSTRY_HIGH
3. PiDEA — 東京都公安委員会検定通過情報
   - https://www.pidea.jp/articles/1661140582
   - 型式 `S/ハナビゼッケイ/BH` / 検定番号 `230127`
   - reliability: PUBLIC_RECORD_REPRINT
4. HAZUSE — 花火絶景
   - https://hazuse.com/en/machine/pachislot/2S0127/
   - 6.2号機、AT、純増約7.77枚/G、導入日、型式、検定番号230127
   - reliability: ANALYSIS_HIGH
5. K-Navi — 花火絶景
   - https://p-kn.com/slot/3852/
   - BIG/REG/合算、35.1G/50枚、市場予測/完全攻略出玉率
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた — 花火絶景
   - https://chonborista.com/slot/universal-slot/174207/
   - 設定別スペック、35G/50枚、純増7.77枚/G、天井、設定変更/電源OFF→ON比較、有利区間
   - reliability: ANALYSIS_HIGH
7. なな徹 — 朝一・設定変更時の挙動/有利区間
   - https://nana-press.com/kaiseki/machine/444/12406/
   - 設定変更: 有利区間/天井/内部状態/モード/花火ポイントRESET、据え置き引継ぎ、表示G数引継ぎ、縁側開始、有利区間リセットタイミング
   - reliability: ANALYSIS_HIGH
8. イチカツ — 天井/設定変更・リセット
   - https://ichikatsu.com/hanabizekkei/
   - 設定変更で内部天井RESET、電源ON/OFFは引継ぎ、表示カウンタはどちらも引継ぎ、950G超過時の変更判別
   - reliability: ANALYSIS_HIGH
9. 一撃 — 天井
   - https://1geki.jp/slot/s_hanabi_zekkei/3/
   - 最大950G、10周期天井、設定変更/電源OFF→ON時の表示カウンタ注意
   - reliability: ANALYSIS_HIGH
10. 一撃 — 大花火ステージ
   - https://1geki.jp/slot/s_hanabi_zekkei/42/
   - 1周期目の大花火ステージ移行期待度50%（全設定共通）
   - reliability: ANALYSIS_HIGH
11. パチマガスロマガ旧DB — 通常時モード
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/47/tj06-3.php
   - モード再抽選タイミング、8モード、一般モード振り分け
   - reliability: ANALYSIS_HIGH
12. スロット解析.com — 設定変更時の旧整理
   - https://slotkaiseki.com/hanabizekkei_tenjou/
   - 設定変更後をボーナス後同様とする旧記述、1周期目50%。後年詳細解析と絶景チャレンジ抽選中扱いに差があるためCONFLICT注記
   - reliability: ANALYSIS_SINGLE

## missingFields
- 設定変更専用の通常時モード全振り分け
- 設定変更専用の一定G以内ボーナス当選率/確定短縮天井値
- 本機固有のリールガックン条件/発生率

## conflicts
- 設定2 REGは主要解析で1/556.6。一部業界講座に1/556.3表記あり。多数の機種DB/解析値で一致する1/556.6をcanonicalとし、1/556.3は `CONFLICT_ROUNDING_OR_TRANSCRIPTION` として扱う。
- 設定変更後の絶景チャレンジ抽選中扱いについて、旧解析に「ボーナス終了後と同じ / 内部的に絶景チャレンジ抽選中の可能性」、後年詳細解析になな徹の「設定変更時は絶景チャレンジ抽選中に突入しない」がある。後年詳細解析をcanonical、旧記述を `CONFLICT_OLD_ANALYSIS_INTERPRETATION` として保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_RESET_SPECIFIC_MODE_NUMBERS
confidence: INDUSTRY_HIGH / PUBLIC_RECORD / ANALYSIS_HIGH