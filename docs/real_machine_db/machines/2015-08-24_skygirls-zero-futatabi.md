# スカイガールズ ～ゼロ、ふたたび～

machineName: スカイガールズ ～ゼロ、ふたたび～
manufacturer: 高砂電器産業（TAKASAGO / KPE系）
releaseDate: 2015-08-24
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: KONAMI公式系当時ブログが2015-08-24をスタートに順次全国ホール登場予定と明記。HAZUSEも導入開始2015-08-24。後年二次資料に2015-09-07（一部8/24）表記があるため、全国導入起点08-24をcanonicalとし地域展開差を分離。
generation: 5号機
systemType: A+ART / ボーナス+ART
formalModelName: スカイガールズ2RA
inspectionNumber: 5S0360
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **高砂電器産業**。KPE・高砂販売の発表資料系統および高砂表記をcanonicalとする。
- canonical導入日: **2015-08-24**。
- 型式名: **スカイガールズ2RA**。
- 検定番号: **5S0360**。
- KONAMI公式アーカイブは2015年8月稼働開始、当時公式系ブログは08-24開始、HAZUSEは08-24導入開始で一致。
- confidence: OFFICIAL_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 97.5% |
| 3 | 99.7% |
| 4 | 104.1% |
| 5 | 107.0% |
| 6 | 118.7% |

- HAZUSE、パチマガスロマガ、複数解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | ボーナス合算 | ART初当たり | ART+ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/268.6 | 1/573.6 | 1/182.9 |
| 2 | 1/262.1 | 1/547.6 | 1/177.3 |
| 3 | 1/256.0 | 1/490.7 | 1/168.2 |
| 4 | 1/244.5 | 1/429.0 | 1/155.7 |
| 5 | 1/237.5 | 1/389.8 | 1/147.6 |
| 6 | 1/227.6 | 1/353.2 | 1/138.4 |

- HAZUSE/パチマガスロマガ/後年解析で照合。
- BIG合算は1/394.8～1/368.2、REGは1/840.2～1/595.8。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **32.5G/50枚**。
- ちょんぼりすた基本スペック掲載値。
- 他独立資料で同一条件の明示値を十分照合できなかったため confidence: ANALYSIS_SINGLE。

## netIncrease

- ART「SONIC DIVE ZONE」: **約1.5枚/G**。
- ニッカンアミューズメント業界記事、P-WORLD、パチマガスロマガ、複数解析で一致。
- confidence: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- SKY BIG / BIG: **最大210枚**（解析では210枚表記）。
- REG: **最大約56枚**。
- ART「SONIC DIVE ZONE」: **1セット30G + LOCK等の上乗せG数**。
- P-WORLD・パチマガスロマガ・業界記事で照合。

## modeSpecificMinimumData

- 通常天井: **ボーナス間995G**。
- 天井恩恵: **ART確定 + ライジングモード優遇**。
- 天井到達ARTのライジングモード振り分け: SONIC 10% / A 16% / B 17% / C 18% / D 19% / E 20%。これは通常時全モード移行表ではなく、天井恩恵比較用数値として保持。
- ART当選ではボーナス間995G天井カウンタはリセットされない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は**ボーナス間995G天井カウンタをリセット**。
- 内部状態は**再抽選**。
- 開始ステージは**横須賀市街地**。
- さらに設定変更後専用の規定G数ART抽選が有効となり、**通常間664G以内にART当選確定**。
- この設定変更時664G ART保証と通常ボーナス間995G天井は別カウンタ/別契約であり、ボーナスを引かなければ995G天井も有効。

### carryOverBehavior

- 据え置き時は設定変更専用664G ART保証を新規発動しない。
- 当時攻略上、前日からのボーナス間995G天井進捗を宵越し対象として扱う。
- 664G+前兆を超えてART非当選なら据え置き確定とする解析があり、設定変更/据え置き判別に直接利用可能。
- 内部状態の据え置き営業日跨ぎについて本機固有の独立明記は純電断資料より弱いため、純電断契約と完全同義にはしない。

### powerCycleBehavior

- 設定変更を伴わない**電源OFF→ON**では、**天井を引継ぎ、内部状態も引継ぎ**。
- 開始ステージは資料表上横須賀市街地扱い。
- confidence: ANALYSIS_HIGH（設定変更対照表による直接記載）。

### gameCounterReset

- 設定変更: **RESET**（ボーナス間995G）。
- 電源OFF→ONのみ: **CARRYOVER**。
- 据え置き: **CARRYOVER**として朝一攻略上扱われる。

### ceilingAfterReset

- 通常ボーナス間天井: **995G**。
- 設定変更後は別系統のART規定G数保証により、**通常間664G以内にART確定**。
- したがって朝一客視点では実質的なART上限が664Gへ短縮されるが、995Gボーナス間天井そのものが664Gへ置換されるわけではない。

### modeAfterReset

- ART中のライジングモードについて、設定変更時664G保証そのものに**ライジングモード優遇なし**。
- 設定変更時専用の通常A/B等の全モード再抽選表は本機の主要構造として確認せず。
- ART中ライジングモード通常移行の全テーブルは物差し用途外のため収集しない。

### stateAfterReset

