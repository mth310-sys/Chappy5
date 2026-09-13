# L聖闘士星矢 海皇覚醒 CUSTOM EDITION

recordNo: 1651
machineName: L聖闘士星矢 海皇覚醒 CUSTOM EDITION
aliases: スマスロ聖闘士星矢 海皇覚醒 / L聖闘士星矢海皇覚醒CUSTOM EDITION / L聖闘士星矢海皇覚醒ED
manufacturer: サンスリー製造 / 三洋販売
formalModel: L聖闘士星矢海皇覚醒ED
inspectionCode: 430030
releaseDate: 2024-06-03
generation: 6.5号機 / スマスロ
systemType: AT / CZ突破・ゲーム数上乗せ型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- SANYO公式プレスリリース（2024-04-05）でトップ導入日2024-06-03予定を確認。
- HAZUSE、パチマガスロマガ、必勝本系、P-Summa等でも2024-06-03導入が一致。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- SANYO公式プレスリリースで型式名 `L聖闘士星矢海皇覚ED` 表記を確認（媒体によって `L聖闘士星矢海皇覚醒ED` とも表記）。
- HAZUSEで型式名 `L聖闘士星矢海皇覚醒ED`、検定番号 `430030` を確認。
- 遊技日本/P-WORLDの検定通過・販売発表でも `L聖闘士星矢海皇覚醒ED` を確認。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.5%
- setting3: 100.0%
- setting4: 105.5%
- setting5: 108.8%
- setting6: 114.9%
initialHitBySetting:
- setting1: 海将軍激闘(GB) 1/360.4 / 聖闘士RUSH(AT) 1/1168
- setting2: 海将軍激闘(GB) 1/357.0 / 聖闘士RUSH(AT) 1/1141
- setting3: 海将軍激闘(GB) 1/353.1 / 聖闘士RUSH(AT) 1/1107
- setting4: 海将軍激闘(GB) 1/340.4 / 聖闘士RUSH(AT) 1/985
- setting5: 海将軍激闘(GB) 1/332.8 / 聖闘士RUSH(AT) 1/921
- setting6: 海将軍激闘(GB) 1/317.8 / 聖闘士RUSH(AT) 1/813
baseGamesPer50: 約31.4G/50枚（636/637G以降は約46.0G/50枚へベースアップ）
netIncrease:
- 聖闘士RUSH: 約2.5枚/G
- 覚醒聖闘士RUSH: 約5.1枚/G
basicPayout:
- 聖闘士RUSH: 突入時に初期G数上乗せ特化ゾーンから開始 / AT平均獲得枚数約1500枚（業界・解析掲載値）
- 天馬覚醒: 10G+α / 平均上乗せ約200G
- 女神覚醒: 10G+α / 平均上乗せ約500G
- 覚醒聖闘士RUSH: 上乗せ性能を維持し純増約5.1枚/G、BIGBANG challenge再突入期待度約70%
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・小宇宙ポイント・レア役等からCZ-AT「海将軍激闘(GB)」を目指し、GB突破でAT「聖闘士RUSH」へ。
- 通常モードは通常 / SP準備 / SP。通常・SP準備のゲーム数天井999G、SPは536G。600G帯にはGB期待度50%超の仮天井がある。
- GBスルー天井は最大8スルーで次回GB突破濃厚。設定変更後・AT終了後に2回 or 8回を抽選。
- 637G付近以降は通常時ベースが約46G/50枚へ上昇するため、通常31.4G/50枚とは区間定義を分けて保持。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間、ゲーム数天井、内部状態、通常モード、不屈ポイントをRESET / 再抽選。
- GBスルー回数天井、初期不屈ポイント、GB抽選状態、CZ抽選状態、GBレベルに設定変更専用の優遇抽選あり。
- 設定変更は有利区間リセット契機だが、通常営業中の有利区間リセット後に付くBIGBANG challenge恩恵は設定変更時には適用されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは有利区間、ゲーム数天井進行、内部状態、通常モード、不屈ポイントをCARRY_OVER。
- GBスルー進行・GBレベル等についても設定変更時の再抽選対象と対になる据え置き継続系として扱うが、各サブパラメータを個別列挙した一次公開表は確認できないため、サブ項目単位では `ANALYSIS_HIGH_WITH_PARTIAL_DIRECTNESS`。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONではゲーム数天井と内部状態を引き継ぐとする機種別解析資料を確認。
- 通常モード、不屈ポイント、GBスルー回数、GBレベル、有利区間の純電断単独契約は、機種名/型式/メーカーと「電源OFF ON」「電断」「据え置き」「朝一」を組み替えて再探索したが、全項目を直接固定する高信頼表を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なスマスロ仕様から推定して補完しない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_REMAINING_SUBFIELDS

