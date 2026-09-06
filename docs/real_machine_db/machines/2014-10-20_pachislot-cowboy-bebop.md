# パチスロ カウボーイビバップ

machineName: パチスロ カウボーイビバップ
manufacturer: オリンピア
releaseDate: 2014-10-20
releaseDatePrecision: CONFLICT_EARLIEST_CONCRETE_2014_10_20_VS_2014_10_27
generation: 5号機
systemType: AT / ゲーム数上乗せ / CZ / チャンス役ゲーム数管理
recordStatus: PARTIAL_CORE_WITH_RESET_BEHAVIOR_V0_7_AT_SETTING3_CONFLICT_AND_RELEASE_DATE_CONFLICT

## identity

- メーカー: **オリンピア**。
- 導入日: **CONFLICT 2014-10-20 vs 2014-10-27**。
  - K-Naviは **2014-10-20** をホール導入開始として掲載。
  - 2014-10-27公開の当時新台記事は **「本日（10月27日）導入予定」** と記載。
  - 2014-11-17公開のホール向け集計記事も **10/27 カウボーイビバップ** と整理。
- 本DBの時系列キーは、具体日として確認できる最古の **2014-10-20** を維持するが、全国導入日を一意に正規化せず `CONFLICT_RELEASE_DATE_2014_10_20_VS_2014_10_27` を保持する。
- 型式名: **パチスロカウボーイビバップC1**。中古実機DB複数系統で一致。
- 数字形式の検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: CONFLICT_FOR_RELEASE / SECONDARY_MULTI_SOURCE_FOR_MODEL_NAME

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.9% |
| 3 | 100.9% |
| 4 | 106.3% |
| 5 | 110.2% |
| 6 | 115.3% |

- K-Navi、P-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「スパイクRUSH」初当たり

| 設定 | K-Navi | P-WORLD |
|---:|---:|---:|
| 1 | 1/344.6 | 1/344.6 |
| 2 | 1/327.4 | 1/327.4 |
| 3 | **1/312.1** | **1/321.2** |
| 4 | 1/262.3 | 1/262.3 |
| 5 | 1/232.5 | 1/232.5 |
| 6 | 1/200.2 | 1/200.2 |

- 設定3のみ資料競合。平均せず双方を保持する。
- conflict: `CONFLICT_AT_INITIAL_SETTING3_1_312_1_VS_1_321_2`
- confidence: CONFLICT_FOR_SETTING3 / ANALYSIS_HIGH_MULTI_SOURCE_FOR_OTHERS

## baseGamesPer50

- **約31G/1000円（≒50枚）**。
- 2014-10-27公開の当時新台記事で直接確認。
- confidence: PERIOD_ANALYSIS_SINGLE

## netIncrease

- AT「スパイクRUSH」純増: **約2.5枚/G**。
- K-Navi、P-WORLD、旧パチマガスロマガ、当時新台情報で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「スパイクRUSH」: **AT初当たり時の賞金首RUSHで初期ゲーム数を決定するゲーム数上乗せ型**。
- 賞金首RUSHはシングル赤7で5G+α、ダブルで7G+α、SUPERで10G+α。最大継続率80%というK-Navi解析あり。
- プレミアム「TANK! BONUS」: **20G**の擬似ボーナス。突入時点で**初期100GのAT確定**。K-Naviでは7揃い確率1/7.5、P-WORLDでも20G・初期100G以上AT確定を確認。
- 物差し用途外の細かな上乗せ振り分けは収集しない。

## modeSpecificMinimumData

- 通常時はゲーム数管理された「COMBO CHANCE」で疑似チャンス役が最低2連以上し、CZ/AT抽選の契機となる。
- COMBO CHANCE周期は **1〜64G** とする当時解析あり。
- CZ「東風モード」AT期待度: **約35%**。
- 前兆「堕天使たちのバラッド」AT期待度: **約50%**。
- 通常AT間天井: **最大999G**。
- 後年天井DBではモードA/B 999G、C 650G、D 350G、E 100Gという整理があるが、全通常モード詳細は物差し用途外のため主要上限のみ保持。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_CORRECTED_PERIOD_SOURCE_AND_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数とCOMBOカウンターをRESET**。
- 設定変更時は通常天井999Gを基点とした**減算抽選**が行われる当時訂正版解析あり。
- **モードA確定**とする当時訂正版解析あり。
- AT当選時の初期ゲーム数決定「賞金首RUSH」は設定変更時に一定の優遇があるとする訂正版解析あり。

