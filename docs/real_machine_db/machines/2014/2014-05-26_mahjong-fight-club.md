# 麻雀格闘倶楽部

machineName: 麻雀格闘倶楽部
formalModelName: 麻雀格闘倶楽部KK
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
manufacturer: KPE
releaseDate: 2014-05-26
releaseDatePrecision: exact_nationwide_start
generation: 5号機
systemType: ART / 周期抽選 / CZ
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- K-Naviの2014年5月全国一斉導入カレンダーで **2014-05-26** 導入開始群を確認。
- 2014-04-22のグリーンべると記事は、KPE・高砂電器販売が4月17日に発表会を開催し、納品を5月25日から開始すると報道。全国ホール導入日のキーはK-Naviの2014-05-26を採用。
- 2014-02-24の検定通過記事で型式名 **麻雀格闘倶楽部KK** を確認。
- 検定番号は、型式名・KPE・検定通過日・シリーズ名を組み替えて再探索したが今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 104.5% |
| 5 | 108.1% |
| 6 | 113.2% |

- 2014年当時の解析記事で設定1〜6を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「格闘倶楽部RUSH」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/226.3 |
| 2 | 1/193.9 |
| 3 | 1/219.0 |
| 4 | 1/179.3 |
| 5 | 1/200.8 |
| 6 | 1/161.6 |

- 複数当時攻略資料で一致。
- 偶数設定側が軽い箇所を含む非単調系列なので、設定順を勝手に補間・平滑化しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30.0G/50枚**（設定1・パチマガスロマガ独自調査値）。
- confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART「格闘倶楽部RUSH」: **純増約2.0枚/G**。
- 2014-04-22グリーンべると当時記事、パチマガスロマガ、複数攻略資料で整合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART初期ゲーム数: **30〜480G**。
- 和了時の役に応じて初期G数を決定し、親番で和了した場合は子より基本G数が優遇される。
- 黄龍RUSH、真龍CLIMAX等は上乗せ特化要素だが、実機完全再現用の詳細抽選値は本DBの収集対象外。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は1周期 **約30G+α** の周期抽選が主軸。
- 通常対局、特訓、バカンス、役満チャンス、天空ステージ、昇龍チャレンジ等からARTを目指す。
- 最大33周期でART確定。
- 5 / 11 / 22周期は天井候補として選ばれやすいと当時解析で確認。
- ART初期G数は30〜480G。

## ceiling

- 最大天井: **33周期**。1周期約30G+αのため、ゲーム数では概ね約990G前後の目安として扱われるが、固定990G天井とは扱わない。
- 33周期到達でART確定。
- 5 / 11 / 22周期も周期天井候補として選ばれやすい。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井リセット**。
- 周期数は **周期0へリセット**。
- 液晶は対局開始画面（富士山）から開始。
- 設定変更後の周期0開始について、当時解析は「特に恩恵なし」と評価しており、リセット専用の強い短縮恩恵は確認されない。
- confidence: ANALYSIS_HIGH_CONTEMPORARY_DIRECT

### carryOverBehavior

- 据え置き時は **天井を引き継ぐ**。
- **内部周期数も引き継ぐ**。
- ただし液晶ステージは1周期目の富士山表示に戻るため、見た目のステージだけでは設定変更/据え置きを判別できない。
- confidence: ANALYSIS_HIGH_CONTEMPORARY_DIRECT

### powerCycleBehavior

- 当時解析表では「電源OFF→ON（据え置き）」として、**天井引継ぎ / 内部周期数引継ぎ / 液晶は富士山へ戻る**と明記。
- 設定変更を伴わない単純電源再投入の挙動として採用。
- confidence: ANALYSIS_HIGH_CONTEMPORARY_DIRECT

### gameCounterReset

- 設定変更: **周期数を0へリセット / 天井リセット**。
- 据え置き・電源OFF→ONのみ: **内部周期数・天井を引き継ぐ**。
- confidence: ANALYSIS_HIGH_CONTEMPORARY_DIRECT

### ceilingAfterReset

- リセット後は周期0スタート。
- 通常最大33周期という構造自体は維持され、設定変更専用の短縮天井数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 当時実践値32件では、リセット後に目立った早当たり特徴は見られなかったとの記録あり。ただしサンプルが小さいため確率値として一般化しない。

### modeAfterReset

