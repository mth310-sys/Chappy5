# BELLE CITY

recordNo: 1299
machineName: BELLE CITY
machineNameVariants: SLOT BELLE CITY / BELLECITY / ベルシティ
manufacturer: ジェイピーエス（ザ・シティ / シティコミュニケーションズPB）
formalModel: Sオリスロ2AA
certificationNumber: 9S0186
releaseDate: 2019-08-05
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

DMMぱちタウン、P-WORLD、Sオリスロ2シリーズ業界発表と同一型式資料で一致。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス(AT)初当たり |
|---|---:|
| 1 | 1/413.4 |
| 2 | 1/408.1 |
| 3 | 1/396.8 |
| 4 | 1/382.4 |
| 5 | 1/275.3 |
| 6 | 1/269.3 |

P-WORLD、後年DB、同一型式Sオリスロ2AA解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / DATABASE

## baseGamesPer50

- 約53.0G/50枚。
- BELLE CITY個別公開ページでは直接数値を固定できなかったが、同一型式 `Sオリスロ2AA` の共通メイン基板・リール・出玉性能を業界一次資料が明記し、同一型式解析で約53.0G/50枚を確認。

信頼度: ANALYSIS_HIGH_COMMON_FORMAL_MODEL + INDUSTRY_SHARED_SPEC_CONFIRMATION

## netIncrease

- 約3.0枚/G。

業界発表でSオリスロ2シリーズ共通仕様として明記。

## basicPayout

- BIG BONUS: AT70G、約210枚。
- REG BONUS: AT30G、約90枚。
- ボーナス後32Gが主要連荘ゾーン。最上位モードのループ率は最大約90%。

業界発表、DMM、P-WORLD、パチ7で一致。

## modeSpecificMinimumData

- 最大天井: 有利区間1000G消化でボーナス当選。
- 同一型式解析で公開されるモード天井は、通常系1000G/500G/78G系、上位・保証系32G。細かな通常時全モード移行率は物差し用途外のため未収録。
- リール左右の「8」ランプ点灯でボーナス告知するザ・シティ専用演出。
- `Sオリスロ2AA` は共同PB企画で、メイン基板・リール・ボーナス確率・出玉率などスペック部分は共通。筐体デザイン、サウンド、モード示唆、設定看破演出等のサブ基板側は法人ごとに異なる。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_COMMON_FORMAL_MODEL_RESET_CORE_WITH_BELLE_SPECIFIC_GAPS
resetQaLastUpdated: 2026-09-11

