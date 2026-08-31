# 大江戸漫遊記

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: 大江戸漫遊記
manufacturer: ファースト
releaseDate: 2006-07
generation: 5号機初期
systemType: ノーマル / ボーナス主体 / 5ライン

## payoutRateBySetting

5号機クロニクル:

| 設定 | 機械割 |
|---|---:|
| 1 | 96.7% |
| 2 | 98.6% |
| 3 | 100.1% |
| 4 | 100.9% |
| 5 | 101.7% |
| 6 | 102.3% |

- 後年の長期実戦企画資料でも設定6を約101.6%とする記述があり、設定6端点は丸め/算出条件差の可能性を残す。
- 別系統の全設定表を確保できていないため、既存値を `ANALYSIS_SINGLE` のまま維持。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

- 設定別ボーナス確率表は、パチマガスロマガに該当タブの存在を確認したが今回取得本文から数値を安定確保できず `UNVERIFIED` のまま。
- ボーナス種別は赤7BIG / 赤7・赤7・紫7 / 赤7・赤7・黒7の3系統を確認。

信頼度: UNVERIFIED（設定別確率） / ANALYSIS_HIGH（ボーナス構成）

## baseGamesPer50

パチマガスロマガ「1000円あたりのプレイ数」:
- 設定1: 39.98G
- 設定2: 40.52G
- 設定3: 41.08G
- 設定4: 41.44G
- 設定5: 41.81G
- 設定6: 41.87G

信頼度: ANALYSIS_HIGH

## netIncrease

- P-WORLDは5号機ノーマルとして整理。
- RT/ART/AT等の継続出玉機能は今回確認なし。

## basicPayout

パチマガスロマガ:
- 赤7・赤7・赤7: 465枚超払い出し終了 / 純増約413枚
- 赤7・赤7・紫7: 90枚超払い出し終了 / 純増約82枚
- 赤7・赤7・黒7: 12P消化または4回入賞で終了 / 純増約54枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- 5号機 / 5ラインのボーナス主体ノーマル。
- 純増約413枚の大型ボーナスと、約82枚・約54枚の小型ボーナスを搭載。
- 通常時ゲーム数天井、RT/ART/CZ、朝一専用モードは今回の本機固有資料では確認なし。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `大江戸漫遊記 / F-501 / ファースト / FIRST` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 初期出目 / 変更判別` を組み替え、パチマガスロマガ、P-WORLD、5号機クロニクル、当時/後年業界記事、回顧・実戦資料を横断して再探索。
- 設定変更時専用の天井短縮、モード移行、RT/ART/CZ恩恵は `NONE_CONFIRMED`。
- 本機固有のリール初期化、成立済みボーナス状態等の処理は `UNVERIFIED`。

carryOverBehavior:
- 通常時ゲーム数天井・モード・継続状態として持ち越す公開対象は `NONE_CONFIRMED`。
- 成立済みボーナス等の特殊状態について据え置き時処理は本機固有資料がなく `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみで通常時のゲーム数・モード・状態が変化する公開資料は `NONE_CONFIRMED`。
- 設定変更との差を利用した本機固有判別は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井: `NONE_CONFIRMED`。

ceilingAfterReset:
- リセット時短縮天井 / 変更天井: `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード / 設定変更時モード再抽選: `NONE_CONFIRMED`。

stateAfterReset:
- 通常時の公開内部状態再抽選: `NONE_CONFIRMED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一RT/ART/CZ、短縮天井、設定変更時だけの当選優遇: `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の公開不利要素: `NONE_CONFIRMED`。

resetDetection:
- 本機固有ガックン、初期出目、液晶/ランプ差等による設定変更/据え置き判別は再探索後も直接資料を確定できず `UNVERIFIED`。

numericResetData:
- 公開朝一数値 / 短縮天井G / 朝一モード振り分け / リセット恩恵発生率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. 5号機クロニクル — ファースト5号機全機種一覧
   - https://5goki.com/first
   - 導入時期2006/7、設定別機械割96.7〜102.3%。
   - reliability: ANALYSIS_SINGLE
2. グリーンべると — ファーストが低価格パチスロの販売を発表
   - https://web-greenbelt.jp/00004987/
   - 2006年7月に『大江戸漫遊記』を市場投入した旨を後年記事内で明記。
   - reliability: INDUSTRY
3. ALL7.jp — 2006年6月新台導入予定一覧
   - https://www.all7.jp/plans/index/2006/06
   - 導入予定2006/06/26との記録。
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ — 大江戸漫遊記 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/01/a.php
   - 5号機/5ライン、3種ボーナス、規定払い出しと純増約413/82/54枚。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 大江戸漫遊記 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/01/c.php
   - 1000円あたり39.98〜41.87G。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 大江戸漫遊記 攻略トップ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/first_slot/01/first_slot_01.php
   - ボーナス確率/PAYOUT・設定推測・小役等の攻略タブ構成を確認。
   - reliability: ANALYSIS_HIGH
7. P-WORLD — 大江戸漫遊記
   - https://www.p-world.co.jp/machine/database/4239
   - 型式名F-501、5号機ノーマル、導入開始2006年07月。
   - reliability: SECONDARY_DB
8. sakepowerTV 長期実戦企画説明
   - https://www.youtube.com/watch?v=l2UOKRlf2Mc
   - 設定6機械割を約101.6%とする回顧実戦記述。設定6端点の補助資料としてのみ使用。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- 設定別ボーナス確率
- 設定別機械割の別系統全設定照合
- 設定変更/据え置き/電源OFF→ON時の本機固有リール・成立済みボーナス状態処理
- 本機固有の設定変更判別要素（ガックン等）

## conflicts

- 導入時期について、ALL7.jpに2006/06/26「導入予定」、グリーンべるとに「06年7月に市場投入」、5号機クロニクル/P-WORLDに2006/7。本DBでは実市場投入を優先し2006-07に配置し予定日との差を保持。
- 設定6機械割は5号機クロニクル102.3%に対し後年実戦企画説明101.6%。定義/丸め/資料精度差の可能性があるため平均せず補助CONFLICTとして保持。

## notes

- v0.7 resetBehavior遡及QAを実施。既存の性能status `PARTIAL` を不用意に変更せず、resetBehaviorQAを別管理で追加。
- QA再探索中にパチマガスロマガから、従来欠損だった50枚相当ベースと基本獲得性能を回収したため性能コアも部分補完。
