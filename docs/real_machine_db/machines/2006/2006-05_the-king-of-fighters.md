# ザ・キング・オブ・ファイターズ

machineName: ザ・キング・オブ・ファイターズ
manufacturer: SNKプレイモア
releaseDate: 2006-05
generation: 5号機初期
systemType: ボーナス + RT
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

## payoutRateBySetting

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---|---:|
| 1 | 95.0% |
| 2 | 97.4% |
| 3 | 99.8% |
| 4 | 101.8% |
| 5 | 103.8% |
| 6 | 105.8% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

P-WORLDと5号機クロニクルでボーナス合成確率が一致。

| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/289 |
| 2 | 1/273 |
| 3 | 1/258 |
| 4 | 1/246 |
| 5 | 1/235 |
| 6 | 1/219 |

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「1000円」「50枚」「ベース」「コイン持ち」、型式名エスエヌケイPJ、機種名表記揺れを含めて再探索したが、今回比較に使える明確な数値を確定できず。

## netIncrease

RTは全BIG後50Pの「RTドライブ」。1Gあたり純増は今回UNVERIFIED。

## basicPayout

パチマガスロマガ掲載値:
- 赤7BIG: 規定払い出し450枚 / 純増約331枚
- 青7BIG: 規定払い出し300枚 / 純増約218枚
- 白7BIG: 規定払い出し150枚 / 純増約115枚

信頼度: ANALYSIS_SINGLE

## modeSpecificMinimumData

- 3種類のBIGを搭載
- 全BIG後に50P RT「RTドライブ」へ突入
- 型式名: エスエヌケイPJ
- 2006年4月28日に発表会が開催され、2006年5月導入として複数資料で確認

## resetBehavior

schemaVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-09

settingChangeBehavior:
- 全BIG後50G RT「RTドライブ」を搭載することは2006年当時の電撃オンライン記事で確認。
- 「ザ・キング・オブ・ファイターズ / KOF / エスエヌケイPJ / SNKプレイモア」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RTドライブ / ガックン / 天井」を組み替え、2026-09-09にも公式残存ページ・業界・中古実機資料・解析/回顧資料を再探索したが、設定変更時のRT残状態処理を示す本機固有の高信頼資料は確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時のゲーム数天井、朝一専用モード、設定変更専用CZ等は **NONE_CONFIRMED_AFTER_RESEARCH**。

carryOverBehavior:
- 通常時天井/ゲーム数管理モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日RTドライブ中の据え置き時に残RTゲーム数・RT状態を保持するかは **UNVERIFIED_AFTER_RESEARCH**。

powerCycleBehavior:
- 電源OFF→ONのみでRTドライブ状態を保持するか、本機固有資料では **UNVERIFIED_AFTER_RESEARCH**。

gameCounterReset:
- 通常時ボーナス天井は **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。
- RTは50G固定だが、設定変更/電断をまたぐ残G処理は **UNVERIFIED_AFTER_RESEARCH**。

ceilingAfterReset:
- 通常時天井・設定変更時短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。

modeAfterReset:
- 通常時ゲーム数管理モード、朝一専用モード、設定変更専用モードは **NONE_CONFIRMED_AFTER_RESEARCH**。

stateAfterReset:
- RTドライブ中の設定変更/据え置き/電源OFF→ON時の状態処理は **UNVERIFIED_AFTER_RESEARCH**。
- その他、朝一客行動へ影響する公開内部状態再抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。

advantageousSectionReset:
- **NOT_APPLICABLE（5号機初期・有利区間制度導入前）**。

resetBenefits:
- 設定変更専用の短縮天井、朝一モード、CZ優遇、初当たり優遇など比較可能な公開恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。

resetPenalties:
- 設定変更固有の主要な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection:
- 本機固有のガックン、リール初動、表示、ゲーム数挙動による設定変更/据え置き判別は再探索後も **UNVERIFIED_AFTER_RESEARCH**。

numericResetData:
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- 短縮天井: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**

## sources

初回取得日: 2026-08-31
resetBehavior再探索日: 2026-09-09

1. 電撃オンライン — 『KOF』がパチスロ機に！発表会
   - https://dengekionline.com/data/news/2006/4/28/3e96f67b289f9fdb3a10a28ff46aacb6.html
   - 2006-04-28発表会、型式名エスエヌケイPJ、3種類のボーナス、ボーナス後50G RT
   - reliability: INDUSTRY
2. P-WORLD — ザ・キング・オブ・ファイターズ
   - https://www.p-world.co.jp/machine/database/4193
   - 型式名、設定別ボーナス合成1/289〜1/219
   - reliability: ANALYSIS_SINGLE
3. 5号機クロニクル — SNKプレイモア5号機全機種一覧
   - https://5goki.com/snkplaymore
   - 2006/5導入、設定別ボーナス合成、機械割95.0〜105.8%
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ — ザ・キング・オブ・ファイターズ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/04/a.php
   - 5号機/5ライン/3枚掛け、3種類のBIG、各BIG純増、全BIG後50P RT
   - reliability: ANALYSIS_SINGLE
5. A-SLOT 中古実機 — SNKプレイモア ザ・キング・オブ・ファイターズ
   - https://www.a-slot.com/SHOP/snk_kof1.html
   - 初代KOF実機同定の補助資料。resetBehaviorの直接契約は掲載なし。
   - reliability: SECONDARY_SUPPORT
6. SNK公式残存ページ — THE KING OF FIGHTERS Chapter of NESTS
   - https://slot.snk-corp.co.jp/official/kof2/
   - 後継KOF2の公式ページ。初代へのリセット仕様転用は行わず、シリーズ混同防止に利用。
   - reliability: OFFICIAL_IDENTITY_SUPPORT

## missingFields

- 50枚あたりゲーム数 / ベース
- RTの1Gあたり純増
- 3種類BIGそれぞれの設定別個別確率
- 設定変更/据え置き/電源OFF→ON時のRT状態処理: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン/変更判別: UNVERIFIED_AFTER_RESEARCH
- 公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- 現時点で採用済みコア数値に明確な競合は確認していない。

## status

PARTIAL

## qaNotes
- 性能側の `PARTIAL` は従来のコア欠損（ベース、RT純増、BIG個別確率）によるもので維持。resetBehavior QA状態とは分離する。
- 2026-09-09、検索語・資料系統を変更して再探索したが、本機固有の設定変更/据え置き/純電断RT契約を固定できなかったため、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` とした。
