# 餓狼伝説

machineName: 餓狼伝説
manufacturer: SNKプレイモア
releaseDate: 2006-11
generation: 5号機初期
systemType: ボーナス + AT（餓狼チャンス）
coreStatus: PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.4% |
| 2 | 98.2% |
| 3 | 100.2% |
| 4 | 103.7% |
| 5 | 107.5% |
| 6 | 110.6% |

信頼度: ANALYSIS_HIGH

pacnkでは96.39/98.23/100.20/103.66/107.46/110.58%。5号機クロニクルの小数1桁値と丸め整合。

## initialHitBySetting

### 3種BIG

| 設定 | RED BIG | WHITE BIG | BLUE BIG | BIG合成 |
|---|---:|---:|---:|---:|
| 1 | 1/624.2 | 1/624.2 | 1/624.2 | 1/208.1 |
| 2 | 1/612.5 | 1/612.5 | 1/612.5 | 1/204.2 |
| 3 | 1/601.3 | 1/601.3 | 1/601.3 | 1/200.4 |
| 4 | 1/590.4 | 1/590.4 | 1/590.4 | 1/196.8 |
| 5 | 1/580.0 | 1/580.0 | 1/580.0 | 1/193.3 |
| 6 | 1/570.0 | 1/570.0 | 1/570.0 | 1/190.0 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

- 通常時: 約33G/50枚
- 餓狼チャンス中: 80G以上/50枚相当までベースアップ

信頼度: INDUSTRY

餓狼チャンスはメダルを増やすATではなく、3択ベルをナビしてコイン持ちを改善するタイプ。

## netIncrease

増加型ATではない。餓狼チャンス中は通常約33G/50枚から80G以上へベースアップするため、微減〜持ち玉維持寄りのATとして扱う。

## basicPayout

二次資料目安:
- RED BIG: 約300枚
- WHITE BIG: 約200枚
- BLUE BIG: 約100枚

信頼度: ANALYSIS_SINGLE

## modeSpecificMinimumData

- AT「餓狼チャンス」: 3択ベルの図柄をナビ
- 3択ベル5回アシストを1セットとし、10回、15回…へ継続する場合あり
- 天井到達でも餓狼チャンス発動
- 通常時有効ライン4ライン
- 3種BIGはそれぞれスーパーボーナス/ノーマルボーナスの構成を持つとの当時業界発表

## resetBehavior — v0.7 retroactive QA 2026-09-10

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`餓狼伝説 / ガロウデンセツDX / SNKプレイモア / 2006` と `設定変更 / リセット / 朝一 / 天井 / 餓狼チャンス / AT / ガックン / 初期出目` を組み替え、当時業界記事・旧解析・後年DB・回顧資料を再探索したが、初代2006年機固有の設定変更時処理を直接固定できなかった。後継「餓狼伝説スペシャル」「餓狼伝説☆双撃」「餓狼伝説PREMIUM」のreset仕様は流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。当時業界記事でボーナス間の一定G数到達により餓狼チャンスが発動する天井機能自体は確認できるが、据え置き時にそのボーナス間カウンタやGC状態をどう引き継ぐかの初代固有直接資料は固定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。単純電源OFF→ON時のボーナス間天井進捗、餓狼チャンス残ナビ、内部状態、初期出目の復帰契約を直接説明する初代固有資料を確認できず。据え置きと純電断を同義扱いしない。

gameCounterReset: **NORMAL_BONUS_INTERVAL_CEILING_EXISTS_BUT_RESET_CONTRACT_UNVERIFIED**。2006年10月20日のグリーンべると/P-WORLD当時記事が「ボーナス間があるゲーム数に達すると餓狼チャンス発動」と明記。今回の再探索では初代固有の正確な到達G数、および設定変更/据え置き/純電断時のカウンタ処理を高信頼に固定できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更後の天井再設定値・短縮天井・振り分けは公開資料を固定できず。後継機の864G/1399G、993G等の数値は別機種なので混入させない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に天井発動型GCは存在するが、初代固有の通常/天国等のゲーム数モード体系や設定変更後振り分けを示す直接資料は確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。餓狼チャンス中の残ナビ回数、無限GC等を含む状態が設定変更・据え置き・純電断でどう処理されるか、初代固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機初期・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、朝一GC、高確移行等の公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消去等は直接確認できないため、設定変更の不利として推測登録しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。pacnkは本機の設定推測をノーマルBIGからのGC当選等の数値判別中心として整理しており、朝一専用の設定示唆を確認できない。ガックン/初期出目/ランプ/液晶による変更判別は検索語を変えても初代固有の確定根拠を回収できず。

