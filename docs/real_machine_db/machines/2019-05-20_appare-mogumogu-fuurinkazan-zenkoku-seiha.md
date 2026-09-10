# 天晴！モグモグ風林火山〜全国制覇版〜

recordNo: 1284
machineName: 天晴！モグモグ風林火山〜全国制覇版〜
manufacturer: ネット
formalModel: S天晴！モグモグ風林火山NI
certificationNumber: 9S0064
releaseDate: 2019-05-20
generation: 6号機
systemType: AT / 疑似ボーナス / 技術介入 / 6段階設定

## payoutRateBySetting

| 設定 | 市場想定 | 完全攻略時 |
|---|---:|---:|
| 1 | 97.8% | 100.8% |
| 2 | 98.2% | 101.2% |
| 3 | 99.0% | 102.2% |
| 4 | 99.9% | 103.0% |
| 5 | 101.0% | 104.1% |
| 6 | 103.0% | 106.3% |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 初当たり構造

| 設定 | 全国制覇 | 再起ノ刻 | 全国制覇+再起ノ刻合算 |
|---|---:|---:|---:|
| 1 | 1/817.7 | 1/1195.8 | 1/485.6 |
| 2 | 1/795.3 | 1/1228.0 | 1/482.7 |
| 3 | 1/753.3 | 1/1292.2 | 1/475.9 |
| 4 | 1/707.1 | 1/1383.9 | 1/468.0 |
| 5 | 1/646.4 | 1/1540.6 | 1/455.4 |
| 6 | 1/560.1 | 1/1940.8 | 1/434.6 |

### 疑似ボーナス出現率

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/181.4 | 1/485.3 | 1/132.1 |
| 2 | 1/180.1 | 1/454.5 | 1/129.0 |
| 3 | 1/174.2 | 1/415.3 | 1/122.7 |
| 4 | 1/169.0 | 1/383.1 | 1/117.3 |
| 5 | 1/163.2 | 1/343.5 | 1/110.6 |
| 6 | 1/152.2 | 1/289.9 | 1/99.8 |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約43.6G/50枚

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナス / AT: 約2.9〜3.0枚/G
- HAZUSE / P-WORLDは約3.0枚/G、複数解析は約2.9枚/G。丸め差として保持し、単純平均しない。

信頼度: INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout

- BIG BONUS: 約150枚+α
- BIGは小役ゲーム40G消化またはJAC2回で終了。リプレイハズシによる技術介入で約15〜35枚の上積み余地。
- REG BONUS: 約46枚
- 全国制覇後は32Gの「天下泰平モード」へ。初回はボーナス1回以上保証、ボーナスループ期待度約86%。
- 全国制覇1回あたりの期待枚数は約1,000枚とメーカー発表/当時業界記事で案内。
- 「再起ノ刻」は決戦ノ刻敗北時に入る15GのAT。

信頼度: OFFICIAL_PRESS_INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は領土獲得を進め、全国制覇で疑似ボーナス初当たり。
- 規定ゲーム数消化時に戦況変化 / 提督来襲 / 合戦突入等を抽選。規定ゲーム数は有利区間突入時に初期値を抽選する解析あり。
- 実戦上の「天井」は規定ゲーム数到達による提督来襲 / 決戦ノ刻。到達=ボーナス確定ではなく、決戦ノ刻敗北時は再起ノ刻へ。
- 天井G数は資料定義に差がある。複数解析は「約500G、最大約580G」、別解析は「平均約432.2G、最大550G（液晶表示）」かつ固定された明確な1点天井ではないと説明。平均化せずCONFLICT保持。
- 再起ノ刻で全国制覇できず終了した場合は有利区間をリセットし、ゲーム数・残り領土数を再初期化する解析あり。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_DIRECT_MULTI_SOURCE_WITH_CEILING_DEFINITION_CONFLICT

