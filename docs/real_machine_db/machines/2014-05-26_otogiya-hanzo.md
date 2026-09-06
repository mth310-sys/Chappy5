# パチスロ御伽屋HANZO

machineName: パチスロ御伽屋HANZO
formalModelName: 御伽屋HANZO ZZ
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: タイヨーエレック
releaseDate: 2014-05-26
releaseDatePrecision: exact_nationwide_start
generation: 5号機
systemType: ART / 擬似ボーナス / CZ
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- K-Naviの2014年5月全国一斉導入カレンダーで **2014-05-26** のパチスロ群に「パチスロ御伽屋HANZO / タイヨーエレック」を確認。
- 2014-05-12のグリーンべると記事は、タイヨーエレックの新機種として発表し、最速納品を5月25日からと報道。全国導入の時系列キーはK-Naviの2014-05-26を採用。
- 流通系中古実機資料で型式名 **御伽屋HANZO ZZ** を確認。ただし公的検定番号は、御伽屋HANZO / 御伽屋HANZO ZZ / タイヨーエレック / Sammy系表記 / 検定通過を組み替えて再探索しても今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.2% |
| 3 | 100.5% |
| 4 | 102.9% |
| 5 | 106.0% |
| 6 | 111.2% |

- 2014-05-26当日解析まとめ、2-9伝説の後年整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「月闘之刻」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/332.9 |
| 2 | 1/304.4 |
| 3 | 1/278.7 |
| 4 | 1/251.4 |
| 5 | 1/225.8 |
| 6 | 1/188.4 |

- 2014-05-26当日解析まとめと2-9伝説で一致。
- 一部別資料に設定1 **1/332.2** 表記あり。丸め差では説明しにくいため、設定1は軽微な資料差として safeguards に保持し、本表は複数表で一致する1/332.9を採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT

### ボーナス合算

| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/722.0 |
| 2 | 1/731.4 |
| 3 | 1/702.7 |
| 4 | 1/617.8 |
| 5 | 1/594.0 |
| 6 | 1/479.3 |

- 2014-05-26当日解析まとめの値を採用。
- 2-9伝説後年整理のみ設定1が **1/772.0** と記載し競合。設定2〜6は一致。平均化しない。
- confidence: CONFLICT_SETTING1_722_0_VS_772_0

### ボーナス+ART初当たり合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/227.7 |
| 2 | 1/215.9 |
| 3 | 1/199.6 |
| 4 | 1/178.7 |
| 5 | 1/163.6 |
| 6 | 1/135.2 |

- P-WORLDは設定2のみ **1/214.9** と記載。他の設定は当日解析まとめと一致。
- 設定2は **CONFLICT 1/215.9 vs 1/214.9** として保持。

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- パチマガスロマガの現存「小役確率」ページは1000円あたりのゲーム数を **現在調査中** と明記。
- 「御伽屋HANZO / 御伽屋ハンゾー / 御伽屋HANZO ZZ / タイヨーエレック」に「50枚 / 1000円 / ベース / コイン持ち / 千円G」を組み合わせ、当時解析・P-WORLD・K-Navi・古いDB・回顧資料を横断したが、比較可能な直接値を今回固定できず。

## netIncrease

- ART「月闘之刻」および擬似ボーナス: **純増約2.0枚/G**。
- グリーンべると、パチマガスロマガ、P-WORLD、当時解析で整合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「月闘之刻」: **初期50G + 上乗せバトル8G = 58G+α**。
- BIG BONUS: 押し順ベル15回で終了、**約100枚前後**。
- 御伽屋BONUS: 平均18G程度、**約30〜31枚**。
- グリーンべるとはBIGを押し順ベル15回、御伽屋BONUSを平均18Gと報道。当日解析・流通資料ではBIG約100枚、御伽屋BONUS約30〜31枚で整合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は前兆「大釈迦潜入モード」と自力CZ「フジヤマライジング」から擬似ボーナス/ARTを目指す。
- CZ「フジヤマライジング」は10G / 20G / 当選まで継続の構成で、BIG+ART当選期待度は概ね40%以上。
- 3桁ゾロ目G（111/222/333/...）ではCZ・ART・REG・BIGの特殊抽選が存在。
- 500G以上ハマった時点でモードアップ確定とする解析資料が存在するが、通常モード全移行表は実機完全再現用詳細のため収集対象外。

## ceiling

- **ボーナス/ART間999G + 最大41G前兆**。
- 天井到達恩恵: **BIG 2〜4セット + ART確定**。
- 2014-05-26当日解析、2-9伝説、スロパチクエストで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更で天井G数リセット**を2-9伝説の機種別解析、および天井一覧の「宵×＝設定変更で天井G数リセット」定義とHANZO掲載で確認。
- ボーナス/ART解除モード・CZ抽選モードそのものの設定変更時再抽選契約は、パチマガスロマガに「朝イチ・設定変更」項目の存在までは確認できるが、現存検索結果から本文を安全に復元できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_DIRECT_FOR_CEILING_RESET

### carryOverBehavior

- 前日天井進捗について、設定変更時に消えることは直接確認。
- **純据え置き時に天井Gが保持されることを本機固有の直接比較表で固定できず UNVERIFIED_AFTER_RESEARCH**。
- 一般的な「宵越し」慣行から自動補完しない。
- モード/状態の据え置き保持も **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** の天井G、解除モード、CZモード、内部状態の扱いは **UNVERIFIED_AFTER_RESEARCH**。
- 「電源OFF ON / 電断 / 再投入 / 据え置き / 朝一」を組み替えて再探索したが本機固有の直接契約を今回固定できず。

