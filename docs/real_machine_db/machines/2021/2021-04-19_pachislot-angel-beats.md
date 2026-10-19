# パチスロAngel Beats!

No: 1404
machineName: パチスロAngel Beats!
machineNameVariants: Angel Beats! / エンジェルビーツ / S AngelBeats! / S AngelBeats! XF
manufacturer: タイヨーエレック製造 / Sammy販売
releaseDate: 2021-04-19
formalModelName: S AngelBeats! XF
certificationNumber: 0S1535

generation: 6.1号機
systemType: AT / 擬似ボーナス+差枚数管理型AT / 周期抽選

## identity / release
- サミー公式は2021-02-18に発売を発表し、製造元タイヨーエレック、2021-04-19より全国ホール導入開始予定と明記。
- サミーのマイスロ告知でも2021-04-19をホール導入日として確認。
- HAZUSEで型式 `S AngelBeats! XF`、検定番号 `0S1535`、導入開始日2021-04-19を確認。
- reliability: OFFICIAL / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.9% |
| 2 | 98.5% |
| 3 | 100.4% |
| 4 | 104.2% |
| 5 | 107.5% |
| 6 | 110.5% |
- 1geki、パチセブン、P-WORLD系掲載値で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BONUS初当たり | AT「GDM DREAM LIVE」 |
|---:|---:|---:|
| 1 | 1/256.8 | 1/352.7 |
| 2 | 1/250.3 | 1/348.1 |
| 3 | 1/236.1 | 1/317.3 |
| 4 | 1/206.6 | 1/280.9 |
| 5 | 1/191.7 | 1/236.5 |
| 6 | 1/164.8 | 1/225.6 |
- 1geki、パチセブン、P-WORLDで一致。業界記事でも設定1のBONUS 1/256.8・AT 1/352.7を確認。
- 一部二次資料に異なる初当たり表（BONUS 1/295.4〜1/176.2、AT 1/400.1〜1/245.0）があるが、多系統一致値と定義差/旧値の可能性があるためcanonicalへ混ぜずconflictsへ保持。
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約43.0G/50枚。
- グリーンべると/P-WORLD業界記事、1geki、パチセブンで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス/AT系の純増: 約5.0枚/G。
- メインAT「GDM DREAM LIVE」は差枚数管理型。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 戦線BONUS!: 約75枚。
- エピソードBONUS: 約100枚。
- AT「GDM DREAM LIVE」: 初期最低保証150枚、差枚数管理型、純増約5.0枚/G。
- AT中上乗せは約1/24で30〜300枚（設定差なし）だが、実機完全再現用の詳細振り分けは収集対象外。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は主に約60Gの周期抽選で擬似ボーナスを目指す。
- 天井は有利区間移行後最大10周期、約720Gで戦線BONUS!以上。
- 1周期目は期待度30%以上、4周期目はチャンス、10周期目はフリーズ確率が上昇する資料あり。これらは設定変更専用値ではなく通常の周期構造として扱う。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_NO_RESET_SPECIFIC_NUMERIC_BENEFIT_FOUND
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井までの周期/G数をRESET。
- 内部状態もRESETとする解析資料が存在し、別系統の朝一まとめでも一致。
- 有利区間は設定変更で前日の進行を引き継がない扱い。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き運用（設定変更なしで翌営業へ移行）は、純電断の公開契約に基づき天井進行・内部状態をCARRY_OVERとして扱う。
- 据え置き専用の追加恩恵/不利は確認されない。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井までの進行を引き継ぐ。
- 内部状態も引き継ぐ。
- 液晶開始ステージは当時解析資料で「調査中」のため固定しない。
- reliability: ANALYSIS_HIGH / UNVERIFIED（液晶ステージのみ）

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電断: CARRY_OVER。
- 天井条件は最大10周期（約720G）。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更時に天井進行はリセットされるが、設定変更専用の短縮天井は確認されない。
- リセット後も通常の最大10周期（約720G）契約を使用。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更専用モード、専用周期テーブル、専用天井振り分けの公開値は、機種名/型式/メーカーと「設定変更・リセット・朝一・周期・モード・天井短縮」を組み替えて再探索しても固定できず `NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH`。
- 1周期目期待度30%以上は通常の有利区間開始後/初周期側の特徴として資料にあるが、設定変更専用数値とは扱わない。

### stateAfterReset
- 設定変更: RESET。
- 純電断: CARRY_OVER。
- 設定変更時の内部状態振り分け数値は確認できず、推測補完しない。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH（振り分け数値）

### advantageousSectionReset
- 設定変更時は前日の有利区間進行を引き継がない。
- 電源OFF→ONのみは有利区間ランプ状態を引き継ぐとされる。
- 通常時は有利区間ランプが基本消灯するタイプのため、朝一消灯だけでは変更判別不可。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更専用の天井短縮、AT/CZ直撃保証、特定モード優遇率など、朝一客行動を左右する定量的恩恵は十分な再探索後も確認されない。
- 朝一リセット狙いについて当時攻略資料は「無し」としている。