- settingChangeBehavior: 設定変更時は天井進行をRESET、内部状態は高確へ。獲得領土とおみくじptは再抽選。実践上の開始ステージは野営ステージとする複数解析あり。
- carryOverBehavior: 「据え置き」を純電源OFF→ONと完全に分離した本機固有の直接契約は今回固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。ただし設定変更なしの電源OFF→ONについては天井・状態・領土・おみくじptの引継ぎが直接確認できる。
- powerCycleBehavior: 電源OFF→ONのみでは天井進行・内部状態・獲得領土・おみくじptをCARRY_OVER。朝一は領土表示が一時「残り？国」、おみくじptが「残り99pt」表示となる解析あり。開始ステージは資料上 `調査中`。
- gameCounterReset: 設定変更=RESET / 純電源OFF→ON=CARRY_OVER。規定ゲーム数は有利区間突入時に初期値を抽選する構造。固定単一G天井として扱わない。
- ceilingAfterReset: 設定変更専用の短縮天井は確認できず `NO_DEDICATED_SHORTENING_CONFIRMED`。設定変更で進行はゼロから再スタート。ただし通常側の到達G定義自体に約500G・最大約580G vs 平均約432.2G・最大550Gの資料差があり `CONFLICT_CEILING_DEFINITION`。
- modeAfterReset: 設定変更時は高確スタート。朝一専用の独立モード名称・専用モード振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更=高確へ / 純電源OFF→ON=前状態CARRY_OVER。領土・おみくじptは設定変更時再抽選、純電断時引継ぎ。
- advantageousSectionReset: 設定変更では通常進行値が初期化され、有利区間開始時に初期領土を抽選。有利区間終了契機として再起ノ刻失敗後、天下泰平モード終了後等を確認。純電源OFF→ONは主要進行値を引き継ぐ。設定変更直後の有利区間ランプだけで変更確定とする本機固有契約は固定できず。
- resetBenefits: 高確スタート。さらに有利区間開始時に初期領土抽選があり、低確率ながら1国以上獲得済みで始まる可能性がある。設定変更専用ボーナス確定・専用短縮天井は確認なし。
- resetPenalties: 設定変更で前日の天井進行、獲得領土、おみくじptを失う。前日進行が育っている台では据え置き/純電断より朝一狙い価値が下がり得る。
- resetDetection: リセット/電源ON-OFFいずれも朝一は「残り？国」から始まり、数G後に残り領土数が表示される。前日領土数を把握していれば表示後の一致/不一致が変更推測材料。純電断ではおみくじpt表示が一時99ptになるため表示だけで内部pt消失とは判断できない。本機固有ガックン発生率・確定条件は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 有利区間開始時の初期領土振り分けは公開値あり。設定1: 0国99.66%, 1国0.02%, 2国0.02%, 3国0.02%, 4〜6国各0.02%, 7国0.20%。設定2: 99.54 / 0.10 / 0.05 / 0.05 / 各0.02 / 0.20%。設定3: 99.34 / 0.20 / 0.10 / 0.10 / 各0.02 / 0.20%。設定4: 98.56 / 0.78 / 0.20 / 0.20 / 各0.02 / 0.20%。設定5: 97.39 / 1.56 / 0.39 / 0.39 / 各0.02 / 0.20%。設定6: 91.92 / 3.91 / 2.34 / 1.56 / 各0.02 / 0.20%。初期おみくじpt振り分けは98pt 6.25%, 88pt 50.00%, 78pt 25.00%, 68pt 6.25%, 58pt 6.25%, 48pt 6.25%とする解析あり。ただしこれらは設定変更専用だけでなく有利区間開始時共通の初期値として扱う。

### resetBehavior 再探索メモ

「天晴！モグモグ風林火山 / 天晴モグモグ / モグモグ全国制覇 / S天晴！モグモグ風林火山NI / 9S0064 / NET」に「設定変更 / リセット / 朝一 / 据え置き / 電源ON OFF / 電断 / 天井 / 規定G / 高確 / 領土 / おみくじpt / 有利区間 / ランプ / ガックン」を組み合わせ、メーカー発表、HAZUSE、パチマガスロマガ、P-WORLD、当時解析、後年整理資料を横断。設定変更と純電断の主要契約は複数資料で一致。「据え置き」単独条件の直接表記、ガックン確定条件は十分な再探索後も固定できなかったため推測補完しない。

## qualityNotes / conflicts

