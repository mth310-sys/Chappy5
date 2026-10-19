# パチスロ黄門ちゃま 喝

machineName: パチスロ黄門ちゃま 喝
manufacturer: オリンピア
releaseDate: 2015-01-19
releaseDatePrecision: multi_source_hall_start
releaseDateNote: HAZUSE・パチ&スロ必勝本・K-Navi系資料で2015-01-19導入を照合。2014-11-06グリーンべるとは発表展示会記事のため、発表日とホール導入日を分離。
generation: 5号機
systemType: AT / 310カウンター+CZ+ゲーム数上乗せAT
modelName: パチスロ黄門ちゃま喝D1
inspectionNumber: 4S0696
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- オリンピア製。グリーンべると2014-11-06記事で平和発表・オリンピア製を確認。
- HAZUSEで型式名 **パチスロ黄門ちゃま喝D1**、検定番号 **4S0696**、導入開始日 **2015-01-19** を確認。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.9% |
| 3 | 100.2% |
| 4 | 104.6% |
| 5 | 108.5% |
| 6 | 113.3% |

- HAZUSE、パチ&スロ必勝本、パチスロ解析ガイド、後年整理資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/285.3 |
| 2 | 1/271.9 |
| 3 | 1/256.6 |
| 4 | 1/221.6 |
| 5 | 1/196.1 |
| 6 | 1/168.5 |

- HAZUSE、パチ&スロ必勝本、パチスロ解析ガイド等で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30.1G / 50枚**。
- HAZUSE掲載値。
- confidence: ANALYSIS_SINGLE_STRONG_DB

## netIncrease

- AT「水戸YELLOW GATE」: **純増約2.5枚/G**。
- グリーンべると、パチマガスロマガ、パチスロ解析ガイドで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- AT「水戸YELLOW GATE」で出玉を増やすAT機。
- AT突入時・AT中の上乗せは主に「印籠チャンス」を経由。
- 印籠チャンスでは複数の上乗せタイプから抽選方式を選択する構造。
- 物差し用途に不要な上乗せ詳細振り分けは収集対象外。

## modeSpecificMinimumData

