# 押忍！サラリーマン番長

machineName: 押忍！サラリーマン番長
manufacturer: 大都技研
releaseDate: 2014-09-08
releaseDatePrecision: exact_start
generation: 5号機
systemType: 疑似ボーナス+AT / CZ / 天井
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- HAZUSEで **2014-09-08導入開始**、メーカー **大都技研**、型式名 **押忍！サラリーマン番長 俺に日本は狭すぎるA9**、検定番号 **4S0483** を確認。
- 2014-07-25のニッカンアミューズメント（娯楽産業）発表記事でも大都技研機として、疑似ボーナス+純増2.8枚/G AT「頂RUSH」を確認。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.50% |
| 2 | 99.40% |
| 3 | 101.30% |
| 4 | 104.40% |
| 5 | 108.30% |
| 6 | 114.50% |

- 主系列はHAZUSEの精密値を採用。
- ちょんぼりすたは **97.5 / 99.4 / 101 / 104 / 108 / 115%** と丸めの大きい系列。
- 期待値見える化は **97.0 / 98.9 / 100.5 / 104.4 / 108.3 / 114.5%** と設定1〜3で差があるため、平均せず `CONFLICT_PAYOUT_RATE_SECONDARY_SERIES` として保持。
- confidence: ANALYSIS_HIGH / CONFLICT_PARTIAL

## initialHitBySetting

| 設定 | 番長ボーナス | AT初当たり | ボーナス+AT合算 |
|---:|---:|---:|---:|
| 1 | 1/295.9 | 1/623.1 | 1/200.6 |
| 2 | 1/282.8 | 1/569.7 | 1/189.0 |
| 3 | 1/281.0 | 1/582.6 | 1/189.6 |
| 4 | 1/265.3 | 1/497.2 | 1/173.0 |
| 5 | 1/256.6 | 1/525.5 | 1/172.2 |
| 6 | 1/241.4 | 1/374.9 | 1/146.9 |

- HAZUSEの基本スペック/設定推測値を主系列として採用。
- HAZUSEページ内の後段設定推測欄には設定6「番長ボーナス 1/374.9」とする明白な転記崩れがあるが、同ページ上段の基本スペックは1/241.4で、他二次資料も約1/241で一致するため、後段値は別定義として採用しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_CONTEXT

## baseGamesPer50

- **約31.5G/50枚**。
- HAZUSEで全設定共通約31.5G、ちょんぼりすたも31.5G。期待値見える化は約32Gと丸め表記。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナス / AT「頂RUSH」とも **約2.8枚/G**。
- 2014-07-25業界発表、HAZUSE、複数解析資料で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- 番長ボーナス: **40〜100G**の疑似ボーナス、純増約2.8枚/G。
- 超番長ボーナス: **50G**、終了後は頂RUSH確定。
- 頂RUSH: **1セット50G+α**、純増約2.8枚/G。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時内部モード: **通常A / 通常B / 天国準備 / 天国A / 天国B**。
- ボーナス間天井:
  - 通常A/B: **999G**
  - 天国準備: **1069G**
  - 天国A/B: **96G**
- 天井はボーナス間で、途中にATを挟んでも進行する。
- 1000G超のボーナスは次回天国確定とされる。
- CZ「仁王門」はATへの自力高確率ゾーン。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数RESET / 内部モード再抽選 / 内部状態再抽選**。
- 液晶表示G数は0G、開始ステージは轟ステージ。
- 設定変更後は通常時の通常マップとは別の **リセット専用マップ** が使われる解析を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 設定変更なしの据え置きでは、公開比較表上 **天井ゲーム数・内部モード・内部状態を引き継ぐ**。
- 液晶上のゲーム数は0G表示へ戻るため、表示だけでは内部進捗を直接読めない。
- status: `CARRYOVER_CONFIRMED`。

### powerCycleBehavior

- 一撃の本機専用比較表で、設定変更なしの **電源OFF→ON** は **天井ゲーム数・内部モード・内部状態を引き継ぐ**ことを直接確認。
- 液晶ステージは轟ステージ、表示G数は0Gからだが内部は継続。
- status: `CARRYOVER_CONFIRMED_POWER_CYCLE`。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **CARRYOVER_CONFIRMED**。
- 電源OFF→ONのみ: **CARRYOVER_CONFIRMED**。
- 液晶表示G数は朝一0Gへ戻るため、外部表示と内部天井進捗を分離する。

### ceilingAfterReset

- 設定変更専用の一律短縮天井は確認できない。
- リセット後も選ばれた内部モードに応じ、通常A/B 999G、天国準備1069G、天国A/B 96G。
- リセット専用マップにより通常A/B系の偶数百Gゾーンが強化されるが、これは「固定短縮天井」とは別物。
- status: `NO_FIXED_RESET_CEILING_SHORTENING_CONFIRMED`。

### modeAfterReset

- **RESET_AND_REROLL_CONFIRMED**。
- 設定変更時のモード再抽選は確認できたが、今回の再探索では設定変更時だけの通常A/B/天国準備/天国A/Bの確定振り分け表を高信頼固定できず `UNVERIFIED_AFTER_RESEARCH`。
- リセット後は専用マップを使用。

### stateAfterReset

- 一撃の本機専用比較表で設定変更時は **状態再抽選**、電源OFF→ONでは **状態引継ぎ**。
- 設定変更時の状態別初期振り分け数値は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- リセット専用マップを使用し、解析資料では **101〜900Gの偶数百G帯前半/後半がマップレベル5**。
- マップレベル5の1Gあたりボーナス当選率は、解析表でノーマル状態 **1/64.00** / プラス状態 **1/50.03**。
- 2014年当時のショールーム設定6リセット実戦では、朝一数G〜20G程度の雫ステージ移行、20G前後/65G前後から前兆へ入るパターンが観測されたが、これは実戦値であり解析確率として扱わない。

