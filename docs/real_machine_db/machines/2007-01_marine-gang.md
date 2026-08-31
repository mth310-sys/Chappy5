# マリーンギャング

machineName: マリーンギャング
manufacturer: パイオニア
releaseDate: 2007-01
generation: 5号機初期
systemType: ボーナス主体 / CT（2種BB）単独構成

## payoutRateBySetting

メーカー公式掲載値と当時解析値を併記する。

| 設定 | メーカー公式 | パチマガスロマガ |
|---|---:|---:|
| 1 | 95% | 95.12% |
| 2 | 97% | 97.55% |
| 3 | 100% | 100.01% |
| 4 | 102% | 102.25% |
| 5 | 104% | 104.38% |
| 6 | 107% | 106.55% |

両者は整数丸め相当の差として整合するためCONFLICT扱いにはしない。

信頼度: OFFICIAL + ANALYSIS_HIGH

## initialHitBySetting

本機の主要ボーナスは赤7揃いの「トレジャータイム（CT）」のみ。

| 設定 | CT確率 |
|---|---:|
| 1 | 1/128 |
| 2 | 1/122 |
| 3 | 1/117 |
| 4 | 1/112 |
| 5 | 1/106 |
| 6 | 1/99 |

P-WORLD、パイオニア公式、パチマガスロマガで一致。

参考として、CTを終了させるSINボーナス確率は設定1〜4が1/27.911、設定5が1/26.006、設定6が1/24.309と当時解析に掲載されている。ただし物差しの主要初当たりには含めない。

信頼度: OFFICIAL + ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガの1000円あたりプレイ数を50枚ベースとして保存する。

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 36.00G |
| 2 | 36.39G |
| 3 | 36.81G |
| 4 | 37.05G |
| 5 | 37.59G |
| 6 | 38.01G |

信頼度: ANALYSIS_HIGH

## netIncrease

- 通常時RT/ARTは確認していない。
- トレジャータイム（CT）は1BET遊技。
- CTは239枚を超える払い出し、またはSIN成立で終了。
- 純増/Gとしての比較値は非該当。

信頼度: OFFICIAL

## basicPayout

- メーカー公式: ドキドキラウンド機能による「純増MAX220枚」。
- パチマガスロマガ平均純増:
  - 設定1: 159.02枚
  - 設定2: 159.02枚
  - 設定3: 159.02枚
  - 設定4: 159.02枚
  - 設定5: 155.49枚
  - 設定6: 151.98枚
- 規定終了条件: 239枚以上の払い出し、またはSIN成立。

MAX値と平均値は定義が異なるため混同しない。

信頼度: OFFICIAL + ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ライン。
- パイオニア公式では「ハネモノ新感覚『甘スロ』」として訴求。
- 設定6のボーナス確率1/99が特徴。
- 5号機では珍しいCT（2種BB）のみを主要ボーナスとして搭載する構成。
- 同名注意: 4号機時代にダイドーの「マリンギャング」が存在するが、本レコードは長音入り「マリーンギャング」/パイオニア/2007年機であり別機種。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 高信頼な本機固有挙動を確認できず UNVERIFIED
- carryOverBehavior: 高信頼な本機固有挙動を確認できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの固有挙動を確認できず UNVERIFIED
- gameCounterReset: 通常時に天井ゲーム数管理を確認しておらず、天井ゲーム数のリセット/引継ぎは非該当と判断できる範囲。ただしボーナス内部成立状態等の電源断処理は対象外/UNVERIFIED
- ceilingAfterReset: 天井機能を確認しておらず非該当
- modeAfterReset: 通常時モード/朝一専用モードを確認しておらず非該当
- stateAfterReset: 通常時の状態管理による朝一恩恵/不利を確認できず
- advantageousSectionReset: 非該当（5号機初期。有利区間制度導入前）
- resetBenefits: 公開された朝一/設定変更恩恵を確認できず
- resetPenalties: 公開された設定変更時の主要不利要素を確認できず
- resetDetection: ガックン、表示、ゲーム数挙動等の本機固有の変更判別情報を高信頼資料で確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

以下を含めて検索語を変え、メーカー公式、当時解析、P-WORLD、旧資料/回顧資料を横断した。

- 「マリーンギャング 設定変更」
- 「マリーンギャング リセット」
- 「マリーンギャング 朝一」
- 「マリーンギャング 据え置き」
- 「マリーンギャング 電源OFF ON」
- 「マリーンギャング 天井」
- 「マリーンギャング ガックン」
- 「マリーンギャング パイオニア 2007」

釣具の「マリーンギャング」や4号機「マリンギャング」のノイズが非常に多いため、メーカー名・年代を追加して再探索したが、本機固有の設定変更/朝一挙動を確定できる資料は見つからなかった。

## sources

取得日: 2026-08-31

1. パイオニア公式 — マリーンギャング製品ページ
   - https://www.slot-pioneer.co.jp/product/marinegang/mg1.html
   - 設定別ボーナス確率、設定別出玉率、CT終了条件、純増MAX220枚
   - reliability: OFFICIAL
2. パイオニア公式 — 2001〜2009年機種一覧
   - https://www.slot-pioneer.co.jp/products/2009.html
   - 2007年1月発売、設定6で1/99、「甘スロ」の位置付け
   - reliability: OFFICIAL
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/81/a.php
   - CT終了条件、設定別平均純増枚数
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/81/h.php
   - 設定別CT確率、SINボーナス確率、PAYOUT
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役/1000円あたりプレイ数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/81/c.php
   - 設定別1000円あたり36.00〜38.01P
   - reliability: ANALYSIS_HIGH
6. P-WORLD — マリーンギャング
   - https://www.p-world.co.jp/machine/database/4527
   - 設定別ボーナス確率が公式/当時解析と一致
   - reliability: ANALYSIS_SINGLE
7. 5号機クロニクル — パイオニア5号機全機種一覧
   - https://5goki.com/pioneer
   - 機械割95〜107%を掲載、2007年機として分類
   - reliability: ANALYSIS_SINGLE
8. Pマンズ — パイオニアが甘スロ「マリーンギャング」
   - https://p-mans.blogspot.com/2006/12/
   - 2006-12-13発表展示会、MAX1/99の発表背景
   - reliability: INDUSTRY

## missingFields

- resetBehaviorの設定変更/据え置き/電源OFF→ON時の本機固有挙動
- ガックン等の変更判別情報

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- 重大な性能値CONFLICTは現時点で確認していない。
- メーカー公式出玉率は整数、パチマガスロマガPAYOUTは小数だが丸め相当として整合。
