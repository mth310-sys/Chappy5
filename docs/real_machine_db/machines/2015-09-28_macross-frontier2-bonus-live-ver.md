# パチスロ マクロスフロンティア2 Bonus Live ver.

machineName: パチスロ マクロスフロンティア2 Bonus Live ver.
manufacturer: SANKYO
releaseDate: 2015-09-28
releaseDatePrecision: exact_hall_start_day_multi_source_with_2015-10-05_secondary_conflict
releaseDateConflict: 2015-10-05_secondary_sources
releaseEventNotes: SANKYO公式は2015.09、業界記事は最速納品2015-09-27予定、K-Navi/パチセブンはホール導入開始2015-09-28。一方ちょんぼりすた/2015年新台まとめは2015-10-05導入とするため平均せずDATE_CONFLICTとして保持。
generation: 5号機
systemType: A+ART / 純ボーナス + ART + CZ
formalModelName: パチスロ マクロスフロンティア2 BL
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity

- SANKYO公式オンライン博物館の販売名（型式名）表記: **パチスロ マクロスフロンティア2 BL**。
- ブランド/メーカー: **SANKYO**。
- 公式導入年月: **2015.09**。
- K-Navi / パチセブン: **2015-09-28 ホール導入開始**。
- グリーンべると/P-WORLD業界ニュース: **最速納品2015-09-27予定**。
- ちょんぼりすた及び2015年新台まとめ: **2015-10-05導入**。
- 本DBのcanonical releaseDateは、公式月と最速納品予定日の翌日、かつK-Navi/パチセブンが一致する **2015-09-28**。2015-10-05は捨てず `DATE_CONFLICT_2015-09-28_VS_2015-10-05` として保持する。
- 「パチスロ マクロスフロンティア2」「マクロスフロンティア2BL」「Bonus Live Ver.」「パチスロ マクロスフロンティア2 BL」、SANKYO、検定、型式、5S系を組み替えて再探索したが、検定番号は安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL_FOR_MONTH_AND_FORMAL_MODEL / ANALYSIS_HIGH_MULTI_SOURCE_FOR_09_28 / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.5% |
| 3 | 100.5% |
| 4 | 103.7% |
| 5 | 107.8% |
| 6 | 112.1% |

- SANKYO公式スペック、K-Navi、パチマガスロマガ、期待値見える化で一致。
- confidence: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス合成 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/278 | 1/380 | 1/161 |
| 2 | 1/273 | 1/359 | 1/155 |
| 3 | 1/266 | 1/339 | 1/149 |
| 4 | 1/261 | 1/321 | 1/144 |
| 5 | 1/255 | 1/280 | 1/133 |
| 6 | 1/250 | 1/252 | 1/125 |

- SANKYO公式 / K-Navi / パチマガスロマガ / 期待値見える化で一致。
- confidence: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

- canonical: **約33G/50枚**。
- 期待値見える化の基本情報で明示。
- パチマガスロマガにも「50枚あたりのゲーム数」の解析項目が存在することを確認したが、検索取得本文では数値行を安全に抽出できなかったため、33Gを二重照合したとは扱わない。
- confidence: ANALYSIS_SINGLE_WITH_SECONDARY_STRUCTURE_CONFIRMATION

## netIncrease

- ART「バルキリータイム」: **約1.5枚/G**。
- SANKYO公式、P-WORLD、パチマガスロマガ、複数解析資料で一致。
- 別資料の「ボーナス込み約2.0枚/G」は別定義なのでART単体純増へ混ぜない。
- confidence: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout

- 究極クランボーナス: **204枚**。
- アルトボーナス: **204枚**。
- シェリルボーナス: **120枚**。
- ランカボーナス: **120枚**。
- ART「バルキリータイム」: **1セット40G以上**、上乗せ型。
- SANKYO公式 / K-Navi / P-WORLD / パチマガスロマガで整合。
- confidence: OFFICIAL_PLUS_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常天井: **ボーナス間999G**。
- 到達恩恵: ART「バルキリータイム」確定。
- ARTを途中で挟んでもボーナス間天井はリセットされない。
- 設定1の天井到達率約2.7%とする解析資料あり。これは通常性能補助値として保持し、reset専用値ではない。
- ARTテーブルはA / B / C / 天国。規定G（主にゾロ目）でART抽選。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_PARTIAL_POWER_CYCLE_AND_RELEASE_DATE_CONFLICT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior

- **天井ゲーム数はリセット**。
- **ARTテーブルは再抽選**。
- **内部状態（低確 / 高確 / 超高確）を再抽選**。
- パチマガスロマガでは、**設定変更後は通常RT状態Aスタート**と明記。
- 朝一開始ステージは **サンフランシスコ** とする複数解析資料あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- ARTテーブル: **据え置きで引き継ぐ**。
- 液晶表示ゲーム数は朝一0G表示になるため、表示だけでは内部経過Gを示さない。
- 天井の据え置き時引継ぎについて、今回確認した資料は「据え置き/電源ON-OFF」欄で天井を調査中とするものがあるため、テーブル引継ぎから天井まで自動推定しない。
- confidence: ANALYSIS_HIGH_FOR_TABLE / UNVERIFIED_FOR_CEILING_CARRYOVER

### powerCycleBehavior

- **設定変更を伴わない電源OFF→ONではARTテーブルを引き継ぐ**とする解析資料を確認。
- **液晶表示ゲーム数は0Gへ戻るが、設定変更しない限り内部ゲーム数は引き継ぐ**とする解析資料あり。
- 一方、同資料表の「天井」は電源ON/OFF時も調査中表記であり、内部G引継ぎをそのまま天井契約の完全確定には格上げしない。
- confidence: ANALYSIS_HIGH_FOR_INTERNAL_GAME_DISPLAY_CONTRACT_AND_TABLE / PARTIAL_FOR_CEILING

### gameCounterReset

- 設定変更: **RESET**（天井までのゲーム数リセットを複数解析で確認）。
- 据え置き: **UNVERIFIED_FOR_CEILING_COUNTER_AFTER_RESEARCH**。ARTテーブル引継ぎは確認済みだが、天井カウンタの直接表現を分離する。
- 純電源OFF→ON: **内部ゲーム数CARRY_OVER / 液晶表示0G**を確認。ただし天井カウンタそのものについては資料側が調査中表記を残すため `PARTIAL_CONTRACT`。

### ceilingAfterReset

- 通常天井: **ボーナス間999G**。
- 設定変更で天井までのゲーム数: **リセット**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 朝一専用の別天井数値は固定できなかった。

### modeAfterReset

設定変更時ARTテーブル振り分け:

| 設定 | A | B | C | 天国 |
|---:|---:|---:|---:|---:|
| 1〜4 | 49.50% | 49.50% | 0% | 1.00% |
| 5 | 49.25% | 49.25% | 0% | 1.50% |
| 6 | 49.00% | 49.00% | 0% | 2.00% |

- ちょんぼりすた、すろぱちくえすと、期待値見える化で同系列を確認。
- 設定変更でテーブル再抽選、据え置き/純電断では引継ぎ。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

設定変更時の内部状態:

| 設定 | 低確 | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1 | 60% | 30% | 10% |
| 2 | 56% | 32% | 12% |
| 3 | 52% | 34% | 14% |
| 4 | 48% | 36% | 16% |
| 5 | 44% | 38% | 18% |
| 6 | 40% | 40% | 20% |

- ちょんぼりすた / すろぱちくえすとで一致。
- パチマガスロマガでは設定変更後のRT状態Aスタートも確認。
- 据え置き/純電断時の低確・高確・超高確そのものの完全な営業日跨ぎ契約は、ARTテーブル契約と混同せず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING_CHANGE_STATE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時は内部状態を再抽選し、高確以上スタート率は設定1 **40%**、設定2 **44%**、設定3 **48%**、設定4 **52%**、設定5 **56%**、設定6 **60%**。
- 設定変更時の天国テーブル振り分けは設定1〜4 **1.0%**、設定5 **1.5%**、設定6 **2.0%**。
- 「短縮天井」の恩恵は確認できない。

### resetPenalties

- 設定変更で既存ARTテーブル及び天井進捗を保持できないこと自体は、前日状況次第で客側の宵越し狙いに不利となる。
- 設定変更時のみ課される追加ペナルティ数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 電源ON/OFFでも液晶表示ゲーム数が0Gになるため、**液晶0G表示だけでは設定変更判別不可**。
- ガセ前兆は内部ゲーム数ではなく当日の液晶表示ゲーム数を基準に発生するため、**前兆の有無だけではリセット判別不可**。
- 解析資料では、**ゾロ目以外のゲーム数から前兆→ART当選なら据え置き濃厚**とする判別法が提示されている。
- 本機固有のリールガックン発生率/確定契約は「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別」と表記を変えて再探索したが、直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時ARTテーブル: A/B/C/天国 =
  - 設定1〜4: **49.50 / 49.50 / 0 / 1.00%**
  - 設定5: **49.25 / 49.25 / 0 / 1.50%**
  - 設定6: **49.00 / 49.00 / 0 / 2.00%**