### gameCounterReset
- 設定変更: ゲーム数天井進行RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを機種別解析で確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CHANGE_VS_CARRY

### ceilingAfterReset
- 設定変更専用のゲーム数天井短縮は確認されない。通常/SP準備は最大999G、SPは536G。
- ただし設定変更時はGBスルー回数天井を再抽選し、2スルーが10.16%、8スルーが89.84%。2スルー選択時は3回目のGBが突破濃厚。
- 600G帯のGB期待度50%超の仮天井は通常ゲーム性であり、設定変更専用短縮とは分離。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更で通常モードをRESET / 再抽選。据え置きはCARRY_OVER。
- 設定変更専用の通常 / SP準備 / SPの具体的モード振り分けは、主要解析・旧DBまで再探索しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- GBレベルは設定変更時に再抽選され、レベル2以上が約50%。設定別の初期振り分けは公開されているためnumericResetDataに保存。
confidence: ANALYSIS_HIGH

### stateAfterReset
- 設定変更時、海将軍激闘(GB)抽選状態は約50%で高確開始。
- 設定変更時、小宇宙CHARGE(CZ)抽選状態は約13%で高確（ショート/ロング）開始。
- 据え置きは内部状態CARRY_OVER。
- 純電源OFF→ONも内部状態CARRY_OVERとする機種別資料を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 通常営業中はBIGBANG BONUS終了後にも有利区間をリセットしBIGBANG challengeへ移行するが、なな徹はこの恩恵について「設定変更時を除く」と明記しているため朝一設定変更恩恵へ混入しない。
- 純電源OFF→ON単独の有利区間契約は直接資料不足のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_CONTRACT

### resetBenefits
- GBスルー回数天井2回選択率10.16%。
- 初期不屈ポイント40pt以上が約30%。50pt到達で次回GB突破濃厚。
- GB抽選状態の高確開始率50.0%。高確移行時は10G保障。
- 小宇宙CHARGE(CZ)抽選状態の高確開始率約13%。
- GBレベル2以上が約50%で、設定別に高設定ほど上位レベルが選ばれやすい。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更で前日の天井進行、通常モード、内部状態、不屈ポイント、有利区間進行を失う。
- 一方で設定変更専用の複数優遇があるため、前日蓄積状況次第で損得は変わる。
- 設定変更時には、通常営業中の有利区間切断後に発生するBIGBANG challenge恩恵は付与されない。
confidence: ANALYSIS_HIGH

### resetDetection
- なな徹の機種専用「リセット判別」は最終更新後も「調査中」。本機固有のガックン条件/発生率は、機種名・型式・メーカー・シリーズ名と検索語を変更して主要解析/旧DBまで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常モードの内部ゲーム数依存で前兆が発生するため、「前日G数＋当日G数」で100G単位の前兆が整合する場合は据え置き可能性が上がるという解析系判別材料あり。ただし確定判別ではない。
- 有利区間ランプによる本機固有の確定変更判別は公開固定条件を確認できず、推測で採用しない。
confidence: ANALYSIS_HIGH_FOR_PRECURSOR_HINT / UNVERIFIED_FOR_GAKKUN_AND_DEFINITE_LAMP_METHOD

### numericResetData
- GBスルー回数天井（設定変更時）: 2回 10.16% / 8回 89.84%
- 初期不屈ポイント40pt以上: 約30%
- 小宇宙CHARGE(CZ)抽選状態 高確開始: 約13%
- GB抽選状態 高確開始: 50.0%
- GBレベル2以上開始: 約50%
- GBレベル初期振り分け（設定変更時）:
  - setting1: Lv1 49.22% / Lv2 25.00% / Lv3 12.50% / Lv4 12.50% / Lv5 0.78%
  - setting2: Lv1 48.83% / Lv2 25.00% / Lv3 12.50% / Lv4 12.50% / Lv5 1.17%
  - setting3: Lv1 48.83% / Lv2 25.00% / Lv3 12.50% / Lv4 12.50% / Lv5 1.17%
  - setting4: Lv1 48.83% / Lv2 24.22% / Lv3 12.50% / Lv4 13.28% / Lv5 1.17%
  - setting5: Lv1 48.83% / Lv2 23.44% / Lv3 12.11% / Lv4 14.06% / Lv5 1.56%
  - setting6: Lv1 46.48% / Lv2 23.05% / Lv3 11.33% / Lv4 16.02% / Lv5 3.13%

