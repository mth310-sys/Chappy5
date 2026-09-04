# ドカベンD

machineName: ドカベンD
manufacturer: ロデオ
releaseDate: 2006-12-11
generation: 5号機初期
systemType: ボーナス主体 + MIDボーナス
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## payoutRateBySetting

CONFLICT。

5号機クロニクル:
- 設定1: 96.0%
- 設定2: 96.5%
- 設定3: 99.6%
- 設定4: 102.9%
- 設定5: 106.2%
- 設定6: 109.2%

pachinko's blog掲載値:
- 設定1: 95.8%
- 設定2: 96.1%
- 設定3: 99.0%
- 設定4: 102.0%
- 設定5: 104.6%
- 設定6: 107.0%

差が丸めだけでは説明できないため平均化せずCONFLICT保持。

## initialHitBySetting

pachinko's blog掲載:

| 設定 | BIG1 | BIG2 | MIDDLE |
|---:|---:|---:|---:|
| 1 | 1/368.1 | 1/799.2 | 1/595.7 |
| 2 | 1/399.6 | 1/799.2 | 1/606.8 |
| 3 | 1/346.7 | 1/762.0 | 1/585.1 |
| 4 | 1/339.5 | 1/753.2 | 1/579.9 |
| 5 | 1/299.2 | 1/744.7 | 1/579.9 |
| 6 | 1/309.1 | 1/682.6 | 1/537.1 |

単一二次資料値のため別ソース照合待ち。

reliability: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED。

「ドカベンD / ロデオ / 50枚 / 1000円 / ベース / コイン持ち / プレイ数」で再探索したが、2006年ロデオ版について比較可能な確定値は今回取得できず。

※2012年タイヨーエレック版『ドカベン』の約32G/1000円等は別機種のため採用していない。

## netIncrease

通常時AT/ART純増は該当なし。

## basicPayout

パチマガスロマガ掲載:
- BIG（7揃い）: 345枚超払い出し終了 / 純増約309枚
- BIG（7・7・BAR）: 105枚超払い出し終了 / 純増約103枚
- MIDボーナス（グローブ・リプレイ・グローブ）: 253枚超払い出し終了 / 純増約204枚
- MIDボーナス（グローブ・グローブ・リプレイ）: 29枚超払い出し終了 / 純増約24枚

reliability: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 4ライン / 3枚掛け専用。
- 「ドカベンチャンス」の正体はMIDボーナス。
- MIDボーナスは演出なしで入賞する仕様。
- K-Naviでホール導入開始 2006-12-11を確認。
- 型式名として「パチスロ ドカベン D」の記載あり。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名、型式、ロデオを用い「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「RT」「ガックン」を組み替え、当時解析・旧DB・回顧資料を再探索したが、本機固有の設定変更時挙動を直接確定できず。一般的な5号機挙動から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時に引き継ぐべきゲーム数天井・長期モード・RTストック等の存在自体を本機の高信頼資料で確認できず、設定据え置き時の表示/内部状態についても直接記述なし。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の内部状態、液晶、出目等の扱いを本機固有資料で確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。パチマガスロマガの機種トップ/基本システムには5号機・ボーナス主体・MIDボーナス構造が掲載され、天井/RT/ゲーム数解除の記載は確認できない。さらに天井・攻め時/ヤメ時系統も再探索したが通常ゲーム数天井を確認できず。不存在を主基板仕様書で証明したものではないため、根拠範囲は「公開資料上のゲーム数天井なし確認」に限定する。

ceilingAfterReset: **NOT_APPLICABLE_NO_PUBLIC_GAME_COUNT_CEILING_CONFIRMED**。設定変更専用短縮天井・朝一規定G数も確認できず。

modeAfterReset: **NOT_APPLICABLE_AS_SEPARATE_LONG_GAME_MODE_NOT_CONFIRMED**。通常A/B/天国などの長期ゲーム数モード体系は確認していない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ボーナス成立後やMIDボーナスに関する内部/表示状態の設定変更処理は直接資料未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後の高確スタート、短縮天井、朝一ボーナス優遇などの公開値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。消滅する天井進捗・ARTストック等を本機では確認できないため、不利要素を推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ等を用いる本機固有の設定変更判別情報は確認できず。

numericResetData:
- 公開通常天井G数: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更専用天井G数: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時内部状態振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G数恩恵: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **MEDIUM_FOR_NO_PUBLIC_GAME_COUNT_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_STATE_AND_DETECTION**。

## sources

取得日: 2026-09-04

1. K-Navi — ドカベン（ロデオ）
   - https://p-kn.com/slot/691/
   - ホール導入開始 2006-12-11
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — ドカベンD / 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/39/a.php
   - ボーナス構造、規定払い出し枚数・純増枚数。基本システムにRT/天井記載なし。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ドカベンD / 機種トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/39/rodeo_slot_39.php
   - ロデオ機、解析項目一覧。基本システム/攻め時・ヤメ時等を確認し、公開天井/設定変更専用項目を再探索。
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — ロデオ5号機全機種一覧
   - https://5goki.com/rodeo
   - 2006/12導入、設定別機械割
   - reliability: ANALYSIS_SINGLE
5. pachinko's blog — ロデオ「パチスロ ドカベン」の筐体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2006/12/dokaben
   - 型式名、設定別ボーナス確率、設定別出玉率
   - reliability: ANALYSIS_SINGLE
6. パチスロ温故知新 第4話 2006年編
   - https://note.com/madogiwaossan/n/n37cd592b4cd8
   - 2006年末5号機の天井搭載状況を補助確認。機種固有一次根拠ではないため、ドカベンDの設定変更挙動の確定には使用しない。
   - reliability: RETROSPECTIVE_LOW_FOR_MACHINE_SPEC

## missingFields

- 50枚あたりゲーム数 / ベース
- 設定別ボーナス確率の別系統照合
- settingChangeBehavior
- carryOverBehavior
- powerCycleBehavior
- stateAfterReset
- resetDetection

## conflicts

### 設定別機械割
- 5号機クロニクル: 96.0 / 96.5 / 99.6 / 102.9 / 106.2 / 109.2%
- pachinko's blog: 95.8 / 96.1 / 99.0 / 102.0 / 104.6 / 107.0%

平均化せず双方を保持。完全攻略条件や算出条件差の可能性があるが、根拠未確定のため現時点で定義を断定しない。
