# No.1204 沖ドキ！バケーション-30

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: 沖ドキ！バケーション-30
- manufacturer: アクロス
- releaseDateCanonical: 2018-06-18
- generation: 5.9号機 / 5号機
- systemType: ノーマル / Aタイプ / 完全告知 / 30φ
- formalModelName: `沖ドキ！バケーションNN-30`
- certificationNumber: `7S1311`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- パチビー、K-Navi、HAZUSE DATAが2018-06-18で一致。
- 当時の回顧資料でも25φ/30φを2018-06-18導入として併記。
- releaseDate confidence: `ANALYSIS_HIGH`。

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

パチ＆スロ必勝本は25φ・30φのボーナス確率/リール配列が共通と明記。K-Navi・P-WORLD・HAZUSE系の30φ資料とも整合する。

### baseGamesPer50
- 約32.0G〜35.0G/50枚（25φ/30φ共通スペックの公開レンジ）。

### netIncrease
- `NOT_APPLICABLE`（AT/ART/RTによる純増型ではないノーマルタイプ）。

### basicPayout
- BIG: 312枚獲得
- REG: 最大104枚獲得
- BIG後32Gの特殊演出ゾーン「ドキドキゾーン」。

### ceiling
- 天井: **非搭載**。

## modeSpecificMinimumData
- ハイビスカス点灯による完全告知ノーマルタイプ。
- BIG後32Gのドキドキゾーンは、基本告知が後告知へ変化する演出区間。
- 25φ版とは基本性能共通だが、正式型式`沖ドキ！バケーションNN-30`、検定番号`7S1311`、30φ仕様で別型式のため独立レコード。

## resetBehavior

### settingChangeBehavior
- シリーズ共通解析ページでは設定変更時、告知ランプ: **CLEAR**、ドキドキゾーン: **CLEAR** と掲載。
- 一撃ではドキドキゾーン挙動を「現在調査中」とするため、CLEARは単一解析系の比較情報として保持し確度を上げすぎない。

### carryOverBehavior
- 30φ型式について「据え置き」を純電源OFF→ONから独立させた本機固有契約は、型式名・30φ表記・メーカー名を含め再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- シリーズ共通解析ページでは電源OFF→ON時、告知ランプ: **CARRYOVER**。
- ドキドキゾーン: **「引き継ぎ!?」**。別解析は「現在調査中」。疑問符付き情報を確定契約へ昇格せず `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`。

### modeAfterReset
- 天井モード/ゲーム数解除モード: `NOT_APPLICABLE`。
- 朝一専用モード・設定変更専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: 告知ランプCLEAR、ドキドキゾーンCLEARの解析情報あり。
- purePowerCycle: 告知ランプCARRYOVER。ドキドキゾーンの確定状態は `UNVERIFIED_AFTER_RESEARCH_WITH_LOW_CONFIDENCE_CARRYOVER_INDICATION`。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### advantageousSectionReset
- `NOT_APPLICABLE`（ノーマルタイプで有利区間管理を性能軸として使用しない）。

### resetBenefits
- 設定変更専用の短縮天井・初当たり優遇・朝一専用当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更で告知ランプ/ドキドキゾーンをクリアする解析情報あり。
- 出玉率やボーナス当選確率そのものを下げる定量的不利値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 告知ランプの特殊な前日状態を把握している場合を除き、通常朝一での確定変更判別手順は確認できず。
- 30φ型式固有のガックン条件/発生率は、設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンまで再探索したが `UNVERIFIED_AFTER_RESEARCH`。

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
- 設定変更時だけ適用される短縮天井、モード振り分け、特定G以内当選率、初当たり/CZ優遇率は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- 電源OFF→ON時ドキドキゾーンは「引き継ぎ!?」と「現在調査中」で、確定値同士の対立ではないためCONFLICTではなく低信頼示唆として隔離。
- 25φ/30φは基本性能共通と複数資料で整合し、性能値の有意なCONFLICTなし。

## missingFields
- 据え置きを純電断から独立させた内部状態契約。
- 純電断時ドキドキゾーンの確定挙動。
- 30φ型式固有ガックン確定条件/発生率。
- 設定変更専用の朝一数値（公開確認できず）。

## sources
取得日: 2026-09-10

1. HAZUSE DATA — 沖ドキ！バケーション-30
   - https://hazuse.com/machine/pachislot/7S1311/
   - 型式名`沖ドキ！バケーションNN-30`、検定番号`7S1311`、2018-06-18、機械割レンジ。
   - confidence: `ANALYSIS_HIGH`
2. パチビー — 沖ドキ！バケーション-30
   - https://www.pachibee.jp/machines/lecture/218050001
   - 2018-06-18導入、5.9号機ノーマル、完全告知、沖スロ、技術介入。
   - confidence: `ANALYSIS_HIGH`
3. K-Navi — 沖ドキ！バケーション-30
   - https://p-kn.com/slot/3029/
   - 2018-06-18導入、設定別BIG/REG等。
   - confidence: `ANALYSIS_HIGH`
4. P-WORLD — 沖ドキ!バケーション‐30
   - https://www.p-world.co.jp/machine/database/8680
   - ノーマル/完全告知/沖スロ/技術介入、設定別BIG/RB、BIG312枚、REG最大104枚、ドキドキゾーン32G。
   - confidence: `ANALYSIS_HIGH`
5. パチ＆スロ必勝本 — 沖ドキ! バケーション 機種概要
   - https://p.hisshobon.jp/machine/3182/1/69942
   - 25φ/30φ共通スペック、設定別BIG/REG/合算/機械割、32.0〜35.0G/50枚、基本獲得枚数。
   - confidence: `ANALYSIS_HIGH`
6. ちょんぼりすた — 沖ドキ バケーション
   - https://chonborista.com/slot/universal-slot/59040/
   - 設定変更/電源OFF→ON時の告知ランプ・ドキドキゾーン比較。
   - confidence: `ANALYSIS_HIGH`（疑問符付き項目は低信頼）
7. 一撃 — 天井/設定変更:沖ドキ！バケーション
   - https://1geki.jp/slot/s_okidoki_vacation/3/
   - 天井非搭載、設定変更/電断時ドキドキゾーンは「現在調査中」。
   - confidence: `ANALYSIS_HIGH`
8. パチ7自由帳 — 2018年6月回顧
   - https://pachiseven.jp/columns/column_detail/15368
   - 2018-06-18導入として「沖ドキ!バケーション-25/30」を併記。
   - confidence: `ANALYSIS_SINGLE`