### resetPenalties

- 設定変更で前日の天井進捗・モード・状態を消去。
- 独立したリセット冷遇抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一の液晶は設定変更・電源OFF→ONとも轟ステージ、表示G数0Gのため、それ単独では変更判別不可。
- リセット専用マップにより、当日200G/400G等のゾーンでレア役なしに雫ステージへ移行するとリセット期待度上昇、逆に前日のG数を加味したゾーン外挙動は据え置き推測材料になると複数解析資料が整理。
- 朝一96G以内の前兆はリセット示唆材料だが、当時実戦で前兆なし例も多く、確定判別ではない。
- `ガックン / リール初動` は「サラ番 / サラリーマン番長 / 押忍番長 / 設定変更 / 据え置き / 朝一 / リール」等へ検索語を変えて再探索したが、本機固有の確実な契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- リセット専用マップ:
  - 101〜900Gの偶数百G帯 **01〜16G: マップレベル5**
  - 101〜900Gの偶数百G帯 **17〜32G: マップレベル5**
  - 963G: マップレベル6（天井）
- マップレベル5の1G当選率:
  - ノーマル状態: **1/64.00**
  - プラス状態: **1/50.03**
- モード別天井: 通常A/B 999G / 天国準備1069G / 天国A/B 96G。

### publicMorningNumbers

- リセット専用マップの上記マップレベル5数値を、朝一客行動に影響する公開数値として保持。
- ショールーム設定6リセット実戦の前兆/ステージ時系列はサンプル実戦値のため、確率化せず参考扱い。

## resetBehavior 再探索メモ

- 表記揺れ: `押忍！サラリーマン番長 / 押忍!サラリーマン番長 / サラリーマン番長 / サラ番 / サラ番3 / 番長3`。
- 型式: `押忍！サラリーマン番長 俺に日本は狭すぎるA9 / 4S0483`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード / 状態 / リセットマップ / ガックン / リール`。
- HAZUSE、一撃、2014年当時攻略、後年解析整理、業界記事を横断。
- 2020年「押忍！サラリーマン番長2」、2022年以降のスマスロ番長系を別機種として除外。

## conflicts

- `CONFLICT_PAYOUT_RATE_SECONDARY_SERIES`:
  - HAZUSE: **97.50 / 99.40 / 101.30 / 104.40 / 108.30 / 114.50%**。
  - 期待値見える化: **97.0 / 98.9 / 100.5 / 104.4 / 108.3 / 114.5%**。
  - ちょんぼりすた: **97.5 / 99.4 / 101 / 104 / 108 / 115%**（丸め表記）。
- 平均せず主系列と競合系列を分離保持。

## missingFields

- 設定変更時のモード5種の専用初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の内部状態初期振り分け数値: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン/リール初動契約: `UNVERIFIED_AFTER_RESEARCH`。

## sources

取得日: **2026-09-07**

1. HAZUSE — 押忍！サラリーマン番長
   - https://hazuse.com/machine/pachislot/4S0483/
   - 導入日 / メーカー / 型式 / 検定番号 / 設定別初当たり / 50枚ベース / 機械割 / ボーナス・AT基本性能 / 設定変更概要
   - reliability: ANALYSIS_HIGH
2. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/osu_sbancho/3/
   - モード別天井 / 設定変更時RESET・再抽選 / 電源OFF→ON時の天井・モード・状態引継ぎ / 朝一表示
   - reliability: ANALYSIS_HIGH
3. 一撃 — リセット時の挙動（実戦データ）
   - https://1geki.jp/slot/osu_sbancho/62/
   - 2014年ショールーム設定6リセット実戦の朝一前兆・雫ステージ挙動
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY_PRACTICE
4. すろぱちくえすと — ゾーン別マップレベル振り分け
   - https://www.slopachi-quest.com/article/bantyo3-map-level/
   - リセット専用マップ / 偶数百G帯マップレベル5 / マップレベル別1G当選率
   - reliability: ANALYSIS_SINGLE_CONTEMPORARY
5. ちょんぼりすた — サラ番 全解析まとめ
   - https://chonborista.com/slot/daito-slot/23024/
   - 性能コア照合 / モード別天井 / 設定変更・電源OFF ON比較 / リセット判別整理
   - reliability: ANALYSIS_HIGH_RETROSPECTIVE
6. 期待値見える化 — サラ番 天井・ゾーン・モード
   - https://slotjin.com/zone/bancho3/
   - 導入日 / 純増 / 約32Gベース / 機械割競合系列 / モード別天井
   - reliability: ANALYSIS_SINGLE
7. ニッカンアミューズメント（娯楽産業）— 大都技研「押忍！サラリーマン番長」発表
   - https://www.nikkansports.com/amusement/pachinko/news/f-pp-tp0-20140725-1340293.html
   - 2014-07-25 / 大都技研 / 疑似ボーナス+AT / 純増2.8枚/G / 頂RUSH 50G+α
   - reliability: INDUSTRY
8. HAZUSE — 導入開始・型式情報
   - https://hazuse.com/machine/pachislot/4S0483/
   - 2014-09-08 / 押忍！サラリーマン番長 俺に日本は狭すぎるA9 / 4S0483
   - reliability: ANALYSIS_HIGH
