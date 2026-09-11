# 花娘

recordNo: 1300
machineName: 花娘
machineNameVariants: パチスロ花娘 / はなむすめ
manufacturer: ジェイピーエス（JIN系PB）
formalModel: Sオリスロ2AA
certificationNumber: 9S0186
releaseDate: 2019-08-19
generation: 6号機
systemType: AT / 疑似ボーナス連荘タイプ / PB

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.4% |
| 3 | 99.8% |
| 4 | 101.2% |
| 5 | 104.0% |
| 6 | 105.6% |

P-WORLD、すろぱちくえすと、ちょんぼりすた、同一型式業界発表で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE + INDUSTRY

## initialHitBySetting

| 設定 | ボーナス(AT)初当たり |
|---|---:|
| 1 | 1/413.4 |
| 2 | 1/408.1 |
| 3 | 1/396.8 |
| 4 | 1/382.4 |
| 5 | 1/275.3 |
| 6 | 1/269.3 |

P-WORLD、すろぱちくえすと、複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約53.0G/50枚。

すろぱちくえすと、ちょんぼりすた、同一型式解析で一致。

## netIncrease

- 約3.0枚/G。

業界発表・複数解析で一致。

## basicPayout

- BIG BONUS: AT70G、約210枚。
- REG BONUS: AT30G、約90枚。
- ボーナス後32Gが主要連荘ゾーン。上位モードは約80〜90%ループ級。

## modeSpecificMinimumData

