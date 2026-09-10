# スーパードラゴン

recordNo: 1289
machineName: スーパードラゴン
manufacturer: ネット（NET）
formalModel: SスーパードラゴンNO
certificationNumber: 9S0197
releaseDate: 2019-06-17
generation: 6号機
systemType: AT / 疑似ボーナス連荘タイプ

## payoutRateBySetting

| 設定 | 機械割 / 出玉率 |
|---|---:|
| 1 | 97.7% |
| 2 | 98.9% |
| 3 | 100.4% |
| 4 | 102.3% |
| 5 | 103.9% |
| 6 | 107.5% |

HAZUSE、一撃、すろぱちくえすと、ぱちんこキュレーション等で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 赤7初当たり | ボーナス合算 |
|---|---:|---:|
| 1 | 1/391.6 | 1/125.2 |
| 2 | 1/308.7 | 1/119.1 |
| 3 | 1/365.6 | 1/114.8 |
| 4 | 1/276.5 | 1/107.4 |
| 5 | 1/320.5 | 1/100.1 |
| 6 | 1/233.9 | 1/92.2 |

丸め掲載では初当たり1/392・1/309・1/366・1/277・1/320・1/234、合算1/125・1/119・1/115・1/107・1/100・1/92。精密値はHAZUSE、丸め値は複数解析で照合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約43.2G/50枚

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナスAT純増: 約2.8枚/G

NET公式は本機を2019年6月製品として掲載し、一撃最大1,999枚・龍宮ゾーン約70%を公表。純増2.8枚/Gは複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_PRODUCT_CONTEXT

## basicPayout

- 赤7ボーナス（通常初当たり）: 100〜998枚
- ドラゴンボーナス（連荘時）: 100〜1999枚
- ボーナス後は7Gの龍宮ゾーンへ移行。ボーナス引き戻し期待度は概ね約70%（設定別解析では64.0〜71.2%）。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / OFFICIAL_CONTEXT

## modeSpecificMinimumData

- 通常時は固定天井と、内部ゲーム数ストック/放出を反映する加算天井の2系統。
- モード別最大天井: 通常=997G+α、ミドル（HAZUSE表記では通常B）=997G+α、ドラゴン=998G+α、連（天国）=127G+α。
- 加算側ポイント上限は通常/ミドル/ドラゴンで最大998pt、連で127ptとする解析がある。
- 龍宮ゾーン後/有利区間移行後からのカウントのため、ホールのデータカウンター表示では1000Gを超える場合がある。したがって「最大998G+α」と表示G数を混同しない。
- ドラゴンモードで当選した場合は昇龍発生濃厚。
- 全天井振り分け・全加算抽選は完全再現用詳細のため収集対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_CORE_RESET_RESEARCHED

