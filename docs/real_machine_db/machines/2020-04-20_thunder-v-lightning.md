# サンダーVライトニング

No: 1351
machineName: サンダーVライトニング
machineNameVariants: サンダーVライトニング / サンダーＶライトニング / S／サンダーVライトニング／TH
manufacturer: アクロス
releaseDate: 2020-04-20
formalModelName: S／サンダーVライトニング／TH
certificationNumber: 9S1588
generation: 6号機
systemType: ノーマルA / ボーナス主体 / 4段階設定 / 技術介入あり

## payoutRateBySetting
| 設定 | 市場想定 | 完全攻略 |
|---|---:|---:|
| 1 | 98.0% | 99.5% |
| 2 | 100.1% | 101.5% |
| 5 | 103.5% | 105.1% |
| 6 | 107.0% | 108.5% |

- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/277.7 | 1/392.4 | 1/162.6 |
| 2 | 1/277.7 | 1/322.8 | 1/149.3 |
| 5 | 1/264.3 | 1/288.7 | 1/138.0 |
| 6 | 1/256.0 | 1/256.0 | 1/128.0 |

- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約42.5G/50枚。
- 一部資料は約43G/50枚の丸め表記。
- reliability: ANALYSIS_HIGH

## netIncrease
- NOT_APPLICABLE_AS_AT_ART_METRIC（ノーマルタイプ）。
- RIZIN ZONEは出玉を増やすAT/ARTではなく演出・告知ゾーンとして扱う。

## basicPayout
- BIG BONUS: 最大251枚。
- REG BONUS: 最大104枚。
- reliability: ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION

## modeSpecificMinimumData
- 天井非搭載。
- BIG後を中心にRIZIN ZONEへ移行し、基本30G+α。公開資料では30〜100Gまたは無限継続の振り分けが存在。
- 4段階設定（1/2/5/6）。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- ノーマルタイプかつ通常時ゲーム数天井非搭載のため、天井G数のリセットはNOT_APPLICABLE。
- 設定変更による通常時モード・有利区間・AT/ART状態の再抽選という概念は主要ゲーム性上NOT_APPLICABLE。
- 1gekiの設定変更欄ではRIZIN ZONEの扱いは「現在調査中」。
- 本機固有の、設定変更時に既存のRIZIN ZONE残りG/状態をどう扱うかは公開固定情報を確認できずUNVERIFIED。

### carryOverBehavior
- 据え置き時の通常時ゲーム数天井はNOT_APPLICABLE。
- 据え置き時のRIZIN ZONE残りG/状態の翌日持越し契約は、再探索後も本機固有の高信頼公開資料を確認できずUNVERIFIED。

### powerCycleBehavior
- 電源OFF→ON時も天井G数はNOT_APPLICABLE。
- 1gekiの電源OFF→ON欄ではRIZIN ZONEの扱いは「現在調査中」。
- よって純電断時のRIZIN ZONE残りG/状態を推測でCARRY_OVER/RESETに固定しない。

### gameCounterReset
- NOT_APPLICABLE_TO_NORMAL_CEILING。
- 通常時ゲーム数天井は非搭載。

### ceilingAfterReset
- NONE / NOT_APPLICABLE。設定変更専用短縮天井は存在しない。

### modeAfterReset
- 通常時のゲーム数管理モード/朝一専用モードは確認されていない。
- リセット専用モード振り分け公開値: NONE_CONFIRMED_AFTER_RESEARCH。

### stateAfterReset
- 通常時AT/ART内部状態はNOT_APPLICABLE。
- RIZIN ZONE中の設定変更/据え置き/純電断時の残りG・状態処理のみUNVERIFIED。

### advantageousSectionReset
- NOT_APPLICABLE_TO_GAMEPLAY。6号機だが本機はノーマルタイプで、朝一客行動を左右する有利区間リセット契約は主要公開解析上の対象外。