### resetPenalties
- 設定変更専用の定量的不利要素は公開資料から確認できず `NO_PUBLIC_RESET_SPECIFIC_PENALTY_FOUND_AFTER_RESEARCH`。

### resetDetection
- 通常時は有利区間ランプが基本消灯するため、朝一ランプ消灯では設定変更/据え置きを判別できない。
- 朝一で有利区間ランプ点灯なら据え置き濃厚とされるが、前日が点灯状態で終了した稀なケースに限られる。
- 本機固有のガックン発生条件/発生率、初期出目による確定判別は、表記揺れ・型式名・メーカー名と「ガックン/設定変更/据え置き/朝一」を組み替えて再探索しても高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH（ランプ） / UNVERIFIED_AFTER_RESEARCH（ガックン等）

### numericResetData
- 設定変更専用の公開数値テーブルは確認できず。
- 参考として通常の1周期目はボーナス期待度30%以上とされるが、設定変更専用値ではないためreset専用数値としては採用しない。

## conflicts
- 一部二次資料にBONUS初当たり `1/295.4〜1/176.2`、AT `1/400.1〜1/245.0`、機械割 `97.9〜110.3%` の表が存在する。一方、1geki・パチセブン・P-WORLD・業界記事系はBONUS `1/256.8〜1/164.8`、AT `1/352.7〜1/225.6`、機械割 `97.9〜110.5%` で一致。本DBでは後者をcanonicalとし、前者は定義差または旧値の可能性を含む `CONFLICT_SECONDARY_TABLE` として保持し平均しない。
- メーカー表記はサミー販売/タイヨーエレック製造のため、双方をidentityに保持する。

## missingFields
- 純電断後の液晶開始ステージ: UNVERIFIED
- 設定変更時の内部状態振り分け数値: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 初期出目等による設定変更確定契約: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12

1. サミー公式「新機種『パチスロAngel Beats!』発売のお知らせ」
   - https://www.sammy.co.jp/japanese/news/2021/1601.html
   - 製造元タイヨーエレック、2021-04-19導入予定。
   - reliability: OFFICIAL
2. サミー マイスロ公式告知
   - https://www.sammy.co.jp/japanese/myslot/news/index_3.html
   - 2021-04-19をホール導入日として確認。
   - reliability: OFFICIAL
3. HAZUSE「パチスロAngel Beats!」
   - https://hazuse.com/machine/pachislot/0S1535/
   - 型式S AngelBeats! XF、検定番号0S1535、導入日、純増、出玉率レンジ。
   - reliability: ANALYSIS_HIGH
4. 1geki「パチスロAngel Beats! 機種概要・スペック」
   - https://1geki.jp/slot/s_angelbeats/
   - 設定別BONUS/AT初当たり、機械割、ゲーム性、AT最低保証150枚。
   - reliability: ANALYSIS_HIGH
5. 1geki「天井/設定変更」
   - https://1geki.jp/slot/s_angelbeats/3/
   - 最大10周期（約720G）天井。
   - reliability: ANALYSIS_HIGH
6. パチセブン「パチスロAngel Beats!」
   - https://pachiseven.jp/machines_v2/6257
   - 設定別性能、43G/50枚、設定変更時天井RESET/電断引継ぎ、設定変更時内部状態RESET/電断引継ぎ、有利区間ランプ挙動。
   - reliability: ANALYSIS_HIGH
7. P-WORLD「パチスロAngel Beats!」
   - https://www.p-world.co.jp/machine/database/9347
   - 設定別BONUS/AT、AT最低150枚、純増、ゲームフロー。
   - reliability: INDUSTRY_DB / ANALYSIS_HIGH
8. グリーンべると/P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/15856/greenbelt
   - 約43G/50枚、純増約5.0枚/G、設定1の初当たり、納品予定、AT性能。
   - reliability: INDUSTRY
9. PiDEA X 業界記事
   - https://pidea.jp/articles/1613987205
   - 戦線BONUS約75枚、エピソードBONUS約100枚、純増約5.0枚/G、導入予定日。
   - reliability: INDUSTRY
10. すろぱちくえすと「Angel Beats! 天井解析」
   - https://www.slopachi-quest.com/article/angel-beats-tenjou/
   - 最大10周期天井、通常時ランプ基本消灯、点灯なら据え置き濃厚、リセット狙い無し。
   - reliability: ANALYSIS_SINGLE
11. スロットセブン「Angel Beats! 設定判別・朝一解析」
   - https://slot-seven.com/angelbeats-settei/
   - 設定変更=天井/内部状態RESET、電源OFF→ON=引継ぎ。性能表は他資料と競合のためcanonicalに不採用。
   - reliability: ANALYSIS_SINGLE