- settingChangeBehavior: 設定変更時は天井までの内部ゲーム数/加算カウンターをRESET、モードを再抽選し、非有利区間から開始。有利区間ランプは消灯状態となる。本機専用解析で直接確認。
- carryOverBehavior: 据え置き単独条件を純電源OFF→ONから完全に分離した本機固有契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。ただし純電断時に天井・モード・有利区間を引き継ぐ直接資料、および朝一ランプ点灯=据え置き濃厚という複数解析があるため、実務上の据え置き挙動はCARRY_OVER側と整合する。推測で独立契約へ昇格しない。
- powerCycleBehavior: 電源OFF→ONのみでは天井ゲーム数/天井pt、モード、有利区間、有利区間ランプ状態をCARRY_OVER。台枠表示は朝一128G間「濃い青」系表示へなる資料があるため、外見表示の初期化と内部状態引継ぎを分離する。
- gameCounterReset: 設定変更=内部天井G/加算カウンターRESET。純電断=内部値CARRY_OVER。設定変更時は表示カウンター0。純電断後も表示上の見え方と内部値を混同しない。
- ceilingAfterReset: 設定変更専用の一律短縮天井は確認されていない。モード再抽選後、連モードなら最大127G+α、通常/ミドルは最大997G+α、ドラゴンは最大998G+α。さらに設定変更後は約37%で内部的に龍宮ゾーンへ移行するため、朝一短期当選期待は通常の天井短縮とは別の恩恵として管理。
- modeAfterReset: 設定変更時にモード再抽選。公開表では設定1の通常70.3% / ミドル14.8% / ドラゴン10.2% / 連4.7%。設定2〜6も設定別表が公開されているが、現行検索抽出ではHTMLの行結合セルが欠落して4列を完全復元できない行があるため、推測で欠損セルを埋めず、明示取得できる値のみ補助資料として扱う。設定変更後に龍宮ゾーンへ入らなかった場合もドラゴンモード選択が優遇される旨が複数解析で一致。
- stateAfterReset: 設定変更後は約37%で内部的に龍宮ゾーンへ移行。液晶上は内部滞在を直接判別できないとする当時解析あり。龍宮ゾーン非移行時は通常モード系再抽選へ進む。その他の独立した高確/低確状態のリセット専用公開振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- advantageousSectionReset: 設定変更=非有利区間へRESET。電源OFF→ON=有利区間をCARRY_OVER。通常時はCHANCE表示部の有利区間ランプが点灯するタイプで、ボーナス終了時にも非有利区間へ移るため「消灯=必ず設定変更」とはしない。
- resetBenefits: 設定変更後は約37%で内部龍宮ゾーンへ移行。龍宮ゾーン自体のボーナス期待度は概ね約70%（設定別解析64.0〜71.2%）。当時の実戦集計では新台初回10G以内42/263=15.9%という観測値もあるが、これは解析抽選値ではないため参考実測として定義分離。設定変更後はドラゴンモード選択率も通常の龍宮ゾーン終了後より優遇される資料がある。
- resetPenalties: 前日の天井進行・モード・有利区間を失う。設定変更専用の追加ペナルティ数値は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 朝一有利区間ランプ点灯=据え置き濃厚、消灯=設定変更濃厚という複数解析。設定変更以外でもボーナス終了時にランプが消灯するため `STRONG_CLUE_NOT_DETERMINISTIC`。本機固有のガックン確定条件/発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。台枠は電源OFF→ON/設定変更の双方で128G間濃い青系となるため、それ単独では変更判別に使えない。
- numericResetData: 設定変更後の内部龍宮ゾーン移行率=約37%。龍宮ゾーンのボーナス期待度=概ね約70%（解析上は設定別64.0〜71.2%）。設定1の設定変更時モード振り分け=通常70.3% / ミドル14.8% / ドラゴン10.2% / 連4.7%。連モード最大天井127G+α。新台初回の参考実測=10G以内42/263=15.9%（解析値とは別管理）。

### resetBehavior 再探索メモ

「スーパードラゴン / パチスロスーパードラゴン / SスーパードラゴンNO / 9S0197 / NET / ネット」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井G / 天井pt / モード / モード移行率 / 龍宮ゾーン / 有利区間 / 有利区間ランプ / ガックン / 37% / 10G」を組み合わせ、NET公式製品一覧、HAZUSE、一撃、すろぱちくえすと、ぱちんこキュレーション、モゲスロ、当時リセット実戦記事、後年整理資料を横断。設定変更/純電断の内部天井・モード・有利区間契約、ランプ挙動、約37%龍宮ゾーン恩恵まで固定。据え置きだけを純電断と完全分離した契約、本機固有ガックン率は直接資料を固定できず推測補完しない。

## qualityNotes / conflicts

- 天井表記は「999G」「最大998G」「998G+α」「データカウンター上1000G超の場合あり」が混在する。平均化せず、内部モード天井（最大998G+α）と表示カウンター基準の概括表記を定義分離。canonicalはモード別の997/998/127G+αを採用。
- リセット恩恵は解析値「約37%で内部龍宮ゾーン」と、実戦サンプル「新台初回10G以内42/263=15.9%」が一致しない。後者は全台が確実に同一条件という保証のない観測値なので `OBSERVED_SAMPLE_NOT_LOTTERY_RATE` として保持し、37%と平均しない。
- 設定変更時モード表は一撃/すろぱちくえすとに公開されるが、検索テキスト化で設定2〜6の行結合セルが欠落している。欠落列を100%差分から推定しない。設定1の4列は完全取得できるため公開朝一数値として採用。
- メーカーはNET公式製品一覧で確認。型式 `SスーパードラゴンNO` / 検定番号 `9S0197` はHAZUSEおよび後年機種DBで一致。

