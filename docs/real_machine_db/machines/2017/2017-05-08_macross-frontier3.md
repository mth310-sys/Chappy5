machineName: パチスロ マクロスフロンティア3
manufacturer: SANKYO / 株式会社三共
releaseDate: 2017-05-08
regionalEarlyReleaseDate: 2017-05-01 (関東圏など一部地域)
recordNumber: 1072
generation: 5号機 / 5.5号機
systemType: A+ART / CZ / シナリオ継続型ART
formalModelName: パチスロ マクロスフロンティア3
certificationNumber: 6S1768
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- SANKYO公式オンライン博物館で導入年月2017.05、販売名「パチスロ マクロスフロンティア3」を確認。
- 鹿児島県公報（平成29年3月14日）で型式「パチスロ マクロスフロンティア3」、メーカー株式会社三共、検定番号6S1768を確認。
- パチナビ、K-Navi、ちょんぼりすた、当時解析は全国/本導入を2017-05-08とし、関東圏など一部地域は2017-05-01と明記。パチビー、期待値見える化は2017-05-01表記。
- 本DBでは地域先行と全国/本導入を分離し、releaseDate canonicalを2017-05-08、regionalEarlyReleaseDateを2017-05-01とする。
reliability: OFFICIAL_FOR_MONTH_AND_NAME; PUBLIC_NOTICE_FOR_MODEL_AND_CERTIFICATION; ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE_STRUCTURE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.1% |
| 3 | 99.9% |
| 4 | 102.7% |
| 5 | 105.5% |
| 6 | 110.1% |
- P-WORLD、パチスロデータ、5号機クロニクルで98.1%系列が一致。
- 期待値見える化とちょんぼりすた系の一部整理では設定2のみ97.1%表記が残るためCONFLICTとして保持し、複数一致の98.1%をcanonicalとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SETTING2_CONFLICT

## initialHitBySetting
### ART「ギャラクシーツアー」
| 設定 | ART |
|---:|---:|
| 1 | 1/561 |
| 2 | 1/527 |
| 3 | 1/476 |
| 4 | 1/408 |
| 5 | 1/356 |
| 6 | 1/301 |

### CZ「歌姫チャンス」
| 設定 | CZ |
|---:|---:|
| 1 | 1/292 |
| 2 | 1/276 |
| 3 | 1/255 |
| 4 | 1/227 |
| 5 | 1/207 |
| 6 | 1/182 |

### リアルボーナス
- 全設定共通: 約1/145。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約34G/50枚。
- パチナビ、期待値見える化、パチスロデータ、複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「ギャラクシーツアー」単体: 約1.7枚/G。
- ボーナス込み: 約2.0枚/G。
- SANKYO公式オンライン博物館は約2.0枚/Gと紹介。P-WORLD/パチビー等はART単体約1.7枚/G、ボーナス込み約2.0枚/Gとして定義を分離。
reliability: OFFICIAL_AND_INDUSTRY_ANALYSIS_HIGH

## basicPayout
- リアルボーナス: 約60枚。
- ART「ギャラクシーツアー」: 1セット40G、シナリオ継続+セットストック型、平均継続率約83%との解析あり。
- CZ「歌姫チャンス」: 10G+α、ART期待度約35%。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: オオサンBONUS / CZ「歌姫チャンス」 / ART間555GでART当選。
- CZ当選でも天井ゲーム数がリセットされるため、データカウンターより液晶内部ゲーム数が基準。
- CZはシナリオ/ランク管理を採用。通常時全シナリオ詳細はSCOPE_EXCLUDED。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_CORE_RESET_CONTRACT_WITH_SCENARIO_GAP
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 天井ゲーム数: RESET。期待値見える化、後年整理資料で直接確認。
- 液晶表示ゲーム数: 0Gへクリア。
- 朝一ステージ: ランカの部屋/ランカ休日系表記。資料上の名称揺れがあるが同系統の初期ステージとして扱う。
- CZシナリオ: 当時解析で「調査中」。十分な再探索後も設定変更時の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の短縮天井、朝一専用CZランク振り分け、専用高確振り分け、専用ART初当たり数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING_RESET_AND_VISIBLE_COUNTER; UNVERIFIED_FOR_CZ_SCENARIO_RESET

### carryOverBehavior
- 据え置き時の本機固有フル契約を「据え置き」と明記した独立比較資料では直接固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
- 純電源OFF→ONでは天井内部ゲーム数とCZシナリオを引き継ぐ解析があるが、据え置き全状態へ機械的に転記しない。
reliability: UNVERIFIED_DIRECT_FOR_FULL_STAY_CONTRACT

### powerCycleBehavior
- 天井内部ゲーム数: CARRYOVER。
- 液晶表示ゲーム数: 0Gへクリアするが、内部ゲーム数はCARRYOVER。
- CZシナリオ: CARRYOVER（期待値見える化）。
- 朝一ステージ: ランカの部屋/ランカ休日系。
- エピソードボーナスの発生順は電源OFF→ON時に再抽選される解析あり。これは設定示唆順序であり、ホール経営用コア状態とは分離して保存。
- その他の内部高確/前兆状態の純電断契約は `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_CEILING_COUNTER_AND_CZ_SCENARIO_CARRYOVER

### gameCounterReset
- 基準: ボーナス/CZ/ART間の内部ゲーム数。
- settingChange: RESET。
- powerCycle: CARRYOVER（液晶表示だけ0G）。
- carryOver: `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 通常天井: 555G。
- 設定変更専用の固定短縮天井/短縮振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING; UNVERIFIED_FOR_RESET_SHORTENING