- 導入日はHAZUSE、複数解析、導入情報で2019-05-20が一致。メーカーの2019-03-18プレスリリースは「2019年5月下旬より全国導入予定」としており整合する。
- 純増は約2.9枚/Gと約3.0枚/Gの表記差。丸め差として両方保持。
- 天井は `CONFLICT_CEILING_DEFINITION_APPROX_500_MAX_580_VS_AVG_432_2_MAX_550`。これは単純な数値競合というより、ランダム規定G・前兆・液晶カウンター基準の定義差が大きい。単一値へ平均化しない。
- 一部資料は「天井約500G」と簡略表記するが、到達時は提督来襲/決戦ノ刻でありボーナス当選そのものを保証しない。

## sources

取得日: 2026-09-11

1. NETプレスリリース（Dream News配信）— ネット・パチスロ6号機第一弾「天晴！モグモグ風林火山 全国制覇版」発売決定！
   - https://www.dreamnews.jp/press/0000191141/
   - 2019-03-18。NET6号機第一弾、2019年5月下旬導入予定、全国制覇＝初当たり、初当たり約1,000枚という製品訴求。
   - reliability: OFFICIAL_PRESS
2. グリーンべると — 「モグモグ」最新作は初当たり1回で約1,000枚！
   - https://web-greenbelt.jp/00011174/
   - 2019-03-19発表会記事。6号機第一弾、天下泰平32G、約86%、BIG約150枚+技術介入最大35枚上積み、初当たり約1,000枚。
   - reliability: INDUSTRY_CONTEMPORARY
3. HAZUSE — 天晴！モグモグ風林火山 全国制覇版
   - https://hazuse.com/machine/pachislot/9S0064/
   - 型式 `S天晴！モグモグ風林火山NI`、検定番号 `9S0064`、2019-05-20、設定別機械割/完全攻略、疑似ボーナス仕様。
   - reliability: ANALYSIS_DATABASE_HIGH
4. HAZUSE — AT/ART / 初打講座
   - https://hazuse.com/machine/pachislot/9S0064/genre/209/
   - https://hazuse.com/machine/pachislot/9S0064/genre/203/
   - 規定G・有利区間、天下泰平モード、再起ノ刻、有利区間リセット、基本獲得性能。
   - reliability: ANALYSIS_DATABASE_HIGH
5. パチマガスロマガ — ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/176/h.php
   - 設定別BIG/REG/合算、市場想定/完全攻略機械割。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 初当たり確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/176/h-1.php
   - 全国制覇、再起ノ刻、合算の設定別初当たり。
   - reliability: ANALYSIS_HIGH
7. おスロおパチおいでやす — 天井・朝一リセット
   - https://oslo-opachi.com/2019/05/22/mogumogu-tennjou/
   - 設定変更/電源ON-OFFの天井・状態・領土・おみくじpt、野営ステージ、初期領土振り分け、約43.6G/50枚、約2.9枚/G。
   - reliability: ANALYSIS_HIGH
8. スロットセブン — 設定判別・朝一解析
   - https://slot-seven.com/apparemogumoguhurinkazan-settei/
   - 設定変更時と電源ON/OFF時の天井・状態・領土・おみくじpt挙動を別系統で照合。
   - reliability: ANALYSIS_SECONDARY
9. すろぱちくえすと — 天井狙い・有利区間
   - https://www.slopachi-quest.com/article/mogumogu-zennkokuseiha-tennjou/
   - 朝一領土表示、初期おみくじpt振り分け、有利区間ランプ、平均約432.2G/最大550Gとする天井説明。
   - reliability: ANALYSIS_HIGH
10. すろぱちくえすと — 設定判別
   - https://www.slopachi-quest.com/article/mogumoguhuurin-zennkokuseiha/
   - 2019-05-20、43.6G/50枚、約2.9枚/G、BIG約150枚、REG約46枚。
   - reliability: ANALYSIS_HIGH
11. P-WORLD — 天晴!モグモグ風林火山 全国制覇版
   - https://www.p-world.co.jp/machine/database/8919
   - 6号機AT、疑似ボーナス、約3.0枚/G、BIG約150枚+α、REG約46枚。
   - reliability: MACHINE_DATABASE_HIGH

## missingFields

- 据え置き条件を純電源OFF→ONと完全に分離した本機固有の直接契約: UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION
- 本機固有ガックン発生率 / 確定条件: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の独立モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## status

COMPLETE_CORE_RESET_V07_WITH_CONFLICT
