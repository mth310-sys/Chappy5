# パチスロ クイーンズブレイド2 玉座を継ぐ者

machineName: パチスロ クイーンズブレイド2 玉座を継ぐ者
manufacturer: JPS
releaseDate: 2013-08-19
releaseDatePrecision: exact_day_multi_source
generation: 5号機
systemType: AT
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED__CARRYOVER_LABEL_PARTIAL

## identity

- ホール導入開始: **2013-08-19**。K-Navi、アタリ7、後年機種DBで一致。
- manufacturer: **JPS（ジェイピーエス）**。
- generation/system: **5号機 / AT専用機**。
- 型式名・検定番号は今回の確認可能資料で安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.8% |
| 2 | 98.2% |
| 3 | 98.7% |
| 4 | 101.3% |
| 5 | 104.1% |
| 6 | 108.2% |

- K-Navi、アタリ7、後年機種DBで同系列を確認。
- より精密な後年整理では 96.79 / 98.20 / 98.68 / 101.26 / 104.09 / 108.17%。丸め差として扱う。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/266 |
| 2 | 1/260 |
| 3 | 1/255 |
| 4 | 1/241 |
| 5 | 1/222 |
| 6 | 1/201 |

- K-Navi、アタリ7、後年機種DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約29G/50枚**。
- 後年機種DBで確認。今回、同値を独立した当時解析系で固定できなかったため `ANALYSIS_SECONDARY_SINGLE_NUMERIC`。

## netIncrease

- AT「アルドラクエスト」: **純増約+2.5枚/G**。
- 1セット **40G or 100G**。ゲーム数消化後は10Gの継続バトルへ移行。
- K-Navi、パチマガスロマガ、アタリ7で純増2.5枚/Gを照合。40G/100Gはパチマガスロマガで確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「アルドラクエスト」: **1セット40G or 100G / 約2.5枚/G**。
- AT専用機のため純ボーナス獲得枚数項目は **NOT_APPLICABLE**。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時モード別天井: **超天国32G / 天国A 128G / 天国B 384G / 通常A 640G / 通常B 960G / 通常C 1088G**。
- 最大天井: **AT間1088GでAT当選**。
- 通常時の内部状態は通常 / 高確 / 超高確の3状態。
- モード全移行表や詳細内部抽選は物差し目的外のため収集しない。設定変更時の公開分布のみresetBehaviorへ保存。
- confidence: ANALYSIS_HIGH + SECONDARY_CROSSCHECK

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__SETTING_CHANGE_CLEARS_GAME_AND_REROLLS_MODE_STATE_STAGE__POWER_CYCLE_FULL_CARRY_CONFIRMED__SETTING_CHANGE_MODE_NUMERIC_PUBLIC__PURE_CARRYOVER_LABEL_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更で **天井までのゲーム数をリセット**。
- **モード / 内部状態 / 液晶ステージを再抽選**。
- 液晶ステージは **市場 / エリナ宿舎 / トモエ宿舎**から抽選。
- 必勝本の本機専用「天井&設定変更」で直接確認。

### carryOverBehavior

- 「据え置き」単独ラベルで天井G / モード / 状態を規定した別資料は今回 **UNVERIFIED_AFTER_RESEARCH**。
- ただし営業終了時の電源OFF→翌ONという実運用に相当する単純電源サイクルでは、天井G / モード / 状態 / 液晶ステージすべて **引き継ぐ**ことが本機専用資料で明記される。
- 一般的5号機挙動から補間せず、確認できた電源サイクル契約と「据え置き」ラベルの資料有無を分離する。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ON**:
  - 天井までのゲーム数: **RETAIN_CONFIRMED**
  - モード: **RETAIN_CONFIRMED**
  - 状態: **RETAIN_CONFIRMED**
  - 液晶ステージ: **RETAIN_CONFIRMED**
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### gameCounterReset

- setting change: **RESET_CONFIRMED**。
- pure carry-over label: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **RETAIN_CONFIRMED**。

### ceilingAfterReset

- 設定変更後はモードを再抽選するため、選ばれたモードの天井を新たに適用。
- 公開モード天井: **超天国32G / 天国A128G / 天国B384G / 通常A640G / 通常B960G / 通常C1088G**。
- 設定変更専用の単一固定短縮天井ではない。

### modeAfterReset

設定変更時モード移行率:

| 設定 | 通常A | 通常C | 天国A | 天国B | 超天国 |
|---|---:|---:|---:|---:|---:|
| 1 | 57.73% | 6.25% | 10.00% | 25.52% | 0.50% |
| 2 | 59.92% | 6.25% | 10.00% | 23.57% | 0.26% |
| 3 | 62.00% | 6.25% | 10.00% | 21.62% | 0.13% |
| 4 | 64.02% | 6.25% | 10.00% | 19.66% | 0.06% |
| 5 | 65.97% | 6.25% | 10.00% | 17.71% | 0.06% |
| 6 | 67.93% | 6.25% | 10.00% | 15.76% | 0.06% |

