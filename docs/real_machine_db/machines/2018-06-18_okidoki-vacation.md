# No.1203 沖ドキ！バケーション

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 沖ドキ！バケーション
- manufacturer: アクロス
- releaseDateCanonical: 2018-06-18
- generation: 5.9号機 / 5号機
- systemType: ノーマル / Aタイプ / 完全告知 / 25φ
- formalModelName: `沖ドキ！バケーションNN`
- certificationNumber: `7S1499`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パチ＆スロ必勝本、HAZUSE DATA、DMMぱちタウン、2018年導入日一覧で2018-06-18が一致。
- PiDEA Xの当時記事は、ユニバーサルが6月6日にロケテストを発表し、6月18日から地域限定ロケテスト実施と記録。
- releaseDate confidence: `INDUSTRY + ANALYSIS_HIGH`。

## performanceCore

### payoutRateBySetting
- setting1: 96.3%
- setting2: 98.2%
- setting3: 101.5%
- setting4: 103.7%
- setting5: 106.5%
- setting6: 110.7%

### initialHitBySetting
BIG:
- setting1: 1/266.4
- setting2: 1/262.1
- setting3: 1/258.0
- setting4: 1/253.0
- setting5: 1/244.5
- setting6: 1/230.8

REG:
- setting1: 1/343.1
- setting2: 1/326.0
- setting3: 1/307.7
- setting4: 1/288.7
- setting5: 1/269.7
- setting6: 1/241.8

ボーナス合算:
- setting1: 1/150.0
- setting2: 1/145.3
- setting3: 1/140.3
- setting4: 1/134.8
- setting5: 1/128.3
- setting6: 1/118.1

パチ＆スロ必勝本、HAZUSE系設定推測、DMM系のレンジ情報で整合。30φ版とボーナス確率・リール配列を含む基本スペック共通と明記される。

### baseGamesPer50
- 約32.0G〜35.0G/50枚（設定差を含む公開レンジ）。

### netIncrease
- `NOT_APPLICABLE`（AT/ART/RTによる純増型ではないノーマルタイプ）。

### basicPayout
- BIG: 312枚獲得
- REG: 最大104枚獲得
- BIG後は32Gの特殊演出ゾーン「ドキドキゾーン」へ移行。これはAT/ARTやゲーム数解除ゾーンではなく、告知方式・演出が変化する区間として分離する。

### ceiling
- 天井: **非搭載**。
- ゾーン狙い対象となるゲーム数解除モードもなし。

## modeSpecificMinimumData
- ハイビスカス点灯による完全告知ノーマルタイプ。
- BIG後32Gの「ドキドキゾーン」は基本的に後告知へ変化する特殊演出区間。
- 25φ版と30φ版は基本性能共通だが、正式型式名・検定番号・メダル径が異なるためDB上は独立レコードとする。

## resetBehavior

### settingChangeBehavior
- 設定変更時、告知ランプ: **CLEAR**。
- 設定変更時、ドキドキゾーン: ちょんぼりすたは **CLEAR** と掲載。
- 一撃は設定変更時ドキドキゾーンを「現在調査中」としているため、CLEAR情報は単一解析系の直接比較情報として保持し、過度に一般化しない。

### carryOverBehavior
- 「据え置き」を純電源OFF→ONと分離した本機固有の内部契約は、表記揺れ・型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ONで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 電源OFF→ON時、告知ランプ: **CARRYOVER** とする直接比較情報あり。
- ドキドキゾーン: ちょんぼりすたは **「引き継ぎ!?」**、一撃は **「現在調査中」**。疑問符付き情報を確定契約へ昇格せず `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`。

### modeAfterReset
- 天井モード/ゲーム数解除モード: `NOT_APPLICABLE`。
- 朝一専用モード・設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ドキドキゾーンは演出・告知方式変化区間であり、一般的なAT機のモードとは分離する。