- 本機はゲーム数モードより周期管理が主軸。
- 設定変更時は周期進捗を0へ戻す。
- 設定変更時だけ適用される専用周期モード/天国モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- ツモ運・翻数アップ等の通常内部状態について、設定変更/据え置き/純電断時の包括的再抽選契約を安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 周期カウンタ契約とは分離して扱う。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後周期0開始。
- ただし、当時解析ではリセット専用の明確な恩恵は確認されず、実践値でも目立つ優遇は観測されなかった。
- **NO_MAJOR_RESET_BENEFIT_CONFIRMED**。

### resetPenalties

- 前日周期進捗・天井進捗を設定変更で消去するため、深いハマリ台の宵越し狙いを無効化する点が店側のリセット効果。
- それ以外の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 液晶は設定変更でも据え置き電源再投入でも富士山へ戻るため、**朝一液晶ステージだけでは変更判別不可**。
- 据え置き時は内部周期だけ引き継ぐため、前日進捗と当日周期挙動の対応が推測材料になり得るが、確定判別ではない。
- 本機固有のリールガックン確定契約は、表記揺れ・型式名・KPE・朝一・据え置き・ガックンを組み替えて再探索しても **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時: **周期0スタート**。
- 設定変更後の専用モード振り分け・短縮天井G数・朝一当選率の高信頼公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 2014-06-17時点の当時実践コメントでリセット後サンプル **32件**、目立つ特徴なしとの記録があるが、母数が小さいため性能値には採用しない。

### publicMorningNumbers

- cycleAfterSettingChange: **0周期**。
- carryOverCycleOnPowerCycleWithoutSettingChange: **YES**。
- resetSpecificHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。

## resetBehavior 再探索メモ

「麻雀格闘倶楽部 / マージャンファイトクラブ / 麻雀格闘倶楽部KK / KPE」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 宵越し / 天井 / 周期 / ガックン / モード」を組み合わせ、2014年当時攻略記事、パチマガスロマガ、K-Navi、グリーンべると、古いDB・回顧資料を横断。周期カウンタと液晶表示の設定変更/据え置き差は当時資料で直接固定できた。内部ツモ運等の詳細状態・ガックンについては十分な再探索後も固定できなかったため推測しない。

## conflicts / safeguards

- 「約990G」は33周期×約30Gの目安であり、固定ゲーム数天井値とは扱わない。
- 2016年「麻雀格闘倶楽部2」、2019年「参」、2021年「真」、2023年スマスロ「覚醒」のresetBehaviorを初代へ混入しない。
- 後継機の1周期約40G・33周期約1320G等を初代へ転記しない。

## sources

取得日: **2026-09-07**

1. グリーンべると — 「麻雀格闘倶楽部」がパチスロと融合（2014-04-22、発表会/納品/ART純増/初期G数）
   - https://web-greenbelt.jp/00006183/
2. K-Navi — 麻雀格闘倶楽部（機種攻略ページ群、2014-05-26導入群/各種解析）
   - https://p-kn.com/slot/2054/
3. パチマガスロマガ — 麻雀格闘倶楽部（KPE/2014年6月、ART純増/初期G数）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/37/a.php
4. パチマガスロマガ — 小役確率（50枚あたり約30.0G）
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/37/c-1.php
5. 期待値見える化 — 麻雀格闘倶楽部 周期天井・朝一リセット解析（2014-06-14、更新2018-05-30）
   - https://slotjin.com/tenjou/mahjongfightclub-chance/
6. スロット解析攻略 — 麻雀格闘倶楽部 天井スペック解析攻略（2014-05-25/26）
   - https://www.slopachi-quest.com/article/majang-fight-club/
7. p-media — 麻雀格闘倶楽部（KPE）検定通過（2014-02-24、型式名 麻雀格闘倶楽部KK）
   - https://p-media.info/%E9%BA%BB%E9%9B%80%E6%A0%BC%E9%97%98%E5%80%B6%E6%A5%BD%E9%83%A8%EF%BC%88kpe%EF%BC%89%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%EF%BC%8F%E3%83%A6%E3%83%BC%E3%82%B6/
8. Amusement Japan — 2023年回顧記事（初代は2014年5月導入・純増2.0枚ARTと確認）
   - https://amusement-japan.co.jp/article/detail/10003700/

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset detailed internal state: UNVERIFIED_AFTER_RESEARCH
- resetDetection reel gakkun exact contract: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- none for primary performance series in this record.

## confidence

- identity/release: INDUSTRY_PLUS_ANALYSIS_HIGH
- core performance: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_SINGLE_DIRECT
- reset counter/power behavior: ANALYSIS_HIGH_CONTEMPORARY_DIRECT
- detailed internal reset state: UNVERIFIED_AFTER_RESEARCH
