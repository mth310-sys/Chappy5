# サクラ大戦S2

machineName: サクラ大戦S2（製品名: サクラ大戦）
manufacturer: エレコ / アルゼ
releaseDate: 2005-10
generation: 5号機初期
systemType: ノーマル / Aタイプ（ボーナス主体、RT非搭載）

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 6 | 103.8% |

信頼度: ANALYSIS_HIGH

5号機クロニクル掲載値。別資料では97% / 103%、後年まとめでは97.38% / 103.84%と丸め差の範囲にある。設定は1・6の2段階のみであることは2005年10月21日の業界記事でも確認。

## initialHitBySetting

### BIG（赤7・青7合算）
| 設定 | BIG確率 |
|---|---:|
| 1 | 1/334.37 |
| 6 | 1/282.48 |

### REG
| 設定 | REG確率 |
|---|---:|
| 1 | 1/873.81 |
| 6 | 1/819.20 |

### ボーナス合成
| 設定 | ボーナス合成 |
|---|---:|
| 1 | 1/241.83 |
| 6 | 1/210.05 |

旧パチマガスロマガ機種DBの設定別解析値。赤7・青7は同一確率とされる。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

旧パチマガスロマガの1000円あたりプレイ数:
- 設定1: 43.58P
- 設定6: 44.19P

50枚貸し前提の比較用ベースとして採用。

信頼度: ANALYSIS_HIGH

## netIncrease

該当なし（RT/ART非搭載）。

## basicPayout

- スーパーBIG（赤7）: 465枚超の払い出しで終了 / 純増約370枚
- ノーマルBIG（青7）: 350枚超の払い出しで終了 / 純増約275枚
- REG: 8回入賞または12G消化で終了 / 純増約96枚

払い出し終了条件はメーカー公式/旧解析、純増目安は2005年当時の業界記事および旧解析で確認。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 設定は1・6の2段階。
- S-BIG（赤7）とN-BIG（青7）のツインBIG。
- REG搭載。
- 小役同時成立なし。
- RT/AT/ART非搭載。
- 通常時ゲーム数解除/天井は確認できず。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時に天井・RT・ART・AT・モード管理を確認できず、物差し上引き継ぐ主要朝一要素は確認なし。本機固有のボーナス成立状態等の電断処理は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を明記した高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時天井/ゲーム数解除を確認できず、天井用ゲーム数カウンタは非該当
- ceilingAfterReset: 天井短縮・リセット天井は確認できず
- modeAfterReset: 通常時モード/朝一専用モードは確認できず
- stateAfterReset: RT/ART/AT状態は非該当。本機固有の設定変更時状態再抽選資料は未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要不利要素は確認できず
- resetDetection: 「サクラ大戦S2 / サクラ大戦 エレコ」に「設定変更 / リセット / 朝一 / 据え置き / ガックン」を組み合わせて再探索したが、本機固有の高信頼な変更判別情報は確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

メーカー/当時業界資料、旧パチマガスロマガ、後年回顧資料を横断。RTやATは一切なく、通常時天井・モード管理も確認できない一方、設定変更/電源OFF→ON時の本機固有処理やガックン判別を直接記す高信頼資料は発見できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — サクラ大戦
   - https://www.universal-777.com/product/slot/sakura_wars/
   - ツインBIG、赤7は465枚超、青7は350枚超の払い出しで終了
   - reliability: OFFICIAL
2. グリーンべると — アルゼが５号機２機種を発表（2005-10-21）
   - https://web-greenbelt.jp/00005251/
   - サクラ大戦S2・デビルマン3を発表、両機とも設定1/6の2段階、サクラ大戦S2の純増約370枚/約275枚
   - reliability: INDUSTRY
3. パチマガスロマガ — サクラ大戦S2 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/55/e.php
   - BIG 設定1 1/334.37・設定6 1/282.48、REG 1/873.81・1/819.20、合算 1/241.83・1/210.05
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — サクラ大戦S2 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/55/a.php
   - RTなし、S-BIG約370枚、N-BIG約275枚、REG約96枚
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — サクラ大戦S2 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/55/c.php
   - 1000円あたり設定1 43.58P、設定6 44.19P
   - reliability: ANALYSIS_HIGH
6. 5号機クロニクル — ユニバーサル系5号機全機種一覧
   - https://5goki.com/universal
   - 2005年10月、エレコ、Aタイプ、機械割97.3%/103.8%
   - reliability: ANALYSIS_SINGLE
7. パチマガスロマガFREE — 名機 the ORIGIN サクラ大戦S2
   - https://pachimaga.com/free/special/5f9945d7f3fa87318ca147a545efea04f53261a2.php
   - 2005年10月、ノーマルタイプ、設定1/6、RT/ATなし
   - reliability: ANALYSIS_HIGH

## missingFields

- 設定変更時の本機固有内部処理
- 電源OFF→ONのみの本機固有挙動
- 本機固有の変更判別
- 公開朝一専用数値

## conflicts

- 機械割は97.3%/103.8%、97%/103%、97.38%/103.84%の表記があるが、丸め精度の違いとみられる。現時点では5号機クロニクルの97.3%/103.8%を記録。

## QA修正履歴

- 2026-08-31: 旧レコードの「REG非搭載」を旧パチマガスロマガのREG確率・REG約96枚資料に基づき訂正。
- 2026-08-31: それまでUNVERIFIEDだったbaseGamesPer50を43.58P/44.19Pで補完。
- 2026-08-31: v0.7 resetBehaviorを遡及追加。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