- settingChangeBehavior: `Sオリスロ2AA` 同一型式の当時解析では **天井リセット / 内部状態再抽選 / モード再抽選**。業界一次資料がBELLE CITYを同一メイン基板・リール・出玉性能の同一型式と明記しているため、メイン基板側リセット契約として採用。ただしBELLE CITY専用サブ演出の朝一表示契約は別途未確認。
- carryOverBehavior: 据え置きを独立条件でBELLE CITY専用に規定する資料は未確認。同一型式の純電断契約は天井・内部状態・モード引継ぎで、営業上の据え置きと整合するが、`UNVERIFIED_AS_DISTINCT_BELLE_SPECIFIC_CONDITION` とする。
- powerCycleBehavior: 同一型式当時解析で **天井引継ぎ / 内部状態引継ぎ / モード引継ぎ**。BELLE CITY専用サブ液晶・ランプ表示の電断復帰挙動は `PUBLIC_DETAIL_NOT_FOUND_AFTER_RESEARCH`。
- gameCounterReset: 設定変更でRESET、純電源OFF→ONでCARRY_OVER（同一正式型式のメイン基板契約）。
- ceilingAfterReset: 通常最深1000G。設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 設定変更で再抽選、純電断で引継ぎ。同一型式について設定変更時の各モード振り分け公開数値は `PUBLIC_NUMERIC_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更で内部状態再抽選、純電断で引継ぎ（同一型式解析）。
- advantageousSectionReset: 有利区間管理機。通常A系で78Gまで抽選後、非当選時に有利区間転落とする同一型式解析はあるが、BELLE CITY専用の設定変更 / 据え置き / 純電断ごとの有利区間ランプ表示・開始状態を直接規定する資料は `APPLICABLE_BUT_BELLE_SPECIFIC_RESET_CONTRACT_PARTIAL`。
- resetBenefits: 設定変更でモード再抽選は確認可能。同一型式について朝一専用モード優遇率、短縮天井、特定G以内当選率など設定変更専用公開数値は `NONE_NUMERICALLY_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: BELLE CITY専用のガックン発生条件・発生率、朝一ランプ/表示による確定的な変更判別は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。32G/78G等の通常モード挙動は存在するが、変更確定要素としては扱わない。
- publicMorningNumbers: 設定変更専用のモード振り分け・朝一特定G以内当選率・恩恵発生率は公開確定値を確認できず `PUBLIC_NUMERIC_RESET_VALUES_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「BELLE CITY / SLOT BELLE CITY / BELLECITY / ベルシティ / Sオリスロ2AA / JPS / ザ・シティ」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1000G / モード / 内部状態 / ガックン / 有利区間 / 有利区間ランプ」を組み合わせて再探索。DMMぱちタウン、P-WORLD、パチ7、当時業界発表、Sオリスロ2AA同一型式解析、後年DBを横断。BELLE CITY個別では導入日・スペック・天井を確認。同一型式のメイン基板・リール・出玉性能が共通であることを業界一次資料で確認した上で、同一型式当時解析のRESET/CARRY契約をメイン基板挙動として採用した。BELLE CITY固有サブ演出の朝一復帰表示、ガックン、設定変更時モード数値は固定できず推測しない。

## qualityNotes / conflicts

- `Sオリスロ2AA` は東京都公安委員会検定通過資料でメーカー・型式・検定番号 `9S0186` を確認済み。同一正式型式を用いるPB系列のためBELLE CITYにも紐付ける。
- 日刊スポーツおよびAmusement Japanは、BELLE CITYを含む各PB機が「基本型式Sオリスロ2AA」「メイン基板・リール・ボーナス確率・出玉率等は同一」と明記。個別法人差はサブ基板/演出側。
- 導入時期は業界発表で「8月中」。DMMぱちタウン、パチ7、当時8/5新台まとめが2019-08-05で一致するためcanonicalを2019-08-05とする。
- 名称は `BELLE CITY` / `SLOT BELLE CITY` / `BELLECITY` が混在するが別型式ではなく表記差として保持。
- 50枚ベースとresetBehaviorの一部はBELLE CITY専用記事ではなく、正式型式共通メイン基板であることを一次資料確認した上で同一型式解析を利用。PB固有サブ基板側の朝一表示は共通と仮定しない。

## sources

取得日: 2026-09-11

1. 日刊スポーツ — ジェイピーエス「Sオリスロ2AA」を発表
   - https://www.nikkansports.com/amusement/pachislot/news/201907020000411.html
   - 2019-07-02。BELLECITYを含むPB各機、基本型式 `Sオリスロ2AA`、メイン基板・リール絵柄/制御・ボーナス確率・出玉率が共通、サブ基板演出が各社独自であることを確認。
   - reliability: INDUSTRY
2. Amusement Japan — ホール3社がPB機を発表
   - https://amusement-japan.co.jp/article/detail/10001249/
   - 2019-06-24。`SLOT BELLE CITY`、ザ・シティPB、設定1 1/413.4〜設定6 1/269.3、出玉率97.2〜105.6%、純増3枚/G、BIG70G約210枚、REG30G約90枚、8月中導入予定。
   - reliability: INDUSTRY
3. 遊技通信 / 長崎県遊技業協同組合転載 — 6社共同PBパチスロ企画
   - https://nagasaki-yukyo.or.jp/information/jps%E3%80%81at%E9%80%A3%E6%9C%80%E5%A4%A7%E7%B4%8490%EF%BC%85%E3%82%92%E5%AE%9F%E7%8F%BE%E3%81%97%E3%81%9F6%E7%A4%BE%E5%85%B1%E5%90%8C%E4%BC%81%E7%94%BB%E3%81%AEpb%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/
   - 共通型式、出玉性能、法人別投入時期、純増・BIG/REG・最大約90%連荘を確認。
   - reliability: INDUSTRY
4. DMMぱちタウン — BELLE CITY
   - https://p-town.dmm.com/machines/3493/recommend
   - 2019-08-05導入、JPS、機械割97.2〜105.6%、シティグループPB、32G連荘ゾーン・最上位約90%。
   - reliability: ANALYSIS_HIGH / DATABASE
5. P-WORLD — BELLE CITY
   - https://www.p-world.co.jp/machine/database/8988
   - 設定別初当たり1/413.4〜1/269.3、出玉率97.2〜105.6%、BIG約210枚/REG約90枚。
   - reliability: DATABASE
6. パチ7 — BELLE CITY
   - https://pachiseven.jp/machines/5831/cutout/7
   - 2019-08-05導入、AT、天井1000G、ボーナスAT仕様。
   - reliability: ANALYSIS_HIGH
7. モゲスロ — WONDER AGENTS（同一正式型式Sオリスロ2AAの当時解析）
   - https://moge-site.com/archives/22080
   - 設定変更: 天井RESET・内部状態/モード再抽選、電源OFF→ON: 天井/内部状態/モード引継ぎ、1000G天井。
   - reliability: ANALYSIS_HIGH_COMMON_FORMAL_MODEL
8. すろぱちくえすと — WONDER AGENTS 天井（同一正式型式）
   - https://www.slopachi-quest.com/article/wonder-agents-tennjou/
   - 53.0G/50枚、1000G天井、モード別天井、有利区間関連挙動。
   - reliability: ANALYSIS_HIGH_COMMON_FORMAL_MODEL
9. 遊技通信 — 東京都公安委員会検定通過状況（2019-06-03）
   - https://www.yugitsushin.jp/news/gyousei/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%886%E6%9C%883%E6%97%A5%EF%BC%89/
   - `Sオリスロ2AA`、ジェイピーエス、検定番号 `9S0186`。
   - reliability: INDUSTRY / PUBLIC_INSPECTION_REPORT

## missingFields

- BELLE CITY専用の設定変更時モード振り分け公開数値
- 据え置きを純電源OFF→ONと分離したBELLE CITY専用直接契約
- BELLE CITY専用サブ基板表示の設定変更 / 純電断復帰挙動
- 設定変更 / 据え置き / 純電断ごとの有利区間ランプ/区間開始状態のBELLE CITY専用直接契約
- 本機固有ガックン条件・発生率・確定率

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_COMMON_FORMAL_MODEL_RESET_CORE_WITH_BELLE_SPECIFIC_GAPS

## conflicts

- 導入時期: 業界一次資料は「8月中」、個別解析/DBは2019-08-05。矛盾というより予定月と実導入日の粒度差として保持し、canonicalは2019-08-05。
- 名称表記: BELLE CITY / SLOT BELLE CITY / BELLECITY。正式型式は共通 `Sオリスロ2AA`。
