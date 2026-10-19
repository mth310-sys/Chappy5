# サクスロ

machineName: サクスロ
manufacturer: ラスター
releaseDate: 2007-01
generation: 5号機初期
systemType: A+RT / BIG+REG

## payoutRateBySetting

パチマガスロマガのシミュレート値。

| 設定 | PAYOUT |
|---|---:|
| 1 | 95.71% |
| 2 | 97.54% |
| 3 | 99.64% |
| 4 | 101.77% |
| 5 | 103.95% |
| 6 | 108.21% |

5号機クロニクルにも2007年1月導入機として掲載されているが、本レコード作成時に設定別機械割表の独立照合値を取得できなかったため、上表は当時解析値として保持する。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/496.48 | 1/541.62 | 1/259.04 |
| 2 | 1/492.75 | 1/448.88 | 1/234.90 |
| 3 | 1/481.88 | 1/394.80 | 1/217.01 |
| 4 | 1/464.79 | 1/366.12 | 1/204.80 |
| 5 | 1/458.29 | 1/350.46 | 1/198.59 |
| 6 | 1/397.19 | 1/399.61 | 1/199.20 |

P-WORLD掲載の合成確率 1/259.0 / 1/234.9 / 1/217.0 / 1/204.8 / 1/198.6 / 1/199.2 と丸め範囲で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガの1000円あたりプレイ数を50枚ベースとして保存する。

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 40.75G |
| 2 | 40.75G |
| 3 | 40.75G |
| 4 | 40.75G |
| 5 | 41.66G |
| 6 | 48.18G |

設定6のみコイン持ちが大きく上昇する特徴がある。

信頼度: ANALYSIS_HIGH

## netIncrease

- REG終了後に100GのRT「サクゾーン」へ突入。
- RT終了条件: 100G消化 / ボーナス成立 / 1枚役入賞 / RT目入賞。
- 1Gあたり純増: UNVERIFIED。

RT中は1枚役およびRT目を回避する手順が当時解析で公開されている。

信頼度: ANALYSIS_HIGH（RT構造）

## basicPayout

- BIG: 規定払い出し465枚、純増約400枚。5号機初のBIG400枚オーバー、最大416枚と当時解析で記載。
- REG: 規定払い出し38枚、純増約40枚。
- REG後: 100G RT「サクゾーン」。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン。
- A+RT型。
- 2007年1月導入として複数後年DBで一致。
- P-WORLDにも独立機種DBが残り、合算値が当時解析値と一致。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: UNVERIFIED
- carryOverBehavior: UNVERIFIED
- powerCycleBehavior: UNVERIFIED
- gameCounterReset: 通常時に天井ゲーム数管理を確認できず。RT残存中の設定変更/電源断処理はUNVERIFIED
- ceilingAfterReset: 天井短縮・変更の公開情報を確認できず
- modeAfterReset: 朝一専用モード/モード再抽選の公開情報を確認できず
- stateAfterReset: REG後RT「サクゾーン」の設定変更時/電源OFF→ON時の扱いは高信頼資料で未確認
- advantageousSectionReset: 非該当（5号機初期。有利区間制度導入前）
- resetBenefits: 公開された朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン等の設定変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

以下を含めて検索語を変え、当時解析、古い機種DB、後年回顧資料を横断した。

- 「サクスロ 設定変更」
- 「サクスロ リセット」
- 「サクスロ 朝一」
- 「サクスロ 据え置き」
- 「サクスロ 電源OFF ON」
- 「サクスロ RT 引継ぎ」
- 「サクスロ ガックン」
- 「サクスロ 天井」

検索結果には同名ブログ等のノイズが多く、本機固有の高信頼な朝一/変更挙動は確定できなかった。

## sources

取得日: 2026-08-31

1. パチマガスロマガ — サクスロ 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/a.php
   - BIG/REG規定払い出し・純増、5号機初BIG400枚オーバー
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — サクスロ ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/i.php
   - 設定別BIG/REG/合算、PAYOUTシミュレート値
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — サクスロ 小役/1000円あたりプレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/c.php
   - 設定別1000円あたり40.75〜48.18P
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — サクスロ RTについて
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/luster_slot/13/k.php
   - REG後100G RT、終了条件、RT維持手順
   - reliability: ANALYSIS_HIGH
5. P-WORLD — サクスロ
   - https://www.p-world.co.jp/machine/database/4502
   - 合成確率が当時解析値と丸め範囲で一致
   - reliability: ANALYSIS_SINGLE
6. 5号機クロニクル — ラスター5号機全機種一覧
   - https://5goki.com/luster
   - 2007年導入機種としてサクスロを掲載
   - reliability: ANALYSIS_SINGLE
7. スロリスクタイム — A+RT機一覧
   - https://pachisuro100.com/a-rt/
   - サクスロ / ラスター / 2007年1月 / A+RTの分類照合
   - reliability: ANALYSIS_SINGLE

## missingFields

- RT純増/G
- resetBehaviorの設定変更/据え置き/電源断時の具体挙動

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- 現時点で性能コアに重大な競合値は確認していない。