- 最大天井: 1000G（通常0/通常A系資料の表記差あり。最深1000Gは一致）。
- 公開モード天井: 通常0 1000G / 通常1・2 500G級 / 通常A 78Gまで抽選後非当選で有利区間転落 / 通常B 78G / 天国A・B、ドキドキ、超ドキドキ、保証 32G。
- 全通常モード移行率は物差し用途外のため未収録。
- JIN系PBで、花娘専用のパネル、サウンド、設定示唆演出等を持つ。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_COMMON_FORMAL_MODEL_RESET_CORE_WITH_HANAMUSUME_SPECIFIC_GAPS
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: 同一正式型式 `Sオリスロ2AA` の当時解析で **天井リセット / 内部状態再抽選 / モード再抽選**。花娘個別の一部攻略資料でも「設定変更で天井G数リセット」を確認。メイン基板側契約として採用。
- carryOverBehavior: 花娘専用に据え置きを独立規定する直接資料は確認できず `UNVERIFIED_AS_DISTINCT_HANAMUSUME_CONDITION`。同一型式の純電断では天井・内部状態・モード引継ぎ。
- powerCycleBehavior: 同一正式型式当時解析で **天井引継ぎ / 内部状態引継ぎ / モード引継ぎ**。花娘専用サブ演出/ランプの復帰表示は `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。
- gameCounterReset: 設定変更でRESET。純電源OFF→ONではCARRY_OVER（同一正式型式のメイン基板契約）。
- ceilingAfterReset: 通常最深1000G。設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 設定変更で再抽選、純電断で引継ぎ。同一型式の設定変更時モード振り分け公開数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更で内部状態再抽選、純電断で引継ぎ（同一型式解析）。
- advantageousSectionReset: 有利区間管理機。花娘個別攻略で通常A系78G非当選時の有利区間転落を確認。ただし設定変更 / 据え置き / 純電断ごとの有利区間ランプ開始表示・区間開始状態の花娘専用直接契約は `APPLICABLE_BUT_HANAMUSUME_SPECIFIC_RESET_CONTRACT_PARTIAL`。
- resetBenefits: モード再抽選は確認。設定変更専用のモード優遇率、朝一高確、短縮天井、朝一特定G以内当選率の公開確定値は `NONE_NUMERICALLY_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 花娘固有の設定示唆（停止音、パネルフラッシュ、告知ランプ）は豊富だが、これらは当日設定示唆であり朝一リセット確定要素ではない。本機固有ガックン条件・発生率、朝一有利区間ランプによる設定変更確定性は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- publicMorningNumbers: 設定変更時モード振り分け、朝一特定G以内当選率、リセット恩恵発生率の公開確定値は `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「花娘 / パチスロ花娘 / はなむすめ / Sオリスロ2AA / JPS / JIN」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ」を組み合わせて再探索。日刊スポーツ、P-WORLD、パチ7、すろぱちくえすと、ちょんぼりすた、2-9伝説、同一型式当時解析を横断。花娘個別で設定変更時の天井Gリセットを確認し、同一正式型式でメイン基板・リール・出玉性能が共通である一次資料を確認した上で、内部状態/モード/純電断契約は同一型式解析を採用。花娘固有サブ表示の朝一復帰、ガックン、設定変更時モード数値は固定できず推測しない。

## qualityNotes / conflicts

- `Sオリスロ2AA` は同一型式の共同PB機。業界一次資料はメイン基板、リール制御、ボーナス確率、出玉率等が共通で、サブ基板・演出は各社独自と明記。
- 導入日は **CONFLICT**。日刊スポーツ導入カレンダー、パチ7、すろぱちくえすと、モゲスロ個別索引は **2019-08-19**。一方、ちょんぼりすた・2-9伝説・後年まとめにはPBシリーズ一括で **2019-08-05** 表記がある。
- 当時の業界発表はJIN「花娘」を「8月納品」とし日付を固定していない。個別当時導入カレンダーと複数個別解析が8/19で一致するため、本DB canonicalは **2019-08-19**。8/5はシリーズ一括日付/先行予定候補としてCONFLICT保持。
- メーカー表記はJPSが型式メーカー、JINがPB企画法人。canonicalは `ジェイピーエス（JIN系PB）`。

## sources

取得日: 2026-09-11

1. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2019-08-09
   - https://www.nikkansports.com/m/amusement/pachislot/news/amp/201908090000270.html
   - 2019-08-19導入群に `花娘（JPS）` と `どき！すろ（JPS）` を掲載。
   - reliability: INDUSTRY
2. 日刊スポーツ — ジェイピーエス「Sオリスロ2AA」を発表
   - https://www.nikkansports.com/m/amusement/pachislot/news/amp/201907020000411.html
   - 花娘を共同PBの一機種として確認。基本型式Sオリスロ2AA、メイン基板・リール制御・ボーナス確率・出玉率が共通、サブ基板演出が各社独自。
   - reliability: INDUSTRY
3. P-WORLD — 花娘
   - https://www.p-world.co.jp/machine/database/8989
   - 設定別初当たり、出玉率、BIG約210枚/REG約90枚。
   - reliability: DATABASE
4. パチ7 — 花娘 設定判別
   - https://pachiseven.jp/machines/5832/cutout/6
   - 2019-08-19導入、JPS、AT、1000G天井、花娘固有設定示唆。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと — 花娘 設定差まとめ
   - https://www.slopachi-quest.com/article/hanamusume-settei/
   - 2019-08-19導入、53G/50枚、純増約3.0枚/G、設定別初当たり/機械割。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — 花娘 天井解析
   - https://www.slopachi-quest.com/article/hanamusume-tennjou/
   - 1000G最深天井、モード別天井、78G非当選時有利区間転落、有利区間ランプを用いた通常時やめどき。
   - reliability: ANALYSIS_HIGH
7. 2-9伝説 — 花娘/ベルシティ/どき!すろ
   - https://29den.com/hanamusume/
   - 約53G/50枚、純増3.0枚/G、設定別初当たり/機械割、**設定変更で天井G数リセット**。導入予定日8/5表記は日付CONFLICT資料として保持。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — Sオリスロ2AA PB各機まとめ
   - https://chonborista.com/slot/jps-slot/89525/
   - 共通スペック、53.0G/50枚、純増3.0枚/G、1000G天井、設定別初当たり/機械割。朝一欄は当初調査中。導入日8/5一括表記は日付CONFLICT資料。
   - reliability: ANALYSIS_HIGH
9. モゲスロ — WONDER AGENTS（同一正式型式の当時解析）
   - https://moge-site.com/archives/22080
   - 同一型式について設定変更: 天井RESET・内部状態/モード再抽選、電源OFF→ON: 天井/内部状態/モード引継ぎ。
   - reliability: ANALYSIS_HIGH_COMMON_FORMAL_MODEL

## missingFields

- 花娘専用の設定変更時モード振り分け公開数値
- 据え置きを純電源OFF→ONと分離した花娘専用直接契約
- 花娘専用サブ基板表示の設定変更 / 純電断復帰挙動
- 設定変更 / 据え置き / 純電断ごとの有利区間ランプ/区間開始状態の花娘専用直接契約
- 本機固有ガックン条件・発生率・確定率

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_COMMON_FORMAL_MODEL_RESET_CORE_WITH_HANAMUSUME_SPECIFIC_GAPS

## conflicts

- releaseDate: canonical 2019-08-19（当時導入カレンダー + 複数個別解析一致） vs 2019-08-05（PBシリーズ一括の解析/後年まとめ）。平均化せず両方保持。