### publicMorningNumbers
- 設定変更専用の公開数値はnumericResetDataの5系統＋GBレベル設定別振り分けを採用。
- 設定変更専用の通常/SP準備/SPモード振り分け、朝一一定G以内のAT当選率、ガックン発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- 上位AT純増は公式/HAZUSE/一撃/ちょんぼりすた等の多数資料が約5.1枚/G。一部2024年当時のマルっとWAVEに約5.7枚/G表記があるため、5.1枚/Gをcanonical、5.7枚/Gを `CONFLICT_SOURCE_VALUE` として保持。
- 型式名は公式プレスPDFのOCR/表記で `L聖闘士星矢海皇覚ED`、検定・機種DBでは `L聖闘士星矢海皇覚醒ED` が確認される。市場識別は検定系の `L聖闘士星矢海皇覚醒ED` をcanonical表記とする。
- 636G以降/637G以降でベース約46Gへ上がる表記差がある。境界の数え方差とみなし、通常ベース約31.4G・深部約46Gという性能定義は一致。

## missingFields
- 純電源OFF→ON単独時の通常モード、不屈ポイント、GBスルー回数、GBレベル、有利区間の機種固有直接契約
- 設定変更専用の通常/SP準備/SPモード具体振り分け
- 本機固有の設定変更時リールガックン条件/発生率

## sources
取得日: 2026-09-14

### official / industry
- SANYO公式プレスリリース（2024-04-05）: https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20240405.pdf
- 遊技日本/P-WORLD 販売発表: https://news.p-world.co.jp/articles/27484/nippon
- 遊技日本/P-WORLD 検定通過: https://news.p-world.co.jp/articles/27308/nippon

### machine DB / analysis
- HAZUSE機種情報: https://hazuse.com/hd/430030-2/
- HAZUSE DATA: https://data.hazuse.com/?genre=207&machine_code=SX0075
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/santhree_slot/06/kh01.php
- マルっとWAVE: https://marutto-w.com/shindai_reference/l_seiya_customedition
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/755/21822/
- なな徹 天井: https://nana-press.com/kaiseki/machine/755/21820/
- なな徹 GBレベル: https://nana-press.com/kaiseki/machine/755/21869/
- 一撃 天井/朝一: https://1geki.jp/slot/l_seiya_kaiou/3/
- 必勝本 設定変更時恩恵: https://hisshobon.com/machineinfo/83615/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/210417/
- P-WORLD機種DB: https://opt.p-world.co.jp/machine/database/10039
- スロパチクエスト リセット一覧: https://www.slopachi-quest.com/article/resets/

### boundary audit 2024-06-03
- 必勝本NEWS 2024-06-03導入一覧: https://hisshobon.news/news/14676/
- P-Summa 2024年6月新台5機: https://psumma.jp/pachislo/61472/
- K-Navi 2024年6月カレンダー: https://p-kn.com/calendar/202406/

## researchNotes
- `L聖闘士星矢 海皇覚醒 CUSTOM EDITION`、`スマスロ聖闘士星矢 海皇覚醒`、`L聖闘士星矢海皇覚醒ED`、`430030`、サンスリー/SANYOを切り替えて調査。
- resetBehavior欠損は「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「電断」「天井」「モード」「不屈」「GB高確」「CZ高確」「有利区間」「ガックン」「変更判別」を組み替え、公式・業界・主要解析・旧DB/後年整理まで横断。
- 初代5.5号機『聖闘士星矢 海皇覚醒』の朝一情報は、本機固有確認なしに流用していない。
- 2024-06-03境界は必勝本NEWSとP-Summaで5機一致を再確認。現時点でPB/別型式/地域先行/段階導入の追加独立機は本線へ確定していないため、群は5候補のままOPEN継続。