### carryOverBehavior

- 設定変更なしの据え置きでは、訂正版解析が「天井ゲーム数・COMBOカウンターは電源ON/OFFでは引き継ぐ」と明記しているため、**CARRYOVER_SUPPORTED**。
- 前日ゲーム数・前日COMBO周期の把握により、朝一の天井到達やCOMBO発生位置を変更判別材料にできる。

### powerCycleBehavior

- **設定変更なしの電源OFF→ONでは、天井ゲーム数・COMBOカウンターを引き継ぐ**とする当時訂正版解析あり。
- confidence: PERIOD_ANALYSIS_CORRECTED

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset

- 通常AT間最大天井は **999G**。
- 設定変更時は999Gを基点に百・十・一の各桁で独立した減算抽選が行われる解析。
- したがって固定の「○○G短縮天井」ではなく **VARIABLE_SHORTENING_BY_DIGIT_SUBTRACTION**。
- 2014-12-20に流布した「400G以内81.25%で天井当選」は後日、情報元の誤報として訂正されているためcanonicalには採用しない。

### modeAfterReset

- 設定変更時: **モードA確定（最低モード）**とする訂正版解析。
- 初報の「強い朝一ゲーム数解除テーブル」扱いは誤報訂正済みのため採用しない。

### stateAfterReset

- 設定変更時の低確/高確等の内部状態振り分けを直接固定できる本機固有資料は今回の再探索では **UNVERIFIED_AFTER_RESEARCH**。
- K-Naviには設定変更時状態移行率ページが存在することは確認できるが、現存取得経路では本文数値を安全に取得できなかったため推定転記しない。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 999G基点の減算抽選により、設定変更後は通常最大天井より早く天井到達する可能性がある。
- AT当選時の賞金首RUSHが一定優遇とする当時訂正版解析あり。
- ただし「400G以内81.25%」級の強恩恵は**誤報訂正済み**。

### resetPenalties

- 設定変更時は **モードA確定（最低モード）**とされる点を主要な不利要素として保持。
- それ以外の主要不利要素は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection

- **天井到達位置**: 前日G数が分かる場合、宵越し天井到達位置とのズレを変更推測に利用可能。天井到達時は「堕天使たちのバラッド」EXが判別材料になるという当時解析あり。
- **COMBOカウンター**: 設定変更でリセット、電源ON/OFFでは引継ぎ。COMBO CHANCE周期は1〜64Gのため、前日周期Gを把握していれば朝一の発生位置から変更を察知できる場合がある。
- 例として、前日COMBO間40Gなら据え置き時は残り最大24G相当のため、朝一でそれを超えてCOMBO CHANCEが発生しなければ変更を強く支持する、という当時攻略ロジックがある。
- 本機固有のガックン確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

設定変更後の天井減算抽選（百/十/一の位それぞれ）:

| 数字 | 百の位 | 十の位 | 一の位 |
|---:|---:|---:|---:|
| 0 | 37.50% | 37.50% | 37.50% |
| 1 | 25.00% | 25.00% | 25.00% |
| 2 | 12.50% | 12.50% | 12.50% |
| 3 | 6.25% | 6.25% | 6.25% |
| 4 | 1.56% | 3.13% | 3.13% |
| 5 | 1.56% | 3.13% | 3.13% |
| 6 | 6.25% | 3.13% | 3.13% |
| 7 | 1.56% | 3.13% | 3.13% |
| 8 | 1.56% | 3.13% | 3.13% |
| 9 | 6.25% | 3.13% | 3.13% |

- 各桁で選ばれた数を999Gから減算する方式として当時訂正版解析に掲載。
- 例: 2/0/1選択なら201G減算。

### publicMorningNumbers

- 上記**各桁減算率**を朝一比較可能な公開解析値として採用。
- 旧「400G以内81.25%」は `RETRACTED_PERIOD_REPORT` とし、朝一性能値として使用禁止。

## resetBehavior 再探索メモ

2026-09-07に再監査。