### resetBenefits
- SLOT HACKは設定変更時「特に影響はない」と整理。
- 朝一/設定変更固有の短縮天井、初当たり優遇、専用高確、専用モードは確認されていない。

### resetPenalties
- NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 設定変更確定に使える本機固有のガックン、初期出目、ランプ、表示リセット契約は、公式・当時解析・後年DBを横断しても公開固定情報を確認できずUNVERIFIED。
- RIZIN ZONEの設定変更/電断処理自体が公開資料で調査中のため、朝一表示を根拠に変更判別を固定しない。

### numericResetData / publicMorningNumbers
- 通常時天井: 非搭載。
- リセット時短縮天井: NONE / NOT_APPLICABLE。
- 朝一専用モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更専用初当たり率/恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH。
- RIZIN ZONEの設定変更/純電断時処理: PUBLIC_VALUE_NOT_FOUND / 1geki調査中。

## resetBehavior 再探索メモ
2026-09-11に `サンダーVライトニング / サンダーＶライトニング / S/サンダーVライトニング/TH / 9S1588 / アクロス / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / RIZIN ZONE / 天井` を組み替え、1geki、HAZUSE、スロパチクエスト、SLOT HACK、K-Navi、当時業界記事・機種DBを横断。性能コア、天井非搭載、設定変更による主要恩恵なしは複数資料で固定できた。一方、RIZIN ZONEの設定変更/据え置き/純電断処理、本機固有の変更判別契約は公開情報が不足しており推測で補完していない。

## conflicts
- 性能コアに重大CONFLICTなし。
- 50枚ベースは約42.5Gと約43Gの表記差があるが丸め差として扱う。

## missingFields
- 設定変更/据え置き/純電断時のRIZIN ZONE残りG・状態処理。
- 本機固有ガックン/初期出目等の変更判別契約。

## coreStatus
- **COMPLETE_CORE**

## overallReliability
- **ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION**

## sources
取得日: 2026-09-11

1. 遊技日本「4/20導入 サンダーVライトニング」
   - https://yugi-nippon.com/pachinko-new-machine/post-34611/
   - 2020-04-20全国導入、アクロス製を確認。
   - reliability: INDUSTRY
2. HAZUSE「サンダーVライトニング」
   - https://hazuse.com/machine/pachislot/9S1588/
   - 型式S／サンダーVライトニング／TH、検定番号9S1588、導入日、基本仕様を確認。
   - reliability: ANALYSIS_HIGH
3. スロパチクエスト「サンダーVライトニング 設定差まとめ」
   - https://www.slopachi-quest.com/article/thunder-vlightning-settei/
   - BIG/REG/合算、通常/完全攻略機械割、約42.5G/50枚を確認。
   - reliability: ANALYSIS_HIGH
4. SLOT HACK「サンダーVライトニング 天井・スペック・設定判別まとめ」
   - https://slothack.net/matome/8119/
   - 天井非搭載、BIG約251枚、REG約104枚、設定変更時の主要影響なしを確認。
   - reliability: ANALYSIS_HIGH
5. 1geki「サンダーVライトニング 天井/設定変更」
   - https://1geki.jp/slot/s_thunderv_lg/3/
   - 天井非搭載。設定変更時/電源OFF→ON時のRIZIN ZONE挙動は調査中と明記。
   - reliability: ANALYSIS_HIGH
6. K-Navi「サンダーVライトニング」
   - https://p-kn.com/slot/3408/
   - 2020-04-20導入、BIG/REG確率を別系統で照合。
   - reliability: ANALYSIS_SINGLE
7. PiDEA X「S/サンダーVライトニング/TH 機種評価」
   - https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E8%A9%95%E4%BE%A1%E3%80%8Es-%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BCv-%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B0-th%E3%80%8F%E6%A9%9F%E7%A8%AE%E8%A9%95%E4%BE%A1%E5%85%AC%E9%96%8B
   - 正式型式表記、A-type、BIG最大251枚、REG最大104枚を補助確認。
   - reliability: INDUSTRY
