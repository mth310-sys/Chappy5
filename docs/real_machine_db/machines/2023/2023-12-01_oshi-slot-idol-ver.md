# 推しスロ アイドルVer.

recordNo: 1604
machineName: 推しスロ アイドルVer.
aliases: 推しスロ / スロット 推しスロ アイドルバージョン / 推しスロ グットクルー
manufacturer: DAXEL
formalModel: S推しスロDA
inspectionCode: 3S0885
releaseDate: 2023-12-01
generation: 6号機
systemType: AT / 擬似ボーナス / PB機 / NEW AGEシステム
settings: 1 / 2 / 3 / 4 / 5
coreStatus: COMPLETE_CORE_WITH_CONFLICTS

## releaseDateEvidence
- Amusement Japanは、タツミコーポレーション運営《ミクちゃんガイア三宮店》5階に2023-12-01、本機55台の専用フロアがオープンしたと報道。
- グリーンべるとも同店の専用フロアが2023-12-01にオープンしたと報道。
- P-WORLDも導入開始を2023-12-01、型式 `S推しスロDA`、検定番号 `3S0885` と掲載。
- 一方、一撃は導入日を「2023年11月初旬」、パチマガスロマガは「2023年11月」と掲載する。実店舗で稼働開始した日付を確認できる2023-12-01をcanonical releaseDateとし、11月表記は `CONFLICT_RELEASE_DATE_SOURCE_LABEL` として保持する。
信頼度: INDUSTRY_HIGH / MULTI_SOURCE_MATCH_WITH_DATE_CONFLICT

## payoutRateBySetting
| 設定 | 機械割 |
|---|---:|
| 1 | 94.8% |
| 2 | 99.6% |
| 3 | 100.0% |
| 4 | 100.0% |
| 5 | 100.0% |

P-WORLD、ちょんぼりすた、業界発表記事で一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
- 一般的な設定別初当たり確率という形では公開されていない。
- 本機はレア役等でのボーナス抽選を行わず、通常時150G消化で必ず擬似ボーナスに当選する設計として複数資料が一致。
- よって比較用には `FIXED_150G_PSEUDO_BONUS` と記録し、未公開の確率へ換算しない。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## baseGamesPer50
- 約52.1G/50枚（全設定共通）。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- P-WORLD、一撃等: 約3.0枚/G。
- Amusement Japanの2023-09-19発表会記事: 純増3.1枚。
- 定義差/丸めか実数差かを公開資料から確定できないため、約3.0枚/Gを解析DBのcanonical表示値としつつ `CONFLICT_NET_INCREASE_3_0_VS_3_1` を保持する。平均化しない。
信頼度: CONFLICT / INDUSTRY_HIGH / ANALYSIS_HIGH

## basicPayout
| 擬似ボーナス | 獲得枚数 |
|---|---:|
| チャリティボーナス | 約114枚 |
| 等倍ボーナス | 約141枚 |
| REG BONUS | 約129枚 |
| BIG BONUS | 約201枚 |
| スーパーBIG BONUS | 約501枚 |

設定別の搭載ボーナス:
- 設定1（チャリティ / 枠ランプ赤）: チャリティボーナス。
- 設定2（等倍 / 青）: 等倍ボーナス。
- 設定3（バランス / 緑）: REG / BIG / スーパーBIG。
- 設定4（堅実 / 黄）: REG / BIG。
- 設定5（挑戦 / 紫）: REG / スーパーBIG。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 150G固定天井到達で擬似ボーナスに当選するシンプルなゲーム性。
- 設定は5段階で、設定ごとにゲーム性/搭載ボーナスが異なる。
- 現在設定は筐体サイドの枠ランプ色で常時確認可能。
- NEW AGEシステムとして筐体外付けiPadとクラウド配信コンテンツを組み合わせるPB機。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 本機固有の設定変更時における内部ゲーム数、天井進行、内部状態、有利区間の直接契約を、DAXEL名・型式 `S推しスロDA`・PB名・「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/有利区間」へ検索語を変更し、業界記事・解析・旧DB・回顧資料を横断したが確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 後年の機種別リセット一覧には本機を「リセット恩恵は特になし」とする二次整理資料がある。これは「設定変更時の状態が据え置きと同じ」という意味までは保証しないため、個別項目のRESET/CARRY_OVERを推測補完しない。
信頼度: UNVERIFIED_AFTER_RESEARCH / ANALYSIS_SECONDARY_FOR_NO_SPECIAL_BENEFIT

