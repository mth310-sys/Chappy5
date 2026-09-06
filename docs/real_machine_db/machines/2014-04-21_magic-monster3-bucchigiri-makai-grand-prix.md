# マジックモンスター3 ぶっちぎり!魔界グランプリ

machineName: マジックモンスター3 ぶっちぎり!魔界グランプリ
formalModelName: マジックモンスター3J2
manufacturer: オリンピア
releaseDate: 2014-04-21
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: AT / CZ / セットストック+継続率
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity

- K-Navi全国一斉導入カレンダーで **2014-04-21**、メーカー **オリンピア** を確認。
- グリーンべると2014-03-03当時記事ではオリンピア製パチスロ新機種として発表され、**2014-04-20納品開始予定**。
- 実機流通・後年機種資料で型式名 **マジックモンスター3J2** を確認。
- confidence: INDUSTRY_EXACT_DATE + RETAIL_HARDWARE_REFERENCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.6% |
| 2 | 97.9% |
| 3 | 100.3% |
| 4 | 104.2% |
| 5 | 108.5% |
| 6 | 113.4% |

- 2014-04-21当時解析記事の設定別値を主値として保持。
- パチマガスロマガ掲載のAT初当たりレンジと整合。
- confidence: ANALYSIS_PERIOD + ANALYSIS_HIGH

## initialHitBySetting

### AT「GP RUSH」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/128.9 |
| 2 | 1/123.4 |
| 3 | 1/117.1 |
| 4 | 1/108.5 |
| 5 | 1/101.2 |
| 6 | 1/93.1 |

- 2014-04-21当時解析記事とパチマガスロマガの公開レンジで照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「マジックモンスター3 / マジモン3 / マジックモンスター3J2 / オリンピア」に「50枚 / 1000円 / ベース / コイン持ち / 千円G」を組み合わせ、P-WORLD、旧パチマガスロマガ、K-Navi、当時攻略記事、実機流通資料を横断したが、比較可能な直接値を安全に固定できなかった。

## netIncrease

- AT「GP RUSH」: **約2.6枚/G**。
- グリーンべると当時業界記事、P-WORLD、パチマガスロマガ、K-Naviで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「GP RUSH」: **1セット28G（20G + 継続レース8G）**。
- セットストック + 継続率管理。
- ATループ率は **25%〜95%**。
- 固定獲得枚数ではないため、物差し値は1セットG数と純増を保持。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はレア小役/化け返しによるAT直撃・CZ抽選が中心。
- CZは主に **ドラキュLIVE** と **AREA666**。
- パチマガスロマガは通常時について **状態の高低は存在しない**、ゲーム数解除は天井を除き存在しないと整理。
- 実機完全再現用の小役別抽選率・CZ内部詳細は収集対象外。

## ceiling

- AT間 **666G** で「禁断の! AREA666」へ突入し、**75%以上のAT継続率が確定**とする当時解析あり。
- 別に **AT単発7回連続後、次回ATが75%以上**となる救済天井解析あり。
- P-WORLD/パチマガスロマガも666G天井を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_DIRECT_COUNTER_CONTRACT_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **設定変更時はAT間666G天井カウンタをリセット**。
- 朝一ステージはランダム選択。
- 通常時に「状態の高低は存在しない」とする解析のため、一般的な高確/低確のリセット再抽選項目は **NOT_APPLICABLE_TO_PUBLISHED_NORMAL_STATE_MODEL**。
- 単発連続回数救済天井の設定変更時処理は直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_PERIOD_DIRECT for 666G counter/stage

### carryOverBehavior

- 純据え置き時のAT間666G天井カウンタは、設定変更と電源ON/OFFのみの比較資料から **KEEP_INFERRED_FROM_DIRECT_POWER_CYCLE_CONTRACT_BUT_NO_SEPARATE_STAY_TEXT** とする。
- 単発連続回数救済天井の据え置き保持は **UNVERIFIED_AFTER_RESEARCH**。
- 推測拡張を避け、据え置き専用の直接文言は未取得として残す。

### powerCycleBehavior

- **設定変更なしの電源OFF→ONのみならAT間666G天井は引き継ぐ**。
- 朝一ステージはランダム選択。
- confidence: ANALYSIS_PERIOD_DIRECT

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**（AT間666G天井）。
- 電源OFF→ONのみ: **KEEP_CONFIRMED**（AT間666G天井）。
- 据え置き: 上記比較から保持が自然だが、別文言での直接確認がないため carryOverBehavior の留保を維持。
- 単発連続回数カウンタ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常AT間666G天井をリセット後専用短縮値とは扱わない。

### modeAfterReset

