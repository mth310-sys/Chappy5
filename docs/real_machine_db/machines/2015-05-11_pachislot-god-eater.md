# パチスロ ゴッドイーター

machineName: パチスロ ゴッドイーター
manufacturer: 山佐
releaseDate: 2015-05-11
releaseDatePrecision: exact_hall_start
releaseDateNote: 山佐公式機種情報は2015年5月稼働。メーカー発表文を転載した4Gamer/娯楽産業が2015-05-11「本日より稼働開始」と明記し、K-Navi・HAZUSEも2015-05-11導入開始で一致するため実ホール導入日をcanonical固定。事前資料の2015-05-10納品予定とは定義分離する。
generation: 5号機
systemType: AT / ゲーム数管理+CZ
modelName: パチスロゴッドイーターCC
inspectionNumber: 4S0713
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CONFLICT

## identity

- メーカー: **山佐**。
- 型式名: **パチスロゴッドイーターCC**。
- 検定番号: **4S0713**。
- ホール導入開始: **2015-05-11**。
- 山佐公式は5号機・ATタイプ・2015年5月稼働を確認。4Gamer掲載のメーカー発表文は2015-05-11を「本日より稼働開始」と明記。
- confidence: OFFICIAL + INDUSTRY + DATABASE_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.8% |
| 3 | 101.5% |
| 4 | 104.7% |
| 5 | 109.1% |
| 6 | 116.0% |

- 当時解析、後年DB、設定判別DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

主要初当たりはAT「アラガミバースト」。

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/282.5 |
| 2 | 1/264.8 |
| 3 | 1/245.0 |
| 4 | 1/219.1 |
| 5 | 1/206.9 |
| 6 | 1/172.7 |

- 2015年系解析・2-9伝説系整理・パチナビ等で上記系列を確認。
- pacnkのみ設定2を **1/264.5** と掲載するため、設定2は `CONFLICT_264_8_VS_264_5` として平均せず保持。canonicalは複数系統で一致する1/264.8。
- CZ「殲滅モード」初当たりは設定1〜6で **1/364.1 / 304.9 / 369.6 / 272.9 / 379.9 / 247.3**。朝一状態差の解釈に有用なため補助保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE; CONFLICT_FOR_SETTING2_MINOR_SOURCE_DIFFERENCE

## baseGamesPer50

- **約31G/50枚（千円）**。
- 当時事前業界系資料、ちょんぼりすた等で一致。
- confidence: INDUSTRY_SINGLE + ANALYSIS_MULTI_SOURCE

## netIncrease

- AT「アラガミバースト」: **約2.4枚/G**。
- 山佐公式機種情報、メーカー発表文、P-WORLD、パチマガスロマガで一致。
- confidence: OFFICIAL + INDUSTRY + DATABASE_HIGH

## basicPayout

- AT「アラガミバースト」初当たり: **40G or 100G + ストーリー12G**。
- 赤7シングル揃い: 基本40G開始。
- 赤7ダブル揃い: 基本100G開始。
- CZ「殲滅モード」: **10G+α**、AT期待度約50%。
- AT中「神機解放」: ゲーム数上乗せ特化。
- 「特務ウロヴォロス討伐戦」: 15G（フリーゲーム除く）、勝利ストック特化。
- confidence: OFFICIAL + P-WORLD + ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時モード: **通常A / 通常B / 通常C（天国準備） / 天国 / 超天国**。
- モード別最大天井:
  - 通常A: **777G**
  - 通常B: **777G**
  - 通常C（天国準備）: **384G**
  - 天国: **96G**
  - 超天国: **32G**
- AT間最大777GでAT当選。700G以降当選時はATレベル振り分け優遇とする解析あり。
- CZ「殲滅モード」は10G+α、期待度約50%。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_MACHINE_SPECIFIC_POWER_CYCLE_MODE_STATE_AND_DETECTION
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をリセット**。
- **モードを再抽選**。
- **CZ当選率に関係する内部状態を再抽選**。
- 朝一液晶ステージは **エントランス**。
- 通常天井そのものを固定短縮するリセット専用仕様ではなく、再抽選されたモードに応じて32/96/384/777Gの最大天井が決まる。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 設定据え置きでは、前日からの内部ゲーム数を利用した宵越し天井狙いが当時実戦/攻略で運用されており、**天井ゲーム数CARRYOVER**を支持。
- モード/内部状態の据え置き契約は、純電源ON/OFF表で「引き継ぐ」と明示されるため、通常のホール据え置き（設定変更なし+日次電断）では **モード・状態ともCARRYOVER**として扱う。
- 店側が別操作を行う特殊ケースは対象外。
- confidence: ANALYSIS_HIGH_FOR_DAILY_UNCHANGED_OPERATION

### powerCycleBehavior

- 設定変更なしの **電源OFF→ON**:
  - 天井までのゲーム数: **引き継ぐ**
  - モード: **引き継ぐ**
  - 内部状態: **引き継ぐ**
  - 液晶ステージ: **エントランス**
- 本機固有の設定変更/電源ON-OFF比較表で確認。
- confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC

### gameCounterReset