- 設定変更: **内部状態再抽選**。
- 電源OFF→ONのみ: **内部状態引継ぎ**。
- 設定変更時の低確/高確/超高確の具体的振り分けは、機種名・型式・メーカーと「設定変更/リセット/朝一/状態/高確/超高確」を変えて再探索後も安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 最大の朝一恩恵は**設定変更後、通常間664G以内ART確定**。
- 特に100～164GのART当選比率が高く、朝一ゾーン狙いを発生させる。
- 通常995G天井もボーナス非当選なら並存して有効。

### resetPenalties

- 設定変更で前日のボーナス間995Gハマリ進捗は消失するため、宵越し天井価値を失う。
- 設定変更時664G ARTではライジングモード優遇なしとされ、通常995G天井到達時のモード優遇とは恩恵定義が異なる。

### resetDetection

- **664G+前兆を超えてART非当選なら据え置き確定**とする当時解析あり。
- 朝一ガックンによる本機固有の確定判別は複数検索後も固定できず、後年朝一資料には「ガックン判別不可」とする整理があるため `NONE_CONFIRMED_AFTER_RESEARCH`。
- 開始ステージだけでは設定変更確定材料として扱わない。

### numericResetData

設定変更時の規定G数ART抽選:

| ゲーム数 | 公開値 |
|---|---:|
| 100～164G | 20.00% |
| 200～264G | 2.00% |
| 400～464G | 2.04% |
| 600～664G | 100.00%（この帯までに未当選なら664G以内確定） |

- 別解析の振り分け表では 20% / 1.6% / 1.6% / 76.8% と表記される。これは「各帯への最終振り分け」と「各帯到達時のART当選率」の定義差とみられるため平均せず分離保持。
- 設定変更後ART上限: **664G + 前兆**。

## conflicts

1. `RESET_ZONE_DEFINITION_DIFFERENCE`
   - ちょんぼりすた: 100～164G 20% / 200～264G 1.6% / 400～464G 1.6% / 600～664G 76.8%（振り分け表現）。
   - すろぱちくえすと: 100～164G 20.00% / 200～264G 2.00% / 400～464G 2.04% / 600～664G 100.00%（帯別ART当選率表現）。
   - 分母/条件定義が異なるため平均せず双方保存。共通して「設定変更後664G以内ART確定」は一致。
2. `RELEASE_DATE_REGIONAL_ROLLOUT_DIFFERENCE`
   - KONAMI公式系当時告知/HAZUSE: **2015-08-24開始**。
   - ちょんぼりすた: **2015-09-07（一部8/24）**。
   - 全国導入起点として08-24をcanonical、09-07は地域展開差として保持。

## missingFields

- 設定変更時の低確/高確/超高確具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時内部状態の営業日跨ぎを純電断と独立して明記した本機固有資料: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン確定判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. KONAMI公式アーカイブ「スカイガールズ～ゼロ、ふたたび～」 — https://www.konami.com/amusement/psm/archive/ps/2015/skygirls2/
   - 2015年8月稼働開始、5号機ARTを確認。
2. KONAMI公式系当時ブログ — https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150728.html
   - 2015-08-24をスタートに順次全国ホール登場予定を確認。
3. ニッカンアミューズメント（2015-07-10） — https://www.nikkansports.com/amusement/pachinko/news/1504631.html
   - 高砂電器産業製、A+ART、ART約1.5枚/G、1セット30G+上乗せ構造を確認。
4. HAZUSE — https://hazuse.com/machine/pachislot/5S0360/
   - 型式スカイガールズ2RA、検定5S0360、導入開始2015-08-24、設定別ボーナス/機械割、995G天井を確認。
5. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/09/h.php
   - 設定別ボーナス/ART初当たり/PAYOUTを照合。
6. P-WORLD — https://www.p-world.co.jp/machine/database/7790
   - 5号機ART、BIG/SKY BIG最大210枚、REG最大56枚、ART約1.5枚/G、30G+上乗せ構造を照合。
7. ちょんぼりすた — https://chonborista.com/slot/kpe-slot/10358/
   - 32.5G/50枚、995G天井、設定変更/電源OFF→ON対照、664G以内ART、朝一帯振り分け、判別条件を確認。
8. すろぱちくえすと「リセット期待値」 — https://www.slopachi-quest.com/article/sky-girls2-reset/
   - 設定変更時664G ART保証を照合。
9. すろぱちくえすと「朝一ゾーン」 — https://www.slopachi-quest.com/article/skygirls2-resetzone/
   - 100～164G 20%、200～264G 2%、400～464G 2.04%、600～664Gまでに100%の帯別表を確認。
10. 期待値見える化 — https://slotjin.com/zone/skygirls2/
   - 995G天井、設定変更で天井Gリセット、ARTでは995Gカウンタ非リセット、天井時ライジングモード振り分けを照合。
11. 朝一リセット整理資料 — https://sin-surobi.com/tatimawari/20388/
   - ガックン判別不可、リセット後最大664Gを後年整理資料として確認。

## researchNotes

- 「スカイガールズ ～ゼロ、ふたたび～ / スカイガールズ2 / スカガ2 / スカイガールズ2RA / 高砂 / TAKASAGO / KPE」と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井・664G・995G・状態・高確・ガックンを組み替えて再探索。
- 前作「スカイガールズ～よろしく！ゼロ」および2020年6号機「スカイガールズ～ゼロノツバサ～」の朝一契約は流用していない。
- 実機完全再現用の通常時全状態移行・ART中全ライジングモード移行・LOCK詳細抽選は収集対象外。
