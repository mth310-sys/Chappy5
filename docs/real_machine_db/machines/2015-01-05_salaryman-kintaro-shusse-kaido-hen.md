# サラリーマン金太郎 出世回胴編

machineName: サラリーマン金太郎 出世回胴編
manufacturer: ロデオ
releaseDate: 2015-01-05
releaseDatePrecision: multi_source_hall_start
releaseDateNote: HAZUSE・K-Naviで2015-01-05ホール導入開始を確認。グリーンべるとは2014-11-20発表時に2015年1月上旬から納品予定と報道しており、納品予定とホール導入日を分離。
generation: 5号機
systemType: AT / 疑似BIG+ゲーム数上乗せAT
modelName: サラリーマン金太郎 出世回胴編XF
inspectionNumber: 4S0784
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- ロデオ製。サミーネットワークス公式リリースでも株式会社ロデオの機種として確認。
- HAZUSEで型式名 **サラリーマン金太郎 出世回胴編XF**、検定番号 **4S0784**、導入開始日 **2015-01-05** を直接確認。
- K-Naviでもホール導入開始2015-01-05を照合。
- confidence: OFFICIAL_FOR_MANUFACTURER_SERIES / ANALYSIS_HIGH_MULTI_SOURCE_FOR_RELEASE / ANALYSIS_HIGH_FOR_MODEL_AND_INSPECTION

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.6% |
| 3 | 100.1% |
| 4 | 104.8% |
| 5 | 108.5% |
| 6 | 115.1% |

- HAZUSEとpacnkで同一系列を確認。後年回顧資料でも設定6 115.1%を公表値として照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIGまたはATの通常時初当たり合算

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/341.8 |
| 2 | 1/332.4 |
| 3 | 1/322.6 |
| 4 | 1/280.5 |
| 5 | 1/254.3 |
| 6 | 1/233.2 |

- pacnk・期待値見える化等で一致。
- 初当たり時のBIG:KC比率は概ね1:1。K-Naviでは設定1/2が50:50、設定3～6は49:51 / 48:52 / 47:53 / 46:54。
- HAZUSEには別定義として通常時BIG出現率1/684.7～1/501.8、AT直当たり1/682.5～1/435.7、BIG経由を含むKCトータル初当たり1/471.5～1/313.3が掲載されている。定義を混ぜず別系列として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30.7G / 50枚**。
- 旧パチマガスロマガとHAZUSEで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「金太郎チャンス」: **純増約2.8枚/G**。
- グリーンべると、P-WORLD、旧パチマガスロマガで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- AT「金太郎チャンス」: **1セット50G+α**、ゲーム数上乗せ型。
- 通常時BIG: ベルナビ **20回 or 50回**。
- AT中BIG: ベルナビ10回消化後、5回1セットのEXBBへ移行し50～90%ループ。
- 基本性能の物差しとして必要な範囲のみ保持し、AT中の細かな上乗せ抽選は収集対象外。

## modeSpecificMinimumData