### carryOverBehavior
- 据え置き時の内部ゲーム数/150G進行、内部状態、有利区間について、本機固有の直接記載を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な6号機仕様からの推定は行わない。
信頼度: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONのみの場合の内部ゲーム数/天井進行、内部状態、有利区間について、本機固有の直接契約を確認できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 通常遊技では150G消化で擬似ボーナスに当選する固定天井仕様。
- 設定変更・据え置き・純電源OFF→ONそれぞれで、途中ゲーム数をRESET/CARRY_OVERするかの機種固有公開記載は確認できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_150G_NORMAL_RULE / UNVERIFIED_RESET_CONTRACT

### ceilingAfterReset
- 通常天井: 150Gで擬似ボーナス当選。
- 設定変更後のみ150Gより短縮/延長されるとする公開固定値は、検索語・資料系統変更後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 後年のリセット一覧では「リセット恩恵は特になし」とされ、少なくとも公開上の専用短縮恩恵は確認できない。
信頼度: ANALYSIS_HIGH_FOR_NORMAL_CEILING / NO_PUBLIC_RESET_SHORTENING_FOUND

### modeAfterReset
- 設定1〜5はそれぞれチャリティ/等倍/バランス/堅実/挑戦という設定固有仕様を持つが、これは通常の「朝一モード振り分け」とは別概念。
- 設定変更時専用モード、モード振り分け、朝一専用状態は公開資料で確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時/据え置き/純電源OFF→ON時の内部状態のRESET/CARRY_OVER契約は本機固有資料で確認できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 6号機AT機だが、本機について設定変更/据え置き/純電源OFF→ON別の有利区間契約を明示した公開資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる変更判別可否も本機固有の公開記載を確認できない。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 機種別リセット一覧では「リセット恩恵は特になし」。
- 150G短縮、朝一専用モード、初当たり優遇などの公開数値は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_SECONDARY / NO_PUBLIC_BENEFIT_FOUND

### resetPenalties
- 設定変更時だけ適用される定量的な不利要素は公開資料で確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetDetection
- 設定そのものは筐体サイドの枠ランプ色で確認可能（設定1赤 / 2青 / 3緑 / 4黄 / 5紫）。これは通常の設定推測ではなく公開表示仕様。
- 前日の枠ランプ色を記録しており翌日に色が変わっていれば設定変更を直接確認できるが、同色の場合は同一設定の打ち直し/設定変更と据え置き/電源OFF→ONを区別できるとは限らないため、変更判別契約を過剰推定しない。
- 本機固有のリールガックン条件・発生率、朝一表示差、有利区間ランプ判別は、機種名/型式/メーカー/PB名と `ガックン / リール初動 / 朝一 / 設定変更 / リセット判別` を組み替えて再探索したが確認できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_SETTING_LAMP / UNVERIFIED_GACKUN_AFTER_RESEARCH

### numericResetData
- 通常天井: 150G固定。
- 設定変更専用短縮天井: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更時モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一○G以内当選率: 固定150G到達仕様以外の専用公開値なし。
- リセット恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 通常仕様として150Gで擬似ボーナス当選。
- 朝一設定変更専用の短縮G数、当選率、モード振り分け、優遇率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## groupAudit
- 2023-12-01は一般的な全国一斉新台日ではなく、本機PBの実店舗導入日として扱う。
- Amusement Japanとグリーンべるとが《ミクちゃんガイア三宮店》専用フロア55台の2023-12-01オープンを確認しており、P-WORLDも導入開始日を同日とする。
- 2023-12-01群は本機1/1 canonicalとしてCLOSED。