numericResetData:
- normalBonusIntervalCeiling: **EXISTS / EXACT_THRESHOLD_UNVERIFIED_AFTER_RESEARCH**
- resetSpecificCeiling: **UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- morningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunRate: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_CEILING_EXISTENCE_CONFIRMED_RESET_CARRYOVER_POWER_CYCLE_AND_NUMERIC_THRESHOLD_UNVERIFIED**

resetResearchNote:
- 初代2006年「餓狼伝説」と後継「餓狼伝説スペシャル」「餓狼伝説☆双撃」「餓狼伝説PREMIUM」を明示的に分離して再探索。
- 当時業界一次系統で、初代がボーナス間一定G数を契機にGCを発動する天井を持つことまでは確認。
- 後継「双撃」の864G/1399Gや「PREMIUM」の333/555/777/993Gなどは初代へ転記していない。
- 既存性能コアの数値・判定は今回のresetBehavior QAでは変更していない。

## sources

初回取得日: 2026-08-31
resetBehavior QA取得日: 2026-09-10

1. P-WORLD / グリーンべると — SNKプレイモアからパチスロ『餓狼伝説』
   - https://news.p-world.co.jp/articles/1899/greenbelt
   - 2006-10-20。当時業界記事。AT餓狼チャンス、通常約33G/50枚→AT中80G以上、3択ベル5回アシスト1セット、ボーナス間一定G数到達でGCが発動する天井機能を明記
   - reliability: INDUSTRY_HIGH
2. 5号機クロニクル — SNKプレイモア5号機全機種一覧
   - https://5goki.com/snkplaymore
   - 導入2006/11、設定別3種BIG確率・合成、機械割
   - reliability: ANALYSIS_SINGLE
3. pacnk — 餓狼伝説 設定判別ツール
   - https://pacnk.com/slot/tools/sh_garoudensetsu.html
   - 設定別PAYOUT 96.39〜110.58%、GC関連設定差。設定推測は数値判別中心で朝一専用確定示唆は確認できず
   - reliability: RETROSPECTIVE_ANALYSIS_MEDIUM
4. pachinko's blog — SNKプレイモア「パチスロ 餓狼伝説」
   - https://pachinko.hatenablog.jp/entry/2006/12/garouDensetsu
   - 型式名ガロウデンセツDX、3種BIG、設定別PAYOUT。初代同定用
   - reliability: RETROSPECTIVE_ARCHIVE_MEDIUM
5. P-WORLD / グリーンべると — 『餓狼伝説スペシャル』
   - https://news.p-world.co.jp/articles/2566/greenbelt
   - 2007年後継機が「06年11月に同名機種が発売」と明記。後継機識別用でreset数値は初代へ流用していない
   - reliability: INDUSTRY_HIGH

## missingFields

- 各BIGのスーパーボーナス/ノーマルボーナス別の正確な当選確率
- 餓狼チャンス初当たりの設定別総合確率（比較可能な一表）
- 初代の正確なボーナス間天井到達G数
- 設定変更時のボーナス間天井進捗/GC状態処理
- 据え置き時のボーナス間天井進捗/GC状態引継ぎ
- 純電源OFF→ON時の天井進捗/GC状態/初期表示復帰
- 朝一ガックン/初期出目等による変更判別
- 設定変更専用の公開朝一数値

## conflicts

- 機械割は複数資料で小数丸め範囲内に整合し、実質的なCONFLICTなし。
- 後年検索では同シリーズの「餓狼伝説スペシャル」「餓狼伝説☆双撃」「餓狼伝説PREMIUM」が多数ヒットする。これらの天井・reset数値は初代2006年機と別契約として排除。