### gameCounterReset

- 設定変更: **天井G数リセット CONFIRMED**。
- 据え置き: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常天井999G+前兆へ戻ることは設定変更による天井Gクリアと整合。
- 設定変更専用の短縮天井G数は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 500G到達時の通常モードアップ仕様は通常時のハマリ進行に伴う挙動であり、リセット専用短縮天井として扱わない。

### modeAfterReset

- 本機にはボーナス/ART解除モード、CZ抽選モードが存在。
- 設定変更時のモード振り分け・専用朝一モード・数値は **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常時500G以上ハマリ時のモードアップを設定変更恩恵へ転記しない。

### stateAfterReset

- 内部状態の設定変更時再抽選/据え置き/電断契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更専用の短縮天井、朝一高確率、CZ優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 前日999G天井への進捗を消すため、深い前日ハマリ台の宵越し狙いを無効化する効果は確認できる。

### resetPenalties

- 前日天井進捗消去。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のリールガックン、初期出目、液晶ステージ等による変更判別契約は、表記揺れ・型式名・タイヨーエレック・朝一・据え置き・ガックンを組み替えて再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- settingChangeCeilingCounter: **RESET**。
- resetSpecificShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**。
- resetSpecificCZRate: **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 公開朝一専用確率/モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「パチスロ御伽屋HANZO / 御伽屋HANZO / 御伽屋ハンゾー / 御伽屋HANZO ZZ / タイヨーエレック」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / 天井 / 天井短縮 / ボーナスART解除モード / CZモード / ガックン」を組み合わせ、パチマガスロマガ、K-Navi、P-WORLD、グリーンべると、2014年当日解析、2-9伝説、スロパチクエスト、流通系型式資料、回顧資料を横断。設定変更で天井G数リセットは複数系統で固定できた。パチマガスロマガには「朝イチ・設定変更」項目が現存インデックス上に残るが本文を検索結果から安全に復元できず、モード/状態・純電断・ガックンは推測しない。

## conflicts / safeguards

- ART初当たり設定1: **1/332.9**（当日解析/2-9伝説） vs **1/332.2**（スロパチクエスト）。本表は複数一致の1/332.9を採用し競合注記を保持。
- ボーナス合算設定1: **1/722.0**（2014-05-26当日解析） vs **1/772.0**（2-9伝説後年整理）。CONFLICT。設定2〜6は一致。
- ボーナス+ART合算設定2: **1/215.9**（当日解析） vs **1/214.9**（P-WORLD/流通資料）。CONFLICT。
- P-WORLD本文でいう2012年「CR御伽屋HANZO」はパチンコ前作。パチスロ本機の性能値へ混入しない。
- Sammy表記の中古流通資料は販売系統表記を含むため、manufacturerは当時業界記事・攻略資料に従い **タイヨーエレック** とする。

## missingFields

- inspectionNumber
- baseGamesPer50
- carryOverBehavior direct contract
- powerCycleBehavior
- reset mode/state distribution
- reset-specific morning numeric benefits
- machine-specific resetDetection / gakkun

## sources

取得日: **2026-09-07**

1. K-Navi — 2014年5月 新台導入カレンダー（2014-05-26全国一斉導入群）
   - https://p-kn.com/calendar/201405/
2. グリーンべると — 上乗せのアツさを体感させる仕掛けが満載！（2014-05-12、メーカー/ART純増/基本G数/擬似ボーナス/最速納品）
   - https://web-greenbelt.jp/00006230/
3. パチマガスロマガ — パチスロ御伽屋HANZO 機種トップ（2014年5月、ART/CZ概要・朝イチ設定変更項目存在）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/17/taiyoelec_slot_17.php
4. パチマガスロマガ — 小役確率（1000円あたりG数は「現在調査中」）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/17/c.php
5. パチマガスロマガ — フジヤマライジング（CZ突入率/解除期待度/継続仕様）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/17/01-1.php
6. スロ板-RUSH — 解析情報 御伽屋HANZO スペックまとめ（2014-05-26当日、設定別確率/機械割/天井/基本性能）
   - https://fiveslot777.com/archives/39029013.html
7. 2-9伝説まとめ — 御伽屋HANZO（設定別機械割/ART初当たり/天井/設定変更で天井G数リセット）
   - https://29den.com/otogiyahanzo/
8. 2-9伝説 — 天井狙い目一覧（宵×定義=設定変更で天井Gリセット、HANZO掲載）
   - https://2-9densetsu.com/blog-entry-311-html/
9. スロパチクエスト — パチスロ御伽屋HANZO 天井スペック解析攻略（2014-05-26、天井/初当たりレンジ/純増）
   - https://www.slopachi-quest.com/article/otogiya-hanzo/
10. スロパチクエスト — 御伽屋HANZO ゾーン解析（2014-06-22、500G以降のモードアップ）
   - https://www.slopachi-quest.com/article/hanzone/
11. P-WORLD — パチスロ御伽屋HANZO（ART基本仕様/初当たり合算）
   - https://www.p-world.co.jp/machine/database/7405
12. 中一商事 Yahoo!ショッピング — 中古実機情報（型式名 御伽屋HANZO ZZ / 基本獲得枚数補助）
   - https://store.shopping.yahoo.co.jp/nakaiticom/126.html