- 設定変更: **RESET_TO_0 / 規定G再抽選側へ移行**。
- 据え置き: **CARRYOVER**。
- 純電源OFF→ON: **CARRYOVER**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- 通常最大天井: **777G**。
- 設定変更専用の一律短縮天井は **NONE_CONFIRMED**。
- ただし設定変更時モード再抽選により、通常Cなら384G、天国なら96G、超天国なら32Gが最大天井となるため、**MODE_DEPENDENT_EARLY_CEILING_EXISTS**。
- 「リセットで777Gより固定短縮」とは扱わない。

### modeAfterReset

設定変更時モード選択率:

| 設定 | 通常A | 通常B | 通常C（天国準備） | 天国 | 超天国 |
|---:|---:|---:|---:|---:|---:|
| 1 | 35.0% | 30.0% | 15.0% | 19.9% | 0.1% |
| 2 | 35.0% | 30.0% | 15.0% | 19.5% | 0.5% |
| 3 | 30.0% | 30.0% | 17.5% | 22.4% | 0.1% |
| 4 | 30.0% | 30.0% | 17.5% | 22.0% | 0.5% |
| 5 | 25.0% | 30.0% | 20.0% | 24.9% | 0.1% |
| 6 | 24.5% | 30.0% | 20.0% | 25.0% | 0.5% |

- 一部資料は通常Cを **天国準備** と呼ぶ。通常C最大384Gかつ次回天国以上へ繋がるモードとして同定。
- 電源OFF→ONではモード引継ぎ。
- confidence: ANALYSIS_HIGH_FOR_RESET_TABLE + ANALYSIS_HIGH_FOR_NAMING_EQUIVALENCE

### stateAfterReset

設定変更時の内部状態選択率（通常 / 高確）:

| 設定 | 通常 | 高確 |
|---:|---:|---:|
| 1 | 80.0% | 20.0% |
| 2 | 70.0% | 30.0% |
| 3 | 80.0% | 20.0% |
| 4 | 60.0% | 40.0% |
| 5 | 80.0% | 20.0% |
| 6 | 50.0% | 50.0% |

- 高確はCZ「殲滅モード」当選抽選を優遇。
- 偶数設定ほど高確選択が優遇され、設定6は50%。
- 電源OFF→ONでは内部状態引継ぎ。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 一律の天井短縮はないが、モード再抽選により **設定1・2でも天国以上20.0%**、設定3・4は22.5%、設定5は25.0%、設定6は25.5%。天国96G/超天国32Gのため朝一早当たり要素になる。
- 通常C（天国準備）も15.0〜20.0%で最大384G。
- 設定変更時の高確選択率は設定1/3/5が20%、設定2=30%、設定4=40%、設定6=50%。
- ただし当時リセット実践値では「強力な一律リセット恩恵はない」と評価されており、固定天井短縮機として扱わない。

### resetPenalties

- 設定変更により **前日までの天井ゲーム数進行と滞在モード/状態が消滅**するため、前日ハマりを利用する宵越し狙いには不利。
- それ以外の設定変更専用出玉ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **ガックン判別の当時実機検証あり**。朝一1G目でガックンあり→設定変更濃厚、ガックンなし→据え置き濃厚とする実戦動画/記事を確認。
- 朝一にレア役を引かず **カフェステージ**へ移行した場合も設定変更可能性アップとする解析あり。設定変更時高確選択の存在と整合。
- ガックンはホール側の1G回し等で対策可能なため `PROBABILISTIC_NOT_CERTAIN`。単独で確定判別とはしない。
- 液晶は設定変更/電源ON-OFFともエントランス開始のため、初期ステージ単独では判別不可。
- confidence: PERIOD_OBSERVATIONAL_FOR_GAKKUN + ANALYSIS_HIGH_FOR_CAFE_HINT

### numericResetData

- 設定変更時モード:
  - 通常A **24.5〜35.0%**
  - 通常B **30.0%**
  - 通常C（天国準備） **15.0〜20.0%**
  - 天国 **19.5〜25.0%**
  - 超天国 **0.1〜0.5%**
- 天国以上合成: **20.0 / 20.0 / 22.5 / 22.5 / 25.0 / 25.5%**。
- 設定変更時高確: **20 / 30 / 20 / 40 / 20 / 50%**。
- モード別最大天井: **777 / 777 / 384 / 96 / 32G**。
- リセット専用固定短縮天井: **NONE_CONFIRMED**。
- 設定変更時ゾーン実践値は存在するが解析契約ではなく観測値のため、固定数値としてcanonical化しない。

## release group / boundary audit

- 前HANDOFFの指示に従い、**2015-04-21〜05-10**を「具体日 + パチスロ/スロット/新台/導入」で再監査。
- 04-27検索では旧機種「うる星やつら2」のAndroidアプリ配信が強くヒットするが、実機新台ではないため除外。
- 同期間で実ホール導入日を強く固定できる未登録5号機を今回確認できず、`2015-04-21_TO_2015-05-10_CLOSED_FOR_CURRENT_RESEARCH`。
- 次の強い実機アンカーは **2015-05-11**。
- 2015-05-11同日には本機以外に **エマ「めんそーれ2-30」**の導入資料があるため、`2015-05-11_GROUP_OPEN`。次回は同機のidentity/独立機種性を固定して処理し、その後同日群を全メーカー横断で閉鎖監査する。