### modeAfterReset
- CZシナリオは設定変更時 `UNVERIFIED_AFTER_RESEARCH`、純電断時CARRYOVER。
- 朝一専用モード名/専用シナリオ振り分け数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の全CZシナリオ/ランクテーブルはSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE_CARRYOVER; UNVERIFIED_FOR_SETTING_CHANGE

### stateAfterReset
- 表示ステージはランカの部屋/ランカ休日系から開始。
- 設定変更時・据え置き時・純電断時の内部高確/前兆状態の直接比較表は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_VISIBLE_STAGE; UNVERIFIED_FOR_INTERNAL_STATE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更専用の短縮天井、専用高確、専用CZランク、特定G以内の当選率優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 当時解析でも「現状で特に恩恵情報なし」とされる資料あり。
reliability: ANALYSIS_HIGH_FOR_NONE_CONFIRMED

### resetPenalties
- 設定変更により前日の天井進捗は消去される。
- その他の設定変更専用不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetDetection
- 設定変更・純電断とも液晶G数は0G表示となるため、液晶0Gだけでは判別不可。
- 純電断では内部天井G数を引き継ぐため、前日G数を把握していれば当日の天井到達挙動が据え置き/変更推測材料になり得る。
- CZシナリオは純電断で引継ぐが設定変更時契約が未判明のため、朝一シナリオだけを変更確定材料にはしない。
- 本機固有のガックン、初期出目、ランプ等の確定変更判別は検索語/資料系統変更後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_COUNTER_INFERENCE; UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetCeiling: 555G（通常天井と同じ。専用短縮値なし確認）
- settingChangeDisplayedGame: 0G
- powerCycleDisplayedGame: 0G
- powerCycleInternalGame: CARRYOVER
- resetStage: ランカの部屋/ランカ休日系
- powerCycleCzScenario: CARRYOVER
- settingChangeCzScenario: UNVERIFIED_AFTER_RESEARCH
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- releaseDateは2017-05-01表記と2017-05-08表記が併存するが、複数資料が「5/8導入・一部地域5/1」と明示するため、単純CONFLICTではなく地域先行/本導入の定義差として分離した。
- 設定2機械割は97.1%と98.1%が競合。P-WORLD、パチスロデータ、5号機クロニクル等の98.1%系列をcanonicalとし、97.1%もconflictsへ保持。
- 5号機クロニクルの同機種欄にはBIG/REGやART名称など別世代マクロス由来とみられる明白な混線情報があるため、機械割のクロスチェック以外は採用しない。
- ART純増1.7枚/Gとボーナス込み2.0枚/Gは定義差として分離。

## conflicts
- RELEASE_DATE_DEFINITION: 2017-05-01 regional early rollout vs 2017-05-08 main/nationwide rollout. canonical=2017-05-08, regionalEarlyReleaseDate=2017-05-01.
- SETTING2_PAYOUT: 97.1% (期待値見える化/一部整理) vs 98.1% (P-WORLD/パチスロデータ/5号機クロニクル等). canonical=98.1%, conflict retained.

## missingFields
- settingChange CZ scenario contract: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior full direct contract: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH
- internal high/low state reset contract: UNVERIFIED_AFTER_RESEARCH
- machine-specific gakkun/physical reset detection: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-09
1. SANKYOオンライン博物館 — パチスロ マクロスフロンティア3
   - https://www.sankyo-fever.jp/collection/689/
   - 公式導入年月、販売名、公式機種紹介、ART基本性能。
2. 鹿児島県公報 平成29年3月14日 第3296号
   - https://dl.ndl.go.jp/view/prepareDownload?contentNo=1&itemId=info%3Andljp%2Fpid%2F11193443
   - 型式名、メーカー、検定番号6S1768。
3. パチナビ — パチスロ マクロスフロンティア3
   - https://pachinavi.net/machines/macross-frontier-3/
   - 2017-05-08導入（関東圏など5/1）、型式/検定、設定別ART/CZ/機械割、34G/50枚。
4. K-Navi — パチスロ マクロスフロンティア3
   - https://p-kn.com/slot/2751/
   - ホール導入開始2017-05-08。
5. P-WORLD — パチスロ マクロスフロンティア3
   - https://www.p-world.co.jp/machine/database/8322
   - 設定別ART/CZ/機械割、ボーナス約60枚、ART40G、純増、天井、型式/検定。
6. パチビー — パチスロ マクロスフロンティア3
   - https://www.pachibee.jp/machines/about/217040004
   - 2017-05-01表記、ART純増/ボーナス込み、ボーナス約60枚、ART基本構造。
7. ちょんぼりすた — マクロスフロンティア3
   - https://chonborista.com/slot/sankyo-slot/34668/
   - 2017-05-08（一部地域1日）、天井、朝一比較、液晶G、電断、初期ステージ。
8. 期待値見える化 — マクロス3 天井期待値・朝一リセット解析
   - https://slotjin.com/zone/macross3/
   - 設定変更天井RESET、純電断CARRYOVER、液晶0G、CZシナリオ電断引継ぎ、設定変更時シナリオ調査中、34G/50枚、設定2機械割97.1%系。
9. パチスロデータ — マクロスフロンティア3解析
   - https://pachislo-data.com/sankyo/34134
   - 2017-05-08（一部5/1）、機械割98.1%系、ART/CZ、ベース、天井、朝一恩恵なし確認。
10. スロがち.COM — マクロスフロンティア3
   - https://slogati.com/macross-f3/
   - 設定変更天井RESET、電源入切天井CARRYOVER、初期ステージ、基本性能。
