# パチスロPLAYBOY

machineName: パチスロPLAYBOY
manufacturer: 山佐
releaseDate: 2007-02-04
generation: 5号機初期
systemType: A+RT / 完全告知

## payoutRateBySetting

設定1〜4: 95.1 / 98.9 / 102.8 / 107.1%。pacnkと後年実機資料で一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

- BIG: 設定1 1/315.1、2 1/292.6、3 1/273.1、4 1/256.0
- REG/BG: 設定1 1/630.2、2 1/585.1、3 1/546.1、4 1/512.0
- ボーナス合算: 設定1 1/210.05、2 1/195.05、3 1/182.04、4 1/170.67

信頼度: ANALYSIS_HIGH

## baseGamesPer50

機種名/山佐/2007/50枚/1000円/ベース/コイン持ち/ベル確率を分岐して探索。ベル確率は設定1 1/15.20〜設定4 1/14.10を確認したが、50枚あたりゲーム数の明示値は確定できず UNVERIFIED。

## netIncrease

BB後に20GのRT「プレイボーイチャンス」。公開資料ではRT純増/Gの比較可能な明示値を確定できず UNVERIFIED。

## basicPayout

当時業界一次系記事:
- BIG: 約325枚
- BG/REG相当: 約160枚

信頼度: INDUSTRY

## modeSpecificMinimumData

- 山佐初の5号機。
- 25Φ版と30Φ版はスペック/ゲーム性が異なるため別レコード化。
- 25Φ版は第3停止後告知の完全告知機。
- 全小役が同時抽選対象。
- BB後に20G RTを付加。
- 設定は1〜4の4段階。

## resetBehavior

resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
qaRecheckedAt: 2026-09-11

- settingChangeBehavior: 設定変更時の20G RT「プレイボーイチャンス」残G、ボーナス成立状態、告知状態等を直接示す本機固有契約は、メーカー公式・当時業界記事・当時/後年解析・機種DBを再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時のRT残G・内部RT状態・ボーナス成立/告知状態を設定変更や純電断から分離して示す公開契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycleBehavior: 純粋な電源OFF→ONのみでRT残G、内部RT状態、ボーナス成立/告知状態、初期表示がどう復帰するかは `UNVERIFIED_AFTER_RESEARCH`。据え置き一般論から推定しない。
- gameCounterReset: 通常時ゲーム数天井・規定G当選を搭載する資料は確認されず、通常天井カウンタは `NOT_APPLICABLE_NO_CEILING_CONFIRMED`。RT中の残G処理は上記のとおりUNVERIFIED。
- ceilingAfterReset: 通常ゲーム数天井/短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 朝一専用通常モード、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: RT残G・内部RT状態等の設定変更/据え置き/純電断別処理は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`（有利区間制度導入前の5号機初期）。
- resetBenefits: 設定変更固有の天井短縮、朝一RT/CZ、初当たり優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更固有の数値化された主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン、ラビットヘッド、告知音、初期出目、ランプ/表示による本機固有の設定変更判別条件・発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData:
  - normalCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
  - resetCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
  - ceilingShortening: `NONE_CONFIRMED_AFTER_RESEARCH`
  - resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
  - resetHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
  - gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

### resetBehavior 再探索メモ

2026-09-11再監査。「PLAYBOY / プレイボーイ / 山佐 / 5号機 / 2007 / 25Φ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / プレイボーイチャンス / ガックン / 天井 / ラビットヘッド」を組み合わせ、山佐公式、K-Navi当時記事、5号機クロニクル、実機/解析系を再探索。A+RT・完全告知・2007年2月稼働・20G RTというゲーム構造は再確認したが、設定変更/据え置き/純電断を比較可能な機種固有朝一表は追加固定できなかった。後年5号機一般RT説明からの推定補完は行わない。

## sources

取得日: 2026-09-11

1. 山佐ネクスト公式 — パチスロPLAYBOY
   - https://yamasa-next.co.jp/model_plb/
   - 5号機、A+RT、稼働時期2007年2月、完全告知/同時抽選の公式確認。
   - reliability: OFFICIAL
2. K-Navi 当時業界ニュース — パチスロ新機種「パチスロPLAYBOY」が山佐から登場
   - https://p-kn.com/topics/news/124/
   - 2006-12-25掲載、山佐新基準機第1弾、完全告知・ラビットヘッド告知を確認。
   - reliability: INDUSTRY_CONTEMPORARY
3. グリーンべると — 山佐初の5号機『パチスロプレイボーイ』
   - https://web-greenbelt.jp/00004967/
   - 2006-12-29発表、25Φ/30Φ別仕様、25Φ BIG約325枚/BG約160枚、BB後20G RT、2007-02-04納品予定。
   - reliability: INDUSTRY
4. pacnk — プレイボーイ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_pureiboi2007a.html
   - 4段階設定、ボーナス合算、ベル、ブドウ、PAYOUT。
   - reliability: ANALYSIS_SINGLE
5. こだわり山佐の館 — プレイボーイ実機資料
   - https://plaza.rakuten.co.jp/jognoyamasa/2110/
   - 設定別BIG/REG・機械割。pacnkのPAYOUT/合算と整合。
   - reliability: ANALYSIS_SINGLE
6. 5号機クロニクル — 山佐
   - https://5goki.com/yamasa
   - Aタイプ(RT機能付き)・25Φ/30Φ存在の後年回顧確認。導入月/獲得枚数は当時資料と競合するため基本値には不採用。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- baseGamesPer50
- RT純増/G
- 設定変更/据え置き/純電断別のRT残G・内部RT/ボーナス成立状態の直接契約
- resetDetectionの機種固有公開条件/発生率

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

## conflicts

- 5号機クロニクルには導入月2007年10月、BIG約260枚/REG約104枚など、2006年12月当時業界記事および山佐公式の2007年2月稼働時期と整合しない記述があるため、本レコードの導入/基本獲得枚数には採用しない。
- 既存性能コアのPARTIAL/CONFLICTは本QAで崩さず、resetBehavior品質状態のみ更新した。