## sources

取得日: 2026-09-11

1. NET公式 製品情報
   - https://www.net-fun.co.jp/product/page/3
   - 2019年6月製品、スーパードラゴン、一撃最大1,999枚、龍宮ゾーン約70%。
   - reliability: OFFICIAL
2. HAZUSE スーパードラゴン 機種DB/天井・設定変更
   - https://hazuse.com/machine/pachislot/9S0197/
   - 型式SスーパードラゴンNO、検定番号9S0197、導入2019-06-17、設定別機械割/初当たり/合算、設定変更=天井・カウンターRESET/非有利区間/モード再抽選、電源OFF→ON=引継ぎ、モード別天井、AT基本性能。
   - reliability: ANALYSIS_DATABASE_HIGH
3. 一撃 スーパードラゴン
   - https://1geki.jp/slot/s_s_dragon/
   - 導入予定2019-06-17、純増2.8枚/G、設定別合算/機械割、赤7/ドラゴンボーナス基本性能、龍宮ゾーン約70%。
   - reliability: ANALYSIS_HIGH
4. 一撃 モード移行
   - https://1geki.jp/slot/s_s_dragon/43/
   - 設定変更時/龍宮ゾーン終了後モード抽選、モード別最大天井、設定変更時モード振り分け。
   - reliability: ANALYSIS_HIGH
5. すろぱちくえすと 基本/設定差
   - https://www.slopachi-quest.com/article/super-dragon-settei/
   - 2019-06-17、43.2G/50枚、純増2.8枚/G、設定別性能、設定変更時モード表。
   - reliability: ANALYSIS_CONTEMPORARY
6. すろぱちくえすと 天井/朝一
   - https://www.slopachi-quest.com/article/superdragon-tennjou/
   - 設定変更=天井G/pt RESET・ランプ消灯、電断=引継ぎ、設定変更後約37%龍宮ゾーン、朝一判別。
   - reliability: ANALYSIS_CONTEMPORARY
7. ぱちんこキュレーション
   - https://www.pachinko-curation.com/1181/
   - 2019-06-17、AT、43.2G/50枚、純増2.8枚/G、設定別性能、モード別天井。
   - reliability: ANALYSIS_SECONDARY
8. パチスロ ジゴク耳 リセット恩恵/実戦集計
   - https://suropatizamuraibuttagiri.com/2019/06/11/superdoragon-tenjyou-risetto/
   - 設定変更後約37%龍宮ゾーン、新台初回10G以内42/263=15.9%の参考観測。
   - reliability: ANALYSIS_CONTEMPORARY_OBSERVATION
9. おスロおパチおいでやす 朝一
   - https://oslo-opachi.com/2019/06/18/superdoragon_tennjyou/
   - 約37%龍宮ゾーン、10G以内理論期待の説明、ランプ変更判別、朝一台枠表示。
   - reliability: ANALYSIS_CONTEMPORARY
10. パチスロメソッド 後年整理
   - https://slotmethod.jp/archives/13123/
   - 内部最大天井/pt、リセット時約37%、有利区間ランプ判別。
   - reliability: RETROSPECTIVE_ANALYSIS

missingFields:
- 据え置き単独を純電断と完全分離した本機固有契約: UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION
- 本機固有ガックン発生率/確定条件: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 検索テキスト化で欠落した設定2〜6の設定変更時モード表セル: SOURCE_RENDERING_INCOMPLETE_DO_NOT_INFER

conflicts:
- INTERNAL_CEILING_DEFINITION_997_998_PLUS_ALPHA_VS_SUMMARY_999G_VS_VISIBLE_COUNTER_CAN_EXCEED_1000G — 定義分離、平均しない。
- RESET_RYUGU_RATE_37_PERCENT_ANALYSIS_VS_FIRST_HIT_WITHIN_10G_OBSERVED_15_9_PERCENT — 抽選解析値と実測サンプルを別定義で保持。