- 通常時は規定ゲーム数とレア役でBIGまたはKCを抽選。
- 通常モードの天井候補は **600G / 900G**。通常時は最大900GでBIGまたはAT当選。
- 通常モード600G選択率: 設定1 2% / 2 4% / 3 5% / 4 10% / 5 20% / 6 25%。残りは900G。
- 天国モードは50G以内の初当たりに対応する資料あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: VERIFIED_MULTI_SOURCE_STRONG_RESET_ADVANTAGE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は天井までの内部ゲーム数をリセット。
- **必ずリセットモードへ移行**。
- 内部状態を再抽選。
- 液晶ステージはランダム選択。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は前日最終ステージを引き継ぐという解析を確認。
- 宵越し天井狙いを明示する当時資料と、前日130G+当日770Gで据え置き天井到達した当時実戦報告があり、天井ゲーム数の持ち越しを支持。
- ただし内部状態の全要素についての完全な据え置き契約までは固定しない。
- confidence: ANALYSIS_HIGH_FOR_STAGE / ANALYSIS_SUPPORT_FOR_GAME_COUNTER_CARRYOVER

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでは、少なくとも液晶ステージは引き継ぐとする本機専用解析を確認。
- 天井内部G数・通常A/B/高確状態までを純電断単独で直接対照した資料は今回固定できず、その部分は `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_SINGLE_FOR_STAGE / UNVERIFIED_FOR_FULL_INTERNAL_CONTRACT

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き時: **CARRYOVER_SUPPORTED**（宵越し天井資料・当時実戦報告）。
- power cycle only: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更後リセットモードでは **600G 50% / 900G 50%**（全設定共通）。
- 通常モードの低設定では600G選択が少ないため、設定変更で明確な天井優遇が生じる。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- 設定変更後は **リセットモード確定**。
- リセットモードは初回BIGまたはAT当選までの朝一専用優遇モードとして扱う資料を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset

設定変更後の内部状態振り分け（全設定共通）:

| 状態 | 振り分け |
|---|---:|
| 通常A | 40% |
| 通常B | 50% |
| 高確A | 10% |

- さらにリセットモード中は通常A→通常B、高確移行、初当たり抽選が通常モードより優遇される解析あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- リセットモード中のBIG/AT初当たりは **全設定共通1/215.5**。
- 天井600G選択率が50%へ上昇。
- 内部状態を40/50/10%で再抽選し、通常時より高確移行・初当たりが優遇。
- 朝一0Gから狙えるほど強いリセット恩恵として当時解析で扱われた。

### resetPenalties

- 設定変更専用の明示的な冷遇・不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- **リールガックン判別が有効**（ホール側の対策がない場合）。パチ&スロ必勝本でも本機のガックン変判を明記。
- 設定変更時はステージランダム、据え置き時は前日最終ステージ引継ぎとする解析があり、前日ステージを記録できれば変更推測材料。
- 高確確定演出を朝一に確認した場合も変更推測材料。設定変更後は10%で高確Aスタート。
- ガックン・ステージともホール側の対策や回しによる攪乱が可能なため、単独で絶対判別とはしない。

### numericResetData

- リセットモード初当たり: **1/215.5**（全設定共通）。
- リセット後天井: **600G 50% / 900G 50%**。
- リセット後内部状態: **通常A40% / 通常B50% / 高確A10%**。
- 実戦参考値: 新台初日1回目740件の集計で580～600G帯に約半数が集中したという当時集計あり。解析値と実戦値を混ぜず参考系列として保持。

### publicMorningNumbers

- **1/215.5**: リセットモード中初当たり。
- **600G 50% / 900G 50%**: リセット後天井振り分け。
- **40% / 50% / 10%**: リセット後通常A / 通常B / 高確A。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `サラリーマン金太郎 出世回胴編 / サラ金 出世回胴編 / 出世回胴編XF / ロデオ / Sammy系筐体`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / 600G / 900G / モード / 状態 / ガックン / ステージ / 50枚 / ベース`。
- 資料系統: サミーネットワークス公式、グリーンべると、HAZUSE、K-Navi、P-WORLD、旧パチマガスロマガ、パチ&スロ必勝本、当時天井/リセット解析、後年機種DB。
- 純電源OFF→ONについては液晶ステージ引継ぎは直接記述を取得したが、内部天井G・状態まで一括で引継ぐとは推定していない。

## sources

取得日: 2026-09-07

1. サミーネットワークス公式: https://www.sammy-net.jp/news/2015/02/-777townnet-2.html
2. グリーンべると発表記事: https://web-greenbelt.jp/00007412/
3. HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S0784/
4. HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0784/genre/201/
5. K-Navi 機種TOP: https://p-kn.com/slot/2169/
6. K-Navi 初当たり抽選: https://p-kn.com/slot/2169/52736/
7. P-WORLD: https://www.p-world.co.jp/machine/database/7580
8. 旧パチマガスロマガ 概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/63/a.php
9. 旧パチマガスロマガ 小役/50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/63/c.php
10. 旧パチマガスロマガ 初当たり: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/63/01-2.php
11. 期待値見える化 朝一リセット: https://slotjin.com/slot/kintarou-reset/
12. 期待値見える化 天井/モード: https://slotjin.com/zone/kintarou/
13. 2-9伝説 天井/設定変更: https://2-9densetsu.com/kintarou/
14. イチカツ 天井振り分け: https://ichikatsu.com/kintarou-tenjoufuriwake/
15. イチカツ 朝一設定変更: https://ichikatsu.com/kintarou-asaiti/
16. パチ&スロ必勝本 設定変更判別特集: https://p.hisshobon.jp/vpage/1272/1
17. パチ&スロ必勝本 狙いドコロ: https://p.hisshobon.jp/machine/2488/1/49951
18. pacnk 設定判別/スペック: https://pacnk.com/slot/tools/sh_kintaro.html
19. スロパチクエスト 天井: https://www.slopachi-quest.com/article/sarakin-kitaichi/

## missingFields

- 純電源OFF→ON時の内部天井G・内部状態の完全契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の全内部状態契約: UNVERIFIED_AFTER_RESEARCH

## conflicts

- 今回、物差しコアおよび主要リセット数値に安全に固定すべき数値競合は確認なし。
- HAZUSEの「KCトータル初当たり」はBIG経由込みのAT初当たりであり、通常時BIG/AT合算1/341.8～1/233.2とは定義が異なるためCONFLICTではなく別系列。