- 表記揺れ: `パチスロ カウボーイビバップ / カウボーイビバップ / COWBOY BEBOP / パチスロカウボーイビバップC1 / オリンピア / OLYMPIA`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / 減算 / モード / 状態 / ガックン / コンボカウンター / COMBO CHANCE / 50枚 / ベース / コイン持ち / 型式 / 検定`。
- 資料系統: K-Navi、P-WORLD、旧パチマガスロマガ、当時攻略ブログ、後年機種DB、中古実機型式DB、当時導入一覧。
- 重要: 2014-12-20公開の「400G以内81.25%」情報は、2014-12-29の同サイト訂正版で**誤報**と明記。旧値は性能値として採用しない。

## sources

取得日: 2026-09-07

1. K-Navi — パチスロ カウボーイビバップ
   - https://p-kn.com/slot/2130/
   - 2014-10-20、設定別AT初当たり、機械割、純増2.5枚/G、ゲーム性
   - reliability: ANALYSIS_DATABASE
2. P-WORLD — パチスロ カウボーイビバップ
   - https://www.p-world.co.jp/machine/database/7517
   - 5号機AT、設定別AT初当たり、機械割、純増2.5枚/G、TANK! BONUS 20G
   - reliability: INDUSTRY_DATABASE
3. パチマガスロマガ旧攻略
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/117/a.php
   - オリンピア/2014年10月、純増2.5枚/G、COMBO CHANCE概要
   - reliability: ANALYSIS_HIGH_ARCHIVE
4. すろぱちくえすと — 設定変更・リセット恩恵の真相が判明
   - https://www.slopachi-quest.com/article/cowboy-bebop-2/
   - 旧解析誤報訂正、天井/COMBOカウンターRESET、電源ON/OFF引継ぎ、999G減算抽選、モードA、判別
   - reliability: PERIOD_ANALYSIS_CORRECTED
5. すろぱちくえすと — 旧設定変更解析
   - https://www.slopachi-quest.com/article/cowboy-bebop-reset/
   - 400G以内81.25%等。後日誤報訂正のため RETRACTED_PERIOD_REPORT としてのみ保持
   - reliability: RETRACTED
6. パチスロ立ち回り講座 — 5号機天井一覧
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - AT間999G、設定変更後は天井Gクリア
   - reliability: SECONDARY_RETROSPECTIVE
7. 中一商事 — 中古実機DB
   - https://www.nakaiti.com/html/sOlympia019.html
   - 型式名 パチスロカウボーイビバップC1、5号機AT
   - reliability: SECONDARY_MACHINE_DATABASE
8. イニシャルP — 中古実機DB
   - https://initialp.cart.fc2.com/ca18/2136/
   - 型式名 パチスロ カウボーイビバップC1、5号機AT
   - reliability: SECONDARY_MACHINE_DATABASE
9. Slot-board RUSH — パチスロ「カウボーイビバップ」新台導入開始！
   - 2014-10-27公開。本日10月27日導入予定、千円ベース約31G、設定別性能を掲載。
   - reliability: PERIOD_ANALYSIS
10. パチ7 — ホールが考える甘い機種ランキング：2014年11月
   - 2014-11-17公開。10/20群をバーストエンジェル/スーパービンゴネオ、カウボーイビバップを10/27として整理。
   - reliability: PERIOD_INDUSTRY_MEDIA

## missingFields

- numeric inspection approval number: UNVERIFIED_AFTER_RESEARCH
- setting-change internal-state table numeric values: UNVERIFIED_AFTER_RESEARCH

## conflicts

- `CONFLICT_RELEASE_DATE_2014_10_20_VS_2014_10_27`
  - K-Navi: 2014-10-20。
  - 当時10/27新台記事・11/17ホール集計: 2014-10-27。
  - 全国一律導入/地域差/予定日の可能性があるため、一方を消さず保持。
- `CONFLICT_AT_INITIAL_SETTING3_1_312_1_VS_1_321_2`
  - K-Navi: 1/312.1
  - P-WORLD: 1/321.2
  - 平均せず双方を保持。
- `RETRACTED_RESET_400G_WITHIN_81_25_PERCENT`
  - 旧解析は後日の同サイト訂正版で誤報と明記。canonical resetBehaviorから除外。