- 通常A/B等のゲーム数モードは確認されず、パチマガスロマガはゲーム数解除なし（天井除く）と整理。
- 朝一専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 公開解析上、通常時の高低状態は **NOT_APPLICABLE_TO_PUBLISHED_NORMAL_STATE_MODEL**。
- CZ/内部特殊状態の設定変更時保持・再抽選は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の天井短縮、朝一CZ優遇、専用モード優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 公開された本機固有の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 朝一ステージは設定変更時も電源ON/OFFのみでもランダム選択のため、**ステージ単独では変更判別不可**。
- 本機固有ガックン・初期出目等の確定/高信頼判別要素は検索語を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更専用のモード振り分け、朝一当選率、リセット恩恵発生率など比較可能な公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「マジックモンスター3 / マジモン3 / マジックモンスター3J2 / オリンピア」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 666G / 単発回数 / ステージ / モード / 高確 / ガックン」を組み合わせ、グリーンべると、K-Navi、P-WORLD、旧パチマガスロマガ、2014年当時攻略記事、後年実機DBを横断。AT間666G天井の設定変更リセット、電源ON/OFFのみ時の引継ぎ、両ケースの朝一ステージランダムまでは直接固定できた。単発連続回数救済天井のリセット契約、ガックン、据え置き専用明記、公開朝一数値は十分な再探索後も直接固定できなかったため推測しない。

## conflicts / safeguards

- 通常時AT間666G天井と、AT単発連続回数による救済天井は別カウンタとして扱う。
- 666Gは通常仕様の最大G天井であり、リセット後専用短縮天井ではない。
- 「状態の高低なし」は公開された通常時ゲーム性についての記述であり、未公開内部フラグまで存在しないと拡張しない。
- 後継/別シリーズのマジックモンスター機のリセット情報を混入しない。

## sources

取得日: **2026-09-06**

1. K-Navi「パチンコ・パチスロ新台導入カレンダー 2014年4月」
   - https://p-kn.com/calendar/201404/
   - 2014-04-21全国一斉導入開始日、オリンピア。
   - reliability: INDUSTRY_DATABASE
2. グリーンべると「人気格闘ゲームとのタイアップ機などPS同時発表」2014-03-03
   - https://web-greenbelt.jp/00000150/
   - オリンピア製、AT特化、1セット20G+8G、純増約2.6枚、設定1初当たり1/128.9、4/20納品開始予定。
   - reliability: INDUSTRY_PERIOD
3. パチマガスロマガ「マジックモンスター3 ぶっちぎり!魔界グランプリ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/114/a.php
   - 2014年4月、AT、純増2.6枚/G、AT初当たり1/128.9〜1/93.1、1セット28G。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ「AT突入フロー」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/114/l.php
   - 通常時に状態の高低なし、天井除きゲーム数解除なし、AT間666G天井。
   - reliability: ANALYSIS_HIGH
5. P-WORLD「マジックモンスター3 ぶっちぎり!魔界グランプリ」
   - https://www.p-world.co.jp/machine/database/7337
   - オリンピア、5号機AT、純増約2.6枚/G、GP RUSH 28G、666G天井。
   - reliability: INDUSTRY_DATABASE
6. すろぱちくえすと「マジックモンスター3 天井狙い目解析 666G到達時は優遇・特典あり!?」2014-04-21
   - https://www.slopachi-quest.com/article/magic-monster-tenzyou/
   - AT間666G、75%以上AT、設定変更で天井リセット、電源ON/OFFのみで天井引継ぎ、両ケース朝一ステージランダム、設定別AT初当たり/機械割。
   - reliability: ANALYSIS_PERIOD_DIRECT
7. すろぱちくえすと「マジックモンスター3 激アツ狙い目!単発連続回数による救済天井解析」2014-04-24
   - https://www.slopachi-quest.com/article/magimon3-kyuusai/
   - AT単発7回連続後の次回AT75%以上、666G天井との別カウンタ。
   - reliability: ANALYSIS_PERIOD
8. パチマ「マジックモンスター3 ぶっちぎり!魔界グランプリ」
   - https://www.pachima.com/c/slot/s_22olympiak/S00256
   - 型式名マジックモンスター3J2、2014年4月、5号機AT、純増2.6枚/G、666G天井。
   - reliability: HARDWARE_RETAIL_REFERENCE

## missingFields

- 50枚あたりゲーム数 / ベース
- 単発連続回数救済天井カウンタの設定変更/据え置き/電源OFF→ON契約
- 据え置き時AT間666G天井の専用直接文言
- 本機固有ガックン等の設定変更判別
- 設定変更専用公開朝一数値

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