- 通常時は左右の310（みと）カウンターを貯め、310pt到達時にCZ/AT抽選。
- 通常AT間天井: **999G**。到達でAT当選、天井恩恵として「倍ちゃんっす」成功確定とする当時解析あり。
- 設定変更時初回天井: **777G**。
- CZが初当たり構造上重要。K-Navi系解析では御一行チャレンジ/ラブラブお銀デートを搭載。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: VERIFIED_MULTI_SOURCE_STRONG_RESET_BEHAVIOR
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は内部天井Gをリセット。
- 左右310カウンターの内部ポイントを再抽選。
- 内部状態（高確）を再抽選。
- 朝一は河川敷ステージ開始とする当時解析あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は左右310カウンター内部ポイントを前日から引き継ぐ。
- 据え置き時は内部状態も前日の状態を引き継ぐとする当時解析あり。
- 液晶上のカウンター表示は朝一ゼロクリアされるため、見た目と内部値が一致しない場合がある。
- 天井Gの据え置き引継ぎは宵越し狙い資料で支持されるが、今回取得できた明示性はポイント/状態ほど強くないため `CARRYOVER_SUPPORTED` とする。
- confidence: ANALYSIS_HIGH_FOR_POINT_AND_STATE / ANALYSIS_SUPPORT_FOR_GAME_COUNTER

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでも朝一は河川敷ステージ開始とする本機専用解析を確認。
- 液晶上の310カウンター表示はゼロクリアされるが、据え置き時は内部ポイントを引き継ぐ。
- 純電源OFF→ONだけを独立条件として天井内部G・全内部状態まで直接対照した一次/高信頼表形式資料は今回固定できず、その部分は `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_DISPLAY/STAGE / UNVERIFIED_FOR_FULL_INTERNAL_CONTRACT

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き時: **CARRYOVER_SUPPORTED**。
- power cycle only: `UNVERIFIED_AFTER_RESEARCH`（内部天井Gを直接対照した資料不足）。

### ceilingAfterReset

- 通常時天井 **999G** → 設定変更後初回は **777G** に短縮。
- 天井到達時はAT当選。777Gリセット天井でも天井恩恵対象とする当時解析あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- 本機は左右310カウンター内部ポイントを設定変更時に再抽選する。
- 「設定変更専用モード」という独立モード名称/全モード振り分けは今回の5号機初代資料では安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

設定変更時の高確移行率:

| 設定 | 高確移行率 |
|---:|---:|
| 1 | 25.0% |
| 2 | 27.5% |
| 3 | 30.0% |
| 4 | 35.0% |
| 5 | 40.0% |
| 6 | 50.0% |

- 据え置き時は前日の状態を引き継ぐとする当時解析を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 初回天井が999Gから **777Gへ短縮**。
- 設定変更時は高確を再抽選し、設定1でも25%、設定6で50%の高確スタート。
- 規定ゲーム数による「喝ゾーン」抽選が朝一リセット後に優遇される解析あり。特に10G到達時は設定1～3で25%、設定4～6で40%とする当時資料を確認。

### resetPenalties

- 310カウンター初期内部ポイントは設定1平均約51ptで、当時解析では通常狙いと比べ強い恩恵とは言いにくい旨の評価あり。
- 「設定変更専用の冷遇モード」のような独立契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一10G付近で喝ゾーンへ突入した場合、設定変更期待が上がるとする当時解析あり。
- 据え置きでは内部310ポイントを引き継ぐ一方、液晶表示は0ptへ戻るため、310未満の見た目で突然ルーレットが発動する挙動は据え置き/内部ポイント推測材料になる。
- 河川敷ステージは設定変更/電源OFF→ON双方で開始する資料があるため、それ単独では変更判別に使えない。
- 本機固有のリールガックン契約は検索語・資料系統を変えて再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- リセット後天井: **777G**（通常999G）。
- 設定変更時高確移行: **25.0 / 27.5 / 30.0 / 35.0 / 40.0 / 50.0%**。
- 設定変更時310カウンター初期平均ポイント: **51 / 55 / 59 / 63 / 67 / 71pt**（設定1→6）。
- 朝一10G到達時の喝ゾーン当選率: **設定1～3 25% / 設定4～6 40%** とする当時解析あり。

### publicMorningNumbers

- **777G**: 設定変更後初回天井。
- **25.0～50.0%**: 設定変更時高確移行率。
- **平均51～71pt**: 設定変更時310カウンター初期ポイント。
- **25% / 40%**: 朝一10G到達時喝ゾーン当選率（設定1～3 / 設定4～6）。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `黄門ちゃま喝 / パチスロ黄門ちゃま 喝 / 黄門ちゃま 喝 / パチスロ黄門ちゃま喝D1 / オリンピア / 平和`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / 777G / 999G / 310 / ポイント / 高確 / 喝ゾーン / ガックン / 河川敷 / 50枚 / ベース`。
- 資料系統: 業界記事、HAZUSE、旧パチマガスロマガ、パチ&スロ必勝本、K-Navi、当時天井/リセット解析、後年整理DB。
- 2022年「黄門ちゃま喝2」、6号機「KING黄門ちゃま」、女神盛など後継機の有利区間/電断仕様は初代5号機へ混入させていない。

## sources

取得日: 2026-09-07

1. グリーンべると: https://web-greenbelt.jp/00007370/
2. HAZUSE: https://hazuse.com/machine/pachislot/4S0696/
3. パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/2499/1/49299
4. パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/118/a.php
5. K-Navi ゲームフロー: https://p-kn.com/slot/2165/52817/
6. スロパチクエスト 朝一設定変更: https://www.slopachi-quest.com/article/koumon-chama-reset/
7. 期待値見える化 朝一挙動: https://slotjin.com/slot/koumonnchama-reset/
8. スロパチクエスト 天井/スペック: https://www.slopachi-quest.com/article/koumonnchama/
9. パチスロ解析ガイド: https://www.pachislot-guide.net/2015/koumonchama-katsu/
10. パチナビ: https://pachinavi.net/machines/koumon-chama-katsu-1/

## missingFields

- 純電源OFF→ONだけを独立条件にした内部天井G・全内部状態の完全対照契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の独立モード名称/全モード振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有リールガックン契約: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts

- 今回、主要性能コアと主要resetBehavior数値に平均処理を要する明確な数値競合は確認なし。
- 後継機「黄門ちゃま喝2」の350G朝一天井・有利区間仕様は別機種のためCONFLICTではなく除外。