- 設定変更時内部状態（低確/高確/超高確）:
  - 設定1: **60 / 30 / 10%**
  - 設定2: **56 / 32 / 12%**
  - 設定3: **52 / 34 / 14%**
  - 設定4: **48 / 36 / 16%**
  - 設定5: **44 / 38 / 18%**
  - 設定6: **40 / 40 / 20%**
- 短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts

1. `DATE_CONFLICT_2015-09-28_VS_2015-10-05`
   - SANKYO公式: 2015.09。
   - グリーンべると/P-WORLD業界ニュース: 最速納品2015-09-27予定。
   - K-Navi / パチセブン: ホール導入開始2015-09-28。
   - ちょんぼりすた / 2015年新台まとめ: 2015-10-05導入。
   - 日付を平均・中間化せず双方保持。canonicalは複数具体日一致と業界納品工程に整合する2015-09-28。
2. `DEFINITION_DIFFERENCE_ART_NET_1_5_VS_BONUS_INCLUDED_2_0`
   - ART単体純増 約1.5枚/G。
   - ボーナス込み約2.0枚/G表記は別定義。
3. `POWER_CYCLE_INTERNAL_GAME_CARRYOVER_VS_CEILING_TABLE_RESEARCH_STATUS`
   - 電源OFF→ONで内部ゲーム数引継ぎの記述は確認。
   - 同じ解析系統の天井欄は調査中表記を残すため、天井カウンタまで無条件で確定しない。

## missingFields

- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時の天井カウンタ完全契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電断時の天井カウンタ完全契約: `PARTIAL_CONTRACT_AFTER_RESEARCH`。
- 据え置き/純電断時の低確・高確・超高確状態の完全な営業日跨ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有リールガックン確定契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

## boundaryAudit

- 2015-09-28群の処理済み:
  1. パチスロ無双OROCHI — 山佐 — No.914。
  2. アスラズ ラース — エンターライズ — No.915。
  3. パチスロ マクロスフロンティア2 Bonus Live ver. — SANKYO — No.916相当。
- `2015-09-28 / 2015年9月28日 / 導入日 / 新台 / パチスロ / メーカー` と既処理3機種を除外した検索を複数実施したが、今回この日付で追加未登録5号機を具体日固定できなかった。
- よって **2015-09-28_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- ただし本機には2015-10-05導入とする資料もあるため、10-05群再監査時は重複追加せず、本レコードのDATE_CONFLICTとして扱う。

## sources — retrieved 2026-09-08

### official / industry
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/619/
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/7774/greenbelt

### identity / performanceCore
- K-Navi: https://p-kn.com/slot/2321/
- パチセブン: https://pachiseven.jp/machines/4580/cutout/3
- P-WORLD: https://www.p-world.co.jp/machine/database/7807
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/a.php
- パチマガスロマガ 確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/h.php
- パチマガスロマガ 小役/RT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/c.php
- 期待値見える化: https://slotjin.com/zone/macross2-blv/

### resetBehavior
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/10836/
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/macross2-blv/
- 期待値見える化: https://slotjin.com/zone/macross2-blv/
- パチマガスロマガ 小役/RT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/37/c.php

### date conflict / boundary audit
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/10836/
- 2015年導入のスロット新台情報まとめ: https://slotnews777.blog.fc2.com/blog-entry-2348.html

## sourceQuality / researchNotes

- 取得日: **2026-09-08**。
- 性能コアはメーカー公式と複数当時解析の一致を優先。
- resetBehaviorは設定変更 / 据え置き / 電源OFF→ONを分離し、テーブル引継ぎを天井・内部状態へ無条件転記しない。
- 旧2014年「パチスロ マクロスフロンティア2」の型式・天井・resetBehaviorは流用していない。
- 5号機クロニクルには本機と一致しないBIG/REG/AT数値系列が検索結果に出るため、別機種・誤集約リスクとしてcanonical採用しない。

## confidence

- identity/formalModel: OFFICIAL
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- releaseMonth: OFFICIAL
- exactReleaseDate: CONFLICT_09_28_MULTI_SOURCE_VS_10_05_SECONDARY
- performanceCore: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_SINGLE_WITH_STRUCTURE_CONFIRMATION
- normalCeiling: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- modeAfterReset: ANALYSIS_HIGH_MULTI_SOURCE
- stateAfterReset: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING_CHANGE
- carryOverBehavior: ANALYSIS_HIGH_FOR_ART_TABLE / UNVERIFIED_FOR_CEILING
- purePowerCycleBehavior: ANALYSIS_HIGH_FOR_INTERNAL_GAME_AND_TABLE / PARTIAL_FOR_CEILING
- advantageousSectionReset: NOT_APPLICABLE
- resetDetection: ANALYSIS_HIGH_FOR_DISPLAY/PREMONITION / UNVERIFIED_FOR_GAKKUN