## conflict / source control

- AT初当たり設定2は主要複数資料 **1/264.8** に対しpacnk **1/264.5**。平均せず `CONFLICT_SETTING2_AT_264_8_VS_264_5`。
- モード名称「通常C」と「天国準備」は、通常C=最大384Gかつ天国準備モードと明記する資料により同一モードの表記差として統合。数値CONFLICTではない。
- 2015-05-10は納品予定、2015-05-11は実ホール稼働開始として定義分離。
- 2024年スマスロ「ゴッドイーター リザレクション」の600Gリセット天井・有利区間・偏食因子等は本レコードへ転記しない。

## sources

取得日: **2026-09-07**

### OFFICIAL / INDUSTRY

1. 山佐ネクスト「パチスロ ゴッドイーター」
   - https://yamasa-next.co.jp/model_gde/
   - 5号機、ATタイプ、2015年5月稼働、ゲーム性。
2. 4Gamer（山佐メーカー発表文転載）
   - https://www.4gamer.net/games/301/G030129/20150511064/
   - 2015-05-11「本日より稼働開始」、ATゲーム性。
3. 娯楽産業「山佐 iOS＆Android『パチスロ ゴッドイーター』」
   - https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80ios%EF%BC%86android%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B4%E3%83%83%E3%83%89%E3%82%A4%E3%83%BC%E3%82%BF%E3%83%BC%E3%80%8D%E3%82%B7%E3%83%9F%E3%83%A5%E3%83%AC/
   - 2015-05-11稼働開始。
4. 当時新機種資料（スロスター）
   - https://ameblo.jp/slostar/entry-11996356367.html
   - 2015-05-10納品予定、ベース約31G/千円。

### DATABASE / ANALYSIS

5. K-Navi「パチスロ ゴッドイーター」
   - https://p-kn.com/slot/2240/
   - 2015-05-11ホール導入開始、AT/天井。
6. HAZUSE「パチスロ ゴッドイーター」
   - https://hazuse.com/machine/pachislot/4S0713/
   - 型式パチスロゴッドイーターCC、検定4S0713、2015-05-11。
7. P-WORLD「パチスロ ゴッドイーター」
   - https://www.p-world.co.jp/machine/database/7641
   - 5号機AT、純増約2.4枚/G、40/100G+ストーリー12G、CZ10G+α。
8. パチマガスロマガ「パチスロ ゴッドイーター」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/202/a.php
   - 山佐/2015年5月、純増約2.4枚/G、AT基本性能。
9. パチスロ収支アップ「ゴッドイーター解析攻略」
   - https://smaslo.man-soft.com/slot-kaiseki/godeater.html
   - 機械割、AT初当たり、天井、設定変更/電源ON-OFF比較、設定変更時モード・状態振り分け。
10. すろぱちくえすと「ゴッドイーター 朝一設定変更・リセット時の恩恵とゾーン実践値」
   - https://www.slopachi-quest.com/article/god-eater-reset/
   - 2015-05-16当時記事、設定変更時状態20/30/20/40/20/50%、朝一実践値。
11. 2-9伝説「ゴッドイーター」
   - https://29den.com/godeater/
   - 通常C=天国準備、モード別天井、機械割、AT初当たり、設定変更天井Gリセット。
12. 2-9伝説「ゴッドイーター サブ液晶セリフのモード示唆」
   - https://2-9densetsu.com/godeater-serif/
   - 通常Cは天井384Gの天国準備モード。
13. パチナビ「パチスロ ゴッドイーター 設定判別」
   - https://pachinavi.net/machines/god-eater/settei/
   - 機械割、AT初当たり、CZ初当たり、設定変更時状態振り分け。
14. pacnk「パチスロ ゴッドイーター 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_godeater.html
   - 機械割、AT/CZ初当たり。設定2 AT 1/264.5の競合値。
15. ちょんぼりすた「ゴッドイーター」
   - https://chonborista.com/slot/yamasa-slot/6854/comment-page-18/
   - 機械割、AT初当たり丸め値、約31G/50枚、導入2015-05-11。
16. 真パチスロ備忘録「ゴッドイーター ガックン判別成功」
   - https://sin-surobi.com/godeater/11805/
   - 2015年当時の実機ガックン検証、宵越し実戦。
17. 2015年導入スロット新台情報まとめ
   - https://slotnews777.blog.fc2.com/blog-entry-2348.html
   - 2015-05-11「めんそーれ2-30」「ゴッドイーター」の導入日確認、同日群監査用。

## missingFields

- setting2ATInitialHitExactDefinition: CONFLICT_264_8_VS_264_5
- resetGakkunCertainty: PROBABILISTIC_NOT_CERTAIN_DUE_TO_HALL_COUNTERMEASURES

## conflicts

- `CONFLICT_SETTING2_AT_INITIAL_HIT`: **1/264.8** (multi-source canonical) vs **1/264.5** (pacnk). Do not average.
