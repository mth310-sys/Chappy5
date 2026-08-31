# ナースウィッチ小麦ちゃんマジカルて（コムギチャンSP）

machineName: ナースウィッチ小麦ちゃんマジカルて
manufacturer: JPS
releaseDate: 2006-02
generation: 5号機初期
systemType: ボーナス+RT / 技術介入

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.5% |
| 3 | 100.0% |
| 4 | 102.0% |
| 5 | 104.5% |
| 6 | 106.5% |

5号機クロニクル、pacnk、当時系スペック資料で一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG
| 設定 | BIG |
|---|---:|
| 1 | 1/496.48 |
| 2 | 1/496.48 |
| 3 | 1/445.82 |
| 4 | 1/474.90 |
| 5 | 1/448.88 |
| 6 | 1/448.88 |

### CT（チャレンジボーナス）
| 設定 | CT |
|---|---:|
| 1 | 1/404.54 |
| 2 | 1/360.09 |
| 3 | 1/381.02 |
| 4 | 1/330.99 |
| 5 | 1/315.08 |
| 6 | 1/293.88 |

複数二次資料で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」および型式名コムギチャンSPを組み合わせて再探索したが、比較可能な通常時ベースは確認できなかった。

## netIncrease

RT機能あり。ボーナス後60PのRT、1枚役取りこぼしでRT目となる特殊なRT構造をパチマガスロマガで確認。1Gあたり純増の比較可能な公表値は今回未確認。

## basicPayout

- BIG: 規定払い出し345枚、純増約286枚
- CT: 規定払い出し224枚、純増約188枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 型式名: コムギチャンSP
- 5ライン / 3枚掛け専用
- ボーナス後60P RT
- RT中は1枚役の取り扱いによる技術介入要素あり
- JPS初のパチスロ5号機

## resetBehavior

resetBehaviorQA: PARTIAL

本機はボーナス後60PのRTを持つ初期5号機だが、設定変更・据え置き・電源OFF→ON時のRT残ゲーム数や成立済みボーナス状態を明記した本機固有の高信頼資料は、表記揺れ・型式名・リセット関連語を変えて再探索しても今回確認できなかった。不明部分を他機種の一般則から補完しない。

- settingChangeBehavior: UNVERIFIED（設定変更時のRT/成立済みボーナス状態処理を確認できず）
- carryOverBehavior: UNVERIFIED（据え置き時のRT残G数・内部状態引継ぎを確認できず）
- powerCycleBehavior: UNVERIFIED（設定変更なしの電源OFF→ON時RT/内部状態処理を確認できず）
- gameCounterReset: 通常時ゲーム数天井を主要仕様として確認できず、天井ゲーム数管理はNONE_CONFIRMED
- ceilingAfterReset: NONE_CONFIRMED
- modeAfterReset: 朝一専用モード、設定変更時モード再抽選はNONE_CONFIRMED
- stateAfterReset: ボーナス後60P RTは存在するが、設定変更/電断時の残RT処理はUNVERIFIED
- advantageousSectionReset: NOT_APPLICABLE（5号機初期・有利区間制度導入前）
- resetBenefits: 設定変更/朝一専用の短縮天井・当選優遇・専用RT恩恵はNONE_CONFIRMED
- resetPenalties: NONE_CONFIRMED
- resetDetection: ガックン、表示変化、RT挙動等による本機固有の変更判別はUNVERIFIED
- numericResetData: NONE_CONFIRMED

### resetBehavior 再探索メモ

2026-08-31に以下を組み替えて再探索した。

- 「ナースウィッチ小麦ちゃんマジカルて 設定変更 / リセット / 朝一 / 据え置き」
- 「コムギチャンSP 設定変更 / 電源OFF ON / ガックン / RT」
- 「小麦ちゃん パチスロ 天井 / RT 設定変更」
- 当時解析、古いDB、業界記事、後年回顧資料

当時系資料と後年回顧では、本機が2006年2月導入の5号機、ボーナス後60P RTと技術介入を持つことまでは確認できる。一方、ホール朝一挙動を定量化できる設定変更/据え置き/電断時の固有情報は確認できなかった。

## sources

取得日: 2026-08-31

1. P-WORLD業界ニュース（グリーンべると転載）— JPS第一弾機は“萌え系”アニメとのタイアップ
   - https://news.p-world.co.jp/articles/1558/greenbelt
   - 2006-01-20掲載。JPS初5号機、型式名コムギチャンSP、発表情報
   - reliability: INDUSTRY
2. パチマガスロマガ — ナースウィッチ小麦ちゃん マジカルて
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/01/a.php
   - 5ライン/3枚掛け、RT構造、BIG/CT規定払い出し・純増
   - reliability: ANALYSIS_HIGH
3. 5号機クロニクル — JPS 5号機全機種一覧
   - https://5goki.com/jps
   - 2006/2導入、設定別機械割
   - reliability: ANALYSIS_SINGLE
4. pacnk — コムギチャンSP 設定判別ツール
   - https://pacnk.com/slot/tools/sh_komugisp.html
   - 設定別BIG/CT確率、機械割
   - reliability: ANALYSIS_SINGLE
5. パチスロ5号機まとめwiki — ナースウィッチ小麦ちゃんマジカルて
   - https://w.atwiki.jp/5gouki/pages/85.html
   - 設定別BIG/CT確率と機械割の補助照合
   - reliability: ANALYSIS_SINGLE
6. パチセブン — 『小麦ちゃんマジカルて』から5号機の技術革新は始まった！
   - https://pachiseven.jp/articles/detail/11578
   - 2006年2月導入の後年回顧資料。resetBehavior再探索の補助確認に使用
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / 1000円ベース
- RTの1Gあたり純増比較値
- 設定変更/据え置き/電源OFF→ON時のRT・内部状態処理
- 本機固有の朝一変更判別

## conflicts

- 現時点で物差し項目の重大な数値競合は確認していない。

## QA status

- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- resetRetroactiveQA: 2026-08-31実施
