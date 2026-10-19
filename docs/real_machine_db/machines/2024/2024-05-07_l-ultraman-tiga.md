# L ウルトラマンティガ

recordNo: 1648
machineName: L ウルトラマンティガ
aliases: Lパチスロウルトラマンティガ / スマスロ ウルトラマンティガ / LパチスロウルトラマンティガKA
manufacturer: オッケー. / KYORAKU
formalModel: LパチスロウルトラマンティガKA
inspectionCode: 3S1301
releaseDate: 2024-05-07
generation: 6.5号機 / スマスロ
systemType: AT / ティガチャンス→CZ→差枚数管理AT
settings: 1 / 2 / 4 / 5 / 6（設定3なし、設定Lあり）
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- オッケー.販売発表を伝える業界記事、必勝本、一撃、K-Navi、HAZUSEが2024-05-07導入で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- HAZUSEで型式名 `LパチスロウルトラマンティガKA`、検定番号 `3S1301` を確認。
- 業界記事でも型式名 `LパチスロウルトラマンティガKA` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.5%
- setting2: 98.6%
- setting4: 102.2%
- setting5: 107.1%
- setting6: 113.6%
initialHitBySetting:
- setting1: ティガチャンス 約1/159 / ボーナス約1/423
- setting2: ティガチャンス 約1/155 / ボーナス約1/401
- setting4: ティガチャンス 約1/142 / ボーナス約1/367
- setting5: ティガチャンス 約1/133 / ボーナス約1/338
- setting6: ティガチャンス 約1/124 / ボーナス約1/312
baseGamesPer50: 約33.9G/50枚（約34G表記あり）
netIncrease: 約2.5枚/G
basicPayout:
- ティガチャンス: 約40枚 / UBM突入期待度約40%
- ウルトラバトルモード: 12G / 勝利期待度約50%
- ウルトラボーナス: 平均獲得約777枚
- レギュラーボーナス: 約40枚
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役等からティガチャンスを目指し、演出成功でCZ「ウルトラバトルモード」へ。
- ティガチャンス間天井は600G+α。
- UBM間天井は通常最大1280G+α。
- ティガチャンスは最大7連続スルー後、8回目でUBM濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間、ティガチャンス間天井、UBM間天井、ティガチャンススルー天井、内部状態をRESET。
- 小Vベル回数表示は0回へ戻るが、内部的にはランダムにポイントを再抽選。
- UBM間天井は通常最大1280G+αから最大896G+αへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは有利区間、TC間天井、UBM間天井、TCスルー回数、内部状態、小Vベル内部ポイントを引き継ぐ。
- 表示上のゲーム数・小Vベルカウンターは0へ戻るため、画面だけでは内部引継ぎを直接確認できない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 機種別解析では純電源OFF→ON時はTC間天井、UBM間天井、TCスルー回数、内部状態、有利区間、小Vベル内部ポイントを引き継ぐ。
- ゲーム数表示と小Vベルカウンター表示は0スタート。
- 開始ステージは都市ステージへ戻る。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: TC間、UBM間、TCスルー回数をRESET。
- 据え置き/純電断: 内部的にCARRY_OVER。
- 表示G数は設定変更・電断とも0G表示。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- TC間天井: 600G+α。設定変更による短縮値は確認されず、RESETのみ。
- UBM間天井: 通常最大1280G+α → 設定変更後最大896G+α。
- TCスルー天井: 通常最大7スルー→8回目UBM濃厚。設定変更時はスルー回数RESET。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機の朝一主要比較軸はモード名より、UBM間規定G・TCスルー回数・小Vベル内部ポイント。
- 設定変更専用の離散的な朝一モード振り分けは高信頼公開値を確認できず `NO_DISCRETE_MORNING_MODE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PUBLIC_STRUCTURE

### stateAfterReset
- 設定変更時は内部状態RESET。
- 据え置き/純電断は内部状態CARRY_OVER。
- 小Vベルポイントは設定変更時にランダム再抽選、据え置き/電断では内部的に引継ぎ。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電断: CARRY_OVER。
- 営業中の有利区間リセットはエンディング終了時等。設定変更時以外の有利区間リセット後は上位CZ「邪神降臨」へ移行するが、設定変更時の朝一恩恵とは区別する。
confidence: ANALYSIS_HIGH

### resetBenefits
- UBM間最大天井1280G+α → 896G+αへ短縮。
- 小Vベル内部ポイントをランダム再抽選するため、見た目0ptでも内部ポイントを持つ可能性あり。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日のTC間/UBM間/TCスルー/内部状態/小Vベル内部ポイントは設定変更で消失。
- 設定変更時は、エンディング等の設定変更以外の有利区間リセット後に発生する上位CZ「邪神降臨」恩恵とは別扱い。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一896G+αを超えてもUBMに当選しなければ据え置き濃厚材料。
- 前日最終のTC間G、UBM間G、TCスルー回数と当日挙動の整合で変更推測が可能。
- 設定変更/電断とも表示G数0、小Vベル表示0、都市ステージ開始のため、見た目単独では判別困難。
- 本機固有ガックン条件/発生率は、表記揺れ・型式・メーカー名と設定変更/据え置き/電断/ガックンを組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
- TC間天井: 600G+α
- UBM間通常最大天井: 1280G+α
- 設定変更後UBM間最大天井: 896G+α
- TCスルー天井: 最大7スルー→8回目UBM濃厚
- 小Vベル初期内部ポイント: ランダム再抽選（具体的振り分けPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH）
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更時UBM間最大896G+α。
- 小Vベルポイントは表示0ptでも内部ランダム加算あり。

## conflicts
- setting3: 市場スペックは1/2/4/5/6。二次資料の一部にsetting3表記があるため、canonical設定構成には採用しない。
- baseGamesPer50: 33.9Gと約34Gは丸め差。
- releaseDate: 2024-05-07で複数一致。

## missingFields
- 設定変更時の小Vベル初期ポイント具体的振り分け
- 本機固有の設定変更時リールガックン条件/発生率

## sources
取得日: 2026-09-14

### industry / machine DB
- 遊技日本/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/27698/nippon
- HAZUSE型式/検定: https://hazuse.com/hd/3s1301/
- HAZUSE解析: https://hazuse.com/machine/pachislot/3S1301/
- P-WORLD: https://www.p-world.co.jp/machine/database/10041

### analysis
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/83710/
- 一撃 オンライン遊技説明: https://1geki.jp/slot/l_tiga/39/
- 一撃 天井: https://1geki.jp/slot/l_tiga/4/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/745/21528/
- なな徹 タイプチェンジゾーン: https://nana-press.com/kaiseki/machine/745/21531/
- ぽこすろっと: https://www.nankaikoya.jp/ultramantiga-kitaichi/
- スロパチクエスト天井: https://www.slopachi-quest.com/article/lultramantiga-tenjou/
- K-Navi: https://p-kn.com/slot/4143/

## researchNotes
- `L ULTRAMAN`など後発別機種の検索混入を除外し、`L ウルトラマンティガ` / `LパチスロウルトラマンティガKA` / オッケー. / 京楽で再検索。
- 「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井短縮」「モード」「ガックン」「有利区間」を組み替えて探索。
- 完全再現用の小役別抽選、AT上乗せ詳細、CZ内部抽選は収集対象外。