### stateAfterReset
- settingChange: 告知ランプCLEAR。ドキドキゾーンCLEARの解析情報あり。
- purePowerCycle: 告知ランプCARRYOVER。ドキドキゾーン内部/演出状態の完全契約は `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- `NOT_APPLICABLE`（ノーマルタイプで有利区間管理を性能軸として使用しない）。

### resetBenefits
- 設定変更専用の短縮天井、初当たり優遇、朝一専用当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更でドキドキゾーン/告知ランプがクリアされる解析情報あり。
- ドキドキゾーンはボーナス当選率を高めるゾーンではなく告知・演出区間のため、出玉上の定量的不利値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 告知ランプの前日状態を把握できる特殊条件では設定変更/電断差の材料になり得るが、通常の朝一で確定判別できる公開手順は確認できず。
- 本機固有のガックン発生条件/確率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- noticeLampAfterSettingChange: `CLEAR`
- noticeLampAfterPurePowerCycle: `CARRYOVER`
- dokidokiZoneAfterSettingChange: `CLEAR_ANALYSIS_SINGLE`
- dokidokiZoneAfterPurePowerCycle: `UNVERIFIED_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時のみ適用されるモード振り分け、特定G以内当選率、短縮天井、初当たり優遇率などの比較可能な公開数値は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- ドキドキゾーンの純電源OFF→ON挙動は、ちょんぼりすたが「引き継ぎ!?」と疑問符付きで掲載し、一撃は「現在調査中」。相反する確定値ではないためCONFLICTにはせず、低信頼の引継ぎ示唆として隔離。
- HAZUSEの機種ページでは出玉率欄が「調査中」の表示が残る一方、複数解析資料には96.3〜110.7%の設定別機械割が掲載される。数値同士の競合ではないためCONFLICT化しない。

## missingFields
- 据え置きを純電断から独立させた内部状態契約。
- 純電断時ドキドキゾーンの確定挙動。
- 本機固有ガックン確定条件/発生率。
- 設定変更専用の朝一数値（公開確認できず）。

## sources
取得日: 2026-09-10

1. パチ＆スロ必勝本 — 沖ドキ! バケーション 機種概要
   - https://p.hisshobon.jp/machine/3182/1/69942
   - 導入2018-06-18、25φ/30φ共通スペック、設定別BIG/REG/合算/機械割、32.0〜35.0G/50枚、BIG312枚、REG最大104枚。
   - confidence: `ANALYSIS_HIGH`
2. HAZUSE DATA — 沖ドキ！バケーション
   - https://hazuse.com/machine/pachislot/7S1499/
   - 型式名`沖ドキ！バケーションNN`、検定番号`7S1499`、導入2018-06-18、メーカー。
   - confidence: `ANALYSIS_HIGH`
3. DMMぱちタウン — 沖ドキ！バケーション
   - https://p-town.dmm.com/machines/3170/recommend
   - 型式名、導入日、機械割レンジ、30φ版とスペック共通の記述。
   - confidence: `ANALYSIS_HIGH`
4. ちょんぼりすた — 沖ドキ バケーション
   - https://chonborista.com/slot/universal-slot/59040/
   - 朝一比較（設定変更時の告知ランプ/ドキドキゾーンCLEAR、電源OFF→ON時の告知ランプ引継ぎ、ドキドキゾーン引継ぎ!?）、天井非搭載。
   - confidence: `ANALYSIS_HIGH`（疑問符付き項目は低信頼として隔離）
5. 一撃 — 天井/設定変更:沖ドキ！バケーション
   - https://1geki.jp/slot/s_okidoki_vacation/3/
   - 天井非搭載。設定変更時/電源ON・OFF時のドキドキゾーンは「現在調査中」と掲載。
   - confidence: `ANALYSIS_HIGH`
6. PiDEA X — 「沖ドキ!バケーション」地域限定ロケテスト実施／ユニバーサル
   - https://www.pidea.jp/articles/%E3%80%8C%E6%B2%96%E3%83%89%E3%82%AD%21%E3%83%90%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%80%8D%E5%9C%B0%E5%9F%9F%E9%99%90%E5%AE%9A%E3%83%AD%E3%82%B1%E3%83%86%E3%82%B9%E3%83%88%E5%AE%9F%E6%96%BD%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
   - 2018-06-18から地域限定ロケテスト、シリーズ初ノーマル、BIG312枚/REG最大104枚。
   - confidence: `INDUSTRY`
7. すろぱちくえすと — 2018年導入機種まとめ
   - https://www.slopachi-quest.com/article/sindai-2018/
   - 2018-06-18群の大神/沖ドキ！バケーション/十字架4を確認。
   - confidence: `ANALYSIS_SINGLE`
