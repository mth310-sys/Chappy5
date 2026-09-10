更新日: 2026-09-11

## 現在地点
- recordCount: **1284**
- latestRecordAdded: **天晴！モグモグ風林火山〜全国制覇版〜**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-05-20_appare-mogumogu-fuurinkazan-zenkoku-seiha.md`
- chronologicalFrontier: **2019-05-20**
- frontierLatestMachine: **天晴！モグモグ風林火山〜全国制覇版〜 — No.1284**
- schema: **resetBehavior v0.7**
- status: **2019-05-20_GROUP_OPEN_1_OF_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1283を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- mainは直前表示より進んでおり、No.1283 `パチスロ ボンバーパワフルIII`、2019-05-07群CLOSEDを正本として継続した。
- 2019-05-08〜05-19境界監査で、日刊スポーツ当時導入カレンダーに5/13 `咲桜弁慶` を発見。ただしグリーンべるとは5/12納品予定、ちょんぼりすたは旧5/13を取消して6/17へ更新、HAZUSEも導入開始2019-06-17。実導入時系列では延期機として6/17候補へ保留し、5/13レコードとして挿入しない。
- そのため実導入の次群2019-05-20へ進み、`天晴！モグモグ風林火山〜全国制覇版〜` をNo.1284として性能コア + resetBehavior v0.7で登録。
- NETプレス / グリーンべると / HAZUSE / パチマガスロマガ / P-WORLD / 当時解析複数を横断。
- 5/20群は当時資料で少なくとも `天晴！モグモグ風林火山〜全国制覇版〜 / ハナビ通 / ぱちスロ 冬のソナタ` の3機を確認。群はOPEN。

## No.1284 — 天晴！モグモグ風林火山〜全国制覇版〜
- manufacturer: **ネット**
- formalModel: **`S天晴！モグモグ風林火山NI`**
- certificationNumber: **`9S0064`**
- generation/system: **6号機 / AT / 疑似ボーナス / 技術介入 / 6段階設定**
- releaseDate: **2019-05-20**
- 市場想定機械割: **97.8 / 98.2 / 99.0 / 99.9 / 101.0 / 103.0%**
- 完全攻略時: **100.8 / 101.2 / 102.2 / 103.0 / 104.1 / 106.3%**
- 全国制覇+再起ノ刻初当たり合算: **1/485.6 / 1/482.7 / 1/475.9 / 1/468.0 / 1/455.4 / 1/434.6**
- BIG: **1/181.4 / 1/180.1 / 1/174.2 / 1/169.0 / 1/163.2 / 1/152.2**
- REG: **1/485.3 / 1/454.5 / 1/415.3 / 1/383.1 / 1/343.5 / 1/289.9**
- ボーナス合算: **1/132.1 / 1/129.0 / 1/122.7 / 1/117.3 / 1/110.6 / 1/99.8**
- baseGamesPer50: **約43.6G**
- netIncrease: **約2.9〜3.0枚/G**（丸め表記差を保持）
- BIG: **約150枚+α** / REG: **約46枚**
- 天下泰平モード: **32G / ボーナス1回以上保証 / ループ期待度約86%**
- 全国制覇1回の期待枚数: **約1,000枚**

### resetBehavior v0.7
- settingChange: **天井進行RESET / 高確スタート / 獲得領土・おみくじpt再抽選**。実践上は野営ステージ開始資料あり。
- carryOver: 据え置き単独を純電断と分離した直接契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycle: **天井進行 / 状態 / 獲得領土 / おみくじptをCARRY_OVER**。朝一表示は領土「残り？国」、おみくじpt「残り99pt」とする解析あり。
- gameCounterReset: 設定変更=RESET / 純電断=CARRY_OVER。規定Gは有利区間開始時に抽選される構造。
- ceilingAfterReset: 専用短縮天井は確認なし。通常天井定義は約500G・最大約580G vs 平均約432.2G・最大550Gの資料差があり `CONFLICT_CEILING_DEFINITION`。
- mode/stateAfterReset: 設定変更=高確 + 領土/pt再抽選、純電断=引継ぎ。
- advantageousSectionReset: 有利区間開始時に初期領土を抽選。再起ノ刻失敗後等で有利区間RESETを確認。
- resetBenefits: **高確スタート** + 初期領土抽選。
- resetPenalties: 前日の天井進行・領土・おみくじptを失う。
- resetDetection: 数G後に表示される残り領土数と前日値の一致/不一致が推測材料。本機固有ガックン確定条件は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 有利区間開始時の初期領土振り分け公開値あり。設定6では0国91.92%、1国3.91%、2国2.34%、3国1.56%、4〜6国各0.02%、7国0.20%。設定1〜5を含む全表はレコード本体へ保存。初期おみくじptは98pt 6.25%, 88pt 50.00%, 78pt 25.00%, 68/58/48pt 各6.25%。

## qualityNotes / conflicts
- `CONFLICT_CEILING_DEFINITION_APPROX_500_MAX_580_VS_AVG_432_2_MAX_550`。固定1点天井ではなく規定G抽選・液晶表示・前兆の定義差を含むため平均化しない。
- 純増約2.9 / 約3.0枚/Gは丸め表記差として両方保持。
- `咲桜弁慶` は `PLANNED_2019_05_13_BUT_ACTUAL_2019_06_17` として境界監査メモに保持し、6/17到達時に独立レコード化する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalized: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: main上の導入時系列でPIKASLO直後の未QAレコードを特定して継続。本線前進を優先。

## 2019-05-20群 — OPEN
### 登録済み
- No.1284 天晴！モグモグ風林火山〜全国制覇版〜

### 未処理確認済み
- ハナビ通（アクロス）
- ぱちスロ 冬のソナタ（京楽）

### 群監査メモ
- 日刊スポーツ2019-05-10導入カレンダーは5/20にモグモグ / 冬のソナタを掲載。
- 2019新台カレンダーおよび複数導入資料でハナビ通も2019-05-20を確認。
- 群は未CLOSE。3機処理後に別型式・別スペック・PB・地域差を再監査する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1284を再取得。
2. **2019-05-20群未処理 `ハナビ通` をNo.1285候補**として性能コア + resetBehavior v0.7で処理。
3. 続いて `ぱちスロ 冬のソナタ` を処理。
4. 5/20群を全メーカー / 別型式 / 別スペック / PB / 地域差まで最終監査してCLOSED可否判定。
5. 6/17到達時には延期確認済み `咲桜弁慶` を漏らさず候補へ戻す。

## 主要出典 — 取得日 2026-09-11
### 天晴！モグモグ風林火山〜全国制覇版〜
- NETプレス: https://www.dreamnews.jp/press/0000191141/
- グリーンべると: https://web-greenbelt.jp/00011174/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0064/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/9S0064/genre/209/
- HAZUSE 初打講座: https://hazuse.com/machine/pachislot/9S0064/genre/203/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/176/h.php
- パチマガスロマガ初当たり: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/176/h-1.php
- 朝一解析: https://oslo-opachi.com/2019/05/22/mogumogu-tennjou/
- スロットセブン: https://slot-seven.com/apparemogumoguhurinkazan-settei/
- すろぱちくえすと: https://www.slopachi-quest.com/article/mogumogu-zennkokuseiha-tennjou/
- P-WORLD: https://www.p-world.co.jp/machine/database/8919

### 境界 / 次群
- 日刊スポーツ導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201905100000340.html
- 咲桜弁慶 HAZUSE: https://hazuse.com/machine/pachislot/8S0064/
- 咲桜弁慶 ちょんぼりすた: https://chonborista.com/slot/border/81327/
- 咲桜弁慶 グリーンべると: https://web-greenbelt.jp/00011192/
- 2019新台カレンダー: https://moge-site.com/new-slot2019