## inspectionChronologyNote
- P-WORLDは本機を `S推しスロDA / 3S0885 / 2023-12-01導入` と掲載。
- 遊技日本は2024-04-05に、新潟県公安委員会ほかの公示として同一型式 `S推しスロDA`（DAXEL）の検定通過を報道。
- 2023-12-01の実稼働事実と2024-04公示は同時に成立しているため、後者を理由に導入日を2024年へ改変しない。都道府県別の追加検定/再公示等の可能性はあるが、公開記事だけでは理由を確定できないため `CONFLICT_INSPECTION_CHRONOLOGY_UNEXPLAINED` として保持する。
- 2026-09時点の二次情報には、2026-08に福井県でも同一型式の検定通過があったとする記載があり、同一型式の複数地域/時期公示が存在することと整合するが、公的原文の直接確認なしに詳細を確定しない。

## conflicts
- `CONFLICT_RELEASE_DATE_SOURCE_LABEL`: 2023-12-01実導入（業界2媒体 + P-WORLD） vs 一撃「2023年11月初旬」/パチマガスロマガ「2023年11月」。canonicalは実店舗稼働確認の2023-12-01。
- `CONFLICT_NET_INCREASE_3_0_VS_3_1`: P-WORLD/一撃等 約3.0枚/G vs Amusement Japan発表会記事 3.1枚。平均化しない。
- `CONFLICT_INSPECTION_CHRONOLOGY_UNEXPLAINED`: 2023-12-01実稼働・検定番号3S0885掲載に対し、同一型式 `S推しスロDA` が2024-04-05検定通過記事にも掲載。理由は推測しない。

## missingFields
- 設定変更/据え置き/純電源OFF→ON別の内部150G進行のRESET/CARRY_OVER契約。
- 設定変更/据え置き/純電源OFF→ON別の内部状態・有利区間契約。
- 設定変更専用モード/朝一専用状態。
- 本機固有ガックン・有利区間ランプ等の変更判別契約。
- 設定変更専用の定量的恩恵/不利数値。

## researchExhaustionNotes
- 機種名: `推しスロ アイドルVer.` / `推しスロ アイドルver.` / `スロット 推しスロ アイドルバージョン` / `推しスロ グットクルー`。
- 型式: `S推しスロDA` / 検定番号 `3S0885`。
- メーカー/PB: `DAXEL` / `ダクセル` / `タツミコーポレーション` / `NEW AGEシステム`。
- reset語: `設定変更` / `リセット` / `朝一` / `据え置き` / `電源OFF ON` / `天井短縮` / `モード` / `ガックン` / `リール初動` / `有利区間` / `変更判別`。
- メーカー/業界記事、P-WORLD、当時/後年解析、機種別リセット一覧まで横断。固有契約を確認できない項目のみUNVERIFIED/PUBLIC_VALUE_NOT_FOUNDとした。

## sources
取得日: 2026-09-13
- Amusement Japan 専用フロア実導入: https://www.amusement-japan.co.jp/article/detail/10003979/
- グリーンべると 専用フロア実導入: https://web-greenbelt.jp/post-78770/
- Amusement Japan 発表会/純増3.1枚: https://www.amusement-japan.co.jp/article/detail/10003810/
- 遊技通信 発表会（P-WORLD転載）: https://news.p-world.co.jp/articles/25443/yugitsushin
- 遊技日本 発表会（P-WORLD転載）: https://news.p-world.co.jp/articles/25404/nippon
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9917
- 一撃 機種概要: https://1geki.jp/slot/s_oshisloaid/
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/200378/
- パチマガスロマガ 機種DB: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/15/kh01.php
- 遊技日本 2024-04-05 同一型式検定通過: https://news.p-world.co.jp/articles/27467/nippon
- スロリスクタイム 機種別リセット恩恵一覧: https://pachisuro100.com/reset/

## quality
coreConfidence: HIGH_WITH_EXPLICIT_CONFLICTS
resetConfidence: PARTIAL_RESEARCH_EXHAUSTED
sourceCoverage: INDUSTRY / MULTI_ANALYSIS / OLD_DB / RETROSPECTIVE
status: COMPLETE_CORE_WITH_RESET_PARTIAL_RESEARCH_EXHAUSTED
