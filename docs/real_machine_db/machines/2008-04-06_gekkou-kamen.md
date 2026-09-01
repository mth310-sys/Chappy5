# 月光仮面

machineName: 月光仮面
manufacturer: 北電子
modelName: ゲッコウカメン2A
releaseDate: 2008-04-06
releaseDateConfidence: INDUSTRY_DELIVERY_START
releaseDateNote: 当時グリーンべると記事はジャンキージャグラーと月光仮面の2機種について2008-04-06より納品開始と明記。旧業界史は月光仮面2Aを2008-04-07発売とするため、納品開始/発売ラベル差としてCONFLICT_DATE_LABELを保持する。
generation: 5号機初期
systemType: ノーマルA / ボーナス主体（RTなし・小役同時当選あり）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## 性能コア

payoutRateBySetting:
- sourceA_kitaOfficialFactoryPrediction: `95.21 / 97.16 / 99.10 / 101.21 / 104.23 / 107.39%`
- sourceB_pachimagaSimulation: `96.10 / 98.22 / 100.37 / 102.64 / 106.13 / 109.63%`
- status: CONFLICT_PAYOUT_DEFINITION
- note: 北電子公式は「工場データから算出した予測値」、パチマガスロマガはシミュレート値と明記。定義/条件が異なるため平均化せず双方を保存する。K-Navi・中古実機資料は公式系列の数値と一致。

initialHitBySetting:
- BIG合成: `1/295.21 / 1/281.27 / 1/269.70 / 1/259.04 / 1/248.24 / 1/240.94`
- REG: `1/590.41 / 1/560.14 / 1/520.13 / 1/478.36 / 1/399.61 / 1/364.09`
- ボーナス合成: `1/196.80 / 1/187.25 / 1/177.60 / 1/168.04 / 1/153.12 / 1/144.99`
- crosscheck: BIG/REGは北電子公式、K-Navi、中古実機資料で一致。ボーナス合成はパチマガスロマガ。

baseGamesPer50:
- 設定1〜5: `35.98G/50枚`
- 設定6: `36.99G/50枚`
- source: パチマガスロマガ「1000円あたりのゲーム数」

netIncrease:
- NOT_APPLICABLE_NO_RT_ART_AT
- note: 本機はRT等を搭載しないノーマルAとして複数資料で一致。

basicPayout:
- BIG: 約314枚
- REG: 約126枚
- payoutCondition: BIGは345枚超払い出しで終了、REGは120枚超払い出しで終了。

modeSpecificMinimumData:
- RT/ART/ATなしのノーマルA。
- 全小役でボーナス同時抽選を採用。
- 北電子5号機初の液晶搭載機。
- 型式名は `ゲッコウカメン2A`。

## resetBehavior (mission v0.7)

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED
modeAfterReset: NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED
stateAfterReset: NOT_APPLICABLE_NO_INTERNAL_STATE_SYSTEM_CONFIRMED
advantageousSectionReset: NOT_APPLICABLE
resetBenefits: NONE_CONFIRMED
resetPenalties: NONE_CONFIRMED
resetDetection: UNVERIFIED_AFTER_RESEARCH
numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- 本機はRT/ART/ATを持たないノーマルAで、通常ゲーム数天井・周期CZ・朝一専用モード・内部状態システムを示す公開資料を確認できない。したがってゲーム数/天井/モード/状態のリセット対象は `NOT_APPLICABLE_*` とする。
- 設定変更時の初期出目・リール挙動、据え置き時との外見上の差、電源OFF→ONのみの場合の固有挙動は、本機固有の直接資料を確認できず一般的な5号機Aタイプの挙動から補完しない。
- `月光仮面 / 月光仮面2A / 月光仮面A2 / ゲッコウカメン2A / 北電子` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電源 / ガックン / 初期出目 / 天井` を組み替え、公式・当時解析・旧DB・中古実機資料・業界アーカイブ・回顧資料を再探索したが、本機固有の設定変更判別資料は発見できず `UNVERIFIED_AFTER_RESEARCH`。
- リセット時のみのボーナス確率変化、朝一恩恵/不利、短縮天井、モード振り分け等の公開数値は確認できず `NONE_CONFIRMED`。
- 有利区間制度導入前の5号機のため `advantageousSectionReset: NOT_APPLICABLE`。

## conflicts

- CONFLICT_PAYOUT_DEFINITION: 北電子公式の工場データ予測出玉率 `95.21〜107.39%` とパチマガスロマガのシミュレートPAYOUT `96.10〜109.63%` は定義/条件が異なり数値差がある。平均化しない。
- CONFLICT_DATE_LABEL: 当時グリーンべるとは `2008-04-06 納品開始`、旧業界史は `2008-04-07 発売`。納品開始/発売日のラベル差として双方を保持。

## missingFields

- 設定変更時の本機固有初期挙動
- 据え置き時の本機固有初期挙動
- 電源OFF→ONのみの場合の本機固有挙動
- ガックン/初期出目等による本機固有の設定変更判別

## sources

取得日: 2026-09-01

1. 北電子公式「月光仮面」 — 設定別BB/RB、工場データ予測出玉率、3枚掛け専用
   https://www.kitadenshi.co.jp/slot/gekkoukamen/
   confidence: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース「北電子がジャグラー最新作を発表」 — 月光仮面とジャンキージャグラーの2008-04-06納品開始、BIG平均314枚/RB平均126枚、全小役同時抽選
   https://news.p-world.co.jp/articles/2700/greenbelt
   confidence: INDUSTRY
3. パチマガスロマガ「月光仮面」基本システム — ノーマル/同時成立、BIG約314枚、REG約126枚、払い出し終了条件
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/65/a.php
   confidence: ANALYSIS_HIGH
4. パチマガスロマガ「月光仮面」ボーナス抽選確率 — 設定別BIG/REG/合成、シミュレートPAYOUT96.10〜109.63%
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/65/h.php
   confidence: ANALYSIS_HIGH
5. パチマガスロマガ「月光仮面」小役確率 — 1000円あたり設定1〜5 35.98G、設定6 36.99G
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/65/c.php
   confidence: ANALYSIS_HIGH
6. K-Navi「月光仮面」 — 設定別BIG/REG/機械割の公式系列数値を照合
   https://p-kn.com/slot/791/
   confidence: ANALYSIS_HIGH
7. 中一商事「北電子 月光仮面」 — 型式名ゲッコウカメン2A、ノーマルA、RTなし、BIG約314枚/REG約126枚を補助確認
   https://www.nakaiti.com/html/sKitadenshi054.html
   confidence: HARDWARE_ARCHIVE_SUPPORT
8. パチスロ業界初まとめ — 月光仮面2Aを2008-04-07発売とする当時更新履歴、月光チャンス名称の補助
   https://slothistory.com/kousin_kako05.html
   confidence: INDUSTRY_ARCHIVE
9. Pマンズ 2008年2月 — 公安委員会告示転載で型式 `ゲッコウカメン2A` を確認
   https://p-mans.blogspot.com/2008/02/
   confidence: INDUSTRY_ARCHIVE

## quality

performanceCoreConfidence: OFFICIAL_PLUS_ANALYSIS_HIGH_WITH_PAYOUT_DEFINITION_CONFLICT
resetBehaviorConfidence: PARTIAL_NOT_APPLICABLE_CORE / UNVERIFIED_MACHINE_SPECIFIC_CHANGE_DETECTION
recordStatus: COMPLETE_CORE / RESET_PARTIAL