- 設定変更表では通常Bへの直接移行掲載なし。
- confidence: ANALYSIS_HIGH_DIRECT_NUMERIC

### stateAfterReset

- 設定変更時: **状態を再抽選することはCONFIRMED**。
- 状態別の設定変更専用振り分け数値は今回の確認可能資料では **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **状態引き継ぎCONFIRMED**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時に天国A / 天国B / 超天国が公開確率で選択される。
- 天国A以上合計:
  - 設定1 **36.02%**
  - 設定2 **33.83%**
  - 設定3 **31.75%**
  - 設定4 **29.72%**
  - 設定5 **27.77%**
  - 設定6 **25.82%**
- ただし天国B天井は384Gのため、「全て128G以内」のような誤読はしない。
- 超天国なら32G、天国Aなら128G、天国Bなら384Gが各モード上限。

### resetPenalties

- 設定変更専用の独立した主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 高設定ほど設定変更時の天国B / 超天国比率が低いという公開分布自体は記録するが、これを単独で「ペナルティ」とは定義しない。

### resetDetection

- 設定変更で液晶ステージは市場 / エリナ宿舎 / トモエ宿舎から再抽選される一方、単純電源OFF→ONでは液晶ステージを引き継ぐ。
- よって前日最終ステージを正確に把握できる場合、朝一ステージ差は変更推測材料になり得る。
- 本機固有のガックン / 初期出目 / ランプ等の確定的変更判別は今回の再探索で **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- settingChangeModeDistribution:
  - setting1: **通常A57.73 / 通常C6.25 / 天国A10.00 / 天国B25.52 / 超天国0.50%**
  - setting2: **59.92 / 6.25 / 10.00 / 23.57 / 0.26%**
  - setting3: **62.00 / 6.25 / 10.00 / 21.62 / 0.13%**
  - setting4: **64.02 / 6.25 / 10.00 / 19.66 / 0.06%**
  - setting5: **65.97 / 6.25 / 10.00 / 17.71 / 0.06%**
  - setting6: **67.93 / 6.25 / 10.00 / 15.76 / 0.06%**
- modeCeilings: **超天国32 / 天国A128 / 天国B384 / 通常A640 / 通常B960 / 通常C1088G**。
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- ベース機の機械割はK-Navi・アタリ7で **96.8～108.2%系列**が一致。後年「バトルバージョン」等の別仕様数値を本機へ混入させない。
- 機械割の96.79等と96.8等は精密値と丸め値の関係でありCONFLICT扱いしない。
- 設定変更時に通常Bへ移行しない公開表と、通常時一般のモード集合に通常Bが存在することを混同しない。

## sources

取得日: **2026-09-06**

1. K-Navi「パチスロ クイーンズブレイド2 玉座を継ぐ者」
   - https://p-kn.com/slot/1893/
   - 導入2013-08-19、メーカーJPS、AT初当たり、機械割、純増2.5枚/G。
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ「パチスロ クイーンズブレイド2 玉座を継ぐ者」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/27/l.php
   - 通常/高確/超高確、AT「アルドラクエスト」1セット40G or 100G、純増2.5枚/G。
   - confidence: ANALYSIS_HIGH

3. パチ＆スロ必勝本「天井&設定変更」
   - https://p.hisshobon.jp/machine/2251/1/41318
   - 最大1088G、設定変更時のゲーム数リセット・モード/状態/液晶再抽選、設定別モード移行率、電源OFF→ON時のゲーム数/モード/状態/液晶引き継ぎ。
   - confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

4. アタリ7「パチスロ クイーンズブレイド2 玉座を継ぐ者」
   - https://www.atari7.com/slot/date1431056481.php
   - JPS、導入2013-08-19、設定別AT初当たり・機械割、純増2.5枚/G。
   - confidence: ANALYSIS_SECONDARY

5. みんスロ「クイーンズブレイド2 玉座を継ぐ者」
   - https://minslo.com/クイーンズブレイド2-玉座を継ぐ者/
   - 導入日、メーカー、AT純増、約29G/50枚、1088G天井・AT確定、設定別主要値。
   - confidence: SECONDARY

6. pacnk「設定判別ツール / 天井・ヤメ時」
   - https://pacnk.com/slot/tools/sh_queensblade2.html
   - 精密PAYOUT、モード別天井、設定変更でゲーム数リセット・モード/状態/液晶再抽選の後年整理。
   - confidence: SECONDARY_CROSSCHECK

7. パチスロ立ち回り講座 5号機天井DB
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - AT間1088G、AT確定、設定変更後天井Gクリアの独立照合。
   - confidence: LEGACY_DB_SECONDARY
